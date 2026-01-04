import React, { useState, useEffect } from 'react';
import { SITE_DATA } from '@/data';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { HeroSection } from '@/components/home/HeroSection';
import { CoursePreview } from '@/components/home/CoursePreview';
import { TabContent } from '@/components/modules/TabContent';
import { Toaster } from '@/components/ui/sonner';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { SEOHead } from '@/components/SEOHead';
import { useSearchParams } from 'react-router-dom';
export function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabId = searchParams.get('tab') || 'home';
  const setActiveTabId = (id: string) => {
    if (id === 'home') {
      searchParams.delete('tab');
    } else {
      searchParams.set('tab', id);
    }
    setSearchParams(searchParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const activeTab = SITE_DATA.tabs.find(t => t.id === activeTabId);
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30 font-sans">
        <SEOHead tabId={activeTabId} tabData={activeTab} />
        <SiteHeader activeTab={activeTabId} onTabChange={setActiveTabId} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {activeTabId === 'home' ? (
              <motion.div
                key="home"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <HeroSection />
                <CoursePreview />
                {/* Visual Separator */}
                <div className="py-24 relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-white/5"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-slate-950 px-6 text-slate-500 text-sm font-bold uppercase tracking-[0.4em]">
                      Explore Modules
                    </span>
                  </div>
                </div>
                {/* Quick Access Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-24">
                  {SITE_DATA.tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all text-left group"
                    >
                      <h3 className="text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">{tab.label}</h3>
                      <p className="text-slate-500 text-xs line-clamp-1">{tab.heroTitle}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={activeTabId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {activeTab && <TabContent tab={activeTab} />}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <SiteFooter />
        <Toaster richColors position="bottom-right" theme="dark" />
      </div>
    </HelmetProvider>
  );
}