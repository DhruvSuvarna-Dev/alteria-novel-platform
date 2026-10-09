'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith('/read')) return null;

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-forest-500 to-forest-700 flex items-center justify-center text-white font-serif font-bold text-xl">
                A
              </div>
              <span className="font-serif text-2xl tracking-widest text-slate-900 group-hover:text-forest-600 transition-colors">ALTERIA</span>
            </Link>
            <p className="text-slate-600 max-w-sm font-serif italic text-lg mb-6">
              "Every world has a beginning."
            </p>
            <p className="text-slate-500 text-sm font-medium">
              An original fantasy light novel project.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'The Novel', 'Chapters', 'World', 'Characters', 'About'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace('the ', '')}`}
                    className="text-slate-600 hover:text-forest-600 transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-6">Support</h4>
            <ul className="flex flex-col gap-3">
              {['Contact', 'FAQ', 'Terms', 'Privacy', 'Refund Policy'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-600 hover:text-forest-600 transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} ALTERIA. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-forest-600 transition-colors text-sm font-bold uppercase">Instagram</a>
            <a href="#" className="text-slate-500 hover:text-forest-600 transition-colors text-sm font-bold uppercase">X/Twitter</a>
            <a href="#" className="text-slate-500 hover:text-forest-600 transition-colors text-sm font-bold uppercase">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
