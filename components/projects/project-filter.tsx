"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/project-card";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  category: string;
  features: string[];
  technologies: string[];
}

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Get unique categories from projects
  const categories = Array.from(
    new Set(["all", ...projects.map((project) => project.category)])
  );
  
  const filteredProjects = projects.filter((project) =>
    selectedCategory === "all" ? true : project.category === selectedCategory
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? "default" : "outline"}
            className={cn(
              "capitalize",
              selectedCategory === category &&
                "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}