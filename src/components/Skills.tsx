import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaGithub, 
  FaDocker, 
  FaFigma,
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare,
  FaAngular
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiMysql, 
  SiFirebase, 
  SiPostman, 
  SiVercel, 
  SiGraphql,
  SiFramer
} from "react-icons/si";
import { 
  RiCodeSSlashLine, 
  RiServerLine, 
  RiTeamLine, 
  RiSpeedLine, 
  RiLayoutMasonryLine,
  RiFlowChart
} from "react-icons/ri";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "architecture" | "tools";
  icon: React.ReactNode;
  proficiency: "Lead / Expert" | "Advanced" | "Proficient";
  highlight: string;
  color: string;
}

const skillsList: SkillItem[] = [
  // Frontend
  {
    name: "Next.js (App & Pages)",
    category: "frontend",
    icon: <SiNextdotjs size={24} aria-label="Next.js" role="img" />,
    proficiency: "Lead / Expert",
    highlight: "SSR, SSG, 40–50% performance uplift, 90+ Lighthouse",
    color: "#ffffff",
  },
  {
    name: "React.js",
    category: "frontend",
    icon: <FaReact size={24} aria-label="React.js" role="img" />,
    proficiency: "Lead / Expert",
    highlight: "Custom hooks, state architectures, reusable UI modules",
    color: "#38bdf8",
  },
  {
    name: "Angular",
    category: "frontend",
    icon: <FaAngular size={24} aria-label="Angular" role="img" />,
    proficiency: "Advanced",
    highlight: "Lazy loading, OnPush change detection, 35% bundle reduction",
    color: "#ef4444",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: <SiTypescript size={22} aria-label="TypeScript" role="img" />,
    proficiency: "Lead / Expert",
    highlight: "Strict type systems, generics, interface contracts",
    color: "#60a5fa",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: <SiTailwindcss size={24} aria-label="Tailwind CSS" role="img" />,
    proficiency: "Lead / Expert",
    highlight: "Design tokens, utility-first design, fluid responsive layouts",
    color: "#38bdf8",
  },
  {
    name: "Framer Motion",
    category: "frontend",
    icon: <SiFramer size={22} aria-label="Framer Motion" role="img" />,
    proficiency: "Lead / Expert",
    highlight: "Physics-based micro-interactions, layout transitions, keyframes",
    color: "#e879f9",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: <FaJsSquare size={24} aria-label="JavaScript" role="img" />,
    proficiency: "Lead / Expert",
    highlight: "Async/await, closures, DOM manipulation, event loop",
    color: "#facc15",
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    icon: <FaHtml5 size={24} aria-label="HTML5 and CSS3" role="img" />,
    proficiency: "Lead / Expert",
    highlight: "Semantic markup, accessibility, modern Flexbox & Grid",
    color: "#f97316",
  },

  // Backend
  {
    name: "Node.js & Express.js",
    category: "backend",
    icon: <FaNodeJs size={24} aria-label="Node.js and Express.js" role="img" />,
    proficiency: "Lead / Expert",
    highlight: "RESTful APIs, middleware pipelines, distributed backends",
    color: "#4ade80",
  },
  {
    name: "RabbitMQ",
    category: "backend",
    icon: <RiFlowChart size={24} aria-label="RabbitMQ" role="img" />,
    proficiency: "Advanced",
    highlight: "Asynchronous messaging & distributed queue processing",
    color: "#fb923c",
  },
  {
    name: "Microservices & RPC",
    category: "backend",
    icon: <RiServerLine size={24} aria-label="Microservices & RPC" role="img" />,
    proficiency: "Advanced",
    highlight: "Decoupled microservices & RPC communication protocols",
    color: "#818cf8",
  },
  {
    name: "GraphQL & REST APIs",
    category: "backend",
    icon: <SiGraphql size={24} aria-label="GraphQL & REST APIs" role="img" />,
    proficiency: "Advanced",
    highlight: "Schema design, queries, mutations, API integration",
    color: "#f43f5e",
  },
  {
    name: "MongoDB",
    category: "backend",
    icon: <SiMongodb size={24} aria-label="MongoDB" role="img" />,
    proficiency: "Advanced",
    highlight: "Document schemas, indexing, aggregation pipelines",
    color: "#22c55e",
  },
  {
    name: "PostgreSQL & MySQL",
    category: "backend",
    icon: <SiPostgresql size={24} aria-label="PostgreSQL & MySQL" role="img" />,
    proficiency: "Advanced",
    highlight: "Relational queries, transactions, schema integrity",
    color: "#38bdf8",
  },

  // Architecture & Leadership
  {
    name: "Team Leadership (4 Devs)",
    category: "architecture",
    icon: <RiTeamLine size={24} aria-label="Team Leadership" role="img" />,
    proficiency: "Lead / Expert",
    highlight: "Led team of 4, reduced delivery time by ~30% with Agile",
    color: "#6366f1",
  },
  {
    name: "Performance & SEO (90+)",
    category: "architecture",
    icon: <RiSpeedLine size={24} aria-label="Performance & SEO" role="img" />,
    proficiency: "Lead / Expert",
    highlight: "40–50% Next.js speedup, 90+ Lighthouse, bundle optimization",
    color: "#10b981",
  },
  {
    name: "Modular Architecture",
    category: "architecture",
    icon: <RiLayoutMasonryLine size={24} aria-label="Modular Architecture" role="img" />,
    proficiency: "Lead / Expert",
    highlight: "Reusable UI component libraries, scalable frontend patterns",
    color: "#c084fc",
  },

  // Tools & DevOps
  {
    name: "Docker & CI/CD",
    category: "tools",
    icon: <FaDocker size={24} aria-label="Docker and CI/CD" role="img" />,
    proficiency: "Advanced",
    highlight: "Containerization, automated build/test/deployment lifecycle",
    color: "#0284c7",
  },
  {
    name: "Git & Version Control",
    category: "tools",
    icon: <FaGithub size={24} aria-label="Git & Version Control" role="img" />,
    proficiency: "Lead / Expert",
    highlight: "Branch strategies, collaborative Agile PR reviews, releases",
    color: "#f1f5f9",
  },
  {
    name: "Figma",
    category: "tools",
    icon: <FaFigma size={22} aria-label="Figma" role="img" />,
    proficiency: "Advanced",
    highlight: "Design-to-code translation, wireframing, UX collaboration",
    color: "#a855f7",
  },
  {
    name: "Postman & API Testing",
    category: "tools",
    icon: <SiPostman size={24} aria-label="Postman & API Testing" role="img" />,
    proficiency: "Advanced",
    highlight: "API contract testing, environment mocks, automation",
    color: "#f97316",
  },
  {
    name: "Vercel & Plesk",
    category: "tools",
    icon: <SiVercel size={22} aria-label="Vercel & Plesk" role="img" />,
    proficiency: "Lead / Expert",
    highlight: "Production deployments, server management, edge optimizations",
    color: "#ffffff",
  },
  {
    name: "Firebase",
    category: "tools",
    icon: <SiFirebase size={24} aria-label="Firebase" role="img" />,
    proficiency: "Proficient",
    highlight: "Realtime databases, authentication, cloud storage",
    color: "#f59e0b",
  },
];

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "frontend" | "backend" | "architecture" | "tools"
  >("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsList
      : skillsList.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" aria-label="Skills & Modern Tooling" className="py-16 sm:py-24 bg-dark-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[350px] sm:w-[600px] h-[300px] sm:h-[400px] bg-primary-600/10 rounded-full blur-[60px] sm:blur-[140px] transform-gpu pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] sm:w-[450px] h-[250px] sm:h-[350px] bg-cyan-600/10 rounded-full blur-[60px] sm:blur-[130px] transform-gpu pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
            <RiCodeSSlashLine size={14} />
            <span>Updated Skill Spectrum</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Full-Stack Depth &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              Modern Tooling
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base md:text-lg">
            Directly mapped from production experience — Next.js, Angular, React, TypeScript, Node.js, RabbitMQ, Docker, and distributed microservices.
          </p>

          {/* Category Tabs: Smooth wrapping for mobile & tablet */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {[
              { id: "all", label: "All Skills" },
              { id: "frontend", label: "Frontend & UI" },
              { id: "backend", label: "Backend & Distributed" },
              { id: "architecture", label: "Leadership & Perf" },
              { id: "tools", label: "DevOps & Tools" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                aria-pressed={activeCategory === tab.id}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all min-h-[38px] ${
                  activeCategory === tab.id
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/25"
                    : "bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:bg-dark-850"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid: 1 col on small phone, 2 cols on xs (480px+), 3 on tablet (md: 768px+), 4 on desktop (lg: 1024px+) */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="glass-panel p-4 sm:p-5 rounded-xl border border-white/10 hover:border-indigo-500/40 hover:bg-dark-850/80 hover:-translate-y-1 transition-all duration-200 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <div
                      className="p-2 sm:p-2.5 rounded-lg bg-dark-950/80 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-md shrink-0"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold border truncate max-w-[120px] ${
                        skill.proficiency === "Lead / Expert"
                          ? "bg-indigo-500/15 text-indigo-300 border-indigo-500/30"
                          : skill.proficiency === "Advanced"
                          ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                          : "bg-slate-700/20 text-slate-200 border-white/15"
                      }`}
                    >
                      {skill.proficiency}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-relaxed">
                    {skill.highlight}
                  </p>
                </div>

                {/* Category indicator line */}
                <div className="mt-3.5 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-300">
                  <span className="capitalize">{skill.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-indigo-400 transition-colors"></span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Engineering Highlights Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 sm:mt-20 pt-12 sm:pt-16 border-t border-white/10"
        >
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Engineering Leadership in Action
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 sm:mt-2">
              Metrics and real-world outcomes delivered across production codebases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-200">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all" />
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3.5 sm:mb-4">
                <RiSpeedLine size={20} />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">40–50% Performance Boost</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Next.js SSR, code splitting, and image optimization achieving 90+ Lighthouse; 35% Angular bundle reduction via lazy loading and OnPush.
              </p>
            </div>

            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-200">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3.5 sm:mb-4">
                <RiTeamLine size={20} />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Team Leadership (4 Devs)</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Led a team of 4 developers, established reusable development practices and Agile workflows, reducing delivery cycle times by approximately 30%.
              </p>
            </div>

            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-200">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-3.5 sm:mb-4">
                <RiServerLine size={20} />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Distributed Microservices</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Asynchronous communication pipelines with RabbitMQ, RPC protocols, RESTful & GraphQL APIs, and Docker containerization.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
