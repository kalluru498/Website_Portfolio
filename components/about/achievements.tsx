"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface AchievementItem {
  title: string;
  description: string;
  date: string;
}

interface AchievementsProps {
  items: AchievementItem[];
}

export function Achievements({ items }: AchievementsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                    <span className="text-sm text-muted-foreground bg-primary/5 px-2 py-0.5 rounded-full">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
} 