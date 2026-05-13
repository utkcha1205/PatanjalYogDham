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
        role="status"
        className="rounded-xl bg-green-50 p-8 text-center ring-1 ring-green-200"
      >
        <h3 className="text-xl font-semibold text-green-800">Thank you!</h3>
        <p className="mt-2 text-green-700">
          Your message has been received. We will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name field */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-amber-900"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          aria-invalid={!!errorFor('name')}
          aria-describedby={errorFor('name') ? 'name-error' : undefined}
          className="mt-1 block w-full rounded-lg border border-amber-300 px-4 py-2 text-amber-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        {errorFor('name') && (
          <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">
            {errorFor('name')}
          </p>
        )}
      </div>

      {/* Email field */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-amber-900"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          aria-invalid={!!errorFor('email')}
          aria-describedby={errorFor('email') ? 'email-error' : undefined}
          className="mt-1 block w-full rounded-lg border border-amber-300 px-4 py-2 text-amber-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        {errorFor('email') && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
            {errorFor('email')}
          </p>
        )}
      </div>

      {/* Message field */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-amber-900"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          aria-invalid={!!errorFor('message')}
          aria-describedby={errorFor('message') ? 'message-error' : undefined}
          className="mt-1 block w-full rounded-lg border border-amber-300 px-4 py-2 text-amber-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        {errorFor('message') && (
          <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">
            {errorFor('message')}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-amber-700 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      >
        Send Message
      </button>
    </form>
  );
}
