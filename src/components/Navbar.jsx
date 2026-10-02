import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'WORK', href: '#features' },
    { name: 'ABOUT', href: '#features' },
    { name: 'CONTACT', href: '#footer' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/20'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 text-white font-extrabold tracking-widest text-lg sm:text-xl transition-all duration-300"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-400/50 group-hover:scale-105 transition-all">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 group-hover:text-cyan-400 transition-colors">
              ITZ FIZZ
            </span>
            <span className="text-[9px] font-mono tracking-widest text-cyan-400/70 uppercase -mt-1">
              STUDIO
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-6 py-2 rounded-full border border-white/10 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Header CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#features"
            onClick={(e) => handleNavClick(e, '#features')}
            className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest bg-white/5 hover:bg-cyan-500/10 text-white border border-white/15 hover:border-cyan-400/50 transition-all duration-300 shadow-sm hover:shadow-cyan-500/20 group"
          >
            <span>LAUNCH HUB</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:text-cyan-400 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] p-6 bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 text-sm font-bold tracking-[0.2em] text-gray-200 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/10"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, '#features')}
              className="mt-2 text-center py-3 rounded-xl font-bold text-xs tracking-widest bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30"
            >
              LAUNCH HUB
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
