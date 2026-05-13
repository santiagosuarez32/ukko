import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { LiquidReveal } from "@/components/ui/LiquidReveal";
import { motion, useInView } from "framer-motion";
import { FiZap, FiUsers, FiGlobe, FiTarget } from "react-icons/fi";

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  const [triggerUnderline, setTriggerUnderline] = useState(false);
  const cards = [
    {
      title: "Experiencia",
      desc: "+20 años diseñando e implementando soluciones integrales en sostenibilidad y eficiencia energética.",
      color: "border-petroleum",
      rgb: "0, 62, 81",
      icon: FiZap
    },
    {
      title: "Equipo",
      desc: "Profesionales y expertos destacados con trayectoria comprobada en múltiples industrias.",
      color: "border-ukko-blue",
      rgb: "0, 45, 114",
      icon: FiUsers
    },
    {
      title: "Alcance",
      desc: "Operación nacional e internacional. Gestión de cargas y materiales a nivel global.",
      color: "border-emerald",
      rgb: "0, 168, 142",
      icon: FiGlobe
    },
    {
      title: "Visión",
      desc: "Potenciar el desarrollo sostenible de las compañías, generando oportunidades concretas de negocio.",
      color: "border-teal",
      rgb: "0, 128, 128",
      icon: FiTarget
    }
  ];

  return (
    <section id="about-us" className="about-section py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Image Accent */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full z-0 opacity-15 pointer-events-none hidden lg:block"
        style={{ 
          maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.5) 50%, transparent 100%)'
        }}
      >
        <LiquidReveal
          src="/about.webp"
          alt="Ukko About Background"
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          containerClassName="w-full h-full"
          className="object-contain object-right-top"
          delay={0.2}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="about-content mb-20">
          <span className="text-base md:text-lg font-bold tracking-tight text-ukko-blue mb-8 inline-block border border-ukko-blue/20 px-6 py-2 rounded-full bg-ukko-blue/5 backdrop-blur-sm">
            Quiénes Somos
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-carbon leading-[1.15] tracking-tight">
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.008}
                  staggerFrom="first"
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                  }}
                >
                  {`Conocimiento aplicado`}
                </VerticalCutReveal>
                <div className="flex flex-wrap items-baseline gap-x-2.5 -mt-1">
                  <VerticalCutReveal
                    splitBy="characters"
                    staggerDuration={0.01}
                    staggerFrom="first"
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 25,
                      delay: 0.1
                    }}
                  >
                    {`para crear`}
                  </VerticalCutReveal>
                  
                  <AnimatedText 
                    trigger={triggerUnderline}
                    underlineClassName="text-emerald/60"
                    underlineDuration={1.2}
                    className="inline-flex translate-y-[2px]"
                  >
                    <VerticalCutReveal
                      splitBy="characters"
                      staggerDuration={0.01}
                      staggerFrom="first"
                      onComplete={() => setTriggerUnderline(true)}
                      elementLevelClassName="gradient-text"
                      containerClassName="gradient-text"
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 21,
                        delay: 0.25
                      }}
                    >
                      {`valor sostenible`}
                    </VerticalCutReveal>
                  </AnimatedText>
                </div>
              </h2>
            </div>
            <div className="max-w-xl">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.03}
                staggerFrom="first"
                containerClassName="text-lg md:text-xl text-carbon/70 font-medium leading-relaxed tracking-tight"
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 25,
                  delay: 0.2
                }}
              >
                {`Somos una compañía ágil con profesionales y expertos destacados. Aplicamos el conocimiento y la experiencia para crear sinergia en los proyectos, logrando junto a socios estratégicos materializar soluciones confiables e innovadoras.`}
              </VerticalCutReveal>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 about-cards">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.08 * idx + 0.3 }}
              style={{ 
                background: `linear-gradient(to top, rgba(${card.rgb}, 0.15) 0%, rgba(255, 255, 255, 0) 70%)`,
                maskImage: 'linear-gradient(to bottom, black 0%, black 70%, rgba(0,0,0,0.6) 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, rgba(0,0,0,0.6) 85%, transparent 100%)'
              }}
              className="relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center overflow-hidden group"
            >
              {/* Card Icon - Top Right */}
              <div className="absolute top-6 right-6 z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 opacity-30 group-hover:opacity-100">
                <card.icon className="text-2xl" style={{ color: `rgb(${card.rgb})` }} />
              </div>

              {/* Bottom Diffused Glow */}
              <div 
                className="absolute -bottom-6 left-0 w-full h-12 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" 
                style={{ backgroundColor: `rgb(${card.rgb})` }} 
              />
              
              <h3 className="relative z-10 text-lg font-bold text-carbon mb-3 mt-4">{card.title}</h3>
              <p className="relative z-10 text-carbon/70 text-[15px] leading-relaxed font-medium">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Valor Diferencial Section (New Layout) */}
        <div className="mt-32">
          {/* Header Section */}
          <div className="mb-12">
            <h3 className="text-4xl md:text-5xl font-semibold text-carbon leading-[1.1] tracking-tight">
              Valor diferencial <br /> de nuestra marca
            </h3>
          </div>

          {/* Main Card Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-auto lg:h-[500px] rounded-[40px] border border-white-gray/10 overflow-hidden flex flex-col lg:flex-row items-stretch p-0"
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/about-paneles.webp"
                alt="Paneles Solares Ukko"
                fill
                sizes="(max-width: 1024px) 100vw, 100vw"
                className="object-cover transition-transform duration-1000"
              />
              {/* Subtle gradient overlay to enhance depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>

            {/* Differential Value Card (White background) - Left Side */}
            <div className="relative z-10 w-full lg:w-[500px] bg-white p-8 md:p-14 flex flex-col justify-center">
               <p className="text-base md:text-lg text-carbon/70 font-medium leading-relaxed tracking-tight">
                 Somos una compañía ágil con <span className="font-bold text-carbon">alta capacidad técnica y analítica</span>, enfocada en desarrollar <span className="font-bold text-carbon">soluciones inteligentes</span>. Aplicamos nuestra experiencia para crear valor en cada proyecto, materializando resultados <span className="font-bold text-carbon">confiables, innovadores y sustentables</span> vinculados a la eficiencia energética y resiliencia climática.
               </p>
            </div>

            {/* Actions Sub-card (Floating Glassmorphism) - Right Side */}
            <div className="relative z-10 flex-1 flex items-center justify-center lg:justify-end p-8 md:px-14 md:py-14">
              <div className="w-full max-w-[280px] bg-white/10 backdrop-blur-md p-6 rounded-[32px] shadow-2xl border border-white/20 flex flex-col gap-5 relative overflow-hidden group">
                {/* Decorative Internal Glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-ukko-blue/10 blur-3xl rounded-full" />
                
                <div className="relative z-10">
                  <h4 className="text-white font-bold text-lg mb-2 tracking-tight">Impulsá tu transición</h4>
                  <p className="text-white/80 text-[13px] leading-relaxed font-medium">
                    Estamos listos para asesorarte en el desarrollo de soluciones energéticas innovadoras.
                  </p>
                </div>
                
                <div className="flex flex-col gap-3 relative z-10">
                  <button className="w-full py-3 rounded-xl bg-white text-petroleum font-bold text-xs hover:bg-emerald hover:text-white transition-all shadow-lg active:scale-[0.98]">
                    Agendar Reunión
                  </button>
                  
                  <Link 
                    href="/sobre-nosotros"
                    className="w-full py-3 rounded-xl border border-white/30 bg-white/5 text-white font-semibold text-xs hover:bg-white/10 transition-all text-center"
                  >
                    Saber más
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
