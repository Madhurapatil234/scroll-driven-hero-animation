# Scroll-Driven Hero Animation

An original, premium, scroll-driven interactive hero section built with **React**, **Vite**, **Tailwind CSS**, and **GSAP ScrollTrigger**. Inspired by modern interactive product visualizers, this project showcases high-performance frontend motion engineering, letter-spaced luxury typography, responsive layouts, and sub-pixel smooth scrubbed animations.

---

## 🌟 Overview

**ITZ FIZZ Studio** is a modern interactive web experience built to demonstrate advanced frontend animation capabilities. As users scroll through the pinned hero section, the central 3D visual dynamically transforms—scaling up, translating diagonally, and rotating smoothly in direct synchrony with scroll progress, before seamlessly transitioning into the feature showcase.

---

## ✨ Features

- **Full-Screen Pinned Hero**: Immersive dark theme with radiant radial glows, grid background overlays, and luxury letter-spaced typography.
- **GSAP ScrollTrigger scrub**: Scroll-controlled transforms (`x`, `y`, `scale`, `rotation`, `opacity`) using hardware-accelerated CSS properties for sub-pixel 60 FPS performance.
- **Initial Load Entrance Timeline**: Smooth staggered reveal of navigation, headline, supporting copy, action buttons, main visual, and statistics cards on page mount.
- **3D Cybercraft Visual Component**: Fully interactive, self-contained SVG/CSS vector visual with floating telemetry HUD markers, metallic body contours, and energy rims.
- **Responsive Layout**: Fluid UI designed and tested across desktop (1920x1080), laptop (1440x900), tablet (768x1024), and mobile (390x844) screen sizes with zero horizontal overflow.
- **Accessibility & Reduced Motion**: Full support for OS `prefers-reduced-motion` settings, keyboard navigation, and semantic HTML elements.
- **Clean Component Architecture**: Decoupled React modular structure separating navigation, hero, stats, feature cards, and footer.

---

## 🛠️ Tech Stack

- **Framework**: React.js 19
- **Build Tool**: Vite 8
- **Animation Engine**: GSAP (GreenSock Animation Platform) + GSAP ScrollTrigger
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism CSS
- **Icons**: Lucide React
- **Language**: JavaScript (ES6+)

---

## 🎭 Animation Details

### 1. Page Load Timeline (`GSAP.timeline`)
- **Headline**: Fades in and slides up (`y: 40 -> 0`, `opacity: 0 -> 1`) with letter-spacing transition (`power3.out`).
- **Supporting Statement & Buttons**: Fades in with subtle upward translation (`y: 25 -> 0`).
- **Main Visual**: Scales up smoothly from `0.82` to `1` with exponential easing (`expo.out`).
- **Statistics**: Sequentially enters with a `0.15s` staggered delay per card.

### 2. Core Scroll-Driven Timeline (`GSAP ScrollTrigger`)
- **Pinning**: Hero section stays fixed across a `2400px` scroll distance (`pin: true`, `scrub: 1`).
- **Progressive Transform**:
  - **0% Scroll**: Headline & visual centered at baseline scale (`1.0x`).
  - **50% Scroll**: Visual scales up (`1.38x`), shifts offset (`x: 60px`, `y: -50px`), rotates (`+6deg`), while headline gracefully fades and shifts out of focus.
  - **100% Scroll**: Visual reaches maximum feature highlight (`scale: 1.48x`, `rotation: +8deg`), transitioning naturally into the next section.
- **Reversibility**: Scrolling upward reverses all transforms naturally with scrubbed interpolation.

---

## 📁 Project Structure

```
scroll-driven-hero-animation/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with mobile menu drawer
│   │   ├── Hero.jsx          # Pinned ScrollTrigger hero section & timeline logic
│   │   ├── MainVisual.jsx    # Interactive 3D visual component
│   │   ├── Stats.jsx         # 85% Performance, 92% Engagement, 78% Growth stats
│   │   ├── Features.jsx      # Crafted for Digital Experiences card section
│   │   └── Footer.jsx        # Footer with back-to-top scroll & links
│   ├── App.jsx               # Main root app wrapper
│   ├── index.css             # Tailwind CSS & global dark luxury styles
│   └── main.jsx              # React DOM entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 How to Run Locally

### 1. Clone Repository
```bash
git clone https://github.com/your-username/scroll-driven-hero-animation.git
cd scroll-driven-hero-animation
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Live Demo & Repository

- **GitHub Repository**: `https://github.com/your-username/scroll-driven-hero-animation`
- **Live Demo**: `http://localhost:4173/` *(Local preview currently running)*

---

## 📄 License

Created for the Frontend Developer Assignment — **ITZ FIZZ Studio**.
