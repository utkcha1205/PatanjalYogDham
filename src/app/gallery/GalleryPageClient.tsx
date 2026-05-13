'use client';

import { useState } from 'react';
import type { GalleryImage } from '@/lib/types';
import GalleryGrid from '@/components/GalleryGrid';
import Lightbox from '@/components/Lightbox';
import { galleryImages } from '@/data/gallery';

export default function GalleryPageClient() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <section className="bg-amber-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-amber-900">
            Gallery
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-amber-800">
            A glimpse into life at Patanjal Yoga Dham — our sessions, facility,
            and community events.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid
            images={galleryImages}
            onImageClick={(image) => setSelectedImage(image)}
          />
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
