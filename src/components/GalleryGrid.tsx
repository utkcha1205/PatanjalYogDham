'use client';

import Image from 'next/image';
import type { GalleryImage } from '@/lib/types';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

export default function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <button
          key={image.id}
          type="button"
          onClick={() => onImageClick(image)}
          className="group overflow-hidden rounded-xl ring-1 ring-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </button>
      ))}
    </div>
  );
}
