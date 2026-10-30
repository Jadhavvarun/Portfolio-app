import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaDownload, FaWhatsapp, FaLock } from "react-icons/fa";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 text-slate-300 py-12 sm:py-16 relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-white/5">
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-[1px] shrink-0">
                <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-dark-950 font-mono font-bold text-base text-white">
                  VJ
                </div>
              </div>
              <div className="min-w-0">
                <span className="font-bold text-base sm:text-lg text-white block truncate">Varun Jadhav</span>
                <span className="block text-xs text-indigo-400 font-mono truncate">
                  Frontend Lead @ invocreto • Full Stack Developer
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Engineering enterprise design systems, high-throughput full-stack platforms, and microfrontends focusing on smooth 60fps interactions, accessible UX, and sub-second load times.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-400 truncate">
                Mumbai, India • Available for Impact
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-white">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="inline-flex items-center min-h-[40px] py-1.5 text-slate-300 hover:text-white transition-colors">
                  About & Overview
                </a>
              </li>
              <li>
                <a href="#experience" className="inline-flex items-center min-h-[40px] py-1.5 text-slate-300 hover:text-white transition-colors">
                  Experience & Lead
                </a>
              </li>
              <li>
                <a href="#skills" className="inline-flex items-center min-h-[40px] py-1.5 text-slate-300 hover:text-white transition-colors">
                  Skills & Architecture
                </a>
              </li>
              <li>
                <a href="#projects" className="inline-flex items-center min-h-[40px] py-1.5 text-slate-300 hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="inline-flex items-center min-h-[40px] py-1.5 text-slate-300 hover:text-white transition-colors">
                  Get In Touch
                </a>
              </li>
              <li>
                <a
                  href="/Varun-Jadhav-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1 min-h-[40px] py-1.5"
                  aria-label="Download Varun Jadhav's Resume PDF"
                >
                  <FaDownload size={11} aria-hidden="true" />
                  <span>Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-white">
              Connect
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/Jadhavvarun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-400 transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                aria-label="Varun Jadhav GitHub Profile"
              >
                <FaGithub size={16} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/varun-jadhav-3a958b218/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Varun Jadhav LinkedIn Profile"
              >
                <FaLinkedin size={16} aria-hidden="true" />
              </a>
              <a
                href="mailto:jadhavvarun67@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-400 transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                aria-label="Send email to Varun Jadhav"
              >
                <FaEnvelope size={15} aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/917738412722?text=Hi%20Varun%2C%20I%20reviewed%20your%20portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:border-emerald-400 transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Chat with Varun Jadhav on WhatsApp"
              >
                <FaWhatsapp size={15} aria-hidden="true" />
              </a>
            </div>
            <div className="flex flex-col space-y-1.5 text-xs text-slate-300 font-mono pt-1">
              <a
                href="mailto:jadhavvarun67@gmail.com"
                className="inline-flex items-center min-h-[44px] hover:text-white transition-colors truncate py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                aria-label="Email: jadhavvarun67@gmail.com"
              >
                jadhavvarun67@gmail.com
              </a>
              <a
                href="https://wa.me/917738412722?text=Hi%20Varun%2C%20I%20reviewed%20your%20portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[44px] hover:text-emerald-400 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded"
                aria-label="Chat on WhatsApp"
              >
                Direct WhatsApp Channel
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Scroll to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Varun Jadhav. All rights reserved.
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <span className="hidden xs:inline">Next.js 16 • TypeScript • Tailwind</span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-400 transition-all min-h-[40px] focus:outline-none focus:ring-2 focus:ring-indigo-400"
              title="Back to Top"
              aria-label="Scroll back to top of page"
            >
              <span>Top</span>
              <FaArrowUp size={11} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;