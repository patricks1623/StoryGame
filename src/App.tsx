/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { GAME_DATA, PLOT_TWISTS, GameItem, Category, Genre, Difficulty } from './data/gameData';
import { 
  BookOpen, 
  Settings, 
  RefreshCw, 
  Clock, 
  Zap, 
  History, 
  CheckCircle2, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // --- STATE ---
  const [currentCard, setCurrentCard] = useState<GameItem | null>(null);
  const [history, setHistory] = useState<GameItem[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  const [genre, setGenre] = useState<Genre>('mix');
  const [showInstructions, setShowInstructions] = useState(true);
  const [timerActive, setTimerActive] = useState(false);
  const [initialTime, setInitialTime] = useState(60);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerFinished, setTimerFinished] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  // --- REFS ---
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // --- LOGIC ---

  const getRandomItem = (type: 'normal' | 'twist') => {
    let pool: GameItem[] = [];

    if (type === 'twist') {
      pool = PLOT_TWISTS;
    } else {
      // If it's the very first card (no history and no current card), force 'character'
      if (!currentCard && history.length === 0) {
        pool = GAME_DATA.filter(item => 
          item.category === 'character' && 
          (genre === 'mix' || item.genres.includes(genre) || item.genres.includes('mix'))
        );
      } else {
        // Filter by genre (mix includes all)
        pool = GAME_DATA.filter(item => 
          genre === 'mix' || item.genres.includes(genre) || item.genres.includes('mix')
        );

        // Filter out same category as previous (Critical Constraint)
        if (currentCard) {
          pool = pool.filter(item => item.category !== currentCard.category);
        }
      }
    }

    if (pool.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
  };

  const handleGenerate = () => {
    // 10% chance of twist, unless manual twist button used
    const isTwist = Math.random() < 0.1;
    
    if (isTwist) {
      handleTwist();
      return;
    }

    const newItem = getRandomItem('normal');
    if (newItem) {
      updateGameState(newItem);
    }
  };

  const handleTwist = () => {
    const newItem = getRandomItem('twist');
    if (newItem) {
      updateGameState(newItem);
    }
  };

  const updateGameState = (newItem: GameItem) => {
    if (currentCard) {
      setHistory(prev => [currentCard, ...prev]);
    }
    setCurrentCard(newItem);
    
    // Reset timer if active
    if (timerActive) {
      setTimeLeft(initialTime);
      setTimerFinished(false);
    }
  };

  const toggleTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(initialTime);
      setTimerFinished(false);
    }
    setTimerActive(!timerActive);
  };

  const resetTimer = () => {
    setTimeLeft(initialTime);
    setTimerActive(false);
    setTimerFinished(false);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val > 0) {
      setInitialTime(val);
      setTimeLeft(val);
      setTimerActive(false);
      setTimerFinished(false);
    }
  };

  const finishStory = () => {
    if (currentCard) {
      setHistory(prev => [currentCard, ...prev]);
      setCurrentCard(null);
    }
    setShowSummary(true);
    setTimerActive(false);
    setTimerFinished(false);
  };

  const resetGame = () => {
    setCurrentCard(null);
    setHistory([]);
    setShowSummary(false);
    resetTimer();
  };

  // --- EFFECTS ---
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      timerRef.current = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && timerActive) {
      setTimerActive(false);
      setTimerFinished(true);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timerActive, timeLeft]);

  // --- RENDER HELPERS ---
  const getCategoryColor = (cat: Category) => {
    switch (cat) {
      case 'character': return 'bg-indigo-100 text-indigo-700 border-indigo-200';
      case 'object': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'setting': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'action': return 'bg-rose-100 text-rose-700 border-rose-200';
      case 'twist': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryLabel = (cat: Category) => {
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      {/* --- HEADER --- */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-amber-500 bg-clip-text text-transparent">
              Story Game
            </h1>
          </div>
          <button 
            onClick={() => setShowInstructions(!showInstructions)}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
            aria-label="Toggle Instructions"
          >
            {showInstructions ? <ChevronUp size={20} /> : <HelpCircle size={20} />}
          </button>
        </div>
        
        {/* Instructions Panel */}
        <AnimatePresence>
          {showInstructions && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-indigo-50 border-b border-indigo-100"
            >
              <div className="max-w-3xl mx-auto px-4 py-4 text-sm text-indigo-900 space-y-2">
                <p className="font-semibold">How to Play:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Choose a <strong>Level</strong>.</li>
                  <li>Click <strong>Next Card</strong>.</li>
                  <li>Describe the picture. Use the <strong>Questions</strong> and <strong>Words</strong>.</li>
                  <li>Make a story with your friend!</li>
                </ol>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        
        {/* Timer Finished Alert */}
        <AnimatePresence>
          {timerFinished && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            >
              <div className="bg-red-500 text-white px-8 py-4 rounded-2xl shadow-2xl font-bold text-2xl flex items-center gap-3 pointer-events-auto">
                <Clock className="animate-bounce" />
                Time's Up!
                <button 
                  onClick={() => setTimerFinished(false)}
                  className="ml-4 bg-white/20 hover:bg-white/30 rounded-full p-1"
                >
                  <RotateCcw size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- CONTROLS --- */}
        {!showSummary && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            
            {/* Genre Selector */}
            <div className="col-span-1">
              <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase">Theme</label>
              <select 
                value={genre} 
                onChange={(e) => setGenre(e.target.value as Genre)}
                className="w-full text-sm p-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              >
                <option value="mix">Mix (All)</option>
                <option value="fantasy">Magic</option>
                <option value="scifi">Future</option>
                <option value="horror">Scary</option>
              </select>
            </div>

            {/* Difficulty Toggle */}
            <div className="col-span-1">
              <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase">Level</label>
              <button 
                onClick={() => setDifficulty(d => d === 'beginner' ? 'advanced' : 'beginner')}
                className={`w-full text-sm p-2 rounded-lg border font-medium transition-colors ${
                  difficulty === 'beginner' 
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100' 
                    : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
                }`}
              >
                {difficulty === 'beginner' ? 'Level 1' : 'Level 2'}
              </button>
            </div>

            {/* Timer Controls */}
            <div className="col-span-2 flex items-end gap-2">
              <div className="flex-1">
                 <div className="flex justify-between items-center mb-1">
                   <label className="block text-xs font-semibold text-slate-500 uppercase">Timer (sec)</label>
                   {!timerActive && (
                     <input 
                       type="number" 
                       value={initialTime}
                       onChange={handleTimeChange}
                       className="w-12 text-xs text-right bg-transparent text-slate-500 font-medium outline-none border-b border-dashed border-slate-300 focus:border-indigo-500"
                     />
                   )}
                 </div>
                 <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1.5 border border-slate-200">
                    <Clock size={16} className="text-slate-500 ml-1" />
                    <span className={`font-mono font-bold ${timeLeft < 10 ? 'text-red-500' : 'text-slate-700'}`}>
                      {timeLeft}s
                    </span>
                    <div className="flex-1 flex justify-end gap-1">
                      <button onClick={toggleTimer} className="p-1 hover:bg-white rounded shadow-sm">
                        {timerActive ? <Pause size={14} /> : <Play size={14} />}
                      </button>
                      <button onClick={resetTimer} className="p-1 hover:bg-white rounded shadow-sm">
                        <RotateCcw size={14} />
                      </button>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        )}

        {/* --- GAME AREA --- */}
        {showSummary ? (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Great Job!</h2>
              <p className="text-slate-600">This is your story:</p>
            </div>

            <div className="space-y-3">
              {[...history].reverse().map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getCategoryColor(item.category)}`}>
                        {getCategoryLabel(item.category)}
                      </span>
                      <h3 className="font-bold text-slate-800">{item.text}</h3>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">
                      {item.keywords[difficulty].join(', ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={resetGame}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <RefreshCw size={20} />
              Play Again
            </button>
          </div>
        ) : (
          <>
            {/* CURRENT CARD */}
            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                {currentCard ? (
                  <motion.div
                    key={currentCard.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden"
                  >
                    {/* Card Header */}
                    <div className={`px-6 py-4 border-b flex justify-between items-center ${getCategoryColor(currentCard.category)} bg-opacity-20`}>
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white bg-opacity-60`}>
                        {getCategoryLabel(currentCard.category)}
                      </span>
                      {currentCard.category === 'twist' && (
                        <span className="flex items-center gap-1 text-xs font-bold text-purple-700 animate-pulse">
                          <Zap size={14} /> SURPRISE!
                        </span>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 md:p-8 text-center space-y-4 md:space-y-6">
                      <div className="text-6xl md:text-8xl mb-2 md:mb-4 filter drop-shadow-sm transform hover:scale-110 transition-transform duration-300 cursor-default">
                        {currentCard.icon}
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight break-words">
                        {currentCard.text}
                      </h2>

                      {/* Prompts */}
                      <div className="bg-slate-50 rounded-xl p-4 md:p-5 border border-slate-100">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 md:mb-3">Questions</h3>
                        <ul className="space-y-1 md:space-y-2">
                          {currentCard.prompts[difficulty].map((prompt, i) => (
                            <li key={i} className="text-base md:text-lg font-medium text-slate-700 leading-tight">
                              "{prompt}"
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Word Bank */}
                      <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 md:mb-3">Helpful Words</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                          {currentCard.keywords[difficulty].map((word, i) => (
                            <span key={i} className="px-2 md:px-3 py-1 md:py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-xs md:text-sm font-semibold border border-indigo-100">
                              {word}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-[300px] md:h-[400px] flex flex-col items-center justify-center bg-slate-100 rounded-3xl border-2 border-dashed border-slate-300 text-slate-400">
                    <BookOpen size={40} className="mb-4 opacity-50 md:w-12 md:h-12" />
                    <p className="font-medium text-lg">Ready?</p>
                    <p className="text-sm mt-2">Click "Next Card"</p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* TIMELINE (Last 3) */}
            {history.length > 0 && (
              <div className="flex items-center gap-2 overflow-x-auto py-2 px-1 scrollbar-hide">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mr-2 flex-shrink-0">
                  <History size={14} /> Past
                </div>
                {history.slice(0, 3).reverse().map((item, i) => (
                  <React.Fragment key={item.id + i}>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 bg-white px-2 py-1.5 md:px-3 md:py-2 rounded-lg border border-slate-200 shadow-sm opacity-80 flex-shrink-0"
                    >
                      <span className="text-base md:text-lg">{item.icon}</span>
                      <span className="text-[10px] md:text-xs font-medium whitespace-nowrap max-w-[80px] md:max-w-none overflow-hidden text-ellipsis">{item.text}</span>
                    </motion.div>
                    {/* Arrow to next item or to current card (implied) */}
                    <div className="text-slate-300 flex-shrink-0">
                      <ChevronDown size={14} className="-rotate-90 md:w-4 md:h-4" />
                    </div>
                  </React.Fragment>
                ))}
                <div className="text-[10px] md:text-xs font-bold text-indigo-400 uppercase tracking-wider ml-1 flex-shrink-0">
                  Now
                </div>
              </div>
            )}

            {/* ACTIONS */}
            <div className="grid grid-cols-1 gap-3 pt-2 pb-8 md:grid-cols-2 md:pt-4">
              <button 
                onClick={handleGenerate}
                className="col-span-1 md:col-span-2 py-3 md:py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-base md:text-lg font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-95 flex items-center justify-center gap-2 touch-manipulation"
              >
                <RefreshCw size={20} className="md:w-6 md:h-6" />
                Next Card
              </button>
              
              <div className="grid grid-cols-2 gap-3 col-span-1 md:col-span-2">
                <button 
                  onClick={handleTwist}
                  className="py-2.5 md:py-3 bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold rounded-xl border border-purple-200 transition-all active:scale-95 flex items-center justify-center gap-2 text-sm md:text-base touch-manipulation"
                >
                  <Zap size={18} className="md:w-5 md:h-5" />
                  Surprise!
                </button>

                <button 
                  onClick={finishStory}
                  disabled={!currentCard && history.length === 0}
                  className="py-2.5 md:py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl border border-slate-200 transition-all active:scale-95 flex items-center justify-center gap-2 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                >
                  <CheckCircle2 size={18} className="md:w-5 md:h-5" />
                  End Game
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

