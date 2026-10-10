export interface PackageItem {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  duration: string;
  category: 'Beach' | 'Mountain' | 'Cultural' | 'City';
  image: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
}