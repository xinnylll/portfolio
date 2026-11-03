import type { Metadata } from "next";
import { ProjectGallery } from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected studies by Xinyuan Lan: ActiCraft, FitMatch, and Synthwave.",
};

export default function WorkPage() {
  return (
    <main id="content" className="pt-28 md:pt-32">
      <header className="px-5 md:px-12">
        <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.32em] text-blue">Index</p>
        <h1 className="mt-4 font-display text-[clamp(4.6rem,11vw,9.2rem)] font-medium leading-[0.8] tracking-[-0.05em]">
          Selected
          <span className="block italic">work</span>
        </h1>
        <p className="mt-8 max-w-[16em] font-display text-[clamp(1.5rem,2.2vw,2rem)] font-medium italic leading-[1.22]">
          Three studies, opened as the boards they were made from.
        </p>
      </header>
      <div className="mt-16 md:mt-24">
        <ProjectGallery heading={false} />
      </div>
    </main>
  );
}
