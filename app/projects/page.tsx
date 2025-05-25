import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/projects/project-card";

export const metadata: Metadata = {
  title: "Projects | Naveen Kumar Reddy Kalluru",
  description: "Showcase of my projects in AI, full-stack development, and cloud solutions.",
};

const projects = [
  {
    id: 1,
    title: "AI-Powered Smart E-Commerce Platform",
    description: `A cutting-edge e-commerce platform that leverages AI technologies to deliver personalized shopping experiences. 
    The platform integrates OpenAI, Claude, and Amazon Bedrock for intelligent features like smart product recommendations, 
    automated customer support, and predictive inventory management.`,
    features: [
      "AI-powered product recommendations using OpenAI and Claude",
      "Real-time customer support chatbot with context awareness",
      "Predictive inventory management with BigQuery analytics",
      "Serverless architecture using AWS Lambda and EKS",
      "Secure payment processing and user authentication",
      "Responsive design with Next.js and Tailwind CSS"
    ],
    technologies: [
      "OpenAI", "Claude", "AWS Bedrock", "React", "Next.js", "Django",
      "Docker", "Kubernetes", "Terraform", "BigQuery"
    ],
    imageUrl: "/projects/ecommerce.jpg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Genomic Analysis Platform",
    description: `Advanced platform for analyzing mammalian prion disease using machine learning and AI-driven phylogenetic analysis. 
    The platform processes complex genomic data to identify patterns and potential therapeutic targets through sophisticated 
    algorithms and visualization tools.`,
    features: [
      "Machine learning models for gene expression analysis",
      "AI-driven phylogenetic tree construction",
      "Interactive visualization of genomic data",
      "Automated sequence comparison and alignment",
      "Real-time collaboration features",
      "Comprehensive reporting system"
    ],
    technologies: [
      "Python", "Machine Learning", "BLAST", "MUSCLE", "PhyML",
      "Deep Learning", "Pandas", "NumPy", "Plotly"
    ],
    imageUrl: "/projects/genomics.jpg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "BestBuy AI Integration",
    description: `Led the implementation of AI-powered features for BestBuy's e-commerce platform, enhancing customer experience 
    and operational efficiency. The project focused on sentiment analysis, intelligent search, and dynamic recommendation systems.`,
    features: [
      "Real-time sentiment analysis of customer feedback",
      "Intelligent search with natural language processing",
      "Dynamic product recommendations",
      "Multi-cloud infrastructure deployment",
      "Automated CI/CD pipelines",
      "Performance monitoring and analytics"
    ],
    technologies: [
      "AWS", "Azure", "OpenAI", "LangChain", "Terraform",
      "Python", "Docker", "Kubernetes", "Jenkins"
    ],
    imageUrl: "/projects/bestbuy.jpg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Network Rail Maintenance App",
    description: `Developed a comprehensive track maintenance application for Network Rail, focusing on mobile and tablet 
    accessibility. The application streamlined maintenance workflows and improved data accuracy through intuitive interfaces 
    and real-time updates.`,
    features: [
      "Cross-platform mobile and tablet support",
      "Interactive map integration with QGIS",
      "Real-time maintenance tracking",
      "Offline data synchronization",
      "Automated reporting system",
      "Role-based access control"
    ],
    technologies: [
      "Angular", "Ionic", "TypeScript", "QGIS", "Node.js",
      "MongoDB", "Express", "PWA"
    ],
    imageUrl: "/projects/rail.jpg",
    demoUrl: "#",
    githubUrl: "#",
  }
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-20">
        <SectionHeading 
        title="Projects"
        subtitle="Showcasing my work in AI, cloud solutions, and full-stack development"
        />
        
      <div className="grid grid-cols-1 gap-12 mt-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}