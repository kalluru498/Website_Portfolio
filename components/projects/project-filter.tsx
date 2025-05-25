"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/projects/project-card";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

interface ProjectFilterProps {
  projects: Project[];
}

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const allCategories = ["All", ...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {allCategories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}