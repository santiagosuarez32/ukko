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
import { FiTarget, FiEye, FiAward, FiTrendingUp, FiYoutube, FiLinkedin, FiPlay } from "react-icons/fi";

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
      <section className="relative pt-56 md:pt-40 pb-20 px-6 md:px-10 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Left Aligned Top Title (Matching Brand Style) */}
          <div className="text-left mb-16 max-w-4xl">
            <h1 className="text-[32px] md:text-6xl lg:text-[72px] font-semibold text-carbon tracking-tight leading-[1.1] flex flex-wrap justify-start gap-x-2 md:gap-x-4">
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.008}
                staggerFrom="first"
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
              >
                {`Diseñamos soluciones para`}
              </VerticalCutReveal>
              
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.01}
                staggerFrom="first"
                elementLevelClassName="gradient-text"
                containerClassName="gradient-text"
                transition={{ type: "spring", stiffness: 250, damping: 21, delay: 0.2 }}
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
              

            </div>

            {/* Right Image (Wider and Shorter) */}
            <div className="w-full lg:w-[60%] relative h-[350px] md:h-[450px]">
              <LiquidReveal
                src="/sobre-mi.webp"
                alt="Ukko Energy Team"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
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
                <span className="text-base md:text-lg font-bold tracking-tight text-ukko-blue mb-8 inline-flex items-center gap-2 border border-ukko-blue/20 px-6 py-2 rounded-full bg-ukko-blue/5 backdrop-blur-sm">
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
                  href="https://www.youtube.com/watch?v=rqbIq9DJaj8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video rounded-[32px] overflow-hidden group cursor-pointer shadow-xl"
                >
                  <Image
                    src="https://i.ytimg.com/vi/rqbIq9DJaj8/hqdefault.jpg"
                    alt="SUMMIT Sostenibilidad y Negocios"
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <FiPlay className="text-white text-3xl fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-8 text-white pr-8">
                    <p className="text-xs font-bold tracking-widest mb-1 opacity-80">Video destacado</p>
                    <h3 className="text-xl font-bold">SUMMIT Sostenibilidad y Negocios</h3>
                  </div>
                </a>

                {/* Sub-grid of thumbnails */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { id: "WHwV_CUvfAw", title: "UKKO ENERGY EN NEURA (CEO Mariano Rube)" },
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
                        sizes="(max-width: 768px) 100vw, 20vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
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

            {/* Right: LinkedIn Highlight (Enlarged) */}
            <div className="lg:col-span-4 flex flex-col gap-6 pt-0">
              <div className="bg-ukko-blue/5 p-8 rounded-[32px] border border-ukko-blue/10 flex flex-col h-full justify-center">
                <span className="text-base md:text-lg font-bold tracking-tight text-ukko-blue mb-8 inline-flex items-center gap-2 border border-ukko-blue/20 px-6 py-2 rounded-full bg-white/50 backdrop-blur-sm">
                  <FiLinkedin className="text-blue-700 text-xl" /> LinkedIn
                </span>
                <h3 className="text-3xl font-bold text-carbon mb-4 tracking-tight leading-tight">Conectá con <br /> nuestra red profesional</h3>
                <p className="text-carbon/60 text-base leading-relaxed mb-8 font-medium">
                  Seguinos en LinkedIn para enterarte de las últimas novedades, insights de la industria y oportunidades de colaboración.
                </p>
                <a 
                  href="https://www.linkedin.com/company/ukko-energy-solutions" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold text-sm hover:bg-blue-800 hover:shadow-xl transition-all active:scale-[0.98] inline-block text-center"
                >
                  Seguir en LinkedIn
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
