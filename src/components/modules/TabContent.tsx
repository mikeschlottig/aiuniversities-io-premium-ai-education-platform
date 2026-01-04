import React, { useState, useEffect, useMemo } from 'react';
import { Tab } from '@/data';
import { motion, AnimatePresence } from 'framer-motion';
import { ResourceCard } from '@/components/ui/resource-card';
import { SectionHeader } from '@/components/modules/SectionHeader';
import { SkeletonGrid } from '@/components/ui/skeleton';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Check, Copy } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoading(false), 300);
    return () => clearTimeout(timer);
  }, [tab.id]);
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const header = useMemo(() => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6 animate-glow-pulse">
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
        <div className="h-48 w-full bg-slate-900/50 rounded-3xl animate-pulse shimmer-bg" />
        <SkeletonGrid />
      </div>
    );
  }
  return (
    <div className="space-y-16 py-12">
      {header}
      <div className="space-y-24">
        {tab.sections.map((section, sIdx) => (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: sIdx * 0.1, duration: 0.5 }}
            className="relative"
          >
            <SectionHeader
              title={section.title}
              subtitle={section.description}
              variant={sIdx === 0 ? 'featured' : 'default'}
            />
            <ErrorBoundary>
              <ResourceGrid items={section.items} sectionId={section.id} />
            </ErrorBoundary>
          </motion.section>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-20 p-8 rounded-3xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm border border-white/5 z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-violet-600/10 opacity-50 z-0" />
        <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 opacity-20 group-hover:opacity-40 animate-rotate-border rounded-3xl z-[-1]" />
        <div className="relative z-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready for the next step?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
            Explore more modules or join our community of AI builders to accelerate your learning journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-8 py-3 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all active:scale-95 shadow-xl shadow-white/5 flex items-center gap-2 group/btn"
              onClick={() => window.open('https://discord.gg', '_blank')}
            >
              Community Discord
              <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="inline-block">🚀</motion.span>
            </button>
            <button
              className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all active:scale-95 flex items-center gap-2"
              onClick={handleShare}
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2 text-emerald-400">
                    <Check className="h-5 w-5" /> Copied!
                  </motion.div>
                ) : (
                  <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                    <Copy className="h-5 w-5 opacity-70" /> Share Track
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}, (prev, next) => prev.tab.id === next.tab.id);
TabContent.displayName = 'TabContent';