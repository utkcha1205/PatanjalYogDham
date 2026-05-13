# Implementation Plan: Patanjal Yoga Dham Website

## Overview

Build a statically exported Next.js website for Patanjal Yoga Dham (Arya Nagar, Haridwar) using App Router, Tailwind CSS, and TypeScript data files. Implementation proceeds from project scaffolding through shared layout, individual pages, SEO, and testing.

## Tasks

- [x] 1. Project setup and core types
  - [x] 1.1 Initialize Next.js project with App Router, Tailwind CSS, and TypeScript
    - Run `npx create-next-app@latest` with TypeScript and Tailwind enabled
    - Set `output: 'export'` in `next.config.js` for static export
    - Configure path alias `@/` pointing to `src/`
    - Create `public/images/` subdirectories: `hero/`, `gallery/`, `team/`, `facility/`
    - Add placeholder images in each directory for development
    - _Requirements: 8.1, 8.3_

  - [x] 1.2 Define shared TypeScript types and data files
    - Create `src/lib/types.ts` with interfaces: `Program`, `TeamMember`, `Testimonial`, `GalleryImage`, `SiteMetadata`, `ContactFormData`, `ValidationError`
    - Create `src/data/siteMetadata.ts` with site name, address, phone, email, operating hours, tagline, description, OG image
    - Create `src/data/programs.ts` with sample programs across beginner, intermediate, and advanced categories
    - Create `src/data/team.ts` with sample team member entries
    - Create `src/data/testimonials.ts` with sample testimonial entries
    - Create `src/data/gallery.ts` with sample gallery image entries
    - _Requirements: 4.1, 4.2, 4.3, 3.3, 2.5, 5.1_

  - [x] 1.3 Implement contact form validation logic
    - Create `src/lib/validation.ts` with `validateContactForm` function
    - Validate required fields: name (non-empty trimmed), email (non-empty trimmed + regex), message (non-empty trimmed)
    - Return `ValidationError[]` with field-specific error messages
    - _Requirements: 6.5, 6.6_

  - [x] 1.4 Write property test: valid contact form shows no errors
    - **Property 6: Valid contact form submission shows confirmation**
    - Generate random valid `ContactFormData` using fast-check (non-empty trimmed name, valid email pattern, non-empty trimmed message)
    - Assert `validateContactForm` returns an empty array
    - **Validates: Requirements 6.5**

  - [x] 1.5 Write property test: invalid contact form shows field-specific errors
    - **Property 7: Invalid contact form shows field-specific errors**
    - Generate random `ContactFormData` with at least one invalid field using fast-check
    - Assert `validateContactForm` returns errors referencing exactly the invalid fields
    - **Validates: Requirements 6.6**

  - [x] 1.6 Write property test: programs grouped by category
    - **Property 3: Programs are grouped by category**
    - Generate random lists of `Program` objects with mixed categories using fast-check
    - Group by category and assert every program in each group has the matching category and total count is preserved
    - **Validates: Requirements 4.3**

- [x] 2. Shared layout components (Navbar and Footer)
  - [x] 2.1 Implement Navbar component
    - Create `src/components/Navbar.tsx` with links to Home, About, Programs, Gallery, Contact
    - Use Next.js `<Link>` for client-side navigation
    - Implement hamburger menu toggle for viewports below 768px with vertical dropdown
    - Use semantic `<nav>` element with `aria-label`
    - Highlight active link based on current pathname using `usePathname()`
    - Close mobile menu on route change and Escape key
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 10.2, 10.4_

  - [x] 2.2 Implement Footer component
    - Create `src/components/Footer.tsx` with address, phone, email from `siteMetadata`
    - Render quick links to all main pages using `<Link>`
    - Display copyright notice with dynamic current year
    - Use semantic `<footer>` element
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 10.2_

  - [x] 2.3 Create root layout wiring Navbar and Footer
    - Update `src/app/layout.tsx` to render Navbar and Footer on every page
    - Include `<header>`, `<main>`, `<footer>` semantic structure
    - Set base metadata (site title template, default description)
    - _Requirements: 1.2, 7.1, 10.2_

