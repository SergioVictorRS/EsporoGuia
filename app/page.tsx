"use client";

import { Hero } from "./sections/Hero";
import { WhatIs } from "./sections/WhatIs";
import { Transmission } from "./sections/Transmission";
import { Symptoms } from "./sections/Symptoms";
import { Diagnosis } from "./sections/Diagnosis";
import { Prevention } from "./sections/Prevention";
import { Myths } from "./sections/Myths";
import { Help } from "./sections/Help";
import { Footer } from "./components/Footer";
import { Environment } from "./sections/Environment"; 
import { OneHealth } from "./sections/OneHealth";
import ReadingProgress from "./components/ReadingProgress";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <main className="pt-20">
      <Navbar />
      <ReadingProgress />
      
      <Hero />
      
      <WhatIs />
      <Transmission />
      <Symptoms />
      <Diagnosis />
      <Prevention id="prevencao" />
      
      <Myths id="mitos-e-verdades" />
      <Environment id="meio-ambiente" />
      <Help id="quando-procurar-ajuda" />
      
      <OneHealth id="saude-unica" />
      <Footer />
    </main>
  );
}