import type { Metadata } from 'next';
import { siteMetadata } from '@/data/siteMetadata';
import GalleryPageClient from './GalleryPageClient';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse photos of Patanjal Yoga Dham in Arya Nagar, Haridwar — yoga sessions, facility, and community events.',
  openGraph: {
    title: 'Gallery | Patanjal Yoga Dham',
    description:
      'Browse photos of Patanjal Yoga Dham — yoga sessions, facility, and community events.',
    url: `${siteMetadata.siteUrl}/gallery`,
    siteName: siteMetadata.siteName,
    images: [{ url: siteMetadata.ogImage }],
    type: 'website',
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
