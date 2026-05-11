"use client";

import { motion, useInView } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LiquidRevealProps extends Omit<ImageProps, "onLoad"> {
  containerClassName?: string;
  delay?: number;
  onComplete?: () => void;
}

export function LiquidReveal({ 
  src, 
  alt, 
  className, 
  containerClassName,
  delay = 0,
  onComplete,
  ...props 
}: LiquidRevealProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  const [filterId, setFilterId] = useState("");

  useEffect(() => {
    setFilterId(`liquid-filter-${Math.random().toString(36).substring(2, 9)}`);
  }, []);

  const shouldAnimate = isLoaded && isInView;

  return (
    <div 
      ref={containerRef} 
      className={cn("relative overflow-hidden", containerClassName)}
    >
      {filterId && (
        <svg className="absolute w-0 h-0 invisible" aria-hidden="true">
          <defs>
            <filter id={filterId} colorInterpolationFilters="sRGB">
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.02" 
                numOctaves="3" 
                result="noise" 
              />
              <motion.feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                initial={{ scale: 100 }}
                animate={shouldAnimate ? { scale: 0 } : { scale: 100 }}
                transition={{ 
                  duration: 1.6, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: delay 
                }}
              />
            </filter>
          </defs>
        </svg>
      )}
      
      <motion.div
        initial={{ 
          opacity: 0, 
          scale: 1.1,
          filter: "blur(20px) brightness(1.2)"
        }}
        animate={shouldAnimate ? { 
          opacity: 1, 
          scale: 1,
          filter: "blur(0px) brightness(1)"
        } : {}}
        transition={{ 
          duration: 1.4, 
          ease: [0.22, 1, 0.36, 1],
          delay: delay
        }}
        style={filterId ? { filter: `url(#${filterId})` } : {}}
        onAnimationComplete={onComplete}
        className="w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          className={cn("transition-none", className)}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      </motion.div>
      
      {/* Fallback for when not loaded or not in view (prevents layout shift if fill is used) */}
      {!shouldAnimate && (
        <div className="absolute inset-0 bg-white-gray/5 animate-pulse" />
      )}
    </div>
  );
}
