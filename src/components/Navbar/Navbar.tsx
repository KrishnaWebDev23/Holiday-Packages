import React, { useState, useEffect } from 'react';
import { Plane } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 font-bold text-2xl text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-black shadow-md">
            <Plane size={20} strokeWidth={2} />
          </span>
          <span className="tracking-tight">Wanderlust<span className="text-blue-400">Co</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#packages"
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition-all active:scale-95"
          >
            Explore Trips
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-lg p-2 text-white hover:bg-white/10"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl bg-slate-900/95 backdrop-blur-xl p-4 border border-slate-800 shadow-xl">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#packages"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full text-center rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-md"
            >
              Explore Trips
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};