import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaTerminal,
  FaCode,
  FaBolt,
  FaCheck,
  FaCopy
} from "react-icons/fa";
import { RiSparklingFill, RiShieldCheckLine, RiCompassDiscoverLine } from "react-icons/ri";

const ROLES = [
  "Frontend Lead @ Invocreto",
  "Full Stack Engineer",
  "React & Next.js Architect",
  "Design Systems Engineer",
  "Web Performance Specialist",
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "terminal" | "leadership">("code");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Terminal state
  const [cliInput, setCliInput] = useState("");
  const [cliOutput, setCliOutput] = useState<string[]>([
    "Welcome to Varun Jadhav's interactive console.",
    "Type 'help' or click quick commands below to explore.",
  ]);

  // Typing effect for the headline role
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedRole.length < currentRole.length) {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
      } else if (!isDeleting && displayedRole.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1800);
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

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: string[] = [];

    switch (trimmed) {
      case "help":
        response = [
          "Available commands:",
          "  • lead       - Learn about Varun's role as Frontend Lead at Invocreto",
          "  • stack      - View full-stack technologies",
          "  • contact    - Get email and contact coordinates",
          "  • clear      - Clear terminal history",
        ];
        break;
      case "lead":
        response = [
          "🏢 FRONTEND LEAD @ INVOCRETO:",
          "  - Leading frontend architectures & modern component systems",
          "  - Establishing code quality, TypeScript standards, & CI workflows",
          "  - Mentoring team members & driving product roadmaps",
        ];
        break;
      case "stack":
        response = [
          "⚡ CORE TECH STACK:",
          "  - Frontend: React, Next.js, TypeScript, Tailwind CSS, Redux, Zustand",
          "  - Backend: Node.js, Express, MongoDB, MySQL, Firebase, REST/GraphQL",
          "  - Dev Tools: Git/GitHub, Docker, Linux, Postman, Vercel, Netlify",
        ];
        break;
      case "contact":
        response = [
          "📫 DIRECT CONTACT:",
          "  - Email: jadhavvarun67@gmail.com",
          "  - LinkedIn: linkedin.com/in/varun-jadhav-620814152",
          "  - GitHub: github.com/Jadhavvarun",
          "  - Location: Mumbai, India",
        ];
        break;
      case "clear":
        setCliOutput([]);
        setCliInput("");
        return;
      default:
        response = [
          `Command not found: '${trimmed}'. Try typing 'help', 'lead', 'stack', or 'contact'.`,
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
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Lead Status Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1.5 backdrop-blur-md mb-6 shadow-sm shadow-indigo-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                Frontend Lead @ Invocreto
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-medium text-slate-300">
                Full Stack Architect
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5">
              Architecting High-Scale Systems &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-primary-300 to-cyan-300">
                Fluid Frontend
              </span>{" "}
              Experiences.
            </h1>

            {/* Rotating Role Pill */}
            <div className="flex items-center gap-2 mb-6 h-9">
              <span className="text-slate-400 font-mono text-base sm:text-lg">
                I build as
              </span>
              <div className="inline-flex items-center px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30 font-mono text-sm sm:text-base font-semibold text-cyan-300 shadow-inner min-w-[240px]">
                <span>{displayedRole}</span>
                <span className="ml-1 w-2 h-4 bg-cyan-400 inline-block animate-pulse"></span>
              </div>
            </div>

            {/* Narrative Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Frontend Lead at <span className="text-white font-semibold">Invocreto</span> and Full-Stack Developer with a proven record of shipping enterprise React/Next.js architectures, robust Node.js APIs, and modular design systems. Passionate about sub-second web performance, clean type-safe code, and mentoring engineering teams.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-primary-600 to-cyan-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Featured Work</span>
                <FaArrowRight size={13} />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-dark-900/80 px-5 py-3.5 text-sm font-medium text-slate-200 hover:border-indigo-500/40 hover:bg-dark-850 hover:text-white transition-all duration-200 backdrop-blur-md"
              >
                <RiCompassDiscoverLine size={16} className="text-indigo-400" />
                <span>Leadership Timeline</span>
              </a>

              <button
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
              </button>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex items-center gap-5 pt-4 border-t border-white/10 w-full">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500">
                Connect directly
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
                <a
                  href="/varun_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-300 hover:text-indigo-400 transition-colors ml-2"
                >
                  <FaDownload size={11} />
                  <span>Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive macOS Glass Window */}
          <div className="lg:col-span-5 w-full">
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
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${activeTab === "code"
                        ? "bg-indigo-600/30 text-indigo-300 font-semibold"
                        : "text-slate-400 hover:text-white"
                      }`}
                  >
                    <FaCode size={11} />
                    <span>profile.ts</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("leadership")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${activeTab === "leadership"
                        ? "bg-indigo-600/30 text-indigo-300 font-semibold"
                        : "text-slate-400 hover:text-white"
                      }`}
                  >
                    <RiShieldCheckLine size={12} />
                    <span>lead.md</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${activeTab === "terminal"
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
              <div className="p-5 font-mono text-xs sm:text-sm bg-dark-950/90 min-h-[360px] flex flex-col justify-between">
                {activeTab === "code" && (
                  <div className="space-y-1.5 text-slate-300 select-text overflow-x-auto">
                    <p className="text-slate-500">{"// Varun Jadhav - Lead Engineer Profile"}</p>
                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-300">leadEngineer</span>:{" "}
                      <span className="text-yellow-300">EngineerProfile</span> = {"{"}
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">name:</span>{" "}
                      <span className="text-emerald-300">&quot;Varun Jadhav&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">currentRole:</span>{" "}
                      <span className="text-emerald-300">&quot;Frontend Lead&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">organization:</span>{" "}
                      <span className="text-cyan-300">&quot;Invocreto&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">coreStack:</span> [
                    </p>
                    <p className="pl-8 text-cyan-300">
                      &quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;Node.js&quot;, &quot;Tailwind&quot;
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-slate-400">architectures:</span> [
                    </p>
                    <p className="pl-8 text-amber-300">
                      &quot;Microfrontends&quot;, &quot;Design Systems&quot;, &quot;High-Performance Web&quot;
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-slate-400">openToImpact:</span>{" "}
                      <span className="text-purple-400">true</span>
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
                      <span>Frontend Leadership @ Invocreto</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400 font-bold">▸</span>
                        <span>
                          <strong className="text-white">Design System & Architecture:</strong> Standardizing component tokens, state managers, and unified UI patterns.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400 font-bold">▸</span>
                        <span>
                          <strong className="text-white">Performance Optimization:</strong> Slashing FCP, optimizing Next.js SSR/ISR, and maintaining 95+ Core Web Vitals.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400 font-bold">▸</span>
                        <span>
                          <strong className="text-white">Engineering Quality:</strong> PR reviews, strict TypeScript typing, reusable custom hooks, and reliable delivery.
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
                          className={`${line.startsWith("$")
                              ? "text-cyan-400 font-semibold"
                              : line.includes("🏢") || line.includes("⚡") || line.includes("📫")
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
                        {["help", "lead", "stack", "contact", "clear"].map((cmd) => (
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
                          placeholder="Type command ('lead', 'stack', 'contact')..."
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
                    <span>Ready for production</span>
                  </span>
                  <span className="text-slate-400 font-mono">Mumbai, IN (IST)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Numbers / Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10">
          <div className="glass-panel p-5 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
              Frontend Lead
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              At Invocreto • Current Role
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              3+ Years
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              Building Enterprise Software
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              99+ Score
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              Lighthouse & Core Web Vitals
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Full Stack
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              Next.js, React, Node.js, Cloud
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;