// app/sections/Transmission.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Transmission() {
  const catRef = useRef<HTMLDivElement>(null);
  const humanRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2.5,
    });

    // 1. Esporos saindo da planta
    tl.fromTo(
      ".spore-plant",
      { opacity: 0, scale: 0.1, y: 30 },
      { opacity: 0.95, scale: 1.15, y: -22, duration: 0.9, stagger: 0.08 }
    )
      .to(
        ".spore-plant",
        {
          x: "235px",
          y: "-72px",
          duration: 2.4,
          ease: "power2.inOut",
          stagger: 0.18,
        },
        "-=0.55"
      )
      .to(".spore-plant", { opacity: 0, scale: 0.3, duration: 0.45 }, "-=0.7")

      // Gato reage
      .to(catRef.current, { rotation: -9, duration: 0.12, repeat: 4, yoyo: true }, "-=1.1")

      // 2. Esporos saindo do gato
      .fromTo(
        ".spore-cat",
        { opacity: 0, scale: 0.25, x: -25 },
        { opacity: 1, scale: 1.3, x: 0, duration: 0.85, stagger: 0.09 },
        "-=0.6"
      )
      .to(
        ".spore-cat",
        {
          x: "265px",
          y: "-85px",
          duration: 2.45,
          ease: "power3.out",
          stagger: 0.16,
        },
        "-=0.75"
      )
      .to(".spore-cat", { scale: 0.5, opacity: 0.35, duration: 0.65 }, "-=0.9")

      // Humano reage
      .to(
        humanRef.current,
        { y: -22, rotation: 3, duration: 0.25, repeat: 2, yoyo: true },
        "-=1.1"
      );

    animationRef.current = tl;
    tl.play();

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
            O fungo vive no solo e em plantas. Gatos se infectam ao arranhar o solo ou caçar. 
            A principal forma de transmissão para humanos é por arranhões ou mordidas de gatos infectados.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 relative">

            {/* Solo + Planta */}
            <div className="flex flex-col items-center relative w-56">
              <div className="relative flex flex-col items-center">
                <div className="text-[108px] mb-1">🌱</div>
                
                <div className="w-48 h-16 bg-gradient-to-b from-amber-900 to-amber-950 rounded-3xl relative -mt-4 shadow-inner">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-28 h-9 bg-amber-800/70 rounded-2xl" />
                </div>
              </div>

              <p className="font-semibold text-emerald-800 mt-8 text-center text-sm">
                Solo e Plantas<br />
                <span className="font-normal text-emerald-600">(fonte do fungo)</span>
              </p>

              <div className="absolute top-20 -right-8 flex gap-5">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="spore-plant w-4 h-4 bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 rounded-full shadow-md opacity-0"
                    style={{ filter: "blur(0.5px)" }}
                  />
                ))}
              </div>
            </div>

            {/* Gato Infectado */}
            <div className="flex flex-col items-center relative" ref={catRef}>
              <div className="text-8xl mb-4 transition-transform">🐱</div>
              <p className="font-semibold text-emerald-800">Gato Infectado</p>
              <p className="text-xs text-amber-700 mt-1">Arranhões / Mordidas</p>

              <div className="absolute top-24 left-1/2 flex gap-5 -translate-x-1/2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="spore-cat w-5 h-5 bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 rounded-full shadow-lg opacity-0"
                  />
                ))}
              </div>
            </div>

            {/* Humano */}
            <div className="flex flex-col items-center" ref={humanRef}>
              <div className="text-[170px] mb-2 transition-transform leading-none">🧍‍♂️</div>
              <p className="font-semibold text-emerald-800 text-lg">Humano</p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-emerald-600 mt-8 max-w-md mx-auto">
          A esporotricose <strong>não se transmite</strong> diretamente de pessoa para pessoa.
        </p>
      </div>
    </section>
  );
}