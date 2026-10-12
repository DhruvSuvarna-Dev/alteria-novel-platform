'use client';

import { useState } from 'react';
import { Lock } from 'lucide-react';
import { getWorldEntries } from '@/lib/database/mockDatabase';

type TabType = 'ALL' | 'KINGDOMS' | 'FACTIONS' | 'MAGIC';

export default function WorldPage() {
  const [activeTab, setActiveTab] = useState<TabType>('ALL');
  const entries = getWorldEntries();

  const filteredEntries = activeTab === 'ALL' 
    ? entries 
    : entries.filter(e => {
        if (activeTab === 'KINGDOMS') return e.category === 'KINGDOM';
        if (activeTab === 'FACTIONS') return e.category === 'FACTION';
        if (activeTab === 'MAGIC') return e.category === 'MAGIC';
        return true;
      });

  const tabs: { id: TabType; label: string }[] = [
    { id: 'ALL', label: 'All' },
    { id: 'KINGDOMS', label: 'Kingdoms' },
    { id: 'FACTIONS', label: 'Factions' },
    { id: 'MAGIC', label: 'Magic' },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-forest-700 font-bold tracking-[0.2em] text-sm uppercase mb-4">Lore Database</span>
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 font-bold">The World of Alteria</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            Explore the kingdoms, factions, and ancient magic of the world.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all ${
                activeTab === tab.id 
                ? 'bg-forest-600 text-white shadow-md' 
                : 'border border-slate-300 text-slate-600 hover:border-forest-400 hover:text-forest-700 bg-white/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredEntries.map(entry => {
            const isUnlocked = entry.status === 'UNLOCKED';
            return (
              <div key={entry.id} className="glass-card bg-white p-8 relative overflow-hidden group hover:border-forest-300 transition-colors shadow-sm hover:shadow-md border border-slate-200">
                <span className="text-forest-600 text-[11px] font-bold tracking-widest uppercase mb-3 block">{entry.category}</span>
                
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-serif text-slate-900 group-hover:text-forest-700 transition-colors font-bold">{entry.title}</h3>
                  {!isUnlocked && <Lock size={16} className="text-amber-500" />}
                </div>

                {isUnlocked ? (
                  <p className="text-slate-600 text-base leading-relaxed font-normal">{entry.content}</p>
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
