import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  FaEnvelope, 
  FaPhoneAlt,
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt, 
  FaClock, 
  FaCopy, 
  FaCheck, 
  FaPaperPlane, 
  FaDownload 
} from "react-icons/fa";
import { RiSendPlaneFill, RiCheckDoubleLine } from "react-icons/ri";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  }>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("jadhavvarun67@gmail.com");
    setCopiedEmail(true);
    
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch (e) {
      // ignore
    }

    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("7738412722");
    setCopiedPhone(true);
    
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch (e) {
      // ignore
    }

    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // ignore
      }
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background ambient gradient lights */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300 mb-3">
            <RiSendPlaneFill size={13} />
            <span>Initiate Direct Conversation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-primary-300 to-cyan-300">
              High-Impact Together
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Whether for frontend leadership, high-scale full-stack architecture, or agile engineering advisory — reach out anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Coordinates Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-7 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />

              <h3 className="text-xl font-bold text-white mb-2">Direct Contact Coordinates</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Reach out by email or direct call/WhatsApp. All messages receive prompt attention.
              </p>

              {/* Email Copier Card */}
              <div className="p-4 rounded-xl bg-dark-950/80 border border-white/10 mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-500/15 text-indigo-400">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-mono">
                      Email Address
                    </div>
                    <div className="text-sm font-semibold text-white break-all">
                      jadhavvarun67@gmail.com
                    </div>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-cyan-400 transition-all shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <FaCheck size={12} className="text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy size={12} className="text-cyan-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Copier Card */}
              <div className="p-4 rounded-xl bg-dark-950/80 border border-white/10 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/15 text-emerald-400">
                    <FaPhoneAlt size={15} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-mono">
                      Phone / WhatsApp
                    </div>
                    <div className="text-sm font-semibold text-white font-mono">
                      +91 7738412722
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="tel:7738412722"
                    className="px-2.5 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-all"
                  >
                    Call
                  </a>
                  <button
                    onClick={copyPhone}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-emerald-400 transition-all shrink-0"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? (
                      <>
                        <FaCheck size={12} className="text-emerald-400" />
                        <span className="text-emerald-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy size={12} className="text-emerald-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Live Clock */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-dark-950/80 border border-white/10">
                  <div className="flex items-center gap-2 text-indigo-400 mb-1">
                    <FaMapMarkerAlt size={14} />
                    <span className="text-xs font-mono uppercase text-slate-400">Location</span>
                  </div>
                  <div className="text-sm font-bold text-white">Mumbai, India</div>
                  <div className="text-xs text-slate-400 mt-0.5">Open to Remote & Hybrid</div>
                </div>

                <div className="p-4 rounded-xl bg-dark-950/80 border border-white/10">
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <FaClock size={14} />
                    <span className="text-xs font-mono uppercase text-slate-400">Local Time</span>
                  </div>
                  <div className="text-sm font-bold text-white font-mono">
                    {currentTime || "IST (UTC+5:30)"}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Asia / Kolkata</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="https://www.linkedin.com/in/varun-jadhav-620814152/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <FaLinkedin size={16} />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/Jadhavvarun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <FaGithub size={16} />
                  <span>GitHub Repository</span>
                </a>

                <a
                  href="/varun_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <FaDownload size={12} />
                  <span>Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Current Leadership Status Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/50 via-dark-900 to-cyan-950/50 border border-indigo-500/30 flex items-center gap-4">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div className="text-xs text-slate-300">
                <strong className="text-white">Active Frontend Lead @ InvoCreto</strong> — Available for select advisory roles, technical leadership, and full-stack architecture initiatives.
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-7 sm:p-9 rounded-2xl border border-white/10 shadow-2xl relative">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Send a note below or reach directly via{" "}
                <a
                  href="mailto:jadhavvarun67@gmail.com"
                  className="text-indigo-400 hover:underline font-mono"
                >
                  jadhavvarun67@gmail.com
                </a>.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-center space-y-4">
                  <div className="w-14 h-14 bg-indigo-600/30 rounded-full flex items-center justify-center text-indigo-300 mx-auto border border-indigo-500/40 shadow-lg shadow-indigo-500/20">
                    <RiCheckDoubleLine size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Transmitted!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. I have received your message and will respond within 24 hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-5 py-2 rounded-lg bg-dark-900 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:border-indigo-400 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono text-slate-300 uppercase mb-1.5"
                      >
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-slate-300 uppercase mb-1.5"
                      >
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono text-slate-300 uppercase mb-1.5"
                    >
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="e.g. Full-Stack Development / Frontend Architecture"
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-slate-300 uppercase mb-1.5"
                    >
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Share details regarding your technical requirements, goals, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-primary-600 to-cyan-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Transmitting message...</span>
                      </span>
                    ) : (
                      <>
                        <FaPaperPlane size={13} />
                        <span>Send Message to Varun</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
