"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
}

interface EducationProps {
  education: EducationItem[];
}

export function Education({ education }: EducationProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 text-primary">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <span className="bg-primary/5 px-3 py-1 rounded-full text-primary">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-3 text-muted-foreground">{edu.details}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 