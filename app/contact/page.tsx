import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to Xinyuan Lan on GitHub.",
};

export default function ContactPage() {
  return (
    <main id="content" className="px-5 pt-28 md:px-12 md:pt-32">
      <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.32em] text-blue">Contact</p>
      <h1 className="mt-5 max-w-[10ch] font-display text-[clamp(4rem,10vw,8.5rem)] font-medium italic leading-[0.86] tracking-[-0.045em]">
        The public way to write.
      </h1>
      <p className="mt-10 max-w-[28ch] font-sans text-[15px] leading-relaxed">GitHub is the public address.</p>
      <p className="mt-8">
        <a
          href="https://github.com/xinnylll"
          className="inline-flex min-h-11 items-center font-display text-[clamp(2rem,4vw,3.4rem)] font-medium italic leading-none tracking-[-0.03em] underline decoration-blue decoration-1 underline-offset-[0.18em] hover:text-blue"
        >
          github.com/xinnylll
        </a>
      </p>
    </main>
  );
}
