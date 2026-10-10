import type { PackageItem } from '../types';
import BaliImg from '../assets/packageImgs/BaliImg.avif';
import KyotoImg from '../assets/packageImgs/KyotoImg.avif';
import MaldivesImg from '../assets/packageImgs/MaldivesImg.avif';
import ManaliImg from '../assets/packageImgs/ManaliImg.avif';
import ParisImg from '../assets/packageImgs/ParisImg.avif';
import SwissImg from '../assets/packageImgs/SwissImg.avif';

export const PACKAGES: PackageItem[] = [
  {
    id: '1',
    title: 'Bali Tropical Paradise',
    location: 'Bali, Indonesia',
    price: 899,
    rating: 4.9,
    duration: '6 Days / 5 Nights',
    category: 'Beach',
    image: BaliImg,
    description: 'Experience stunning white-sand beaches, lush coral reefs, and vibrant local Balinese culture.',
  },
  {
    id: '2',
    title: 'Swiss Alps Hiking Expedition',
    location: 'Zermatt, Switzerland',
    price: 1450,
    rating: 4.8,
    duration: '7 Days / 6 Nights',
    category: 'Mountain',
    image: SwissImg,
    description: 'Explore scenic Alpine trails, view majestic mountain peaks, and stay in cozy chalet retreats.',
  },
  {
    id: '3',
    title: 'Kyoto Cultural Discovery',
    location: 'Kyoto, Japan',
    price: 1200,
    rating: 4.9,
    duration: '5 Days / 4 Nights',
    category: 'Cultural',
    image: KyotoImg,
    description: 'Visit historic Shinto shrines, peaceful Zen gardens, and traditional tea houses in ancient Kyoto.',
  },
  {
    id: '4',
    title: 'Paris Lights & Romance',
    location: 'Paris, France',
    price: 1100,
    rating: 4.7,
    duration: '5 Days / 4 Nights',
    category: 'City',
    image: ParisImg,
    description: 'Stroll along the Seine, visit world-class art museums, and dine at exquisite Parisian bistros.',
  },
  {
    id: '5',
    title: 'Maldives Ocean Bungalow',
    location: 'Malé, Maldives',
    price: 1850,
    rating: 5.0,
    duration: '6 Days / 5 Nights',
    category: 'Beach',
    image: MaldivesImg,
    description: 'Relax in private overwater villas, swim with manta rays, and enjoy crystal turquoise lagoons.',
  },
  {
    id: '6',
    title: 'Himalayan Adventure Trek',
    location: 'Manali, India',
    price: 650,
    rating: 4.8,
    duration: '8 Days / 7 Nights',
    category: 'Mountain',
    image: ManaliImg,
    description: 'Trek through breathtaking high-altitude valleys, pine forests, and serene Himalayan landscapes.',
  },
];