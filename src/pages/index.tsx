import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JsonLd from "@/components/JsonLd";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Code-split below-the-fold components to reduce initial main-thread JavaScript execution
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

const SITE_URL = "https://varunjadhav.in";
const TITLE = "Varun Jadhav | Full Stack Developer & Frontend Lead";
const DESCRIPTION =
  "Portfolio of Varun Jadhav — Full Stack Developer & Frontend Lead. Crafting scalable architectures, enterprise design systems, and high-performance React, Next.js, and Node.js applications.";
const OG_DESCRIPTION =
  "Explore the engineering portfolio, leadership milestones, tech stack, and production works of Varun Jadhav.";
const TWITTER_DESCRIPTION =
  "Frontend Lead & Full Stack Engineer specializing in Next.js, React, TypeScript, and Node.js.";
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const OG_IMAGE_ALT = "Varun Jadhav — Frontend Lead, Full Stack Developer";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary */}
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href={`${SITE_URL}/`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Varun Jadhav" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={OG_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={OG_IMAGE_ALT} />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={TWITTER_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />
      </Head>

      {/* JSON-LD Structured Data for Enhanced Search Engine Ranking */}
      <JsonLd />

      {/* Accessibility: Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-indigo-600 focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-dark-950 text-slate-100 selection:bg-indigo-500/40 selection:text-white">
        <Header />
        <main id="main-content">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}