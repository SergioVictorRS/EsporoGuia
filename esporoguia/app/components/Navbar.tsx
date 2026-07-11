"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">🌿</div>
          <span className="font-semibold text-2xl tracking-tight text-emerald-950">EsporoGuia</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#o-que-e" className="hover:text-emerald-700 transition-colors">O que é</a>
          <a href="#transmissao" className="hover:text-emerald-700 transition-colors">Transmissão</a>
          <a href="#sintomas" className="hover:text-emerald-700 transition-colors">Sintomas</a>
          <a href="#prevencao" className="hover:text-emerald-700 transition-colors">Prevenção</a>
        </div>

        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}