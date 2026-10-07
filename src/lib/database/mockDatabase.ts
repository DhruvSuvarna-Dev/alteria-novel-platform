export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  cover: string;
  price: number;
  status: string;
}

export interface Chapter {
  id: string;
  bookId: string;
  number: number;
  title: string;
  description: string;
  content: string; // The HTML/Rich text of the chapter
  readingTime: string;
  isFree: boolean;
  price: number;
  publishedAt: string;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  biography: string;
  image: string;
  quote: string;
}

export interface WorldEntry {
  id: string;
  category: string;
  title: string;
  description: string;
  content: string;
  status: 'UNLOCKED' | 'CLASSIFIED' | 'COMING SOON';
}

// ----------------------------------------------------
// MOCK DATA
// ----------------------------------------------------

export const currentBook: Book = {
  id: "book-1",
  title: "ALTERIA — BOOK I",
  description: "Enter a world shaped by forgotten powers, impossible choices, and a truth buried beneath generations of silence.",
  cover: "/book_cover.jpg",
  price: 299,
  status: "Ongoing / Book I",
};

export const chapters: Chapter[] = [
  {
    id: "prologue",
    bookId: "book-1",
    number: 0,
    title: "PROLOGUE: The World Before",
    description: "Some worlds are discovered. Others are remembered. A glimpse into the shattered history of Alteria.",
    content: "<p>The sky above the Hollow Lands had not been blue for a thousand years. Instead, it was a bruised, turbulent canvas of violet and ash, perpetually swirling around the shattered remains of the first kingdom.</p><p>Kael stood at the edge of the abyss, the wind tearing at his cloak. He held the fragment in his hand—a small, humming crystal that glowed with an impossible cyan light. It was a piece of the world that was, a world he had only seen in dreams that didn't belong to him.</p><p><i>\"You shouldn't have found that,\"</i> a voice whispered from the shadows behind him.</p><p>He didn't turn around. He didn't need to.</p>",
    readingTime: "5 min",
    isFree: true,
    price: 0,
    publishedAt: "2026-10-01",
  },
  {
    id: "chap-1",
    bookId: "book-1",
    number: 1,
    title: "CHAPTER 01: The First Sign",
    description: "An ordinary life collides with a forgotten force.",
    content: "<p>The village of Oakhaven was unremarkable in every conceivable way. It was the kind of place people passed through on their way to somewhere more important, assuming they knew it existed at all.</p><p>For seventeen years, Kael had known every stone, every tree, and every weathered face in this secluded valley. But today, the stones were humming.</p><p>It started as a faint vibration beneath his boots as he walked the path to the upper ridge. By the time he reached the old watchtower ruins, the air itself felt heavy, charged with static that made the hair on his arms stand on end.</p><p>Then, the ancient stonework began to glow.</p>",
    readingTime: "12 min",
    isFree: true,
    price: 0,
    publishedAt: "2026-10-05",
  },
  {
    id: "chap-2",
    bookId: "book-1",
    number: 2,
    title: "CHAPTER 02: A Door That Should Not Exist",
    description: "The boundaries between myth and reality begin to collapse.",
    content: "<p>The light was blinding. When Kael finally opened his eyes, the ruins were gone. Or rather, they were whole again.</p><p>Tall spires of smooth, obsidian-like stone reached toward a sky that was a breathtaking, terrifying expanse of stars. There was no sun, yet everything was illuminated by a soft, ambient luminescence that seemed to bleed from the architecture itself.</p><p>\"Where am I?\" he breathed, his voice barely a whisper in the vast, echoing silence.</p><p>He took a step forward, and the ground rippled like water beneath his feet.</p>",
    readingTime: "15 min",
    isFree: true,
    price: 0,
    publishedAt: "2026-10-10",
  },
  {
    id: "chap-3",
    bookId: "book-1",
    number: 3,
    title: "CHAPTER 03: The Forgotten Name",
    description: "What follows is a journey through kingdoms, secrets, and ancient powers.",
    content: "<p>This is a locked chapter. In the full implementation, this content would only be served to users who have successfully authenticated and have a verified purchase record for Book 1 in the database.</p><p>The story continues with Kael discovering the true nature of the city, encountering the mysterious faction known as the Silent Watchers, and realizing that his arrival was not an accident.</p>",
    readingTime: "18 min",
    isFree: false,
    price: 50,
    publishedAt: "2026-10-15",
  },
  {
    id: "chap-4",
    bookId: "book-1",
    number: 4,
    title: "CHAPTER 04: The Aether's Call",
    description: "Choices that could reshape Alteria forever.",
    content: "<p>This is a locked chapter.</p>",
    readingTime: "20 min",
    isFree: false,
    price: 50,
    publishedAt: "2026-10-20",
  }
];

