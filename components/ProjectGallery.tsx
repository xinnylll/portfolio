"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { studies, type Study } from "@/lib/studies";

const ease = "cubic-bezier(0.22,1,0.36,1)";

function Frame({
  study,
  sizes,
  priority = false,
}: {
  study: Study;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <Reveal className="overflow-hidden">
      <Image
        src={study.cover.src}
        alt=""
        width={study.cover.width}
        height={study.cover.height}
        priority={priority}
        quality={90}
        sizes={sizes}
        className={`block h-auto w-full transition-transform duration-700 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]`}
        style={{ transitionTimingFunction: ease }}
      />
    </Reveal>
  );
}

function Meta({ study, index }: { study: Study; index: string }) {
  return (
    <div>
      <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.28em] text-blue transition-transform duration-500 group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5">
        {index}
        {study.year ? <span className="text-ink"> / {study.year}</span> : null}
      </p>
      <h3 className="mt-3 font-display text-[clamp(3.5rem,6.4vw,6.6rem)] font-medium italic leading-[0.82] tracking-[-0.045em] transition-colors duration-300 group-hover:text-blue group-focus-visible:text-blue">
        {study.title}
      </h3>
      <p className="mt-4 max-w-[20ch] font-sans text-[0.72rem] font-medium uppercase leading-relaxed tracking-[0.16em]">
        {study.category}
      </p>
      <p
        aria-hidden
        className="max-h-0 max-w-[34ch] overflow-hidden font-sans text-sm leading-relaxed opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:max-h-24 group-hover:opacity-100 group-focus-visible:mt-4 group-focus-visible:max-h-24 group-focus-visible:opacity-100"
      >
        {study.line}
      </p>
    </div>
  );
}

export function ProjectGallery({ heading = true }: { heading?: boolean }) {
  const acticraft = studies[0];
  const fitmatch = studies[1];
  const synthwave = studies[2];

  return (
    <section
      id={heading ? "work" : undefined}
      aria-labelledby={heading ? "selected-work" : undefined}
      aria-label={heading ? undefined : "Selected work"}
      className="px-5 pb-4 md:px-12"
    >
      {heading ? (
        <div className="mb-12 flex items-baseline justify-between border-t border-line pt-7 md:mb-20 md:pt-9">
          <h2 id="selected-work" className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.32em]">
            Selected work
          </h2>
          <p className="pr-[0.2em] font-display text-3xl font-medium italic leading-none text-blue">03</p>
        </div>
      ) : null}

      <article>
        <Link href={`/work/${acticraft.slug}`} className="group grid items-end gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4 md:pb-3">
            <Meta study={acticraft} index="01" />
          </div>
          <div className="md:col-span-8">
            <Frame study={acticraft} sizes="(min-width: 768px) 62vw, 100vw" priority />
          </div>
        </Link>
      </article>

      <article className="mt-24 md:mt-40">
        <Link href={`/work/${fitmatch.slug}`} className="group grid items-start gap-6 md:grid-cols-12 md:gap-8">
          <div className="order-2 md:order-1 md:col-span-7 md:mt-28">
            <Frame study={fitmatch} sizes="(min-width: 768px) 52vw, 100vw" />
          </div>
          <div className="order-1 md:order-2 md:col-span-4 md:col-start-9">
            <Meta study={fitmatch} index="02" />
          </div>
        </Link>
      </article>

      <article className="mt-24 md:mt-36">
        <Link href={`/work/${synthwave.slug}`} className="group grid items-end gap-6 md:grid-cols-12 md:gap-0">
          <div className="relative z-10 md:col-span-5 md:col-start-1 md:row-start-1 md:self-end md:pr-8">
            <Meta study={synthwave} index="03" />
          </div>
          <div className="md:col-span-7 md:col-start-6 md:row-start-1">
            <Frame study={synthwave} sizes="(min-width: 768px) 56vw, 100vw" />
          </div>
        </Link>
      </article>
    </section>
  );
}
