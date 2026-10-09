import Link from 'next/link';
import { Lock, Unlock, Clock } from 'lucide-react';
import { getChapters } from '@/lib/database/mockDatabase';

export default function ChaptersPage() {
  const chapters = getChapters();

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 font-bold">Chapters</h1>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium">
            The journey begins here. The first few chapters are free to read. Purchase the full novel to unlock the rest of the story.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="glass-card bg-white p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between group shadow-sm hover:shadow-md">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {chapter.isFree ? (
                    <span className="bg-forest-100 text-forest-700 border border-forest-200 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1">
                      <Unlock size={12} /> Free
                    </span>
                  ) : (
                    <span className="bg-amber-100 text-amber-700 border border-amber-200 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1">
                      <Lock size={12} /> Locked
                    </span>
                  )}
                  <span className="text-slate-500 text-sm flex items-center gap-1 font-medium">
                    <Clock size={14} /> {chapter.readingTime}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-2 group-hover:text-forest-700 transition-colors font-bold">
                  {chapter.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{chapter.description}</p>
              </div>
              
              <div className="mt-4 md:mt-0 flex-shrink-0">
                {chapter.isFree ? (
                  <Link 
                    href={`/read/${chapter.id}`}
                    className="inline-block px-6 py-3 border-2 border-forest-200 text-forest-700 rounded-full hover:bg-forest-50 transition-colors text-sm font-bold tracking-widest uppercase text-center w-full md:w-auto"
                  >
                    Read Chapter
                  </Link>
                ) : (
                  <Link 
                    href={`/buy`}
                    className="inline-block px-6 py-3 bg-forest-600 text-white rounded-full hover:bg-forest-700 transition-colors text-sm font-bold tracking-widest uppercase text-center w-full md:w-auto shadow-md"
                  >
                    Unlock
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
