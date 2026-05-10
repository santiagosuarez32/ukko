"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-10 ${
      isScrolled 
        ? "bg-ukko-blue border-b border-white/10 shadow-lg py-3" 
        : "bg-transparent border-b border-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Logo container - Left */}
        <div className="flex-1 flex justify-start">
          <div className="relative h-12 w-40">
            <Image
              src="/logo-nav.png"
              alt="Logo de Ukko Energy"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </div>

        {/* Links container - Center */}
        <div className="hidden md:flex gap-6 text-lg font-medium text-white/90">
          <a href="#" className="nav-link-white transition-colors">Soluciones</a>
          <a href="#about-us" className="nav-link-white transition-colors">Nosotros</a>
          <a href="#" className="nav-link-white transition-colors">Infraestructura</a>
          <a href="#" className="nav-link-white transition-colors">Innovación</a>
          <a href="#" className="nav-link-white transition-colors">Impacto</a>
        </div>

        {/* Button container - Right */}
        <div className="flex-1 flex justify-end">
          <button className="hidden md:block text-base font-medium border-2 border-white/30 px-6 py-1.5 rounded-full hover:bg-white hover:text-ukko-blue transition-all text-white">
            Contáctanos
          </button>
        </div>
      </div>
    </nav>
  );
}
