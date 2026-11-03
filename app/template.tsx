"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

let seen = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [play] = useState(() => {
    if (typeof window === "undefined" || reduce) return false;
    const next = seen;
    seen = true;
    return next;
  });

  return (
    <>
      {children}
      {play ? (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-50 origin-top bg-ink"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.78, ease: [0.76, 0, 0.24, 1] }}
        />
      ) : null}
    </>
  );
}
