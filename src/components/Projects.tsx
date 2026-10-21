import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaCode,
  FaCheckCircle,
  FaFileInvoiceDollar,
  FaBuilding,
  FaGlobe
} from "react-icons/fa";
import {
  RiShareBoxLine
} from "react-icons/ri";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  category: "all" | "lead" | "fullstack";
  description: string;
  impact: string[];
  technologies: string[];
  githubLink: string;
  liveLink: string;
  mockupType: "invocreto" | "indiacorporates" | "portfolio";
}

const projects: Project[] = [
  {
    id: "invocreto-platform",
    title: "invocreto — Business & Invoicing Platform",
    subtitle: "Frontend Lead & Distributed Services",
    badge: "Live Production",
    category: "lead",
    description:
      "Enterprise business management and invoicing platform. Spearheaded the frontend development with Next.js and Angular focusing on scalable architecture, reusable UI components, and integrated backend microservices.",
    impact: [
      "Architected modular component suite with Next.js & Angular",
      "Integrated with distributed backend using RPC, RabbitMQ, and Docker",
      "Engineered real-time invoicing, client ledgers, and tax calculation engines",
    ],
    technologies: [
      "Next.js",
      "Angular",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "RabbitMQ",
      "Microservices",
      "Docker",
    ],
    githubLink: "https://github.com/Jadhavvarun",
    liveLink: "https://invocreto.com",
    mockupType: "invocreto",
  },
  {
    id: "indiacorporates",
    title: "IndiaCorporates — Business Intelligence",
    subtitle: "End-to-End Lead Developer",
    badge: "Live Production",
    category: "lead",
    description:
      "Led end-to-end development of IndiaCorporates, translating complex business requirements into seamless application workflows and technical solutions across frontend, backend, and API integrations.",
    impact: [
      "Designed and developed user-centric interfaces and interactive dashboards",
      "Built end-to-end application workflows and API data aggregation pipelines",
      "Handled database architecture, indexing, security, and cloud deployment",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/Jadhavvarun",
    liveLink: "https://indiacorporates.com",
    mockupType: "indiacorporates",
  },
  {
    id: "varun-portfolio",
    title: "Varun Jadhav — Engineering Portfolio & Admin Portal",
    subtitle: "Full-Stack Architecture & Live Admin Console",
    badge: "Live Production",
    category: "fullstack",
    description:
      "Modern, state-of-the-art engineering portfolio with a built-in secured Admin Dashboard. Powered by Next.js 14, Tailwind CSS, Google OAuth authentication, and real-time Firebase Firestore lead tracking.",
    impact: [
      "Protected Admin Dashboard with Google OAuth and verified admin privileges",
      "Real-time Firestore synchronization for inquiries with zero-latency updates",
      "Optimized for high-speed delivery with Netlify Edge and 95+ Lighthouse score",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
      "Google Auth",
      "Framer Motion",
      "Netlify",
    ],
    githubLink: "https://github.com/Jadhavvarun/Portfolio-app",
    liveLink: "https://varun-jadhav.netlify.app",
    mockupType: "portfolio",
  },
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "lead" | "fullstack">("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  // Render stylized interactive mockup header for each card
  const renderMockup = (type: Project["mockupType"]) => {
    switch (type) {
      case "invocreto":
        return (
          <div className="relative h-44 sm:h-52 w-full bg-gradient-to-br from-indigo-950 via-dark-900 to-amber-950/60 p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden border-b border-white/10 group-hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-amber-500/20 rounded-full blur-2xl" />
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-300 font-semibold truncate text-[11px] sm:text-xs">
                <FaFileInvoiceDollar size={13} className="shrink-0" />
                <span className="truncate">invocreto Core Suite</span>
              </span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30 shrink-0">
                Next.js + Angular
              </span>
            </div>
            {/* Invoice & Distributed Service Mockup */}
            <div className="bg-dark-950/85 p-2.5 sm:p-3 rounded-lg border border-white/10 space-y-1.5 sm:space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white font-semibold truncate">invocreto.com</span>
                <span className="text-emerald-400 font-mono font-bold shrink-0">$14,850 PAID</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 truncate">RabbitMQ: Sync</span>
                <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 shrink-0">RPC: Active</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500 font-mono pt-1.5 sm:pt-2 border-t border-white/5">
              <span className="truncate">Microservices & Docker</span>
              <span className="text-emerald-400 shrink-0 font-medium">invocreto.com</span>
            </div>
          </div>
        );

      case "indiacorporates":
        return (
          <div className="relative h-44 sm:h-52 w-full bg-gradient-to-br from-blue-950 via-dark-900 to-cyan-950/60 p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden border-b border-white/10 group-hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-300 font-semibold truncate text-[11px] sm:text-xs">
                <FaBuilding size={12} className="shrink-0" />
                <span className="truncate">IndiaCorporates Workflows</span>
              </span>
              <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30 shrink-0">
                End-to-End Lead
              </span>
            </div>
            {/* Dashboard Mockup */}
            <div className="bg-dark-950/80 p-2.5 sm:p-3 rounded-lg border border-white/10 space-y-1 sm:space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-300 text-[10px] sm:text-[11px] font-mono">
                <span className="truncate">indiacorporates.com</span>
                <span className="text-cyan-400 shrink-0">99.8% Uptime</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-1.5 rounded bg-white/5 text-[10px]">
                  <span className="text-slate-400 block text-[9px] sm:text-[10px]">Workflows</span>
                  <span className="text-white font-bold">120+ Active</span>
                </div>
                <div className="p-1.5 rounded bg-white/5 text-[10px]">
                  <span className="text-slate-400 block text-[9px] sm:text-[10px]">API Integrations</span>
                  <span className="text-emerald-400 font-bold">Verified</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500 font-mono pt-1.5 sm:pt-2 border-t border-white/5">
              <span className="truncate">Intelligence Feed</span>
              <span className="text-cyan-400 shrink-0 font-medium">indiacorporates.com</span>
            </div>
          </div>
        );

      case "portfolio":
        return (
          <div className="relative h-44 sm:h-52 w-full bg-gradient-to-br from-indigo-950 via-dark-900 to-cyan-950/70 p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden border-b border-white/10 group-hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/20 rounded-full blur-2xl" />
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-300 font-semibold truncate text-[11px] sm:text-xs">
                <FaGlobe size={12} className="shrink-0" />
                <span className="truncate">Engineering Portfolio & Portal</span>
              </span>
              <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30 shrink-0">
                Next.js 14 + Netlify
              </span>
            </div>
            {/* Live Address & Metrics */}
            <div className="bg-dark-950/85 p-2.5 sm:p-3 rounded-lg border border-white/10 space-y-1.5 font-mono text-xs">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-300 truncate">
                <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block shrink-0 animate-pulse" />
                <span className="text-cyan-300 truncate">varun-jadhav.netlify.app</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1 text-[10px]">
                <div className="p-1.5 rounded bg-white/5">
                  <span className="text-slate-400 block text-[9px]">Auth & DB</span>
                  <span className="text-emerald-400 font-bold">Firebase & Google</span>
                </div>
                <div className="p-1.5 rounded bg-white/5">
                  <span className="text-slate-400 block text-[9px]">Lighthouse</span>
                  <span className="text-amber-300 font-bold">95+ Performance</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500 font-mono pt-1.5 sm:pt-2 border-t border-white/5">
              <span className="truncate">Tailwind & Framer Motion</span>
              <span className="text-emerald-400 shrink-0 font-medium">Live Production</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-dark-900/40 relative overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-indigo-600/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyan-600/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300 mb-3">
            <FaCode size={13} />
            <span>Featured Live Works</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production Software &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-primary-300 to-cyan-300">
              Live Platforms
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base md:text-lg">
            Directly showcasing invocreto, IndiaCorporates, and official portfolio platform.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {[
              { id: "all", label: "Featured Three" },
              { id: "lead", label: "invocreto & IndiaCorporates" },
              { id: "fullstack", label: "Portfolio & Admin Portal" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${filter === tab.id
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/25"
                  : "bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:bg-dark-850"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                className="group flex flex-col rounded-2xl glass-panel border border-white/10 overflow-hidden hover:border-indigo-500/40 transition-all duration-300 shadow-lg shadow-black/40"
              >
                {/* Visual Header Mockup */}
                {renderMockup(project.mockupType)}

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Badge and Role */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                        {project.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400 truncate">
                        {project.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary-300 transition-colors leading-snug mb-2.5">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Key Engineering Impact Points */}
                    <div className="space-y-1.5 mb-5 pt-3 border-t border-white/5">
                      <p className="text-[11px] font-mono uppercase text-slate-400 tracking-wider font-semibold">
                        Technical Achievements:
                      </p>
                      {project.impact.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <FaCheckCircle className="text-emerald-400 shrink-0 mt-0.5 text-[11px]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono rounded bg-dark-900 border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Live Links */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/10">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                      <FaGithub size={14} />
                      <span>Repository</span>
                    </a>

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600/30 border border-indigo-500/40 text-xs font-medium text-indigo-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-400 transition-all shadow-sm"
                    >
                      <span>Visit Live</span>
                      <RiShareBoxLine size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
