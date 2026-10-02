import React from 'react';
import { Sparkles, ArrowUp, Mail, Globe, Code, Share2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative bg-slate-950 text-slate-400 py-16 border-t border-white/10 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 text-white font-extrabold tracking-widest text-xl mb-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
                ITZ FIZZ
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Crafting premium digital experiences through scroll-driven motion, interactive design, and modern web tech.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-white/10 transition-all shadow-sm"
            >
              <Code className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-white/10 transition-all shadow-sm"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-white/10 transition-all shadow-sm"
            >
              <Share2 className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@itzfizz.com"
              aria-label="Email Contact"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-white/10 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} ITZ FIZZ. Built with React, Vite & GSAP ScrollTrigger.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">PRIVACY</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">TERMS</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">SECURITY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
