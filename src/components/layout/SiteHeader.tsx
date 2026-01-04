import React, { useState } from 'react';
import { SITE_DATA } from '@/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
interface SiteHeaderProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}
export function SiteHeader({ activeTab, onTabChange }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = (id: string) => {
    onTabChange(id);
    setIsOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => onTabChange('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onTabChange('home')}
            aria-label="Go to homepage"
          >
            <div className="bg-gradient-to-br from-violet-600 to-blue-600 p-1.5 rounded-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              AI<span className="text-blue-500">Universities</span>
            </span>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {SITE_DATA.tabs.map((tab) => (
              <Button
                key={tab.id}
                variant="ghost"
                size="sm"
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500",
                  activeTab === tab.id && "text-white bg-white/10"
                )}
              >
                {tab.label}
              </Button>
            ))}
          </nav>
          {/* Mobile Nav */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-400" aria-label="Open mobile menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-slate-950 border-white/10 text-white" aria-label="Mobile menu">
                <div className="flex flex-col gap-3 mt-8">
                  <Button
                    variant="ghost"
                    className={cn(
                      "justify-start text-lg",
                      activeTab === 'home' ? "text-blue-500" : "text-slate-400"
                    )}
                    onClick={() => handleNav('home')}
                  >
                    Home
                  </Button>
                  {SITE_DATA.tabs.map((tab) => (
                    <Button
                      key={tab.id}
                      variant="ghost"
                      className={cn(
                        "justify-start text-lg",
                        activeTab === tab.id ? "text-blue-500" : "text-slate-400"
                      )}
                      onClick={() => handleNav(tab.id)}
                    >
                      {tab.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}