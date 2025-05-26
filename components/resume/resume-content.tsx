"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Download, Eye, Printer } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Link from "next/link";

export function ResumeContent() {
  const [activeView, setActiveView] = useState<"preview" | "download">("preview");

  // Resume sections data
  const experience = [
    {
      title: "Software Development Engineer",
      company: "BestBuy",
      location: "Dallas, TX",
      period: "Aug 2024 - Present",
      achievements: [
        "Led the design and deployment of AI-powered web applications using Amazon Bedrock (Claude 3), OpenAI APIs, and Vertex AI for intelligent search, dynamic recommendation, and contextual support automation.",
        "Developed infrastructure-as-code pipelines using Terraform to provision and manage multi-cloud resources on AWS and GCP, including IAM roles, S3, Lambda, EKS clusters, and BigQuery.",
        "Deployed containerized microservices using Docker and Kubernetes (EKS), integrated with GitHub Actions and AWS CodePipeline for continuous delivery and scalable GenAI deployments.",
        "Built and managed serverless APIs to connect product catalogs, user behavior, and feedback data with real-time LLM inference pipelines for personalized shopping experiences.",
        "Implemented sentiment analysis and intent recognition using Azure Text Analytics and Vertex AI models, enabling data-driven customer service decision-making."
      ]
    },
    {
      title: "Junior A/V Tech",
      company: "University of North Texas",
      location: "Denton, TX",
      period: "Jan 2023 - May 2024",
      achievements: [
        "Provided technical assistance for over 250 university events, ensuring successful execution through cross-functional collaboration.",
        "Strengthened problem-solving and adaptability skills by troubleshooting AV systems in high-pressure environments."
      ]
    },
    {
      title: "Programmer Analyst",
      company: "Cognizant Technology Solutions",
      location: "India",
      period: "Dec 2020 - Aug 2022",
      achievements: [
        "Contributed to the development of a track maintenance application for Network Rail, focusing on both mobile and tablet versions using Angular and Ionic frameworks, improving user experience by 25%.",
        "Developed responsive web pages, optimizing performance across devices, boosting user engagement by 30%.",
        "Developed and integrated RESTful APIs for efficient data retrieval and communication between the front-end and back-end, reducing response times by 20%.",
        "Integrated interactive map features within the application, using QGIS tools to enhance spatial data visualization, improving the accuracy of track updates by 15%."
      ]
    },
    {
      title: "Software Developer",
      company: "Afferent Technologies",
      location: "India",
      period: "Apr 2019 - Nov 2020",
      achievements: [
        "Developed and maintained web application using Python, Django, MySQL, and AWS, resulting in a 30% increase in transaction volume.",
        "Integrated AWS services such as S3 and Lambda for payment processing and user data management, improving transaction success rates by 20%.",
        "Implemented responsive UI/UX features using ReactJS, reducing bounce rate by 25% and improving mobile conversion by 15%.",
        "Optimized back-end processes with AWS RDS and EC2, reducing load times by 40%, enhancing user experience during high traffic periods."
      ]
    }
  ];

  const education = [
    {
      degree: "MS in Computer Science",
      institution: "University of North Texas",
      location: "Denton, TX",
      period: "2022 - 2024",
      details: "Focus on AI, Machine Learning, and Cloud Computing"
    },
    {
      degree: "BTech in Electronics and Communication Engineering",
      institution: "RGM College of Engineering",
      location: "India",
      period: "2016 - 2020",
      details: "Graduated with Distinction"
    }
  ];

  const skills = {
    languages: ["Python", "JavaScript", "TypeScript", "C#", "R"],
    frameworks: [
      "Django", "Flask", "FastAPI", "React", "Next.js", "Node.js",
      "Angular", "Ionic", "Express"
    ],
    cloud: [
      "AWS (EC2, S3, Lambda, Bedrock, DynamoDB, RDS, EKS)",
      "Google Cloud Platform (Vertex AI, BigQuery)",
      "Microsoft Azure (Functions, Storage, Cosmos DB, Text Analytics)"
    ],
    ai: [
      "OpenAI API", "Claude", "LangChain", "Prompt Engineering",
      "RAG", "Hugging Face", "Llama", "BERT"
    ],
    databases: [
      "MySQL", "PostgreSQL", "MongoDB", "DynamoDB",
      "SQL Server", "Pinecone", "Chroma DB"
    ],
    devops: [
      "Docker", "Kubernetes", "Terraform", "Jenkins",
      "GitHub Actions", "GitLab CI", "AWS CodePipeline"
    ]
  };

  const certifications = [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-DEV-12345",
    },
    {
      title: "Professional React Developer",
      issuer: "Meta",
      date: "2023",
      credentialId: "META-REACT-67890",
    },
    {
      title: "Advanced JavaScript Certification",
      issuer: "JavaScript Foundation",
      date: "2022",
      credentialId: "JSF-ADV-54321",
    },
  ];

  // Handle download resume
  const handleDownload = () => {
    window.open("/resume.pdf", "_blank");
  };

  // Handle print resume
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Resume" 
          subtitle="My professional experience and qualifications"
        />

        <div className="flex justify-center mb-8 gap-4">
          <Button onClick={() => setActiveView("preview")} variant={activeView === "preview" ? "default" : "outline"}>
            <Eye className="mr-2 h-4 w-4" /> Preview
          </Button>
          <Button onClick={() => setActiveView("download")} variant={activeView === "download" ? "default" : "outline"}>
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
        </div>

        {activeView === "preview" ? (
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto bg-card resume_card border rounded-lg p-8 shadow-sm"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Naveen Kumar Reddy Kalluru</h1>
              <p className="text-muted-foreground mt-2">Full Stack Developer & AI Specialist</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span>Dallas, TX</span>
                  <span className="hidden sm:inline">•</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="break-all">kallurunaveen498@gmail.com</span>
                  <span className="hidden sm:inline">•</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>(940)-758-4860</span>
                </div>
              </div>
            </div>

            <Tabs defaultValue="experience" className="mb-8">
              <TabsList className="flex w-full max-w-md mx-auto mb-6 bg-muted/20 rounded-lg">
                <TabsTrigger 
                  value="experience" 
                  className="flex-1 px-2 py-1.5 text-[13px] font-medium"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger 
                  value="education" 
                  className="flex-1 px-2 py-1.5 text-[13px] font-medium"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger 
                  value="skills" 
                  className="flex-1 px-2 py-1.5 text-[13px] font-medium"
                >
                  Skills
                </TabsTrigger>
                <TabsTrigger 
                  value="certifications" 
                  className="flex-1 px-2 py-1.5 text-[13px] font-medium"
                >
                  Certifications
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="experience">
                <h2 className="text-xl font-bold mb-4">Professional Experience</h2>
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn("up", "tween", index * 0.1, 0.6)}
                      className="border-b pb-6 last:border-b-0 last:pb-0"
                    >
                      <h3 className="text-lg font-bold">{job.title}</h3>
                      <div className="flex justify-between text-muted-foreground mb-2">
                        <span>{job.company}, {job.location}</span>
                        <span>{job.period}</span>
                      </div>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.achievements.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="education">
                <h2 className="text-xl font-bold mb-4">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn("up", "tween", index * 0.1, 0.6)}
                      className="border-b pb-6 last:border-b-0 last:pb-0"
                    >
                      <h3 className="text-lg font-bold">{edu.degree}</h3>
                      <div className="flex justify-between text-muted-foreground mb-2">
                        <span>{edu.institution}, {edu.location}</span>
                        <span>{edu.period}</span>
                      </div>
                      <p>{edu.details}</p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="skills">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill, index) => (
                        <span key={index} className="bg-muted/50 px-4 py-1.5 rounded-lg text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Frameworks & Libraries</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map((skill, index) => (
                        <span key={index} className="bg-muted/50 px-4 py-1.5 rounded-lg text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Cloud Services</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.cloud.map((skill, index) => (
                        <span key={index} className="bg-muted/50 px-4 py-1.5 rounded-lg text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">AI & Machine Learning</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.ai.map((skill, index) => (
                        <span key={index} className="bg-muted/50 px-4 py-1.5 rounded-lg text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Databases & Storage</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.databases.map((skill, index) => (
                        <span key={index} className="bg-muted/50 px-4 py-1.5 rounded-lg text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">DevOps & CI/CD</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.devops.map((skill, index) => (
                        <span key={index} className="bg-muted/50 px-4 py-1.5 rounded-lg text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="certifications">
                <h2 className="text-xl font-bold mb-4">Certifications</h2>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn("up", "tween", index * 0.1, 0.6)}
                      className="border-b pb-4 last:border-b-0 last:pb-0"
                    >
                      <h3 className="font-bold">{cert.title}</h3>
                      <div className="text-muted-foreground">
                        <span>{cert.issuer}</span>
                        <span> • {cert.date}</span>
                      </div>
                      <div className="text-sm">Credential ID: {cert.credentialId}</div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center gap-4 mt-8 print:hidden">
              <Button onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
              <Button variant="outline" onClick={handlePrint}>
                <Printer className="mr-2 h-4 w-4" /> Print
              </Button>
            </div>
          </motion.div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Download My Resume</h3>
                  <p className="text-muted-foreground mb-8">
                    Click the button below to download my resume in PDF format.
                  </p>
                  <Button size="lg" onClick={handleDownload}>
                    <Download className="mr-2 h-5 w-5" /> Download Resume PDF
                  </Button>
                </div>
                
                <div className="border-t pt-8">
                  <h3 className="text-xl font-bold mb-4">Need a different format?</h3>
                  <p className="text-muted-foreground mb-6">
                    If you need my resume in a different format or have any questions, 
                    feel free to contact me directly.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="mailto:kallurunaveen498@gmail.com">Contact Me</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
} 