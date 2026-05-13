import { ContactFormData, ValidationError } from '@/lib/types';

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
