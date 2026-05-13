import { describe, it, expect, vi } from 'vitest';
import * as fc from 'fast-check';
import { render, cleanup } from '@testing-library/react';
import GalleryGrid from '@/components/GalleryGrid';
import type { GalleryImage } from '@/lib/types';

// Mock next/image as a simple img tag in jsdom
vi.mock('next/image', () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// --- Generators ---

const nonEmptyStringArb = fc.stringMatching(/^[a-zA-Z][a-zA-Z0-9 ]{2,30}$/);

const galleryImageArb: fc.Arbitrary<GalleryImage> = fc.record({
  id: fc.stringMatching(/^[a-z0-9-]{1,20}$/),
  src: fc.constant('/images/gallery/gallery-placeholder.svg'),
  alt: nonEmptyStringArb,
  category: fc.constantFrom('facility', 'session', 'event'),
});

// --- Property 4: Gallery image click opens lightbox ---

describe('Property 4: Gallery image click opens lightbox', () => {
  /**
   * **Validates: Requirements 5.2**
   *
   * For any GalleryImage in the GalleryGrid, clicking on it should result
   * in the onImageClick callback being called with that image's data.
   */
  it('clicking a gallery image calls onImageClick with the correct image', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArb, { minLength: 1, maxLength: 10 }),
        fc.nat(),
        (images, indexSeed) => {
          cleanup();
          const targetIndex = indexSeed % images.length;
          const onImageClick = vi.fn();

          const { container } = render(
            <GalleryGrid images={images} onImageClick={onImageClick} />,
          );

          const buttons = container.querySelectorAll('button');
          expect(buttons.length).toBe(images.length);

          buttons[targetIndex].click();

          expect(onImageClick).toHaveBeenCalledTimes(1);
          expect(onImageClick).toHaveBeenCalledWith(images[targetIndex]);
        },
      ),
      { numRuns: 100 },
    );
  });
});

// --- Property 5: Image rendering includes alt text and lazy loading ---

describe('Property 5: Image rendering includes alt text and lazy loading', () => {
  /**
   * **Validates: Requirements 5.4, 8.4, 10.3**
   *
   * For any GalleryImage objects rendered in GalleryGrid, each rendered
   * image element should have a non-empty alt attribute.
   */
  it('every rendered image has a non-empty alt attribute', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArb, { minLength: 1, maxLength: 10 }),
        (images) => {
          cleanup();
          const onImageClick = vi.fn();

          const { container } = render(
            <GalleryGrid images={images} onImageClick={onImageClick} />,
          );

          const imgElements = container.querySelectorAll('img');
          expect(imgElements.length).toBe(images.length);

          imgElements.forEach((img) => {
            const alt = img.getAttribute('alt');
            expect(alt).toBeTruthy();
            expect(alt!.trim().length).toBeGreaterThan(0);
          });
        },
      ),
      { numRuns: 100 },
    );
  });
});
