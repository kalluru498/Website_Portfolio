'use client';

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Project = {
  id: number;
  title: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) console.error("Fetch error", error);
      else setProjects(data || []);
    };
    fetchData();
  }, []);


  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>{project.title}</div>
      ))}
    </div>
  );
}
