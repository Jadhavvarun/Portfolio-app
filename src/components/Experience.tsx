import React, { useState } from "react";
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
  highlights: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "invocreto-lead",
    role: "Frontend Lead",
    company: "Invocreto",
    period: "2024 - Present",
    location: "Mumbai, India",
    isLead: true,
    isCurrent: true,
    type: "experience",
    highlights: [
      "Head the frontend engineering team, directing architectural roadmap, design system standards, and technical governance.",
      "Architected enterprise-level web applications utilizing Next.js 14, React, TypeScript, and high-performance state management.",
      "Established standardized code reviews, TypeScript strict mode guidelines, and automated CI/CD checks across client repositories.",
      "Pioneered web performance initiatives, slashing Largest Contentful Paint (LCP) and securing 95+ Core Web Vitals across production platforms.",
      "Bridged engineering and product design teams to ship scalable, accessible, and delight-inducing user interfaces.",
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Architecture", "Design Systems", "Code Review", "Mentorship"],
  },
  {
    id: "syntags-dev",
    role: "Frontend Developer",
    company: "Syntags Consultancy & Services Pvt. Ltd.",
    period: "June 2024 - Late 2024",
    location: "Mumbai, India",
    type: "experience",
    highlights: [
      "Engineered high-velocity, responsive web portals using React, Next.js, and modern CSS frameworks.",
      "Collaborated closely with UX designers to implement pixel-perfect, mobile-first layouts.",
      "Integrated complex RESTful API payloads and improved state handling and client caching.",
    ],
    skills: ["React", "Next.js", "Tailwind CSS", "REST APIs", "State Management"],
  },
  {
    id: "unipolar-dev",
    role: "Frontend Developer",
    company: "Unipolar Technologies Pvt. Ltd.",
    period: "July 2023 - June 2024",
    location: "Mumbai, India",
    type: "experience",
    highlights: [
      "Engineered, maintained, and delivered client-facing web applications with React and PHP.",
      "Executed critical performance optimizations, boosting overall page load speed by 30%.",
      "Built custom interactive components and solved cross-browser compatibility issues.",
    ],
    skills: ["React", "JavaScript", "HTML5/CSS3", "PHP", "Performance Tuning"],
  },
  {
    id: "unipolar-intern",
    role: "Software Developer Intern",
    company: "Unipolar Technologies Pvt. Ltd.",
    period: "Feb 2023 - July 2023",
    location: "Mumbai, India",
    type: "experience",
    highlights: [
      "Collaborated on building reusable UI components and client layout templates.",
      "Mastered version control workflows with Git & GitHub in real agile team sprints.",
      "Assisted senior engineers in debugging frontend issues and writing maintainable code.",
    ],
    skills: ["JavaScript", "HTML/CSS", "Git", "Agile Sprints", "Debugging"],
  },
];

const educations: ExperienceItem[] = [
  {
    id: "mca-sterling",
    role: "Masters in Computer Applications (MCA)",
    company: "Sterling Institute of Management Studies",
    period: "Aug 2021 - July 2023",
    location: "Navi Mumbai, India",
    type: "education",
    highlights: [
      "Graduated with Distinction: CGPA 8.11 / 10.0",
      "Specialized in Advanced Web Technologies, Software Engineering, Database Systems, and Algorithms.",
      "Led final capstone project: Full-Stack E-Commerce & Inventory Management System.",
    ],
    skills: ["Data Structures", "Algorithms", "Software Engineering", "Full-Stack Web Dev", "Database Management"],
  },
  {
    id: "bcom-sydenham",
    role: "Bachelor of Commerce (B.Com)",
    company: "Sydenham College of Commerce and Economics",
    period: "June 2018 - Mar 2021",
    location: "Mumbai, India",
    type: "education",
    highlights: [
      "Graduated with strong foundations in business logic, quantitative methods, and analytical thinking.",
      "Simultaneously self-studied computer science fundamentals, web standards, and modern programming.",
    ],
    skills: ["Business Logic", "Analytical Thinking", "Finance & Systems"],
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
    <section id="experience" className="py-24 bg-dark-900/60 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300 mb-3">
            <RiBuildingLine size={13} />
            <span>Career Progression & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Leadership Journey</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            From hands-on frontend engineering to spearheading technical architecture and teams as Frontend Lead at Invocreto.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${
                activeTab === "all"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-dark-800/80 text-slate-400 hover:text-white border border-white/5"
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${
                activeTab === "experience"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-dark-800/80 text-slate-400 hover:text-white border border-white/5"
              }`}
            >
              <FaBriefcase size={12} />
              <span>Work & Leadership</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${
                activeTab === "education"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-dark-800/80 text-slate-400 hover:text-white border border-white/5"
              }`}
            >
              <FaGraduationCap size={13} />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-cyan-500/50 to-transparent" />

          <div className="space-y-12">
            {displayList.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col ${
                    item.isLead
                      ? "sm:scale-[1.02] transition-transform duration-300"
                      : ""
                  }`}
                >
                  {/* Center Node Icon */}
                  <div
                    className={`absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border-2 ${
                      item.isLead
                        ? "border-amber-400 bg-dark-950 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.6)]"
                        : item.type === "education"
                        ? "border-cyan-400 bg-dark-950 text-cyan-300"
                        : "border-indigo-500 bg-dark-950 text-indigo-400"
                    }`}
                  >
                    {item.isLead ? (
                      <FaCrown size={15} />
                    ) : item.type === "education" ? (
                      <FaGraduationCap size={15} />
                    ) : (
                      <FaBriefcase size={13} />
                    )}
                  </div>

                  {/* Card Content - Full Width on Mobile, Alternating on Desktop */}
                  <div
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${
                      isEven ? "sm:pr-10 sm:text-right" : "sm:pl-10 sm:ml-auto sm:text-left"
                    }`}
                  >
                    <div
                      className={`glass-panel p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                        item.isLead
                          ? "border-amber-500/40 bg-gradient-to-br from-indigo-950/40 via-dark-900 to-amber-950/20 shadow-[0_10px_35px_-5px_rgba(251,191,36,0.15)] ring-1 ring-amber-500/30"
                          : "border-white/10 hover:border-indigo-500/30 hover:bg-dark-850/80"
                      }`}
                    >
                      {/* Top Badges */}
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-3 ${
                          isEven ? "sm:justify-end" : "sm:justify-start"
                        }`}
                      >
                        {item.isLead && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 px-3 py-1 text-xs font-bold text-amber-300">
                            <RiSparklingFill size={12} />
                            LEAD ROLE • CURRENT
                          </span>
                        )}
                        {item.isCurrent && !item.isLead && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Current
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                          <FaCalendarAlt size={10} />
                          {item.period}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {item.role}
                      </h3>
                      <div className="text-sm sm:text-base font-semibold text-cyan-400 mt-1 flex items-center gap-2">
                        <span>{item.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs text-slate-400 font-normal flex items-center gap-1">
                          <FaMapMarkerAlt size={10} />
                          {item.location}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-300 text-left">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-indigo-400 mt-1 shrink-0">
                              <FaCheckCircle size={12} />
                            </span>
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div
                        className={`mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-white/5 ${
                          isEven ? "sm:justify-end" : "sm:justify-start"
                        }`}
                      >
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-dark-950/80 border border-white/10 text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
