import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { validateContactForm } from '@/lib/validation';
import type { ContactFormData } from '@/lib/types';

// --- Generators ---

const alphanumArb = fc.stringMatching(/^[a-z0-9]{1,10}$/);
const tldArb = fc.stringMatching(/^[a-z]{2,4}$/);

const validEmailArb = fc.tuple(alphanumArb, alphanumArb, tldArb).map(
  ([local, domain, tld]) => `${local}@${domain}.${tld}`,
);

const nonEmptyTrimmedArb = fc.stringMatching(/^[a-zA-Z0-9][a-zA-Z0-9 ]{0,30}[a-zA-Z0-9]$/);

const validContactFormArb: fc.Arbitrary<ContactFormData> = fc.record({
  name: nonEmptyTrimmedArb,
  email: validEmailArb,
  message: nonEmptyTrimmedArb,
});

// --- Property 6 ---

describe('Property 6: Valid contact form submission shows confirmation', () => {
  /**
   * **Validates: Requirements 6.5**
   *
   * For any valid ContactFormData (non-empty trimmed name, valid email pattern,
   * non-empty trimmed message), validateContactForm returns an empty array.
   */
  it('returns no errors for any valid contact form data', () => {
    fc.assert(
      fc.property(validContactFormArb, (data) => {
        const errors = validateContactForm(data);
        expect(errors).toEqual([]);
      }),
      { numRuns: 100 },
    );
  });
});

// --- Generators for invalid forms ---

type InvalidField = 'name' | 'email' | 'message';

const emptyStringArb = fc.constantFrom('', '   ', '  \t  ');

const invalidEmailArb = fc.oneof(
  emptyStringArb,
  // missing @
  alphanumArb,
  // missing domain part after @
  alphanumArb.map((s) => `${s}@`),
  // missing local part before @
  alphanumArb.map((s) => `@${s}.com`),
  // spaces in email
  fc.constant('user @example.com'),
);

/**
 * Generate a ContactFormData with at least one invalid field.
 * Returns [data, Set<invalidFieldNames>].
 */
const invalidContactFormArb: fc.Arbitrary<[ContactFormData, Set<InvalidField>]> = fc
  .record({
    nameInvalid: fc.boolean(),
    emailInvalid: fc.boolean(),
    messageInvalid: fc.boolean(),
    validName: nonEmptyTrimmedArb,
    validEmail: validEmailArb,
    validMessage: nonEmptyTrimmedArb,
    badName: emptyStringArb,
    badEmail: invalidEmailArb,
    badMessage: emptyStringArb,
  })
  .filter((r) => r.nameInvalid || r.emailInvalid || r.messageInvalid)
  .map((r) => {
    const invalidFields = new Set<InvalidField>();
    const data: ContactFormData = {
      name: r.nameInvalid ? r.badName : r.validName,
      email: r.emailInvalid ? r.badEmail : r.validEmail,
      message: r.messageInvalid ? r.badMessage : r.validMessage,
    };
    if (r.nameInvalid) invalidFields.add('name');
    if (r.emailInvalid) invalidFields.add('email');
    if (r.messageInvalid) invalidFields.add('message');
    return [data, invalidFields] as [ContactFormData, Set<InvalidField>];
  });

// --- Property 7 ---

describe('Property 7: Invalid contact form shows field-specific errors', () => {
  /**
   * **Validates: Requirements 6.6**
   *
   * For any ContactFormData with at least one invalid field,
   * validateContactForm returns errors referencing exactly the invalid fields.
   */
  it('returns errors for exactly the invalid fields', () => {
    fc.assert(
      fc.property(invalidContactFormArb, ([data, invalidFields]) => {
        const errors = validateContactForm(data);
        expect(errors.length).toBeGreaterThan(0);

        const errorFields = new Set(errors.map((e) => e.field));

        // Every error must reference a field that was actually invalid
        for (const field of errorFields) {
          expect(invalidFields.has(field as InvalidField)).toBe(true);
        }

        // Every invalid field must have a corresponding error
        for (const field of invalidFields) {
          expect(errorFields.has(field)).toBe(true);
        }
      }),
      { numRuns: 100 },
    );
  });
});
