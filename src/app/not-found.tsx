import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[url('/hero_landscape.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-serif text-slate-900 mb-6">404</h1>
        <h2 className="text-xl md:text-2xl text-forest-700 font-bold tracking-[0.2em] uppercase mb-4">
          You've wandered beyond the map.
        </h2>
        <p className="text-slate-600 max-w-md mx-auto mb-12 font-serif italic text-lg">
          "Even Alteria has places that should not be found."
        </p>
        
        <Link 
          href="/"
          className="inline-block px-8 py-4 border-2 border-forest-200 text-forest-800 rounded-full hover:bg-forest-50 transition-colors font-bold tracking-widest uppercase text-sm glass"
        >
          Return to Alteria
        </Link>
      </div>
    </div>
  );
}
