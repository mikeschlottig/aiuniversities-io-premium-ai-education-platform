import React from 'react';
import { SITE_DATA } from '@/data';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
export function SiteFooter() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">
                AI<span className="text-blue-500">Universities</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm">
              The premium destination for mastering artificial intelligence through curated, high-quality educational resources.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">MIT Free Track</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">AI Foundations</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tools Directory</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Research Reports</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Get weekly AI insights and resource updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} AIUniversities.io. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}