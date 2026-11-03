"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { Study } from "@/lib/studies";

const placements = [
  "w-full",
  "md:ml-[12%] md:w-[78%]",
  "md:w-[86%]",
  "md:ml-auto md:w-[70%]",
];

export function StudyView({ study, next }: { study: Study; next: Study }) {
  return (
    <main id="content" className="pt-28 md:pt-32">
      <header className="px-5 md:px-12">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center font-sans text-[0.68rem] font-medium uppercase tracking-[0.28em] hover:text-blue"
          >
            Work
          </Link>
          <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.22em] text-blue">
            {study.category}
            {study.year ? ` / ${study.year}` : ""}
          </p>
        </div>
        <h1 className="mt-6 max-w-[10ch] font-display text-[clamp(4.6rem,13vw,11rem)] font-medium italic leading-[0.8] tracking-[-0.05em]">
          {study.title}
        </h1>
        <p className="mt-8 max-w-[16em] font-display text-[clamp(1.6rem,2.4vw,2.15rem)] font-medium italic leading-[1.2] tracking-[-0.02em] md:ml-[18vw]">
          {study.line}
        </p>
        <p className="mt-5 max-w-[38ch] font-sans text-[15px] leading-relaxed md:ml-[18vw]">{study.note}</p>
      </header>

      <div className="mt-14 flex flex-col gap-16 px-5 md:mt-20 md:gap-28 md:px-12">
        {study.boards.map((board, index) => {
          const figure = (
            <figure className={`m-0 ${placements[index % placements.length]}`}>
              <Image
                src={board.src}
                alt={board.alt}
                width={board.width}
                height={board.height}
                priority={index === 0}
                quality={90}
                sizes="(min-width: 768px) 86vw, 100vw"
                className="block h-auto w-full"
              />
              <figcaption className="mt-3 flex gap-4 font-sans text-[0.68rem] font-medium uppercase tracking-[0.18em]">
                <span className="text-blue">{String(index + 1).padStart(2, "0")}</span>
                <span>{board.caption}</span>
              </figcaption>
            </figure>
          );

          if (index === 0) return <div key={board.src}>{figure}</div>;
          return (
            <Reveal key={board.src} className="overflow-hidden">
              {figure}
            </Reveal>
          );
        })}
      </div>

      <Link
        href={`/work/${next.slug}`}
        className="group mt-24 block border-t border-line px-5 py-14 md:mt-32 md:px-12 md:py-20"
      >
        <span className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.28em] text-blue">
          Next
        </span>
        <span className="mt-4 block font-display text-[clamp(3.4rem,8vw,7.4rem)] font-medium italic leading-[0.84] tracking-[-0.045em] transition-colors duration-300 group-hover:text-blue">
          {next.title}
        </span>
        <span className="mt-3 block font-sans text-[0.72rem] font-medium uppercase tracking-[0.16em]">
          {next.category}
        </span>
      </Link>
    </main>
  );
}
