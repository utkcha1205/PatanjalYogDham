'use client';

import { useState } from 'react';
import { validateContactForm } from '@/lib/validation';
import type { ContactFormData, ValidationError } from '@/lib/types';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function errorFor(field: keyof ContactFormData): string | undefined {
    return errors.find((e) => e.field === field)?.message;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
    setErrors([]);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-3xl p-10 text-center"
        style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}
      >
        <h3 className="text-xl font-semibold" style={{ color: '#166534' }}>Thank you!</h3>
        <p className="mt-2" style={{ color: '#15803d' }}>
          Your message has been received. We will get back to you soon.
        </p>
      </div>
    );
  }

  const inputClasses = "mt-1 block w-full rounded-2xl border px-5 py-3 text-sm transition-colors focus:outline-none focus:ring-2";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="label-md" style={{ color: 'var(--color-on-surface)' }}>
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            aria-invalid={!!errorFor('name')}
            className={inputClasses}
            style={{
              borderColor: errorFor('name') ? '#ef4444' : 'var(--color-outline-variant)',
              color: 'var(--color-on-surface)',
            }}
          />
          {errorFor('name') && <p className="mt-1 text-sm text-red-600">{errorFor('name')}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="label-md" style={{ color: 'var(--color-on-surface)' }}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            aria-invalid={!!errorFor('email')}
            className={inputClasses}
            style={{
              borderColor: errorFor('email') ? '#ef4444' : 'var(--color-outline-variant)',
              color: 'var(--color-on-surface)',
            }}
          />
          {errorFor('email') && <p className="mt-1 text-sm text-red-600">{errorFor('email')}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="label-md" style={{ color: 'var(--color-on-surface)' }}>
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          aria-invalid={!!errorFor('message')}
          className={inputClasses}
          style={{
            borderColor: errorFor('message') ? '#ef4444' : 'var(--color-outline-variant)',
            color: 'var(--color-on-surface)',
          }}
        />
        {errorFor('message') && <p className="mt-1 text-sm text-red-600">{errorFor('message')}</p>}
      </div>

      <button
        type="submit"
        className="w-full rounded-full px-8 py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
        style={{ background: 'var(--color-primary-container)' }}
      >
        Send Message
      </button>
    </form>
  );
}
