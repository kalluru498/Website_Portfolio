"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

export function ChatbotProvider() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          content: "👋 Hi there! I'm Naveen's AI assistant. Feel free to ask me anything about Naveen's experience, projects, or skills!",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
    const handleOpenChatbot = () => setIsOpen(true);
    document.addEventListener("open-chatbot", handleOpenChatbot);
    return () => {
      document.removeEventListener("open-chatbot", handleOpenChatbot);
    };
  }, [messages.length]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const botResponses: Record<string, string> = {
        "who are you": "I'm an AI assistant for Naveen Kumar Reddy Kalluru, a Full Stack Developer and AI Specialist with expertise in Python, React, Cloud Technologies, and AI/ML development.",
        "what are naveen's skills": "Naveen specializes in Python, JavaScript, TypeScript, Cloud Technologies (AWS, GCP, Azure), and AI/ML development. He's proficient in building scalable web applications and AI-powered solutions.",
        "projects": "Naveen has worked on various projects including AI-powered e-commerce platforms, genomic analysis tools, and enterprise-level applications. You can check them out in the Projects section!",
        "contact": "You can reach Naveen via email at kallurunaveen498@gmail.com or call at +1 (940)-758-4860.",
        "resume": "You can view or download Naveen's resume from the Resume page. It contains his work experience, education, and technical skills.",
        "education": "Naveen holds a Master's degree in Computer Science from the University of North Texas and a BTech in Electronics and Communication Engineering from RGM College of Engineering.",
        "experience": "Naveen has over 4 years of experience in software development, currently working as a Software Development Engineer at BestBuy, with previous roles at Cognizant Technology Solutions and Afferent Technologies."
      };

      let responseText = "I don't have specific information about that. You can explore Naveen's portfolio for more details or contact him directly with your questions!";

      const lowerInput = input.toLowerCase();
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (lowerInput.includes(keyword)) {
          responseText = response;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Bot className="h-6 w-6" />
          )}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
              }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.95,
              transition: {
                duration: 0.2
              }
            }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div className="w-[500px] max-w-[95vw] bg-card border rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary p-4 text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <h3 className="font-medium">Naveen's AI Assistant</h3>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <ScrollArea className="h-[400px] p-4">
                <div className="flex flex-col gap-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted">
                        <div className="flex gap-1">
                          <div className="h-2 w-2 rounded-full bg-foreground/40 animate-bounce" />
                          <div className="h-2 w-2 rounded-full bg-foreground/40 animate-bounce delay-200" />
                          <div className="h-2 w-2 rounded-full bg-foreground/40 animate-bounce delay-500" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              <div className="border-t p-4 bg-card">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Ask me anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    className="min-h-10 resize-none"
                  />
                  <Button size="icon" onClick={handleSendMessage} disabled={isLoading}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Powered by LangChain + OpenAI
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
