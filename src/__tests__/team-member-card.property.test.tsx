import { describe, it, expect, vi } from 'vitest';
import * as fc from 'fast-check';
import { render, cleanup } from '@testing-library/react';
import TeamMemberCard from '@/components/TeamMemberCard';
import type { TeamMember } from '@/lib/types';

// Mock next/image as a simple img tag in jsdom
vi.mock('next/image', () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// --- Generators ---

const nonEmptyStringArb = fc.stringMatching(/^[a-zA-Z][a-zA-Z0-9 ]{2,30}$/);

const teamMemberArb: fc.Arbitrary<TeamMember> = fc.record({
  id: fc.stringMatching(/^[a-z0-9-]{1,20}$/),
  name: nonEmptyStringArb,
  bio: nonEmptyStringArb,
  image: fc.constant('/images/team/team-placeholder.svg'),
  role: nonEmptyStringArb,
});

// --- Property 1: Team member card completeness ---

describe('Property 1: Team member card completeness', () => {
  /**
   * **Validates: Requirements 3.3**
   *
   * For any TeamMember data object with a name, bio, role, and image path,
   * rendering the TeamMemberCard component should produce output that contains
   * the team member's name and bio text.
   */
  it('renders name and bio for any valid team member', () => {
    fc.assert(
      fc.property(teamMemberArb, (member) => {
        cleanup();
        const { container } = render(
          <TeamMemberCard
            name={member.name}
            bio={member.bio}
            role={member.role}
            image={member.image}
          />,
        );

        const textContent = container.textContent ?? '';
        expect(textContent).toContain(member.name);
        expect(textContent).toContain(member.bio);
      }),
      { numRuns: 100 },
    );
  });
});
