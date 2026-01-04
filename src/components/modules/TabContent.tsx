import React, { useState, useEffect, useMemo } from 'react';
import { Tab } from '@/data';
import { motion } from 'framer-motion';
import { ResourceCard } from '@/components/ui/resource-card';
import { SectionHeader } from '@/components/modules/SectionHeader';
import { SkeletonGrid } from '@/components/ui/skeleton';
import { ErrorBoundary } from '@/components/ErrorBoundary';
const ResourceGrid = React.memo(({ items, sectionId }: { items: any[], sectionId: string }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((item, idx) => (
      <ResourceCard
        key={`${sectionId}-${idx}`}
        {...item}
        index={idx}
      />
    ))}
  </div>
));
ResourceGrid.displayName = 'ResourceGrid';
export const TabContent = React.memo(({ tab }: { tab: Tab }) => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoading(false), 300);
    return () => clearTimeout(timer);
  }, [tab.id]);
  const header = useMemo(() => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
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
  ), [tab.label, tab.heroTitle, tab.heroSubtitle]);
  if (isInitialLoading) {
    return (
      <div className="space-y-16 py-12">
        <div className="h-48 w-full bg-slate-900/50 rounded-3xl animate-pulse" />
        <SkeletonGrid />
      </div>
    );
  }
  return (
    <div className="space-y-16 py-12">
      {header}
      <div className="space-y-24">
        {tab.sections.map((section, sIdx) => (
          <section key={section.id} className="relative">
            <SectionHeader
              title={section.title}
              subtitle={section.description}
              variant={sIdx === 0 ? 'featured' : 'default'}
            />
            <ErrorBoundary>
              <ResourceGrid items={section.items} sectionId={section.id} />
            </ErrorBoundary>
          </section>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-violet-600/10 border border-white/5 text-center"
      >
        <h3 className="text-xl font-semibold text-white mb-2">Ready for the next step?</h3>
        <p className="text-slate-400 mb-6">Explore more modules or join our community of AI builders.</p>
        <div className="flex justify-center gap-4">
          <button 
            className="px-6 py-2 rounded-lg bg-white text-slate-950 font-medium hover:bg-slate-200 transition-colors active:scale-95"
            onClick={() => window.open('https://discord.gg', '_blank')}
          >
            Community Discord
          </button>
          <button 
            className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors active:scale-95"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert('Link copied to clipboard!');
            }}
          >
            Share Track
          </button>
        </div>
      </motion.div>
    </div>
  );
}, (prev, next) => prev.tab.id === next.tab.id);
TabContent.displayName = 'TabContent';