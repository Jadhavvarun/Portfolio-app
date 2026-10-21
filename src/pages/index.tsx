import React, { useState } from "react";
import Head from "next/head";
import JsonLd from "@/components/JsonLd";
import InitialLoader from "@/components/InitialLoader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Head>
        <title>Varun Jadhav | Full Stack Developer & Frontend Lead at invocreto</title>
        <meta
          name="description"
          content="Portfolio of Varun Jadhav — Full Stack Developer & Frontend Lead at invocreto. Crafting scalable architectures, enterprise design systems, and high-performance React & Next.js applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta property="og:title" content="Varun Jadhav | Full Stack Developer & Frontend Lead at invocreto" />
        <meta
          property="og:description"
          content="Explore the engineering portfolio, leadership milestones, tech stack, and production works of Varun Jadhav."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Varun Jadhav | Full Stack Developer & Frontend Lead at invocreto" />
        <meta
          name="twitter:description"
          content="Frontend Lead at invocreto & Full Stack Engineer specializing in Next.js, React, TypeScript, and Node.js."
        />
      </Head>

      {/* JSON-LD Structured Data for Enhanced Search Engine Ranking */}
      <JsonLd />

      {/* Initializing Entrance Loader */}
      <InitialLoader onComplete={() => setIsLoaded(true)} />

      <div className="min-h-screen bg-dark-950 text-slate-100 selection:bg-indigo-500/40 selection:text-white">
        <Header />
        <main>
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