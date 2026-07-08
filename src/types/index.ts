export interface Service {
  id: string;
  name: string;
  description: string;
  duration?: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  initials: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  actionLabel?: string;
  actionHref?: string;
}

export interface BarberProfile {
  name: string;
  brand: string;
  specialty: string;
  city: string;
  tagline: string;
  bio: string[];
  philosophy: string;
  differentials: string[];
  instagramUrl: string;
  whatsappUrl: string;
  whatsappDisplay: string;
  bookingUrl: string;
  bookingProvider: string;
  address: string;
  mapsUrl: string;
  hours: { day: string; time: string }[];
}
