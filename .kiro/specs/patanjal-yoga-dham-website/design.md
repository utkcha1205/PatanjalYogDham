# Design Document: Patanjal Yoga Dham Website

## Overview

This document describes the technical design for the Patanjal Yoga Dham marketing website — a statically generated Next.js site for the yoga center located in Arya Nagar, Haridwar. The site serves as the organization's primary digital presence, providing information about programs, philosophy, gallery, and contact details.

The site will be built with Next.js App Router using static export (`output: 'export'`), producing pre-rendered HTML that can be deployed to any static hosting provider (Vercel, Netlify, S3+CloudFront, etc.). All content is hardcoded or sourced from local data files — no CMS or database is required.

### Key Design Decisions

- **Next.js App Router with Static Export**: Chosen for built-in image optimization, file-based routing, and zero-server deployment.
- **Tailwind CSS**: Utility-first CSS framework for rapid, responsive styling with minimal custom CSS.
- **Local Data Files**: Program listings, team bios, testimonials, and gallery metadata stored as TypeScript data files in a `data/` directory for easy editing without a CMS.
- **No Backend**: Contact form submissions handled client-side with a confirmation message (no server-side processing in static export). A future enhancement could integrate a third-party form service.

## Architecture

### High-Level Architecture

```mermaid
graph TD
    A[Next.js App Router] --> B[Static Export at Build Time]
    B --> C[Pre-rendered HTML/CSS/JS]
    C --> D[Static Hosting Provider]

    subgraph Pages
        P1[Home /]
        P2[About /about]
        P3[Programs /programs]
        P4[Gallery /gallery]
        P5[Contact /contact]
    end

    subgraph Shared Layout
        L1[Navigation Bar]
        L2[Footer]
    end

    subgraph Data Layer
        D1[programs.ts]
        D2[team.ts]
        D3[testimonials.ts]
        D4[gallery.ts]
        D5[siteMetadata.ts]
    end

    A --> Pages
    A --> Shared Layout
    Pages --> Data Layer
```

### Project Structure

```
patanjal-yoga-dham/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── gallery/
│   │   ├── team/
│   │   └── facility/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (Nav + Footer)
│   │   ├── page.tsx            # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── programs/
│   │   │   └── page.tsx
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProgramCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── TeamMemberCard.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── Lightbox.tsx
│   │   ├── ContactForm.tsx
│   │   ├── MapEmbed.tsx
│   │   └── SEOHead.tsx
│   ├── data/
│   │   ├── programs.ts
│   │   ├── team.ts
│   │   ├── testimonials.ts
│   │   ├── gallery.ts
│   │   └── siteMetadata.ts
│   └── lib/
│       ├── validation.ts       # Contact form validation
│       └── types.ts            # Shared TypeScript types
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Routing

All routing is handled by Next.js App Router file-based conventions. Client-side navigation via `<Link>` ensures no full page reloads (Requirement 1.3).

| Route        | Page Component         | Description                  |
|-------------|------------------------|------------------------------|
| `/`         | `app/page.tsx`         | Homepage with hero, highlights, testimonials |
| `/about`    | `app/about/page.tsx`   | History, mission, team       |
| `/programs` | `app/programs/page.tsx`| Program listings by category |
| `/gallery`  | `app/gallery/page.tsx` | Image grid with lightbox     |
| `/contact`  | `app/contact/page.tsx` | Contact info, map, form      |


## Components and Interfaces

### Shared Layout Components

#### Navbar (`components/Navbar.tsx`)

Persistent top navigation rendered in `app/layout.tsx`.

```typescript
interface NavbarProps {}

// State: isMenuOpen (boolean) — controls hamburger menu visibility on mobile
// Behavior:
//   - Renders links: Home, About, Programs, Gallery, Contact
//   - Uses Next.js <Link> for client-side navigation
//   - Below 768px: collapses to hamburger icon
//   - Hamburger click toggles vertical dropdown
//   - Escape key or route change closes mobile menu
//   - Semantic <nav> element with aria-label
//   - Active link highlighted based on current pathname
```

#### Footer (`components/Footer.tsx`)

Persistent footer rendered in `app/layout.tsx`.

```typescript
interface FooterProps {}

// Renders:
//   - Address: Patanjal Yoga Dham, Arya Nagar, Haridwar
//   - Phone number and email
//   - Quick links to all main pages
//   - Copyright notice with dynamic current year
//   - Semantic <footer> element
```

### Homepage Components

#### HeroSection (`components/HeroSection.tsx`)

```typescript
interface HeroSectionProps {
  title: string;        // "Patanjal Yoga Dham"
  location: string;     // "Arya Nagar, Haridwar"
  tagline: string;
  ctaText: string;
  ctaHref: string;      // "/programs"
}
```

#### TestimonialCard (`components/TestimonialCard.tsx`)

```typescript
interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
}
```

### Programs Page Components

#### ProgramCard (`components/ProgramCard.tsx`)

```typescript
interface ProgramCardProps {
  name: string;
  description: string;
  duration: string;
  schedule: string;
  category: 'beginner' | 'intermediate' | 'advanced';
}

