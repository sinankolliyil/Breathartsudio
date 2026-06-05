'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

export default function PopupForm({ repeatDelay = 60000 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show initially after 4 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(initialTimer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    
    // Repeat after specified repeatDelay
    setTimeout(() => {
      setIsVisible(true);
    }, repeatDelay);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="popup-overlay">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="popup-container"
          >
            <button className="popup-close" onClick={handleClose} aria-label="Close Popup">
              <X size={20} />
            </button>
            
            <div className="popup-content">
              <h3 className="popup-title">Let's craft your narrative.</h3>
              <p className="popup-subtitle">Get in touch with us to secure your session.</p>
              <ContactForm theme="landing" showPackageField={false} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
