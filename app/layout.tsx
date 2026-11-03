import type { Metadata } from "next";
import { Bodoni_Moda, Geist } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

const display = Bodoni_Moda({
  subsets: ["latin"],
  weight: "500",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-bodoni",
});

const sans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Xinyuan Lan",
    template: "%s — Xinyuan Lan",
  },
  description:
    "Designing curious interactions between humans, technology, and everything in between.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
