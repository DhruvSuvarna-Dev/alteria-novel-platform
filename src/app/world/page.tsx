import { Lock } from 'lucide-react';
import { getWorldEntries } from '@/lib/database/mockDatabase';

export default function WorldPage() {
  const entries = getWorldEntries();
  const realms = entries.filter(e => e.category === 'REALM');
  const factions = entries.filter(e => e.category === 'FACTION');
  const magic = entries.filter(e => e.category === 'MAGIC');

  const renderSection = (title: string, data: typeof entries) => (
    <section className="mb-20">
      <h2 className="text-2xl font-serif text-white mb-8 border-b border-white/10 pb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map(entry => (
          <div key={entry.id} className="glass-card p-6 md:p-8 relative overflow-hidden group">
            {entry.status !== 'UNLOCKED' && (
              <div className="absolute top-4 right-4 bg-navy-900 border border-white/10 px-3 py-1 rounded text-xs tracking-widest text-slate-400 uppercase font-bold flex items-center gap-2">
                <Lock size={12} /> {entry.status}
              </div>
            )}
            
            <span className="text-violet-primary text-xs font-bold tracking-widest uppercase mb-2 block">
              {entry.category}
            </span>
            <h3 className="text-xl font-serif text-white mb-2">{entry.title}</h3>
            <p className="text-slate-300 font-medium mb-4">{entry.description}</p>
            
            <div className={`text-slate-400 text-sm leading-relaxed transition-all duration-300 ${entry.status !== 'UNLOCKED' ? 'blur-sm select-none' : ''}`}>
              {entry.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block text-violet-primary font-medium tracking-[0.2em] text-sm uppercase mb-4">Lore Archive</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">The World of Alteria</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore the realms, factions, and forgotten magic that shape the story. Some entries remain classified until discovered in the novel.
          </p>
        </div>

        {renderSection('Realms', realms)}
        {renderSection('Factions', factions)}
        {renderSection('Magic System', magic)}
      </div>
    </div>
  );
}
