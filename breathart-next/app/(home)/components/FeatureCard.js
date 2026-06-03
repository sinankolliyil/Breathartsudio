import { Users, Sparkles, Home, Camera, Zap, Heart } from 'lucide-react';

const iconMap = {
  'fas fa-user-tie': Users,
  'fas fa-female': Sparkles,
  'fas fa-mountain': Home,
  'fas fa-camera': Camera,
  'fas fa-shipping-fast': Zap,
  'fas fa-heart': Heart,
};

export default function FeatureCard({ icon, title, description, delay = 0 }) {
  const IconComponent = iconMap[icon] || Camera;

  return (
    <div
      className="feature-card animate-reveal active"
      style={{
        padding: '2.5rem 2rem',
        border: '1px solid rgba(158, 112, 96, 0.12)',
        background: 'var(--color-shade-2)',
        textAlign: 'center',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(43, 27, 20, 0.02)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <div 
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'rgba(158, 112, 96, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justify-content: 'center',
          color: 'var(--color-gold)',
          marginBottom: '0.5rem',
        }}
      >
        <IconComponent size={24} />
      </div>
      <h3 style={{ 
        fontFamily: 'var(--font-heading)', 
        fontSize: '1.15rem', 
        fontWeight: '600', 
        color: 'var(--color-white)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        margin: 0
      }}>{title}</h3>
      <p style={{ 
        color: 'var(--color-text-muted)', 
        fontSize: '0.85rem',
        lineHeight: '1.6',
        margin: 0
      }}>{description}</p>
    </div>
  );
}

