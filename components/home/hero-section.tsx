"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const animatedWords = [
    "AI Full Stack Developer",
    "Product Developer",
    "Cloud Solutions Architect",
    "Python Expert"
  ];

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center py-32 overflow-hidden bg-gradient-to-b from-background to-background/80"
    >
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center"
        >
          <Image
            src="/images/profile.jpg"
            alt="Naveen Kumar Reddy Kalluru"
            fill
            className="object-cover rounded-full"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />  
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 px-4 py-2"
        >
          <span className="inline-block">Naveen Kumar</span>{" "}
          <span className="inline-block">Reddy Kalluru</span>
        </motion.h1>

        <div className="h-16 mb-6">
          <AnimatedText
            text={animatedWords[0]}
            words={animatedWords}
            repeating={true}
            className="text-xl md:text-2xl text-primary font-medium"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground max-w-2xl mb-8 leading-relaxed"
        >
          Full-Stack Software Engineer and Python Developer with 4+ years of experience building scalable web applications, 
          REST APIs, and AI-powered solutions. Specialized in cloud-native environments using AWS, GCP, and Azure. 
          Expert in building AI solutions with OpenAI, Claude, LangChain, and modern development practices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-4 mt-8"
        >
          <Button variant="ghost" size="icon" className="hover:bg-primary/10" asChild aria-label="GitHub">
            <Link href="https://github.com" target="_blank">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-primary/10" asChild aria-label="LinkedIn">
            <Link href="https://linkedin.com/in/nkreddy11625071" target="_blank">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-primary/10" asChild aria-label="Email">
            <Link href="mailto:kallurunaveen498@gmail.com">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-8 w-8 text-primary/60" />
      </motion.div>
    </div>
  );
}