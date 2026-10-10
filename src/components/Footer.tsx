import React from 'react';
import { Plane } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2 font-bold text-2xl text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-black">
                <Plane size={20} strokeWidth={2} />
              </span>
              <span>Wanderlust<span className="text-blue-400">Co</span></span>
            </a>
            <p className="text-xs leading-relaxed text-slate-400">
              Crafting premium travel itineraries and holiday packages for adventurers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-xs">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#packages" className="hover:text-blue-400 transition-colors">Holiday Packages</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-white">Popular Destinations</h3>
            <ul className="mt-4 space-y-2 text-xs">
              <li>Bali, Indonesia</li>
              <li>Zermatt, Switzerland</li>
              <li>Kyoto, Japan</li>
              <li>Paris, France</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-semibold text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-2 text-xs">
              <li>📍Connaught Place, New Delhi, India</li>
              <li>📧 info@wanderlustco.com</li>
              <li>📞 +91 98765 43210</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-900 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} WanderlustCo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};