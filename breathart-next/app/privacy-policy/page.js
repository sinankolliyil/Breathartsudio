import PageHeader from '@/components/PageHeader';
import { BreadcrumbSchema, WebPageSchema } from '../schema';

export const metadata = {
  title: 'Privacy Policy | BreathArt Photography Studio Dubai',
  description: 'Learn how BreathArt Photography Studio collects, processes, and protects personal data in compliance with UAE data protection laws (PDPL).',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | BreathArt Photography Studio Dubai',
    description: 'Learn how BreathArt Photography Studio collects, processes, and protects personal data in compliance with UAE data protection laws (PDPL).',
    url: 'https://breathart.ae/privacy-policy',
    images: [
      {
        url: '/assets/hero/hero_nature.png',
        width: 1200,
        height: 630,
        alt: 'BreathArt Privacy Policy',
      },
    ],
  },
  twitter: {
    title: 'Privacy Policy | BreathArt Photography Studio Dubai',
    description: 'Learn how BreathArt Photography Studio collects, processes, and protects personal data in compliance with UAE data protection laws (PDPL).',
    images: ['/assets/hero/hero_nature.png'],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy-policy' },
        ]}
      />
      <WebPageSchema
        name="Privacy Policy - BreathArt Photography Studio"
        description="Learn how BreathArt Photography Studio collects, processes, and protects personal data in compliance with UAE data protection laws."
        url="/privacy-policy"
      />

      <PageHeader
        subtitle="Legal Framework"
        title="Privacy Policy"
        description="How BreathArt Creative Studio collects, uses, and safeguards personal data under UAE laws."
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)' }}
      />

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', paddingBottom: '6rem' }}>
          
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-white)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            1. Introduction
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
            Welcome to <strong>BreathArt Creative Studio</strong> (hereinafter referred to as &ldquo;BreathArt,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to safeguarding the privacy and security of our clients&rsquo; and visitors&rsquo; personal data. 
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
            This Privacy Policy outlines how we collect, process, store, and share your personal information when you visit our website (breathart.ae), use our booking channels, contact forms, or communicate with us directly. This policy is written in compliance with applicable laws of the United Arab Emirates, specifically the <strong>UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL)</strong>.
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-white)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            2. Information We Collect
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
            We collect personal information to provide you with bespoke, luxury photography and videography services. The types of personal data we collect include:
          </p>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Contact Data:</strong> Name, email address, phone number, and physical address.
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Inquiry &amp; Session Details:</strong> Preferences, booked dates, session types (e.g., Newborn, Wedding, Corporate, Events), and specific details about the session.
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Visual &amp; Photographic Content:</strong> Raw files and edited photographs/videos containing your likeness or the likeness of your family members, captured during our scheduled sessions.
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Technical &amp; Usage Data:</strong> IP addresses, browser types, operating systems, and details of how you interact with our website via tracking cookies and analytics tools.
            </li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-white)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            3. How We Collect Information
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
            We collect personal data directly and automatically through various interfaces:
          </p>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Contact &amp; Booking Forms:</strong> Submission forms on our website where you input details to schedule sessions or request catalogs.
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>WhatsApp Business:</strong> Secure messaging redirection links used to initiate booking conversations directly with our coordinators.
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Email Communications:</strong> Inquiries sent to our official corporate emails (Info@breathart.ae / Breathartdxb@gmail.com).
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Cookies &amp; Tracking:</strong> Dynamic scripts and cookie storage used to analyze visual interaction patterns and improve website navigation.
            </li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-white)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            4. How We Use Information
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
            BreathArt processes your personal data to fulfill our services and comply with local regulations. We use the information for:
          </p>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              Fulfilling contracts, including scheduling, executing shoots, post-production editing, and delivering physical or digital albums.
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              Managing payments and offering flexible financing options through integrated partners such as <strong>Tamara</strong>.
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              Responding to inquiries and providing elite customer care.
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              Optimizing website layouts, monitoring performance metrics, and preventing technical errors.
            </li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-white)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            5. Cookies and Tracking Technologies
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
            We use cookies to personalize content, remember preferences, and analyze our traffic. Cookies are small text files stored locally on your device. 
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
            You can configure your browser to decline cookies or block tracking scripts. However, blocking certain cookies may limit your ability to use specific interactive elements of our platform.
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-white)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            6. Third-Party Services
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
            We partner with reliable third-party integrations to enhance user experiences and handle administrative tasks. These integrations include:
          </p>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Payment Platforms:</strong> Tamara, which processes transactions securely under strict financial and data security regulations.
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Communication Channels:</strong> WhatsApp Business API and secure email servers for managing bookings and catalog deliveries.
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Cloud Delivery Platforms:</strong> Secure gallery delivery networks used to host high-resolution photographs for client downloads.
            </li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-white)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            7. Data Security
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
            We implement advanced physical, technical, and organizational security measures to protect your personal data from unauthorized access, accidental loss, alteration, or disclosure. High-resolution galleries and database backups are kept in encrypted storage with strict role-based access restrictions.
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-white)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            8. Data Retention
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
            We store personal data and session visual files only for as long as necessary. 
          </p>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Client Information:</strong> Retained for administrative, billing, and accounting compliance purposes as mandated by UAE tax and business laws.
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Visual Archives:</strong> We retain high-resolution final photographs for a grace period (e.g., 1–3 years) to allow gallery recovery in case of data loss by the client, after which files may be securely deleted.
            </li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-white)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            9. Your Rights
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
            Under the UAE Personal Data Protection Law (PDPL), you possess the following rights:
          </p>
          <ul style={{ marginBottom: '1.25rem' }}>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Right to Access:</strong> Request a copy of the personal data we hold about you.
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal information.
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Right to Erasure:</strong> Request the deletion of your personal data under certain conditions.
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Right to Restrict Processing:</strong> Request suspension of processing your personal data.
            </li>
            <li style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '0.5rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent.
            </li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-white)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            10. Children&rsquo;s Privacy
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
            As specialists in Newborn and family photography, we process visual data of minors. We strictly require explicit, written consent from parents or legal guardians before executing any session involving children. We will never display children&rsquo;s images in our commercial portfolios, website gallery, or social media channels without specific parental authorization.
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-white)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            11. International Data Transfers
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
            Some of the cloud-based backup servers, analytics scripts, and digital gallery delivery networks we utilize may host data outside the UAE. We ensure all international data processors offer levels of protection comparable to those outlined in the UAE PDPL.
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-white)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            12. Changes to This Privacy Policy
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
            We may update this Privacy Policy periodically to reflect changes in our operational procedures or local UAE legal requirements. The updated policy will be published on this page with the &ldquo;Last Updated&rdquo; timestamp. We recommend checking this page regularly.
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-white)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            13. Contact Information
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
            If you have questions, concerns, or requests regarding this Privacy Policy or your data protection rights, please contact us at:
          </p>
          <div style={{ background: 'var(--color-shade-2)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(158,112,96,0.15)', marginTop: '1rem' }}>
            <p style={{ color: 'var(--color-white)', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
              BreathArt Creative Studio
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
