import React, { useState } from 'react';
import { PACKAGES } from '../data/packagesData';
import type { PackageItem } from '../types';

const CATEGORIES = ['All', 'Beach', 'Mountain', 'Cultural', 'City'] as const;

export const Packages: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Filter packages based on active category
  const filteredPackages = activeCategory === 'All'
    ? PACKAGES
    : PACKAGES.filter((pkg) => pkg.category === activeCategory);

  return (
    <section id="packages" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Featured Holiday Packages
          </h2>
          <p className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Choose Your Next Unforgettable Destination
          </p>
          <p className="mt-4 text-slate-400">
            Explore our top-rated holiday packages tailored for every type of traveler.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Packages Container: Horizontal scroll on mobile, Grid on md+ screens */}
        <div className="mt-12 flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent md:grid md:grid-cols-2 md:overflow-visible md:pb-0 md:snap-none lg:grid-cols-3">
          {filteredPackages.map((pkg: PackageItem) => (
            <div
              key={pkg.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:shadow-2xl w-[85vw] max-w-85 shrink-0 snap-center md:w-auto md:max-w-none md:shrink"
            >
              {/* Card Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Duration Badge */}
                <span className="absolute top-4 left-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-slate-200 backdrop-blur-md">
                  ⏱️ {pkg.duration}
                </span>

                {/* Rating Badge */}
                <span className="absolute top-4 right-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-bold text-amber-400 backdrop-blur-md">
                  ⭐ {pkg.rating}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  {/* Location */}
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    📍 {pkg.location}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {pkg.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-400 line-clamp-2">
                    {pkg.description}
                  </p>
                </div>

                {/* Price & CTA */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
                  <div>
                    <span className="text-xs text-slate-400">Starting from</span>
                    <p className="text-2xl font-extrabold text-white">
                      ${pkg.price}
                      <span className="text-xs font-normal text-slate-400"> / person</span>
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition-all active:scale-95"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};