"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, MessageSquare, Phone, MapPin, Linkedin } from "lucide-react";
import { fadeIn } from "@/lib/motion";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-sm rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto border border-primary/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Looking for an AI Full Stack Developer or Product Developer? I'm always excited to discuss new opportunities 
            and help bring innovative ideas to life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5 text-primary" />
              <Link href="mailto:kallurunaveen498@gmail.com" className="hover:text-primary transition-colors">
                kallurunaveen498@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="h-5 w-5 text-primary" />
              <Link href="tel:+19407584860" className="hover:text-primary transition-colors">
                +1 (940)-758-4860
              </Link>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Dallas, TX</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Linkedin className="h-5 w-5 text-primary" />
              <Link 
                href="https://linkedin.com/in/nkreddy11625071" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                linkedin.com/in/nkreddy11625071
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2" asChild>
              <Link href="/contact">
                <Mail className="h-5 w-5" />
                Send Message
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 gap-2" 
              asChild
            >
              <Link href="https://calendly.com" target="_blank">
                <Calendar className="h-5 w-5" />
                Schedule a Call
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-primary/10 hover:bg-primary/20 gap-2" 
              asChild
            >
              <button onClick={() => document.dispatchEvent(new CustomEvent('open-chatbot'))}>
                <MessageSquare className="h-5 w-5" />
                Chat with AI
              </button>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}