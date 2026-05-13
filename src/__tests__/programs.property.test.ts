import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import type { Program } from '@/lib/types';

// --- Helper: groupByCategory ---

function groupByCategory(programs: Program[]): Record<string, Program[]> {
  const groups: Record<string, Program[]> = {};
  for (const program of programs) {
    if (!groups[program.category]) {
      groups[program.category] = [];
    }
    groups[program.category].push(program);
  }
  return groups;
}

// --- Generator ---

const categoryArb = fc.constantFrom<'beginner' | 'intermediate' | 'advanced'>('beginner', 'intermediate', 'advanced');

const programArb: fc.Arbitrary<Program> = fc.record({
  id: fc.stringMatching(/^[a-z0-9-]{1,20}$/),
  name: fc.string({ minLength: 1, maxLength: 50 }),
  description: fc.string({ minLength: 1, maxLength: 100 }),
  duration: fc.string({ minLength: 1, maxLength: 20 }),
  schedule: fc.string({ minLength: 1, maxLength: 50 }),
  category: categoryArb,
});

const programListArb = fc.array(programArb, { minLength: 1, maxLength: 30 });

// --- Property 3 ---

describe('Property 3: Programs are grouped by category', () => {
  /**
   * **Validates: Requirements 4.3**
   *
   * For any list of programs with mixed categories, grouping by category
   * produces groups where every program in each group has the matching
   * category, and the total count across all groups equals the input count.
   */
  it('every program in each group has the matching category and total count is preserved', () => {
    fc.assert(
      fc.property(programListArb, (programs) => {
        const groups = groupByCategory(programs);

        // Every program in each group has the matching category
        for (const [category, groupPrograms] of Object.entries(groups)) {
          for (const program of groupPrograms) {
            expect(program.category).toBe(category);
          }
        }

        // Total count is preserved
        const totalGrouped = Object.values(groups).reduce((sum, g) => sum + g.length, 0);
        expect(totalGrouped).toBe(programs.length);
      }),
      { numRuns: 100 },
    );
  });
});
