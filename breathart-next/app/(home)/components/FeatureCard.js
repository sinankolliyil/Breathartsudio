import { Users, Sparkles, Home, Camera, Zap, Heart } from 'lucide-react';

const iconMap = {
  'fas fa-user-tie': Users,
  'fas fa-female': Sparkles,
  'fas fa-mountain': Home,
  'fas fa-camera': Camera,
  'fas fa-shipping-fast': Zap,
  'fas fa-heart': Heart,
};

export default function FeatureCard({ icon, title, description, index }) {
  const IconComponent = iconMap[icon] || Camera;
  const numStr = index < 10 ? `0${index}` : `${index}`;

  return (
    <div className="premium-feature-card animate-reveal active">
      <div className="premium-feature-header">
        <span className="premium-feature-num">{numStr}</span>
        <div className="premium-feature-icon-box">
          <IconComponent size={20} strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="premium-feature-title">{title}</h3>
      <p className="premium-feature-desc">{description}</p>
      <div className="premium-feature-hover-line"></div>
    </div>
  );
}

