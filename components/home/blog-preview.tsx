"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { formatDate } from "@/lib/utils";

const recentPosts = [
  {
    id: 1,
    title: "Building a Portfolio with Next.js and Framer Motion",
    excerpt: "Learn how to create an animated portfolio site using Next.js 14 and Framer Motion for stunning transitions.",
    date: "2025-03-15",
    category: "Web Development",
    slug: "building-portfolio-nextjs-framer-motion",
  },
  {
    id: 2,
    title: "The Power of TypeScript in Modern Web Development",
    excerpt: "Explore how TypeScript improves code quality and developer experience in React applications.",
    date: "2025-02-28",
    category: "TypeScript",
    slug: "power-of-typescript-modern-web-development",
  },
  {
    id: 3,
    title: "Implementing AI Chatbots with LangChain and OpenAI",
    excerpt: "A step-by-step guide to creating intelligent chatbots using LangChain and OpenAI's powerful models.",
    date: "2025-02-10",
    category: "AI",
    slug: "implementing-ai-chatbots-langchain-openai",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Latest Articles" 
          subtitle="Thoughts, tutorials, and insights on web development"
        />

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={fadeIn("up", "tween", index * 0.1, 0.6)}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex-grow">
                  <Badge className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(post.date)}
                  </div>
                  <Button size="sm" variant="ghost" asChild>
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/blog" className="flex items-center gap-2">
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}