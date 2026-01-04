import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Tab } from '@/data';
interface SEOHeadProps {
  tabId: string;
  tabData?: Tab | null;
}
export function SEOHead({ tabId, tabData }: SEOHeadProps) {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const isHome = tabId === 'home';
  const title = isHome 
    ? "AIUniversities.io | Master AI & Modern Tech—Free" 
    : `AIUniversities.io | ${tabData?.label || 'Premium AI Education'}`;
  const description = isHome 
    ? "Premium AI education platform aggregating elite resources from MIT, Anthropic, and industry leaders. Master AI skills, build your second brain, and leverage modern tech."
    : (tabData?.metaDescription || tabData?.heroSubtitle || "").substring(0, 160);
  const keywords = [
    "AI education", "free AI courses", "MIT AI", "Anthropic prompt engineering", 
    "second brain systems", "AI tools directory", "modern tech mastery",
    ...(tabData?.keywords || [])
  ].join(", ");
  const canonicalUrl = `${origin}${isHome ? '' : `?tab=${tabId}`}`;
  const ogImage = `${origin}/og/${isHome ? 'home' : tabId}.png`;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIUniversities.io",
    "url": origin,
    "logo": `${origin}/favicon.ico`,
    "description": "Premium AI education platform aggregating elite resources."
  };
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonicalUrl
  };
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="AIUniversities.io" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@aiuniversities" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {/* Theme Color */}
      <meta name="theme-color" content="#0f172a" />
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webpageSchema)}
      </script>
    </Helmet>
  );
}