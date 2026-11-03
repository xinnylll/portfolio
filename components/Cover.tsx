"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Cover() {
  const reduce = useReducedMotion();

  return (
    <section className="cover" aria-labelledby="home-title">
      <p className="cover-spine">Interaction Design / HCI / Creative Technology</p>
      <div className="cover-stage">
        <h1 id="home-title">
          <motion.span
            className="cover-x"
            initial={reduce ? false : { y: "0.22em" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            Xinyuan
          </motion.span>
          <motion.span
            className="cover-lan"
            initial={reduce ? false : { y: "0.28em" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease }}
          >
            Lan
          </motion.span>
        </h1>
        <div className="cover-portrait">
          <Image
            src="/images/portrait.jpg"
            alt="Watercolor portrait of Xinyuan Lan"
            width={620}
            height={1024}
            priority
            unoptimized
            sizes="(min-width: 900px) 54vw, 88vw"
          />
        </div>
        <motion.p
          className="cover-dek"
          initial={reduce ? false : { y: 14 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.85, delay: 0.16, ease }}
        >
          Designing curious interactions
          <br />
          between humans, technology,
          <br />
          and everything in between.
        </motion.p>
      </div>
    </section>
  );
}
