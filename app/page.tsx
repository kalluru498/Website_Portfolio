import HeroSection from "@/components/home/hero-section";
import AboutPreview from "@/components/home/about-preview";
import ProjectsPreview from "@/components/home/projects-preview";
import BlogPreview from "@/components/home/blog-preview";
import ContactCTA from "@/components/home/contact-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProjectsPreview />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}