"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 85;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
    setOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">🌿</div>
          <span className="font-semibold text-2xl tracking-tight text-emerald-950">EsporoGuia</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {/* Dropdown Apresentação */}
          <div className="relative group">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-emerald-800 hover:text-emerald-700 transition-colors focus:outline-none"
            >
              Apresentação
              <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Content */}
            <div className={`absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-3 px-2 border border-emerald-100 z-50 transition-all ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <button 
                onClick={() => scrollToSection("o-que-e")} 
                className="block w-full text-left px-4 py-2.5 hover:bg-emerald-50 text-emerald-800 hover:text-emerald-700 rounded-lg text-sm transition-colors"
              >
                O que é
              </button>
              <button 
                onClick={() => scrollToSection("transmissao")} 
                className="block w-full text-left px-4 py-2.5 hover:bg-emerald-50 text-emerald-800 hover:text-emerald-700 rounded-lg text-sm transition-colors"
              >
                Transmissão
              </button>
              <button 
                onClick={() => scrollToSection("sintomas")} 
                className="block w-full text-left px-4 py-2.5 hover:bg-emerald-50 text-emerald-800 hover:text-emerald-700 rounded-lg text-sm transition-colors"
              >
                Sintomas
              </button>
              <button 
                onClick={() => scrollToSection("prevencao")} 
                className="block w-full text-left px-4 py-2.5 hover:bg-emerald-50 text-emerald-800 hover:text-emerald-700 rounded-lg text-sm transition-colors"
              >
                Prevenção
              </button>
            </div>
          </div>

          {/* Outros links */}
          <button 
            onClick={() => scrollToSection("mitos-e-verdades")}
            className="text-emerald-800 hover:text-emerald-700 transition-colors"
          >
            Mitos e Verdades
          </button>

          <button 
            onClick={() => scrollToSection("meio-ambiente")}
            className="text-emerald-800 hover:text-emerald-700 transition-colors"
          >
            Meio Ambiente
          </button>

          <button 
            onClick={() => scrollToSection("quando-procurar-ajuda")}
            className="text-emerald-800 hover:text-emerald-700 transition-colors"
          >
            Quando Procurar Ajuda
          </button>

          {/* Saúde Única */}
          <button 
            onClick={() => scrollToSection("saude-unica")}
            className="text-emerald-700 hover:text-emerald-600 font-medium transition-colors"
          >
            Saúde Única
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden text-emerald-950"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-emerald-100 py-6 px-6">
          <div className="flex flex-col gap-6 text-base">
            {/* Apresentação */}
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full font-medium text-emerald-800 mb-3"
              >
                Apresentação
                <ChevronDown size={20} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="pl-4 flex flex-col gap-3 text-sm border-l border-emerald-200">
                  <button onClick={() => scrollToSection("o-que-e")} className="text-left text-emerald-800 hover:text-emerald-700">O que é</button>
                  <button onClick={() => scrollToSection("transmissao")} className="text-left text-emerald-800 hover:text-emerald-700">Transmissão</button>
                  <button onClick={() => scrollToSection("sintomas")} className="text-left text-emerald-800 hover:text-emerald-700">Sintomas</button>
                  <button onClick={() => scrollToSection("prevencao")} className="text-left text-emerald-800 hover:text-emerald-700">Prevenção</button>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection("mitos-e-verdades")} className="text-left text-emerald-800 hover:text-emerald-700">Mitos e Verdades</button>
            <button onClick={() => scrollToSection("meio-ambiente")} className="text-left text-emerald-800 hover:text-emerald-700">Meio Ambiente</button>
            <button onClick={() => scrollToSection("quando-procurar-ajuda")} className="text-left text-emerald-800 hover:text-emerald-700">Quando Procurar Ajuda</button>
            
            <button 
              onClick={() => scrollToSection("saude-unica")}
              className="text-left text-emerald-700 hover:text-emerald-600 font-medium"
            >
              Saúde Única
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}