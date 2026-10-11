import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaChartLine, 
  FaLayerGroup, 
  FaCode, 
  FaCheckCircle,
  FaBolt,
  FaFileInvoiceDollar,
  FaBuilding
} from "react-icons/fa";
import { 
  RiSparklingFill, 
  RiLayoutMasonryLine, 
  RiShareBoxLine,
  RiDashboardLine,
  RiFlowChart
} from "react-icons/ri";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  category: "all" | "lead" | "fullstack" | "frontend";
  description: string;
  impact: string[];
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  mockupType: "invocreto" | "indiacorporates" | "analytics" | "pos" | "news";
}

const projects: Project[] = [
  {
    id: "invocreto-platform",
    title: "InvoCreto — Business & Invoicing Platform",
    subtitle: "Frontend Lead & Distributed Services",
    badge: "Live Project • Lead Role",
    category: "lead",
    description:
      "Enterprise business management and invoicing platform. Led the frontend development with Next.js and Angular focusing on scalable architecture, reusable UI components, and integrated backend microservices.",
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
    liveLink: "https://github.com/Jadhavvarun",
    mockupType: "invocreto",
  },
  {
    id: "indiacorporates",
    title: "IndiaCorporates — Business Intelligence",
    subtitle: "End-to-End Lead Developer",
    badge: "Live Project • Full-Stack Lead",
    category: "lead",
    description:
      "Led end-to-end development of IndiaCorporates, translating complex business requirements into seamless application workflows and technical solutions across frontend, backend, and API integrations.",
    impact: [
      "Designed and developed user-centric interfaces and interactive dashboards",
      "Built end-to-end application workflows and API data aggregation pipelines",
      "Handled database architecture, indexing, security, and cloud deployment",
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Express.js", "REST APIs", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/Jadhavvarun",
    liveLink: "https://github.com/Jadhavvarun",
    mockupType: "indiacorporates",
  },
  {
    id: "news-app",
    title: "NewsPulse Live Media Aggregator",
    subtitle: "Fast Curated News Experience",
    badge: "Live Production",
    category: "frontend",
    description:
      "A fast, responsive news curation platform powered by Next.js and deployed on Netlify. Offers category filtering, keyword search, dark/light reading modes, and instantaneous article loading.",
    impact: [
      "Deployed to production with fast Netlify edge CDN caching",
      "Mobile-first fluid responsive grid and card transitions",
      "Real-time category switching without full page reloads",
    ],
    technologies: ["Next.js", "React.js", "REST API", "Tailwind CSS", "Netlify"],
    githubLink: "https://github.com/Jadhavvarun",
    liveLink: "https://news-app-gsp.netlify.app",
    mockupType: "news",
  },
  {
    id: "pos-system",
    title: "OmniPoint Retail POS & Inventory",
    subtitle: "Offline-First Enterprise Point of Sale",
    badge: "Full Stack Enterprise",
    category: "fullstack",
    description:
      "Full-stack point-of-sale and inventory control software engineered for retail chains. Includes live barcode scanning, printable receipts, multi-store stock ledger, and offline support.",
    impact: [
      "Real-time inventory deduction & low-stock alerts",
      "Keyboard-accelerated cashier billing workflow",
      "Relational schema for orders, tax slabs, and vendor invoices",
    ],
    technologies: ["React.js", "Node.js", "MySQL", "Electron", "Tailwind CSS", "Express.js"],
    githubLink: "https://github.com/Jadhavvarun",
    liveLink: "https://github.com/Jadhavvarun",
    mockupType: "pos",
  },
  {
    id: "getshortlink",
    title: "GetShortLink Analytics Engine",
    subtitle: "High-Throughput URL Shortener & Metrics",
    badge: "Full Stack System",
    category: "fullstack",
    description:
      "A scalable full-stack URL shortener and click-analytics platform. Provides real-time referrers, device breakdown, QR code generation, and low-latency redirect pipelines.",
    impact: [
      "Sub-50ms redirect response times with in-memory caching",
      "Interactive analytics dashboard visualizing hourly click volume",
      "Custom vanity URLs with collision-free hash generation",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "Tailwind CSS", "Chart.js"],
    githubLink: "https://github.com/Jadhavvarun",
    liveLink: "https://github.com/Jadhavvarun",
    mockupType: "analytics",
  },
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "lead" | "fullstack" | "frontend">("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  // Render stylized interactive mockup header for each card
  const renderMockup = (type: Project["mockupType"]) => {
    switch (type) {
      case "invocreto":
        return (
          <div className="relative h-52 w-full bg-gradient-to-br from-indigo-950 via-dark-900 to-amber-950/60 p-4 flex flex-col justify-between overflow-hidden border-b border-white/10 group-hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-amber-500/20 rounded-full blur-2xl" />
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                <FaFileInvoiceDollar size={13} />
                <span>InvoCreto Core Suite</span>
              </span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                Next.js + Angular
              </span>
            </div>
            {/* Invoice & Distributed Service Mockup */}
            <div className="bg-dark-950/85 p-3 rounded-lg border border-white/10 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white font-semibold">Invoice #INV-2024-884</span>
                <span className="text-emerald-400 font-mono font-bold">$14,850.00 PAID</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">RabbitMQ Queue: Sync</span>
                <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">RPC: Active</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-2 border-t border-white/5">
              <span>Microservices & Docker</span>
              <span className="text-emerald-400">Frontend Lead Architecture</span>
            </div>
          </div>
        );

      case "indiacorporates":
        return (
          <div className="relative h-52 w-full bg-gradient-to-br from-blue-950 via-dark-900 to-cyan-950/60 p-4 flex flex-col justify-between overflow-hidden border-b border-white/10 group-hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <FaBuilding size={12} />
                <span>IndiaCorporates Workflows</span>
              </span>
              <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">
                End-to-End Lead
              </span>
            </div>
            {/* Dashboard Mockup */}
            <div className="bg-dark-950/80 p-3 rounded-lg border border-white/10 space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-300 text-[11px] font-mono">
                <span>Corporate Intelligence Feed</span>
                <span className="text-cyan-400">99.8% Uptime</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-1.5 rounded bg-white/5 text-[10px]">
                  <span className="text-slate-400 block">Workflows</span>
                  <span className="text-white font-bold">120+ Active</span>
                </div>
                <div className="p-1.5 rounded bg-white/5 text-[10px]">
                  <span className="text-slate-400 block">API Integrations</span>
                  <span className="text-emerald-400 font-bold">Verified</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-2 border-t border-white/5">
              <span>Interactive Dashboards</span>
              <span className="text-cyan-400">Full-Stack Delivery</span>
            </div>
          </div>
        );

      case "news":
        return (
          <div className="relative h-52 w-full bg-gradient-to-br from-amber-950/60 via-dark-900 to-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-white/10 group-hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl" />
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                <FaBolt size={12} />
                <span>NewsPulse Network</span>
              </span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                Production Live
              </span>
            </div>
            <div className="bg-dark-950/80 p-3 rounded-lg border border-white/10 space-y-1.5 text-xs">
              <div className="inline-block bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.5 rounded font-mono">
                Technology • Live Feed
              </div>
              <div className="font-semibold text-white truncate">
                Next.js High Performance Architecture
              </div>
              <div className="text-[11px] text-slate-400 truncate">
                Instant article hydration and global Netlify edge CDN...
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-2 border-t border-white/5">
              <span>ISR & Edge Caching</span>
              <span className="text-amber-400">news-app-gsp.netlify.app</span>
            </div>
          </div>
        );

      case "pos":
        return (
          <div className="relative h-52 w-full bg-gradient-to-br from-emerald-950/60 via-dark-900 to-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-white/10 group-hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                <RiDashboardLine size={13} />
                <span>OmniPoint POS</span>
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                Ready for Sale
              </span>
            </div>
            <div className="bg-dark-950/80 p-3 rounded-lg border border-white/10 space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-slate-300">
                <span>SKU #4891 Barcode Scan</span>
                <span className="text-emerald-400 font-bold">$124.50</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 w-3/4 rounded-full" />
              </div>
              <div className="text-[10px] text-slate-500 flex justify-between">
                <span>Offline Sync: Active</span>
                <span>Fast Thermal Print</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-2 border-t border-white/5">
              <span>Multi-store synchronization</span>
              <span className="text-emerald-400">Zero downtime</span>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="relative h-52 w-full bg-gradient-to-br from-cyan-950/70 via-dark-900 to-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-white/10 group-hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <FaChartLine size={12} />
                <span>GetShortLink Analytics</span>
              </span>
              <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">
                Real-Time
              </span>
            </div>
            <div className="flex items-end justify-between gap-2 h-20 px-3 py-2 bg-dark-950/70 rounded-lg border border-white/10">
              {[40, 65, 30, 85, 95, 70, 100, 80].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-cyan-500 to-indigo-500 transition-all duration-300"
                    style={{ height: `${val}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-2 border-t border-white/5">
              <span>Redirect latency: &lt;50ms</span>
              <span className="text-cyan-400">Redis & MongoDB</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 bg-dark-900/40 relative overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300 mb-3">
            <FaCode size={13} />
            <span>Live Projects & Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production Software &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-primary-300 to-cyan-300">
              Live Applications
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Directly showcasing InvoCreto, IndiaCorporates, and high-performance production web systems.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Projects" },
              { id: "lead", label: "InvoCreto & IndiaCorporates" },
              { id: "fullstack", label: "Full Stack Systems" },
              { id: "frontend", label: "Live Web Apps" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${
                  filter === tab.id
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/25"
                    : "bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:bg-dark-850"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid with Framer Motion AnimatePresence */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-panel rounded-2xl border border-white/10 hover:border-indigo-500/40 hover:bg-dark-850/80 transition-colors group flex flex-col justify-between overflow-hidden shadow-xl"
              >
                <div>
                  {/* Visual Mockup Header */}
                  {renderMockup(project.mockupType)}

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Badge & Subtitle */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-cyan-400 font-medium">
                        {project.subtitle}
                      </span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                        {project.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Impact Bullets */}
                    <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                      {project.impact.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-indigo-400 mt-0.5">
                            <FaCheckCircle size={10} />
                          </span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-dark-950/90 text-slate-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <FaGithub size={14} />
                    <span>Source Code</span>
                  </a>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600/20 border border-indigo-500/30 px-3 py-1.5 text-xs font-semibold text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                    >
                      <span>Live Preview</span>
                      <RiShareBoxLine size={13} />
                    </a>
                  )}
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
