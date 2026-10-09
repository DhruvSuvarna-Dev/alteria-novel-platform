'use client';

import { useState } from 'react';
import { Lock } from 'lucide-react';
import { getWorldEntries } from '@/lib/database/mockDatabase';

export default function WorldPage() {
  const [activeTab, setActiveTab] = useState<'ALL' | 'REALM' | 'FACTION' | 'MAGIC'>('ALL');
  const entries = getWorldEntries();

  const filteredEntries = activeTab === 'ALL' 
    ? entries 
    : entries.filter(e => e.category === activeTab);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-forest-700 font-bold tracking-[0.2em] text-sm uppercase mb-4">Lore Database</span>
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 font-bold">The World of Alteria</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            Explore the realms, factions, and forgotten magic of the world. Some information remains classified until you progress further in the story.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['ALL', 'REALM', 'FACTION', 'MAGIC'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-colors ${
                activeTab === tab 
                ? 'bg-forest-600 text-white shadow-md' 
                : 'border border-slate-300 text-slate-600 hover:border-forest-400 hover:text-forest-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEntries.map(entry => {
            const isUnlocked = entry.status === 'UNLOCKED';
            return (
              <div key={entry.id} className="glass-card bg-white p-6 relative overflow-hidden group hover:border-forest-300 transition-colors shadow-sm hover:shadow-md">
                <span className="text-forest-600 text-[10px] font-bold tracking-widest uppercase mb-3 block">{entry.category}</span>
                
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-serif text-slate-900 group-hover:text-forest-700 transition-colors font-bold">{entry.title}</h3>
                  {!isUnlocked && <Lock size={16} className="text-amber-500" />}
                </div>

                {isUnlocked ? (
                  <p className="text-slate-600 text-sm leading-relaxed">{entry.content}</p>
                ) : (
                  <div className="bg-slate-100 border border-slate-200 p-4 rounded text-center">
                    <p className="text-slate-500 text-sm font-mono">[ DATA CLASSIFIED ]</p>
                    <p className="text-slate-400 text-xs mt-2 font-medium">Continue reading to unlock</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