- [x] 3. Checkpoint
  - Ensure the project builds with `next build`, Navbar and Footer render on all routes. Ask the user if questions arise.

- [x] 4. Homepage implementation
  - [x] 4.1 Implement HeroSection component
    - Create `src/components/HeroSection.tsx` accepting title, location, tagline, ctaText, ctaHref props
    - Render CTA button as `<Link>` to `/programs`
    - Use a hero background image from `public/images/hero/`
    - _Requirements: 2.1, 2.2_

  - [x] 4.2 Implement TestimonialCard component
    - Create `src/components/TestimonialCard.tsx` rendering quote, author, and optional role
    - _Requirements: 2.5_

  - [x] 4.3 Build homepage page component
    - Update `src/app/page.tsx` to compose HeroSection, introduction section, highlights section (key offerings), and testimonials section
    - Import testimonials from `src/data/testimonials.ts`
    - Add JSON-LD structured data script for LocalBusiness schema
    - Set page-specific metadata via `generateMetadata`
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 9.1, 9.2, 9.4_

- [x] 5. About page implementation
  - [x] 5.1 Implement TeamMemberCard component
    - Create `src/components/TeamMemberCard.tsx` rendering name, bio, role, and image using Next.js `<Image>`
    - Include `alt` text for the team member image
    - _Requirements: 3.3, 3.4, 10.3_

  - [x] 5.2 Write property test: team member card completeness
    - **Property 1: Team member card completeness**
    - Generate random `TeamMember` objects using fast-check
    - Render `TeamMemberCard` and assert name and bio are present in output
    - **Validates: Requirements 3.3**

  - [x] 5.3 Build About page
    - Create `src/app/about/page.tsx` with history/founding story section, mission/philosophy section, and team members grid
    - Import team data from `src/data/team.ts`
    - Include at least one facility image using Next.js `<Image>`
    - Set page-specific metadata via `generateMetadata`
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 9.1, 9.2_

- [x] 6. Programs page implementation
  - [x] 6.1 Implement ProgramCard component
    - Create `src/components/ProgramCard.tsx` rendering name, description, duration, schedule
    - Include CTA button linking to `/contact` for enrollment inquiries
    - _Requirements: 4.2, 4.4_

  - [x] 6.2 Write property test: program card completeness
    - **Property 2: Program card completeness**
    - Generate random `Program` objects using fast-check
    - Render `ProgramCard` and assert name, description, duration, schedule, and `/contact` link are present
    - **Validates: Requirements 4.2, 4.4**

  - [x] 6.3 Build Programs page
    - Create `src/app/programs/page.tsx` importing programs from `src/data/programs.ts`
    - Group programs by category (beginner, intermediate, advanced) and render each group with a heading
    - Render `ProgramCard` for each program
    - Set page-specific metadata via `generateMetadata`
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 9.1, 9.2_

- [x] 7. Gallery page implementation
  - [x] 7.1 Implement GalleryGrid and Lightbox components
    - Create `src/components/GalleryGrid.tsx` rendering a responsive image grid using Next.js `<Image>` with lazy loading
    - Create `src/components/Lightbox.tsx` as a modal overlay displaying the selected image at larger size
    - Lightbox closes on Escape key press and click outside the image
    - Include `aria-modal="true"`, `role="dialog"`, and focus trap for accessibility
    - All images must have non-empty `alt` attributes
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 8.4, 10.3, 10.4_

  - [x] 7.2 Write property test: gallery image click opens lightbox
    - **Property 4: Gallery image click opens lightbox**
    - Generate random `GalleryImage` objects using fast-check
    - Simulate click on gallery image and assert Lightbox displays correct image src and alt
    - **Validates: Requirements 5.2**

  - [x] 7.3 Write property test: image rendering includes alt text
    - **Property 5: Image rendering includes alt text and lazy loading**
    - Generate random `GalleryImage` objects using fast-check
    - Render in `GalleryGrid` and assert each rendered image has a non-empty `alt` attribute
    - **Validates: Requirements 5.4, 8.4, 10.3**

  - [x] 7.4 Build Gallery page
    - Create `src/app/gallery/page.tsx` importing images from `src/data/gallery.ts`
    - Compose `GalleryGrid` with lightbox state management
    - Set page-specific metadata via `generateMetadata`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 9.1, 9.2_

