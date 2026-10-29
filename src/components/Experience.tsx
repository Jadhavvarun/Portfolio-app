import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaCrown 
} from "react-icons/fa";
import { RiSparklingFill, RiBuildingLine } from "react-icons/ri";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isLead?: boolean;
  isCurrent?: boolean;
  type: "experience" | "education";
  badgeText?: string;
  highlights: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "invocreto-lead",
    role: "Frontend Lead",
    company: "invocreto",
    period: "2024 - Present",
    location: "Mumbai, India",
    isLead: true,
    isCurrent: true,
    type: "experience",
    badgeText: "Lead Role • Invoicing & Business Platform",
    highlights: [
      "Led the frontend development of invocreto, an enterprise business management and invoicing platform, using Next.js and Angular.",
      "Engineered a scalable frontend architecture with modular, reusable UI components and tokenized styling.",
      "Collaborated on backend and distributed service ecosystem using Node.js, Express.js, MongoDB, Microservice Architecture, RPC, RabbitMQ, and Docker.",
      "Implemented high-performance state handling and real-time invoicing workflows for high-frequency business transactions.",
    ],
    skills: ["Next.js", "Angular", "React.js", "Node.js", "MongoDB", "PostgreSQL", "RabbitMQ", "Microservices", "Docker"],
  },
  {
    id: "syntags-dev",
    role: "Software Developer & Team Lead",
    company: "Syntags Professional Services",
    period: "June 2024 - Present",
    location: "Mumbai, India",
    isCurrent: true,
    type: "experience",
    badgeText: "Team Lead (4 Devs) • Full Stack",
    highlights: [
      "Developed and maintained scalable full-stack applications using Angular, React.js, Next.js, TypeScript, Node.js, and Express.js.",
      "Improved Next.js performance by 40–50% through SSR, code splitting, and image optimization while enhancing SEO and achieving 90+ Lighthouse scores.",
      "Optimized Angular applications using lazy loading and OnPush change detection, reducing bundle size by 35%.",
      "Designed and integrated RESTful and GraphQL APIs; worked with Microservice Architecture, RPC-based communication, and RabbitMQ.",
      "Led a team of 4 developers, establishing reusable development practices and Agile workflows that reduced delivery time by approximately 30%.",
      "Worked with Docker, CI/CD pipelines, automated testing, staging, and production troubleshooting.",
    ],
    skills: ["Angular", "React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "GraphQL", "RabbitMQ", "Docker", "CI/CD"],
  },
  {
    id: "unipolar-dev",
    role: "Frontend Developer",
    company: "Unipolar Technologies Pvt Ltd",
    period: "Aug 2023 - May 2024",
    location: "Mumbai, India",
    type: "experience",
    badgeText: "Frontend & Deployment",
    highlights: [
      "Developed and maintained scalable web applications using React.js and Next.js, improving application performance through reusable components and optimized rendering techniques.",
      "Integrated and consumed RESTful APIs, enabling real-time data synchronization and efficient communication between frontend and backend systems.",
      "Deployed and maintained production applications on Vercel, Plesk, and FileZilla, streamlining release processes with minimal operational overhead.",
    ],
    skills: ["React.js", "Next.js", "RESTful APIs", "Vercel", "Plesk", "FileZilla", "Performance Optimization"],
  },
];

