"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
}

interface CertificationsProps {
  items: CertificationItem[];
}

export function Certifications({ items }: CertificationsProps) {
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
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.issuer}</p>
                  <p className="text-muted-foreground text-sm mt-2">{item.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
} 