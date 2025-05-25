"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 text-primary">Professional Experience</h2>
      <div className="space-y-6">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <span className="text-sm bg-primary/5 px-3 py-1 rounded-full text-primary">
                      {job.period}
                    </span>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="pl-2">{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 