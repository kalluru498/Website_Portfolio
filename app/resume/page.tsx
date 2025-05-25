import { Metadata } from "next";
import { ResumeContent } from "@/components/resume/resume-content";

export const metadata: Metadata = {
  title: "Resume | Naveen Kumar Reddy Kalluru",
  description: "Professional experience and skills of Naveen Kumar Reddy Kalluru - Full Stack Developer and AI Specialist.",
};

export default function ResumePage() {
  return <ResumeContent />;
}