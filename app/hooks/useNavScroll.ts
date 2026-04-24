'use client';

import { useState, useEffect } from 'react';

export function useNavScroll() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollProgress(Math.min(window.scrollY / 120, 1));
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Transparent → #312c70 (rgb 49, 44, 112)
  const bg = `rgba(49, 44, 112, ${scrollProgress})`;

  return { bg };
}
