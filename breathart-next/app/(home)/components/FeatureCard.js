import { Users, Sparkles, Home, Camera, Zap, Heart } from 'lucide-react';
import Image from 'next/image';

const iconMap = {
  'fas fa-user-tie': '/assets/icon/PHOTOGRAPHERS .png',
  'fas fa-female': '/assets/icon/MATERNITY.png',
  'fas fa-mountain': '/assets/icon/PREMIUM STUDIO.png',
  'fas fa-camera': '/assets/icon/& LIGHTING copy.png',
  'fas fa-shipping-fast': '/assets/icon/FAST 24-HOUR PHOTO DELIVERY.png',
  'fas fa-heart': '/assets/icon/TRUSTED BY 10 HAPPY CLIENT.png',
};

export default function FeatureCard({ icon, title, description, index }) {
  const IconComponent = iconMap[icon] || Camera;
  const numStr = index < 10 ? `0${index}` : `${index}`;

  
  return (
    <div className="premium-feature-card animate-reveal active">
      <div className="premium-feature-header">
        <span className="premium-feature-num">{numStr}</span>
        <div className="premium-feature-icon-box">
          {typeof IconComponent === 'string' ? (
            <Image 
              src={IconComponent} 
              alt={title} 
              width={80} 
              height={80} 
              quality={100}
              unoptimized={true}
              className="object-contain"
              style={{ width: '60px', height: '60px' }}
            />
          ) : (
            <IconComponent size={60} strokeWidth={1.5} />
          )}
        </div>
      </div>
      <h3 className="premium-feature-title">{title}</h3>
      <p className="premium-feature-desc">{description}</p>
      <div className="premium-feature-hover-line"></div>
    </div>
  );
}

