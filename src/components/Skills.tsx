import React, { useState } from "react";
import { 
  FaReact, 
  FaNodeJs, 
  FaGithub, 
  FaDocker, 
  FaLinux, 
  FaSass, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiMysql, 
  SiFirebase, 
  SiElectron, 
  SiRedux, 
  SiPostman, 
  SiVercel, 
  SiNetlify,
  SiGraphql
} from "react-icons/si";
import { 
  RiCodeSSlashLine, 
  RiServerLine, 
  RiTeamLine, 
  RiSpeedLine, 
  RiShieldCheckLine, 
  RiLayoutMasonryLine 
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
    name: "React 18 / 19",
    category: "frontend",
    icon: <FaReact size={26} />,
    proficiency: "Lead / Expert",
    highlight: "Hooks, Concurrent Mode, Virtual DOM",
    color: "#38bdf8",
  },
  {
    name: "Next.js (App & Pages)",
    category: "frontend",
    icon: <SiNextdotjs size={26} />,
    proficiency: "Lead / Expert",
    highlight: "SSR, SSG, ISR, API Routes, Turbopack",
    color: "#ffffff",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: <SiTypescript size={24} />,
    proficiency: "Lead / Expert",
    highlight: "Strict Typing, Generics, Type Guards",
    color: "#60a5fa",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: <SiTailwindcss size={26} />,
    proficiency: "Lead / Expert",
    highlight: "Design Tokens, Dark Mode, Custom Plugins",
    color: "#38bdf8",
  },
  {
    name: "Redux / Zustand",
    category: "frontend",
    icon: <SiRedux size={26} />,
    proficiency: "Advanced",
    highlight: "Global State, Slices, Selectors, Middleware",
    color: "#a855f7",
  },
  {
    name: "Modern JavaScript (ES6+)",
    category: "frontend",
    icon: <FaJsSquare size={26} />,
    proficiency: "Lead / Expert",
    highlight: "Async/Await, Closures, Event Loop, DOM",
    color: "#facc15",
  },
  {
    name: "HTML5 & Semantic Web",
    category: "frontend",
    icon: <FaHtml5 size={26} />,
    proficiency: "Lead / Expert",
    highlight: "Accessible markup, SEO, WCAG standards",
    color: "#f97316",
  },
  {
    name: "CSS3 & Sass",
    category: "frontend",
    icon: <FaSass size={26} />,
    proficiency: "Advanced",
    highlight: "Flexbox, Grid, Keyframes, Mixins",
    color: "#ec4899",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: <FaNodeJs size={26} />,
    proficiency: "Lead / Expert",
    highlight: "Event-driven runtime, Streams, Clustering",
    color: "#4ade80",
  },
  {
    name: "Express.js & REST APIs",
    category: "backend",
    icon: <RiServerLine size={26} />,
    proficiency: "Lead / Expert",
    highlight: "REST architecture, Middleware, JWT auth",
    color: "#94a3b8",
  },
  {
    name: "MongoDB & Mongoose",
    category: "backend",
    icon: <SiMongodb size={26} />,
    proficiency: "Advanced",
    highlight: "Aggregation pipelines, Indexing, Schemas",
    color: "#22c55e",
  },
  {
    name: "SQL & MySQL",
    category: "backend",
    icon: <SiMysql size={26} />,
    proficiency: "Advanced",
    highlight: "Relational queries, Joins, Transactions",
    color: "#38bdf8",
  },
  {
    name: "Firebase",
    category: "backend",
    icon: <SiFirebase size={26} />,
    proficiency: "Advanced",
    highlight: "Firestore, Realtime DB, Auth, Hosting",
    color: "#f59e0b",
  },
  {
    name: "GraphQL & APIs",
    category: "backend",
    icon: <SiGraphql size={26} />,
    proficiency: "Proficient",
    highlight: "Schema design, Queries, Resolvers",
    color: "#e11d48",
  },

  // Architecture & Leadership
  {
    name: "Design Systems & Tokens",
    category: "architecture",
    icon: <RiLayoutMasonryLine size={26} />,
    proficiency: "Lead / Expert",
    highlight: "Modular component suites & Atomic UI",
    color: "#c084fc",
  },
  {
    name: "Core Web Vitals & Perf",
    category: "architecture",
    icon: <RiSpeedLine size={26} />,
    proficiency: "Lead / Expert",
    highlight: "Sub-second LCP, CLS, Tree-shaking, Caching",
    color: "#10b981",
  },
  {
    name: "Code Reviews & Mentorship",
    category: "architecture",
    icon: <RiTeamLine size={26} />,
    proficiency: "Lead / Expert",
    highlight: "Guiding developers & enforcing standards",
    color: "#6366f1",
  },
  {
    name: "Microfrontends",
    category: "architecture",
    icon: <RiCodeSSlashLine size={26} />,
    proficiency: "Advanced",
    highlight: "Decoupled web apps, Module federation",
    color: "#38bdf8",
  },

  // Tools & DevOps
  {
    name: "Git & GitHub",
    category: "tools",
    icon: <FaGithub size={26} />,
    proficiency: "Lead / Expert",
    highlight: "Feature branches, Rebasing, CI/CD Actions",
    color: "#f1f5f9",
  },
  {
    name: "Docker Containerization",
    category: "tools",
    icon: <FaDocker size={26} />,
    proficiency: "Proficient",
    highlight: "Multi-stage builds, Containerized deployments",
    color: "#0284c7",
  },
  {
    name: "Linux & Bash",
    category: "tools",
    icon: <FaLinux size={26} />,
    proficiency: "Advanced",
    highlight: "Shell scripting, Server configs, Terminal CLI",
    color: "#facc15",
  },
  {
    name: "Postman",
    category: "tools",
    icon: <SiPostman size={26} />,
    proficiency: "Advanced",
    highlight: "API contract testing, Mocking, Collections",
    color: "#f97316",
  },
  {
    name: "Electron.js",
    category: "tools",
    icon: <SiElectron size={26} />,
    proficiency: "Proficient",
    highlight: "Cross-platform desktop application dev",
    color: "#06b6d4",
  },
  {
    name: "Vercel & Netlify",
    category: "tools",
    icon: <SiVercel size={24} />,
    proficiency: "Lead / Expert",
    highlight: "Edge functions, Preview deployments, DNS",
    color: "#ffffff",
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
    <section id="skills" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-primary-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
            <RiCodeSSlashLine size={14} />
            <span>Technical Repertoire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Full-Stack Depth &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              Frontend Craftsmanship
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A comprehensive overview of the technologies, architectures, and engineering philosophies that drive my work at Invocreto and beyond.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Skills" },
              { id: "frontend", label: "Frontend & UI" },
              { id: "backend", label: "Backend & DB" },
              { id: "architecture", label: "Architecture & Lead" },
              { id: "tools", label: "Tools & DevOps" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${
                  activeCategory === tab.id
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/25"
                    : "bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:bg-dark-850"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel p-5 rounded-xl border border-white/10 hover:border-indigo-500/40 hover:bg-dark-850/80 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="p-2.5 rounded-lg bg-dark-950/80 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-md"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold border ${
                      skill.proficiency === "Lead / Expert"
                        ? "bg-indigo-500/15 text-indigo-300 border-indigo-500/30"
                        : skill.proficiency === "Advanced"
                        ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                        : "bg-slate-700/20 text-slate-300 border-white/10"
                    }`}
                  >
                    {skill.proficiency}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {skill.highlight}
                </p>
              </div>

              {/* Category indicator line */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span className="capitalize">{skill.category}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-indigo-400 transition-colors"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Cards (Lead Pillars) */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Frontend Leadership Principles
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              How I empower teams, maintain quality, and deliver velocity at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all" />
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                <RiSpeedLine size={22} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Performance by Design</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sub-second time-to-interactive, route-based code splitting, dynamic asset compression, and eliminating unnecessary re-renders.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <RiLayoutMasonryLine size={22} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Design System Governance</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Building tokenized, reusable component ecosystems that accelerate development and maintain strict brand fidelity across all products.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <RiTeamLine size={22} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Mentorship & Code Standards</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Leading thoughtful pull request reviews, upholding TypeScript type safety, pair programming, and nurturing team growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
