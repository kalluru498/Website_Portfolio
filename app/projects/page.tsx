import { createClient } from '@supabase/supabase-js';
import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/projects/project-card";

export const metadata: Metadata = {
  title: "Projects | Naveen Kumar Reddy Kalluru",
  description: "Showcase of my projects in AI, full-stack development, and cloud solutions.",
};

// Setup Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function ProjectsPage() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching projects:", error.message);
    return <div className="text-red-600">Failed to load projects.</div>;
  }

  return (
    <main className="container mx-auto px-4 py-20">
      <SectionHeading 
        title="Projects"
        subtitle="Showcasing my work in AI, cloud solutions, and full-stack development"
      />
      
      <div className="grid grid-cols-1 gap-12 mt-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
