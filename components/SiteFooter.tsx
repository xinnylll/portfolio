export function SiteFooter() {
  return (
    <footer className="px-5 pb-10 pt-24 md:px-12 md:pt-32">
      <div className="border-t border-line pt-7">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
          <p className="font-display text-4xl font-medium italic leading-none tracking-[-0.04em] md:text-5xl">
            Xinyuan Lan
          </p>
          <a
            href="https://github.com/xinnylll"
            className="inline-flex min-h-11 items-center font-sans text-[0.68rem] font-medium uppercase tracking-[0.22em] hover:text-blue"
          >
            GitHub
          </a>
        </div>
        <p className="mt-6 font-sans text-[0.68rem] uppercase tracking-[0.22em] text-blue">2026</p>
      </div>
    </footer>
  );
}
