import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetails from "@/components/ProjectDetails";
import { projects } from "@/lib/data";
export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const project = getProject((await params).slug); if (!project) return { title: "Project not found" }; return { title: project.title, description: project.description, alternates: { canonical: `/projects/${project.slug}` }, openGraph: { title: `${project.title} | Detnarin Chaiaksorn`, description: project.description, images: project.imageUrl ? [project.imageUrl] : ["/opengraph-image"] } }; }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) { const project = getProject((await params).slug); if (!project) notFound(); return <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12"><ProjectDetails project={project} /></div>; }