export const characters: Character[] = [
  {
    id: "kael",
    name: "Kael Ardyn",
    role: "The Reluctant Vessel",
    description: "A boy from a forgotten village who accidentally awakens an ancient remnant of the first kingdom.",
    biography: "Raised in the quiet valley of Oakhaven, Kael believed his life would be simple. He apprenticed as a cartographer, drawing maps of a world he never expected to see. All that changed when he discovered a cyan crystal in the ruins above his village.",
    image: "/character_kael.jpg",
    quote: "I didn't ask for this power, but I won't let it destroy what's left of us."
  },
  {
    id: "lyra",
    name: "Lyra Vance",
    role: "The Silent Watcher",
    description: "A highly skilled operative from a faction dedicated to keeping the Hollow Lands sealed.",
    biography: "Trained since childhood in the lethal arts and magical suppression, Lyra was sent to eliminate the anomaly in Oakhaven. Instead, she found a boy who shouldn't exist.",
    image: "/api/placeholder/400/400", // Will use placeholder API for now
    quote: "Some doors are meant to stay closed. You just kicked one wide open."
  },
  {
    id: "valerius",
    name: "Lord Valerius",
    role: "The Architect of Shadows",
    description: "A charismatic but ruthless leader seeking to harness the lost magic of Alteria.",
    biography: "Ruler of the northern territories, Valerius believes that the only way to save the world is to control its fundamental forces, regardless of the cost in human lives.",
    image: "/api/placeholder/400/400",
    quote: "Power is not given, child. It is taken by those with the will to wield it."
  }
];

export const worldEntries: WorldEntry[] = [
  {
    id: "realm-1",
    category: "REALM",
    title: "The Kingdom of Aether",
    description: "The once-great center of the world, now a floating ruin.",
    content: "Legend says the Kingdom of Aether was suspended in the sky by pure magic. When the First Sundering occurred, it shattered, raining debris across the continent. Now, it exists as a treacherous floating archipelago where ancient technology and unstable magic collide.",
    status: "UNLOCKED"
  },
  {
    id: "realm-2",
    category: "REALM",
    title: "The Hollow Lands",
    description: "A forbidden zone where reality is constantly shifting.",
    content: "A massive crater left behind by the Sundering. The laws of physics do not apply here. Time moves differently, and gravity is a suggestion. Only the most desperate or foolish venture in.",
    status: "UNLOCKED"
  },
  {
    id: "faction-1",
    category: "FACTION",
    title: "The Silent Watchers",
    description: "Guardians of the old seals.",
    content: "An ancient order of warrior-mages dedicated to preventing the return of the chaotic magic that destroyed the first kingdom.",
    status: "CLASSIFIED"
  },
  {
    id: "magic-1",
    category: "MAGIC",
    title: "Resonance",
    description: "The fundamental power system of Alteria.",
    content: "Magic in Alteria is not cast; it is resonated. Practitioners, known as Resonators, align their internal energy with the ambient frequencies of the world to manipulate elements, force, and even time.",
    status: "COMING SOON"
  }
];

// Data Access Helpers
export const getChapters = () => chapters;
export const getChapterById = (id: string) => chapters.find(c => c.id === id);
export const getCharacters = () => characters;
export const getWorldEntries = () => worldEntries;
export const getBook = () => currentBook;
