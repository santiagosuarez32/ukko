"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Nosotros", href: "#about-us" },
    { label: "Unidades", href: "#unidades" },
    { label: "Metodología", href: "#metodologia" },
    { label: "Clientes", href: "#clientes" },
    { label: "Contáctanos", href: "#contacto" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);

    const target = href === "#" ? 0 : href;

    if (typeof window !== "undefined") {
      const element = document.querySelector(href);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else if (href === "#") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-[110] transition-all duration-500 px-6 md:px-10 ${
        menuOpen
          ? "bg-ukko-blue py-5" 
          : isScrolled 
            ? "bg-ukko-blue border-b border-white/10 shadow-lg py-3" 
            : "bg-transparent border-b border-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo container - Left */}
          <div className="relative h-12 w-40 cursor-pointer z-[120]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Image
              src="/logo-nav.png"
              alt="Logo de Ukko Energy"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Links container - Center (Desktop) */}
          <div className="hidden md:flex gap-6 items-center text-lg font-medium text-white/90">
            {navLinks.slice(0, 4).map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link-white transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Button container - Right (Desktop) */}
          <div className="hidden md:flex justify-end">
            <a 
              href="#contacto"
              onClick={(e) => handleNavClick(e, "#contacto")}
              className="text-base font-medium border-2 border-white/30 px-6 py-1.5 rounded-full hover:bg-white hover:text-ukko-blue transition-all text-white cursor-pointer"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 z-[120]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#0a0a0a] z-[105] flex flex-col items-center justify-center pt-20 md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut"
                  }}
                  className="text-3xl font-bold text-white hover:text-emerald transition-colors cursor-pointer"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Decoration */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="mt-12 w-12 h-[2px] bg-emerald rounded-full" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
