"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeIn } from "@/lib/motion";
import { formatDate } from "@/lib/utils";

interface BlogPost {
  title: string;
  content: string;
  date: string;
  image: string;
  category: string;
}

interface BlogPostProps {
  post: BlogPost;
}

export function BlogPost({ post }: BlogPostProps) {
  const [readingTime, setReadingTime] = useState("5 min read");
  
  useEffect(() => {
    // Calculate reading time (rough estimate)
    const words = post.content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200); // Assuming average reading speed of 200 words per minute
    setReadingTime(`${minutes} min read`);
  }, [post.content]);
  
  // Simple markdown rendering function
  const renderMarkdown = (content: string) => {
    // Split by lines
    const lines = content.split('\n');
    let html = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Headers
      if (line.startsWith('# ')) {
        html += `<h1 class="text-3xl font-bold mt-8 mb-4">${line.substring(2)}</h1>`;
      } else if (line.startsWith('## ')) {
        html += `<h2 class="text-2xl font-bold mt-6 mb-3">${line.substring(3)}</h2>`;
      } else if (line.startsWith('### ')) {
        html += `<h3 class="text-xl font-bold mt-5 mb-2">${line.substring(4)}</h3>`;
      }
      // Code blocks
      else if (line.startsWith('```')) {
        let j = i + 1;
        let codeContent = '';
        while (j < lines.length && !lines[j].startsWith('```')) {
          codeContent += lines[j] + '\n';
          j++;
        }
        html += `<pre class="bg-muted p-4 rounded-md my-4 overflow-x-auto"><code>${codeContent}</code></pre>`;
        i = j;
      }
      // Lists
      else if (line.startsWith('- ')) {
        html += `<ul class="list-disc pl-5 my-2"><li>${line.substring(2)}</li></ul>`;
      }
      // Regular paragraph
      else if (line.length > 0) {
        html += `<p class="my-4">${line}</p>`;
      }
    }
    
    return html;
  };

  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/blog" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back to blog
              </Link>
            </Button>
            
            <Badge className="mb-4">{post.category}</Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {readingTime}
              </div>
            </div>
          </div>
          
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            animate="show"
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />
        </motion.div>
      </div>
    </div>
  );
} 