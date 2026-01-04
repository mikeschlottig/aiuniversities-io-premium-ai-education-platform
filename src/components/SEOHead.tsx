import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tab } from '@/data';
interface SEOHeadProps {
  tabId: string;
  tabData?: Tab | null;
}
const ORIGIN = typeof window !== 'undefined' ? window.location.origin : 'https://aiuniversities.io';
export const SEOHead = React.memo(({ tabId, tabData }: SEOHeadProps) => {
  const isHome = tabId === 'home';
  const title = useMemo(() => isHome
    ? "AIUniversities.io | Master AI & Modern Tech—Free"
    : `AIUniversities.io | ${tabData?.label || 'Premium AI Education'}`
  , [isHome, tabData?.label]);
  const description = useMemo(() => isHome
    ? "Premium AI education platform aggregating elite resources from MIT, Anthropic, and industry leaders. Master AI skills, build your second brain, and leverage modern tech."
    : (tabData?.metaDescription || tabData?.heroSubtitle || "").substring(0, 160)
  , [isHome, tabData?.metaDescription, tabData?.heroSubtitle]);
  const canonicalUrl = useMemo(() => `${ORIGIN}${isHome ? '' : `?tab=${tabId}`}`, [isHome, tabId]);
  const ogImage = useMemo(() => `${ORIGIN}/og/${isHome ? 'home' : tabId}.png`, [isHome, tabId]);
  const organizationSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIUniversities.io",
    "url": ORIGIN,
    "logo": `${ORIGIN}/favicon.ico`,
    "description": "Premium AI education platform aggregating elite resources from MIT, Stanford, and industry leaders.",
    "sameAs": [
      "https://twitter.com/aiuniversities",
      "https://github.com/aiuniversities"
    ]
  }), []);
  const breadcrumbSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": ORIGIN
      },
      !isHome && tabData ? {
        "@type": "ListItem",
        "position": 2,
        "name": tabData.label,
        "item": canonicalUrl
      } : null
    ].filter(Boolean)
  }), [isHome, tabData, canonicalUrl]);
  const courseSchema = useMemo(() => !isHome && tabData ? {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": tabData.heroTitle,
    "description": tabData.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "AIUniversities.io",
      "sameAs": ORIGIN
    },
    "educationalLevel": "Beginner to Advanced",
    "courseMode": "Online"
  } : null, [isHome, tabData]);
  return (
    <Helmet key={tabId}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content={isHome ? "website" : "article"} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {courseSchema && (
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
      )}
    </Helmet>
  );
}, (prev, next) => prev.tabId === next.tabId && prev.tabData?.id === next.tabData?.id);
SEOHead.displayName = 'SEOHead';