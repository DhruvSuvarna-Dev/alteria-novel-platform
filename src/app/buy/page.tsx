import Image from 'next/image';
import Link from 'next/link';
import { Check, ShieldCheck } from 'lucide-react';
import { getBook } from '@/lib/database/mockDatabase';

export default function BuyPage() {
  const book = getBook();

  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block text-violet-primary font-medium tracking-[0.2em] text-sm uppercase mb-4">Unlock The Story</span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Enter Alteria</h1>
        </div>

        <div className="glass-card p-1 md:p-2 max-w-4xl mx-auto overflow-hidden">
          <div className="bg-navy-900 rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 to-cyan-900/10 pointer-events-none" />
            
            {/* Book Art */}
            <div className="w-48 h-72 md:w-64 md:h-96 relative flex-shrink-0 shadow-2xl rounded-lg overflow-hidden border border-white/10 z-10 animate-float">
               <Image src={book.cover} alt={book.title} fill className="object-cover" />
            </div>
            
            {/* Details */}
            <div className="flex-1 z-10 w-full">
              <h2 className="text-3xl font-serif text-white mb-2">{book.title}</h2>
              <p className="text-cyan-primary text-sm tracking-widest uppercase mb-6">Full Digital Edition</p>
              
              <div className="mb-8 pb-8 border-b border-white/10">
                <p className="text-4xl text-white font-bold mb-2">₹{book.price}</p>
                <p className="text-slate-400 text-sm">One-time purchase. Read forever.</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Full digital novel access',
                  'Instant access to all current chapters',
                  'Free updates for future Book I chapters',
                  'Read seamlessly on mobile and desktop',
                  'Personal digital library access'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check size={20} className="text-violet-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col gap-4">
                <button className="w-full py-4 bg-violet-primary text-white rounded-lg hover:bg-violet-dark transition-colors font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  Buy Now
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                  <ShieldCheck size={14} /> Secure mock payment gateway
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/chapters" className="text-slate-400 hover:text-white transition-colors text-sm underline underline-offset-4">
            Not ready? Read the free preview chapters instead.
          </Link>
        </div>
      </div>
    </div>
  );
}
