import React from 'react';
import { Tab } from '@/data';
import { motion } from 'framer-motion';
import { ResourceCard } from '@/components/ui/resource-card';
import { SectionHeader } from '@/components/modules/SectionHeader';
import { BookOpen, Wrench, FileText, Lightbulb } from 'lucide-react';
interface TabContentProps {
  tab: Tab;
}
export function TabContent({ tab }: TabContentProps) {
  return (
    <div className="space-y-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
          Module: {tab.label}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          {tab.heroTitle}
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          {tab.heroSubtitle}
        </p>
      </motion.div>
      <div className="space-y-24">
        {tab.sections.map((section, sIdx) => (
          <section key={section.id} className="relative">
            <SectionHeader 
              title={section.title} 
              subtitle={section.description}
              variant={sIdx === 0 ? 'featured' : 'default'}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, idx) => (
                <ResourceCard
                  key={`${section.id}-${idx}`}
                  {...item}
                  index={idx}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
      {/* Educational Footer Callout */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-violet-600/10 border border-white/5 text-center"
      >
        <h3 className="text-xl font-semibold text-white mb-2">Ready for the next step?</h3>
        <p className="text-slate-400 mb-6">Explore more modules or join our community of AI builders.</p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 rounded-lg bg-white text-slate-950 font-medium hover:bg-slate-200 transition-colors">
            Community Discord
          </button>
          <button className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
            Share Track
          </button>
        </div>
      </motion.div>
    </div>
  );
}