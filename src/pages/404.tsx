import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FaHome, FaArrowLeft, FaCode } from "react-icons/fa";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404: Page Not Found | Varun Jadhav</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="min-h-screen bg-dark-950 text-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

        <div className="max-w-md w-full glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 text-center relative z-10 shadow-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6">
            <FaCode size={26} />
          </div>

          <div className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2 font-semibold">
            Error 404
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Page Not Found
          </h1>

          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:opacity-95 transition-all"
            >
              <FaHome size={14} />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-dark-900/80 px-5 py-3 text-sm font-medium text-slate-300 hover:text-white hover:border-indigo-500/30 transition-all"
            >
              <FaArrowLeft size={12} />
              <span>View Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

