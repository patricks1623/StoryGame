
export type Category = 'character' | 'object' | 'setting' | 'action' | 'twist';
export type Difficulty = 'beginner' | 'advanced';
export type Genre = 'mix' | 'fantasy' | 'scifi' | 'horror';

export interface GameItem {
  id: string;
  category: Category;
  text: string;
  icon: string;
  genres: Genre[]; // 'mix' implies it fits anywhere, or specific tags
  prompts: {
    beginner: string[];
    advanced: string[];
  };
  keywords: {
    beginner: string[];
    advanced: string[];
  };
}

export const PLOT_TWISTS: GameItem[] = [
  {
    id: 'twist-1',
    category: 'twist',
    text: 'Time Stops',
    icon: '⏳',
    genres: ['fantasy', 'scifi', 'horror'],
    prompts: {
      beginner: ['What happens?', 'Is everyone frozen?'],
      advanced: ['How does this affect the protagonist?', 'Who is immune to this effect?']
    },
    keywords: {
      beginner: ['frozen', 'quiet', 'clock'],
      advanced: ['temporal', 'stasis', 'suspended']
    }
  },
  {
    id: 'twist-2',
    category: 'twist',
    text: 'Gravity Reverses',
    icon: '🙃',
    genres: ['scifi', 'fantasy'],
    prompts: {
      beginner: ['Where do things fall?', 'Is it scary?'],
      advanced: ['How do the characters adapt?', 'What is the scientific or magical cause?']
    },
    keywords: {
      beginner: ['up', 'down', 'float'],
      advanced: ['inverted', 'physics', 'disoriented']
    }
  },
  {
    id: 'twist-3',
    category: 'twist',
    text: 'A Secret is Revealed',
    icon: '🤫',
    genres: ['fantasy', 'scifi', 'horror'],
    prompts: {
      beginner: ['Who has a secret?', 'Is it a big secret?'],
      advanced: ['How does this change the relationship between characters?', 'What are the consequences?']
    },
    keywords: {
      beginner: ['truth', 'lie', 'surprise'],
      advanced: ['revelation', 'betrayal', 'confession']
    }
  },
  {
    id: 'twist-4',
    category: 'twist',
    text: 'Sudden Storm',
    icon: '⛈️',
    genres: ['fantasy', 'horror'],
    prompts: {
      beginner: ['Is it raining hard?', 'Is there thunder?'],
      advanced: ['Does the storm have a supernatural origin?', 'How does it impede their progress?']
    },
    keywords: {
      beginner: ['rain', 'wind', 'wet'],
      advanced: ['tempest', 'torrential', 'gale']
    }
  },
  {
    id: 'twist-5',
    category: 'twist',
    text: 'Technology Fails',
    icon: '📵',
    genres: ['scifi', 'horror'],
    prompts: {
      beginner: ['Do phones work?', 'Are the lights out?'],
      advanced: ['How reliant were they on technology?', 'What is the backup plan?']
    },
    keywords: {
      beginner: ['broken', 'dark', 'offline'],
      advanced: ['malfunction', 'blackout', 'analog']
    }
  }
];

