export interface Resource {
  title: string;
  description: string;
  link: string;
  type: 'course' | 'tool' | 'report' | 'guide';
  tag?: string;
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
      description: "The gold standard for starting your technical AI journey.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop",
      link: "#",
      tag: "MIT Free"
    },
    {
      id: "anthropic-prompting",
      title: "Anthropic: Prompt Engineering",
      description: "Master Claude with official techniques from the creators.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      link: "#",
      tag: "Anthropic"
    },
    {
      id: "second-brain-ai",
      title: "AI Second Brain Systems",
      description: "Build a vector-backed knowledge base with Notion & Obsidian.",
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
            { title: "MIT 6.0001", description: "Introduction to Computer Science and Programming in Python.", link: "#", type: "course", tag: "Beginner" },
            { title: "MIT 6.036", description: "Introduction to Machine Learning.", link: "#", type: "course", tag: "Intermediate" }
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
      metaDescription: "Master prompt engineering, AI workflows, and foundational skills to become an AI-first professional in any industry.",
      keywords: ["prompt engineering", "AI foundations", "LLM workflows", "AI productivity", "professional AI skills"],
      sections: [
        {
          id: "prompt-eng",
          title: "Prompt Engineering Mastery",
          description: "Moving beyond simple chat to complex workflows.",
          type: "resource-grid",
          items: [
            { title: "Chain of Thought", description: "Advanced reasoning patterns for LLMs.", link: "#", type: "guide" },
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
      metaDescription: "Build a digital second brain using Obsidian, Notion, and AI. Learn personal knowledge management and RAG techniques for personal use.",
      keywords: ["second brain", "personal knowledge management", "Obsidian AI", "Notion AI", "RAG for individuals"],
      sections: [
        {
          id: "tools",
          title: "Knowledge OS",
          description: "The software stack for your digital mind.",
          type: "resource-grid",
          items: [
            { title: "Obsidian + Smart Connections", description: "Local-first AI knowledge graph.", link: "#", type: "tool" },
            { title: "Notion AI Workflows", description: "Automating documentation with AI.", link: "#", type: "tool" }
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
      metaDescription: "Explore a curated directory of AI tools, frameworks, and libraries for developers. From LangChain to Vercel AI SDK.",
      keywords: ["AI tools directory", "developer resources", "LangChain", "Vercel AI", "AI libraries"],
      sections: [
        {
          id: "dev-tools",
          title: "Developer Ecosystem",
          description: "Libraries and frameworks for building AI apps.",
          type: "resource-grid",
          items: [
            { title: "LangChain", description: "The standard for LLM orchestration.", link: "#", type: "tool" },
            { title: "Vercel AI SDK", description: "Build AI interfaces in minutes.", link: "#", type: "tool" }
          ]
        }
      ]
    }
  ] as Tab[]
};