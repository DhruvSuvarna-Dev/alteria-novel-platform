import Image from 'next/image';
import { getCharacters } from '@/lib/database/mockDatabase';

export default function CharactersPage() {
  const characters = getCharacters();

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block text-violet-primary font-medium tracking-[0.2em] text-sm uppercase mb-4">Dramatis Personae</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Characters</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Those who walk the Hollow Lands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {characters.map((character) => (
            <div key={character.id} className="glass-card overflow-hidden group">
              <div className="relative h-[400px] w-full bg-navy-900 overflow-hidden border-b border-white/10">
                {character.image.startsWith('/api') ? (
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 opacity-30">
                     <span className="font-serif text-6xl mb-2">?</span>
                     <span className="text-xs uppercase tracking-widest">Image Classified</span>
                   </div>
                ) : (
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="p-8">
                <span className="text-cyan-primary text-xs font-bold tracking-widest uppercase mb-2 block">
                  {character.role}
                </span>
                <h2 className="text-2xl font-serif text-white mb-4">{character.name}</h2>
                <p className="text-slate-300 font-medium mb-6 italic border-l-2 border-violet-primary pl-4">
                  "{character.quote}"
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {character.description}
                </p>
                
                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-3 font-bold">Biography</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {character.biography}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
