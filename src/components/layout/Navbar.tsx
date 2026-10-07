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
          isScrolled ? 'bg-navy-900/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-violet-primary to-cyan-primary flex items-center justify-center text-white font-serif font-bold text-xl">
              A
            </div>
            <span className="font-serif text-2xl tracking-widest text-white group-hover:text-violet-light transition-colors">
              ALTERIA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm tracking-wide uppercase transition-colors hover:text-white ${
                  pathname === link.path ? 'text-white font-medium' : 'text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-slate-400 hover:text-white transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <Link href="/account" className="text-slate-400 hover:text-white transition-colors" aria-label="Account">
              <User size={20} />
            </Link>
            <Link
              href="/chapters"
              className="px-5 py-2 text-sm uppercase tracking-wider font-medium text-white border border-white/20 rounded-full hover:bg-white/5 transition-colors"
            >
              Read Now
            </Link>
            <Link
              href="/buy"
              className="px-5 py-2 text-sm uppercase tracking-wider font-medium text-white bg-violet-primary hover:bg-violet-dark rounded-full transition-colors shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
            >
              Buy Novel
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
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
            className="fixed inset-0 z-[100] bg-navy-900 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-violet-primary to-cyan-primary flex items-center justify-center text-white font-serif font-bold text-xl">
                  A
                </div>
                <span className="font-serif text-2xl tracking-widest text-white">ALTERIA</span>
              </div>
              <button
                className="text-slate-400 hover:text-white"
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
                  className="text-2xl font-serif text-slate-300 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="p-6 border-t border-white/5 flex flex-col gap-4">
              <Link
                href="/chapters"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 text-center border border-white/20 rounded-lg text-white font-medium tracking-widest uppercase hover:bg-white/5"
              >
                Read Now
              </Link>
              <Link
                href="/buy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 text-center bg-violet-primary rounded-lg text-white font-medium tracking-widest uppercase hover:bg-violet-dark"
              >
                Buy Novel
              </Link>
              <div className="flex justify-center gap-8 mt-4 text-slate-400">
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
