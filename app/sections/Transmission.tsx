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
      repeatDelay: 2.8,
    });

    // ====================== 1. ESPOROS DA PLANTA ======================
    tl.fromTo(
      ".spore-plant",
      { opacity: 0, scale: 0.1, y: 30 },
      { opacity: 0.95, scale: 1.15, y: -22, duration: 0.9, stagger: 0.08 }
    )
      .to(
        ".spore-plant",
        { 
          x: () => window.innerWidth < 768 ? "180px" : "235px", 
          y: "-72px", 
          duration: 2.4, 
          ease: "power2.inOut", 
          stagger: 0.18 
        },
        "-=0.55"
      )

      .to(
        catRef.current,
        { rotation: 6, x: 8, duration: 0.08, repeat: 7, yoyo: true, ease: "power1.inOut" },
        "-=1.8"
      )

      .to(".spore-plant", { opacity: 0, scale: 0.3, duration: 0.45 }, "-=0.7")

      // ====================== 2. ESPOROS DO GATO ======================
      .fromTo(
        ".spore-cat",
        { opacity: 0, scale: 0.25, x: -25 },
        { opacity: 1, scale: 1.3, x: 0, duration: 0.85, stagger: 0.09 },
        "-=0.6"
      )
      .to(
        ".spore-cat",
        { 
          x: () => window.innerWidth < 768 ? "200px" : "265px", 
          y: "-85px", 
          duration: 2.45, 
          ease: "power3.out", 
          stagger: 0.16 
        },
        "-=0.75"
      )

      .to(
        humanRef.current,
        { rotation: -8, x: -10, duration: 0.07, repeat: 8, yoyo: true, ease: "power1.inOut" },
        "-=1.6"
      )

      .to(".spore-cat", { scale: 0.5, opacity: 0.35, duration: 0.65 }, "-=0.9")

      // ====================== RESET ======================
      .set(
        [".spore-plant", ".spore-cat"],
        { x: 0, y: 0, scale: 0.1, opacity: 0 },
        "+=0.4"
      )
      .set(catRef.current, { rotation: 0, x: 0, y: 0 }, "<")
      .set(humanRef.current, { rotation: 0, x: 0, y: 0 }, "<");

    animationRef.current = tl;
    tl.play();

    // Cleanup correto
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="transmissao" className="py-16 md:py-24 bg-[#f8f4ed] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-950 mb-4">
            Como se transmite?
          </h2>
          <p className="text-lg md:text-xl text-emerald-700 max-w-2xl mx-auto px-2">
            O fungo vive no solo e em plantas. Gatos se infectam ao arranhar o solo ou caçar. 
            A principal forma de transmissão para humanos é por arranhões ou mordidas de gatos infectados.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-14 lg:gap-16 relative">

            {/* Solo + Planta */}
            <div className="flex flex-col items-center relative w-full max-w-[220px] lg:w-56">
              <div className="relative flex flex-col items-center">
                <div className="text-[82px] md:text-[108px] mb-1">🌱</div>
                <div className="w-40 md:w-48 h-14 md:h-16 bg-gradient-to-b from-amber-900 to-amber-950 rounded-3xl relative -mt-3 md:-mt-4 shadow-inner">
                  <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 w-24 md:w-28 h-8 md:h-9 bg-amber-800/70 rounded-2xl" />
                </div>
              </div>

              <p className="font-semibold text-emerald-800 mt-6 md:mt-8 text-center text-sm md:text-base">
                Solo e Plantas<br />
                <span className="font-normal text-emerald-600">(fonte do fungo)</span>
              </p>

              <div className="absolute top-16 md:top-20 -right-4 md:-right-8 flex gap-4 md:gap-5">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="spore-plant w-3.5 h-3.5 md:w-4 md:h-4 bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 rounded-full shadow-md"
                    style={{ filter: "blur(0.5px)" }}
                  />
                ))}
              </div>
            </div>

            {/* Gato Infectado */}
            <div className="flex flex-col items-center relative" ref={catRef}>
              <div className="text-7xl md:text-8xl mb-4 transition-transform">🐱</div>
              <p className="font-semibold text-emerald-800 text-base md:text-lg">Gato Infectado</p>
              <p className="text-xs md:text-sm text-amber-700 mt-1">Arranhões / Mordidas</p>

              <div className="absolute top-20 md:top-24 left-1/2 flex gap-4 md:gap-5 -translate-x-1/2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="spore-cat w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 rounded-full shadow-lg"
                  />
                ))}
              </div>
            </div>

            {/* Humano */}
            <div className="flex flex-col items-center" ref={humanRef}>
              <div className="text-[130px] md:text-[160px] lg:text-[170px] mb-2 transition-transform leading-none">🧍‍♂️</div>
              <p className="font-semibold text-emerald-800 text-lg md:text-xl">Humano</p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm md:text-base text-emerald-600 mt-8 max-w-md mx-auto px-4">
          A esporotricose <strong>não se transmite</strong> diretamente de pessoa para pessoa.
        </p>
      </div>
    </section>
  );
}