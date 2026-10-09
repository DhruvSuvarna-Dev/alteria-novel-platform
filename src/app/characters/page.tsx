import Image from 'next/image';
import { getCharacters } from '@/lib/database/mockDatabase';

export default function CharactersPage() {
  const characters = getCharacters();

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block text-forest-700 font-bold tracking-[0.2em] text-sm uppercase mb-4">Dramatis Personae</span>
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 font-bold">Characters</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            Those whose destinies shape the realms of Alteria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {characters.map((character) => (
            <div key={character.id} className="glass-card bg-white overflow-hidden group border border-slate-200 shadow-sm hover:shadow-md hover:border-forest-300 transition-colors">
              <div className="relative h-[400px] w-full bg-slate-100 overflow-hidden border-b border-slate-200">
                {character.image.startsWith('/api') ? (
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 opacity-50">
                     <span className="font-serif text-6xl mb-2">?</span>
                     <span className="text-xs font-bold uppercase tracking-widest">Image Classified</span>
                   </div>
                ) : (
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="p-8">
                <span className="text-forest-600 text-xs font-bold tracking-widest uppercase mb-2 block">
                  {character.role}
                </span>
                <h2 className="text-2xl font-serif text-slate-900 font-bold mb-4">{character.name}</h2>
                <p className="text-slate-600 font-medium mb-6 italic border-l-2 border-forest-500 pl-4">
                  "{character.quote}"
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {character.description}
                </p>
                
                <div className="pt-6 border-t border-slate-200">
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-3 font-bold">Biography</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
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
