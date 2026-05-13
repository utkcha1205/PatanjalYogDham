export interface Program {
  id: string;
  name: string;
  description: string;
  duration: string;
  schedule: string;
  category: 'beginner' | 'intermediate' | 'advanced';
}

export interface TeamMember {
  id: string;
  name: string;
  bio: string;
  image: string;
  role: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
}

export interface SiteMetadata {
  siteName: string;
  siteUrl: string;
  address: string;
  phone: string;
  email: string;
  operatingHours: string;
  tagline: string;
  description: string;
  ogImage: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ValidationError {
  field: keyof ContactFormData;
  message: string;
}
