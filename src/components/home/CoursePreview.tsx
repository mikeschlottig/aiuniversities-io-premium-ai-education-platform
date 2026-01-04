import React, { useState, useMemo } from 'react';
import { SITE_DATA } from '@/data';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
const CourseCard = React.memo(({ course, index }: { course: any, index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="bg-slate-900/40 border-white/10 overflow-hidden group hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.02] flex flex-col h-full relative will-change-transform"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:animate-shimmer" />
        </div>
        <div className="aspect-[16/10] relative overflow-hidden bg-slate-800">
          {!imageLoaded && <div className="absolute inset-0 bg-slate-800 animate-pulse" />}
          <img
            src={course.image}
            alt={course.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={cn(
              "object-cover w-full h-full transition-all duration-700 group-hover:scale-110",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
          <div className="absolute top-4 left-4">
            <Badge className="bg-blue-600/90 hover:bg-blue-600 text-white border-none backdrop-blur-md px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              {course.tag}
            </Badge>
          </div>
        </div>
        <CardHeader className="relative z-10">
          <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors duration-300">
            {course.title}
          </CardTitle>
          <CardDescription className="text-slate-400 text-base line-clamp-2 mt-3 leading-relaxed">
            {course.description}
          </CardDescription>
        </CardHeader>
        <div className="flex-grow" />
        <CardFooter className="relative z-10 pb-6">
          <Button variant="secondary" className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 group/btn h-12 rounded-xl transition-all">
            Access Course
            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
});
CourseCard.displayName = 'CourseCard';
export function CoursePreview() {
  const courseGrid = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {SITE_DATA.featuredCourses.map((course, idx) => (
        <CourseCard key={course.id} course={course} index={idx} />
      ))}
    </div>
  ), []);
  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-blue-400 font-medium mb-2">
            <Sparkles className="h-4 w-4" />
            <span>Curated Excellence</span>
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight">Featured Learning Tracks</h2>
          <p className="text-slate-400 mt-3 text-lg">
            High-impact modules designed to take you from foundational understanding to production-ready AI mastery.
          </p>
        </div>
        <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 h-12 px-6 rounded-xl">
          Explore All Tracks
        </Button>
      </div>
      {courseGrid}
    </section>
  );
}