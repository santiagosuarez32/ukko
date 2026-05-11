"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { AnimatedText } from "@/components/ui/AnimatedText";

import Image from "next/image";

const clientLogos = [
  "/carousel/1.webp",
  "/carousel/2.webp",
  "/carousel/3.webp",
  "/carousel/4.webp",
  "/carousel/5.webp",
  "/carousel/6.webp",
  "/carousel/7.webp",
  "/carousel/8.webp",
];

// Double the list for seamless looping
const marqueeLogos = [...clientLogos, ...clientLogos];

export default function Clients() {
  const [triggerUnderline, setTriggerUnderline] = useState(false);

  return (
    <section className="py-32 bg-white overflow-hidden border-t border-carbon/5">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center">
          <div className="flex flex-col items-center mb-12">
            <span className="text-sm font-bold tracking-tight text-ukko-blue mb-8 inline-block border border-ukko-blue/20 px-4 py-1.5 rounded-full bg-ukko-blue/5 backdrop-blur-sm">
              Clientes
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold mb-8 tracking-tight leading-[1.15] text-carbon flex flex-col items-center">
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.008}
                staggerFrom="first"
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
              >
                {`Confían en`}
              </VerticalCutReveal>
              
              <div className="flex flex-wrap items-baseline justify-center gap-x-3 -mt-2">
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
                    transition={{ type: "spring", stiffness: 250, damping: 21, delay: 0.15 }}
                  >
                    {`nuestros servicios`}
                  </VerticalCutReveal>
                </AnimatedText>
              </div>
            </h2>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="relative flex overflow-hidden w-full max-w-[1400px] mx-auto px-4 md:px-12"
      >
        {/* Gradient overlays for smooth fading at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex whitespace-nowrap gap-8 md:gap-12 py-8 items-center w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {marqueeLogos.map((logo, index) => (
            <div 
              key={index} 
              className="relative w-48 h-24 md:w-64 md:h-32 flex-shrink-0 opacity-80 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={logo}
                alt={`Client Logo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