// Renders program details with a CTA button linking to /contact
```

### Gallery Page Components

#### GalleryGrid (`components/GalleryGrid.tsx`)

```typescript
interface GalleryGridProps {
  images: GalleryImage[];
}

// Renders responsive grid of images with lazy loading
// Click handler opens Lightbox
```

#### Lightbox (`components/Lightbox.tsx`)

```typescript
interface LightboxProps {
  image: GalleryImage;
  isOpen: boolean;
  onClose: () => void;
}

// Behavior:
//   - Displays image at larger size in modal overlay
//   - Closes on Escape key press
//   - Closes on click outside the image
//   - Focus trap for accessibility
//   - aria-modal="true", role="dialog"
```

### Contact Page Components

#### ContactForm (`components/ContactForm.tsx`)

```typescript
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Behavior:
//   - Client-side validation before submission
//   - Required fields: name, email, message
//   - Email format validation
//   - Shows validation errors per field
//   - Shows confirmation message on successful submission
//   - No server-side processing (static site)
```

#### MapEmbed (`components/MapEmbed.tsx`)

```typescript
interface MapEmbedProps {
  src: string;          // Google Maps embed URL for Arya Nagar, Haridwar
  title: string;
}

// Renders iframe with Google Maps embed
// Includes loading="lazy" and appropriate title for accessibility
```

### SEO Component

#### SEOHead (`components/SEOHead.tsx`)

```typescript
interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  path: string;
}

// Uses Next.js Metadata API (generateMetadata) for:
//   - <title> and <meta name="description">
//   - Open Graph tags (og:title, og:description, og:image, og:url)
//   - Canonical URL
```


## Data Models

All data is stored as typed TypeScript constants in `src/data/`. No database or API is involved.

### Types (`src/lib/types.ts`)

```typescript
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
  image: string;        // path relative to /public/images/team/
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
  src: string;          // path relative to /public/images/gallery/
  alt: string;
  category?: string;    // e.g., "facility", "session", "event"
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
```

### Data Files

#### `src/data/programs.ts`

```typescript
import { Program } from '@/lib/types';

export const programs: Program[] = [
  {
    id: 'beginner-yoga',
    name: 'Beginner Yoga Course',
    description: 'Introduction to yoga asanas and breathing techniques...',
    duration: '4 weeks',
    schedule: 'Mon, Wed, Fri — 6:00 AM to 7:30 AM',
    category: 'beginner',
  },
  // ... additional programs
];
```

#### `src/data/siteMetadata.ts`

```typescript
import { SiteMetadata } from '@/lib/types';

export const siteMetadata: SiteMetadata = {
  siteName: 'Patanjal Yoga Dham',
  siteUrl: 'https://patanjalyogadham.com',
  address: 'Arya Nagar, Haridwar, Uttarakhand, India',
  phone: '+91-XXXXXXXXXX',
  email: 'info@patanjalyogadham.com',
  operatingHours: '5:00 AM – 8:00 PM, Monday to Saturday',
  tagline: 'Discover inner peace through the ancient science of yoga',
  description: 'Patanjal Yoga Dham in Arya Nagar, Haridwar offers yoga classes, meditation sessions, and wellness programs for all levels.',
  ogImage: '/images/og-default.jpg',
};
```

### Validation Logic (`src/lib/validation.ts`)

```typescript
export function validateContactForm(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.name.trim()) {
    errors.push({ field: 'name', message: 'Name is required' });
  }

  if (!data.email.trim()) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  if (!data.message.trim()) {
    errors.push({ field: 'message', message: 'Message is required' });
  }

  return errors;
}
```

### SEO: Structured Data (JSON-LD)

The homepage will include a JSON-LD script tag for local business structured data:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Patanjal Yoga Dham",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Arya Nagar",
    "addressLocality": "Haridwar",
    "addressRegion": "Uttarakhand",
    "addressCountry": "IN"
  },
  "telephone": "+91-XXXXXXXXXX",
  "email": "info@patanjalyogadham.com",
  "url": "https://patanjalyogadham.com",
  "description": "Yoga classes, meditation sessions, and wellness programs in Haridwar"
}
```

### Sitemap Generation

