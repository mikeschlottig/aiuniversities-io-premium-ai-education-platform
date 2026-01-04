import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SkeletonGrid } from '@/components/ui/skeleton';
export function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeTabId = searchParams.get('tab') || 'home';
  const setActiveTabId = useCallback((id: string) => {
    if (id === activeTabId) return;
    setIsTransitioning(true);
    if (id === 'home') {
      searchParams.delete('tab');
    } else {
      searchParams.set('tab', id);
    }
    setSearchParams(searchParams);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 150);
  }, [activeTabId, searchParams, setSearchParams]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTabId]);
  const activeTab = useMemo(() => 
    SITE_DATA.tabs.find(t => t.id === activeTabId)
  , [activeTabId]);
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30 font-sans">
        <SEOHead tabId={activeTabId} tabData={activeTab} />
        <SiteHeader activeTab={activeTabId} onTabChange={setActiveTabId} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {isTransitioning ? (
              <motion.div
                key="loading-skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-12"
              >
                <div className="h-12 w-64 bg-slate-900 rounded-lg animate-pulse mb-8" />
                <SkeletonGrid />
              </motion.div>
            ) : activeTabId === 'home' ? (
              <motion.div
                key="home"
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="py-8 md:py-10 lg:py-12"
              >
                <HeroSection />
                <CoursePreview />
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-24">
                  {SITE_DATA.tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all text-left group will-change-transform"
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
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="py-8 md:py-10 lg:py-12"
              >
                <ErrorBoundary>
                  {activeTab && <TabContent tab={activeTab} />}
                </ErrorBoundary>
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