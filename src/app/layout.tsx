"use client";

import React from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Jost, Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";

import Cookies from "js-cookie";
import { BsMoon, BsSun } from "react-icons/bs";

// ------------------- Components -------------------
import Footer from '@/components/footer'
import Header from '@/components/Header'

// ------------------- Context -------------------
import { ThemeProvider } from '@/context/themeContext'

// ------------------- Font Setup -------------------
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// ------------------- Component -------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLightMode, setIsLightMode] = useState(true);
  const pathname = usePathname(); // Get current path

  // Check if current route is an auth route
  const isAuthRoute = pathname?.startsWith('/auth') || pathname?.startsWith('/system') || pathname?.startsWith('/dash');

  // Load or set default theme in cookie
  useEffect(() => {
    const storedMode = Cookies.get("isLightMode");
    if (storedMode !== undefined) {
      setIsLightMode(storedMode === "true");
    } else {
      Cookies.set("isLightMode", "true"); // default: light mode
    }
  }, []);

  const toggleMode = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    Cookies.set("isLightMode", newMode.toString());
  };

  // ------------------- Structured Data (SEO Schema) -------------------
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI4Kenya",
    alternateName: "AI4Kenya Solutions",
    url: "https://ai4kenya.co.ke",
    logo: "https://ai4kenya.co.ke/logo.png",
    sameAs: [
      "https://twitter.com/ai4kenya",
      "https://www.linkedin.com/company/ai4kenya",
      "https://www.facebook.com/ai4kenya",
    ],
    description: "AI4Kenya is a leading Artificial Intelligence solutions provider in Kenya. We specialize in AI consulting, machine learning, data analytics, and custom AI software development for businesses across Africa.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254700000000",
      contactType: "Customer Support",
      areaServed: "Kenya & East Africa",
      availableLanguage: ["English", "Swahili"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nairobi, Kenya",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    keywords: "AI Kenya, Artificial Intelligence Kenya, Machine Learning Kenya, Data Analytics Kenya, AI Solutions Africa"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI4Kenya",
    url: "https://ai4kenya.co.ke",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ai4kenya.co.ke/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ai4kenya.co.ke",
      },
    ],
  };

  return (
    <html lang="en" data-theme={isLightMode ? "light" : "dark"}>
      <head>
        {/* ----------- Primary SEO ----------- */}
        <title>AI4Kenya | Leading AI Solutions & Artificial Intelligence Services in Kenya</title>
        <meta
          name="description"
          content="AI4Kenya - Premier Artificial Intelligence solutions provider in Kenya. We deliver cutting-edge AI, machine learning, data analytics, and automation services to transform businesses across Africa."
        />
        <meta
          name="keywords"
          content="AI Kenya, Artificial Intelligence Kenya, Machine Learning Kenya, Data Analytics Kenya, AI Solutions Africa, AI Consulting Kenya, Business Automation Kenya, Predictive Analytics Kenya, AI Development Kenya, Smart Solutions Kenya"
        />
        <meta name="author" content="AI4Kenya Team" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={isLightMode ? "#F2F5F5" : "#191A17"} />
        <meta name="language" content="English" />
        <meta name="application-name" content="AI4Kenya" />
        <meta name="generator" content="Next.js" />

        {/* ----------- Open Graph ----------- */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:site_name" content="AI4Kenya" />
        <meta
          property="og:title"
          content="AI4Kenya | Leading AI Solutions & Artificial Intelligence Services in Kenya"
        />
        <meta
          property="og:description"
          content="Transform your business with AI4Kenya's cutting-edge Artificial Intelligence solutions. Machine learning, data analytics, and automation services for Kenyan and African businesses."
        />
        <meta property="og:url" content="https://ai4kenya.co.ke" />
        <meta property="og:image" content="https://ai4kenya.co.ke/preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AI4Kenya - AI Solutions for Kenya" />

        {/* ----------- Twitter Card ----------- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ai4kenya" />
        <meta name="twitter:creator" content="@ai4kenya" />
        <meta name="twitter:title" content="AI4Kenya | AI Solutions & Services in Kenya" />
        <meta
          name="twitter:description"
          content="Leading Artificial Intelligence solutions provider in Kenya. Machine learning, data analytics, and custom AI development for African businesses."
        />
        <meta name="twitter:image" content="https://ai4kenya.co.ke/preview.jpg" />
        <meta name="twitter:image:alt" content="AI4Kenya AI Solutions" />

        {/* ----------- Canonical & Favicon ----------- */}
        <link rel="canonical" href="https://ai4kenya.co.ke" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ----------- Performance & Mobile ----------- */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="AI4Kenya" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* ----------- Geographic Targeting ----------- */}
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.286389;36.817223" />
        <meta name="ICBM" content="-1.286389, 36.817223" />

        {/* ----------- Accessibility & Branding ----------- */}
        <meta property="og:brand" content="AI4Kenya" />
        <meta property="og:determiner" content="the" />
        <meta name="referrer" content="origin-when-cross-origin" />

        {/* ----------- Structured Data ----------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([schemaData, websiteSchema, breadcrumbSchema]),
          }}
        />
      </head>

      <body
        className={`${jost.variable} ${inter.variable} ${josefin.variable} antialiased bg-background text-text min-h-screen font-jost`}
      >
        <ThemeProvider value={{ isLightMode, toggleMode }}>
          {/* Header - Conditionally render */}
          {!isAuthRoute && <Header />}
          
          {/* Main Content */}
          <main>
            {children}
          </main>

          {/* Footer - Conditionally render */}
          {!isAuthRoute && <Footer />}

          {/*
                ===== Theme Toggle Button =====
                <div className="fixed bottom-1/2 right-0 transform -translate-x-1/2 z-50">
                <button
                  onClick={toggleMode}
                  style={{background: isLightMode ? "#F2F5F5" : "#232322ff"}}
                  className="rounded-2xl p-4 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group flex items-center gap-3 bg-card border border-border"
                >
                  {isLightMode ? <BsMoon size={20} /> : <BsSun size={20} />}
                
                  <div className="absolute -top-10 right-2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  Toggle theme
                  </div>
                </button>
                </div>
          */}
        </ThemeProvider>
      </body>
    </html>
  );
}