"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Note: In a real implementation, you would replace these with your actual EmailJS credentials
      // These are placeholder values for demonstration
      const serviceId = "your_service_id";
      const templateId = "your_template_id";
      const publicKey = "your_public_key";
      
      // Uncomment this in production with real credentials
      // await emailjs.send(serviceId, templateId, data, publicKey);
      
      // Simulating API call for demonstration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto contact_card"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input 
            id="name" 
            placeholder="Your Name" 
            {...register("name")} 
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="email">Your Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your.email@example.com" 
            {...register("email")} 
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="subject">Subject</Label>
          <Input 
            id="subject" 
            placeholder="Project Inquiry" 
            {...register("subject")} 
            className={errors.subject ? "border-destructive" : ""}
          />
          {errors.subject && (
            <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea 
            id="message" 
            placeholder="Hello, I'd like to discuss a project idea..." 
            rows={6} 
            {...register("message")} 
            className={errors.message ? "border-destructive" : ""}
          />
          {errors.message && (
            <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
          )}
        </div>
        
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </motion.div>
  );
}