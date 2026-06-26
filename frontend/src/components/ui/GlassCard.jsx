import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function GlassCard({ className, children, hover = false }) {
  const Component = hover ? motion.div : 'div';
  const motionProps = hover ? { whileHover: { y: -4, scale: 1.01 }, transition: { type: 'spring', stiffness: 260 } } : {};

  return (
    <Component className={cn('glass-card rounded-3xl p-5', className)} {...motionProps}>
      {children}
    </Component>
  );
}
