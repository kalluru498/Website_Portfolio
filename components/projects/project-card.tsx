"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
    id: number;
    title: string;
    description: string;
  features: string[];
  technologies: string[];
    imageUrl: string;
    demoUrl: string;
    githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          <div className="relative h-[300px] lg:h-full rounded-lg overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
              className="object-cover"
          />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-2">Key Features</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
        </div>

            <div>
              <h4 className="font-semibold text-primary mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {tech}
              </Badge>
            ))}
          </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 gap-2" asChild>
                <Link href={project.demoUrl} target="_blank">
                  <ExternalLink className="h-4 w-4" />
                  View Demo
              </Link>
            </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 gap-2"
                asChild
              >
                <Link href={project.githubUrl} target="_blank">
                  <Github className="h-4 w-4" />
                  Source Code
              </Link>
            </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}