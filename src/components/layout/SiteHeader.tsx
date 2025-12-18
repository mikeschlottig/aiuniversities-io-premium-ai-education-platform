import React, { useState, useCallback, useMemo } from 'react';
import { SITE_DATA } from '@/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles, Search, GraduationCap, Zap, Brain, Wrench, MessageSquare, Video, School, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/use-scroll-position';
const iconMap: Record<string, any> = {
  GraduationCap, Zap, Brain, Wrench, MessageSquare, Video, School, Info
};
interface SiteHeaderProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}
export function SiteHeader({ activeTab, onTabChange }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const handleNav = useCallback((id: string) => {
    onTabChange(id);
    setIsOpen(false);
  }, [onTabChange]);
  const desktopNavItems = useMemo(() => (
    SITE_DATA.tabs.map((tab) => {
      const Icon = iconMap[tab.icon];
      const isActive = activeTab === tab.id;
      return (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl flex items-center gap-2",
            isActive ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
          )}
        >
          {isActive && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-blue-600/20 border border-blue-500/40 rounded-xl will-change-transform shadow-[0_0_15px_rgba(59,130,246,0.1)]"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {Icon && <Icon className={cn("h-4 w-4 relative z-10 transition-transform duration-300", isActive ? "text-blue-400 scale-110" : "opacity-50")} />}
          <span className="relative z-10">{tab.label}</span>
        </button>
      );
    })
  ), [activeTab, onTabChange]);
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500 border-b",
      isScrolled ? "bg-slate-950/95 backdrop-blur-2xl border-white/10 py-2 shadow-2xl shadow-black/50" : "bg-transparent border-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div
            className="flex items-center gap-2.5 cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
            onClick={() => onTabChange('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onTabChange('home')}
          >
            <div className="bg-gradient-to-br from-blue-600 to-violet-600 p-2 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20 will-change-transform">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              AI<span className="text-blue-500 group-hover:text-blue-400 transition-colors">Universities</span>
            </span>
          </div>
          <nav className="hidden xl:flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/5 backdrop-blur-sm" aria-label="Main navigation">
            {desktopNavItems}
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/5 rounded-xl hidden md:flex group">
              <Search className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110" />
            </Button>
            <div className="xl:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-slate-400 hover:bg-white/5 rounded-xl">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-slate-950/98 backdrop-blur-xl border-white/10 text-white w-[300px] p-0 overflow-hidden">
                  <div className="p-6 border-b border-white/10 bg-white/5">
                    <span className="text-xl font-bold tracking-tight">Navigation</span>
                  </div>
                  <div className="flex flex-col p-4 gap-1">
                    <Button
                      variant="ghost"
                      className={cn(
                        "justify-start text-lg h-14 rounded-xl px-4 transition-all duration-300",
                        activeTab === 'home' ? "bg-blue-600/10 text-blue-400 border border-blue-500/20" : "text-slate-400 hover:bg-white/5"
                      )}
                      onClick={() => handleNav('home')}
                    >
                      <Sparkles className="mr-3 h-5 w-5" />
                      Home
                    </Button>
                    <div className="h-px bg-white/5 my-2 mx-4" />
                    {SITE_DATA.tabs.map((tab) => {
                      const Icon = iconMap[tab.icon];
                      return (
                        <Button
                          key={tab.id}
                          variant="ghost"
                          className={cn(
                            "justify-start text-lg h-14 rounded-xl px-4 transition-all duration-300",
                            activeTab === tab.id ? "bg-blue-600/10 text-blue-400 border border-blue-500/20" : "text-slate-400 hover:bg-white/5"
                          )}
                          onClick={() => handleNav(tab.id)}
                        >
                          {Icon && <Icon className="mr-3 h-5 w-5" />}
                          {tab.label}
                        </Button>
                      );
                    })}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}