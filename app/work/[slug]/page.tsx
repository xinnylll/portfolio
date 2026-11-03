import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StudyView } from "@/components/StudyView";
import { getStudy, studies } from "@/lib/studies";

type Params = { slug: string };

export function generateStaticParams() {
  return studies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getStudy(slug);
  if (!study) return { title: "Work" };
  return { title: study.title, description: study.line };
}

export default async function StudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const study = getStudy(slug);
  if (!study) notFound();

  const index = studies.findIndex((item) => item.slug === study.slug);
  const next = studies[(index + 1) % studies.length];

  return <StudyView study={study} next={next} />;
}
