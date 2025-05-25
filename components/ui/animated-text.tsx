"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  repeating?: boolean;
  words?: string[];
  repeatingDuration?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  once = false,
  repeating = false,
  words = [],
  repeatingDuration = 2000,
}) => {
  const [currentText, setCurrentText] = useState(text);
  const [currentIndex, setCurrentIndex] = useState(0);

  // For repeating text animation
  useEffect(() => {
    if (repeating && words.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setCurrentText(words[currentIndex]);
      }, repeatingDuration);

      return () => clearInterval(interval);
    }
  }, [repeating, words, currentIndex, repeatingDuration]);

  // Animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * duration + delay,
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <h1 className={className} aria-label={currentText}>
      {currentText.split("").map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
};