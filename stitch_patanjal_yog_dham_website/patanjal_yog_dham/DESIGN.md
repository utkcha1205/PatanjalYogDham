---
name: Patanjal Yog Dham
colors:
  surface: '#fff8f4'
  surface-dim: '#e7d7c9'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e5'
  surface-container: '#fbebdd'
  surface-container-high: '#f5e6d7'
  surface-container-highest: '#f0e0d1'
  on-surface: '#221a12'
  on-surface-variant: '#534434'
  inverse-surface: '#382f25'
  inverse-on-surface: '#feeedf'
  outline: '#867461'
  outline-variant: '#d8c3ad'
  surface-tint: '#855300'
  primary: '#855300'
  on-primary: '#ffffff'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#ffb95f'
  secondary: '#665f3d'
  on-secondary: '#ffffff'
  secondary-container: '#eae0b5'
  on-secondary-container: '#6a6341'
  tertiary: '#00658b'
  on-tertiary: '#ffffff'
  tertiary-container: '#1abdff'
  on-tertiary-container: '#004966'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#ede3b8'
  secondary-fixed-dim: '#d1c79d'
  on-secondary-fixed: '#201c02'
  on-secondary-fixed-variant: '#4d4727'
  tertiary-fixed: '#c5e7ff'
  tertiary-fixed-dim: '#7fd0ff'
  on-tertiary-fixed: '#001e2d'
  on-tertiary-fixed-variant: '#004c6a'
  background: '#fff8f4'
  on-background: '#221a12'
  surface-variant: '#f0e0d1'
typography:
  display-lg:
    fontFamily: Geist Sans
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Geist Sans
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Geist Sans
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Geist Sans
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Geist Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 32px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style
The design system embodies "Spiritual Modernism"—a bridge between the ancient traditions of Haridwar and a clean, contemporary digital experience. The brand personality is serene, enlightened, and welcoming, designed to provide a sense of mental clarity from the first interaction.

This design system utilizes a **Minimalist** approach with high-quality whitespace and intentional breathing room. It avoids cluttered interfaces to reflect the mental state achieved through yoga. By combining a warm, traditional color palette with the precision of modern technical typography, the system achieves a feeling of "grounded elevation."

## Colors
The palette is rooted in the sacred Saffron of the Ganges' banks and the warmth of traditional ashram architecture. 

- **Primary Amber/Saffron**: Used for primary calls to action, active states, and brand-critical highlights. It symbolizes energy and spiritual fire.
- **Surface Cream**: Applied to large container backgrounds and section alternates to provide warmth and reduce eye strain compared to pure white.
- **Background White**: Used as the base canvas to ensure an "airy" and "pure" aesthetic.
- **Dark Charcoal**: Provides high-contrast grounding for all text elements, ensuring accessibility and a professional tone.

Maintain a 60-30-10 distribution, where White and Cream dominate the layout to preserve the sense of vastness and peace.

## Typography
The design system uses **Geist Sans** exclusively to maintain a technical, clean, and modern feel. This choice prevents the brand from feeling "dated" and ensures that the spiritual content is delivered with clarity and precision.

- **Headlines**: Use tighter letter-spacing and heavier weights for a confident, grounded presence. 
- **Body Text**: Use generous line-heights (1.6 to 1.7) to improve readability and contribute to the "airy" feel of the layout.
- **Labels**: Small caps or uppercase with increased tracking should be used for navigation items and overlines to provide a sophisticated rhythm.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model centered within the viewport. A 12-column grid is used for desktop layouts with a maximum width of 1280px to prevent lines of text from becoming too long.

- **The Breath Principle**: Vertical spacing between sections should be exceptionally generous (up to 120px). This "void" is essential to the brand experience, representing the stillness of meditation.
- **Responsive Behavior**: On mobile devices, side margins should be set to 24px. The grid collapses to a single column for content and double columns for small cards/icons.
- **Alignment**: Use center-alignment for hero sections and testimonials to evoke a sense of balance and focus.

## Elevation & Depth
Depth is conveyed through **Ambient Shadows** and tonal layering rather than heavy borders. The goal is to make elements feel as though they are floating softly above the surface.

- **Shadow Profile**: Shadows use the Primary Amber or a deep Neutral tinted with Amber to avoid "dirty" grey looks. They are highly diffused (30px-50px blur) with very low opacity (5-8%).
- **Tonal Layering**: Place White cards on Surface Cream (#FEF3C7) backgrounds to create a subtle distinction of hierarchy without needing harsh lines.
- **Interactions**: On hover, cards should slightly lift (move -4px on the Y-axis) and the shadow should become slightly more diffused to mimic physical elevation.

## Shapes
The shape language is organic and approachable. This design system moves away from sharp, aggressive corners in favor of large, sweeping radii that feel soft to the touch.

- **Standard Elements**: Buttons and input fields use a medium radius (0.5rem).
- **Surface Containers**: Cards and featured sections utilize **2xl (1.5rem)** and **3xl (2rem)** rounded corners to create a friendly, modern container for imagery and text.
- **Iconography**: Icons should have rounded caps and joins to match the soft corner radius of the UI containers.

## Components
Consistent application of the following components ensures the spiritual narrative remains intact:

- **Sticky Navbar**: Features a background blur (backdrop-filter: blur(12px)) with a 90% opaque White or Cream background. It should be slim with a subtle bottom shadow that only appears on scroll.
- **Responsive Cards**: Images should feature the 3xl corner radius. Text within cards should be padded generously (32px). Use a "soft lift" hover effect.
- **Testimonial Carousel**: Centered typography. Use a large Saffron-colored quotation mark as a decorative background element. Navigation pips should be soft and organic.
- **Contact Form**: Input fields use the Surface Cream (#FEF3C7) as a background with no border, appearing only as a soft inset shape. Labels are positioned above the field in the Label-MD style.
- **Footer**: A minimalist footer with a Surface Cream background. Links are organized in clean columns with plenty of vertical padding to ensure a peaceful end to the user journey.
- **Imagery**: All photos must have a warm color temperature. Use authentic shots of the Ganges or Haridwar architecture, applying a subtle soft-focus or high-key lighting to emphasize the "spiritual" light.