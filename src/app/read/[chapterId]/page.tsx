'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Settings2, List, Type, Check } from 'lucide-react';
import { getChapterById, getChapters } from '@/lib/database/mockDatabase';

export default function ReaderPage({ params }: { params: { chapterId: string } }) {
  const router = useRouter();
  const chapter = getChapterById(params.chapterId);
  const allChapters = getChapters();
  
  const [fontSize, setFontSize] = useState(20);
  const [showSettings, setShowSettings] = useState(false);

  if (!chapter) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <h1 className="text-slate-900 text-2xl font-serif font-bold">Chapter not found</h1>
      </div>
    );
  }

  const chapterIndex = allChapters.findIndex(c => c.id === chapter.id);
  const nextChapter = allChapters[chapterIndex + 1];
  const prevChapter = allChapters[chapterIndex - 1];

  // Paywall Check
  const showPaywall = !chapter.isFree;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-forest-500/30 selection:text-forest-900">
      {/* READER TOP BAR */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/chapters" className="text-slate-500 hover:text-forest-700 transition-colors" aria-label="Back to chapters">
            <ChevronLeft size={24} />
          </Link>
          <div className="hidden md:block text-sm text-slate-600 font-serif font-bold">
            ALTERIA <span className="mx-2 font-sans font-normal text-slate-300">•</span> {chapter.title}
          </div>
        </div>

        <div className="flex items-center gap-4 relative">
          <Link href="/chapters" className="text-slate-500 hover:text-forest-700 transition-colors">
            <List size={20} />
          </Link>
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="text-slate-500 hover:text-forest-700 transition-colors"
          >
            <Settings2 size={20} />
          </button>

          {/* Settings Dropdown */}
          {showSettings && (
            <div className="absolute top-12 right-0 w-64 glass-card bg-white p-4 shadow-xl border border-slate-200 z-50">
              <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-bold">Text Size</h4>
              <div className="flex items-center justify-between gap-4">
                <button 
                  onClick={() => setFontSize(Math.max(16, fontSize - 2))}
                  className="w-10 h-10 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700"
                >
                  <Type size={16} />
                </button>
                <span className="text-sm font-medium">{fontSize}px</span>
                <button 
                  onClick={() => setFontSize(Math.min(32, fontSize + 2))}
                  className="w-10 h-10 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700"
                >
                  <Type size={24} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="container mx-auto px-6 py-12 md:py-24 max-w-[800px]">
        
        {/* Title Area */}
        <div className="mb-16 text-center">
          <span className="text-forest-600 tracking-widest uppercase text-sm mb-4 block font-bold">
            Chapter {chapter.number.toString().padStart(2, '0')}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight font-bold">
            {chapter.title.split(': ')[1] || chapter.title}
          </h1>
        </div>

        {/* Content or Paywall */}
        {showPaywall ? (
          <div className="glass-card bg-white p-8 md:p-12 text-center relative overflow-hidden shadow-lg border-slate-200">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-forest-50 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-2xl font-serif text-slate-900 mb-2 font-bold">THE STORY CONTINUES</h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto font-medium">
                You've reached the edge of the free preview. Unlock the rest of ALTERIA and continue the journey.
              </p>
              
              <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left max-w-sm mx-auto border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-4 flex justify-between">
                  <span>FULL NOVEL</span>
                  <span className="text-forest-600">₹299</span>
                </h3>
                <ul className="space-y-3">
                  {['Full story access', 'Future chapter updates', 'Premium reading experience', 'Read on any device'].map(benefit => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                      <Check size={16} className="text-forest-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/buy" className="w-full sm:w-auto px-8 py-3 bg-forest-600 text-white rounded-full hover:bg-forest-700 transition-colors text-sm font-bold tracking-widest uppercase shadow-md">
                  Unlock Alteria
                </Link>
                <Link href="/chapters" className="w-full sm:w-auto px-8 py-3 border-2 border-forest-200 text-forest-700 rounded-full hover:bg-forest-50 transition-colors text-sm font-bold tracking-widest uppercase">
                  View Free Chapters
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div 
            className="prose prose-slate prose-lg max-w-none font-serif leading-relaxed text-slate-800"
            style={{ fontSize: `${fontSize}px` }}
            dangerouslySetInnerHTML={{ __html: chapter.content }}
          />
        )}

        {/* Bottom Navigation */}
        <div className="mt-24 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevChapter ? (
            <Link 
              href={`/read/${prevChapter.id}`} 
              className="flex items-center gap-3 text-slate-500 hover:text-forest-700 transition-colors group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold">Previous</span>
                <span className="font-serif font-bold text-slate-700 group-hover:text-forest-700">{prevChapter.title.split(': ')[1] || prevChapter.title}</span>
              </div>
            </Link>
          ) : <div />}

          {nextChapter && (
            <Link 
              href={`/read/${nextChapter.id}`} 
              className="flex items-center gap-3 text-slate-500 hover:text-forest-700 transition-colors text-right group"
            >
              <div>
                <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold">Next</span>
                <span className="font-serif font-bold text-slate-700 group-hover:text-forest-700">{nextChapter.title.split(': ')[1] || nextChapter.title}</span>
              </div>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}
