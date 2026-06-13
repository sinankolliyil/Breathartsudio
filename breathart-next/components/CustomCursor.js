'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Activate custom cursor only on devices with fine pointer
    if (typeof window !== 'undefined' && window.matchMedia) {
      if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        return;
      }
    }

    const mousePos = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };

    const onMouseMove = (e) => {
      if (!document.body.classList.contains('has-custom-cursor')) {
        document.body.classList.add('has-custom-cursor');
      }
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      setHidden(false);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    // Hover detection for interactive items
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      if (
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.tagName === 'SELECT'
      ) {
        setHidden(true);
        return;
      } else {
        setHidden(false);
      }
      
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.filter-btn') ||
        target.closest('.premium-feature-card') ||
        target.closest('.brochure-card') ||
        target.closest('.gallery-item') ||
        target.closest('.folio-item') ||
        target.closest('.flip-card') ||
        target.style.cursor === 'pointer'
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    // Smooth animation loop for the outer ring and dot
    let animationFrameId;
    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`;
      }

      // Lerp formula: current = current + (target - current) * ease
      const ease = 0.15; // smooth delay factor
      ringPos.x += (mousePos.x - ringPos.x) * ease;
      ringPos.y += (mousePos.y - ringPos.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('has-custom-cursor');
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${hidden ? 'cursor-hidden' : ''} ${
          clicked ? 'cursor-clicked' : ''
        } ${hovered ? 'cursor-hovered' : ''}`}
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${hidden ? 'cursor-hidden' : ''} ${
          clicked ? 'cursor-clicked' : ''
        } ${hovered ? 'cursor-hovered' : ''}`}
      />
    </>
  );
}
