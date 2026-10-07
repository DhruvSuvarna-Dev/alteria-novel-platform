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
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>

        <div className="container relative z-10 px-6 mt-16 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text Content */}
          <div className="flex-1 max-w-2xl">
            <span className="inline-block text-violet-primary font-medium tracking-[0.2em] text-sm uppercase mb-6 drop-shadow-md">
              An Original Light Novel
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6 tracking-tight drop-shadow-lg">
              ALTERIA
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-serif italic mb-8 max-w-xl">
              "Every world has a beginning. Alteria has a secret."
            </p>
            <p className="text-slate-400 text-lg mb-12 max-w-lg leading-relaxed">
              Enter a world shaped by forgotten powers, impossible choices, and a truth buried beneath generations of silence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/read/prologue"
                className="px-8 py-4 bg-white text-navy-900 hover:bg-slate-200 transition-colors rounded-full font-bold uppercase tracking-wider text-sm flex items-center gap-2"
              >
                Start Reading <ChevronRight size={18} />
              </Link>
              <Link
                href="/world"
                className="px-8 py-4 border border-white/20 text-white hover:bg-white/5 transition-colors rounded-full font-medium uppercase tracking-wider text-sm glass"
              >
                Explore the World
              </Link>
            </div>
          </div>

          {/* Right Artwork Showcase */}
          <div className="hidden lg:block relative w-[400px] h-[600px] animate-float">
            <div className="absolute inset-0 bg-violet-primary/20 blur-[100px] rounded-full" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
               <Image
                src="/book_cover.jpg"
                alt="Alteria Book I Cover"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 flex items-center gap-4 animate-glow">
              <div className="w-12 h-12 bg-violet-primary/20 rounded-full flex items-center justify-center border border-violet-500/30">
                <span className="text-violet-primary text-xl font-serif">I</span>
              </div>
              <div>
                <p className="text-white font-serif font-bold text-lg leading-tight">BOOK I</p>
                <p className="text-cyan-primary text-sm uppercase tracking-wider">Available Now</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs tracking-[0.2em] uppercase text-white">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* 2. STORY INTRODUCTION */}
      <section id="novel" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden border border-white/5 opacity-80">
              <Image
                src="/hero_landscape.jpg"
                alt="Alteria World"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply" />
            </div>
            
            <div>
              <h2 className="text-violet-primary uppercase tracking-[0.2em] text-sm mb-4">The Story Begins</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 text-white">Some worlds are discovered.<br/>Others are remembered.</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                When an ordinary life collides with a forgotten force, the boundaries between myth and reality begin to collapse. What follows is a journey through kingdoms, secrets, ancient powers and choices that could reshape Alteria forever.
              </p>
              <Link
                href="/read/prologue"
                className="inline-flex items-center gap-2 text-cyan-primary hover:text-cyan-light transition-colors font-medium tracking-wider uppercase"
              >
                Read the first chapter <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOVEL SHOWCASE CARD */}
      <section className="py-20 relative bg-navy-900/50 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
             <div className="w-48 h-72 relative flex-shrink-0 shadow-2xl rounded-lg overflow-hidden border border-white/10">
                <Image src="/book_cover.jpg" alt="Book Cover" fill className="object-cover" />
             </div>
             
             <div className="flex-1">
               <h2 className="text-3xl font-serif text-white mb-2">ALTERIA — BOOK I</h2>
               <p className="text-cyan-primary text-sm tracking-widest uppercase mb-8">Full Digital Edition</p>
               
               <div className="grid grid-cols-2 gap-6 mb-8 text-sm">
                 <div>
                   <span className="text-slate-500 block mb-1">Genre</span>
                   <span className="text-slate-300">Fantasy • Mystery • Drama</span>
                 </div>
                 <div>
                   <span className="text-slate-500 block mb-1">Format</span>
                   <span className="text-slate-300">Light Novel</span>
                 </div>
                 <div>
                   <span className="text-slate-500 block mb-1">Status</span>
                   <span className="text-slate-300">Ongoing / Book I</span>
                 </div>
                 <div>
                   <span className="text-slate-500 block mb-1">Language</span>
                   <span className="text-slate-300">English</span>
                 </div>
               </div>
               
               <div className="flex flex-wrap gap-4">
                 <Link href="/read/prologue" className="px-6 py-3 border border-cyan-primary/50 text-cyan-primary rounded-full hover:bg-cyan-primary/10 transition-colors text-sm font-bold tracking-widest uppercase">
                   Free Preview
                 </Link>
                 <Link href="/buy" className="px-6 py-3 bg-violet-primary text-white rounded-full hover:bg-violet-dark transition-colors text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(139,92,246,0.3)]">
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
            <h2 className="text-4xl font-serif text-white mb-4">Begin the Journey</h2>
            <p className="text-slate-400">The first chapters are free to read.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {chapters.map((chapter) => (
              <Link href={`/read/${chapter.id}`} key={chapter.id} className="glass-card p-8 group hover:border-violet-primary/50 transition-colors flex flex-col h-full">
                <span className="text-cyan-primary text-xs font-bold tracking-widest uppercase mb-4 block">FREE</span>
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-violet-light transition-colors">{chapter.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">{chapter.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-slate-500 text-xs">{chapter.readingTime} read</span>
                  <span className="text-white text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0">
                    Read <ChevronRight size={16} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
             <Link href="/chapters" className="inline-flex items-center gap-2 text-violet-primary hover:text-violet-light transition-colors font-medium tracking-wider uppercase text-sm">
                View all chapters <ChevronRight size={18} />
              </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
