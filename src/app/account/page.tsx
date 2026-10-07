import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, History, Settings } from 'lucide-react';
import { getBook } from '@/lib/database/mockDatabase';

export default function AccountPage() {
  const book = getBook();

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="glass-card p-6 sticky top-32">
              <div className="mb-8 text-center md:text-left">
                <div className="w-16 h-16 bg-violet-primary/20 rounded-full flex items-center justify-center text-violet-primary text-xl font-bold mb-4 mx-auto md:mx-0">
                  U
                </div>
                <h2 className="text-white font-serif text-xl">User Name</h2>
                <p className="text-slate-400 text-sm">user@example.com</p>
              </div>
              
              <nav className="flex flex-col gap-2">
                <Link href="/account" className="flex items-center gap-3 px-4 py-3 bg-white/5 text-white rounded-lg transition-colors text-sm font-medium">
                  <BookOpen size={18} /> Library
                </Link>
                <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium">
                  <History size={18} /> History
                </Link>
                <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium">
                  <Settings size={18} /> Settings
                </Link>
              </nav>
            </div>
          </div>
          
          {/* Main Content (Library) */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-serif text-white mb-2">Your Library</h1>
              <p className="text-slate-400">Continue reading your purchased books.</p>
            </div>
            
            <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center md:items-start group">
              <div className="w-32 h-48 relative flex-shrink-0 shadow-lg rounded overflow-hidden">
                <Image src={book.cover} alt={book.title} fill className="object-cover" />
              </div>
              
              <div className="flex-1 w-full text-center md:text-left">
                <h3 className="text-2xl font-serif text-white mb-1">{book.title}</h3>
                <p className="text-cyan-primary text-xs uppercase tracking-widest mb-6">Chapter 04: The Aether's Call</p>
                
                <div className="mb-8 w-full">
                  <div className="flex justify-between text-xs text-slate-400 mb-2">
                    <span>Reading Progress</span>
                    <span>78%</span>
                  </div>
                  <div className="w-full bg-navy-900 rounded-full h-1.5 overflow-hidden border border-white/10">
                    <div className="bg-violet-primary h-full rounded-full" style={{ width: '78%' }} />
                  </div>
                </div>
                
                <Link 
                  href="/read/chap-4" 
                  className="inline-block px-8 py-3 bg-violet-primary text-white rounded-full hover:bg-violet-dark transition-colors text-sm font-bold tracking-widest uppercase"
                >
                  Continue Reading
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
