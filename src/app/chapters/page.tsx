import Link from 'next/link';
import { Lock, Unlock, Clock, Sparkles } from 'lucide-react';
import { getChapters } from '@/lib/database/mockDatabase';

export default function ChaptersPage() {
  const volumes = getChapters();

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-block text-forest-700 font-bold tracking-[0.2em] text-sm uppercase mb-4">
            The Chronicle
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 font-bold">Volumes</h1>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium">
            The journey begins here. Volume 1 is completely free to read. Volumes 2, 3, and 4 are unlocked under the premium membership.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {volumes.map((volume) => (
            <div key={volume.id} className="glass-card bg-white p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between group shadow-sm hover:shadow-md border border-slate-200 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {volume.isFree ? (
                    <span className="bg-forest-100 text-forest-700 border border-forest-200 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                      <Unlock size={12} /> Free
                    </span>
                  ) : (
                    <span className="bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles size={12} /> Premium
                    </span>
                  )}
                  <span className="text-slate-500 text-sm flex items-center gap-1.5 font-medium">
                    <Clock size={14} /> {volume.readingTime} read
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-2 group-hover:text-forest-700 transition-colors font-bold">
                  {volume.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{volume.description}</p>
              </div>
              
              <div className="mt-4 md:mt-0 flex-shrink-0">
                {volume.isFree ? (
                  <Link 
                    href={`/read/${volume.id}`}
                    className="inline-block px-6 py-3 border-2 border-forest-300 text-forest-700 rounded-full hover:bg-forest-50 transition-colors text-sm font-bold tracking-widest uppercase text-center w-full md:w-auto"
                  >
                    Read Volume
                  </Link>
                ) : (
                  <Link 
                    href={`/buy`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-forest-600 text-white rounded-full hover:bg-forest-700 transition-colors text-sm font-bold tracking-widest uppercase text-center w-full md:w-auto shadow-md"
                  >
                    <Lock size={14} /> Unlock
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
