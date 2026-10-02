import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Cpu, MousePointerClick, ShieldCheck, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const featureList = [
  {
    num: '01',
    title: 'Motion',
    subtitle: 'Smooth interactive animations',
    description:
      'Hardware-accelerated transforms, sub-pixel rendering, and fluid scroll timelines engineered with GSAP ScrollTrigger for 60 FPS performance.',
    icon: Sparkles,
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    borderHover: 'group-hover:border-cyan-400/60',
    iconColor: 'text-cyan-400',
    glowColor: 'group-hover:shadow-cyan-500/20',
  },
  {
    num: '02',
    title: 'Performance',
    subtitle: 'Fast & optimized frontend',
    description:
      'Powered by React and Vite for instant module reloading, minimal bundle footprint, zero layout thrashing, and ultra-responsive execution.',
    icon: Cpu,
    gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    borderHover: 'group-hover:border-purple-400/60',
    iconColor: 'text-purple-400',
    glowColor: 'group-hover:shadow-purple-500/20',
  },
  {
    num: '03',
    title: 'Interaction',
    subtitle: 'Designed around user touch',
    description:
      'Dynamic micro-interactions, responsive touch gestures, and reactive feedback loops designed to captivate and keep users engaged.',
    icon: MousePointerClick,
    gradient: 'from-amber-500/20 via-rose-500/10 to-transparent',
    borderHover: 'group-hover:border-amber-400/60',
    iconColor: 'text-amber-400',
    glowColor: 'group-hover:shadow-amber-500/20',
  },
];

const Features = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header text reveal
      gsap.fromTo(
        '.features-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Staggered reveal for cards
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative min-h-screen py-24 sm:py-32 bg-slate-950 text-white overflow-hidden flex flex-col justify-center border-t border-white/10"
    >
      {/* Background Decorative Grids & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="features-header text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-6 shadow-inner">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            ENGINEERED EXCELLENCE
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 mb-6 leading-tight">
            CRAFTED FOR DIGITAL EXPERIENCES
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Bridging high-end aesthetic design with ultra-fast modern frontend engineering. Built to leave a lasting visual impression.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`group relative p-8 rounded-3xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-white/10 ${item.borderHover} transition-all duration-500 hover:-translate-y-2 shadow-2xl ${item.glowColor} overflow-hidden`}
              >
                {/* Internal Ambient Radial Lighting */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span className="text-3xl sm:text-4xl font-black font-mono tracking-wider text-slate-600 group-hover:text-white transition-colors duration-300">
                    {item.num}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="relative z-10 mb-4">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold tracking-widest text-cyan-400/80 uppercase">
                    {item.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed font-normal relative z-10 mb-8">
                  {item.description}
                </p>

                {/* Card Action Link */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono tracking-wider text-slate-400 group-hover:text-cyan-300 transition-colors">
                  <span>DISCOVER CAPABILITY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
