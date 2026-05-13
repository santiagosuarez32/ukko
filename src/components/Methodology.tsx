"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { LiquidReveal } from "@/components/ui/LiquidReveal";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { AnimatedText } from "@/components/ui/AnimatedText";

import { 
  PiMagnifyingGlass, 
  PiListChecks, 
  PiSealCheck, 
  PiLightbulb, 
  PiGear, 
  PiChartBar,
  PiIdentificationCard,
  PiShieldCheck,
  PiPulse,
  PiStrategy,
  PiBookOpen,
  PiClipboardText,
  PiWrench,
  PiMapTrifold,
  PiPackage,
  PiFileText,
  PiWarehouse,
  PiStack,
  PiBoat,
  PiGlobe,
  PiBuildings,
  PiTruck,
  PiArchive,
  PiWind,
  PiDrop,
  PiPlantLight
} from "react-icons/pi";

const methodologyData = [
  {
    id: "01",
    title: "Gestión Integral de Emisiones",
    subtitle: "Soluciones de extremo a extremo para la descarbonización",
    bgImage: "/emisiones.webp",
    alcances: [
      { title: "Huella de Carbono Organizacional", desc: "**Cálculo y reporte** de la huella de carbono organizacional (ISO 14064)." },
      { title: "Huella de Carbono de Productos", desc: "**Cálculo de la huella** de carbono de productos y servicios (ISO 14067)." },
      { title: "Análisis de Ciclo de Vida", desc: "**Estudio del impacto** ambiental en todo el ciclo de vida (ISO 14040/44)." },
      { title: "Finanzas Sostenibles", desc: "**Asesoramiento** en bonos verdes, mercados de carbono y taxonomía." },
      { title: "Soluciones de Mitigación", desc: "Diseño e implementación de estrategias de **reducción de emisiones**." }
    ],
    planAccion: [
      { id: "01", title: "Diagnóstico", desc: "**Análisis y caracterización** de procesos", icon: PiMagnifyingGlass },
      { id: "02", title: "Inventario", desc: "**Cálculo del inventario** de emisiones GEI", icon: PiListChecks },
      { id: "03", title: "Verificación", desc: "**Verificación del inventario** GEI y línea base", icon: PiSealCheck },
      { id: "04", title: "Estrategia", desc: "**Estudio y selección** de propuestas de mitigación", icon: PiLightbulb },
      { id: "05", title: "Implementación", desc: "**Ejecución de acciones** y proyectos seleccionados", icon: PiGear },
      { id: "06", title: "Validación", desc: "**Verificación de la eficacia** de las acciones", icon: PiChartBar }
    ]
  },
  {
    id: "02",
    title: "Resiliencia Climática",
    subtitle: "Evaluación del riesgo, vulnerabilidad climática y medidas de adaptación",
    bgImage: "/arboles.webp",
    alcances: [
      { title: "Diagnóstico", desc: "**Análisis y caracterización** de procesos y actividades" },
      { title: "Identificación y requisitos", desc: "**Identificación de riesgos** climáticos y requisitos actuales internos y externos frente a partes interesadas" },
      { title: "Evaluación", desc: "**Evaluación y revisión** del plan de continuidad de negocios, respuesta a emergencias y planes de recuperación existentes" },
      { title: "Nivel de vulnerabilidad", desc: "**Determinación de la vulnerabilidad** climática de los activos y del negocio de la empresa" },
      { title: "Acciones", desc: "**Análisis técnico y económico** de alternativas de cambios y mejoras para fortalecer la resiliencia climática" },
      { title: "Plan de Resiliencia Climática", desc: "**Elaboración e implementación** de una estrategia de resiliencia climática de corto, mediano y largo plazo" }
    ],
    planAccion: []
  },
  {
    id: "03",
    title: "Gestión Integral de Residuos Peligrosos",
    subtitle: "Solución de extremo a extremo como Operador/Exportador",
    description: "Servicios personalizados",
    bgImage: "/maritima.webp",
    alcances: [
      { stage: "Etapa 1", title: "Acondicionamiento de tambores", icon: PiPackage },
      { stage: "Etapa 1", title: "Tramitación de permisos", icon: PiFileText },
      { stage: "Etapa 2", title: "Transporte nacional", icon: PiTruck },
      { stage: "Etapa 2", title: "Depósito transitorio", icon: PiWarehouse },
      { stage: "Etapa 2", title: "Transporte a puerto", icon: PiTruck },
      { stage: "Etapa 3", title: "Descarga y consolidación", icon: PiArchive },
      { stage: "Etapa 3", title: "Logística marítima", icon: PiBoat },
      { stage: "Etapa 3", title: "Transporte internacional", icon: PiGlobe },
      { stage: "Etapa 3", title: "Planta de tratamiento", icon: PiBuildings },
      { stage: "Etapa 3", title: "Reporte final", icon: PiChartBar }
    ],
    planAccion: [
      { 
        id: "01", 
        title: "Exportación marítima y terrestre de residuos", 
        desc: "Realizamos la gestión integral para el desarrollo de estrategias de exportación de materiales peligrosos, ya sea por vía marítima o terrestre.", 
        icon: PiPulse 
      },
      { 
        id: "02", 
        title: "Gestión de cargas en el exterior", 
        desc: "Proveemos soluciones de campo a nivel internacional, inspección en puertos y locaciones definidas, desconsolidación de cargas, transporte terrestre internacional, almacenamiento temporario de residuos peligrosos en el exterior.", 
        icon: PiMapTrifold 
      },
      { 
        id: "03", 
        title: "Operador/Exportador", 
        desc: "Desarrollamos todas las actividades ante clientes, generadores, tratadores, autoridades nacionales, provinciales, aduaneras, etc, asegurando una solución de extremo a extremo.", 
        icon: PiSealCheck 
      },
      { 
        id: "04", 
        title: "Gestión de cargas y materiales", 
        desc: "Proveemos soluciones de campo a nivel nacional para la consolidación de cargas, preparación para exportación, transporte nacional terrestre, almacenamiento temporario de residuos peligrosos y consolidación de carga en contenedores para exportación.", 
        icon: PiGear 
      }
    ]
  },
  {
    id: "04",
    title: "Energía Renovable y Gestión Energética",
    subtitle: "Soluciones de energía renovable y gestión energética eficiente",
    description: "Desarrollamos proyectos de energía renovable llave en mano",
    bgImage: "/solar.webp",
    capacidades: [
      "**Asesoría técnica** y regulatoria",
      "**Aplicación de soluciones** a medida",
      "**Ingeniería** y procura",
      "**Construcción** y montaje",
      "**Puesta en marcha**"
    ],
    objetivos: [
      "**Optimización** del consumo de energía",
      "**Reducción** de costos de energía",
      "**Reducción** de emisiones de GEI",
      "**Impacto positivo** en imagen y compromiso con la innovación"
    ],
    alcances: [],
    planAccion: []
  },
  {
    id: "05",
    title: "Formación de Líderes",
    subtitle: "Programa integral de formación en descarbonización y neutralidad en carbono",
    description: "Desarrollamos programas de capacitación personalizados para líderes y equipos técnicos, enfocados en la gestión estratégica de la sostenibilidad y mercados de carbono.",
    bgImage: "/nivel.webp",
    niveles: [
      {
        title: "Nivel Inicial",
        color: "bg-[#34665A]",
        modules: [
          "Introducción a la Gestión del Riesgo Climático",
          "Mitigación y Adaptación del Riesgo Climático",
          "Transición Energética, Sustentabilidad y Neutralidad en Carbono",
          "Introducción a Sistemas de Gestión de la Energía (ISO 50001:2018)"
        ]
      },
      {
        title: "Nivel Avanzado",
        color: "bg-[#2D5A50]",
        modules: [
          "Aseguramiento de la Neutralidad en Carbono",
          "Cálculo de Huellas de Carbono de Productos, Organizaciones y Proyectos",
          "Gestión del Riesgo Climático y Resiliencia Climática",
          "Programas y Protocolos de Neutralidad en Carbono"
        ]
      },
      {
        title: "Nivel Experto",
        color: "bg-[#2B4B52]",
        modules: [
          "Análisis Económico Financiero de proyectos de Mitigación de GEI",
          "Introducción a los Mercados de Carbono y Finanzas Verdes",
          "Validadores y Verificadores internos de Inventarios de GEI",
          "Introducción a la Huella Hídrica (ISO 14046:2014)"
        ]
      }
    ],
    alcances: [],
    planAccion: []
  },
  {
    id: "06",
    title: "Reportes de Sostenibilidad",
    subtitle: "Soluciones integrales para potenciar la sostenibilidad y eficiencia operativa",
    description: "Brindamos soluciones integrales para potenciar la sostenibilidad y la eficiencia operativa de su organización a través de los siguientes ejes:",
    bgImage: "/06.webp",
    capacidades: [
      "Implementación de sistemas de gestión y marcos de reporte alineados a las exigencias globales.",
      "Bajo estándares Internacionales:"
    ],
    objetivos: [
      "Planes de Gestión Ambiental a Medida:",
      "Analisis de gestión ambiental corporativa actual, identificando oportunidades de mejora y eficiencia en la operación diaria."
    ],
    subCardsLeft: [
      "ISO 14001 - ISO 50001 - GRI - IFRS2"
    ],
    subCardsRight: [
      { title: "Gestión del agua", icon: PiDrop, color: "text-blue-500" },
      { title: "Gestión de residuos", icon: PiPlantLight, color: "text-emerald-500" },
      { title: "Gestión de riesgo", icon: PiShieldCheck, color: "text-amber-500" }
    ],
    alcances: [],
    planAccion: []
  }
];

