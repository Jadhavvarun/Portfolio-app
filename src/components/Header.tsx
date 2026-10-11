import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { RiSparklingFill } from "react-icons/ri";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scrollspy logic
      const sections = ["about", "experience", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "glass-nav py-3 shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#about" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-primary-500 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-indigo-500/20">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-dark-950 font-mono font-bold text-lg text-white">
              VJ
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-primary-300 transition-colors">
                Varun Jadhav
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Lead @ Invocreto
              </span>
            </div>
            <span className="text-xs text-slate-400 hidden sm:inline-block font-mono">
              Full Stack • Frontend Lead
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-dark-900/80 px-4 py-1.5 border border-white/10 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${isActive
                  ? "text-white bg-indigo-600/30 text-indigo-300 shadow-sm shadow-indigo-500/20"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-indigo-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Jadhavvarun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-dark-900/60 text-slate-300 transition-all hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white"
            title="GitHub Profile"
          >
            <FaGithub size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/varun-jadhav-620814152/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-dark-900/60 text-slate-300 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-white"
            title="LinkedIn Profile"
          >
            <FaLinkedin size={17} />
          </a>
          <a
            href="/varun_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-primary-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-600/25 transition-all duration-200 hover:from-indigo-500 hover:to-primary-500 hover:shadow-indigo-600/40 hover:-translate-y-0.5"
          >
            <FaDownload size={12} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-dark-900/80 text-slate-200 transition-colors hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-dark-950/95 backdrop-blur-2xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-base font-medium transition-colors ${activeSection === link.href.substring(1)
                  ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <span>{link.name}</span>
                {activeSection === link.href.substring(1) && (
                  <RiSparklingFill className="text-indigo-400" size={16} />
                )}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="/varun_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-lg"
              >
                <FaDownload size={14} />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href="https://github.com/Jadhavvarun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                >
                  <FaGithub size={18} />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-600">•</span>
                <a
                  href="https://www.linkedin.com/in/varun-jadhav-620814152/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                >
                  <FaLinkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;