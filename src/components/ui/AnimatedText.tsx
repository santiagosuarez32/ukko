"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  textClassName?: string;
  underlineClassName?: string;
  underlinePath?: string;
  underlineHoverPath?: string;
  underlineDuration?: number;
  trigger?: boolean;
}

const AnimatedText = React.forwardRef<HTMLDivElement, AnimatedTextProps>(
  (
    {
      children,
      textClassName,
      underlineClassName,
      underlinePath = "M 0,10 Q 75,0 150,10 Q 225,20 300,10",
      underlineHoverPath = "M 0,10 Q 75,20 150,10 Q 225,0 300,10",
      underlineDuration = 1.5,
      trigger = true,
      ...props
    },
    ref
  ) => {
    const pathVariants: Variants = {
      hidden: {
        pathLength: 0,
        opacity: 0,
      },
      visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
          duration: underlineDuration,
          ease: "easeInOut",
        },
      },
    };

    return (
      <div
        ref={ref}
        className={cn("inline-flex flex-col items-center justify-center gap-1 relative", props.className)}
      >
        <div className="relative">
          <div className={cn(textClassName)}>
            {children}
          </div>

          <motion.svg
            width="100%"
            height="12"
            viewBox="0 0 300 20"
            preserveAspectRatio="none"
            className={cn("absolute -bottom-1 left-0 w-full", underlineClassName)}
          >
            <motion.path
              d={underlinePath}
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              animate={trigger ? "visible" : "hidden"}
              whileHover={{
                d: underlineHoverPath,
                transition: { duration: 0.8 },
              }}
            />
          </motion.svg>
        </div>
      </div>
    );
  }
);

AnimatedText.displayName = "AnimatedText";

export { AnimatedText };
