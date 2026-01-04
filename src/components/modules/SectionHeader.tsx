import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  variant?: 'default' | 'featured' | 'minimal';
  className?: string;
}
export function SectionHeader({ title, subtitle, icon: Icon, variant = 'default', className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-8", className)}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-2"
      >
        {Icon && (
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
            <Icon className="h-6 w-6" />
          </div>
        )}
        <h2 className={cn(
          "font-bold tracking-tight text-white",
          variant === 'featured' ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
        )}>
          {variant === 'featured' ? (
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              {title}
            </span>
          ) : title}
        </h2>
        {variant === 'featured' && (
          <div className="flex-grow h-px bg-gradient-to-r from-blue-500/50 to-transparent ml-4 hidden md:block" />
        )}
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 text-lg max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}