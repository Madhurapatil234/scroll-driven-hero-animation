import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Full Screen Scroll-Driven Pinned Hero Section */}
        <Hero />

        {/* Features / Crafted for Digital Experiences Section */}
        <Features />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
