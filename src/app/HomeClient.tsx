"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BusinessUnits from "@/components/BusinessUnits";
import AboutUs from "@/components/AboutUs";
import Methodology from "@/components/Methodology";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Hero Entrance Animation
      const tl = gsap.timeline();
      
      tl.from(".hero-subheadline", {
        y: -10,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .from(".reveal-char", {
        y: 40,
        opacity: 0,
        duration: 0.4,
        stagger: 0.008,
        ease: "power3.out",
      }, "-=0.3")
      .from(".hero-text", {
        y: 15,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      }, "-=0.3")
      .from(".hero-ctas", {
        y: 15,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      }, "-=0.25")
      .from(".hero-stats", {
        opacity: 0,
        duration: 0.6,
        ease: "none",
        onStart: () => {
          // Start counters earlier
          const counters = [
            { id: 'counter-years', end: 20 },
            { id: 'counter-projects', end: 45 },
            { id: 'counter-emissions', end: 14 }
          ];

          counters.forEach(c => {
            const el = document.getElementById(c.id);
            if (el) {
              gsap.to({ val: 0 }, {
                val: c.end,
                duration: 1.2,
                ease: "power2.out",
                onUpdate: function() {
                  el.innerText = Math.floor(this.targets()[0].val).toString();
                }
              });
            }
          });
        }
      }, "-=0.2")
      .from(".stat-item", {
        y: 15,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
      }, "-=0.3");

      // About Us Animations handled by components internally
    },
    { scope: container }
  );

  return (
    <div ref={container} className="bg-white text-carbon min-h-screen selection:bg-ukko-blue/20">
      <Navbar />
      <Hero title="Impulsando el Futuro Energético" />
      <AboutUs />
      <div id="unidades"><BusinessUnits /></div>
      <div id="metodologia"><Methodology /></div>
      <div id="clientes"><Clients /></div>
      <div id="contacto"><CTA /></div>
      <Footer />
    </div>
  );
}
