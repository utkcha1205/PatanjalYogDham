'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { GalleryImage } from '@/lib/types';
import GalleryGrid from '@/components/GalleryGrid';
import Lightbox from '@/components/Lightbox';
import AnimateIn from '@/components/AnimateIn';
import { galleryImages } from '@/data/gallery';

export default function GalleryPageClient() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="py-[120px] text-center">
        <div className="mx-auto max-w-[1280px] px-8">
          <AnimateIn>
            <p className="label-md" style={{ color: 'var(--color-primary)' }}>Visual Journey</p>
            <h1 className="display-lg mt-4" style={{ color: 'var(--color-on-surface)' }}>
              Moments of Serenity
            </h1>
            <p className="body-lg mt-6 max-w-2xl mx-auto" style={{ color: 'var(--color-on-surface-variant)' }}>
              A glimpse into life at Patanjal Yoga Dham — our sessions, facility,
              and community events.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Gallery Masonry */}
      <section className="pb-[120px]">
        <div className="mx-auto max-w-[1280px] px-8">
          <AnimateIn variant="from-bottom">
          <GalleryGrid
            images={galleryImages}
            onImageClick={(image) => setSelectedImage(image)}
          />
          </AnimateIn>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="text-sm font-semibold"
              style={{ color: 'var(--color-primary)' }}
            >
              View Full Experience →
            </Link>
          </div>
        </div>
      </section>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
