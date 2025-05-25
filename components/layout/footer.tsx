import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Naveen Kumar Reddy Kalluru</h3>
            <p className="text-muted-foreground mb-4">
              AI Full Stack Developer and Product Developer specialized in building innovative digital solutions.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild aria-label="GitHub">
                <Link href="https://github.com" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Twitter">
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Email">
                <Link href="mailto:naveen@example.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div>
            
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-4">
              Looking for an AI Full Stack Developer or Product Developer? Let's discuss how I can help bring your ideas to life.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Naveen Kumar Reddy Kalluru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}