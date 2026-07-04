import PageHeader from '@/components/PageHeader';
import { BreadcrumbSchema, WebPageSchema } from '../schema';

export const metadata = {
  title: 'Terms & Conditions | BreathArt Photography Studio Dubai',
  description: 'Read the terms and conditions for booking photography and videography services with BreathArt Creative Studio in Dubai.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | BreathArt Photography Studio Dubai',
    description: 'Read the terms and conditions for booking photography and videography services with BreathArt Creative Studio in Dubai.',
    url: 'https://breathart.ae/terms-and-conditions',
    images: [
      {
        url: '/assets/hero/hero_nature.png',
        width: 1200,
        height: 630,
        alt: 'BreathArt Terms and Conditions',
      },
    ],
  },
  twitter: {
    title: 'Terms & Conditions | BreathArt Photography Studio Dubai',
    description: 'Read the terms and conditions for booking photography and videography services with BreathArt Creative Studio in Dubai.',
    images: ['/assets/hero/hero_nature.png'],
  },
};

export default function TermsAndConditionsPage() {
  const h2Style = { fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-white)', marginTop: '2.5rem', marginBottom: '1rem' };
  const h3Style = { fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--color-white)', marginTop: '2rem', marginBottom: '1rem' };
  const pStyle = { color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' };
  const liStyle = { color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Terms & Conditions', url: '/terms-and-conditions' },
        ]}
      />
      <WebPageSchema
        name="Terms & Conditions - BreathArt Photography Studio"
        description="Read the terms and conditions for booking photography and videography services with BreathArt Creative Studio in Dubai."
        url="/terms-and-conditions"
      />

      <PageHeader
        subtitle="Legal Framework"
        title="Terms & Conditions"
        description="The guidelines and rules for engaging with BreathArt Creative Studio services."
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)' }}
      />

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', paddingBottom: '6rem' }}>
          
          <p style={pStyle}>
            Welcome to <strong>BreathArt Photography</strong>. By booking a photography session, submitting an enquiry, or using our website, you agree to the following Terms &amp; Conditions.
          </p>

          <h2 style={h2Style}>1. Booking &amp; Confirmation</h2>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={liStyle}>All photography sessions are subject to availability.</li>
            <li style={liStyle}>A booking is confirmed only after the required booking fee or advance payment has been received.</li>
            <li style={liStyle}>The booking fee reserves your preferred date and time.</li>
            <li style={liStyle}>Booking fees and advance payments are <em>strictly non-refundable</em> unless BreathArt Photography cancels the session.</li>
          </ul>

          <h2 style={h2Style}>2. Payment Policy</h2>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={liStyle}>Full payment must be completed before the delivery of any edited photographs, albums, prints, digital files, or other products.</li>
            <li style={liStyle}><em>No photographs or digital images will be delivered until the outstanding balance has been paid in full.</em></li>
            <li style={liStyle}>Additional editing, albums, prints, or products requested after the session will be charged separately.</li>
          </ul>

          <h2 style={h2Style}>3. Cancellation &amp; Rescheduling</h2>
          <h3 style={h3Style}>Client Cancellation</h3>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={liStyle}>All booking fees and payments are <em>non-refundable</em> if the client cancels the booking.</li>
            <li style={liStyle}>Missed appointments without prior notice will be treated as cancellations.</li>
          </ul>

          <h3 style={h3Style}>Rescheduling</h3>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={liStyle}>Clients may request to reschedule at least <em>48 hours</em> before the scheduled session.</li>
            <li style={liStyle}>Rescheduling is subject to studio availability.</li>
            <li style={liStyle}>BreathArt Photography reserves the right to approve or decline additional rescheduling requests.</li>
          </ul>

          <h3 style={h3Style}>Studio Cancellation</h3>
          <p style={pStyle}>
            If BreathArt Photography is unable to conduct the session due to unforeseen circumstances, clients will be offered an alternative appointment or a full refund of payments made.
          </p>

          <h2 style={h2Style}>4. Arrival &amp; Session Policy</h2>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={liStyle}>Clients are requested to arrive on time.</li>
            <li style={liStyle}>Late arrivals may reduce the available shooting time.</li>
            <li style={liStyle}>Significant delays may require the session to be shortened or rescheduled.</li>
          </ul>

          <h2 style={h2Style}>5. Newborn Photography Safety</h2>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={liStyle}>The baby's safety and comfort are our highest priorities.</li>
            <li style={liStyle}>Parents or guardians must remain present throughout the session.</li>
            <li style={liStyle}>Some poses may require parental assistance or composite editing.</li>
            <li style={liStyle}>BreathArt Photography reserves the right to modify or omit any pose that may compromise safety.</li>
          </ul>

          <h2 style={h2Style}>6. Image Selection &amp; Editing</h2>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={liStyle}>Images are professionally selected and edited by our team.</li>
            <li style={liStyle}>Standard colour correction and retouching are included unless otherwise specified.</li>
            <li style={liStyle}>Extensive editing requests may incur additional charges.</li>
            <li style={liStyle}>RAW or unedited files are not provided unless agreed in writing.</li>
          </ul>

          <h2 style={h2Style}>7. Image Delivery</h2>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={liStyle}>Final edited images will be delivered within the estimated timeframe communicated during booking.</li>
            <li style={liStyle}>Delivery schedules may vary during busy seasons.</li>
            <li style={liStyle}><em>All images will be released only after full payment has been received.</em></li>
          </ul>

          <h2 style={h2Style}>8. Copyright</h2>
          <p style={pStyle}>
            All photographs remain the intellectual property and copyright of <strong>BreathArt Photography</strong>.
          </p>
          <p style={pStyle}>
            Clients receive a personal-use licence for the delivered photographs. Images may not be:
          </p>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={liStyle}>Sold to third parties.</li>
            <li style={liStyle}>Used for commercial purposes without written permission.</li>
            <li style={liStyle}>Edited, filtered, or altered in a way that misrepresents our work.</li>
          </ul>

          <h2 style={h2Style}>9. Portfolio, Website &amp; Social Media Usage</h2>
          <p style={pStyle}>
            BreathArt Photography is proud to showcase our work and may use photographs from your session for:
          </p>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={liStyle}>Official website</li>
            <li style={liStyle}>Social media platforms</li>
            <li style={liStyle}>Online portfolio</li>
            <li style={liStyle}>Marketing materials</li>
            <li style={liStyle}>Advertisements</li>
            <li style={liStyle}>Printed promotional materials</li>
            <li style={liStyle}>Studio displays</li>
          </ul>
          <p style={pStyle}>
            If you <em>do not wish your photographs to be used</em> for promotional purposes, please notify us <em>before your photography session or before image delivery</em>. We respect your privacy and will honour your request.
          </p>

          <h2 style={h2Style}>10. Marketing Communications &amp; Consent</h2>
          <p style={pStyle}>
            By submitting an enquiry, booking a photography session, downloading resources, or providing your contact details through the BreathArt Photography website or booking forms, you consent to receiving communications from <strong>BreathArt Photography</strong>.
          </p>
          <p style={pStyle}>
            These communications may include:
          </p>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={liStyle}>Booking confirmations and appointment reminders</li>
            <li style={liStyle}>Photography package information</li>
            <li style={liStyle}>Seasonal offers and promotional campaigns</li>
            <li style={liStyle}>New photography services</li>
            <li style={liStyle}>Studio events</li>
            <li style={liStyle}>Photography tips and newsletters</li>
            <li style={liStyle}>Important announcements related to your booking</li>
          </ul>
          <p style={pStyle}>We may contact you through:</p>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={liStyle}>Phone calls</li>
            <li style={liStyle}>WhatsApp messages</li>
            <li style={liStyle}>SMS</li>
            <li style={liStyle}>Email</li>
            <li style={liStyle}>Other digital communication channels</li>
          </ul>
          <p style={pStyle}>
            Your personal information will be used solely for communication related to BreathArt Photography&apos;s services, bookings, customer support, and promotional activities. We <em>do not sell or share your personal information with third parties for their independent marketing purposes.</em>
          </p>
          <p style={pStyle}>
            If you no longer wish to receive promotional communications, you may opt out at any time by contacting us or by following the unsubscribe or opt-out instructions provided in our communications.
          </p>

          <h2 style={h2Style}>11. Studio Rules</h2>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={liStyle}>Please supervise children at all times.</li>
            <li style={liStyle}>Food and beverages may be restricted in certain studio areas.</li>
            <li style={liStyle}>Clients are responsible for any intentional damage to studio equipment or props.</li>
          </ul>

          <h2 style={h2Style}>12. Limitation of Liability</h2>
          <p style={pStyle}>
            BreathArt Photography takes every reasonable precaution to provide a safe and professional experience. However, we shall not be liable for:
          </p>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={liStyle}>Loss or damage to personal belongings.</li>
            <li style={liStyle}>Delays caused by weather, traffic, illness, or circumstances beyond our control.</li>
            <li style={liStyle}>Technical failures or unforeseen events beyond our reasonable control.</li>
          </ul>

          <h2 style={h2Style}>13. Digital File Storage</h2>
          <p style={pStyle}>
            Clients are responsible for downloading and safely backing up their photographs after delivery. While BreathArt Photography may retain archived image files for a limited period, long-term storage is not guaranteed.
          </p>

          <h2 style={h2Style}>14. Privacy</h2>
          <p style={pStyle}>Your personal information is collected and used solely for:</p>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={liStyle}>Managing bookings</li>
            <li style={liStyle}>Customer support</li>
            <li style={liStyle}>Delivering photography services</li>
            <li style={liStyle}>Processing payments</li>
            <li style={liStyle}>Communication regarding your booking and promotional updates</li>
          </ul>
          <p style={pStyle}>
            Your information is handled securely and in accordance with our Privacy Policy.
          </p>

          <h2 style={h2Style}>15. Acceptance of Terms</h2>
          <p style={pStyle}>
            By booking a session with BreathArt Photography or using our website, you confirm that you have read, understood, and agreed to these Terms &amp; Conditions.
          </p>

          <h2 style={h2Style}>Contact Us</h2>
          <div style={{ background: 'var(--color-shade-2)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(158,112,96,0.15)', marginTop: '1rem' }}>
            <p style={{ color: 'var(--color-white)', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
              BreathArt Photography
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              <strong>Address:</strong> Dubai, United Arab Emirates
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              <strong>Primary Email:</strong> <a href="mailto:Info@breathart.ae" style={{ color: 'var(--color-gold)' }}>Info@breathart.ae</a>
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              <strong>Secondary Email:</strong> <a href="mailto:Breathartdxb@gmail.com" style={{ color: 'var(--color-gold)' }}>Breathartdxb@gmail.com</a>
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              <strong>WhatsApp &amp; Calls:</strong> +971 52 640 0679 / +971 52 215 0837
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
