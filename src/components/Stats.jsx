import React, { forwardRef } from 'react';
import { Zap, Activity, TrendingUp } from 'lucide-react';

const statsData = [
  {
    percentage: '85%',
    label: 'Performance',
    description: 'Sub-pixel smooth 60 FPS animation loop with zero layout thrashing.',
    icon: Zap,
    accent: 'from-cyan-400 to-blue-500',
    border: 'border-cyan-500/20 hover:border-cyan-400/50',
    glow: 'group-hover:shadow-cyan-500/20',
  },
  {
    percentage: '92%',
    label: 'Engagement',
    description: 'Elevated brand interaction through scroll-driven immersive storytelling.',
    icon: Activity,
    accent: 'from-purple-400 to-pink-500',
    border: 'border-purple-500/20 hover:border-purple-400/50',
    glow: 'group-hover:shadow-purple-500/20',
  },
  {
    percentage: '78%',
    label: 'Growth',
    description: 'Accelerated conversion velocity driven by memorable interactive design.',
    icon: TrendingUp,
    accent: 'from-amber-400 to-emerald-400',
    border: 'border-amber-500/20 hover:border-amber-400/50',
    glow: 'group-hover:shadow-amber-500/20',
  },
];

const Stats = forwardRef(({ className = '' }, ref) => {
  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto w-full px-4 ${className}`}
    >
      {statsData.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className={`stat-card group relative p-6 sm:p-7 rounded-2xl bg-slate-900/40 backdrop-blur-xl border ${stat.border} transition-all duration-500 hover:-translate-y-1 shadow-lg ${stat.glow}`}
          >
            {/* Background Gradient Accent Glow */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all duration-500 pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              {/* Stat Number */}
              <div className={`text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${stat.accent}`}>
                {stat.percentage}
              </div>
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              </div>
            </div>

            {/* Stat Label */}
            <h3 className="text-sm font-bold tracking-[0.2em] text-white uppercase mb-1.5 flex items-center gap-2">
              <span>{stat.label}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
            </h3>

            {/* Stat Short Description */}
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              {stat.description}
            </p>
          </div>
        );
      })}
    </div>
  );
});

Stats.displayName = 'Stats';

export default Stats;
