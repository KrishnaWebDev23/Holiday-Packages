import React from 'react';
import HeroImg from '../assets/HeroImg.avif'

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen w-full bg-slate-950 text-white flex flex-col justify-between">
      {/* Background Image */}
      <img
        src={HeroImg}
        alt="Tropical paradise destination"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Gradient Overlay for optimal text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto my-auto flex max-w-4xl flex-col items-center text-center px-4 pt-32 pb-16 sm:px-6 lg:px-8">
        {/* Badge */}
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-200 backdrop-blur-md border border-white/20">
          🌍 Explore over 500+ premium holiday packages
        </span>

        {/* Main Headline */}
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl drop-shadow-md">
          Unforgettable Journeys, <span className="text-blue-400">Tailored For You</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-200 drop-shadow-xs">
          Discover hidden tropical paradises, majestic mountain treks, and iconic cultural escapes with WanderlustCo.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a
            href="#packages"
            className="rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white shadow-xl hover:bg-blue-500 transition-all active:scale-95 text-center"
          >
            Explore Holiday Packages
          </a>
          <a
            href="#about"
            className="rounded-xl bg-white/10 px-8 py-3.5 font-semibold text-white border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all active:scale-95 text-center"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 pb-8 text-center text-xs text-slate-400 animate-bounce">
        <a href="#about" className="hover:text-white transition-colors">
          Scroll to explore ↓
        </a>
      </div>
    </section>
  );
};