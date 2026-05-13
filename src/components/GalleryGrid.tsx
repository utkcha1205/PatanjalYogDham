'use client';

import Image from 'next/image';
import type { GalleryImage } from '@/lib/types';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

export default function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  return (
    <div className="masonry">
      {images.map((image, index) => (
        <button
          key={image.id}
          type="button"
          onClick={() => onImageClick(image)}
          className="masonry-item group relative block w-full overflow-hidden rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ focusRingColor: 'var(--color-primary-container)' } as React.CSSProperties}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={index % 3 === 0 ? 500 : 400}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ height: index % 3 === 0 ? '400px' : '300px' }}
          />
          {/* Hover overlay with caption */}
          <div
            className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to top, rgba(34,26,18,0.7) 0%, transparent 60%)',
            }}
          >
            <p className="p-6 text-white text-sm font-medium">{image.alt}</p>
          </div>
        </button>
      ))}

      {/* Decorative quote block */}
      <div
        className="masonry-item rounded-3xl p-10 flex items-center justify-center text-center"
        style={{ background: 'var(--color-secondary-container)', minHeight: '200px' }}
      >
        <div>
          <p className="text-lg italic font-medium" style={{ color: 'var(--color-primary)' }}>
            &ldquo;Yoga is the journey of the self, through the self, to the self.&rdquo;
          </p>
          <p className="mt-3 text-sm font-semibold" style={{ color: 'var(--color-on-surface-variant)' }}>
            — Bhagavad Gita
          </p>
        </div>
      </div>
    </div>
  );
}
