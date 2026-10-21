import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InitialLoaderProps {
  onComplete?: () => void;
}

export const InitialLoader: React.FC<InitialLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing architectural modules...");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Disable scrolling while loader is active
    document.body.style.overflow = "hidden";

    // Progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        // Dynamically increment
        const next = prev + Math.floor(Math.random() * 8) + 4;
        const bounded = next > 100 ? 100 : next;

        if (bounded < 30) {
          setStatusText("Initializing core modules...");
        } else if (bounded < 60) {
          setStatusText("Mounting Next.js & React architectures...");
        } else if (bounded < 88) {
          setStatusText("Connecting microservices & distributed nodes...");
        } else {
          setStatusText("Welcome to Varun Jadhav's portfolio");
        }

        return bounded;
      });
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setIsDone(true);
        document.body.style.overflow = "";
        if (onComplete) onComplete();
      }, 350);

      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="initial-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -30, 
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-950 px-4 select-none"
        >
          {/* Ambient radial glows */}
          <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Central Logo Box */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full">
            {/* Pulsing Monogram */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 via-primary-500 to-cyan-400 p-[2px] shadow-2xl shadow-indigo-500/30 mb-6"
            >
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-dark-950 font-mono font-extrabold text-2xl sm:text-3xl text-white">
                VJ
              </div>
            </motion.div>

            {/* Name & Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1"
            >
              Varun Jadhav
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm text-indigo-400 font-mono mb-8"
            >
              Frontend Lead @ invocreto
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-full bg-dark-900/80 rounded-full h-2 p-0.5 border border-white/10 shadow-inner overflow-hidden mb-3">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-primary-400 to-cyan-400 shadow-[0_0_15px_rgba(99,102,241,0.7)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Progress Percentage & Status */}
            <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 px-1">
              <span className="truncate text-slate-300 text-[11px] sm:text-xs">
                {statusText}
              </span>
              <span className="font-bold text-cyan-300 shrink-0 ml-2">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoader;
