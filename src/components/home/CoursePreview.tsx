import React from 'react';
import { SITE_DATA } from '@/data';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
export function CoursePreview() {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white">Featured Tracks</h2>
          <p className="text-slate-400 mt-2">Hand-picked modules to accelerate your AI journey.</p>
        </div>
        <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0 h-auto font-medium">
          View all resources
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SITE_DATA.featuredCourses.map((course) => (
          <Card 
            key={course.id} 
            className="bg-slate-900/50 border-white/10 overflow-hidden group hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-60" />
              <div className="absolute top-3 left-3">
                <Badge className="bg-blue-600/90 hover:bg-blue-600 text-white border-none backdrop-blur-sm">
                  {course.tag}
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-200">
                <h3 className="text-xl font-semibold">{course.title}</h3>
              </CardTitle>
              <CardDescription className="text-slate-400 line-clamp-2 mt-2">
                {course.description}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="secondary" className="w-full bg-white/5 hover:bg-white/10 text-white border-white/10 group/btn">
                Access Course
                <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}