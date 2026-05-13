import { siteMetadata } from '@/data/siteMetadata';

export default function MapEmbed() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d78.1642!3d29.9457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sArya+Nagar%2C+Haridwar!5e0!3m2!1sen!2sin!4v1700000000000"
        title="Location of Patanjal Yoga Dham in Arya Nagar, Haridwar"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-64 w-full rounded-xl border-0 sm:h-80"
        allowFullScreen
      />
      <p className="mt-3 text-sm text-amber-700">{siteMetadata.address}</p>
    </div>
  );
}
