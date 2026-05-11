"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/sobre-nosotros" },
    { label: "Unidades", href: "/#unidades" },
    { label: "Metodología", href: "/#metodologia" },
    { label: "Contáctanos", href: "/#contacto" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setMenuOpen(false);

    // If it's an anchor on the same page
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    // Otherwise let Next.js Link handle it
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-[110] transition-all duration-500 px-6 md:px-10 ${
        menuOpen || isScrolled || pathname !== "/"
          ? "bg-ukko-blue border-b border-white/10 shadow-lg py-3" 
          : "bg-transparent border-b border-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo container - Left */}
          <Link href="/" className="relative h-12 w-40 cursor-pointer z-[120]" onClick={(e) => handleNavClick(e, "/")}>
            <Image
              src="/logo-nav.webp"
              alt="Logo de Ukko Energy"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Links container - Center (Desktop) */}
          <div className="hidden md:flex gap-6 items-center text-lg font-medium text-white/90">
            {navLinks.slice(0, 4).map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link-white transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Button container - Right (Desktop) */}
          <div className="hidden md:flex justify-end">
            <Link 
              href="/#contacto"
              onClick={(e) => handleNavClick(e, "/#contacto")}
              className="text-base font-medium border-2 border-white/30 px-6 py-1.5 rounded-full hover:bg-white hover:text-ukko-blue transition-all text-white cursor-pointer"
            >
              Contáctanos
            </Link>
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
                <motion.div
                  key={link.label}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-3xl font-bold text-white hover:text-emerald transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </motion.div>
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
