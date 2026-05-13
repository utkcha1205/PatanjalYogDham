import { siteMetadata } from '@/data/siteMetadata';

export default function MapEmbed() {
  return (
    <div className="relative overflow-hidden rounded-3xl" style={{ border: '1px solid var(--color-outline-variant)' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d78.1642!3d29.9457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sArya+Nagar%2C+Haridwar!5e0!3m2!1sen!2sin!4v1700000000000"
        title="Location of Patanjal Yoga Dham in Arya Nagar, Haridwar"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-80 w-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
        allowFullScreen
      />
      {/* Glass overlay */}
      <div
        className="absolute bottom-4 left-4 glass rounded-2xl px-5 py-3"
        style={{ border: '1px solid var(--color-outline-variant)' }}
      >
        <p className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>📍 Haridwar Location</p>
        <p className="text-xs mt-1" style={{ color: 'var(--color-on-surface-variant)' }}>{siteMetadata.address}</p>
      </div>
    </div>
  );
}
