'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-28 right-8 z-40 w-11 h-11 rounded-full flex items-center justify-center
            dark:bg-white/10 bg-black/5
            dark:hover:bg-pie-violet/30 hover:bg-pie-violet/15
            border dark:border-white/15 border-black/10
            dark:hover:border-pie-violet/50 hover:border-pie-violet/40
            backdrop-blur-xl shadow-lg
            dark:text-zinc-300 text-zinc-600
            dark:hover:text-white hover:text-pie-violet
            transition-colors duration-200 cursor-pointer scroll-top-tailwind-fallback"
        >
          <ChevronUp className="w-5 h-5 scroll-top-icon" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
