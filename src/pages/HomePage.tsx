import React, { useState, useEffect } from 'react';
import { SITE_DATA } from '@/data';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { HeroSection } from '@/components/home/HeroSection';
import { CoursePreview } from '@/components/home/CoursePreview';
import { TabContent } from '@/components/modules/TabContent';
import { Toaster } from '@/components/ui/sonner';
import { AnimatePresence, motion } from 'framer-motion';
export function HomePage() {
  const [activeTabId, setActiveTabId] = useState('home');
  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTabId]);
  const activeTab = SITE_DATA.tabs.find(t => t.id === activeTabId);
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <SiteHeader activeTab={activeTabId} onTabChange={setActiveTabId} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <AnimatePresence mode="wait">
          {activeTabId === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HeroSection />
              <CoursePreview />
              {/* Trust Section */}
              <section className="py-20 border-t border-white/5">
                <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-widest mb-10">
                  Resources from world-class institutions
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="text-2xl font-bold text-white">MIT</span>
                  <span className="text-2xl font-bold text-white">Stanford</span>
                  <span className="text-2xl font-bold text-white">Anthropic</span>
                  <span className="text-2xl font-bold text-white">DeepMind</span>
                  <span className="text-2xl font-bold text-white">OpenAI</span>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key={activeTabId}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab && <TabContent tab={activeTab} />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <SiteFooter />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}