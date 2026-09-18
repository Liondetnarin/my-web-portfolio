import { notFound } from "next/navigation";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/lib/data";
export default async function ProjectModalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <ProjectModal>
      <ProjectDetails project={project} modal />
    </ProjectModal>
  );
}
