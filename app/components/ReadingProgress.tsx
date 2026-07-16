"use client";

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      setProgress(Math.min(Math.max(scrollPercent, 0), 100));
      setIsVisible(scrollTop > 80); // Aparece após rolar um pouco
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="h-1 bg-gray-100">
        <div 
          className="h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Porcentagem no canto */}
      <div className="absolute right-6 top-3 text-xs font-mono bg-white/95 px-2.5 py-1 rounded-full shadow text-emerald-700 border border-emerald-100 hidden sm:block">
        {progress}%
      </div>
    </div>
  );
}