Next.js App Router supports `app/sitemap.ts` for build-time sitemap generation:

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://patanjalyogadham.com';
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/programs`, lastModified: new Date() },
    { url: `${baseUrl}/gallery`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];
}
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Team member card completeness

*For any* team member data object with a name, bio, role, and image path, rendering the TeamMemberCard component should produce output that contains the team member's name and bio text.

**Validates: Requirements 3.3**

### Property 2: Program card completeness

*For any* program data object, rendering the ProgramCard component should produce output that contains the program name, description, duration, schedule, and a call-to-action link pointing to the Contact page (`/contact`).

**Validates: Requirements 4.2, 4.4**

### Property 3: Programs are grouped by category

*For any* list of programs with mixed categories (beginner, intermediate, advanced), grouping them by category should produce groups where every program in each group has the matching category, and no program is missing from the output.

**Validates: Requirements 4.3**

### Property 4: Gallery image click opens lightbox

*For any* gallery image in the GalleryGrid, clicking on it should result in the Lightbox component being displayed with that image's src and alt text.

**Validates: Requirements 5.2**

### Property 5: Image rendering includes alt text and lazy loading

*For any* image rendered on the site (gallery, team, facility), the rendered output should include a non-empty `alt` attribute and use the Next.js Image component which provides automatic lazy loading and optimization.

**Validates: Requirements 5.4, 8.4, 10.3**

### Property 6: Valid contact form submission shows confirmation

*For any* contact form data where name is non-empty after trimming, email matches a valid email pattern, and message is non-empty after trimming, submitting the form should result in zero validation errors and a confirmation message being displayed.

**Validates: Requirements 6.5**

### Property 7: Invalid contact form shows field-specific errors

*For any* contact form data where at least one required field (name, email, message) is empty or email is malformed, the validation function should return errors, and each error should reference exactly the field that is invalid.

**Validates: Requirements 6.6**

### Property 8: Page metadata completeness

*For any* page in the site, the generated metadata should include a non-empty title, a non-empty description, and Open Graph tags (og:title, og:description, og:image). Additionally, no two pages should share the same title.

**Validates: Requirements 9.1, 9.2**

## Error Handling

### Contact Form Errors

- **Empty required fields**: The `validateContactForm` function returns a `ValidationError[]` with entries for each empty field. The UI renders inline error messages below each invalid field.
- **Invalid email format**: Regex validation catches malformed emails and returns a specific error message.
- **Submission without server**: Since this is a static site, the form does not actually send data to a server. The confirmation message is displayed client-side. A future enhancement could integrate EmailJS, Formspree, or a similar service.

### Image Loading Errors

- **Missing images**: Next.js Image component handles missing images gracefully. The `alt` text provides context when images fail to load.
- **Gallery lightbox**: If an image fails to load in the lightbox, the alt text is displayed as fallback.

### Navigation Errors

- **404 handling**: Next.js App Router provides a default `not-found.tsx` page. A custom 404 page should be created at `app/not-found.tsx` with navigation back to the homepage.

### Map Embed Errors

- **Map loading failure**: The MapEmbed component should include a fallback text with the address in case the iframe fails to load (e.g., due to network issues or blocked third-party content).

## Testing Strategy

### Testing Framework

- **Unit/Component Tests**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Property-Based Tests**: [fast-check](https://fast-check.dev/) integrated with Vitest
- **E2E Tests** (optional): Playwright for full-page rendering verification

### Unit Tests

Unit tests cover specific examples, edge cases, and integration points:

- Navbar renders all 5 navigation links
- Navbar collapses to hamburger at 768px viewport
- Hero section renders title, location, tagline, and CTA button
- CTA button links to `/programs`
- Footer renders address, phone, email, quick links, and current year copyright
- Contact form shows validation errors for empty name, empty email, empty message
- Contact form shows validation error for malformed email
- Contact form shows confirmation on valid submission
- Lightbox opens on image click and closes on Escape key
- Homepage includes JSON-LD structured data
- Sitemap includes all 5 page routes
- Static export config has `output: 'export'`

### Property-Based Tests

Each property test runs a minimum of 100 iterations using fast-check. Each test references its design property.

- **Feature: patanjal-yoga-dham-website, Property 1: Team member card completeness** — Generate random TeamMember objects, render TeamMemberCard, assert name and bio are present in output.
- **Feature: patanjal-yoga-dham-website, Property 2: Program card completeness** — Generate random Program objects, render ProgramCard, assert name, description, duration, schedule, and `/contact` link are present.
- **Feature: patanjal-yoga-dham-website, Property 3: Programs are grouped by category** — Generate random lists of Programs with mixed categories, group them, assert each group contains only programs of that category and total count is preserved.
- **Feature: patanjal-yoga-dham-website, Property 4: Gallery image click opens lightbox** — Generate random GalleryImage objects, simulate click, assert lightbox displays correct image.
- **Feature: patanjal-yoga-dham-website, Property 5: Image rendering includes alt text and lazy loading** — Generate random GalleryImage objects, render in GalleryGrid, assert each rendered image has non-empty alt and uses Next.js Image component.
- **Feature: patanjal-yoga-dham-website, Property 6: Valid contact form submission shows confirmation** — Generate random valid ContactFormData (non-empty trimmed name, valid email, non-empty trimmed message), run validateContactForm, assert zero errors.
- **Feature: patanjal-yoga-dham-website, Property 7: Invalid contact form shows field-specific errors** — Generate random ContactFormData with at least one invalid field, run validateContactForm, assert errors reference exactly the invalid fields.
- **Feature: patanjal-yoga-dham-website, Property 8: Page metadata completeness** — Generate random page metadata sets, assert each has non-empty title, description, OG tags, and no duplicate titles across pages.

### Test Configuration

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
});
```

### Dependencies

```json
{
  "devDependencies": {
    "vitest": "^2.0.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "@testing-library/user-event": "^14.0.0",
    "fast-check": "^3.0.0",
    "jsdom": "^24.0.0"
  }
}
```

