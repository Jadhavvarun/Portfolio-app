import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhoneAlt,
  FaDownload, 
  FaArrowRight, 
  FaTerminal, 
  FaCode, 
  FaCheck, 
  FaCopy 
} from "react-icons/fa";
import { RiSparklingFill, RiShieldCheckLine, RiCompassDiscoverLine } from "react-icons/ri";

const ROLES = [
  "Frontend Lead @ invocreto",
  "Full-Stack Software Developer",
  "Next.js & React Architect",
  "Angular & TypeScript Specialist",
  "Microservices & Performance Lead",
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState(ROLES[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "terminal" | "leadership">("code");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Terminal state
  const [cliInput, setCliInput] = useState("");
  const [cliOutput, setCliOutput] = useState<string[]>([
    "Welcome to Varun Jadhav's interactive console (v2.0).",
    "Type 'help' or click quick commands below to explore.",
  ]);

  // Typing effect for the headline role
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;
    // When the full word is displayed, wait 2.5s before deleting. This gives reading time and prevents timer thrashing during initial hydration.
    const delay = !isDeleting && displayedRole === currentRole ? 2500 : typingSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedRole.length < currentRole.length) {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
      } else if (!isDeleting && displayedRole.length === currentRole.length) {
        setIsDeleting(true);
      } else if (isDeleting && displayedRole.length > 0) {
        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
      } else if (isDeleting && displayedRole.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  const copyEmail = () => {
    navigator.clipboard.writeText("jadhavvarun67@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("7738412722");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: string[] = [];

    switch (trimmed) {
      case "help":
        response = [
          "Available commands:",
          "  • lead       - Frontend Lead @ invocreto & Team Leadership details",
          "  • stack      - View full-stack technologies & microservices",
          "  • projects   - View invocreto & IndiaCorporates highlights",
          "  • contact    - Get email, phone, and coordinates",
          "  • clear      - Clear terminal history",
        ];
        break;
      case "lead":
        response = [
          "👑 FRONTEND LEAD & TEAM LEADERSHIP:",
          "  - invocreto: Spearheaded frontend architecture of invoicing & business management platform",
          "  - Syntags: Led a high-performing team of 4 developers, cutting delivery cycles by 30%",
          "  - Performance: 40-50% speed uplift in Next.js, 90+ Lighthouse, 35% bundle reduction in Angular",
        ];
        break;
      case "stack":
        response = [
          "⚡ CORE TECH STACK:",
          "  - Frontend: React.js, Next.js, Angular, TypeScript, Tailwind CSS, Framer Motion",
          "  - Backend: Node.js (Express), RESTful & GraphQL APIs, Microservices, RPC, RabbitMQ",
          "  - Databases: MongoDB, PostgreSQL, MySQL",
          "  - DevOps: Docker, CI/CD, Git, Vercel, Plesk, Figma, Firebase",
        ];
        break;
      case "projects":
        response = [
          "🚀 FEATURED LIVE PROJECTS:",
          "  - invocreto: Next.js, Angular, Node.js, MongoDB, RabbitMQ, Microservices",
          "  - IndiaCorporates: End-to-end full stack corporate workflows & interactive dashboards",
        ];
        break;
      case "contact":
        response = [
          "📫 DIRECT CONTACT COORDINATES:",
          "  - Email: jadhavvarun67@gmail.com",
          "  - Phone: +91 7738412722",
          "  - LinkedIn: linkedin.com/in/varun-jadhav-620814152",
          "  - Location: Mumbai, India",
        ];
        break;
      case "clear":
        setCliOutput([]);
        setCliInput("");
        return;
      default:
        response = [
          `Command not found: '${trimmed}'. Try typing 'help', 'lead', 'stack', 'projects', or 'contact'.`,
        ];
    }

    setCliOutput((prev) => [...prev, `$ ${cmd}`, ...response]);
    setCliInput("");
  };

  return (
    <section
      id="about"
      className="relative min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 flex items-center overflow-hidden bg-dark-950"
    >
      {/* Animated Floating Gradient Mesh Background (GPU-composited CSS) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] lg:w-[700px] h-[350px] sm:h-[450px] bg-indigo-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none animate-pulse-slow will-change-transform"
      />
      <div
        className="absolute top-1/3 -left-32 w-[300px] sm:w-[450px] h-[300px] sm:h-[400px] bg-cyan-500/12 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none animate-float will-change-transform"
      />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left w-full"
          >
            {/* Lead Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/50 px-3 sm:px-3.5 py-1.5 backdrop-blur-md mb-3 sm:mb-4 lg:mb-5 shadow-sm shadow-indigo-500/10 max-w-full text-xs"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold uppercase tracking-wider text-indigo-300 text-[10px] xs:text-[11px] sm:text-xs truncate">
                Frontend Lead @ invocreto
              </span>
              <span className="text-slate-600 hidden xs:inline">•</span>
              <span className="text-cyan-300 font-medium text-[10px] xs:text-[11px] sm:text-xs hidden xs:inline truncate">
                Team Lead (4 Devs)
              </span>
            </motion.div>

            {/* Main Headline with generous vertical spacing for desktop */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2] sm:leading-[1.15] lg:leading-[1.18] my-3 sm:my-5 lg:my-8 break-words w-full">
              Architecting Enterprise Systems &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-primary-300 to-cyan-300">
                High-Performance
              </span>{" "}
              Web Apps.
            </h1>

            {/* Rotating Role Pill */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 mb-4 sm:mb-5 lg:mb-6 min-h-[32px] sm:min-h-[36px] w-full">
              <span className="text-slate-400 font-mono text-xs sm:text-sm md:text-base shrink-0">
                I am a
              </span>
              <div className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30 font-mono text-xs sm:text-sm md:text-base font-semibold text-cyan-300 shadow-inner max-w-full truncate">
                <span className="truncate">{displayedRole}</span>
                <span className="ml-1 w-1.5 h-3.5 sm:h-4 bg-cyan-400 inline-block animate-pulse shrink-0"></span>
              </div>
            </div>

            {/* Narrative Summary */}
            <p className="text-slate-300 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-6 sm:mb-8">
              Full-Stack Software Developer & Frontend Lead at <strong className="text-white">invocreto</strong>. Experienced in building scalable applications with <strong className="text-cyan-300">Next.js</strong>, <strong className="text-indigo-300">React.js</strong>, <strong className="text-rose-300">Angular</strong>, and <strong className="text-emerald-300">Node.js</strong>. Proven track record leading a team of 4 developers, boosting web performance by 40–50% (90+ Lighthouse), and designing microservices with RabbitMQ and Docker.
            </p>

            {/* CTAs: Responsive layout for mobile (stacked primary + 2-col secondary) and row on desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mb-6 sm:mb-8 lg:mb-10 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-primary-600 to-cyan-600 px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all text-center w-full sm:w-auto"
              >
                <span>Explore invocreto & Projects</span>
                <FaArrowRight size={12} />
              </motion.a>

              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#experience"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-white/10 bg-dark-900/80 px-3 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-slate-200 hover:border-indigo-500/40 hover:bg-dark-850 hover:text-white transition-all backdrop-blur-md text-center"
                >
                  <RiCompassDiscoverLine size={15} className="text-indigo-400 shrink-0" />
                  <span className="truncate">Experience</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-white/10 bg-dark-900/60 px-3 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
                  title="Copy Varun's Email"
                >
                  {copiedEmail ? (
                    <>
                      <FaCheck size={12} className="text-emerald-400 shrink-0" />
                      <span className="text-emerald-300 text-xs truncate">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy size={12} className="text-cyan-400 shrink-0" />
                      <span className="text-xs truncate">Copy Email</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-4 border-t border-white/10 w-full text-xs">
              <span className="uppercase font-mono tracking-wider text-slate-500 text-[11px] sm:text-xs">
                Direct
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <a
                  href="https://github.com/Jadhavvarun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/in/varun-jadhav-620814152/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={15} />
                </a>
                <a
                  href="mailto:jadhavvarun67@gmail.com"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all"
                  aria-label="Email"
                >
                  <FaEnvelope size={14} />
                </a>
                <button
                  onClick={copyPhone}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-emerald-300 hover:border-emerald-500/40 transition-all font-mono text-[11px] sm:text-xs"
                  title="Copy Phone Number"
                >
                  <FaPhoneAlt size={10} className="text-emerald-400" />
                  <span>{copiedPhone ? "Copied!" : "+91 7738412722"}</span>
                </button>
                <a
                  href="/varun_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono font-medium text-indigo-400 hover:text-indigo-300 transition-colors ml-0.5"
                >
                  <FaDownload size={11} />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive macOS Glass Window (Tablet & Mobile Optimized) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 w-full mt-4 lg:mt-0"
          >
            <div className="relative rounded-2xl glass-panel border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden w-full">
              {/* Window Header */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10 bg-dark-950/70 gap-2">
                {/* Traffic Lights */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-rose-500/80 inline-block shadow-sm"></span>
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-500/80 inline-block shadow-sm"></span>
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm"></span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-dark-900/90 rounded-lg p-0.5 border border-white/5 overflow-x-auto max-w-full">
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-mono rounded-md transition-colors shrink-0 ${
                      activeTab === "code"
                        ? "bg-indigo-600/30 text-indigo-300 font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <FaCode size={10} />
                    <span>profile.ts</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("leadership")}
                    className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-mono rounded-md transition-colors shrink-0 ${
                      activeTab === "leadership"
                        ? "bg-indigo-600/30 text-indigo-300 font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <RiShieldCheckLine size={11} />
                    <span>lead.md</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-mono rounded-md transition-colors shrink-0 ${
                      activeTab === "terminal"
                        ? "bg-indigo-600/30 text-indigo-300 font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <FaTerminal size={9} />
                    <span>terminal</span>
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-3.5 sm:p-5 font-mono text-xs sm:text-sm bg-dark-950/90 min-h-[300px] xs:min-h-[330px] sm:min-h-[380px] flex flex-col justify-between">
                {activeTab === "code" && (
                  <div className="space-y-1 sm:space-y-1.5 text-slate-300 select-text overflow-x-auto text-[11px] sm:text-xs md:text-sm">
                    <p className="text-slate-500">{"// Varun Jadhav - Lead Profile"}</p>
                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-300">leadDeveloper</span>:{" "}
                      <span className="text-yellow-300">DeveloperProfile</span> = {"{"}
                    </p>
                    <p className="pl-3 sm:pl-4">
                      <span className="text-slate-400">name:</span>{" "}
                      <span className="text-emerald-300">&quot;Varun Jadhav&quot;</span>,
                    </p>
                    <p className="pl-3 sm:pl-4">
                      <span className="text-slate-400">roles:</span> [
                      <span className="text-emerald-300">&quot;Frontend Lead @ invocreto&quot;</span>,{" "}
                      <span className="text-emerald-300">&quot;Syntags Lead&quot;</span>
                      ],
                    </p>
                    <p className="pl-3 sm:pl-4">
                      <span className="text-slate-400">teamLeadership:</span>{" "}
                      <span className="text-cyan-300">&quot;Led 4 devs (-30% delivery)&quot;</span>,
                    </p>
                    <p className="pl-3 sm:pl-4">
                      <span className="text-slate-400">frontend:</span> [
                      <span className="text-cyan-300">&quot;Next.js&quot;</span>,{" "}
                      <span className="text-cyan-300">&quot;React.js&quot;</span>,{" "}
                      <span className="text-cyan-300">&quot;Angular&quot;</span>
                      ],
                    </p>
                    <p className="pl-3 sm:pl-4">
                      <span className="text-slate-400">distributedBackend:</span> [
                      <span className="text-amber-300">&quot;Node.js&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;RabbitMQ&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;Microservices&quot;</span>
                      ],
                    </p>
                    <p className="pl-3 sm:pl-4">
                      <span className="text-slate-400">databases:</span> [
                      <span className="text-emerald-300">&quot;MongoDB&quot;</span>,{" "}
                      <span className="text-emerald-300">&quot;PostgreSQL&quot;</span>
                      ],
                    </p>
                    <p className="pl-3 sm:pl-4">
                      <span className="text-slate-400">performance:</span> {"{"}{" "}
                      <span className="text-purple-300">uplift:</span>{" "}
                      <span className="text-yellow-300">&quot;40-50%&quot;</span>,{" "}
                      <span className="text-purple-300">lighthouse:</span>{" "}
                      <span className="text-yellow-300">&quot;90+&quot;</span>{" "}
                      {"}"},
                    </p>
                    <p>{"};"}</p>
                    <p className="text-slate-500 pt-1.5 sm:pt-2">
                      <span className="text-emerald-400">✔</span> System compiled with 0 errors.
                    </p>
                  </div>
                )}

                {activeTab === "leadership" && (
                  <div className="space-y-2.5 sm:space-y-3 text-slate-300 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/10 text-white font-semibold">
                      <RiSparklingFill className="text-cyan-400 shrink-0" />
                      <span>Leadership & Technical Milestones</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold shrink-0">▸</span>
                        <span>
                          <strong className="text-white">Frontend Lead @ invocreto:</strong> Architected invoicing and business platform with Next.js & Angular.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400 font-bold shrink-0">▸</span>
                        <span>
                          <strong className="text-white">Team Lead (4 Devs) @ Syntags:</strong> Reduced delivery time by 30% through reusable component architecture & Agile.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">▸</span>
                        <span>
                          <strong className="text-white">40–50% Performance Boost:</strong> Next.js SSR & image optimization (90+ Lighthouse); 35% bundle cut in Angular via OnPush.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold shrink-0">▸</span>
                        <span>
                          <strong className="text-white">Microservices & RPC:</strong> Asynchronous pipelines with RabbitMQ, Docker, and CI/CD automation.
                        </span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === "terminal" && (
                  <div className="flex flex-col justify-between h-full space-y-3">
                    <div className="space-y-1.5 overflow-y-auto max-h-[190px] sm:max-h-[220px] text-[11px] sm:text-xs">
                      {cliOutput.map((line, idx) => (
                        <p
                          key={idx}
                          className={`${
                            line.startsWith("$")
                              ? "text-cyan-400 font-semibold"
                              : line.includes("👑") || line.includes("⚡") || line.includes("🚀") || line.includes("📫")
                              ? "text-indigo-300 font-bold"
                              : "text-slate-300"
                          }`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-white/10">
                      {/* Quick Action Chips */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {["help", "lead", "stack", "projects", "contact", "clear"].map((cmd) => (
                          <button
                            key={cmd}
                            onClick={() => handleCommand(cmd)}
                            className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-400 transition-colors"
                          >
                            {cmd}
                          </button>
                        ))}
                      </div>

                      {/* Interactive CLI Input */}
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (cliInput) handleCommand(cliInput);
                        }}
                        className="flex items-center gap-2 text-xs"
                      >
                        <span className="text-emerald-400">$</span>
                        <input
                          type="text"
                          value={cliInput}
                          onChange={(e) => setCliInput(e.target.value)}
                          placeholder="Type 'lead', 'stack', 'projects'..."
                          className="w-full bg-transparent text-white focus:outline-none placeholder-slate-600 font-mono text-base sm:text-xs"
                        />
                      </form>
                    </div>
                  </div>
                )}

                {/* Footer status in console */}
                <div className="pt-2.5 sm:pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Ready for impact</span>
                  </span>
                  <span className="text-slate-400 font-mono">+91 7738412722</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact Numbers / Stats Strip: 2 columns on mobile, 4 on tablet/desktop */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 pt-8 sm:pt-10 border-t border-white/10">
          <motion.div
            whileHover={{ y: -3 }}
            className="glass-panel p-3.5 sm:p-5 rounded-xl border border-white/10"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 leading-tight">
              Frontend Lead
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm text-slate-400 mt-1">
              invocreto Platform
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="glass-panel p-3.5 sm:p-5 rounded-xl border border-white/10"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 leading-tight">
              4 Devs Led
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm text-slate-400 mt-1">
              -30% Delivery Time
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="glass-panel p-3.5 sm:p-5 rounded-xl border border-white/10"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 leading-tight">
              40–50% Uplift
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm text-slate-400 mt-1">
              SSR & 90+ Lighthouse
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="glass-panel p-3.5 sm:p-5 rounded-xl border border-white/10"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-tight">
              Full-Stack
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm text-slate-400 mt-1">
              Microservices & RabbitMQ
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;