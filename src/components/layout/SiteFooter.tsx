import React, { useState } from 'react';
import { Github, Twitter, Linkedin, ArrowUp, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
export function SiteFooter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setEmail('');
    toast.success('Successfully subscribed to newsletter!', {
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />
    });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-white tracking-tight">
                AI<span className="text-blue-500">Universities</span>
              </span>
            </div>
            <p className="text-slate-400 text-xl leading-relaxed max-w-md">
              The premium destination for mastering artificial intelligence through curated, high-quality educational resources from the world's leading institutions.
            </p>
            <div className="flex gap-6">
              {[
                { icon: Twitter, label: 'Twitter', color: 'hover:text-sky-400' },
                { icon: Github, label: 'Github', color: 'hover:text-slate-200' },
                { icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' }
              ].map((social) => (
                <a 
                  key={social.label}
                  href="#" 
                  className={cn("text-slate-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1", social.color)}
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 grid grid-cols-2 gap-8 lg:block lg:space-y-12">
            <div>
              <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Platform</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">MIT Free Track</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">AI Foundations</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Tools Directory</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Master Assistants</a></li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-4 bg-white/5 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
            <h4 className="text-white font-bold text-lg mb-4">Stay Ahead of the Curve</h4>
            <p className="text-slate-400 mb-6">Get weekly AI insights, resource drops, and curriculum updates delivered to your inbox.</p>
            <form className="space-y-3" onSubmit={handleSubscribe}>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-xl font-bold transition-all active:scale-95"
              >
                {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Join Newsletter'}
              </Button>
            </form>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>© {new Date().getFullYear()} AIUniversities.io. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="mailto:hello@aiuniversities.io" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToTop}
            className="text-slate-400 hover:text-white hover:bg-white/5 rounded-xl group"
          >
            Back to top
            <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </footer>
  );
}