import React, { useCallback } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Wrench, FileText, Lightbulb, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
const resourceCardVariants = cva(
  "relative overflow-hidden transition-all duration-300 group border-white/10 will-change-transform",
  {
    variants: {
      type: {
        course: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
        tool: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
        guide: "hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
        report: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      }
    },
    defaultVariants: {
      type: "course"
    }
  }
);
const getIcon = (type: string) => {
  switch (type) {
    case 'course': return <BookOpen className="h-5 w-5" />;
    case 'tool': return <Wrench className="h-5 w-5" />;
    case 'guide': return <Lightbulb className="h-5 w-5" />;
    case 'report': return <FileText className="h-5 w-5" />;
    default: return <BookOpen className="h-5 w-5" />;
  }
};
const getGradient = (type: string) => {
  switch (type) {
    case 'course': return "from-blue-600/30 to-indigo-600/5";
    case 'tool': return "from-emerald-600/30 to-teal-600/5";
    case 'guide': return "from-amber-600/30 to-orange-600/5";
    case 'report': return "from-purple-600/30 to-pink-600/5";
    default: return "from-blue-600/30 to-indigo-600/5";
  }
};
const getIconColor = (type: string) => {
  switch (type) {
    case 'course': return "text-blue-400";
    case 'tool': return "text-emerald-400";
    case 'guide': return "text-amber-400";
    case 'report': return "text-purple-400";
    default: return "text-blue-400";
  }
};
interface ResourceCardProps extends VariantProps<typeof resourceCardVariants> {
  title: string;
  description: string;
  link: string;
  type: 'course' | 'tool' | 'guide' | 'report';
  tag?: string;
  featured?: boolean;
  index?: number;
}
export const ResourceCard = React.memo(({ title, description, link, type, tag, featured, index = 0 }: ResourceCardProps) => {
  const handleLinkClick = useCallback((e: React.MouseEvent) => {
    // e.stopPropagation();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.01, translateY: -4 }}
      className="h-full"
    >
      <Card className={cn(resourceCardVariants({ type }), "bg-slate-900/40 backdrop-blur-sm h-full flex flex-col transition-all duration-300")}>
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none", getGradient(type))} />
        <CardHeader className="relative z-10 pb-3">
          <div className="flex justify-between items-start mb-4">
            <div className={cn("p-2.5 rounded-xl bg-slate-800/50 border border-white/5 transition-transform duration-300 group-hover:scale-110", getIconColor(type))}>
              {getIcon(type)}
            </div>
            <div className="flex gap-2">
              {featured && (
                <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 flex gap-1 items-center px-2 animate-glow-pulse">
                  <Star className="h-3 w-3 fill-current" />
                  Featured
                </Badge>
              )}
              {tag && (
                <Badge variant="outline" className="text-[10px] uppercase tracking-wider border-white/10 text-slate-400">
                  {tag}
                </Badge>
              )}
            </div>
          </div>
          <CardTitle className="text-xl text-white group-hover:text-white transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-slate-400 text-sm leading-relaxed mt-2 line-clamp-3 group-hover:text-slate-300 transition-colors">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow" />
        <CardFooter className="relative z-10 pt-0">
          <Button
            variant="ghost"
            className={cn("w-full justify-between group/btn border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300", getIconColor(type))}
            asChild
            onClick={handleLinkClick}
          >
            <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Access ${title}`}>
              Access Resource
              <ExternalLink className="h-4 w-4 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:rotate-12 transition-all duration-300" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}, (prev, next) => (
  prev.title === next.title &&
  prev.type === next.type &&
  prev.featured === next.featured &&
  prev.tag === next.tag
));
ResourceCard.displayName = 'ResourceCard';