import React from 'react';

const STATS = [
  { value: '10K+', label: 'Happy Travelers' },
  { value: '50+', label: 'Global Destinations' },
  { value: '99%', label: 'Positive Reviews' },
  { value: '24/7', label: 'Customer Support' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            About WanderlustCo
          </h2>
          <p className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Crafting Unforgettable Travel Memories Since 2018
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            At WanderlustCo, we believe that travel is more than just visiting a place—it's about immersive cultural experiences, seamless planning, and memories that last a lifetime. Whether you are seeking a tropical beachfront escape or an alpine adventure, our curated holiday packages are crafted with precision and care.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-2xl bg-slate-800/60 p-6 border border-slate-700/50 shadow-lg text-center"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-400">
                {stat.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-medium text-slate-300">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Value Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-800/40 p-8 border border-slate-800">
            <div className="text-3xl mb-4">🌟</div>
            <h3 className="text-xl font-bold text-white">Curated Experiences</h3>
            <p className="mt-2 text-sm text-slate-400">
              Every itinerary is crafted by travel specialists to ensure you visit top attractions and hidden gems.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800/40 p-8 border border-slate-800">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white">Guaranteed Best Value</h3>
            <p className="mt-2 text-sm text-slate-400">
              Transparent pricing with zero hidden fees. What you see is exactly what you pay.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800/40 p-8 border border-slate-800">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-white">Dedicated Support</h3>
            <p className="mt-2 text-sm text-slate-400">
              Our support team is available round-the-clock during your trip to assist with any needs.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};