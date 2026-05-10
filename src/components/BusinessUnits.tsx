"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { AnimatedText } from "@/components/ui/AnimatedText";

const businessUnits = [
  {
    id: "1",
    title: "Gestión Integral de Emisiones",
    description: "Plan estratégico para la neutralidad en carbono. Desde el diagnóstico hasta la verificación de eficacia de las acciones implementadas.",
    tags: ["Huella de carbono", "Inventario GEI", "Ciclo de vida", "Bonos de carbono"]
  },
  {
    id: "2",
    title: "Resiliencia Climática",
    description: "Evaluación de riesgo, vulnerabilidad climática y diseño de medidas de adaptación de corto, mediano y largo plazo.",
    tags: ["Riesgo climático", "Vulnerabilidad", "Adaptación"]
  },
  {
    id: "3",
    title: "Gestión Integral de Residuos Peligrosos",
    description: "Exportación marítima y terrestre de residuos y catalizadores agotados. Solución de extremo a extremo como Operador/Exportador.",
    tags: ["Exportación", "Catalizadores", "Logística"]
  },
  {
    id: "4",
    title: "Soluciones de Energía Renovable",
    description: "Proyectos de energía renovable llave en mano. Asesoría técnica y regulatoria, Ingeniería, procura, construcción y puesta en marcha.",
    tags: ["Llave en mano", "Gestión energética", "Reducción GEI"]
  },
  {
    id: "5",
    title: "Formación de Líderes",
    description: "Programa integral de formación en descarbonización y neutralidad en carbono. Tres niveles: Inicial, Avanzado y Experto.",
    tags: ["Capacitación", "ISO 50001", "Mercados de carbono"]
  },
  {
    id: "6",
    title: "Reportes de Sostenibilidad",
    description: "Elaboración de reportes bajo estándares internacionales para cumplimiento regulatorio y posicionamiento ante inversores y stakeholders.",
    tags: ["GRI", "IFRS S", "Carbon pricing"]
  }
];

export default function BusinessUnits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  const [triggerUnderline, setTriggerUnderline] = useState(false);

  return (
    <section ref={sectionRef} id="business-units" className="pt-4 pb-32 px-6 bg-white text-carbon overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-aquamarine blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-ukko-blue blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <span className="text-sm font-normal tracking-[-0.02em] text-ukko-blue mb-6 inline-block border border-ukko-blue/30 px-4 py-1.5 rounded-full bg-ukko-blue/5">
            Unidades de Negocio
          </span>
          
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-semibold mb-8 tracking-tight leading-[1.1] text-carbon flex flex-wrap items-baseline gap-x-4 lg:gap-x-6">
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.012}
              staggerFrom="first"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
              }}
            >
              {`Soluciones`}
            </VerticalCutReveal>
            
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
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 21,
                  delay: 0.3
                }}
              >
                {`de extremo a extremo`}
              </VerticalCutReveal>
            </AnimatedText>
          </h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-carbon/70 max-w-2xl leading-relaxed font-medium tracking-tight"
          >
            Abordamos la sostenibilidad desde todas sus dimensiones: emisiones, resiliencia, residuos, energía renovable, reportes y formación de capital humano.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 pt-10">
          {businessUnits.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * index + 0.6 }}
              className="relative flex flex-col h-full"
            >
              {/* Number Label - Outside the card for zero interference */}
              <div className="absolute -top-24 left-0 text-8xl font-bold ukko-gradient tracking-tighter z-20 pointer-events-none p-10">
                {unit.id}
              </div>

              {/* Card Container */}
              <div className="bg-white border border-carbon/5 rounded-[32px] p-10 flex flex-col h-full relative">
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full mt-4">
                  <h3 className="text-2xl font-bold mb-5 leading-tight tracking-tight transition-colors duration-300">
                    {unit.title}
                  </h3>
                
                <p className="text-carbon/60 text-[15px] leading-relaxed font-medium tracking-tight mb-8">
                  {unit.description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {unit.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-[11px] font-normal tracking-[-0.02em] text-ukko-blue border border-ukko-blue/30 px-3 py-1 rounded-full bg-ukko-blue/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
