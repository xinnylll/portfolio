import type { Metadata } from "next";
import Link from "next/link";
import { studies } from "@/lib/studies";

export const metadata: Metadata = {
  title: "About",
  description: "Xinyuan Lan, interaction designer and creative technologist.",
};

export default function AboutPage() {
  return (
    <main id="content" className="px-5 pt-28 md:px-12 md:pt-32">
      <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.32em] text-blue">About</p>
      <h1 className="mt-5 max-w-[14ch] font-display text-[clamp(3.2rem,7vw,6.6rem)] font-medium italic leading-[0.92] tracking-[-0.035em]">
        Designing curious interactions between humans, technology, and everything in between.
      </h1>
      <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-12 md:gap-8">
        <div className="max-w-[42ch] space-y-5 font-sans text-[15px] leading-relaxed md:col-span-5">
          <p>
            Xinyuan Lan is an interaction designer and creative technologist. The practice crosses HCI,
            creative computing, and experimental digital experiences.
          </p>
          <p>Three studies are published here, each as the boards it was made from.</p>
        </div>
        <ol className="md:col-span-6 md:col-start-7">
          {studies.map((study, index) => (
            <li key={study.slug} className="border-t border-line py-7">
              <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.22em] text-blue">
                {String(index + 1).padStart(2, "0")}
                {study.year ? ` / ${study.year}` : ""}
              </p>
              <h2 className="mt-2 font-display text-5xl font-medium italic leading-none tracking-[-0.04em] md:text-6xl">
                <Link href={`/work/${study.slug}`} className="hover:text-blue">
                  {study.title}
                </Link>
              </h2>
              <p className="mt-3 font-sans text-[0.72rem] font-medium uppercase tracking-[0.16em]">
                {study.category}
              </p>
              <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed">{study.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
