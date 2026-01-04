import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, PlayCircle, Star } from 'lucide-react';
export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [partnersLoaded, setPartnersLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setPartnersLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);
  const variants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 }
  }), [shouldReduceMotion]);
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-violet-600/20 blur-[160px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <div className="relative z-10 text-center space-y-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
              New: 2025 AI Engineering Curriculum
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-8">
            Master the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 animate-gradient-x">
              AI Frontier
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Aggregating elite resources from MIT, Stanford, and Anthropic.
            Build your second brain and master the tools of the intelligence age.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 h-16 text-xl rounded-2xl group shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 will-change-transform">
            Start Learning Free
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 h-16 px-10 text-xl rounded-2xl group backdrop-blur-sm transition-all hover:scale-105 active:scale-95 will-change-transform">
            <PlayCircle className="mr-2 h-6 w-6 text-blue-400 group-hover:scale-110 transition-transform" />
            Watch Preview
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: partnersLoaded ? 0.6 : 0 }}
          transition={{ duration: 0.8 }}
          className="pt-16"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 mb-8">
            Curated from Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-70">
            {['MIT', 'STANFORD', 'ANTHROPIC', 'OPENAI', 'DEEPMIND'].map((partner) => (
              <span key={partner} className="text-2xl font-bold text-white tracking-tighter hover:grayscale-0 transition-all duration-300 cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}