- [x] 8. Contact page implementation
  - [x] 8.1 Implement ContactForm component
    - Create `src/components/ContactForm.tsx` with name, email, and message fields
    - Integrate `validateContactForm` from `src/lib/validation.ts`
    - Display inline validation errors per field on submission
    - Display confirmation message on successful (valid) submission
    - Mark as client component (`'use client'`)
    - _Requirements: 6.5, 6.6_

  - [x] 8.2 Implement MapEmbed component
    - Create `src/components/MapEmbed.tsx` rendering a Google Maps iframe for Arya Nagar, Haridwar
    - Include `loading="lazy"`, accessible `title` attribute, and fallback address text
    - _Requirements: 6.3_

  - [x] 8.3 Build Contact page
    - Create `src/app/contact/page.tsx` displaying full address, phone, email, operating hours
    - Compose `ContactForm` and `MapEmbed` components
    - Set page-specific metadata via `generateMetadata`
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 9.1, 9.2_

- [x] 9. Checkpoint
  - Ensure all pages render correctly, navigation works across all routes, and `next build` succeeds with static export. Ask the user if questions arise.

- [x] 10. SEO, sitemap, and metadata
  - [x] 10.1 Add sitemap generation
    - Create `src/app/sitemap.ts` returning all 5 page routes with `lastModified` dates
    - _Requirements: 9.3_

  - [x] 10.2 Write property test: page metadata completeness
    - **Property 8: Page metadata completeness**
    - Generate random page metadata sets using fast-check
    - Assert each has non-empty title, non-empty description, OG tags, and no duplicate titles across pages
    - **Validates: Requirements 9.1, 9.2**

  - [x] 10.3 Verify SEO metadata across all pages
    - Ensure each page exports unique `generateMetadata` with title, description, and Open Graph tags
    - Verify homepage includes JSON-LD LocalBusiness structured data
    - _Requirements: 9.1, 9.2, 9.4_

- [x] 11. Responsive design and accessibility pass
  - [x] 11.1 Ensure responsive layout from 320px to 1920px
    - Review and adjust Tailwind responsive classes across all components
    - Verify hamburger menu behavior below 768px
    - _Requirements: 10.1, 1.4, 1.5_

  - [x] 11.2 Accessibility audit
    - Verify semantic HTML elements (`header`, `nav`, `main`, `section`, `footer`) across all pages
    - Verify all images have `alt` text
    - Verify keyboard navigation for Navbar, Lightbox, and ContactForm
    - Verify minimum 4.5:1 color contrast ratio for all text
    - _Requirements: 10.2, 10.3, 10.4, 10.5_

- [x] 12. Testing setup and final validation
  - [x] 12.1 Configure Vitest with React Testing Library
    - Install `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `fast-check`, `jsdom`
    - Create `vitest.config.ts` with jsdom environment, React plugin, and `@/` alias
    - Create `src/test/setup.ts` importing `@testing-library/jest-dom`
    - _Requirements: 8.1_

  - [x] 12.2 Create custom 404 page
    - Create `src/app/not-found.tsx` with a message and link back to homepage
    - _Requirements: 1.3_

- [x] 13. Final checkpoint
  - Run `next build` to verify static export succeeds. Run `vitest --run` to verify all tests pass. Ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties using fast-check
- All code uses TypeScript with Next.js App Router conventions
