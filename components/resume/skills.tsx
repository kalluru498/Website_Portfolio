"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface SkillsProps {
  skills: {
    languages: string[];
    frameworks: string[];
    cloud: string[];
    ai: string[];
    databases: string[];
    devops: string[];
  };
}

export function Skills({ skills }: SkillsProps) {
  const categories = {
    languages: "Programming Languages",
    frameworks: "Frameworks & Libraries",
    cloud: "Cloud & Infrastructure",
    ai: "AI & Machine Learning",
    databases: "Databases & Storage",
    devops: "DevOps & CI/CD"
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 text-primary">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(Object.entries(skills) as [keyof typeof skills, string[]][]).map(([key, items], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {categories[key]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 