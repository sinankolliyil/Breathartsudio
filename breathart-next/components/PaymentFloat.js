'use client';

import { useState } from 'react';

export default function PaymentFloat() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="payment-float-banner">
      <div className="payment-float-container">
        <span className="payment-float-text">We accept</span>
        <img 
          src="/assets/logo/tamara-logo.webp" 
          alt="Tamara Accepted" 
          className="payment-float-img" 
        />
      </div>
      <button 
        className="payment-float-close" 
        onClick={() => setIsVisible(false)}
        aria-label="Close Payment Banner"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}
