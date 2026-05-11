"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { AnimatedText } from "@/components/ui/AnimatedText";

import Image from "next/image";

const clientLogos = [
  "/carousel/1.png",
  "/carousel/2.png",
  "/carousel/3.png",
  "/carousel/4.png",
  "/carousel/5.png",
  "/carousel/6.png",
  "/carousel/7.png",
  "/carousel/8.png",
];

// Double the list for seamless looping
const marqueeLogos = [...clientLogos, ...clientLogos];

export default function Clients() {
  const [triggerUnderline, setTriggerUnderline] = useState(false);

  return (
    <section className="py-32 bg-white overflow-hidden border-t border-carbon/5">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center">
          <span className="text-sm font-normal tracking-[-0.02em] text-ukko-blue mb-6 inline-block border border-ukko-blue/30 px-4 py-1.5 rounded-full bg-ukko-blue/5">
            Clientes
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold mb-8 tracking-tight leading-[1.15] text-carbon flex flex-col items-center">
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.012}
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
                  staggerDuration={0.015}
                  staggerFrom="first"
                  onComplete={() => setTriggerUnderline(true)}
                  elementLevelClassName="gradient-text"
                  containerClassName="gradient-text"
                  transition={{ type: "spring", stiffness: 250, damping: 21, delay: 0.3 }}
                >
                  {`nuestros servicios`}
                </VerticalCutReveal>
              </AnimatedText>
            </div>
          </h2>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradient overlays for smooth fading at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div 
          className="flex whitespace-nowrap gap-32 py-8 items-center"
          animate={{
            x: [0, -2816], // (w-64 = 256px + gap-32 = 128px) * 8 logos = 3072px. Let's use precise math.
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
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
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