export const GAME_DATA: GameItem[] = [
  // --- CHARACTERS ---
  {
    id: 'char-1',
    category: 'character',
    text: 'The Grumpy Wizard',
    icon: '🧙‍♂️',
    genres: ['fantasy'],
    prompts: {
      beginner: ['What is he wearing?', 'Why is he angry?'],
      advanced: ['Describe his magical specialty.', 'What is his tragic backstory?']
    },
    keywords: {
      beginner: ['old', 'magic', 'hat'],
      advanced: ['arcane', 'cynical', 'powerful']
    }
  },
  {
    id: 'char-2',
    category: 'character',
    text: 'The Lost Robot',
    icon: '🤖',
    genres: ['scifi'],
    prompts: {
      beginner: ['Is it big or small?', 'Is it friendly?'],
      advanced: ['What was its original purpose?', 'Why is it separated from its unit?']
    },
    keywords: {
      beginner: ['metal', 'beep', 'sad'],
      advanced: ['autonomous', 'obsolete', 'searching']
    }
  },
  {
    id: 'char-3',
    category: 'character',
    text: 'The Nervous Detective',
    icon: '🕵️‍♀️',
    genres: ['horror', 'mix'],
    prompts: {
      beginner: ['What are they looking for?', 'Are they scared?'],
      advanced: ['What case are they trying to solve?', 'What haunts them?']
    },
    keywords: {
      beginner: ['coat', 'look', 'scared'],
      advanced: ['investigate', 'anxious', 'clue']
    }
  },
  {
    id: 'char-4',
    category: 'character',
    text: 'The Brave Knight',
    icon: '⚔️',
    genres: ['fantasy'],
    prompts: {
      beginner: ['What color is the armor?', 'Do they have a sword?'],
      advanced: ['Who do they serve?', 'What is their code of honor?']
    },
    keywords: {
      beginner: ['strong', 'fight', 'hero'],
      advanced: ['chivalry', 'valiant', 'armor']
    }
  },
  {
    id: 'char-5',
    category: 'character',
    text: 'The Alien Diplomat',
    icon: '👽',
    genres: ['scifi'],
    prompts: {
      beginner: ['What color is their skin?', 'Do they speak English?'],
      advanced: ['What is their mission on Earth?', 'How does their culture differ from ours?']
    },
    keywords: {
      beginner: ['green', 'space', 'talk'],
      advanced: ['extraterrestrial', 'negotiate', 'peace']
    }
  },
  {
    id: 'char-6',
    category: 'character',
    text: 'The Cursed Doll',
    icon: '🎎',
    genres: ['horror'],
    prompts: {
      beginner: ['Is it ugly?', 'Does it move?'],
      advanced: ['Who owned it before?', 'What happens if you touch it?']
    },
    keywords: {
      beginner: ['toy', 'scary', 'eyes'],
      advanced: ['possessed', 'antique', 'malevolent']
    }
  },
  {
    id: 'char-7',
    category: 'character',
    text: 'The Time Traveler',
    icon: '⏳',
    genres: ['scifi', 'mix'],
    prompts: {
      beginner: ['Where are they from?', 'Are they young or old?'],
      advanced: ['What time period are they trying to fix?', 'What is the paradox?']
    },
    keywords: {
      beginner: ['watch', 'future', 'past'],
      advanced: ['temporal', 'chronology', 'machine']
    }
  },
  {
    id: 'char-8',
    category: 'character',
    text: 'The Forest Spirit',
    icon: '🧚',
    genres: ['fantasy'],
    prompts: {
      beginner: ['Can it fly?', 'Is it nice?'],
      advanced: ['What part of nature do they protect?', 'Are they visible to everyone?']
    },
    keywords: {
      beginner: ['green', 'leaves', 'small'],
      advanced: ['ethereal', 'guardian', 'nature']
    }
  },
  {
    id: 'char-9',
    category: 'character',
    text: 'The Mad Scientist',
    icon: '👨‍🔬',
    genres: ['scifi', 'horror'],
    prompts: {
      beginner: ['What is the hair like?', 'Do they have a lab coat?'],
      advanced: ['What is their dangerous experiment?', 'Are they misunderstood or evil?']
    },
    keywords: {
      beginner: ['crazy', 'lab', 'mix'],
      advanced: ['genius', 'unethical', 'experiment']
    }
  },
  {
    id: 'char-10',
    category: 'character',
    text: 'The Vampire Hunter',
    icon: '🧛',
    genres: ['horror', 'fantasy'],
    prompts: {
      beginner: ['What weapons do they have?', 'Do they wear black?'],
      advanced: ['Why do they hunt vampires?', 'What is their weakness?']
    },
    keywords: {
      beginner: ['stake', 'night', 'hunt'],
      advanced: ['slayer', 'garlic', 'nemesis']
    }
  },
  {
    id: 'char-11',
    category: 'character',
    text: 'The Talking Cat',
    icon: '🐱',
    genres: ['fantasy', 'mix'],
    prompts: {
      beginner: ['Is it a fat cat?', 'What does it say?'],
      advanced: ['Is it actually a human transformed?', 'Does it give good advice?']
    },
    keywords: {
      beginner: ['pet', 'fur', 'meow'],
      advanced: ['sarcastic', 'familiar', 'magical']
    }
  },
  {
    id: 'char-12',
    category: 'character',
    text: 'The Cyborg Soldier',
    icon: '🦾',
    genres: ['scifi'],
    prompts: {
      beginner: ['Which part is robot?', 'Are they strong?'],
      advanced: ['How much humanity is left?', 'Who controls them?']
    },
    keywords: {
      beginner: ['arm', 'eye', 'strong'],
      advanced: ['enhanced', 'military', 'program']
    }
  },
  {
    id: 'char-13',
    category: 'character',
    text: 'The Ghostly Child',
    icon: '👻',
    genres: ['horror'],
    prompts: {
      beginner: ['Is it crying?', 'Can you see through it?'],
      advanced: ['Why is the spirit lingering?', 'What is their warning?']
    },
    keywords: {
      beginner: ['pale', 'sad', 'float'],
      advanced: ['apparition', 'haunt', 'spooky']
    }
  },
  {
    id: 'char-14',
    category: 'character',
    text: 'The Space Pirate',
    icon: '🏴‍☠️',
    genres: ['scifi'],
    prompts: {
      beginner: ['Do they have a ship?', 'Are they rich?'],
      advanced: ['What sector do they terrorize?', 'What is their code?']
    },
    keywords: {
      beginner: ['ship', 'steal', 'star'],
      advanced: ['outlaw', 'galaxy', 'plunder']
    }
  },
  {
    id: 'char-15',
    category: 'character',
    text: 'The Wise Elder',
    icon: '👵',
    genres: ['mix', 'fantasy'],
    prompts: {
      beginner: ['Are they kind?', 'Do they have a cane?'],
      advanced: ['What ancient knowledge do they hold?', 'Are they hiding their power?']
    },
    keywords: {
      beginner: ['old', 'help', 'story'],
      advanced: ['wisdom', 'mentor', 'guide']
    }
  },

  // --- OBJECTS ---
  {
    id: 'obj-1',
    category: 'object',
    text: 'Magic Wand',
    icon: '🪄',
    genres: ['fantasy'],
    prompts: {
      beginner: ['Is it wood?', 'Does it glow?'],
      advanced: ['What happens if it breaks?', 'Who made it?']
    },
    keywords: {
      beginner: ['stick', 'star', 'spell'],
      advanced: ['artifact', 'channel', 'power']
    }
  },
  {
    id: 'obj-2',
    category: 'object',
    text: 'Laser Gun',
    icon: '🔫',
    genres: ['scifi'],
    prompts: {
      beginner: ['What color is the laser?', 'Is it loud?'],
      advanced: ['Does it need to recharge?', 'Is it illegal?']
    },
    keywords: {
      beginner: ['shoot', 'zap', 'red'],
      advanced: ['blaster', 'energy', 'weapon']
    }
  },
  {
    id: 'obj-3',
    category: 'object',
    text: 'Old Key',
    icon: '🗝️',
    genres: ['mix', 'horror', 'fantasy'],
    prompts: {
      beginner: ['Is it rusty?', 'Is it big?'],
      advanced: ['What does it open?', 'Why was it hidden?']
    },
    keywords: {
      beginner: ['metal', 'open', 'door'],
      advanced: ['antique', 'unlock', 'mystery']
    }
  },
  {
    id: 'obj-4',
    category: 'object',
    text: 'Cursed Mirror',
    icon: '🪞',
    genres: ['horror', 'fantasy'],
    prompts: {
      beginner: ['Is it broken?', 'What do you see in it?'],
      advanced: ['Does it show the future or the past?', 'Is someone trapped inside?']
    },
    keywords: {
      beginner: ['glass', 'look', 'face'],
      advanced: ['reflection', 'trap', 'vision']
    }
  },
  {
    id: 'obj-5',
    category: 'object',
    text: 'Hologram Device',
    icon: '💿',
    genres: ['scifi'],
    prompts: {
      beginner: ['Is it blue?', 'Is it 3D?'],
      advanced: ['Is it a message or a map?', 'Is it glitching?']
    },
    keywords: {
      beginner: ['light', 'fake', 'tech'],
      advanced: ['projection', 'virtual', 'data']
    }
  },
  {
    id: 'obj-6',
    category: 'object',
    text: 'Treasure Map',
    icon: '🗺️',
    genres: ['fantasy', 'mix'],
    prompts: {
      beginner: ['Is it paper?', 'Is there an X?'],
      advanced: ['Is it a trap?', 'Is the ink fading?']
    },
    keywords: {
      beginner: ['paper', 'gold', 'find'],
      advanced: ['chart', 'location', 'buried']
    }
  },
  {
    id: 'obj-7',
    category: 'object',
    text: 'Potion Bottle',
    icon: '🧪',
    genres: ['fantasy', 'horror'],
    prompts: {
      beginner: ['What color is the liquid?', 'Does it smell bad?'],
      advanced: ['What are the side effects?', 'Is it a poison or a cure?']
    },
    keywords: {
      beginner: ['drink', 'glass', 'magic'],
      advanced: ['elixir', 'brew', 'alchemy']
    }
  },
  {
    id: 'obj-8',
    category: 'object',
    text: 'Time Machine',
    icon: '🕰️',
    genres: ['scifi'],
    prompts: {
      beginner: ['Is it a car?', 'Is it a box?'],
      advanced: ['How is it powered?', 'Is it safe to use?']
    },
    keywords: {
      beginner: ['clock', 'travel', 'fast'],
      advanced: ['device', 'warp', 'history']
    }
  },
  {
    id: 'obj-9',
    category: 'object',
    text: 'Bloody Knife',
    icon: '🔪',
    genres: ['horror'],
    prompts: {
      beginner: ['Is it sharp?', 'Is it scary?'],
      advanced: ['Whose blood is it?', 'Was it used recently?']
    },
    keywords: {
      beginner: ['cut', 'red', 'hurt'],
      advanced: ['weapon', 'evidence', 'crime']
    }
  },
  {
    id: 'obj-10',
    category: 'object',
    text: 'Flying Car',
    icon: '🚗',
    genres: ['scifi'],
    prompts: {
      beginner: ['Does it have wheels?', 'Is it fast?'],
      advanced: ['How does it float?', 'Is there traffic in the sky?']
    },
    keywords: {
      beginner: ['drive', 'sky', 'cool'],
      advanced: ['hover', 'vehicle', 'transport']
    }
  },
  {
    id: 'obj-11',
    category: 'object',
    text: 'Ancient Book',
    icon: '📖',
    genres: ['fantasy', 'horror', 'mix'],
    prompts: {
      beginner: ['Is it heavy?', 'Is it dusty?'],
      advanced: ['What language is it written in?', 'Is it forbidden knowledge?']
    },
    keywords: {
      beginner: ['read', 'old', 'pages'],
      advanced: ['tome', 'grimoire', 'spellbook']
    }
  },
  {
    id: 'obj-12',
    category: 'object',
    text: 'Crystal Ball',
    icon: '🔮',
    genres: ['fantasy'],
    prompts: {
      beginner: ['Is it round?', 'Is it clear?'],
      advanced: ['Can anyone use it?', 'Does it show the truth?']
    },
    keywords: {
      beginner: ['see', 'future', 'glass'],
      advanced: ['divination', 'oracle', 'mystic']
    }
  },
  {
    id: 'obj-13',
    category: 'object',
    text: 'Robot Dog',
    icon: '🐕‍🦺',
    genres: ['scifi'],
    prompts: {
      beginner: ['Does it bark?', 'Does it eat?'],
      advanced: ['Is it a pet or a guard?', 'Does it have feelings?']
    },
    keywords: {
      beginner: ['pet', 'metal', 'play'],
      advanced: ['companion', 'mechanical', 'loyal']
    }
  },
  {
    id: 'obj-14',
    category: 'object',
    text: 'Haunted Dollhouse',
    icon: '🏠',
    genres: ['horror'],
    prompts: {
      beginner: ['Is it small?', 'Are there dolls inside?'],
      advanced: ['Do the dolls move at night?', 'Does it look like a real house?']
    },
    keywords: {
      beginner: ['play', 'tiny', 'scary'],
      advanced: ['miniature', 'replica', 'eerie']
    }
  },
  {
    id: 'obj-15',
    category: 'object',
    text: 'Invisibility Cloak',
    icon: '🧥',
    genres: ['fantasy', 'scifi'],
    prompts: {
      beginner: ['What color is it?', 'Is it soft?'],
      advanced: ['How does it work?', 'Does it hide sound too?']
    },
    keywords: {
      beginner: ['hide', 'clothes', 'gone'],
      advanced: ['stealth', 'fabric', 'vanish']
    }
  },

  // --- SETTINGS ---
  {
    id: 'set-1',
    category: 'setting',
    text: 'Dark Forest',
    icon: '🌲',
    genres: ['fantasy', 'horror'],
    prompts: {
      beginner: ['Are there many trees?', 'Is it night?'],
      advanced: ['What lives in the shadows?', 'Is the path clear?']
    },
    keywords: {
      beginner: ['trees', 'dark', 'scary'],
      advanced: ['woods', 'ominous', 'wilderness']
    }
  },
  {
    id: 'set-2',
    category: 'setting',
    text: 'Space Station',
    icon: '🛰️',
    genres: ['scifi'],
    prompts: {
      beginner: ['Is it in the sky?', 'Are there stars?'],
      advanced: ['Is gravity artificial?', 'Is it under attack?']
    },
    keywords: {
      beginner: ['space', 'stars', 'metal'],
      advanced: ['orbit', 'vacuum', 'technology']
    }
  },
  {
    id: 'set-3',
    category: 'setting',
    text: 'Haunted House',
    icon: '🏚️',
    genres: ['horror'],
    prompts: {
      beginner: ['Are the windows broken?', 'Is it old?'],
      advanced: ['Why is it abandoned?', 'What sounds do you hear?']
    },
    keywords: {
      beginner: ['old', 'ghost', 'scary'],
      advanced: ['mansion', 'dilapidated', 'creepy']
    }
  },
  {
    id: 'set-4',
    category: 'setting',
    text: 'Underwater City',
    icon: '🫧',
    genres: ['scifi', 'fantasy'],
    prompts: {
      beginner: ['Are there fish?', 'Is it wet?'],
      advanced: ['How do they breathe?', 'Is it a secret city?']
    },
    keywords: {
      beginner: ['water', 'blue', 'swim'],
      advanced: ['ocean', 'submerged', 'aquatic']
    }
  },
  {
    id: 'set-5',
    category: 'setting',
    text: 'Royal Castle',
    icon: '🏰',
    genres: ['fantasy'],
    prompts: {
      beginner: ['Is it big?', 'Is there a king?'],
      advanced: ['Is it under siege?', 'Are there secret passages?']
    },
    keywords: {
      beginner: ['stone', 'king', 'queen'],
      advanced: ['palace', 'fortress', 'majestic']
    }
  },
  {
    id: 'set-6',
    category: 'setting',
    text: 'Busy City Street',
    icon: '🏙️',
    genres: ['mix'],
    prompts: {
      beginner: ['Are there cars?', 'Are there many people?'],
      advanced: ['Is it day or night?', 'What smells are in the air?']
    },
    keywords: {
      beginner: ['cars', 'loud', 'people'],
      advanced: ['urban', 'traffic', 'crowded']
    }
  },
  {
    id: 'set-7',
    category: 'setting',
    text: 'Alien Planet',
    icon: '🪐',
    genres: ['scifi'],
    prompts: {
      beginner: ['Is the grass green?', 'Are there two suns?'],
      advanced: ['Is the atmosphere breathable?', 'Are the plants dangerous?']
    },
    keywords: {
      beginner: ['weird', 'red', 'sky'],
      advanced: ['landscape', 'foreign', 'terrain']
    }
  },
  {
    id: 'set-8',
    category: 'setting',
    text: 'Graveyard',
    icon: '🪦',
    genres: ['horror'],
    prompts: {
      beginner: ['Are there stones?', 'Is it quiet?'],
      advanced: ['Is there fog?', 'Is someone digging a grave?']
    },
    keywords: {
      beginner: ['dead', 'stone', 'night'],
      advanced: ['cemetery', 'tomb', 'mist']
    }
  },
  {
    id: 'set-9',
    category: 'setting',
    text: 'Magic School',
    icon: '🏫',
    genres: ['fantasy'],
    prompts: {
      beginner: ['Are there books?', 'Are students learning magic?'],
      advanced: ['Is the building alive?', 'What class is happening now?']
    },
    keywords: {
      beginner: ['learn', 'magic', 'class'],
      advanced: ['academy', 'library', 'spells']
    }
  },
  {
    id: 'set-10',
    category: 'setting',
    text: 'Desert Island',
    icon: '🏝️',
    genres: ['mix'],
    prompts: {
      beginner: ['Is it hot?', 'Is there water?'],
      advanced: ['Are they stranded?', 'Is there a hidden treasure?']
    },
    keywords: {
      beginner: ['sand', 'sun', 'hot'],
      advanced: ['isolated', 'tropical', 'survival']
    }
  },
  {
    id: 'set-11',
    category: 'setting',
    text: 'Laboratory',
    icon: '🔬',
    genres: ['scifi', 'horror'],
    prompts: {
      beginner: ['Is it clean?', 'Are there computers?'],
      advanced: ['What are they researching?', 'Has something escaped?']
    },
    keywords: {
      beginner: ['white', 'science', 'test'],
      advanced: ['sterile', 'research', 'facility']
    }
  },
  {
    id: 'set-12',
    category: 'setting',
    text: 'Cave',
    icon: '🕳️',
    genres: ['fantasy', 'horror', 'mix'],
    prompts: {
      beginner: ['Is it dark?', 'Are there bats?'],
      advanced: ['How deep does it go?', 'Are there crystals inside?']
    },
    keywords: {
      beginner: ['rock', 'dark', 'echo'],
      advanced: ['cavern', 'underground', 'tunnel']
    }
  },
  {
    id: 'set-13',
    category: 'setting',
    text: 'Train Station',
    icon: '🚉',
    genres: ['mix', 'horror'],
    prompts: {
      beginner: ['Is the train here?', 'Are people waiting?'],
      advanced: ['Is it an old steam train or a bullet train?', 'Is it the last train of the night?']
    },
    keywords: {
      beginner: ['train', 'wait', 'ticket'],
      advanced: ['platform', 'journey', 'departure']
    }
  },
  {
    id: 'set-14',
    category: 'setting',
    text: 'Virtual Reality',
    icon: '🕶️',
    genres: ['scifi'],
    prompts: {
      beginner: ['Is it a game?', 'Does it look real?'],
      advanced: ['Can they log out?', 'Is the code corrupted?']
    },
    keywords: {
      beginner: ['game', 'fake', 'computer'],
      advanced: ['digital', 'simulation', 'avatar']
    }
  },
  {
    id: 'set-15',
    category: 'setting',
    text: 'Snowy Mountain',
    icon: '🏔️',
    genres: ['mix', 'fantasy'],
    prompts: {
      beginner: ['Is it cold?', 'Is there snow?'],
      advanced: ['Is there a blizzard?', 'Is there a yeti?']
    },
    keywords: {
      beginner: ['cold', 'white', 'ice'],
      advanced: ['peak', 'frozen', 'summit']
    }
  },

  // --- ACTIONS ---
  {
    id: 'act-1',
    category: 'action',
    text: 'Running Away',
    icon: '🏃',
    genres: ['mix', 'horror'],
    prompts: {
      beginner: ['Are they fast?', 'Are they scared?'],
      advanced: ['What are they running from?', 'Where are they going?']
    },
    keywords: {
      beginner: ['run', 'fast', 'scared'],
      advanced: ['escape', 'flee', 'pursuit']
    }
  },
  {
    id: 'act-2',
    category: 'action',
    text: 'Casting a Spell',
    icon: '✨',
    genres: ['fantasy'],
    prompts: {
      beginner: ['What words do they say?', 'Is it a good spell?'],
      advanced: ['What is the effect?', 'Does it require ingredients?']
    },
    keywords: {
      beginner: ['magic', 'say', 'hands'],
      advanced: ['incantation', 'summon', 'power']
    }
  },
  {
    id: 'act-3',
    category: 'action',
    text: 'Fighting',
    icon: '⚔️',
    genres: ['mix', 'fantasy', 'scifi'],
    prompts: {
      beginner: ['Are they hitting?', 'Are they angry?'],
      advanced: ['Who is winning?', 'Why are they fighting?']
    },
    keywords: {
      beginner: ['hit', 'kick', 'punch'],
      advanced: ['combat', 'duel', 'battle']
    }
  },
  {
    id: 'act-4',
    category: 'action',
    text: 'Searching',
    icon: '🔍',
    genres: ['mix', 'horror'],
    prompts: {
      beginner: ['Are they looking down?', 'Is it lost?'],
      advanced: ['Are they desperate?', 'What happens if they don\'t find it?']
    },
    keywords: {
      beginner: ['look', 'find', 'lost'],
      advanced: ['hunt', 'seek', 'locate']
    }
  },
  {
    id: 'act-5',
    category: 'action',
    text: 'Hiding',
    icon: '🫣',
    genres: ['horror', 'mix'],
    prompts: {
      beginner: ['Are they quiet?', 'Where are they?'],
      advanced: ['Is the seeker close?', 'Are they holding their breath?']
    },
    keywords: {
      beginner: ['quiet', 'dark', 'shh'],
      advanced: ['conceal', 'stealth', 'cover']
    }
  },
  {
    id: 'act-6',
    category: 'action',
    text: 'Flying',
    icon: '🦅',
    genres: ['fantasy', 'scifi'],
    prompts: {
      beginner: ['Are they high up?', 'Do they have wings?'],
      advanced: ['Is it magic or technology?', 'How does the wind feel?']
    },
    keywords: {
      beginner: ['sky', 'bird', 'up'],
      advanced: ['soar', 'glide', 'levitate']
    }
  },
  {
    id: 'act-7',
    category: 'action',
    text: 'Sleeping',
    icon: '😴',
    genres: ['mix'],
    prompts: {
      beginner: ['Are they snoring?', 'Is it a bed?'],
      advanced: ['Are they dreaming?', 'Is it a magical sleep?']
    },
    keywords: {
      beginner: ['bed', 'tired', 'dream'],
      advanced: ['slumber', 'rest', 'nap']
    }
  },
  {
    id: 'act-8',
    category: 'action',
    text: 'Eating',
    icon: '🍽️',
    genres: ['mix'],
    prompts: {
      beginner: ['Is it good?', 'Are they hungry?'],
      advanced: ['Is the food strange?', 'Is it a feast or a scrap?']
    },
    keywords: {
      beginner: ['food', 'hungry', 'yum'],
      advanced: ['consume', 'feast', 'dine']
    }
  },
  {
    id: 'act-9',
    category: 'action',
    text: 'Building',
    icon: '🔨',
    genres: ['mix', 'scifi'],
    prompts: {
      beginner: ['Is it a house?', 'Do they have tools?'],
      advanced: ['What are they constructing?', 'Is it a trap?']
    },
    keywords: {
      beginner: ['make', 'fix', 'tool'],
      advanced: ['construct', 'assemble', 'create']
    }
  },
  {
    id: 'act-10',
    category: 'action',
    text: 'Talking',
    icon: '🗣️',
    genres: ['mix'],
    prompts: {
      beginner: ['Are they loud?', 'Are they happy?'],
      advanced: ['Is it a secret conversation?', 'Are they arguing?']
    },
    keywords: {
      beginner: ['say', 'speak', 'listen'],
      advanced: ['communicate', 'whisper', 'discuss']
    }
  },
  {
    id: 'act-11',
    category: 'action',
    text: 'Stealing',
    icon: '💰',
    genres: ['mix'],
    prompts: {
      beginner: ['Are they fast?', 'Is it money?'],
      advanced: ['Are they a master thief?', 'Did they get caught?']
    },
    keywords: {
      beginner: ['take', 'bad', 'run'],
      advanced: ['theft', 'robbery', 'snatch']
    }
  },
  {
    id: 'act-12',
    category: 'action',
    text: 'Crying',
    icon: '😢',
    genres: ['mix'],
    prompts: {
      beginner: ['Are they sad?', 'Are there tears?'],
      advanced: ['Why are they heartbroken?', 'Are they tears of joy?']
    },
    keywords: {
      beginner: ['sad', 'tears', 'sob'],
      advanced: ['weep', 'sorrow', 'grief']
    }
  },
  {
    id: 'act-13',
    category: 'action',
    text: 'Dancing',
    icon: '💃',
    genres: ['mix', 'fantasy'],
    prompts: {
      beginner: ['Is there music?', 'Are they happy?'],
      advanced: ['Is it a ballroom dance?', 'Is it a ritual?']
    },
    keywords: {
      beginner: ['move', 'music', 'fun'],
      advanced: ['rhythm', 'waltz', 'perform']
    }
  },
  {
    id: 'act-14',
    category: 'action',
    text: 'Reading',
    icon: '📚',
    genres: ['mix'],
    prompts: {
      beginner: ['Is it a book?', 'Is it quiet?'],
      advanced: ['What are they learning?', 'Is the book magical?']
    },
    keywords: {
      beginner: ['book', 'look', 'learn'],
      advanced: ['study', 'research', 'examine']
    }
  },
  {
    id: 'act-15',
    category: 'action',
    text: 'Teleporting',
    icon: '🌀',
    genres: ['scifi', 'fantasy'],
    prompts: {
      beginner: ['Did they disappear?', 'Where did they go?'],
      advanced: ['Was it a machine or magic?', 'Did it hurt?']
    },
    keywords: {
      beginner: ['gone', 'fast', 'poof'],
      advanced: ['transport', 'instant', 'warp']
    }
  },

  // --- NEW EVERYDAY CHARACTERS ---
  {
    id: 'char-16',
    category: 'character',
    text: 'The Tired Student',
    icon: '🥱',
    genres: ['mix'],
    prompts: {
      beginner: ['Are they wearing a hoodie?', 'Is their hair messy?'],
      advanced: ['What are they studying for?', 'How many hours did they sleep?']
    },
    keywords: {
      beginner: ['sleepy', 'book', 'young'],
      advanced: ['exhausted', 'stressed', 'academic']
    }
  },
  {
    id: 'char-17',
    category: 'character',
    text: 'The Friendly Barista',
    icon: '☕',
    genres: ['mix'],
    prompts: {
      beginner: ['Do they have an apron?', 'Are they smiling?'],
      advanced: ['What is their specialty drink?', 'Do they know all the customers?']
    },
    keywords: {
      beginner: ['coffee', 'happy', 'work'],
      advanced: ['energetic', 'chatty', 'service']
    }
  },
  {
    id: 'char-18',
    category: 'character',
    text: 'The Strict Teacher',
    icon: '👩‍🏫',
    genres: ['mix'],
    prompts: {
      beginner: ['Do they wear glasses?', 'Are they holding a ruler?'],
      advanced: ['What subject do they teach?', 'Why are they so serious?']
    },
    keywords: {
      beginner: ['school', 'glasses', 'mad'],
      advanced: ['stern', 'organized', 'authority']
    }
  },
  {
    id: 'char-19',
    category: 'character',
    text: 'The Nosy Neighbor',
    icon: '👀',
    genres: ['mix', 'horror'],
    prompts: {
      beginner: ['Are they looking out the window?', 'Do they have binoculars?'],
      advanced: ['What secrets do they know?', 'Are they lonely or just curious?']
    },
    keywords: {
      beginner: ['look', 'house', 'old'],
      advanced: ['curious', 'gossip', 'watchful']
    }
  },
  {
    id: 'char-20',
    category: 'character',
    text: 'The Busy Parent',
    icon: '👶',
    genres: ['mix'],
    prompts: {
      beginner: ['Are they carrying a baby?', 'Do they look tired?'],
      advanced: ['How many kids do they have?', 'What are they juggling right now?']
    },
    keywords: {
      beginner: ['baby', 'tired', 'love'],
      advanced: ['overwhelmed', 'caring', 'multitasking']
    }
  },
  {
    id: 'char-21',
    category: 'character',
    text: 'The Gym Bro',
    icon: '🏋️',
    genres: ['mix'],
    prompts: {
      beginner: ['Are they strong?', 'What are they wearing?'],
      advanced: ['What is their workout routine?', 'Are they showing off?']
    },
    keywords: {
      beginner: ['strong', 'big', 'loud'],
      advanced: ['muscular', 'fitness', 'intense']
    }
  },

  // --- NEW EVERYDAY OBJECTS ---
  {
    id: 'obj-16',
    category: 'object',
    text: 'Smartphone',
    icon: '📱',
    genres: ['mix', 'scifi'],
    prompts: {
      beginner: ['Is the screen cracked?', 'Is it black?'],
      advanced: ['What app is open?', 'Is the battery low?']
    },
    keywords: {
      beginner: ['phone', 'call', 'game'],
      advanced: ['device', 'social', 'digital']
    }
  },
  {
    id: 'obj-17',
    category: 'object',
    text: 'Coffee Mug',
    icon: '☕',
    genres: ['mix'],
    prompts: {
      beginner: ['Is it hot?', 'What color is it?'],
      advanced: ['Is there a funny quote on it?', 'Is it stained?']
    },
    keywords: {
      beginner: ['cup', 'hot', 'drink'],
      advanced: ['caffeine', 'ceramic', 'steam']
    }
  },
  {
    id: 'obj-18',
    category: 'object',
    text: 'Backpack',
    icon: '🎒',
    genres: ['mix'],
    prompts: {
      beginner: ['Is it heavy?', 'What color is it?'],
      advanced: ['What is hidden inside?', 'Is it for school or travel?']
    },
    keywords: {
      beginner: ['bag', 'school', 'carry'],
      advanced: ['luggage', 'heavy', 'supplies']
    }
  },
  {
    id: 'obj-19',
    category: 'object',
    text: 'House Keys',
    icon: '🔑',
    genres: ['mix'],
    prompts: {
      beginner: ['Are they shiny?', 'Is there a keychain?'],
      advanced: ['Do they open a secret door?', 'Are they lost?']
    },
    keywords: {
      beginner: ['metal', 'open', 'home'],
      advanced: ['access', 'security', 'jingling']
    }
  },
  {
    id: 'obj-20',
    category: 'object',
    text: 'Laptop',
    icon: '💻',
    genres: ['mix', 'scifi'],
    prompts: {
      beginner: ['Is it open?', 'Is it new?'],
      advanced: ['What are they working on?', 'Is the camera covered?']
    },
    keywords: {
      beginner: ['computer', 'work', 'type'],
      advanced: ['technology', 'portable', 'screen']
    }
  },
  {
    id: 'obj-21',
    category: 'object',
    text: 'Water Bottle',
    icon: '🥤',
    genres: ['mix'],
    prompts: {
      beginner: ['Is it plastic?', 'Is it full?'],
      advanced: ['Is it eco-friendly?', 'Are there stickers on it?']
    },
    keywords: {
      beginner: ['water', 'drink', 'cold'],
      advanced: ['hydration', 'reusable', 'thirst']
    }
  },
  {
    id: 'obj-22',
    category: 'object',
    text: 'Headphones',
    icon: '🎧',
    genres: ['mix'],
    prompts: {
      beginner: ['Are they big?', 'Are they wireless?'],
      advanced: ['What music is playing?', 'Are they noise-canceling?']
    },
    keywords: {
      beginner: ['music', 'listen', 'ears'],
      advanced: ['audio', 'sound', 'isolate']
    }
  },

  // --- NEW EVERYDAY SETTINGS ---
  {
    id: 'set-16',
    category: 'setting',
    text: 'Supermarket',
    icon: '🛒',
    genres: ['mix'],
    prompts: {
      beginner: ['Is there a lot of food?', 'Is it cold?'],
      advanced: ['Is it crowded?', 'What is on sale today?']
    },
    keywords: {
      beginner: ['food', 'shop', 'buy'],
      advanced: ['grocery', 'aisle', 'produce']
    }
  },
  {
    id: 'set-17',
    category: 'setting',
    text: 'Bus Stop',
    icon: '🚏',
    genres: ['mix'],
    prompts: {
      beginner: ['Is there a bench?', 'Is it raining?'],
      advanced: ['Is the bus late?', 'Who else is waiting?']
    },
    keywords: {
      beginner: ['wait', 'bus', 'street'],
      advanced: ['transit', 'commute', 'schedule']
    }
  },
  {
    id: 'set-18',
    category: 'setting',
    text: 'Classroom',
    icon: '🏫',
    genres: ['mix'],
    prompts: {
      beginner: ['Are there desks?', 'Is there a whiteboard?'],
      advanced: ['Is it boring or fun?', 'Is there a test today?']
    },
    keywords: {
      beginner: ['school', 'learn', 'sit'],
      advanced: ['education', 'lecture', 'student']
    }
  },
  {
    id: 'set-19',
    category: 'setting',
    text: 'Messy Bedroom',
    icon: '🛏️',
    genres: ['mix'],
    prompts: {
      beginner: ['Is the bed unmade?', 'Are clothes on the floor?'],
      advanced: ['Why is it messy?', 'Is there a hidden diary?']
    },
    keywords: {
      beginner: ['sleep', 'mess', 'room'],
      advanced: ['private', 'cluttered', 'personal']
    }
  },
  {
    id: 'set-20',
    category: 'setting',
    text: 'Coffee Shop',
    icon: '☕',
    genres: ['mix'],
    prompts: {
      beginner: ['Does it smell good?', 'Are people working?'],
      advanced: ['Is the music loud?', 'Is it a first date spot?']
    },
    keywords: {
      beginner: ['drink', 'cafe', 'sit'],
      advanced: ['aroma', 'barista', 'cozy']
    }
  },
  {
    id: 'set-21',
    category: 'setting',
    text: 'Public Park',
    icon: '🌳',
    genres: ['mix'],
    prompts: {
      beginner: ['Is the grass green?', 'Are kids playing?'],
      advanced: ['Is it safe at night?', 'Are people walking dogs?']
    },
    keywords: {
      beginner: ['outside', 'play', 'walk'],
      advanced: ['nature', 'recreation', 'green']
    }
  },
  {
    id: 'set-22',
    category: 'setting',
    text: 'Gym',
    icon: '💪',
    genres: ['mix'],
    prompts: {
      beginner: ['Are there heavy weights?', 'Is there music?'],
      advanced: ['Does it smell like sweat?', 'Is it busy?']
    },
    keywords: {
      beginner: ['exercise', 'run', 'lift'],
      advanced: ['fitness', 'workout', 'equipment']
    }
  },

  // --- NEW EVERYDAY ACTIONS ---
  {
    id: 'act-16',
    category: 'action',
    text: 'Cooking',
    icon: '🍳',
    genres: ['mix'],
    prompts: {
      beginner: ['Is it hot?', 'Does it smell good?'],
      advanced: ['What are they making?', 'Did they burn it?']
    },
    keywords: {
      beginner: ['food', 'make', 'eat'],
      advanced: ['prepare', 'recipe', 'chef']
    }
  },
  {
    id: 'act-17',
    category: 'action',
    text: 'Waiting',
    icon: '⌚',
    genres: ['mix'],
    prompts: {
      beginner: ['Are they bored?', 'Are they looking at a watch?'],
      advanced: ['Who are they waiting for?', 'Are they impatient?']
    },
    keywords: {
      beginner: ['time', 'slow', 'stop'],
      advanced: ['patience', 'delay', 'expect']
    }
  },
  {
    id: 'act-18',
    category: 'action',
    text: 'Texting',
    icon: '📱',
    genres: ['mix'],
    prompts: {
      beginner: ['Are they smiling?', 'Are they typing fast?'],
      advanced: ['Who are they talking to?', 'Is it a secret message?']
    },
    keywords: {
      beginner: ['phone', 'type', 'send'],
      advanced: ['message', 'chat', 'digital']
    }
  },
  {
    id: 'act-19',
    category: 'action',
    text: 'Studying',
    icon: '📝',
    genres: ['mix'],
    prompts: {
      beginner: ['Do they have a pen?', 'Are they reading?'],
      advanced: ['Is it for a test?', 'Are they stressed?']
    },
    keywords: {
      beginner: ['learn', 'write', 'book'],
      advanced: ['focus', 'revise', 'academic']
    }
  },
  {
    id: 'act-20',
    category: 'action',
    text: 'Cleaning',
    icon: '🧹',
    genres: ['mix'],
    prompts: {
      beginner: ['Is it dirty?', 'Do they have a broom?'],
      advanced: ['Are they listening to music?', 'Is it a chore?']
    },
    keywords: {
      beginner: ['clean', 'dust', 'wash'],
      advanced: ['tidy', 'organize', 'chore']
    }
  },
  {
    id: 'act-21',
    category: 'action',
    text: 'Walking the Dog',
    icon: '🐕',
    genres: ['mix'],
    prompts: {
      beginner: ['Is the dog happy?', 'Is it sunny?'],
      advanced: ['Is the dog pulling the leash?', 'Where are they going?']
    },
    keywords: {
      beginner: ['walk', 'pet', 'go'],
      advanced: ['leash', 'stroll', 'companion']
    }
  },
  {
    id: 'act-22',
    category: 'action',
    text: 'Shopping',
    icon: '🛍️',
    genres: ['mix'],
    prompts: {
      beginner: ['Do they have money?', 'Is it a big store?'],
      advanced: ['Are they buying clothes or food?', 'Is it expensive?']
    },
    keywords: {
      beginner: ['buy', 'money', 'bag'],
      advanced: ['purchase', 'spend', 'retail']
    }
  }
];