export default function Methodology() {
  const [triggerUnderline, setTriggerUnderline] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  // Scroll Progress for Mobile Timeline
  const mobileTimelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mobileTimelineRef,
    offset: ["start 70%", "end 70%"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityEtapa1 = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const opacityEtapa2 = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const opacityEtapa3 = useTransform(scrollYProgress, [0.80, 0.90], [0, 1]);

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
          <span className="text-base md:text-lg font-bold tracking-tight text-ukko-blue mb-8 inline-block border border-ukko-blue/20 px-6 py-2 rounded-full bg-ukko-blue/5 backdrop-blur-sm">
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
            className="text-lg md:text-xl text-carbon/60 leading-relaxed font-medium tracking-tight mb-20"
          >
            Procesos estructurados con resultados medibles y verificables bajo normas internacionales.
          </motion.p>
        </div>
        <div className="space-y-40">
          {methodologyData.map((unit, unitIdx) => (
            <motion.div 
              key={unit.id}
              id={`unit-${unit.id}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-24 scroll-mt-32"
            >
            {(unit.id === "04" || unit.id === "05" || unit.id === "06") ? (
              <div className="space-y-20">
                {/* Unit Header */}
                <div className="flex flex-col md:flex-row md:items-end gap-6 border-b border-carbon/5 pb-8 relative">
                  <span className="text-6xl md:text-9xl font-bold ukko-gradient opacity-40 leading-none tracking-tighter -mb-2">{unit.id}</span>
                  <div>
                    <h3 className="text-3xl md:text-5xl font-bold text-carbon mb-2">{unit.title}</h3>
                    <p className="text-carbon/40 font-medium tracking-tight text-lg">{unit.subtitle}</p>
                  </div>
                </div>

                <div className="max-w-4xl">
                  <p className="text-carbon/60 font-medium tracking-tight text-xl leading-relaxed">{unit.description}</p>
                </div>

                {/* Unit 04 Layout (2-column capacities) */}
                {(unit.id === "04" || unit.id === "06") && (
                  <div className={`${unit.id === "06" ? "max-w-6xl p-12 md:p-16" : "max-w-5xl p-8 md:p-10"} mx-auto ${unit.id === "06" ? "bg-[#1D2B33]" : "bg-[#6EA593]"} rounded-[32px] shadow-xl text-white relative z-10`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        {unit.id !== "06" && <h4 className="text-xl md:text-2xl font-bold mb-6">Capacidades</h4>}
                        <ul className="space-y-3">
                          {unit.capacidades?.map((item: string, i: number) => (
                            <li key={i} className={`flex items-start gap-3 text-white/90 ${unit.id === "06" ? "font-normal" : "font-medium"}`}>
                              {unit.id !== "06" && <span className="text-white text-lg mt-0.5">•</span>}
                              <span className={`${unit.id === "06" ? "text-xl md:text-2xl" : "text-base md:text-lg"} tracking-tight leading-snug`}>
                                {item.split(/(\*\*.*?\*\*)/).map((part, index) => 
                                  part.startsWith('**') && part.endsWith('**') 
                                    ? <strong key={index} className="font-extrabold text-white">{part.slice(2, -2)}</strong>
                                    : part
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        {unit.id !== "06" && <h4 className="text-xl md:text-2xl font-bold mb-6">Objetivos</h4>}
                        <ul className="space-y-3">
                          {unit.objetivos?.map((item: string, i: number) => (
                            <li key={i} className={`flex items-start gap-3 text-white/90 ${unit.id === "06" ? "font-normal" : "font-medium"}`}>
                              {unit.id !== "06" && <span className="text-white text-lg mt-0.5">•</span>}
                              <span className={`${unit.id === "06" ? "text-xl md:text-2xl" : "text-base md:text-lg"} tracking-tight leading-snug`}>
                                {item.split(/(\*\*.*?\*\*)/).map((part, index) => 
                                  part.startsWith('**') && part.endsWith('**') 
                                    ? <strong key={index} className="font-extrabold text-white">{part.slice(2, -2)}</strong>
                                    : part
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Unit 06 Sub-cards Section */}
                    {unit.id === "06" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        {/* Left Sub-card */}
                        <div className="flex justify-center md:justify-start">
                          <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white px-6 py-8 rounded-[24px] border-2 border-black/10 flex flex-col items-center justify-center text-center shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] relative overflow-hidden group"
                          >
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-ukko-blue" />
                            <PiFileText className="text-4xl text-ukko-blue mb-4 opacity-80 group-hover:scale-110 transition-transform" />
                            <span className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight">
                              {unit.subCardsLeft?.[0]}
                            </span>
                          </motion.div>
                        </div>

                        {/* Right Sub-cards Grid */}
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                          {unit.subCardsRight?.map((item: any, i: number) => (
                            <motion.div 
                              key={i} 
                              whileHover={{ y: -5 }}
                              className="bg-white px-4 py-5 rounded-[20px] border-2 border-black/10 flex flex-col items-center justify-center text-center shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] flex-1 min-w-[140px] relative overflow-hidden group"
                            >
                              <div className={`absolute top-0 left-0 w-full h-1 ${item.color.replace('text', 'bg')}`} />
                              <item.icon className={`text-3xl ${item.color} mb-3 opacity-80 group-hover:scale-110 transition-transform`} />
                              <span className="text-base md:text-lg font-bold text-black tracking-tight leading-tight">
                                {item.title}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Subtle U Logo Accent */}
                    <div className="absolute bottom-6 right-8 w-12 h-12 opacity-80 pointer-events-none">
                      <Image 
                        src="/logo-u.webp" 
                        alt="Ukko U" 
                        fill 
                        sizes="48px"
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                  </div>
                )}

                {/* Unit 05 Layout (3-card levels) */}
                {unit.id === "05" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    {unit.niveles?.map((nivel: any, i: number) => (
                      <motion.div 
                        key={i}
                        className={`${nivel.color} p-8 md:p-10 rounded-[32px] shadow-xl text-white flex flex-col h-full`}
                      >
                        <h4 className="text-2xl md:text-3xl font-bold mb-10 leading-tight tracking-tight">
                          {nivel.title}
                        </h4>
                        <ul className="space-y-6 mt-auto">
                          {nivel.modules.map((module: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3 text-white/80 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                              <span className="text-white/60 text-lg">→</span>
                              <span className="text-[14px] md:text-[15px] font-medium leading-tight tracking-tight">
                                {module}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Subtle U Logo Accent */}
                        <div className="absolute bottom-6 right-8 w-10 h-10 opacity-30 pointer-events-none">
                          <Image 
                            src="/logo-u.webp" 
                            alt="Ukko U" 
                            fill 
                            className="object-contain brightness-0 invert"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Full-width Image Card (Standalone) - Overlapping with negative margin */}
                <div className="relative h-[300px] w-screen left-1/2 -translate-x-1/2 overflow-hidden -mt-40 z-0 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent),linear-gradient(to_right,transparent,black_30%,black_70%,transparent)] [mask-composite:intersect] opacity-60">
                        <LiquidReveal 
                          src={unit.bgImage || ""} 
                          alt={unit.title}
                          fill
                          sizes="100vw"
                          containerClassName="w-full h-full"
                          className="object-cover"
                          unoptimized
                        />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </div>
            ) : (
              <>
                {/* Unit Header */}
                <div className="flex flex-col md:flex-row md:items-end gap-6 border-b border-carbon/5 pb-8 relative">
                  <span className="text-6xl md:text-9xl font-bold ukko-gradient opacity-40 leading-none tracking-tighter -mb-2">{unit.id}</span>
                  <div>
                    <h3 className="text-3xl md:text-5xl font-bold text-carbon mb-2">{unit.title}</h3>
                    <p className="text-carbon/40 font-medium tracking-tight text-lg">{unit.subtitle}</p>
                  </div>
                </div>

                {/* Plan de Acción Section (Cuadro) - Rendered first for Unit 03 */}
                {unit.id === "03" && unit.planAccion.length > 0 && (
                  <div className="relative mb-24">
                    <div className="mb-20">
                      <AnimatedText 
                        trigger={true}
                        underlineClassName="text-emerald/60"
                        className="inline-block"
                      >
                        <h4 className="text-2xl font-bold text-carbon">
                          Servicios especializados para la exportación de residuos peligrosos
                        </h4>
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

                    <div className="bg-[#25524B] rounded-[32px] p-10 md:p-14 relative overflow-hidden group z-10">
                      {/* Subtle U Logo Accent */}
                      <div className="absolute bottom-6 right-8 w-12 h-12 opacity-80 pointer-events-none">
                        <Image 
                          src="/logo-u.webp" 
                          alt="Ukko U" 
                          fill 
                          className="object-contain brightness-0 invert"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {unit.planAccion.map((step, idx) => (
                          <div key={idx} className="flex flex-col gap-4">
                            <h5 className="text-lg md:text-[19px] font-bold text-white leading-tight tracking-tight">
                              {step.title}
                            </h5>
                            <p 
                              className="text-base md:text-[16px] text-white/80 font-medium leading-relaxed tracking-tight"
                              dangerouslySetInnerHTML={{ 
                                __html: step.desc.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-white">$1</span>') 
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Alcances Section */}
                <div>
                  <div className="mb-10">
                    <AnimatedText 
                      trigger={true}
                      underlineClassName="text-emerald/60"
                      className="inline-block"
                    >
                      <h4 className="text-2xl md:text-3xl font-bold text-carbon">
                        {unit.id === "02" ? "Plan de acción" : unit.id === "03" ? "Proceso operativo en 3 etapas" : "Alcances"}
                      </h4>
                    </AnimatedText>
                    {unit.id === "03" && (
                      <p className="text-lg md:text-xl text-carbon/60 font-medium tracking-tight mt-4 max-w-3xl">
                        Desarrollo integral de la gestión, Consolidación, logística local e internacional
                      </p>
                    )}
                  </div>
                  {unit.id === "03" ? (
                    <>
                      {/* Mobile Layout (Vertical ZigZag with Scroll Progress) */}
                      <div ref={mobileTimelineRef} className="block md:hidden relative py-12 pl-12 pr-2 overflow-hidden">
                        
                        {/* Vertical Progress Line Container */}
                        <div className="absolute left-6 top-16 bottom-16 w-1.5 bg-emerald/10 rounded-full z-0">
                           {/* Animated Fill */}
                           <motion.div style={{ height: lineHeight }} className="absolute top-0 left-0 w-full bg-[#325A77] rounded-full z-10" />
                           
                           {/* Stage Markers (Horizontal) */}
                           <motion.div 
                             style={{ opacity: opacityEtapa1 }}
                             className="absolute top-[0%] left-1/2 -translate-x-1/2 z-20"
                           >
                             <span className="text-[10px] font-black tracking-widest text-[#325A77] bg-white px-3 py-1 rounded-md shadow-sm border border-[#325A77]/10 whitespace-nowrap">Etapa 1</span>
                           </motion.div>
                           <motion.div 
                             style={{ opacity: opacityEtapa2 }}
                             className="absolute top-[40%] left-1/2 -translate-x-1/2 z-20"
                           >
                             <span className="text-[10px] font-black tracking-widest text-[#325A77] bg-white px-3 py-1 rounded-md shadow-sm border border-[#325A77]/10 whitespace-nowrap">Etapa 2</span>
                           </motion.div>
                           <motion.div 
                             style={{ opacity: opacityEtapa3 }}
                             className="absolute top-[85%] left-1/2 -translate-x-1/2 z-20"
                           >
                             <span className="text-[10px] font-black tracking-widest text-[#325A77] bg-white px-3 py-1 rounded-md shadow-sm border border-[#325A77]/10 whitespace-nowrap">Etapa 3</span>
                           </motion.div>
                        </div>

                        <div className="flex flex-col w-full max-w-[240px] ml-auto mr-0">
                          {unit.alcances.map((alcance: any, idx: number) => {
                            const isLeft = idx % 2 === 0;
                            return (
                              <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-30% 0px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={`flex flex-col items-center w-[130px] text-center relative ${isLeft ? 'self-start' : 'self-end'} ${idx !== 0 ? '-mt-10' : ''}`}
                              >
                                
                                {/* Circle with Rings */}
                                <div className="relative">
                                  <div className="absolute -inset-1.5 border-t-2 border-carbon/20 rounded-full" />
                                  <div className="absolute -inset-1.5 border-b-2 border-carbon/20 rounded-full" />
                                  
                                  <div className="w-20 h-20 rounded-full bg-white border-[5px] border-[#4A8F7D] flex items-center justify-center shadow-md relative z-10">
                                    <alcance.icon size={28} className="text-[#325A77]" />
                                    
                                    {/* Connector Arrow */}
                                    {idx < unit.alcances.length - 1 && (
                                      <motion.div 
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                        className={`absolute -bottom-5 ${isLeft ? '-right-5 rotate-[45deg]' : '-left-5 rotate-[135deg]'} text-[#4A8F7D] z-20`}
                                      >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                          <path d="M8 5v14l11-7z" />
                                        </svg>
                                      </motion.div>
                                    )}
                                  </div>
                                </div>

                                {/* Label Below */}
                                <span className="text-[11px] font-bold text-carbon/90 leading-tight block mt-3 px-1">{alcance.title}</span>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Desktop Layout (Horizontal Timeline) */}
                      <div className="hidden md:block relative py-12 overflow-x-auto no-scrollbar">
                        <div className="min-w-[1100px] px-10">
                          {/* Timeline Container */}
                          <div className="flex items-start justify-between relative mb-12">
                            
                            {unit.alcances.map((alcance: any, idx: number) => (
                              <div key={idx} className="flex flex-col items-center relative z-10 flex-1">
                                {/* Label Above (Alternating) */}
                                <div className={`h-20 flex flex-col items-center justify-end mb-4 text-center ${idx % 2 !== 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                  <span className="text-[11px] font-bold text-carbon/80 leading-tight max-w-[120px] mb-2">{alcance.title}</span>
                                  <div className="w-[1px] h-4 bg-[#4A8F7D]/40 relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#4A8F7D] rounded-full" />
                                  </div>
                                </div>

                                {/* Circle Card Container */}
                                <div className={`relative transition-all duration-500 ${idx % 2 !== 0 ? '-translate-y-4' : 'translate-y-4'}`}>
                                  {/* Decorative Curved Lines (Rings) */}
                                  <div className="absolute -inset-2 border-t-2 border-carbon/20 rounded-full" />
                                  <div className="absolute -inset-2 border-b-2 border-carbon/20 rounded-full" />
                                  
                                  {/* Main Circle */}
                                  <div className="w-20 h-20 rounded-full bg-white border-[6px] border-[#4A8F7D] flex items-center justify-center shadow-md relative z-10">
                                    <alcance.icon size={32} className="text-[#325A77]" />
                                    
                                    {/* Connector Arrow (Pointing to next card) */}
                                    {idx < unit.alcances.length - 1 && (
                                      <div className={`absolute top-1/2 -right-10 -translate-y-1/2 text-[#4A8F7D] z-20 ${idx % 2 !== 0 ? 'rotate-[15deg] translate-y-4' : '-rotate-[15deg] -translate-y-4'}`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                          <path d="M8 5v14l11-7z" />
                                        </svg>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* Label Below (Alternating) */}
                                <div className={`mt-4 flex flex-col items-center text-center ${idx % 2 === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                  <div className="w-[1px] h-4 bg-[#4A8F7D]/40 relative mb-2">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#4A8F7D] rounded-full" />
                                  </div>
                                  <span className="text-[11px] font-bold text-carbon/80 leading-tight max-w-[120px] inline-block">{alcance.title}</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Stage Brackets */}
                          <div className="flex px-[5%]">
                            <div className="flex-[2] flex flex-col items-center px-2">
                              <div className="w-full h-3 border-x-2 border-b-2 border-emerald/20 rounded-b-sm mb-3" />
                              <span className="text-[13px] font-black text-emerald/60 tracking-wider">Etapa 1</span>
                            </div>
                            <div className="flex-[3] flex flex-col items-center px-2">
                              <div className="w-full h-3 border-x-2 border-b-2 border-emerald/20 rounded-b-sm mb-3" />
                              <span className="text-[13px] font-black text-emerald/60 tracking-wider">Etapa 2</span>
                            </div>
                            <div className="flex-[5] flex flex-col items-center px-2">
                              <div className="w-full h-3 border-x-2 border-b-2 border-emerald/20 rounded-b-sm mb-3" />
                              <span className="text-[13px] font-black text-emerald/60 tracking-wider">Etapa 3</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Full-width Image Card for Unit 03 (Standalone) */}
                      <div className="relative h-[300px] w-screen left-1/2 -translate-x-1/2 overflow-hidden -mt-20 md:-mt-40 z-0 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent),linear-gradient(to_right,transparent,black_30%,black_70%,transparent)] [mask-composite:intersect] opacity-60">
                        <LiquidReveal 
                          src={unit.bgImage || ""} 
                          alt={unit.title}
                          fill
                          sizes="100vw"
                          containerClassName="w-full h-full"
                          className="object-cover"
                          unoptimized
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-black/5" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`grid grid-cols-1 sm:grid-cols-2 ${
                        unit.alcances.length === 5 ? "md:grid-cols-5" : 
                        unit.alcances.length === 6 ? "md:grid-cols-6" : 
                        unit.alcances.length === 4 ? "md:grid-cols-4" :
                        "md:grid-cols-3"
                      } gap-4 relative z-10`}>
                      {unit.alcances.map((alcance: any, idx) => {
                        const colors = [
                          "bg-[#325A77]", // Navy Blue
                          "bg-[#25524B]", // Deep Green
                          "bg-[#2B595C]", // Teal
                          "bg-[#81B1A0]", // Mint
                          "bg-[#1D2B33]", // Dark Carbon
                        ];
                        
                        let cardColor = colors[idx % colors.length];
                        if (unit.id === "02") {
                          cardColor = idx === unit.alcances.length - 1 ? "bg-[#325A77]" : "bg-[#6EA593]";
                        }

                        return (
                          <motion.div 
                            key={idx}
                            whileHover={{ y: -10 }}
                            className={`${cardColor} rounded-t-full px-4 pt-12 pb-8 md:pt-16 md:pb-10 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[350px] md:min-h-[420px] justify-start relative mx-12 sm:mx-0`}
                          >
                            {alcance.stage && (
                              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[9px] font-black tracking-widest text-white/40 uppercase">
                                {alcance.stage}
                              </div>
                            )}
                            <div className="relative w-10 h-10 md:w-12 md:h-12 mb-3">
                              <Image 
                                src="/logo-u.webp" 
                                alt="Logo U" 
                                fill 
                                sizes="48px"
                                className="object-contain brightness-0 invert opacity-90"
                              />
                            </div>
                            <h5 className="text-[18px] md:text-xl font-bold text-white leading-tight px-2 mb-4">{alcance.title}</h5>
                             <div className="h-1 w-12 bg-white/20 mb-6" />
                            <p 
                              className="text-[15px] md:text-base text-white/80 leading-relaxed px-2 md:px-4"
                              dangerouslySetInnerHTML={{ 
                                __html: alcance.desc?.replace(/\*\*(.*?)\*\*/g, '<span class="font-black text-white">$1</span>') || '' 
                              }}
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                    
                    {/* Full-width Image Card for Unit 02 (Standalone) */}
                    {unit.id === "02" && (
                      <div className="relative h-[300px] w-screen left-1/2 -translate-x-1/2 overflow-hidden -mt-40 z-0 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent),linear-gradient(to_right,transparent,black_30%,black_70%,transparent)] [mask-composite:intersect] opacity-60">
                        <LiquidReveal 
                          src={unit.bgImage || ""} 
                          alt={unit.title}
                          fill
                          sizes="100vw"
                          containerClassName="w-full h-full"
                          className="object-cover"
                          unoptimized
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-black/5" />
                      </div>
                    )}
                  </>
                )}
                </div>

                {/* Plan de Acción Section - Rendered second for non-Unit 03 */}
                {unit.id !== "03" && unit.planAccion.length > 0 && (
                  <div className="relative">
                    <div className="mb-20">
                      <AnimatedText 
                        trigger={true}
                        underlineClassName="text-emerald/60"
                        className="inline-block"
                      >
                        <h4 className="text-2xl font-bold text-carbon">
                          Plan de acción
                        </h4>
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

                  {/* Desktop Connectors - Removed for a cleaner look */}

                    <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-${unit.planAccion.length} gap-x-6 gap-y-16 relative z-10`}>
                      {unit.planAccion.map((step, idx) => (
                      <div 
                        key={idx} 
                        className="relative flex flex-col group"
                      >
                        {/* Card Content */}
                        <div className="pt-16 px-5 pb-10 bg-white border border-carbon/5 rounded-[32px] h-full flex flex-col items-center relative">
                          {/* Step Number - Top Left */}
                          <span className="absolute -top-8 -left-2 text-5xl font-black text-carbon number-fade tracking-tight z-20 pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            {step.id}
                          </span>

                          {/* Large Icon - Top Center Border */}
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20" style={{ color: 'url(#icon-gradient)' }}>
                            <step.icon size={64} strokeWidth={1} fill="url(#icon-gradient)" />
                          </div>

                          <h5 className="text-[18px] md:text-xl font-bold text-carbon mb-3 text-center leading-tight">{step.title}</h5>
                          <p 
                            className="text-[15px] md:text-base text-carbon/40 leading-relaxed font-medium transition-colors text-center"
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

                  {/* Full-width Image Card for Unit 01 (Standalone) */}
                  {unit.id === "01" && (
                    <div className="relative h-[300px] w-screen left-1/2 -translate-x-1/2 overflow-hidden z-0 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent),linear-gradient(to_right,transparent,black_30%,black_70%,transparent)] [mask-composite:intersect] opacity-60">
                      <LiquidReveal 
                        src={unit.bgImage || ""} 
                        alt={unit.title}
                        fill
                        containerClassName="w-full h-full"
                        className="object-cover"
                        unoptimized
                      />
                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-black/5" />
                    </div>
                  )}
                </div>
                )}
              </>
            )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
