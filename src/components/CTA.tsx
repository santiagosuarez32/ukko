"use client";

import Image from "next/image";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CTA({ className }: { className?: string }) {
  const [triggerUnderline, setTriggerUnderline] = useState(false);

  return (
    <section id="contacto" className={`py-32 px-6 bg-white relative overflow-hidden border-t border-carbon/5 ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="text-sm font-bold tracking-tight text-ukko-blue mb-8 inline-block border border-ukko-blue/20 px-4 py-1.5 rounded-full bg-ukko-blue/5 backdrop-blur-sm">
          Contacto
        </span>
        
        {/* Header Section (2-column layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
          <div className="lg:w-full">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-carbon leading-[1.1] tracking-tight">
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.012}
                staggerFrom="first"
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
              >
                {`Hablemos sobre el`}
              </VerticalCutReveal>
              <div className="flex flex-wrap items-baseline gap-x-2.5 -mt-1">
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.015}
                  staggerFrom="first"
                  transition={{ type: "spring", stiffness: 250, damping: 25, delay: 0.2 }}
                >
                  {`futuro de su`}
                </VerticalCutReveal>
                
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.015}
                  staggerFrom="first"
                  elementLevelClassName="gradient-text"
                  containerClassName="gradient-text"
                  transition={{ type: "spring", stiffness: 250, damping: 21, delay: 0.4 }}
                >
                  {`empresa`}
                </VerticalCutReveal>
              </div>
            </h2>
          </div>
          <div className="lg:w-full">
            <p className="text-lg md:text-[20px] text-carbon/70 font-medium leading-relaxed tracking-tight">
              Agendá una reunión con nuestro equipo para explorar cómo podemos <span className="font-bold text-carbon">viabilizar sus objetivos</span> de sostenibilidad y eficiencia energética.
            </p>
          </div>
        </div>

        {/* Main Card Content (Like Valor Diferencial) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[450px] md:h-[550px] rounded-[48px] shadow-2xl overflow-hidden flex items-center justify-end p-8 md:p-14"
        >
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/energy-2.jpg"
              alt="Ukko Energy Future"
              fill
              className="object-cover"
              unoptimized
            />
            {/* Darker overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[#1B352F]/20" />
          </div>

          {/* Contact Card (Floating Glassmorphism) */}
          <div className="w-full lg:w-[400px] relative z-10">
            <div className="bg-[#2D5A50]/40 backdrop-blur-xl p-10 rounded-[40px] shadow-2xl border border-white/20 flex flex-col gap-8 relative overflow-hidden group">
              {/* Decorative Internal Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald/20 blur-3xl rounded-full" />
              
              <div className="relative z-10">
                <h4 className="text-white font-semibold text-xl mb-3 tracking-tight">Comencemos hoy</h4>
                <p className="text-white/80 text-sm md:text-[15px] leading-relaxed font-normal">
                  Nuestro equipo de expertos está listo para asesorarte en la transición hacia un modelo más eficiente.
                </p>
              </div>
              
              <div className="relative z-10">
                <a 
                  href="mailto:contacto@ukkoenergy.com" 
                  className="w-full py-4 px-3 sm:px-6 rounded-2xl bg-white text-[#2D5A50] font-semibold text-[13px] sm:text-base flex items-center justify-center gap-2 sm:gap-3 hover:bg-emerald hover:text-white transition-all shadow-xl active:scale-[0.98] group whitespace-nowrap"
                >
                  contacto@ukkoenergy.com
                  <span className="group-hover:translate-x-1 transition-transform shrink-0">→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
