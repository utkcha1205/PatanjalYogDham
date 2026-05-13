import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import { siteMetadata } from '@/data/siteMetadata';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Patanjal Yoga Dham in Arya Nagar, Haridwar. Find our address, phone number, email, operating hours, and directions.',
  openGraph: {
    title: 'Contact | Patanjal Yoga Dham',
    description:
      'Get in touch with Patanjal Yoga Dham in Arya Nagar, Haridwar. Find our address, phone, email, and directions.',
    url: `${siteMetadata.siteUrl}/contact`,
    siteName: siteMetadata.siteName,
    images: [{ url: siteMetadata.ogImage }],
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page heading */}
      <section className="bg-amber-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-amber-900">
            Contact Us
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-amber-800">
            We would love to hear from you. Reach out for enrollment inquiries,
            visit details, or any questions about our programs.
          </p>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left column — info + map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-amber-900">
                  Get in Touch
                </h2>

                <dl className="mt-6 space-y-4 text-amber-800">
                  <div>
                    <dt className="font-semibold text-amber-900">Address</dt>
                    <dd>{siteMetadata.address}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-amber-900">Phone</dt>
                    <dd>
                      <a
                        href={`tel:${siteMetadata.phone}`}
                        className="hover:text-amber-600 transition-colors"
                      >
                        {siteMetadata.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-amber-900">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${siteMetadata.email}`}
                        className="hover:text-amber-600 transition-colors"
                      >
                        {siteMetadata.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-amber-900">
                      Operating Hours
                    </dt>
                    <dd>{siteMetadata.operatingHours}</dd>
                  </div>
                </dl>
              </div>

              <MapEmbed />
            </div>

            {/* Right column — contact form */}
            <div>
              <h2 className="text-2xl font-bold text-amber-900">
                Send Us a Message
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
