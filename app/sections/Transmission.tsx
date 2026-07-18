// app/sections/Transmission.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Transmission() {
  const plantRef = useRef<HTMLDivElement>(null);
  const catRef = useRef<HTMLDivElement>(null);
  const humanRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2.6,
      });

      // ====================== 1. ESPOROS DA PLANTA ======================
      tl.fromTo(
        ".spore-plant",
        { opacity: 0, scale: 0.1, y: 35, rotation: -20 },
        {
          opacity: 0.95,
          scale: 1.22,
          y: -20,
          rotation: 25,
          duration: 0.9,
          stagger: { each: 0.075, from: "random" },
          ease: "power2.out",
        }
      )
        // Subida e descida suave da planta
        .to(
          plantRef.current,
          { y: -18, duration: 0.8, ease: "power2.inOut" },
          "-=0.85"
        )
        .to(
          ".spore-plant",
          {
            x: "242px",
            y: "-76px",
            duration: 2.4,
            ease: "power2.inOut",
            stagger: { each: 0.17, from: "start" },
          },
          "-=0.65"
        )
        // Retorno suave da planta
        .to(plantRef.current, { y: 0, duration: 0.7, ease: "power2.out" }, "-=1.2")

        // Subida e descida do gato (em vez de balanço)
        .to(
          catRef.current,
          {
            y: -14,
            duration: 0.25,
            repeat: 5,
            yoyo: true,
            ease: "power1.inOut",
          },
          "-=1.85"
        )
        .to(".spore-plant", { opacity: 0, scale: 0.25, duration: 0.45 }, "-=0.8");

      // ====================== 2. ESPOROS DO GATO ======================
      tl.fromTo(
        ".spore-cat",
        { opacity: 0, scale: 0.2, x: -32, rotation: -15 },
        {
          opacity: 1,
          scale: 1.32,
          x: 5,
          rotation: 20,
          duration: 0.85,
          stagger: { each: 0.08, from: "random" },
        },
        "-=0.55"
      )
        // Subida e descida do gato ao liberar esporos
        .to(
          catRef.current,
          { y: -16, duration: 0.7, ease: "power2.inOut" },
          "-=0.7"
        )
        .to(
          ".spore-cat",
          {
            x: "268px",
            y: "-94px",
            duration: 2.45,
            ease: "power3.out",
            stagger: { each: 0.155 },
          },
          "-=0.75"
        )
        // Retorno suave do gato
        .to(
          catRef.current,
          { y: 0, duration: 0.65, ease: "power2.out" },
          "-=1.3"
        )

        // Subida e descida do humano (em vez de balanço)
        .to(
          humanRef.current,
          {
            y: -22,
            duration: 0.22,
            repeat: 6,
            yoyo: true,
            ease: "power1.inOut",
          },
          "-=1.8"
        )
        .to(".spore-cat", { scale: 0.45, opacity: 0.3, duration: 0.6 }, "-=0.9");

      // ====================== RESET FINAL ======================
      tl.set(
        [".spore-plant", ".spore-cat"],
        { x: 0, y: 0, scale: 0.1, opacity: 0, rotation: 0 },
        "+=0.6"
      )
        .set(plantRef.current, { x: 0, y: 0, rotation: 0 }, "<")
        .set(catRef.current, { x: 0, y: 0, rotation: 0 }, "<")
        .set(humanRef.current, { x: 0, y: 0, rotation: 0 }, "<");

      tlRef.current = tl;
    });

    return () => ctx.revert();
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
            <div className="flex flex-col items-center relative w-56" ref={plantRef}>
              <div className="relative flex flex-col items-center">
                <div className="text-[108px] mb-1 transition-transform">🌱</div>
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
                    className="spore-plant w-4 h-4 bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 rounded-full shadow-md"
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
                    className="spore-cat w-5 h-5 bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 rounded-full shadow-lg"
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