"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { fadeIn } from "@/lib/motion";

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.company}</p>
                </div>
                <span className="text-sm text-muted-foreground bg-primary/5 px-3 py-1 rounded-full">
                  {item.period}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {item.description.map((point, idx) => (
                  <li key={idx} className="pl-2">{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
} 