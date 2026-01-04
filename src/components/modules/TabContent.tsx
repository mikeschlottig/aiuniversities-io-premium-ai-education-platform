import React from 'react';
import { Tab } from '@/data';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Wrench, FileText } from 'lucide-react';
interface TabContentProps {
  tab: Tab;
}
export function TabContent({ tab }: TabContentProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen className="h-4 w-4" />;
      case 'tool': return <Wrench className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };
  return (
    <div className="space-y-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{tab.heroTitle}</h1>
        <p className="text-xl text-slate-400 leading-relaxed">{tab.heroSubtitle}</p>
      </motion.div>
      <div className="space-y-16">
        {tab.sections.map((section) => (
          <section key={section.id} className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              <p className="text-slate-400 mt-1">{section.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, idx) => (
                <Card 
                  key={idx} 
                  className="bg-slate-900/40 border-white/10 hover:bg-slate-900/60 hover:border-blue-500/30 transition-all duration-200 group"
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                        {getIcon(item.type)}
                      </div>
                      {item.tag && (
                        <Badge variant="outline" className="text-[10px] uppercase tracking-wider border-white/20 text-slate-400">
                          {item.tag}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </CardTitle>
                    <CardDescription className="text-slate-400 text-sm mt-1">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-blue-400 hover:text-blue-300 text-sm font-medium group/link"
                      aria-label={`Learn more about ${item.title}`}
                    >
                      Learn More
                      <ExternalLink className="ml-1.5 h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}