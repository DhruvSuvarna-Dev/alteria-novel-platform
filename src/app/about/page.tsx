import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-block text-violet-primary font-medium tracking-[0.2em] text-sm uppercase mb-4">The Story Behind</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Alteria</h1>
        </div>

        <div className="glass-card p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-serif text-white mb-6 border-b border-white/10 pb-4">Vision & Origins</h2>
          <div className="prose prose-invert prose-lg max-w-none font-sans text-slate-300">
            <p>
              Alteria was born from a desire to create a premium, immersive digital light novel experience. We wanted to move away from generic web readers and build a platform that feels as cinematic and magical as the story itself.
            </p>
            <p>
              The world of Alteria is a dark fantasy setting where ancient technology, forgotten magic, and political intrigue collide. We've designed this platform not just as a place to read the text, but to explore the lore, understand the characters, and truly <em>enter</em> the world.
            </p>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 text-center">
           <h2 className="text-2xl font-serif text-white mb-8">The Creator</h2>
           <div className="w-32 h-32 mx-auto rounded-full bg-navy-900 border-2 border-violet-primary/50 flex items-center justify-center mb-6 overflow-hidden relative">
              <span className="text-4xl font-serif text-slate-500">A</span>
           </div>
           <h3 className="text-xl font-serif text-white mb-2">Author Name</h3>
           <p className="text-cyan-primary text-sm uppercase tracking-widest mb-6">Writer & Worldbuilder</p>
           <p className="text-slate-400 max-w-lg mx-auto">
             Building the ruins of the Hollow Lands and charting the floating islands of Aether. Dedicated to crafting stories where choices matter and magic has a price.
           </p>
        </div>
      </div>
    </div>
  );
}
