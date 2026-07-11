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

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <WhatIs />
      <Transmission />
      <Symptoms />
      <Diagnosis />
      <Prevention />
      <Myths />
      <Help />
      <Environment />
      <OneHealth />
      <Footer />
    </main>
  );
}