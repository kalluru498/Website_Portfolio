"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/motion";

const featuredProjects = [
  {
    id: 1,
    title: "AI-Powered Smart E-Commerce Platform",
    description: "A cutting-edge e-commerce platform leveraging OpenAI, Claude, and Amazon Bedrock for personalized shopping experiences, smart chatbot support, and predictive inventory management.",
    imageUrl: "/projects/ecommerce.jpg",
    tags: ["OpenAI", "Claude", "AWS Bedrock", "React", "Next.js", "Django", "Docker", "Kubernetes"],
    demoUrl: "#",
    githubUrl: "https://github.com/kalluru498/cloudmart",
  },
  {
    id: 2,
    title: "Genomic Analysis Platform",
    description: "Advanced platform for analyzing mammalian prion disease using machine learning and AI-driven phylogenetic analysis tools, enabling breakthrough insights in genomic research.",
    imageUrl: "/projects/genomics.jpg",
    tags: ["Machine Learning", "Python", "BLAST", "MUSCLE", "PhyML", "Deep Learning"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "BestBuy AI Integration",
    description: "Led the implementation of AI-powered features including sentiment analysis, intelligent search, and dynamic recommendation systems using Amazon Bedrock and Azure Text Analytics.",
    imageUrl: "/projects/bestbuy.jpg",
    tags: ["AWS", "Azure", "OpenAI", "LangChain", "Terraform", "Python"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Innovative solutions powered by AI and modern technologies"
        />

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn("up", "tween", index * 0.1, 0.6)}
            >
              <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-300 border-primary/10 bg-background/50 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="font-normal bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                      <Link href={project.demoUrl} target="_blank">View Demo</Link>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary/10" 
                      asChild
                    >
                      <Link href={project.githubUrl} target="_blank">Source Code</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/projects" className="flex items-center gap-2">
              Explore All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}