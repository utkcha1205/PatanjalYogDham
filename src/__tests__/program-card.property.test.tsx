import { describe, it, expect, vi } from 'vitest';
import * as fc from 'fast-check';
import { render, cleanup } from '@testing-library/react';
import ProgramCard from '@/components/ProgramCard';
import type { Program } from '@/lib/types';

// Mock next/link as a simple anchor tag in jsdom
vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...rest
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

// --- Generators ---

const nonEmptyStringArb = fc.stringMatching(/^[a-zA-Z][a-zA-Z0-9 ]{2,30}$/);

const categoryArb = fc.constantFrom(
  'beginner' as const,
  'intermediate' as const,
  'advanced' as const,
);

const programArb: fc.Arbitrary<Program> = fc.record({
  id: fc.stringMatching(/^[a-z0-9-]{1,20}$/),
  name: nonEmptyStringArb,
  description: nonEmptyStringArb,
  duration: nonEmptyStringArb,
  schedule: nonEmptyStringArb,
  category: categoryArb,
});

// --- Property 2: Program card completeness ---

describe('Property 2: Program card completeness', () => {
  /**
   * **Validates: Requirements 4.2, 4.4**
   *
   * For any Program data object, rendering the ProgramCard component should
   * produce output that contains the program name, description, duration,
   * schedule, and a call-to-action link pointing to /contact.
   */
  it('renders name, description, duration, schedule, and /contact link for any valid program', () => {
    fc.assert(
      fc.property(programArb, (program) => {
        cleanup();
        const { container } = render(
          <ProgramCard
            name={program.name}
            description={program.description}
            duration={program.duration}
            schedule={program.schedule}
            category={program.category}
          />,
        );

        const textContent = container.textContent ?? '';
        expect(textContent).toContain(program.name);
        expect(textContent).toContain(program.description);
        expect(textContent).toContain(program.duration);
        expect(textContent).toContain(program.schedule);

        // Assert CTA link to /contact exists
        const link = container.querySelector('a[href="/contact"]');
        expect(link).not.toBeNull();
      }),
      { numRuns: 100 },
    );
  });
});
