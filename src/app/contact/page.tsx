import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import { AnimatedSection } from '@/components/AnimatedWrappers';
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
      {/* Hero */}
      <section className="py-[120px] text-center">
        <div className="mx-auto max-w-[1280px] px-8">
          <AnimatedSection>
            <p className="label-md" style={{ color: 'var(--color-primary)' }}>Get In Touch</p>
            <h1 className="display-lg mt-4" style={{ color: 'var(--color-on-surface)' }}>
              Connect with Your Inner Peace
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Grid — 7/5 */}
      <section className="pb-[120px]">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Form — 7 cols */}
            <AnimatedSection variant="from-left" className="lg:col-span-7">
              <div
                className="rounded-[2rem] p-10 elevation-2"
                style={{ background: 'white', border: '1px solid var(--color-outline-variant)' }}
              >
                <h2 className="headline-lg" style={{ color: 'var(--color-on-surface)' }}>
                  Send Us a Message
                </h2>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </AnimatedSection>

            {/* Info — 5 cols */}
            <AnimatedSection variant="from-right" delay={200} className="lg:col-span-5 space-y-6">
              {/* Contact Details Card */}
              <div
                className="rounded-3xl p-8 elevation-1"
                style={{ background: 'white', border: '1px solid var(--color-outline-variant)' }}
              >
                <h3 className="label-md" style={{ color: 'var(--color-primary)' }}>Contact Details</h3>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-sm font-semibold" style={{ color: 'var(--color-on-surface)' }}>📍 Address</dt>
                    <dd className="body-md mt-1" style={{ color: 'var(--color-on-surface-variant)' }}>
                      {siteMetadata.address}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold" style={{ color: 'var(--color-on-surface)' }}>📞 Phone</dt>
                    <dd className="body-md mt-1">
                      <a href={`tel:${siteMetadata.phone}`} className="hover:opacity-80" style={{ color: 'var(--color-primary)' }}>
                        {siteMetadata.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold" style={{ color: 'var(--color-on-surface)' }}>✉️ Email</dt>
                    <dd className="body-md mt-1">
                      <a href={`mailto:${siteMetadata.email}`} className="hover:opacity-80" style={{ color: 'var(--color-primary)' }}>
                        {siteMetadata.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Operating Hours Card */}
              <div
                className="rounded-3xl p-8"
                style={{ background: 'var(--color-secondary-container)' }}
              >
                <h3 className="label-md" style={{ color: 'var(--color-primary)' }}>Operating Hours</h3>
                <p className="body-lg mt-4 font-semibold" style={{ color: 'var(--color-on-surface)' }}>
                  {siteMetadata.operatingHours}
                </p>
                <p className="body-md mt-2" style={{ color: 'var(--color-on-surface-variant)' }}>
                  We welcome walk-ins and scheduled visits alike.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-[120px]">
        <div className="mx-auto max-w-[1280px] px-8">
          <AnimatedSection variant="scale-up">
            <MapEmbed />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
