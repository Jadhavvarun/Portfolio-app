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
  FaBolt, 
  FaCheck, 
  FaCopy 
} from "react-icons/fa";
import { RiSparklingFill, RiShieldCheckLine, RiCompassDiscoverLine, RiTeamLine } from "react-icons/ri";

const ROLES = [
  "Frontend Lead @ InvoCreto",
  "Full-Stack Software Developer",
  "Next.js & React Architect",
  "Angular & TypeScript Specialist",
  "Microservices & Performance Lead",
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
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
    const typingSpeed = isDeleting ? 25 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedRole.length < currentRole.length) {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
      } else if (!isDeleting && displayedRole.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedRole.length > 0) {
        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
      } else if (isDeleting && displayedRole.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }, typingSpeed);

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
          "  • lead       - Frontend Lead @ InvoCreto & Team Leadership details",
          "  • stack      - View full-stack technologies & microservices",
          "  • projects   - View InvoCreto & IndiaCorporates highlights",
          "  • contact    - Get email, phone, and coordinates",
          "  • clear      - Clear terminal history",
        ];
        break;
      case "lead":
        response = [
          "👑 FRONTEND LEAD & TEAM LEADERSHIP:",
          "  - InvoCreto: Spearheaded frontend architecture of invoicing & business management platform",
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
          "  - InvoCreto: Next.js, Angular, Node.js, MongoDB, RabbitMQ, Microservices",
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
      className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden bg-dark-950"
    >
      {/* Animated Floating Gradient Mesh Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/3 -left-40 w-[500px] h-[400px] bg-cyan-500/12 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-purple-600/12 rounded-full blur-[130px] pointer-events-none"
      />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Lead Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-indigo-500/30 bg-indigo-950/50 px-3.5 py-1.5 backdrop-blur-md mb-6 shadow-sm shadow-indigo-500/10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                Frontend Lead @ InvoCreto
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-medium text-cyan-300">
                Team Lead (4 Devs)
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5">
              Architecting Enterprise Systems &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-primary-300 to-cyan-300">
                High-Performance
              </span>{" "}
              Web Apps.
            </h1>

            {/* Rotating Role Pill */}
            <div className="flex items-center gap-2 mb-6 h-9">
              <span className="text-slate-400 font-mono text-base sm:text-lg">
                I am a
              </span>
              <div className="inline-flex items-center px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30 font-mono text-sm sm:text-base font-semibold text-cyan-300 shadow-inner min-w-[260px]">
                <span>{displayedRole}</span>
                <span className="ml-1 w-2 h-4 bg-cyan-400 inline-block animate-pulse"></span>
              </div>
            </div>

            {/* Narrative Summary with exact updated background */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Full-Stack Software Developer & Frontend Lead at <strong className="text-white">InvoCreto</strong>. Experienced in building scalable full-stack applications with <strong className="text-cyan-300">Next.js</strong>, <strong className="text-indigo-300">React.js</strong>, <strong className="text-rose-300">Angular</strong>, and <strong className="text-emerald-300">Node.js</strong>. Proven track record leading a team of 4 developers, boosting web performance by 40–50% (90+ Lighthouse), and designing microservice architectures with RabbitMQ and Docker.
            </p>

            {/* CTAs with Framer Motion hover effects */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-primary-600 to-cyan-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-200"
              >
                <span>Explore InvoCreto & Projects</span>
                <FaArrowRight size={13} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#experience"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-dark-900/80 px-5 py-3.5 text-sm font-medium text-slate-200 hover:border-indigo-500/40 hover:bg-dark-850 hover:text-white transition-all duration-200 backdrop-blur-md"
              >
                <RiCompassDiscoverLine size={16} className="text-indigo-400" />
                <span>Experience & Leadership</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-dark-900/60 px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all duration-200"
                title="Copy Varun's Email"
              >
                {copiedEmail ? (
                  <>
                    <FaCheck size={14} className="text-emerald-400" />
                    <span className="text-emerald-300 text-xs">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy size={13} className="text-cyan-400" />
                    <span className="text-xs">Copy Email</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 w-full text-xs">
              <span className="uppercase font-mono tracking-wider text-slate-500">
                Direct Connect
              </span>
              <div className="flex items-center gap-3">
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
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-emerald-300 hover:border-emerald-500/40 transition-all font-mono"
                  title="Copy Phone Number"
                >
                  <FaPhoneAlt size={11} className="text-emerald-400" />
                  <span>{copiedPhone ? "Copied!" : "+91 7738412722"}</span>
                </button>
                <a
                  href="/varun_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono font-medium text-indigo-400 hover:text-indigo-300 transition-colors ml-1"
                >
                  <FaDownload size={11} />
                  <span>Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive macOS Glass Window */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-2xl glass-panel border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-dark-950/70">
                {/* Traffic Lights */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm"></span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-dark-900/90 rounded-lg p-0.5 border border-white/5">
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                      activeTab === "code"
                        ? "bg-indigo-600/30 text-indigo-300 font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <FaCode size={11} />
                    <span>profile.ts</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("leadership")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                      activeTab === "leadership"
                        ? "bg-indigo-600/30 text-indigo-300 font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <RiShieldCheckLine size={12} />
                    <span>leadership.md</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                      activeTab === "terminal"
                        ? "bg-indigo-600/30 text-indigo-300 font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <FaTerminal size={10} />
                    <span>terminal</span>
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-5 font-mono text-xs sm:text-sm bg-dark-950/90 min-h-[380px] flex flex-col justify-between">
                {activeTab === "code" && (
                  <div className="space-y-1.5 text-slate-300 select-text overflow-x-auto">
                    <p className="text-slate-500">{"// Varun Jadhav - Software Developer & Lead Profile"}</p>
                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-300">leadDeveloper</span>:{" "}
                      <span className="text-yellow-300">DeveloperProfile</span> = {"{"}
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">name:</span>{" "}
                      <span className="text-emerald-300">&quot;Varun Jadhav&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">roles:</span> [
                      <span className="text-emerald-300">&quot;Frontend Lead @ InvoCreto&quot;</span>,{" "}
                      <span className="text-emerald-300">&quot;Software Developer @ Syntags&quot;</span>
                      ],
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">teamLeadership:</span>{" "}
                      <span className="text-cyan-300">&quot;Led 4 developers (reduced delivery by 30%)&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">frontend:</span> [
                      <span className="text-cyan-300">&quot;Next.js&quot;</span>,{" "}
                      <span className="text-cyan-300">&quot;React.js&quot;</span>,{" "}
                      <span className="text-cyan-300">&quot;Angular&quot;</span>,{" "}
                      <span className="text-cyan-300">&quot;TypeScript&quot;</span>
                      ],
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">backendDistributed:</span> [
                      <span className="text-amber-300">&quot;Node.js&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;Express.js&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;RabbitMQ&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;Microservices&quot;</span>
                      ],
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">databases:</span> [
                      <span className="text-emerald-300">&quot;MongoDB&quot;</span>,{" "}
                      <span className="text-emerald-300">&quot;PostgreSQL&quot;</span>
                      ],
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">metrics:</span> {"{"}{" "}
                      <span className="text-purple-300">perfUplift:</span>{" "}
                      <span className="text-yellow-300">&quot;40-50%&quot;</span>,{" "}
                      <span className="text-purple-300">lighthouse:</span>{" "}
                      <span className="text-yellow-300">&quot;90+&quot;</span>{" "}
                      {"}"},
                    </p>
                    <p>{"};"}</p>
                    <p className="text-slate-500 pt-2">
                      <span className="text-emerald-400">✔</span> System compiled with 0 errors.
                    </p>
                  </div>
                )}

                {activeTab === "leadership" && (
                  <div className="space-y-3 text-slate-300">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/10 text-white font-semibold">
                      <RiSparklingFill className="text-cyan-400" />
                      <span>Leadership & Technical Milestones</span>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">▸</span>
                        <span>
                          <strong className="text-white">Frontend Lead @ InvoCreto:</strong> Architected the invoicing and business management platform using Next.js & Angular with scalable reusable UI components.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400 font-bold">▸</span>
                        <span>
                          <strong className="text-white">Team Lead (4 Devs) @ Syntags:</strong> Established reusable development practices, Agile sprints, and reduced feature turnaround by ~30%.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">▸</span>
                        <span>
                          <strong className="text-white">40–50% Performance Boost:</strong> Optimized Next.js SSR, code splitting, image optimization (90+ Lighthouse); reduced Angular bundle by 35% via OnPush and lazy loading.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">▸</span>
                        <span>
                          <strong className="text-white">Distributed Architecture:</strong> Microservices, RPC communication, RabbitMQ messaging, and Docker containerization.
                        </span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === "terminal" && (
                  <div className="flex flex-col justify-between h-full space-y-3">
                    <div className="space-y-1.5 overflow-y-auto max-h-[220px]">
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
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {["help", "lead", "stack", "projects", "contact", "clear"].map((cmd) => (
                          <button
                            key={cmd}
                            onClick={() => handleCommand(cmd)}
                            className="px-2 py-0.5 rounded text-[11px] bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-400 transition-colors"
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
                          className="w-full bg-transparent text-white focus:outline-none placeholder-slate-600 font-mono"
                        />
                      </form>
                    </div>
                  </div>
                )}

                {/* Footer status in console */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Ready for impact</span>
                  </span>
                  <span className="text-slate-400 font-mono">+91 7738412722 • Mumbai</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact Numbers / Stats Strip with updated figures */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10">
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-panel p-5 rounded-xl border border-white/10"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
              Frontend Lead
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              InvoCreto Platform
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="glass-panel p-5 rounded-xl border border-white/10"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              4 Devs Led
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              30% Delivery Acceleration
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="glass-panel p-5 rounded-xl border border-white/10"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              40–50% Uplift
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              SSR & 90+ Lighthouse Score
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="glass-panel p-5 rounded-xl border border-white/10"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Full-Stack & Cloud
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              Microservices & RabbitMQ
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;