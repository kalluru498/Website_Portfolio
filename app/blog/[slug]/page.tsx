import { BlogPost } from "@/components/blog/blog-post";
import { Metadata } from "next";

// Mock blog posts data (same as in blog/page.tsx)
const blogPosts = [
	{
		id: 1,
		title: "Building a Portfolio with Next.js and Framer Motion",
		excerpt: "Learn how to create an animated portfolio site using Next.js 14 and Framer Motion for stunning transitions and animations that will make your work stand out.",
		date: "2025-03-15",
		image: "/blog/nextjs-portfolio.jpg",
		category: "Web Development",
		slug: "building-portfolio-nextjs-framer-motion",
		content: `
      # Building a Portfolio with Next.js and Framer Motion

      Creating a portfolio website is an essential step for any web developer to showcase their skills and projects. With modern frameworks like Next.js and animation libraries like Framer Motion, you can create stunning, interactive experiences that make your portfolio stand out.

      ## Why Next.js?

      Next.js is a React framework that provides a great developer experience with features like:

      - Server-side rendering
      - Static site generation
      - Fast refresh
      - Built-in routing
      - API routes
      - TypeScript support

      These features make it ideal for building a performant and SEO-friendly portfolio website.

      ## Adding Animations with Framer Motion

      Framer Motion is a production-ready animation library for React that makes it easy to create complex animations. Here's how you can use it in your Next.js project:

      \`\`\`jsx
      import { motion } from 'framer-motion';

      export default function AnimatedComponent() {
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm an animated component!
          </motion.div>
        );
      }
      \`\`\`

      ## Creating Scroll Animations

      One of the most popular effects for portfolio websites is revealing content as the user scrolls down the page. You can achieve this with Framer Motion's \`whileInView\` prop:

      \`\`\`jsx
      import { motion } from 'framer-motion';

      export default function ScrollRevealSection() {
        return (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="my-section"
          >
            This content will animate in when it comes into view!
          </motion.section>
        );
      }
      \`\`\`

      ## Staggered Animations for Lists

      When displaying a list of projects or skills, staggered animations can create a polished, professional look:

      \`\`\`jsx
      import { motion } from 'framer-motion';

      export default function ProjectsList() {
        const projects = [
          { id: 1, title: "Project 1" },
          { id: 2, title: "Project 2" },
          { id: 3, title: "Project 3" },
        ];

        return (
          <div>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {project.title}
              </motion.div>
            ))}
          </div>
        );
      }
      \`\`\`

      ## Page Transitions

      Next.js 14 has improved support for page transitions. Combined with Framer Motion, you can create smooth transitions between pages:

      \`\`\`jsx
      'use client';

      import { motion } from 'framer-motion';

      export default function Template({ children }) {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        );
      }
      \`\`\`

      ## Conclusion

      By combining Next.js 14 with Framer Motion, you can create a portfolio website that not only showcases your work but also demonstrates your ability to create modern, interactive web experiences. The animations add a layer of polish and engagement that can help your portfolio stand out to potential clients or employers.

      Remember that animations should enhance the user experience, not distract from it. Use them purposefully to guide attention and create a cohesive, professional presentation of your work.
    `,
	},
	{
		id: 2,
		title: "The Power of TypeScript in Modern Web Development",
		excerpt: "Explore how TypeScript improves code quality and developer experience in React applications with practical examples and best practices.",
		date: "2025-02-28",
		image: "/blog/typescript.jpg",
		category: "TypeScript",
		slug: "power-of-typescript-modern-web-development",
		content: `
      # The Power of TypeScript in Modern Web Development

      TypeScript has revolutionized how we write JavaScript applications by adding static types and powerful features that help catch errors early and improve code maintainability.

      ## Key Features

      1. **Static Types**: Add type annotations to catch errors at compile time.
      2. **Interface Definitions**: Define clear contracts for object shapes.
      3. **Generics**: Create reusable components that work with different types.
      4. **Type Inference**: Let TypeScript figure out types automatically.
      5. **Union Types**: Combine multiple types into one.

      ## Code Examples

      Here's a simple example of TypeScript interfaces and types:

      \`\`\`typescript
      interface User {
        name: string;
        age?: number;
        email: string;
      }

      type RequiredUser = Required<User>;
      \`\`\`

      ## Best Practices

      1. **Define prop types explicitly**: Always define prop types for components to make them self-documenting.
      2. **Use strict mode**: Enable \`strict: true\` in your \`tsconfig.json\` to catch more potential issues.
      3. **Avoid \`any\`**: The \`any\` type defeats the purpose of TypeScript. Use more specific types when possible.
      4. **Create reusable interfaces**: Define common interfaces in separate files for reuse across components.
      5. **Use generics for reusable components**: Make components more flexible with generic types.

      ## Conclusion

      TypeScript has become an essential tool in modern web development, especially for large-scale applications. The initial learning curve is well worth the long-term benefits in code quality, maintainability, and developer productivity. By adopting TypeScript in your React projects, you're investing in code that's more robust, easier to understand, and simpler to maintain over time.
    `,
	},
	{
		id: 3,
		title: "Implementing AI Chatbots with LangChain and OpenAI",
		excerpt: "A step-by-step guide to creating intelligent chatbots using LangChain and OpenAI's powerful models for your web applications.",
		date: "2025-02-10",
		image: "/blog/ai-chatbot.jpg",
		category: "AI",
		slug: "implementing-ai-chatbots-langchain-openai",
		content: `
      # Implementing AI Chatbots with LangChain and OpenAI

      AI chatbots have become increasingly popular for providing user support, enhancing user engagement, and automating tasks on websites. With the combination of LangChain and OpenAI's powerful language models, developers can now create sophisticated chatbots with relatively little effort.

      ## What is LangChain?

      LangChain is a framework designed to simplify the development of applications powered by language models. It provides a standard interface for chains, lots of integrations with other tools, and end-to-end chains for common applications.

      Key features include:

      - Chain of thought reasoning
      - Document retrieval for context
      - Conversation memory
      - Agent frameworks for complex tasks

      ## Setting Up Your Environment

      First, you'll need to install the necessary packages:

      \`\`\`bash
      npm install langchain @langchain/openai
      \`\`\`

      You'll also need an OpenAI API key, which you can get by signing up at [OpenAI's platform](https://platform.openai.com/).

      ## Basic Chatbot Implementation

      Here's a simple implementation of a chatbot using LangChain and OpenAI:

      \`\`\`typescript
      import { OpenAI } from '@langchain/openai';
      import { ConversationChain } from 'langchain/chains';
      import { BufferMemory } from 'langchain/memory';

      // Initialize the language model
      const model = new OpenAI({
        openAIApiKey: process.env.OPENAI_API_KEY,
        temperature: 0.7,
        modelName: 'gpt-4', // or 'gpt-3.5-turbo'
      });

      // Set up the conversation chain with memory
      const memory = new BufferMemory();
      const chain = new ConversationChain({
        llm: model,
        memory: memory,
      });

      // Function to get a response from the chatbot
      async function getChatbotResponse(userInput: string) {
        const response = await chain.call({
          input: userInput,
        });
        return response.response;
      }

      // Example usage
      async function chatExample() {
        const response1 = await getChatbotResponse("Hello, I'm John. What can you help me with?");
        console.log("Chatbot:", response1);
        
        const response2 = await getChatbotResponse("Can you tell me more about your services?");
        console.log("Chatbot:", response2);
      }

      chatExample();
      \`\`\`

      ## Creating a Specialized Chatbot with Custom Knowledge

      To make your chatbot more useful, you can provide it with specific knowledge about your business, products, or services:

      \`\`\`typescript
      import { OpenAI } from '@langchain/openai';
      import { ConversationChain } from 'langchain/chains';
      import { BufferMemory } from 'langchain/memory';
      import { PromptTemplate } from 'langchain/prompts';

      // Initialize the language model
      const model = new OpenAI({
        openAIApiKey: process.env.OPENAI_API_KEY,
        temperature: 0.7,
        modelName: 'gpt-4',
      });

      // Define custom knowledge about your portfolio
      const customKnowledge = \`
        Name: John Doe
        Role: Full Stack Developer
        Experience: 5+ years in web development
        Skills: JavaScript, TypeScript, React, Next.js, Node.js, Tailwind CSS
        Projects: 
          - E-Commerce Platform: Built with Next.js, React, and Stripe
          - Task Management App: Built with React, Node.js, and MongoDB
          - AI-Powered Blog Platform: Built with Next.js, OpenAI, and PostgreSQL
        Contact: hello@johndoe.com
        Available for: Freelance projects, full-time positions, and consultations
      \`;

      // Create a custom prompt template
      const promptTemplate = new PromptTemplate({
        template: \`
          You are an AI assistant for John Doe's portfolio website.
          Use the following information to answer visitor questions:
          
          {customKnowledge}
          
          Current conversation:
          {history}
          Human: {input}
          AI:
        \`,
        inputVariables: ['history', 'input'],
        partialVariables: { customKnowledge },
      });

      // Set up the conversation chain with memory and custom prompt
      const memory = new BufferMemory();
      const chain = new ConversationChain({
        llm: model,
        memory: memory,
        prompt: promptTemplate,
      });

      // Function to get a response from the chatbot
      async function getChatbotResponse(userInput: string) {
        const response = await chain.call({
          input: userInput,
        });
        return response.response;
      }
      \`\`\`

      ## Integrating with React

      Here's a simple React component for a chatbot interface:

      \`\`\`tsx
      import React, { useState, useEffect, useRef } from 'react';

      interface Message {
        content: string;
        sender: 'user' | 'bot';
      }

      const ChatbotInterface: React.FC = () => {
        const [messages, setMessages] = useState<Message[]>([]);
        const [input, setInput] = useState('');
        const [isLoading, setIsLoading] = useState(false);
        const messagesEndRef = useRef<HTMLDivElement>(null);

        // Scroll to bottom of messages
        const scrollToBottom = () => {
          messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        };

        useEffect(() => {
          scrollToBottom();
        }, [messages]);

        // Add initial welcome message
        useEffect(() => {
          setMessages([
            {
              content: "Hi there! I'm John's AI assistant. How can I help you today?",
              sender: 'bot',
            },
          ]);
        }, []);

        const handleSendMessage = async () => {
          if (!input.trim()) return;

          // Add user message
          const userMessage: Message = {
            content: input,
            sender: 'user',
          };
          setMessages((prev) => [...prev, userMessage]);
          setInput('');
          setIsLoading(true);

          try {
            // Call your API endpoint that connects to LangChain
            const response = await fetch('/api/chatbot', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ message: input }),
            });

            const data = await response.json();

            // Add bot response
            const botMessage: Message = {
              content: data.response,
              sender: 'bot',
            };
            setMessages((prev) => [...prev, botMessage]);
          } catch (error) {
            console.error('Error getting chatbot response:', error);
            // Add error message
            const errorMessage: Message = {
              content: 'Sorry, I encountered an error. Please try again later.',
              sender: 'bot',
            };
            setMessages((prev) => [...prev, errorMessage]);
          } finally {
            setIsLoading(false);
          }
        };

        return (
          <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="font-medium">John's AI Assistant</h3>
            </div>
            
            <div className="h-80 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={\`mb-4 \${
                    message.sender === 'user' ? 'text-right' : 'text-left'
                  }\`}
                >
                  <div
                    className={\`inline-block p-2 rounded-lg \${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }\`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-left mb-4">
                  <div className="inline-block p-2 rounded-lg bg-gray-200 text-gray-800">
                    <div className="flex space-x-1">
                      <div className="animate-bounce h-2 w-2 bg-gray-500 rounded-full"></div>
                      <div className="animate-bounce h-2 w-2 bg-gray-500 rounded-full delay-100"></div>
                      <div className="animate-bounce h-2 w-2 bg-gray-500 rounded-full delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef}></div>
            </div>
            
            <div className="border-t border-gray-200 p-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        );
      };

      export default ChatbotInterface;
      \`\`\`

      ## API Route for Next.js

      Create an API route to handle chatbot requests:

      \`\`\`typescript
      // pages/api/chatbot.ts
      import type { NextApiRequest, NextApiResponse } from 'next';
      import { OpenAI } from '@langchain/openai';
      import { ConversationChain } from 'langchain/chains';
      import { BufferMemory } from 'langchain/memory';
      import { PromptTemplate } from 'langchain/prompts';

      // Initialize the conversation chains for each session
      const conversations = new Map();

      export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse
      ) {
        if (req.method !== 'POST') {
          return res.status(405).json({ message: 'Method not allowed' });
        }

        try {
          const { message, sessionId = 'default' } = req.body;

          // Get or create a conversation for this session
          if (!conversations.has(sessionId)) {
            // Initialize the language model
            const model = new OpenAI({
              openAIApiKey: process.env.OPENAI_API_KEY,
              temperature: 0.7,
              modelName: 'gpt-4',
            });

            // Define custom knowledge
            const customKnowledge = \`
              Name: John Doe
              Role: Full Stack Developer
              Experience: 5+ years in web development
              Skills: JavaScript, TypeScript, React, Next.js, Node.js, Tailwind CSS
              Projects: 
                - E-Commerce Platform: Built with Next.js, React, and Stripe
                - Task Management App: Built with React, Node.js, and MongoDB
                - AI-Powered Blog Platform: Built with Next.js, OpenAI, and PostgreSQL
              Contact: hello@johndoe.com
              Available for: Freelance projects, full-time positions, and consultations
            \`;

            // Create a custom prompt template
            const promptTemplate = new PromptTemplate({
              template: \`
                You are an AI assistant for John Doe's portfolio website.
                Use the following information to answer visitor questions:
                
                {customKnowledge}
                
                Current conversation:
                {history}
                Human: {input}
                AI:
              \`,
              inputVariables: ['history', 'input'],
              partialVariables: { customKnowledge },
            });

            // Set up the conversation chain with memory and custom prompt
            const memory = new BufferMemory();
            const chain = new ConversationChain({
              llm: model,
              memory: memory,
              prompt: promptTemplate,
            });

            conversations.set(sessionId, chain);
          }

          const chain = conversations.get(sessionId);
          const response = await chain.call({ input: message });

          return res.status(200).json({ response: response.response });
        } catch (error) {
          console.error('Chatbot API error:', error);
          return res.status(500).json({ message: 'Internal server error', error: error.message });
        }
      }
      \`\`\`

      ## Conclusion

      By combining LangChain with OpenAI's powerful language models, you can create sophisticated AI chatbots that enhance your website's user experience. The chatbot can provide personalized information about your skills, projects, and services, helping visitors learn more about you and potentially leading to new opportunities.

      Remember to monitor your API usage, as OpenAI charges based on the number of tokens processed. You may want to implement rate limiting and other optimizations to control costs while providing a great user experience.
    `,
	},
	{
		id: 4,
		title: "Responsive Design Principles Every Developer Should Know",
		excerpt: "Master the fundamentals of responsive web design to create websites that look great on any device, from mobile phones to large desktop screens.",
		date: "2025-01-25",
		image: "/blog/responsive-design.jpg",
		category: "CSS",
		slug: "responsive-design-principles",
		content: "Full article content here...",
	},
	{
		id: 5,
		title: "Getting Started with Tailwind CSS: A Practical Guide",
		excerpt: "Learn how to set up and use Tailwind CSS in your projects to streamline your workflow and create beautiful, consistent user interfaces.",
		date: "2025-01-15",
		image: "/blog/tailwind.jpg",
		category: "CSS",
		slug: "getting-started-tailwind-css",
		content: "Full article content here...",
	},
	{
		id: 6,
		title: "State Management in React: Context API vs. Redux",
		excerpt: "A comprehensive comparison of different state management approaches in React applications to help you choose the right one for your project.",
		date: "2024-12-20",
		image: "/blog/react-state.jpg",
		category: "React",
		slug: "state-management-react",
		content: "Full article content here...",
	},
];

type Props = {
	params: Promise<{
		slug: string;
	}>;
};

export default async function BlogPostPage({ params }: Props) {
	const resolvedParams = await params;
	const post = blogPosts.find((post) => post.slug === resolvedParams.slug);
	if (!post) return null;
	return <BlogPost post={post} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const resolvedParams = await params;
	const post = blogPosts.find((post) => post.slug === resolvedParams.slug);
	if (!post) {
		return {
			title: "Post Not Found",
			description: "The requested blog post could not be found.",
		};
	}

	return {
		title: `${post.title} | Blog`,
		description: post.excerpt,
	};
}

export async function generateStaticParams() {
	return blogPosts.map((post) => ({
		slug: post.slug,
	}));
}