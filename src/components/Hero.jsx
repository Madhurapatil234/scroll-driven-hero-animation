import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Sparkles, ChevronDown } from 'lucide-react';
import MainVisual from './MainVisual';
import Stats from './Stats';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const pinContainerRef = useRef(null);
  const heroContentRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonsRef = useRef(null);
  const visualRef = useRef(null);
  const statsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Create GSAP Context for safe React cleanup
    const ctx = gsap.context(() => {
      // ----------------------------------------------------
      // 1. INITIAL PAGE-LOAD ANIMATION TIMELINE
      // ----------------------------------------------------
      const loadTl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1 },
      });

      if (!prefersReducedMotion) {
        loadTl
          .fromTo(
            headlineRef.current,
            { opacity: 0, y: 40, letterSpacing: '0.6em' },
            { opacity: 1, y: 0, letterSpacing: '0.4em', duration: 1.2 }
          )
          .fromTo(
            subtextRef.current,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.8 },
            '-=0.7'
          )
          .fromTo(
            buttonsRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            '-=0.6'
          )
          .fromTo(
            visualRef.current,
            { opacity: 0, scale: 0.82, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'expo.out' },
            '-=0.8'
          )
          .fromTo(
            '.stat-card',
            { opacity: 0, y: 35, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15 },
            '-=0.7'
          )
          .fromTo(
            scrollIndicatorRef.current,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.6 },
            '-=0.4'
          );
      } else {
        // Fallback for reduced motion
        gsap.set(
          [
            headlineRef.current,
            subtextRef.current,
            buttonsRef.current,
            visualRef.current,
            '.stat-card',
            scrollIndicatorRef.current,
          ],
          { opacity: 1, y: 0, scale: 1 }
        );
      }

      // ----------------------------------------------------
      // 2. CORE SCROLL-DRIVEN PINNED ANIMATION
      // ----------------------------------------------------
      if (!prefersReducedMotion) {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: pinContainerRef.current,
            start: 'top top',
            end: '+=2400', // Scroll distance for 250vh-300vh feel
            scrub: 1,     // Smooth 1-second scrub response
            pin: true,    // Pin the hero section during scroll
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Responsive width check to adjust animation transform values on mobile vs desktop
        const isMobile = window.innerWidth < 768;

        scrollTl
          // Step 1: Fade out top headline & subtext gracefully as scroll begins
          .to(
            [headlineRef.current, subtextRef.current, buttonsRef.current],
            {
              opacity: 0,
              y: isMobile ? -30 : -70,
              scale: 0.95,
              duration: 0.35,
              ease: 'power2.inOut',
            },
            0
          )
          // Step 2: Main visual moves, scales up, rotates, and shifts into primary focus
          .to(
            visualRef.current,
            {
              y: isMobile ? -20 : -50,
              x: isMobile ? 0 : 60,
              scale: isMobile ? 1.15 : 1.38,
              rotation: isMobile ? 2 : 6,
              duration: 0.7,
              ease: 'none',
            },
            0
          )
          // Step 3: Statistics shift down slightly and soften opacity
          .to(
            statsRef.current,
            {
              opacity: 0.3,
              y: 40,
              scale: 0.96,
              duration: 0.5,
              ease: 'power1.out',
            },
            0.1
          )
          // Step 4: Final visual hero focus state at 100% scroll progress
          .to(
            visualRef.current,
            {
              y: isMobile ? -30 : -80,
              x: isMobile ? 0 : 120,
              scale: isMobile ? 1.25 : 1.48,
              rotation: isMobile ? 4 : 8,
              opacity: 1,
              duration: 0.3,
              ease: 'none',
            },
            0.7
          )
          // Step 5: Fade out stats completely near end of pin
          .to(
            statsRef.current,
            {
              opacity: 0,
              y: 60,
              duration: 0.3,
            },
            0.7
          );
      }
    }, pinContainerRef);

    return () => ctx.revert(); // Proper cleanup on unmount
  }, []);

  const handleExploreClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#features');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={pinContainerRef} className="relative w-full overflow-hidden bg-slate-950">
      {/* Background Gradients & Glows */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Floating Light Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Pinned Viewport Container */}
      <div
        ref={heroContentRef}
        id="home"
        className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 sm:px-8 pt-28 pb-10 z-10"
      >
        {/* Top Header & Headline Section */}
        <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase mb-6 backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            SCROLL-DRIVEN HERO ANIMATION
          </div>

          {/* Main Large Letter-Spaced Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-cyan-300 leading-tight tracking-[0.3em] sm:tracking-[0.4em] my-4 select-none drop-shadow-2xl"
          >
            WELCOME ITZ FIZZ
          </h1>

          {/* Supporting Statement */}
          <p
            ref={subtextRef}
            className="text-sm sm:text-lg md:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed mt-2 mb-8 tracking-wide"
          >
            Designing digital experiences through motion, interaction and technology.
          </p>

          {/* Action Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Button */}
            <a
              href="#features"
              onClick={handleExploreClick}
              className="btn-glow w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-xs tracking-[0.2em] shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 border border-cyan-300/30"
            >
              <Compass className="w-4 h-4" />
              <span>EXPLORE EXPERIENCE</span>
            </a>

            {/* Secondary Button */}
            <a
              href="#features"
              onClick={handleExploreClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/60 hover:bg-slate-800/80 text-gray-200 hover:text-white font-bold text-xs tracking-[0.2em] border border-white/15 hover:border-cyan-400/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>VIEW WORK</span>
            </a>
          </div>
        </div>

        {/* Central 3D Visual Section */}
        <div className="w-full my-6 sm:my-8 flex justify-center">
          <MainVisual ref={visualRef} />
        </div>

        {/* Bottom Statistics Section */}
        <div className="w-full mt-auto pt-4">
          <Stats ref={statsRef} />
        </div>

        {/* Scroll Down Cue Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="mt-6 flex flex-col items-center gap-2 text-slate-400 text-[10px] font-mono tracking-widest uppercase opacity-75 animate-bounce pointer-events-none"
        >
          <span>SCROLL TO TRANSFORM</span>
          <ChevronDown className="w-4 h-4 text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
