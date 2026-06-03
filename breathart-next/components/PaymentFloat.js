'use client';
import { useState } from 'react';

export default function PaymentFloat() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="payment-float-banner">
      <div className="payment-float-container">
        <span className="payment-float-text">We accept</span>
        <img 
          src="/assets/logo/tamara-logo.webp" 
          alt="Tamara Payment Logo" 
          className="payment-float-img" 
        />
      </div>
      <button 
        className="payment-float-close" 
        onClick={() => setVisible(false)} 
        aria-label="Close payment information"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}
