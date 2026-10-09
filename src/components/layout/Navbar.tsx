'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Novel', path: '/#novel' },
    { name: 'Chapters', path: '/chapters' },
    { name: 'World', path: '/world' },
    { name: 'Characters', path: '/characters' },
    { name: 'About', path: '/about' },
  ];

  if (pathname.startsWith('/read')) return null;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm' : 'bg-white/50 backdrop-blur-sm py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-forest-500 to-forest-700 flex items-center justify-center text-white font-serif font-bold text-xl">
              A
            </div>
            <span className="font-serif text-2xl tracking-widest text-slate-900 group-hover:text-forest-600 transition-colors">
              ALTERIA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm tracking-wide uppercase transition-colors hover:text-forest-600 ${
                  pathname === link.path ? 'text-forest-700 font-bold' : 'text-slate-600 font-medium'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-slate-600 hover:text-forest-600 transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <Link href="/account" className="text-slate-600 hover:text-forest-600 transition-colors" aria-label="Account">
              <User size={20} />
            </Link>
            <Link
              href="/chapters"
              className="px-5 py-2 text-sm uppercase tracking-wider font-bold text-slate-700 border border-slate-300 rounded-full hover:bg-slate-100 transition-colors bg-white/80"
            >
              Read Now
            </Link>
            <Link
              href="/buy"
              className="px-5 py-2 text-sm uppercase tracking-wider font-bold text-white bg-forest-600 hover:bg-forest-700 rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              Buy Novel
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-forest-500 to-forest-700 flex items-center justify-center text-white font-serif font-bold text-xl">
                  A
                </div>
                <span className="font-serif text-2xl tracking-widest text-slate-900">ALTERIA</span>
              </div>
              <button
                className="text-slate-600 hover:text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex-grow flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-slate-700 hover:text-forest-600"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="p-6 border-t border-slate-200 flex flex-col gap-4">
              <Link
                href="/chapters"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 text-center border border-slate-300 rounded-lg text-slate-700 font-bold tracking-widest uppercase hover:bg-slate-50"
              >
                Read Now
              </Link>
              <Link
                href="/buy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 text-center bg-forest-600 rounded-lg text-white font-bold tracking-widest uppercase hover:bg-forest-700"
              >
                Buy Novel
              </Link>
              <div className="flex justify-center gap-8 mt-4 text-slate-600">
                <Link href="/account" onClick={() => setIsMobileMenuOpen(false)}>
                  <User size={24} />
                </Link>
                <button aria-label="Search">
                  <Search size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
