"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/motion";
// Remove metadata since this is a client component
import { Timeline } from "@/components/about/timeline";
import { Achievements } from "@/components/about/achievements";

const metadata = {
  title: "About | Naveen Kumar Reddy Kalluru",
  description: "Full-Stack Software Engineer and AI Developer with expertise in building scalable web applications and AI-powered solutions."
};

const workExperience = [
  {
    title: "Software Development Engineer",
    company: "BestBuy",
    period: "Aug 2024 - Present",
    description: [
      "Led the design and deployment of AI-powered web applications using Amazon Bedrock (Claude 3), OpenAI APIs, and Vertex AI",
      "Developed infrastructure-as-code pipelines using Terraform for multi-cloud resources",
      "Implemented sentiment analysis and intent recognition using Azure Text Analytics",
      "Built and managed serverless APIs for personalized shopping experiences"
    ]
  },
  {
    title: "Junior A/V Tech",
    company: "University of North Texas",
    period: "Jan 2023 - May 2024",
    description: [
      "Provided technical assistance for over 250 university events",
      "Strengthened problem-solving skills in high-pressure environments"
    ]
  },
  {
    title: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    period: "Dec 2020 - Aug 2022",
    description: [
      "Developed track maintenance application using Angular and Ionic frameworks",
      "Improved user engagement by 30% through responsive web development",
      "Integrated interactive map features using QGIS tools",
      "Implemented CI/CD pipelines reducing code delivery time by 50%"
    ]
  },
  {
    title: "Software Developer",
    company: "Afferent Technologies",
    period: "Apr 2019 - Nov 2020",
    description: [
      "Developed web applications using Python, Django, MySQL, and AWS",
      "Integrated AWS services for payment processing and data management",
      "Implemented responsive UI/UX features using ReactJS",
      "Optimized back-end processes reducing load times by 40%"
    ]
  }
];

const certifications = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "2023"
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023"
  }
];

const achievements = [
  {
    title: "Smart India Hackathon 2019 Finalist",
    description: "Competed in India's largest hackathon at NIT Trichy",
    date: "2019"
  },
  {
    title: "MultiCloud, DevOps, and AI Challenge",
    description: "Certificate of Achievement",
    date: "2023"
  },
  {
    title: "TekHack 2018",
    description: "24-hour national hackathon on IoT, IBM Watson, and AI",
    date: "2018"
  }
];

export default function AboutPage() {
  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "GraphQL", level: 80 },
    { name: "PostgreSQL", level: 75 },
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "University of Technology",
      period: "2016 - 2018",
      description: "Specialized in Web Technologies and Software Engineering.",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "State University",
      period: "2012 - 2016",
      description: "Graduated with honors, focused on programming and web development.",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-20">
        <SectionHeading 
          title="About Me" 
        subtitle="My Professional Journey and Achievements"
        />

      <div className="grid gap-16 mt-12">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-primary">Professional Experience</h2>
          <Timeline items={workExperience} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-primary">Education</h2>
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/10">
              <h3 className="text-xl font-semibold mb-2">MS in Computer Science</h3>
              <p className="text-muted-foreground">University of North Texas</p>
              <p className="text-sm text-muted-foreground">2022 - 2024</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/10">
              <h3 className="text-xl font-semibold mb-2">BTech in Electronics and Communication Engineering</h3>
              <p className="text-muted-foreground">RGM College of Engineering</p>
              <p className="text-sm text-muted-foreground">2016 - 2020</p>
                </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-primary">Certifications</h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/10">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.date}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-primary">Achievements & Hackathons</h2>
          <Achievements items={achievements} />
        </section>
      </div>
    </main>
  );
}