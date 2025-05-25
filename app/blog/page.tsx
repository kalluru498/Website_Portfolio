"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, Search } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { formatDate } from "@/lib/utils";

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Building a Portfolio with Next.js and Framer Motion",
    excerpt: "Learn how to create an animated portfolio site using Next.js 14 and Framer Motion for stunning transitions and animations that will make your work stand out.",
    date: "2025-03-15",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
    category: "Web Development",
    slug: "building-portfolio-nextjs-framer-motion",
  },
  {
    id: 2,
    title: "The Power of TypeScript in Modern Web Development",
    excerpt: "Explore how TypeScript improves code quality and developer experience in React applications with practical examples and best practices.",
    date: "2025-02-28",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
    category: "TypeScript",
    slug: "power-of-typescript-modern-web-development",
  },
  {
    id: 3,
    title: "Implementing AI Chatbots with LangChain and OpenAI",
    excerpt: "A step-by-step guide to creating intelligent chatbots using LangChain and OpenAI's powerful models for your web applications.",
    date: "2025-02-10",
    image: "https://images.pexels.com/photos/8438923/pexels-photo-8438923.jpeg",
    category: "AI",
    slug: "implementing-ai-chatbots-langchain-openai",
  },
  {
    id: 4,
    title: "Responsive Design Principles Every Developer Should Know",
    excerpt: "Master the fundamentals of responsive web design to create websites that look great on any device, from mobile phones to large desktop screens.",
    date: "2025-01-25",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    category: "CSS",
    slug: "responsive-design-principles",
  },
  {
    id: 5,
    title: "Getting Started with Tailwind CSS: A Practical Guide",
    excerpt: "Learn how to set up and use Tailwind CSS in your projects to streamline your workflow and create beautiful, consistent user interfaces.",
    date: "2025-01-15",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
    category: "CSS",
    slug: "getting-started-tailwind-css",
  },
  {
    id: 6,
    title: "State Management in React: Context API vs. Redux",
    excerpt: "A comprehensive comparison of different state management approaches in React applications to help you choose the right one for your project.",
    date: "2024-12-20",
    image: "https://images.pexels.com/photos/11035543/pexels-photo-11035543.jpeg",
    category: "React",
    slug: "state-management-react",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
                         
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Blog" 
          subtitle="Thoughts, tutorials, and insights on web development"
        />
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {filteredPosts.length > 0 ? (
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={fadeIn("up", "tween", index * 0.1, 0.6)}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge>{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
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
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-bold mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try changing your search query or category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}