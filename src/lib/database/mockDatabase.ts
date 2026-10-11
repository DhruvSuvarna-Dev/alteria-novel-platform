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
    id: "volume-1",
    bookId: "book-1",
    number: 1,
    title: "VOLUME 01: The Second Chance",
    description: "Ragnar's final moments in the old world, rebirth in the Great Sylphora Dynasty, and the trial beneath the mystical Waterfall of Truth.",
    content: `<div class="space-y-6">
      <h2 class="text-2xl font-serif font-bold text-slate-900 border-b border-slate-200 pb-2">Part I: The Second Chance</h2>
      <p>Ragnar was born a weak-bodied human into the world of man. Abandoned when he was just a child and taken in by a local orphanage, his life was cruel—he was frail, constantly bullied, and alone. No one liked him, and no one cared, except for one girl: Sylve.</p>
      <p>Then came that fateful afternoon. Bullying broke into violence, and as steel scaffolding rods fell from a construction site, Ragnar made his choice: he shoved Sylve out of harm's way. Impaled, bleeding out alone on the cold asphalt, Ragnar's spirit cried out to the heavens:</p>
      <blockquote class="border-l-4 border-forest-500 pl-4 italic text-slate-700 my-4">"I need a second chance! I demand a second chance! GIVE ME A SECOND CHANCE!!!"</blockquote>
      <p>The sky shimmered. A deep, ancient voice answered: <em>"Alright. Let's give you one more chance."</em></p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 border-b border-slate-200 pb-2 pt-6">Part II: A New Start</h2>
      <p>A beam of blinding light tore through the atmosphere, carving a smoldering crater into an unfamiliar realm. When Ragnar awakened with a newly forged body and glowing crimson eyes, he found himself deep within an ancient forest, sheltered by a wise old elf named Elandor Sylphora.</p>
      <p>There, overlooking towering white spires and roaring waterfalls, Ragnar learned the truth: he stood in the greatest elven empire to ever exist—<strong>The Great Sylphora Dynasty</strong>. And the old man before him was none other than its First King and Founder.</p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 border-b border-slate-200 pb-2 pt-6">Part III: The Waterfall of Truth</h2>
      <p>Sent downstream to awaken his magical affinity, Ragnar reached the legendary Waterfall of Truth. Beneath the pounding torrents, the waters forced him into a torturous loop of his past death—forcing him to relive his sacrifice for Sylve over and over until he finally understood the secret of destiny:</p>
      <blockquote class="border-l-4 border-forest-500 pl-4 italic text-slate-700 my-4">"Sometimes accepting your fate is the only way to change your destiny."</blockquote>
      <p>By accepting his past with zero regrets, the illusion shattered. Ragnar emerged triumphant, meeting the mysterious emerald-haired elven girl dancing beneath the moonlight—Sylvie.</p>
    </div>`,
    readingTime: "2 hrs",
    isFree: true,
    price: 0,
    publishedAt: "2026-10-01",
  },
  {
    id: "volume-2",
    bookId: "book-1",
    number: 2,
    title: "VOLUME 02: The First King & The Princess",
    description: "Training under Elandor, discovering Sylvie's true royal heritage, inventing the Fafnir Blade Arts, and confronting the royal court as the Fragment of the Great Dragon.",
    content: "<p>This is a premium volume unlocked with the Alteria Premium Membership. Unlock to continue reading Ragnar and Sylvie's journey through the royal court and beyond.</p>",
    readingTime: "2 hrs",
    isFree: false,
    price: 199,
    publishedAt: "2026-10-05",
  },
  {
    id: "volume-3",
    bookId: "book-1",
    number: 3,
    title: "VOLUME 03: The Queen's Burden",
    description: "Unraveling Queen Sylvana's grief, the sacrifice of diplomat Erywn, the dark history with Camelot, and the formation of a genuine family bond.",
    content: "<p>This is a premium volume unlocked with the Alteria Premium Membership. Unlock to continue reading Ragnar and Sylvie's journey through the royal court and beyond.</p>",
    readingTime: "2 hrs",
    isFree: false,
    price: 199,
    publishedAt: "2026-10-10",
  },
  {
    id: "volume-4",
    bookId: "book-1",
    number: 4,
    title: "VOLUME 04: The Knighting & Beyond",
    description: "Years of discipline at the Elven Academy, the official Knighting by Queen Sylvana, receiving the name Ragnar Sylphora, and the departure toward Camelot.",
    content: "<p>This is a premium volume unlocked with the Alteria Premium Membership. Unlock to continue reading Ragnar and Sylvie's journey through the royal court and beyond.</p>",
    readingTime: "2 hrs",
    isFree: false,
    price: 199,
    publishedAt: "2026-10-15",
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
export const getChapterById = (id: string) => {
  if (id === 'prologue' || id === 'chap-1' || id === '1') {
    return chapters.find(c => c.id === 'volume-1') || chapters[0];
  }
  return chapters.find(c => c.id === id);
};
export const getCharacters = () => characters;
export const getWorldEntries = () => worldEntries;
export const getBook = () => currentBook;
