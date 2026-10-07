import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-[url('/hero_landscape.jpg')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm" />
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-6">404</h1>
        <h2 className="text-xl md:text-2xl text-violet-primary font-medium tracking-[0.2em] uppercase mb-4">
          You've wandered beyond the map.
        </h2>
        <p className="text-slate-400 max-w-md mx-auto mb-12 font-serif italic text-lg">
          "Even Alteria has places that should not be found."
        </p>
        
        <Link 
          href="/"
          className="inline-block px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors font-bold tracking-widest uppercase text-sm glass"
        >
          Return to Alteria
        </Link>
      </div>
    </div>
  );
}
