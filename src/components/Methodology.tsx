"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { AnimatedText } from "@/components/ui/AnimatedText";

import { 
  PiMagnifyingGlass, 
  PiListChecks, 
  PiSealCheck, 
  PiLightbulb, 
  PiGear, 
  PiChartBar 
} from "react-icons/pi";

const methodologyData = [
  {
    id: "01",
    title: "Gestión Integral de Emisiones",
    subtitle: "Plan Estratégico para la Neutralidad en Carbono",
    alcances: [
      { title: "Huella de Carbono Organizacional", desc: "Medición y **cuantificación de emisiones** a nivel organizacional." },
      { title: "Huella de Carbono de Productos", desc: "Cálculo de emisiones asociadas al **ciclo de vida** del producto." },
      { title: "Análisis de Ciclo de Vida", desc: "Evaluación ambiental integral **desde la cuna hasta la tumba**." },
      { title: "Finanzas Sostenibles", desc: "Bonos de carbono y mecanismos de financiamiento verde." },
      { title: "Soluciones de Mitigación", desc: "Diseño e implementación de estrategias de **reducción de emisiones**." }
    ],
    planAccion: [
      { id: "01", title: "DIAGNÓSTICO", desc: "**Análisis y caracterización** de procesos", icon: PiMagnifyingGlass },
      { id: "02", title: "INVENTARIO", desc: "**Cálculo del inventario** de emisiones GEI", icon: PiListChecks },
      { id: "03", title: "VERIFICACIÓN", desc: "**Verificación del inventario** GEI y línea base", icon: PiSealCheck },
      { id: "04", title: "ESTRATEGIA", desc: "**Estudio y selección** de propuestas de mitigación", icon: PiLightbulb },
      { id: "05", title: "IMPLEMENTACIÓN", desc: "**Ejecución de acciones** y proyectos seleccionados", icon: PiGear },
      { id: "06", title: "VALIDACIÓN", desc: "**Verificación de la eficacia** de las acciones", icon: PiChartBar }
    ]
  }
];

export default function Methodology() {
  const [activeUnit, setActiveUnit] = useState(0);
  const [triggerUnderline, setTriggerUnderline] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const unit = methodologyData[activeUnit];

  return (
    <section ref={containerRef} id="methodology" className="py-32 px-6 bg-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-aquamarine blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-ukko-blue blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-left mb-24 max-w-4xl">
          <span className="text-sm font-normal tracking-[-0.02em] text-ukko-blue mb-6 inline-block border border-ukko-blue/30 px-4 py-1.5 rounded-full bg-ukko-blue/5">
            Metodología
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold mb-8 tracking-tight leading-[1.15] text-carbon">
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.012}
              staggerFrom="first"
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
            >
              {`Cómo trabajamos en`}
            </VerticalCutReveal>
            
            <div className="flex flex-wrap items-baseline gap-x-3 -mt-1">
              <AnimatedText 
                trigger={triggerUnderline}
                underlineClassName="text-emerald/60"
                underlineDuration={1.2}
                className="inline-flex translate-y-[2px]"
              >
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.015}
                  staggerFrom="first"
                  onComplete={() => setTriggerUnderline(true)}
                  elementLevelClassName="gradient-text"
                  containerClassName="gradient-text"
                  transition={{ type: "spring", stiffness: 250, damping: 21, delay: 0.3 }}
                >
                  {`cada unidad de negocio`}
                </VerticalCutReveal>
              </AnimatedText>
            </div>
          </h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-carbon/60 leading-relaxed font-medium tracking-tight"
          >
            Procesos estructurados con resultados medibles y verificables bajo normas internacionales.
          </motion.p>
        </div>

        {/* Methodology Content Showcase */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeUnit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="space-y-24"
          >
            {/* Unit Header */}
            <div className="flex flex-col md:flex-row md:items-end gap-6 border-b border-carbon/5 pb-8 relative">
              <span className="text-6xl md:text-9xl font-bold ukko-gradient opacity-20 leading-none tracking-tighter -mb-2">{unit.id}</span>
              <div>
                <h3 className="text-3xl md:text-5xl font-bold text-carbon mb-2">{unit.title}</h3>
                <p className="text-carbon/40 font-medium tracking-tight text-lg">{unit.subtitle}</p>
              </div>
            </div>

            {/* Alcances Section */}
            <div>
              <div className="mb-10">
                <AnimatedText 
                  trigger={isInView}
                  underlineClassName="text-emerald/60"
                  className="inline-block"
                >
                  <h4 className="text-2xl font-bold text-carbon">Alcances</h4>
                </AnimatedText>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {unit.alcances.map((alcance, idx) => {
                  const colors = [
                    "bg-[#325A77]", // Navy Blue
                    "bg-[#25524B]", // Deep Green
                    "bg-[#2B595C]", // Teal
                    "bg-[#81B1A0]", // Mint
                    "bg-[#1D2B33]", // Dark Carbon
                  ];
                  return (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -10 }}
                      className={`${colors[idx % colors.length]} rounded-t-full px-4 pt-12 pb-10 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[320px] justify-between`}
                    >
                      <div className="relative w-16 h-16 mb-6">
                        <Image 
                          src="/logo-u.png" 
                          alt="Logo U" 
                          fill 
                          className="object-contain brightness-0 invert opacity-90"
                        />
                      </div>
                      <h5 className="text-sm font-bold text-white leading-tight px-2">{alcance.title}</h5>
                      <div className="h-1 w-8 bg-white/20 my-4" />
                      <p 
                        className="text-xs text-white/80 leading-relaxed px-4"
                        dangerouslySetInnerHTML={{ 
                          __html: alcance.desc.replace(/\*\*(.*?)\*\*/g, '<span class="font-black text-white">$1</span>') 
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Plan de Acción Section */}
            <div className="relative">
              <div className="mb-20">
                <AnimatedText 
                  trigger={isInView}
                  underlineClassName="text-emerald/60"
                  className="inline-block"
                >
                  <h4 className="text-2xl font-bold text-carbon">Plan de acción</h4>
                </AnimatedText>
              </div>
              
              {/* SVG Gradient Defs for Icons */}
              <svg width="0" height="0" className="absolute">
                <defs>
                  <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#111111" />
                    <stop offset="100%" stopColor="#444444" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Desktop Connectors */}
              <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-[1px] bg-carbon/10 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-16 relative z-10">
                {unit.planAccion.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="relative flex flex-col group"
                  >
                    {/* Card Content */}
                    <div className="pt-16 px-5 pb-10 bg-white border border-carbon/5 rounded-[32px] h-full flex flex-col items-center relative">
                      {/* Step Number - Top Left Border */}
                      <span className="absolute -top-4 left-4 text-4xl font-black text-carbon opacity-20 z-20">
                        {step.id}
                      </span>

                      {/* Large Icon - Top Center Border */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20" style={{ color: 'url(#icon-gradient)' }}>
                        <step.icon size={64} strokeWidth={1} fill="url(#icon-gradient)" />
                      </div>

                      <h5 className="text-[15px] font-bold text-carbon mb-3 text-center leading-tight">{step.title.charAt(0) + step.title.slice(1).toLowerCase()}</h5>
                      <p 
                        className="text-[11px] text-carbon/40 leading-relaxed font-medium transition-colors text-center"
                        dangerouslySetInnerHTML={{ 
                          __html: step.desc.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-carbon/80">$1</span>') 
                        }}
                      />
                    </div>

                    {/* Connector Arrow (Desktop) */}
                    {idx < unit.planAccion.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-carbon/5">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
