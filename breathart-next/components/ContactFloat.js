import Link from 'next/link';

export default function ContactFloat() {
  return (
    <Link href="/contact" className="contact-float" title="Contact Us">
      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold', transform: 'translateY(-1px)' }}>&gt;</span>
    </Link>
  );
}
