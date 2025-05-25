import { motion } from 'framer-motion';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl'
};

export function Logo({ className = '', size = 'md' }: LogoProps) {
  return (
    <Link href="/">
      <motion.div
        className={`relative font-bold ${sizes[size]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="logo-text font-bold text-4xl">
            NK
          </span>
          <motion.div
            className="logo-underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>
      </motion.div>
    </Link>
  );
}

