"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeIn, staggerContainer } from "@/lib/motion";

export default function AboutPreview() {
  const skills = [
    "Python", "Django", "Flask", "FastAPI",
    "AWS", "GCP", "Azure", "Docker",
    "Kubernetes", "OpenAI", "LangChain", "React",
    "TypeScript", "Node.js", "MongoDB", "PostgreSQL",
    "Terraform", "CI/CD", "AI/ML", "RAG"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-muted/10">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="Experienced Full-Stack Developer & AI Specialist"
        />

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={fadeIn("right", "tween", 0.1, 1)}>
            <h3 className="text-2xl font-bold mb-4 text-primary">Professional Journey</h3>
            <p className="text-muted-foreground mb-6">
              As a Full-Stack Software Engineer and Python Developer with over 4 years of experience, 
              I specialize in building scalable web applications and AI-powered solutions. Currently at 
              BestBuy, I lead the development of AI-powered applications using cutting-edge technologies 
              like Amazon Bedrock, OpenAI APIs, and Vertex AI.
            </p>
            <p className="text-muted-foreground mb-6">
              My expertise spans across cloud platforms (AWS, GCP, Azure) and modern development practices, 
              including infrastructure-as-code, containerization, and CI/CD pipelines. I've successfully 
              implemented sentiment analysis features and built intelligent search systems that have 
              significantly improved user experiences.
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/about">View Full Experience</Link>
            </Button>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.1, 1)} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Technical Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                    className="bg-primary/10 border-primary/20 border px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary">Education</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-medium">MS in Computer Science</span>
                  <br />University of North Texas (2022-2024)
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium">BTech in Electronics and Communication Engineering</span>
                  <br />RGM College of Engineering (2016-2020)
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}