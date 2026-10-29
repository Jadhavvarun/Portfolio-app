import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaBars, FaTimes, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
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
    // Passive scroll check for header styling (no forced reflow)
    const handleScroll = () => {
      const scrolled = window.scrollY > 25;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver for active section tracking (zero DOM layout thrashing)
    const sections = ["about", "experience", "skills", "projects", "contact"];
    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Choose entry with highest ratio
          const current = visible.reduce((max, entry) =>
            entry.intersectionRatio > max.intersectionRatio ? entry : max
          );
          setActiveSection(current.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-2.5 sm:py-3 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          : "bg-transparent py-3.5 sm:py-5"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#about" className="group flex items-center gap-2.5 sm:gap-3 shrink-0">
          <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-primary-500 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-indigo-500/20 shrink-0">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-dark-950 font-mono font-bold text-base sm:text-lg text-white">
              VJ
            </div>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-primary-300 transition-colors truncate">
                Varun Jadhav
              </span>
              <span className="hidden xs:inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/20 shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Lead @ invocreto
              </span>
            </div>
            <span className="text-[11px] sm:text-xs text-slate-400 font-mono truncate">
              Full Stack • Frontend Lead
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Visible on Large Tablet / Desktop: lg+) */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-1 rounded-full bg-dark-900/80 px-4 py-1.5 border border-white/10 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                  isActive
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
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href="https://github.com/Jadhavvarun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-dark-900/60 text-slate-300 transition-all hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Varun Jadhav GitHub Profile"
          >
            <FaGithub size={16} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/varun-jadhav-620814152/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-dark-900/60 text-slate-300 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Varun Jadhav LinkedIn Profile"
          >
            <FaLinkedin size={16} aria-hidden="true" />
          </a>
          <a
            href="/varun_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-primary-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-600/25 transition-all duration-200 hover:from-indigo-500 hover:to-primary-500 hover:shadow-indigo-600/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Download Varun Jadhav's Resume PDF"
          >
            <FaDownload size={11} aria-hidden="true" />
            <span>Resume</span>
          </a>
        </div>

        {/* Tablet & Mobile Right Actions & Hamburger Button (Visible on < lg) */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Quick Resume Link for Tablet screens */}
          <a
            href="/varun_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 rounded-lg bg-indigo-600/20 border border-indigo-500/30 px-3 py-1.5 text-xs font-semibold text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Download Varun Jadhav's Resume PDF"
          >
            <FaDownload size={11} aria-hidden="true" />
            <span>Resume</span>
          </a>

          {/* Hamburger / Close Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-white/10 bg-dark-900/90 text-slate-200 transition-colors hover:text-white hover:border-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <FaTimes size={18} aria-hidden="true" /> : <FaBars size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Full-Featured Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 top-[60px] sm:top-[68px] bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Slide-Down Menu Content */}
            <motion.div
              id="mobile-navigation"
              aria-label="Mobile Navigation Menu"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden relative z-50 border-b border-white/10 bg-dark-950/98 backdrop-blur-2xl px-5 sm:px-8 py-6 shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto"
            >
              {/* Status Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    Lead @ invocreto • Open for Impact
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">Mumbai (IST)</span>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all ${
                        isActive
                          ? "bg-indigo-600/25 text-indigo-300 border border-indigo-500/40 shadow-sm"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="tracking-tight">{link.name}</span>
                      {isActive ? (
                        <RiSparklingFill className="text-indigo-400" size={16} />
                      ) : (
                        <span className="text-slate-600 text-xs">→</span>
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Action Buttons & Coordinates */}
              <div className="pt-5 mt-5 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="/varun_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25"
                >
                  <FaDownload size={13} />
                  <span>Download Resume (PDF)</span>
                </a>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="mailto:jadhavvarun67@gmail.com"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-dark-900 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 min-h-[44px]"
                    aria-label="Send email to Varun Jadhav"
                  >
                    <FaEnvelope size={12} className="text-indigo-400" aria-hidden="true" />
                    <span>Email Me</span>
                  </a>
                  <a
                    href="tel:7738412722"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-dark-900 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 min-h-[44px]"
                    aria-label="Call Varun Jadhav at +91 7738412722"
                  >
                    <FaPhoneAlt size={11} className="text-emerald-400" aria-hidden="true" />
                    <span>Call Varun</span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-5 pt-3 border-t border-white/5 text-xs text-slate-300">
                  <a
                    href="https://github.com/Jadhavvarun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-white transition-colors py-2 px-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded min-h-[40px]"
                    aria-label="Varun Jadhav GitHub Profile"
                  >
                    <FaGithub size={15} aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                  <span aria-hidden="true">•</span>
                  <a
                    href="https://www.linkedin.com/in/varun-jadhav-620814152/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors py-2 px-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded min-h-[40px]"
                    aria-label="Varun Jadhav LinkedIn Profile"
                  >
                    <FaLinkedin size={15} aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;