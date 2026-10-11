import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Varun Jadhav | Full Stack Developer & Frontend Lead at Invocreto</title>
        <meta
          name="description"
          content="Portfolio of Varun Jadhav — Full Stack Developer & Frontend Lead at Invocreto. Crafting scalable architectures, enterprise design systems, and high-performance React & Next.js applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Varun Jadhav | Full Stack Developer & Frontend Lead at Invocreto" />
        <meta
          property="og:description"
          content="Explore the engineering portfolio, leadership milestones, tech stack, and production works of Varun Jadhav."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Varun Jadhav | Full Stack Developer & Frontend Lead at Invocreto" />
        <meta
          name="twitter:description"
          content="Frontend Lead at Invocreto & Full Stack Engineer specializing in Next.js, React, TypeScript, and Node.js."
        />
      </Head>

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