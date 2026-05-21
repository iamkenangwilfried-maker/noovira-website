import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import FinalCTA from "@/components/sections/final-cta";
import { PROJECTS, getProject } from "@/lib/projects";
import CaseStudyClient from "./case-study-client";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Réalisation Noovira AI`,
    description: project.description,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const otherProjects = PROJECTS.filter((p) => p.slug !== params.slug).slice(0, 6);

  return (
    <main>
      <Navbar />
      <CaseStudyClient project={project} otherProjects={otherProjects} />
      <FinalCTA />
      <Footer />
    </main>
  );
}
