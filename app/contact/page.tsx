"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import ContactForm from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind? Let's discuss how we can work together."
        />
        
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.1, 1)}
            className="contact-info-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">kallurunaveen498@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Texas USA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+1 940 758 4860</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Working Hours</h4>
                  <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-[#4F46E5]/20">
              <h4 className="font-medium mb-4">Book a Meeting</h4>
              <p className="text-muted-foreground mb-4">
                Prefer to schedule a call? Use my Calendly link to find a time that works for both of us.
              </p>
              <Button asChild>
                <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" /> Schedule a Call
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn("left", "tween", 0.1, 1)}
            className="message-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}