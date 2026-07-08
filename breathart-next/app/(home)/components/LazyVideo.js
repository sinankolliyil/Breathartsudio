'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function LazyVideo({ src, style, className }) {
  const ref = useRef(null);
  // Pre-load the video slightly before it enters the viewport
  const isInView = useInView(ref, { once: true, margin: "400px" });

  return (
    <div ref={ref} style={{ width: '100%', height: '100%', ...style }} className={className}>
      {isInView && (
        <video 
          src={src} 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      )}
    </div>
  );
}
