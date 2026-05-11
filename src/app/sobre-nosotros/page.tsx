"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { LiquidReveal } from "@/components/ui/LiquidReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiTarget, FiEye, FiAward, FiTrendingUp, FiYoutube, FiLinkedin, FiInstagram, FiPlay } from "react-icons/fi";

export default function SobreNosotros() {
  const [triggerUnderline, setTriggerUnderline] = useState(false);

  const values = [
    {
      title: "Innovación",
      desc: "Buscamos constantemente nuevas formas de optimizar la energía y reducir el impacto ambiental.",
      icon: FiTrendingUp,
      color: "from-emerald/20 to-transparent"
    },
    {
      title: "Compromiso",
      desc: "Nos dedicamos plenamente a los objetivos de nuestros clientes y al bienestar del planeta.",
      icon: FiTarget,
      color: "from-ukko-blue/20 to-transparent"
    },
    {
      title: "Excelencia",
      desc: "Mantenemos los más altos estándares internacionales en cada proyecto que emprendemos.",
      icon: FiAward,
      color: "from-petroleum/20 to-transparent"
    },
    {
      title: "Visión",
      desc: "Miramos hacia adelante para anticipar los desafíos de la transición energética global.",
      icon: FiEye,
      color: "from-teal/20 to-transparent"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section (Matching Image Layout) */}
      <section className="relative pt-40 pb-20 px-6 md:px-10 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Left Aligned Top Title (Matching Brand Style) */}
          <div className="text-left mb-16 max-w-4xl">
            <h1 className="text-[32px] md:text-6xl lg:text-[72px] font-semibold text-carbon tracking-tight leading-[1.1] flex flex-wrap justify-start gap-x-2 md:gap-x-4">
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.012}
                staggerFrom="first"
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
              >
                {`Diseñamos soluciones para`}
              </VerticalCutReveal>
              
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.015}
                staggerFrom="first"
                elementLevelClassName="gradient-text"
                containerClassName="gradient-text"
                transition={{ type: "spring", stiffness: 250, damping: 21, delay: 0.3 }}
              >
                {`un mañana sostenible`}
              </VerticalCutReveal>
            </h1>
          </div>

          {/* Main Feature Content (Adjusted Ratio) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content (Narrower) */}
            <div className="w-full lg:w-[40%] flex flex-col items-start">
              <h2 className="text-2xl md:text-3xl font-bold text-carbon mb-8">Nuestra Historia</h2>
              
              <p className="text-lg md:text-xl text-carbon/70 font-medium leading-relaxed mb-10">
                Somos una compañía <span className="font-bold text-carbon">ágil con alta capacidad técnica y analítica</span>, enfocada en desarrollar soluciones inteligentes. Aplicamos nuestra experiencia para <span className="font-bold text-carbon">crear valor en cada proyecto</span>, materializando resultados confiables, innovadores y sustentables vinculados a la eficiencia energética y resiliencia climática.
              </p>
              
              <a 
                href="https://www.youtube.com/watch?v=WHwV_CUvfAw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald text-white px-8 py-3.5 rounded-full font-bold text-sm hover:shadow-lg transition-all active:scale-[0.98] mb-12"
              >
                Ver casos de éxito
              </a>
              
              <div className="mt-auto">
                <span className="text-sm font-bold text-carbon underline decoration-emerald decoration-2 underline-offset-4">Paneles Solares Ukko</span>
                <span className="text-sm text-carbon/40 ml-2">— Impulsá tu transición</span>
              </div>
            </div>

            {/* Right Image (Wider and Shorter) */}
            <div className="w-full lg:w-[60%] relative h-[350px] md:h-[450px]">
              <LiquidReveal
                src="/sobre-mi.jpeg"
                alt="Ukko Energy Team"
                fill
                containerClassName="w-full h-full rounded-[40px] overflow-hidden shadow-xl"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social & Media Presence Section */}
      <section className="pt-32 pb-16 px-6 bg-white border-t border-carbon/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: YouTube Highlight */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="mb-12">
                <span className="text-sm font-bold text-ukko-blue/60 mb-4 block tracking-widest flex items-center gap-2">
                  <FiYoutube className="text-red-600 text-xl" /> YouTube
                </span>
                <h2 className="text-4xl font-bold text-carbon mb-6 tracking-tight">Ukko Energy <br /> en YouTube</h2>
                <a 
                  href="https://www.youtube.com/@ukkoenergy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-carbon text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-ukko-blue transition-all active:scale-[0.98] inline-block"
                >
                  Ir al canal
                </a>
              </div>

              {/* Video Grid Layout */}
              <div className="space-y-6">
                {/* Main Video */}
                <a 
                  href="https://www.youtube.com/watch?v=WHwV_CUvfAw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video rounded-[32px] overflow-hidden group cursor-pointer shadow-xl"
                >
                  <Image
                    src="https://i.ytimg.com/vi/WHwV_CUvfAw/hqdefault.jpg"
                    alt="UKKO ENERGY EN NEURA (CEO Mariano Rube)"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <FiPlay className="text-white text-3xl fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-8 text-white pr-8">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Video Destacado</p>
                    <h3 className="text-xl font-bold">UKKO ENERGY EN NEURA (CEO Mariano Rube)</h3>
                  </div>
                </a>

                {/* Sub-grid of thumbnails */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { id: "rqbIq9DJaj8", title: "Seminario Sostenibilidad y Negocios" },
                    { id: "COBd2SiD3WM", title: "Mitigación de emisiones" },
                    { id: "Y1xI3uPA_7w", title: "UKKO ENERGY en InvestBA" }
                  ].map((video) => (
                    <a 
                      key={video.id}
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-video rounded-[24px] overflow-hidden group cursor-pointer shadow-md"
                    >
                      <Image
                        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <FiPlay className="text-white text-2xl fill-white" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Other Social Channels */}
            <div className="lg:col-span-4 flex flex-col gap-6 pt-12">
              <div className="bg-[#F8F9FA] p-7 rounded-[32px] border border-carbon/5 flex flex-col">
                <span className="text-[10px] font-bold text-ukko-blue/60 mb-4 block tracking-widest flex items-center gap-2">
                  <FiLinkedin className="text-blue-700 text-base" /> LinkedIn
                </span>
                <h3 className="text-xl font-bold text-carbon mb-3 tracking-tight">Conectá con <br /> nuestros líderes</h3>
                <p className="text-carbon/60 text-sm leading-relaxed mb-6 font-medium">
                  Seguinos en LinkedIn para enterarte de las últimas novedades e insights de la industria.
                </p>
                <a 
                  href="https://www.linkedin.com/company/ukko-energy-solutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-blue-700 text-white py-3 rounded-xl font-bold text-xs hover:shadow-lg transition-all active:scale-[0.98] inline-block text-center"
                >
                  Seguir en LinkedIn
                </a>
              </div>

              <div className="bg-[#F8F9FA] p-7 rounded-[32px] border border-carbon/5 flex flex-col">
                <span className="text-[10px] font-bold text-ukko-blue/60 mb-4 block tracking-widest flex items-center gap-2">
                  <FiInstagram className="text-pink-600 text-base" /> Instagram
                </span>
                <h3 className="text-xl font-bold text-carbon mb-3 tracking-tight">Nuestra Cultura</h3>
                <p className="text-carbon/60 text-sm leading-relaxed mb-6 font-medium">
                  Mirá el detrás de escena de nuestros proyectos y el día a día del equipo.
                </p>
                <a 
                  href="https://www.instagram.com/ukko_energy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-bold text-xs hover:shadow-lg transition-all active:scale-[0.98] inline-block text-center"
                >
                  Ver Instagram
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA className="!pt-12" />
      <Footer />
    </main>
  );
}
