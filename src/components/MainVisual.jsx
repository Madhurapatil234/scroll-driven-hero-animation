import React, { forwardRef } from 'react';

const MainVisual = forwardRef(({ className = '' }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative w-full max-w-4xl mx-auto flex items-center justify-center pointer-events-none select-none ${className}`}
      style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
    >
      {/* Dynamic Ambient Ground Shadow & Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-cyan-500/20 via-purple-600/15 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-12 bg-cyan-400/30 blur-2xl rounded-full scale-y-50 pointer-events-none" />

      {/* Main 3D Container Card / Car Model Silhouette */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] flex items-center justify-center rounded-3xl p-6 sm:p-10 border border-white/10 bg-gradient-to-b from-slate-900/80 via-slate-950/90 to-black/95 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,240,255,0.15)] group overflow-hidden">
        
        {/* Futuristic Background HUD Mesh inside card */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Ambient Light Beams */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600/25 rounded-full blur-3xl" />

        {/* Outer Floating Holographic Telemetry Rings */}
        <svg
          className="absolute w-[110%] h-[110%] -inset-[5%] opacity-40 animate-[spin_40s_linear_infinite]"
          viewBox="0 0 800 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="250" r="230" stroke="url(#cyan-grad)" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="400" cy="250" r="190" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="15 25" />
          <defs>
            <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7000ff" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Futuristic Hypercar / Cybercraft Graphic (High-Detail SVG Visual) */}
        <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700">
          <svg
            className="w-full h-full max-h-[380px] drop-shadow-[0_15px_35px_rgba(0,240,255,0.3)]"
            viewBox="0 0 1000 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Metallic Gradients */}
              <linearGradient id="chassisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="40%" stopColor="#0f172a" />
                <stop offset="80%" stopColor="#020617" />
                <stop offset="100%" stopColor="#090d16" />
              </linearGradient>

              <linearGradient id="cyberNeon" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>

              <linearGradient id="accentPurple" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>

              <linearGradient id="glassCanopy" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#0284c7" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.05" />
              </linearGradient>

              <linearGradient id="wheelRim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="50%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#7000ff" />
              </linearGradient>

              {/* Glow Filters */}
              <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Aerodynamic Aerofoil Ground Shadow Layer */}
            <ellipse cx="500" cy="430" rx="420" ry="25" fill="#00f0ff" opacity="0.15" filter="url(#neonGlow)" />

            {/* Main Cyber Chassis Outer Wing Profile */}
            <path
              d="M120 340 Q150 280 240 240 Q400 170 650 190 Q820 200 900 290 Q920 320 890 350 L840 370 Q750 390 500 390 Q250 390 150 370 Z"
              fill="url(#chassisGrad)"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
            />

            {/* Sleek Cockpit Roofline Glass Canopy */}
            <path
              d="M320 240 Q440 160 620 180 Q720 195 760 250 Q600 240 450 245 Z"
              fill="url(#glassCanopy)"
              stroke="url(#cyberNeon)"
              strokeWidth="2"
              filter="url(#neonGlow)"
            />

            {/* Futuristic Body Side Scoop Cuts */}
            <path
              d="M 280 320 Q 420 260 600 290 Q 720 310 820 340"
              fill="none"
              stroke="url(#cyberNeon)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#neonGlow)"
            />
            <path
              d="M 220 340 L 360 310 L 520 325"
              fill="none"
              stroke="url(#accentPurple)"
              strokeWidth="2"
              strokeDasharray="8 4"
            />

            {/* Front Cyber Laser Headlamp Strip */}
            <path
              d="M 820 290 L 895 315 L 850 330"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#neonGlow)"
            />

            {/* Rear Thruster Energy Matrix Strip */}
            <path
              d="M 130 335 L 160 300 L 190 345"
              fill="none"
              stroke="#a855f7"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#neonGlow)"
            />

            {/* Front Kinetic Wheel Assembly */}
            <g transform="translate(730, 360)">
              {/* Outer Tire Ring */}
              <circle cx="0" cy="0" r="54" fill="#090d16" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
              {/* Glowing Rim Accents */}
              <circle cx="0" cy="0" r="42" fill="none" stroke="url(#wheelRim)" strokeWidth="5" filter="url(#neonGlow)" />
              {/* Internal Spoke Turbine */}
              <path d="M-30 0 L30 0 M0 -30 L0 30 M-20 -20 L20 20 M-20 20 L20 -20" stroke="#00f0ff" strokeWidth="2.5" opacity="0.8" />
              <circle cx="0" cy="0" r="14" fill="#00f0ff" />
            </g>

            {/* Rear Kinetic Wheel Assembly */}
            <g transform="translate(270, 360)">
              {/* Outer Tire Ring */}
              <circle cx="0" cy="0" r="58" fill="#090d16" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
              {/* Glowing Rim Accents */}
              <circle cx="0" cy="0" r="45" fill="none" stroke="url(#wheelRim)" strokeWidth="5" filter="url(#neonGlow)" />
              {/* Internal Spoke Turbine */}
              <path d="M-32 0 L32 0 M0 -32 L0 32 M-22 -22 L22 22 M-22 22 L22 -22" stroke="#a855f7" strokeWidth="2.5" opacity="0.8" />
              <circle cx="0" cy="0" r="15" fill="#7000ff" />
            </g>

            {/* Dynamic Telemetry HUD Markers */}
            <text x="760" y="240" fill="#00f0ff" fontSize="12" fontFamily="monospace" letterSpacing="2" opacity="0.9">
              [ AERO: V.9 ]
            </text>
            <text x="200" y="230" fill="#a855f7" fontSize="12" fontFamily="monospace" letterSpacing="2" opacity="0.9">
              [ PWR: 100% ]
            </text>
            <line x1="750" y1="245" x2="720" y2="265" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <line x1="260" y1="235" x2="290" y2="255" stroke="#a855f7" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          </svg>
        </div>

        {/* Floating Futuristic HUD Badge inside the card */}
        <div className="absolute top-4 right-6 flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[10px] font-mono tracking-widest text-cyan-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          SCROLL INTERACTIVE 3D
        </div>
      </div>
    </div>
  );
});

MainVisual.displayName = 'MainVisual';

export default MainVisual;
