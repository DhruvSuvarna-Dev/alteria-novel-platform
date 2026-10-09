import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getChapters, getCharacters, getWorldEntries } from '@/lib/database/mockDatabase';

export default function Home() {
  const chapters = getChapters().slice(0, 3);
  const characters = getCharacters();
  const realms = getWorldEntries().filter(e => e.category === 'REALM').slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_landscape.jpg"
            alt="Alteria Landscape"
            fill
            className="object-cover object-center opacity-70"
            priority
          />
          {/* Smooth gradient from solid white on the left (for text) to transparent on the right (for image) */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          {/* Fade to background at the bottom to blend with next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        <div className="container relative z-10 px-6 mt-16 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text Content */}
          <div className="flex-1 max-w-2xl">
            <span className="inline-block text-forest-700 font-bold tracking-[0.2em] text-sm uppercase mb-6 drop-shadow-sm">
              An Original Light Novel
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-slate-900 mb-6 tracking-tight drop-shadow-sm">
              ALTERIA
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 font-serif italic mb-8 max-w-xl">
              "Every world has a beginning. Alteria has a secret."
            </p>
            <p className="text-slate-600 text-lg mb-12 max-w-lg leading-relaxed font-medium">
              Enter a world shaped by forgotten powers, impossible choices, and a truth buried beneath generations of silence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/read/prologue"
                className="px-8 py-4 bg-forest-600 text-white hover:bg-forest-700 transition-colors rounded-full font-bold uppercase tracking-wider text-sm flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Start Reading <ChevronRight size={18} />
              </Link>
              <Link
                href="/world"
                className="px-8 py-4 border-2 border-forest-600/30 text-forest-800 hover:bg-forest-50 transition-colors rounded-full font-bold uppercase tracking-wider text-sm glass"
              >
                Explore the World
              </Link>
            </div>
          </div>

          {/* Right Artwork Showcase */}
          <div className="hidden lg:block relative w-[400px] h-[600px] animate-float">
            <div className="absolute inset-0 bg-forest-400/20 blur-[100px] rounded-full" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
               <Image
                src="/book_cover.jpg"
                alt="Alteria Book I Cover"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 flex items-center gap-4 bg-white/90">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center border border-forest-200">
                <span className="text-forest-700 text-xl font-serif font-bold">I</span>
              </div>
              <div>
                <p className="text-slate-900 font-serif font-bold text-lg leading-tight">BOOK I</p>
                <p className="text-forest-600 font-bold text-sm uppercase tracking-wider">Available Now</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-80">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent" />
        </div>
      </section>

      {/* 2. STORY INTRODUCTION */}
      <section id="novel" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden border border-slate-200 shadow-xl opacity-90">
              <Image
                src="/hero_landscape.jpg"
                alt="Alteria World"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-forest-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">The Story Begins</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 text-slate-900">Some worlds are discovered.<br/>Others are remembered.</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                When an ordinary life collides with a forgotten force, the boundaries between myth and reality begin to collapse. What follows is a journey through kingdoms, secrets, ancient powers and choices that could reshape Alteria forever.
              </p>
              <Link
                href="/read/prologue"
                className="inline-flex items-center gap-2 text-forest-700 hover:text-forest-800 transition-colors font-bold tracking-wider uppercase"
              >
                Read the first chapter <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOVEL SHOWCASE CARD */}
      <section className="py-20 relative bg-forest-50 border-y border-forest-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card bg-white/80 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
             <div className="w-48 h-72 relative flex-shrink-0 shadow-2xl rounded-lg overflow-hidden border border-slate-200">
                <Image src="/book_cover.jpg" alt="Book Cover" fill className="object-cover" />
             </div>
             
             <div className="flex-1">
               <h2 className="text-3xl font-serif text-slate-900 mb-2 font-bold">ALTERIA — BOOK I</h2>
               <p className="text-forest-600 font-bold text-sm tracking-widest uppercase mb-8">Full Digital Edition</p>
               
               <div className="grid grid-cols-2 gap-6 mb-8 text-sm">
                 <div>
                   <span className="text-slate-500 font-bold block mb-1 uppercase text-xs tracking-wider">Genre</span>
                   <span className="text-slate-700 font-medium">Fantasy • Mystery • Drama</span>
                 </div>
                 <div>
                   <span className="text-slate-500 font-bold block mb-1 uppercase text-xs tracking-wider">Format</span>
                   <span className="text-slate-700 font-medium">Light Novel</span>
                 </div>
                 <div>
                   <span className="text-slate-500 font-bold block mb-1 uppercase text-xs tracking-wider">Status</span>
                   <span className="text-slate-700 font-medium">Ongoing / Book I</span>
                 </div>
                 <div>
                   <span className="text-slate-500 font-bold block mb-1 uppercase text-xs tracking-wider">Language</span>
                   <span className="text-slate-700 font-medium">English</span>
                 </div>
               </div>
               
               <div className="flex flex-wrap gap-4">
                 <Link href="/read/prologue" className="px-6 py-3 border-2 border-forest-200 text-forest-700 rounded-full hover:bg-forest-50 transition-colors text-sm font-bold tracking-widest uppercase">
                   Free Preview
                 </Link>
                 <Link href="/buy" className="px-6 py-3 bg-forest-600 text-white rounded-full hover:bg-forest-700 transition-colors text-sm font-bold tracking-widest uppercase shadow-lg">
                   Buy Novel — ₹299
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. FREE PREVIEW TEASER */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-slate-900 mb-4 font-bold">Begin the Journey</h2>
            <p className="text-slate-600 font-medium">The first chapters are free to read.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {chapters.map((chapter) => (
              <Link href={`/read/${chapter.id}`} key={chapter.id} className="glass-card bg-white p-8 group hover:border-forest-300 transition-colors flex flex-col h-full shadow-sm hover:shadow-md">
                <span className="text-forest-600 text-xs font-bold tracking-widest uppercase mb-4 block">FREE</span>
                <h3 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-forest-700 transition-colors font-bold">{chapter.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{chapter.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-slate-500 text-xs font-medium">{chapter.readingTime} read</span>
                  <span className="text-forest-700 text-sm font-bold flex items-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0">
                    Read <ChevronRight size={16} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
             <Link href="/chapters" className="inline-flex items-center gap-2 text-forest-700 hover:text-forest-800 transition-colors font-bold tracking-wider uppercase text-sm">
                View all chapters <ChevronRight size={18} />
              </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
