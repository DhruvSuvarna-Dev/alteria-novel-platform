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
    id: "ragnar",
    name: "Ragnar Sylphora",
    role: "Fragment of the Great Dragon",
    description: "A boy reborn in Alteria with crimson eyes, a fire affinity, and a destiny shaped by prophecy.",
    biography: "Once a frail and bullied orphan in another world, Ragnar died saving his only friend, Sylve. He demanded a second chance and awoke in Alteria, taken in by the First King. Armed with the Fafnir Blade Arts and incredible resolve, he trains relentlessly to protect those he cares about.",
    image: "/character_kael.jpg", // Kept same as requested ("dont change imgs")
    quote: "Sometimes accepting your fate is the only way to change your destiny."
  },
  {
    id: "sylvie",
    name: "Sylvie Sylphora",
    role: "Princess of Sylphora",
    description: "The emerald-haired heir to the throne, a free-spirited prodigy of wind magic.",
    biography: "Sheltered inside the palace for fourteen years by a protective mother, Sylvie yearned for freedom. She dances like the wind itself and wields wind magic with surgical precision. Alongside Ragnar, she prepares to defy the boundaries of her empire at the Academy.",
    image: "/api/placeholder/400/400", 
    quote: "You can’t change destiny just because you know what happens next."
  },
  {
    id: "elandor",
    name: "Elandor Sylphora",
    role: "The First King",
    description: "Founder of the Sylphora Dynasty, a legendary wind mage who lives simply in a hilltop shack.",
    biography: "Elandor is the original ruler of the Sylphora Empire and a master of the Zirdunth Blade Arts. Preferring a quiet life away from the glittering palace, he takes Ragnar as his pupil and acts as a humorous, fiercely protective grandfather figure to Sylvie.",
    image: "/api/placeholder/400/400",
    quote: "A king must know when to leave the stage... and when to return."
  },
  {
    id: "sylvana",
    name: "Queen Sylvana Sylphora",
    role: "The Third Queen",
    description: "The regal and fiercely protective ruler of the Sylphora Dynasty.",
    biography: "Scarred by the tragic death of her husband Erywn in Camelot, Queen Sylvana became highly overprotective of her daughter. Though initially cold to Ragnar for being human, his empathy and understanding of loss help heal her past wounds.",
    image: "/api/placeholder/400/400",
    quote: "I'd wish for my daughter to have everything she wants."
  }
];

export const worldEntries: WorldEntry[] = [
  {
    id: "realm-1",
    category: "REALM",
    title: "The Great Sylphora Dynasty",
    description: "The greatest Elven Empire to ever exist.",
    content: "A breathtaking city of towering white stone buildings wrapped in vines of glowing flowers. The elves here are born under the blessing of the Great Nature Spirit, granting them the wind attribute. It was founded by Elandor and shaped by the Great Dragon Zirdunth.",
    status: "UNLOCKED"
  },
  {
    id: "magic-1",
    category: "MAGIC",
    title: "Veil of Aetherium",
    description: "The magical shield protecting Sylphora.",
    content: "A vast, translucent dome humming with quiet energy that arches over the entire kingdom of Sylphora. It keeps the Elven Empire hidden from the outside world, acting as their ultimate shield and secret.",
    status: "UNLOCKED"
  },
  {
    id: "faction-1",
    category: "FACTION",
    title: "Sylvan Sentinels",
    description: "The strongest four Elves alive.",
    content: "An elite group of warriors strong enough to flatten armies alone. They answer only to the First King's will, then the acting ruler, and only then to royalty.",
    status: "CLASSIFIED"
  },
  {
    id: "realm-2",
    category: "REALM",
    title: "Kingdom of Camelot",
    description: "A human kingdom with a dark past.",
    content: "Once ruled by a tyrant named Kruger Camelot who enslaved elves, it has since been overthrown by a rebellion led by a noble young king named Arthur Pendragon, forging a fragile peace with Sylphora.",
    status: "COMING SOON"
  },
  {
    id: "magic-2",
    category: "MAGIC",
    title: "Waterfall of Truth",
    description: "A sacred site for training the heart.",
    content: "A magical waterfall that doesn't just show the truth—it shows a person their heart’s truest desire and greatest regrets. It is used to calm the mind and strengthen the inner core.",
    status: "UNLOCKED"
  }
];

// Data Access Helpers
export const getChapters = () => chapters;
export const getChapterById = (id: string) => chapters.find(c => c.id === id);
export const getCharacters = () => characters;
export const getWorldEntries = () => worldEntries;
export const getBook = () => currentBook;