const educations: ExperienceItem[] = [
  {
    id: "mca-mu",
    role: "Masters in Computer Application (MCA)",
    company: "Mumbai University",
    period: "Aug 2021 - July 2023",
    location: "Mumbai, India",
    type: "education",
    badgeText: "Distinction • CGPA: 8.11 / 10.0",
    highlights: [
      "Completed Masters with a high CGPA of 8.11 / 10.0, specializing in advanced software architecture, data structures, and algorithms.",
      "Specialized in full-stack web applications, distributed computing, database management systems, and microservices.",
    ],
    skills: ["Data Structures", "Algorithms", "Software Architecture", "Database Systems", "Full-Stack Dev"],
  },
  {
    id: "bcom-mu",
    role: "Bachelors in Commerce (B.Com)",
    company: "Mumbai University",
    period: "Aug 2018 - Mar 2021",
    location: "Mumbai, India",
    type: "education",
    badgeText: "CGPA: 6.60 / 10.0",
    highlights: [
      "Built rigorous foundations in financial systems, business logic, quantitative methods, and data analysis.",
      "Self-directed mastery of modern web software engineering, JavaScript, and computer programming.",
    ],
    skills: ["Business Logic", "Financial Systems", "Quantitative Analysis"],
  },
];

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "experience" | "education">("all");

  const displayList = 
    activeTab === "experience" 
      ? experiences 
      : activeTab === "education" 
      ? educations 
      : [...experiences, ...educations];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-dark-900/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-cyan-500/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300 mb-3">
            <RiBuildingLine size={13} />
            <span>Verified Career Progression</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-primary-300 to-cyan-300">Engineering Leadership</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base md:text-lg">
            Proven leadership at invocreto and Syntags Professional Services — heading frontend architecture, leading a team of 4 developers, and shipping distributed full-stack systems.
          </p>

          {/* Filter Pills: Wrap cleanly on small screens */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 sm:mt-8">
            <button
              onClick={() => setActiveTab("all")}
              aria-pressed={activeTab === "all"}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all min-h-[38px] ${
                activeTab === "all"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-dark-800/80 text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              aria-pressed={activeTab === "experience"}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all min-h-[38px] ${
                activeTab === "experience"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-dark-800/80 text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              <FaBriefcase size={12} aria-hidden="true" />
              <span>Work & Leadership</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              aria-pressed={activeTab === "education"}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all min-h-[38px] ${
                activeTab === "education"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-dark-800/80 text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              <FaGraduationCap size={13} aria-hidden="true" />
              <span>Education</span>
            </button>
          </div>
        </motion.div>

        {/* Timeline Container: Left-aligned on mobile/tablet (< lg), Alternating on desktop (lg+) */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-3.5 sm:left-6 lg:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-cyan-500/50 to-transparent" />

          <div className="space-y-8 sm:space-y-12">
            <AnimatePresence mode="popLayout">
              {displayList.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="relative flex flex-col"
                  >
                    {/* Node Icon */}
                    <div
                      className={`absolute left-3.5 sm:left-6 lg:left-1/2 -translate-x-1/2 z-20 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full border-2 ${
                        item.isLead
                          ? "border-amber-400 bg-dark-950 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.6)]"
                          : item.type === "education"
                          ? "border-cyan-400 bg-dark-950 text-cyan-300"
                          : "border-indigo-500 bg-dark-950 text-indigo-400"
                      }`}
                      aria-hidden="true"
                    >
                      {item.isLead ? (
                        <FaCrown className="text-xs sm:text-sm" aria-hidden="true" />
                      ) : item.type === "education" ? (
                        <FaGraduationCap className="text-xs sm:text-sm" aria-hidden="true" />
                      ) : (
                        <FaBriefcase className="text-[11px] sm:text-xs" aria-hidden="true" />
                      )}
                    </div>

                    {/* Card Content: Full-width on mobile & tablet, alternating on desktop */}
                    <div
                      className={`pl-9 sm:pl-16 lg:pl-0 lg:w-1/2 w-full ${
                        isEven ? "lg:pr-10 lg:text-right" : "lg:pl-10 lg:ml-auto lg:text-left"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.012 }}
                        className={`glass-panel p-5 sm:p-7 rounded-2xl border transition-all duration-300 ${
                          item.isLead
                            ? "border-amber-500/40 bg-gradient-to-br from-indigo-950/40 via-dark-900 to-amber-950/20 shadow-[0_10px_35px_-5px_rgba(251,191,36,0.15)] ring-1 ring-amber-500/30"
                            : "border-white/10 hover:border-indigo-500/30 hover:bg-dark-850/80"
                        }`}
                      >
                        {/* Top Badges */}
                        <div
                          className={`flex flex-wrap items-center gap-2 mb-2.5 sm:mb-3 ${
                            isEven ? "lg:justify-end" : "lg:justify-start"
                          }`}
                        >
                          {item.badgeText && (
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 sm:px-3 py-0.5 text-[11px] sm:text-xs font-bold border ${
                                item.isLead
                                  ? "bg-amber-500/20 border-amber-500/40 text-amber-300"
                                  : item.type === "education"
                                  ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-300"
                                  : "bg-indigo-500/20 border-indigo-500/40 text-indigo-300"
                              }`}
                            >
                              {item.isLead && <RiSparklingFill size={11} aria-hidden="true" />}
                              {item.badgeText}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-slate-300 font-mono">
                            <FaCalendarAlt size={10} aria-hidden="true" />
                            {item.period}
                          </span>
                        </div>

                        {/* Role & Company */}
                        <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                          {item.role}
                        </h3>
                        <div
                          className={`text-xs sm:text-base font-semibold text-cyan-400 mt-1 flex flex-wrap items-center gap-1.5 sm:gap-2 ${
                            isEven ? "lg:justify-end" : "lg:justify-start"
                          }`}
                        >
                          <span>{item.company}</span>
                          <span className="text-slate-500 hidden xs:inline" aria-hidden="true">•</span>
                          <span className="text-[11px] sm:text-xs text-slate-300 font-normal flex items-center gap-1">
                            <FaMapMarkerAlt size={10} aria-hidden="true" />
                            {item.location}
                          </span>
                        </div>

                        {/* Highlights (Always left-aligned with nice indentation for readability) */}
                        <ul className="mt-3.5 sm:mt-4 space-y-2 text-xs sm:text-sm text-slate-300 text-left">
                          {item.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 sm:gap-2.5">
                              <span className="text-indigo-400 mt-0.5 sm:mt-1 shrink-0">
                                <FaCheckCircle className="text-[11px] sm:text-xs" aria-hidden="true" />
                              </span>
                              <span className="leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Chips */}
                        <div
                          className={`mt-4 sm:mt-5 flex flex-wrap gap-1.5 pt-3.5 sm:pt-4 border-t border-white/5 ${
                            isEven ? "lg:justify-end" : "lg:justify-start"
                          }`}
                        >
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-mono rounded-md bg-dark-950/80 border border-white/10 text-slate-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
