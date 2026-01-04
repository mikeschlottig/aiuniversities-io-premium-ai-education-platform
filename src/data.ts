import { GraduationCap, Zap, Brain, Wrench, MessageSquare, Video, School, Info } from 'lucide-react';
export interface Resource {
  title: string;
  description: string;
  link: string;
  type: 'course' | 'tool' | 'report' | 'guide';
  tag?: string;
  featured?: boolean;
}
export interface ContentSection {
  id: string;
  title: string;
  description: string;
  type: 'resource-grid' | 'feature-list' | 'roadmap';
  items: Resource[];
}
export interface Tab {
  id: string;
  label: string;
  icon: string;
  heroTitle: string;
  heroSubtitle: string;
  metaDescription: string;
  keywords: string[];
  sections: ContentSection[];
}
export const SITE_DATA = {
  brand: {
    name: "AIUniversities.io",
    tagline: "Premium AI Education Platform",
  },
  featuredCourses: [
    {
      id: "mit-6001",
      title: "MIT: Intro to CS & Python",
      description: "The gold standard for starting your technical AI journey with rigorous fundamentals.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop",
      link: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/",
      tag: "MIT Free"
    },
    {
      id: "anthropic-prompting",
      title: "Anthropic: Prompt Engineering",
      description: "Master Claude with official techniques from the creators of the world's most helpful LLM.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      link: "https://github.com/anthropics/anthropic-cookbook",
      tag: "Anthropic"
    },
    {
      id: "second-brain-ai",
      title: "AI Second Brain Systems",
      description: "Build a vector-backed knowledge base with Notion & Obsidian using RAG principles.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
      link: "#",
      tag: "Foundations"
    }
  ],
  tabs: [
    {
      id: "mit-free",
      label: "MIT For Free",
      icon: "GraduationCap",
      heroTitle: "Ivy League Education, Zero Cost",
      heroSubtitle: "Curated open-courseware from MIT, Stanford, and Anthropic's research labs.",
      metaDescription: "Access world-class AI and Computer Science education from MIT and Stanford for free. Curated open-courseware for the modern AI engineer.",
      keywords: ["MIT free courses", "Stanford AI", "open courseware", "free computer science", "AI certification"],
      sections: [
        {
          id: "mit-core",
          title: "Core Computer Science",
          description: "The fundamental building blocks for AI mastery.",
          type: "resource-grid",
          items: [
            { title: "MIT 6.0001", description: "Introduction to Computer Science and Programming in Python.", link: "#", type: "course", tag: "Beginner", featured: true },
            { title: "MIT 6.006", description: "Introduction to Algorithms and Data Structures.", link: "#", type: "course", tag: "Intermediate" },
            { title: "MIT 6.036", description: "Introduction to Machine Learning.", link: "#", type: "course", tag: "Intermediate" },
            { title: "Stanford CS229", description: "Andrew Ng's legendary Machine Learning course.", link: "#", type: "course", tag: "Advanced" }
          ]
        }
      ]
    },
    {
      id: "foundations",
      label: "LeverageAI Foundations",
      icon: "Zap",
      heroTitle: "The AI-First Professional",
      heroSubtitle: "Master the foundational skills required to thrive in the age of intelligence.",
      metaDescription: "Master prompt engineering, AI workflows, and foundational skills to become an AI-first professional.",
      keywords: ["prompt engineering", "AI foundations", "LLM workflows"],
      sections: [
        {
          id: "prompt-eng",
          title: "Prompt Engineering Mastery",
          description: "Moving beyond simple chat to complex, reliable workflows.",
          type: "resource-grid",
          items: [
            { title: "Chain of Thought", description: "Advanced reasoning patterns for complex logic.", link: "#", type: "guide", featured: true },
            { title: "System Prompting", description: "Architecting persona-driven assistants.", link: "#", type: "guide" }
          ]
        }
      ]
    },
    {
      id: "second-brain",
      label: "Second Brain",
      icon: "Brain",
      heroTitle: "Augment Your Intelligence",
      heroSubtitle: "Connect AI to your personal knowledge base using modern RAG techniques.",
      metaDescription: "Build a digital second brain using Obsidian, Notion, and AI.",
      keywords: ["second brain", "PKM", "Obsidian AI"],
      sections: [
        {
          id: "knowledge-os",
          title: "Knowledge OS Stack",
          description: "The software stack for your digital mind.",
          type: "resource-grid",
          items: [
            { title: "Obsidian + Smart Connections", description: "Local-first AI knowledge graph.", link: "#", type: "tool", featured: true },
            { title: "Notion AI Workflows", description: "Automating documentation with AI.", link: "#", type: "tool" }
          ]
        }
      ]
    },
    {
      id: "master-assistants",
      label: "Master AI Assistants",
      icon: "MessageSquare",
      heroTitle: "The Power of Orchestration",
      heroSubtitle: "Advanced workflows for Claude, Gemini, and custom GPT architectures.",
      metaDescription: "Learn advanced workflows for Claude Projects and Custom GPTs.",
      keywords: ["Claude Projects", "Custom GPTs", "AI Agents"],
      sections: [
        {
          id: "claude-mastery",
          title: "Claude & Artifacts",
          description: "Leveraging Anthropic's unique capabilities for production.",
          type: "resource-grid",
          items: [
            { title: "Claude Projects", description: "Organizing large context for long-term builds.", link: "#", type: "guide", featured: true },
            { title: "Artifacts Workflow", description: "Building UI components in real-time.", link: "#", type: "guide" }
          ]
        }
      ]
    },
    {
      id: "content-mastery",
      label: "Content Mastery",
      icon: "Video",
      heroTitle: "Infinite Creative Leverage",
      heroSubtitle: "Modern content production using NotebookLM and AI video pipelines.",
      metaDescription: "Master AI-driven content creation with 11 Labs and Runway.",
      keywords: ["NotebookLM", "11 Labs", "AI video"],
      sections: [
        {
          id: "audio-visual",
          title: "Audio & Video Production",
          description: "High-fidelity media generation at scale.",
          type: "resource-grid",
          items: [
            { title: "NotebookLM Research", description: "Turning sources into podcasts and summaries.", link: "#", type: "tool", featured: true },
            { title: "11 Labs Voice Design", description: "Professional grade AI voiceovers.", link: "#", type: "tool" }
          ]
        }
      ]
    },
    {
      id: "tools-directory",
      label: "Tools & Resources",
      icon: "Wrench",
      heroTitle: "The AI Builder's Toolkit",
      heroSubtitle: "A curated directory of the best tools for developers and creators.",
      metaDescription: "Explore a curated directory of AI tools and frameworks.",
      keywords: ["AI tools", "LangChain", "Vercel AI"],
      sections: [
        {
          id: "dev-ecosystem",
          title: "Developer Ecosystem",
          description: "Libraries and frameworks for building AI apps.",
          type: "resource-grid",
          items: [
            { title: "LangChain", description: "The standard for LLM orchestration.", link: "#", type: "tool", featured: true },
            { title: "Vercel AI SDK", description: "Build AI interfaces in minutes.", link: "#", type: "tool" }
          ]
        }
      ]
    },
    {
      id: "alpha-education",
      label: "Alpha AI Education",
      icon: "School",
      heroTitle: "The Future of Learning",
      heroSubtitle: "Pedagogical frameworks and structured learning paths for professional mastery.",
      metaDescription: "Structured learning paths for rapid AI skill acquisition.",
      keywords: ["learning theory", "AI curriculum"],
      sections: [
        {
          id: "learning-paths",
          title: "Structured Pathways",
          description: "Step-by-step curricula for different roles.",
          type: "resource-grid",
          items: [
            { title: "The AI Engineer Path", description: "From Python to production RAG.", link: "#", type: "guide", featured: true },
            { title: "AI for Business Leaders", description: "Strategic implementation of LLMs.", link: "#", type: "guide" }
          ]
        }
      ]
    },
    {
      id: "about-vision",
      label: "About / Vision",
      icon: "Info",
      heroTitle: "Our Vision for Education",
      heroSubtitle: "Democratizing elite AI knowledge through curation and structured pathways.",
      metaDescription: "Learn about the mission of AIUniversities.io and our commitment to free, high-quality AI education.",
      keywords: ["AI education mission", "about AIUniversities"],
      sections: [
        {
          id: "mission",
          title: "The Mission",
          description: "Why we aggregate the world's best AI resources.",
          type: "resource-grid",
          items: [
            { title: "Open Education", description: "Our commitment to keeping high-quality resources accessible to all.", link: "#", type: "guide", featured: true },
            { title: "Contact Us", description: "Reach out for partnerships or content suggestions.", link: "mailto:hello@aiuniversities.io", type: "guide" }
          ]
        }
      ]
    }
  ] as Tab[]
};