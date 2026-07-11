// app/sections/Transmission.tsx
"use client";

import { useEffect, useRef, useState } from "react";   // ← Adicionado useState aqui
import { gsap } from "gsap";
import { Play, Pause } from "lucide-react";

export function Transmission() {
  const catRef = useRef<SVGSVGElement>(null);
  const sporesRef = useRef<HTMLDivElement>(null);
  const humanRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startAnimation = () => {
    if (animationRef.current) animationRef.current.restart();
    setIsPlaying(true);
  };

  const stopAnimation = () => {
    if (animationRef.current) animationRef.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    // GSAP animation logic
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

    tl.to(".spore", {
      opacity: 1,
      scale: 1.2,
      duration: 0.6,
      stagger: 0.2,
    })
    .to(".spore", {
      x: "320px",
      y: "-80px",
      duration: 2.2,
      ease: "power2.inOut",
      stagger: 0.3,
    }, "-=0.8")
    .to(".spore", {
      scale: 0.6,
      opacity: 0.7,
      duration: 0.8,
    }, "-=0.8");

    animationRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="transmissao" className="py-24 bg-[#f8f4ed] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-emerald-950 mb-4">
            Como se transmite?
          </h2>
          <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
            A principal forma de transmissão ocorre através de arranhões ou mordidas de gatos infectados.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 relative">
            
            <div className="flex flex-col items-center">
              <div className="text-8xl mb-4">🐱</div>
              <p className="font-semibold text-emerald-800">Gato Infectado</p>
            </div>

            <div ref={sporesRef} className="relative flex-1 h-40 hidden md:block">
              <svg width="100%" height="160" className="overflow-visible">
                <line 
                  x1="10%" y1="80" 
                  x2="90%" y2="80" 
                  stroke="#d97706" 
                  strokeWidth="3" 
                  strokeDasharray="8 6"
                />
              </svg>

              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 flex gap-6">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="spore w-5 h-5 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full opacity-0 shadow-md"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-8xl mb-4">🧍‍♂️</div>
              <p className="font-semibold text-emerald-800">Humano</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={isPlaying ? stopAnimation : startAnimation}
              className="flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-2xl transition-all active:scale-95"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              {isPlaying ? "Pausar Animação" : "Ver Transmissão"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}