"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const content = (
    <div className="flex items-center gap-1 bg-background/50 backdrop-blur-sm border rounded-full p-1">
      <Button
        size="icon"
        variant="ghost"
        className={`rounded-full h-8 w-8 ${
          theme === 'light' ? 'bg-primary text-primary-foreground' : ''
        }`}
        onClick={() => setTheme("light")}
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Light mode</span>
      </Button>

      <Button
        size="icon"
        variant="ghost"
        className={`rounded-full h-8 w-8 ${
          theme === 'dark' ? 'bg-primary text-primary-foreground' : ''
        }`}
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-4 w-4" />
        <span className="sr-only">Dark mode</span>
      </Button>
    </div>
  );

  if (!mounted) {
    return null;
  }

  return content;
} 