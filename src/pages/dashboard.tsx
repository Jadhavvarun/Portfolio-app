import React, { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import {
  FaGoogle,
  FaSignOutAlt,
  FaSearch,
  FaTrashAlt,
  FaEnvelope,
  FaUser,
  FaCopy,
  FaCheck,
  FaFileDownload,
  FaStar,
  FaRegStar,
  FaArrowLeft,
  FaShieldAlt,
  FaExclamationTriangle,
  FaSyncAlt,
  FaInbox,
  FaEye,
  FaTimes,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  RiAdminLine,
  RiCheckDoubleLine,
  RiMailSendLine,
  RiInboxArchiveLine,
} from "react-icons/ri";
import { auth, db, googleProvider, checkIsAdmin, ADMIN_EMAILS } from "@/lib/firebase";

export interface ContactItem {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: any;
  read?: boolean;
  starred?: boolean;
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  const [contacts, setContacts] = useState<ContactItem[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [dataError, setDataError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "unread" | "starred">("all");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "name">("newest");

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<ContactItem | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<ContactItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Show transient toast
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const isAdmin = useMemo(() => {
    return user ? checkIsAdmin(user.email) : false;
  }, [user]);

  // Real-time Firestore sync with collection "contact"
  useEffect(() => {
    if (!user || !isAdmin) {
      setContacts([]);
      setDataLoading(false);
      return;
    }

    setDataLoading(true);
    setDataError(null);

    const contactColRef = collection(db, "contact");

    const unsubscribe = onSnapshot(
      contactColRef,
      (snapshot) => {
        const items: ContactItem[] = snapshot.docs.map((document) => {
          const data = document.data();
          return {
            id: document.id,
            name: data.name || "Anonymous",
            email: data.email || "",
            subject: data.subject || "No Subject",
            message: data.message || "",
            createdAt: data.createdAt,
            read: Boolean(data.read),
            starred: Boolean(data.starred),
          };
        });
        setContacts(items);
        setDataLoading(false);
      },
      (error) => {
        console.error("Firestore contacts snapshot error:", error);
        setDataError(error.message || "Failed to load contacts from Firestore.");
        setDataLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user, isAdmin]);

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      setAuthError(null);
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      console.error("Google sign in error:", err);
      if (err.code === "auth/popup-closed-by-user") {
        setAuthError("Sign-in popup was closed before completion.");
      } else if (err.code === "auth/unauthorized-domain") {
        setAuthError(
          "Current domain is not authorized in Firebase Auth. Please add it to Authorized Domains in Firebase Console."
        );
      } else {
        setAuthError(err.message || "Failed to sign in with Google.");
      }
    }
  };

  // Sign-Out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      triggerToast("Signed out successfully.");
    } catch (err: any) {
      console.error("Sign out error:", err);
    }
  };

  // Helper to format date cleanly
  const formatTimestamp = (createdAt: any): { display: string; relative: string } => {
    if (!createdAt) return { display: "Not recorded", relative: "Recent" };

    let dateObj: Date | null = null;

    if (createdAt instanceof Date) {
      dateObj = createdAt;
    } else if (typeof createdAt?.toDate === "function") {
      dateObj = createdAt.toDate();
    } else if (typeof createdAt === "string" || typeof createdAt === "number") {
      dateObj = new Date(createdAt);
    }

    if (!dateObj || isNaN(dateObj.getTime())) {
      return { display: "Invalid Date", relative: "" };
    }

    const display = dateObj.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const diffMs = Date.now() - dateObj.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    let relative = "Just now";
    if (diffDays > 0) {
      relative = `${diffDays}d ago`;
    } else if (diffHours > 0) {
      relative = `${diffHours}h ago`;
    } else {
      const diffMins = Math.floor(diffMs / (1000 * 60));
      if (diffMins > 0) relative = `${diffMins}m ago`;
    }

    return { display, relative };
  };

  // Copy to clipboard helper
  const copyToClipboard = (text: string, id: string, label: string = "Copied") => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    triggerToast(`${label} copied to clipboard`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Toggle Read Status
  const handleToggleRead = async (item: ContactItem) => {
    try {
      const newStatus = !item.read;
      // Optimistic update
      setContacts((prev) =>
        prev.map((c) => (c.id === item.id ? { ...c, read: newStatus } : c))
      );
      const docRef = doc(db, "contact", item.id);
      await updateDoc(docRef, { read: newStatus });
      triggerToast(newStatus ? "Marked as read" : "Marked as unread");
    } catch (err) {
      console.warn("Could not update read status in Firestore:", err);
    }
  };

  // Toggle Starred Status
  const handleToggleStarred = async (item: ContactItem) => {
    try {
      const newStarred = !item.starred;
      // Optimistic update
      setContacts((prev) =>
        prev.map((c) => (c.id === item.id ? { ...c, starred: newStarred } : c))
      );
      const docRef = doc(db, "contact", item.id);
      await updateDoc(docRef, { starred: newStarred });
      triggerToast(newStarred ? "Starred inquiry" : "Removed star");
    } catch (err) {
      console.warn("Could not update starred status in Firestore:", err);
    }
  };

  // Delete message confirmation
  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      const targetId = deleteTarget.id;
      // Optimistically remove from state
      setContacts((prev) => prev.filter((c) => c.id !== targetId));
      if (selectedMessage?.id === targetId) {
        setSelectedMessage(null);
      }
      await deleteDoc(doc(db, "contact", targetId));
      triggerToast("Contact submission deleted.");
    } catch (err: any) {
      console.error("Failed to delete contact from Firestore:", err);
      triggerToast(`Failed to delete: ${err.message || "Unknown error"}`);
    } finally {
      setIsDeleting(false);
      setDeleteTarget(null);
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    if (contacts.length === 0) {
      triggerToast("No contact messages to export.");
      return;
    }

    const headers = ["Firestore ID", "Name", "Email", "Subject", "Message", "Received At"];
    const rows = contacts.map((c) => {
      const { display } = formatTimestamp(c.createdAt);
      return [
        `"${c.id}"`,
        `"${(c.name || "").replace(/"/g, '""')}"`,
        `"${(c.email || "").replace(/"/g, '""')}"`,
        `"${(c.subject || "").replace(/"/g, '""')}"`,
        `"${(c.message || "").replace(/"/g, '""').replace(/\n/g, " ")}"`,
        `"${display}"`,
      ];
    });

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `contacts_export_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    triggerToast("Contacts exported to CSV.");
  };

  // Export to JSON
  const exportToJSON = () => {
    if (contacts.length === 0) {
      triggerToast("No contact messages to export.");
      return;
    }

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(contacts, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute(
      "download",
      `contacts_export_${new Date().toISOString().slice(0, 10)}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    triggerToast("Contacts exported to JSON.");
  };

  // Filtering and Sorting
  const filteredContacts = useMemo(() => {
    let result = [...contacts];

    // Status filter
    if (filterStatus === "unread") {
      result = result.filter((c) => !c.read);
    } else if (filterStatus === "starred") {
      result = result.filter((c) => c.starred);
    }

    // Search query
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.email.toLowerCase().includes(q) ||
          c.subject.toLowerCase().includes(q) ||
          c.message.toLowerCase().includes(q) ||
          c.id.toLowerCase().includes(q)
      );
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }

      // Convert timestamps to epoch
      const getTime = (val: any) => {
        if (!val) return 0;
        if (val instanceof Date) return val.getTime();
        if (typeof val.toDate === "function") return val.toDate().getTime();
        const parsed = new Date(val).getTime();
        return isNaN(parsed) ? 0 : parsed;
      };

      const timeA = getTime(a.createdAt);
      const timeB = getTime(b.createdAt);

      if (sortBy === "oldest") {
        return timeA - timeB;
      }
      // default: newest
      return timeB - timeA;
    });

    return result;
  }, [contacts, filterStatus, searchTerm, sortBy]);

  // Statistics
  const stats = useMemo(() => {
    const total = contacts.length;
    const unread = contacts.filter((c) => !c.read).length;
    const starred = contacts.filter((c) => c.starred).length;
    return { total, unread, starred };
  }, [contacts]);

  return (
    <>
      <Head>
        <title>Admin Dashboard | Varun Jadhav Portfolio</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-white">
        {/* Toast Notification Banner */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-dark-800/90 border border-indigo-500/40 shadow-xl backdrop-blur-md text-xs font-mono text-indigo-200 flex items-center gap-2"
            >
              <RiSparklingBadge />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 1. AUTH LOADING STATE */}
        {authLoading ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="h-12 w-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center animate-pulse mb-4 text-indigo-400">
              <RiAdminLine size={24} />
            </div>
            <p className="text-sm font-mono text-slate-400">
              Authenticating session credentials...
            </p>
          </div>
        ) : !user ? (
          /* 2. UNAUTHENTICATED: LOGIN SCREEN */
          <div className="flex-1 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
            {/* Background glowing orbs */}
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-md rounded-2xl border border-white/10 bg-dark-900/90 backdrop-blur-xl p-8 shadow-2xl relative z-10"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  <FaArrowLeft size={10} />
                  <span>Return to Portfolio</span>
                </Link>
                <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 border border-indigo-500/30 px-2.5 py-0.5 rounded-full">
                  Admin Gateway
                </span>
              </div>

              <div className="text-center mb-8">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 mx-auto flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 mb-4">
                  <RiAdminLine size={28} />
                </div>
                <h1 className="text-2xl font-bold text-white tracking-tight">
                  Admin Command Center
                </h1>
                <p className="text-xs text-slate-400 mt-2 max-w-xs mx-auto">
                  Protected portal for viewing inquiries from the Firestore{" "}
                  <code className="text-indigo-300 font-mono">contact</code> collection.
                </p>
              </div>

              {authError && (
                <div className="mb-6 p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300 flex items-start gap-2.5">
                  <FaExclamationTriangle size={14} className="shrink-0 mt-0.5" />
                  <span>{authError}</span>
                </div>
              )}

              <button
                id="admin-google-login-btn"
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white text-dark-950 font-semibold hover:bg-slate-100 transition-all shadow-md active:scale-[0.98] group cursor-pointer"
              >
                <FaGoogle className="text-red-500 text-lg group-hover:scale-110 transition-transform" />
                <span>Continue with Google</span>
              </button>

              <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <p className="text-[11px] font-mono text-slate-500">
                  Restricted to authorized portfolio administrator:
                </p>
                <p className="text-xs font-mono text-indigo-400/80 mt-1">
                  {ADMIN_EMAILS.join(", ")}
                </p>
              </div>
            </motion.div>
          </div>
        ) : !isAdmin ? (
          /* 3. LOGGED IN BUT NOT AUTHORIZED */
          <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-md rounded-2xl border border-red-500/30 bg-dark-900/90 backdrop-blur-xl p-8 shadow-2xl text-center"
            >
              <div className="h-14 w-14 rounded-2xl bg-red-950/60 border border-red-500/40 mx-auto flex items-center justify-center text-red-400 mb-4">
                <FaShieldAlt size={26} />
              </div>
              <h2 className="text-xl font-bold text-white">Access Denied</h2>
              <p className="text-xs text-slate-400 mt-2">
                The Google account you signed in with does not have administrator privileges.
              </p>

              <div className="my-6 p-3 rounded-xl bg-dark-800 border border-white/5 flex items-center gap-3 text-left">
                {user.photoURL ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="h-10 w-10 rounded-full border border-white/10 shrink-0"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold shrink-0">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-white truncate">
                    {user.displayName || "Google Account"}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 truncate">
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleSignOut}
                  className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <FaSignOutAlt />
                  <span>Sign Out & Switch Account</span>
                </button>
                <Link
                  href="/"
                  className="block w-full py-2.5 px-4 rounded-xl bg-dark-800 hover:bg-dark-700 text-slate-300 font-medium text-xs transition-colors"
                >
                  Return to Portfolio
                </Link>
              </div>
            </motion.div>
          </div>
        ) : (
          /* 4. AUTHORIZED ADMIN DASHBOARD */
          <div className="flex-1 flex flex-col">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-30 border-b border-white/10 bg-dark-950/80 backdrop-blur-xl px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-indigo-500/20">
                  <RiAdminLine size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      Varun Jadhav
                    </h1>
                    <span className="hidden sm:inline-block text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      Admin Verified
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Firestore: collection(&quot;contact&quot;)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <Link
                  href="/"
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-indigo-400 transition-all"
                  title="View Live Portfolio"
                >
                  <FaArrowLeft size={10} />
                  <span>Portfolio</span>
                </Link>

                <button
                  onClick={exportToCSV}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-indigo-400 transition-all"
                  title="Export Contacts as CSV"
                >
                  <FaFileDownload size={11} />
                  <span>CSV</span>
                </button>

                <button
                  onClick={exportToJSON}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-indigo-400 transition-all"
                  title="Export Contacts as JSON"
                >
                  <FaFileDownload size={11} />
                  <span>JSON</span>
                </button>

                {/* Profile Pill */}
                <div className="flex items-center gap-2.5 pl-2 border-l border-white/10">
                  {user.photoURL ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={user.photoURL}
                      alt={user.displayName || "Admin"}
                      className="h-8 w-8 rounded-full border border-white/20 shrink-0"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="hidden lg:block text-left">
                    <p className="text-xs font-semibold text-white leading-tight">
                      {user.displayName || "Administrator"}
                    </p>
                    <p className="text-[10px] font-mono text-slate-400 leading-tight">
                      {user.email}
                    </p>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="p-2 rounded-lg bg-dark-900 border border-white/10 text-slate-400 hover:text-red-400 hover:border-red-500/30 transition-all"
                    title="Sign Out"
                  >
                    <FaSignOutAlt size={13} />
                  </button>
                </div>
              </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
              {/* Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-dark-900/60 border border-white/5 backdrop-blur-sm relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono uppercase text-slate-400">Total Contacts</p>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        {stats.total}
                      </h3>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <FaInbox size={18} />
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-slate-500 mt-2">
                    Inquiries stored in Firestore
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-dark-900/60 border border-white/5 backdrop-blur-sm relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono uppercase text-slate-400">Unread Messages</p>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mt-1">
                        {stats.unread}
                      </h3>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <RiInboxArchiveLine size={18} />
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-slate-500 mt-2">
                    Requiring review or follow-up
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-dark-900/60 border border-white/5 backdrop-blur-sm relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono uppercase text-slate-400">Starred / Priority</p>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1">
                        {stats.starred}
                      </h3>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <FaStar size={18} />
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-slate-500 mt-2">
                    Flagged for high-priority response
                  </p>
                </div>
              </div>

              {/* Toolbar: Search, Filters, and Sorting */}
              <div className="p-4 rounded-2xl bg-dark-900/80 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <FaSearch
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    size={13}
                  />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name, email, subject, message or Firestore ID..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                    >
                      <FaTimes size={12} />
                    </button>
                  )}
                </div>

                {/* Filters & Sorting */}
                <div className="flex items-center gap-2 flex-wrap">
                  {/* Status Filters */}
                  <div className="inline-flex rounded-xl bg-dark-950 border border-white/10 p-1 text-xs font-mono">
                    <button
                      onClick={() => setFilterStatus("all")}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        filterStatus === "all"
                          ? "bg-indigo-600 text-white font-semibold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      All ({stats.total})
                    </button>
                    <button
                      onClick={() => setFilterStatus("unread")}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        filterStatus === "unread"
                          ? "bg-indigo-600 text-white font-semibold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Unread ({stats.unread})
                    </button>
                    <button
                      onClick={() => setFilterStatus("starred")}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        filterStatus === "starred"
                          ? "bg-indigo-600 text-white font-semibold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Starred ({stats.starred})
                    </button>
                  </div>

                  {/* Sort Order */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e: any) => setSortBy(e.target.value)}
                      className="px-3 py-2 rounded-xl bg-dark-950 border border-white/10 text-xs font-mono text-slate-300 focus:outline-none focus:border-indigo-500 cursor-pointer"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="name">Sender (A-Z)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Data Loading / Error / Empty States */}
              {dataLoading ? (
                <div className="p-12 text-center rounded-2xl bg-dark-900/40 border border-white/5">
                  <FaSyncAlt className="animate-spin mx-auto text-indigo-400 mb-3" size={24} />
                  <p className="text-sm font-mono text-slate-400">
                    Listening to Firestore collection &quot;contact&quot;...
                  </p>
                </div>
              ) : dataError ? (
                <div className="p-6 rounded-2xl bg-red-950/30 border border-red-500/30 text-center">
                  <FaExclamationTriangle className="mx-auto text-red-400 mb-2" size={24} />
                  <h3 className="text-sm font-bold text-white">Firestore Read Error</h3>
                  <p className="text-xs text-red-300 mt-1">{dataError}</p>
                  <p className="text-[11px] font-mono text-slate-400 mt-3">
                    Ensure Firebase Firestore rules allow read access for authenticated admins.
                  </p>
                </div>
              ) : filteredContacts.length === 0 ? (
                <div className="p-12 text-center rounded-2xl bg-dark-900/40 border border-white/5">
                  <FaInbox className="mx-auto text-slate-600 mb-3" size={32} />
                  <h3 className="text-base font-bold text-white">No Contact Messages Found</h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                    {searchTerm || filterStatus !== "all"
                      ? "No inquiries matched your active search or filter criteria. Try resetting them."
                      : "When clients or recruiters submit the contact form on your portfolio, their messages will immediately appear here."}
                  </p>
                  {(searchTerm || filterStatus !== "all") && (
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setFilterStatus("all");
                      }}
                      className="mt-4 px-4 py-2 rounded-xl bg-dark-800 text-xs text-slate-300 hover:text-white transition-colors"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              ) : (
                /* Contact Cards List */
                <div className="space-y-3">
                  {filteredContacts.map((item) => {
                    const { display, relative } = formatTimestamp(item.createdAt);
                    const isExpanded = expandedId === item.id;

                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`rounded-2xl border transition-all ${
                          !item.read
                            ? "bg-dark-900/90 border-indigo-500/40 shadow-lg shadow-indigo-950/20"
                            : "bg-dark-900/50 border-white/5 hover:border-white/10"
                        }`}
                      >
                        <div className="p-4 sm:p-5">
                          {/* Card Header Row */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/5">
                            {/* Sender Info */}
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                                {item.name.charAt(0).toUpperCase()}
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <h4 className="text-sm sm:text-base font-bold text-white truncate">
                                    {item.name}
                                  </h4>
                                  {!item.read && (
                                    <span className="h-2 w-2 rounded-full bg-cyan-400 shrink-0" title="Unread Message" />
                                  )}
                                </div>
                                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                                  <a
                                    href={`mailto:${item.email}`}
                                    className="hover:text-cyan-300 transition-colors truncate"
                                  >
                                    {item.email}
                                  </a>
                                  <button
                                    onClick={() => copyToClipboard(item.email, `email-${item.id}`, "Email")}
                                    className="hover:text-white transition-colors"
                                    title="Copy Email"
                                  >
                                    {copiedId === `email-${item.id}` ? (
                                      <FaCheck size={10} className="text-emerald-400" />
                                    ) : (
                                      <FaCopy size={10} />
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>

                            {/* Metadata & Quick Action Icons */}
                            <div className="flex items-center gap-2 self-end sm:self-auto">
                              {/* Firestore ID Pill */}
                              <button
                                onClick={() => copyToClipboard(item.id, `id-${item.id}`, "Firestore ID")}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-dark-950 border border-white/10 text-[10px] font-mono text-slate-400 hover:text-white hover:border-indigo-400 transition-all"
                                title="Click to copy Firestore Document ID"
                              >
                                <span>ID: {item.id.slice(0, 8)}...</span>
                                {copiedId === `id-${item.id}` ? (
                                  <FaCheck size={9} className="text-emerald-400" />
                                ) : (
                                  <FaCopy size={9} />
                                )}
                              </button>

                              {/* Timestamp */}
                              <div
                                className="text-[11px] font-mono text-slate-400 flex items-center gap-1 px-2"
                                title={display}
                              >
                                <FaCalendarAlt size={10} className="text-slate-500" />
                                <span>{relative || display}</span>
                              </div>

                              {/* Star Toggle */}
                              <button
                                onClick={() => handleToggleStarred(item)}
                                className={`p-2 rounded-lg transition-colors ${
                                  item.starred
                                    ? "text-amber-400 hover:text-amber-300"
                                    : "text-slate-500 hover:text-slate-300"
                                }`}
                                title={item.starred ? "Unstar" : "Star"}
                              >
                                {item.starred ? <FaStar size={14} /> : <FaRegStar size={14} />}
                              </button>

                              {/* Read / Unread Toggle */}
                              <button
                                onClick={() => handleToggleRead(item)}
                                className={`p-2 rounded-lg transition-colors ${
                                  item.read
                                    ? "text-slate-500 hover:text-slate-300"
                                    : "text-indigo-400 hover:text-indigo-300"
                                }`}
                                title={item.read ? "Mark as unread" : "Mark as read"}
                              >
                                <RiCheckDoubleLine size={16} />
                              </button>

                              {/* Direct Reply */}
                              <a
                                href={`mailto:${item.email}?subject=Re: ${encodeURIComponent(
                                  item.subject || "Your Inquiry"
                                )}`}
                                className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-dark-800 transition-all"
                                title="Reply via Email"
                              >
                                <RiMailSendLine size={16} />
                              </a>

                              {/* Delete message */}
                              <button
                                onClick={() => setDeleteTarget(item)}
                                className="p-2 rounded-lg text-slate-500 hover:text-red-400 hover:bg-dark-800 transition-all"
                                title="Delete In Firestore"
                              >
                                <FaTrashAlt size={12} />
                              </button>
                            </div>
                          </div>

                          {/* Card Body: Subject & Message Preview */}
                          <div className="mt-3.5 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 bg-indigo-950/40 border border-indigo-500/20 px-2 py-0.5 rounded-md">
                                Subject
                              </span>
                              <h5 className="text-xs sm:text-sm font-semibold text-white">
                                {item.subject || "(No subject provided)"}
                              </h5>
                            </div>

                            <p
                              className={`text-xs sm:text-sm text-slate-300 whitespace-pre-wrap leading-relaxed ${
                                !isExpanded ? "line-clamp-2" : ""
                              }`}
                            >
                              {item.message}
                            </p>

                            {/* View Full Message / Expand Button */}
                            <div className="pt-2 flex items-center justify-between text-xs font-mono">
                              <button
                                onClick={() => setSelectedMessage(item)}
                                className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
                              >
                                <FaEye size={11} />
                                <span>Inspect Details & Raw Data</span>
                              </button>

                              {item.message.length > 120 && (
                                <button
                                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                                  className="text-slate-400 hover:text-white transition-colors"
                                >
                                  {isExpanded ? "Show Less ▲" : "Read More ▼"}
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </main>
          </div>
        )}

        {/* 5. INSPECT DETAIL MODAL */}
        <AnimatePresence>
          {selectedMessage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-2xl rounded-2xl bg-dark-900 border border-white/10 p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-indigo-400" />
                    <h3 className="text-base font-bold text-white">
                      Contact Submission Details
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedMessage(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-dark-800 transition-colors"
                  >
                    <FaTimes size={14} />
                  </button>
                </div>

                <div className="mt-5 space-y-4">
                  {/* Firestore Document ID */}
                  <div className="p-3 rounded-xl bg-dark-950 border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono uppercase text-slate-500">
                        Firestore Document ID
                      </p>
                      <p className="text-xs font-mono text-indigo-300 mt-0.5">
                        {selectedMessage.id}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard(selectedMessage.id, `modal-id`, "Document ID")
                      }
                      className="px-2.5 py-1.5 rounded-lg bg-dark-900 text-xs font-mono text-slate-300 hover:text-white border border-white/10 flex items-center gap-1.5"
                    >
                      <FaCopy size={11} />
                      <span>Copy ID</span>
                    </button>
                  </div>

                  {/* Sender details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-dark-950 border border-white/5">
                      <p className="text-[10px] font-mono uppercase text-slate-500">
                        Sender Name
                      </p>
                      <p className="text-sm font-semibold text-white mt-0.5 flex items-center gap-2">
                        <FaUser size={12} className="text-slate-400" />
                        <span>{selectedMessage.name}</span>
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-dark-950 border border-white/5">
                      <p className="text-[10px] font-mono uppercase text-slate-500">
                        Sender Email
                      </p>
                      <p className="text-sm font-semibold text-cyan-300 mt-0.5 flex items-center gap-2">
                        <FaEnvelope size={12} className="text-slate-400" />
                        <a
                          href={`mailto:${selectedMessage.email}`}
                          className="hover:underline truncate"
                        >
                          {selectedMessage.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="p-3 rounded-xl bg-dark-950 border border-white/5">
                    <p className="text-[10px] font-mono uppercase text-slate-500">Subject</p>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {selectedMessage.subject || "General Inquiry"}
                    </p>
                  </div>

                  {/* Message body */}
                  <div className="p-4 rounded-xl bg-dark-950 border border-white/5">
                    <p className="text-[10px] font-mono uppercase text-slate-500 mb-2">
                      Full Message
                    </p>
                    <p className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap leading-relaxed">
                      {selectedMessage.message}
                    </p>
                  </div>

                  {/* Timestamp */}
                  <div className="text-xs font-mono text-slate-400">
                    Timestamp: {formatTimestamp(selectedMessage.createdAt).display}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setDeleteTarget(selectedMessage);
                      setSelectedMessage(null);
                    }}
                    className="px-3 py-2 rounded-xl text-xs font-mono text-red-400 hover:bg-red-950/40 border border-red-500/20 transition-colors flex items-center gap-1.5"
                  >
                    <FaTrashAlt size={11} />
                    <span>Delete In Firestore</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${selectedMessage.email}?subject=Re: ${encodeURIComponent(
                        selectedMessage.subject || "Your Inquiry"
                      )}`}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors flex items-center gap-2"
                    >
                      <RiMailSendLine size={14} />
                      <span>Reply via Email</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* 6. DELETE CONFIRMATION MODAL */}
        <AnimatePresence>
          {deleteTarget && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-md rounded-2xl bg-dark-900 border border-red-500/30 p-6 shadow-2xl"
              >
                <div className="h-12 w-12 rounded-xl bg-red-950/50 border border-red-500/40 flex items-center justify-center text-red-400 mb-4">
                  <FaTrashAlt size={20} />
                </div>
                <h3 className="text-base font-bold text-white">
                  Delete Firestore Document?
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  Are you sure you want to permanently remove inquiry from{" "}
                  <strong className="text-white">{deleteTarget.name}</strong> (Doc ID:{" "}
                  <code className="text-red-300 font-mono">{deleteTarget.id}</code>)?
                  This operation cannot be undone.
                </p>

                <div className="mt-6 flex items-center justify-end gap-3">
                  <button
                    disabled={isDeleting}
                    onClick={() => setDeleteTarget(null)}
                    className="px-4 py-2 rounded-xl bg-dark-800 hover:bg-dark-700 text-slate-300 text-xs font-mono transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    disabled={isDeleting}
                    onClick={confirmDelete}
                    className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold transition-colors flex items-center gap-2"
                  >
                    {isDeleting ? (
                      <>
                        <FaSyncAlt className="animate-spin" size={11} />
                        <span>Deleting...</span>
                      </>
                    ) : (
                      <span>Confirm Delete</span>
                    )}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

function RiSparklingBadge() {
  return (
    <span className="h-2 w-2 rounded-full bg-indigo-400 animate-ping inline-block" />
  );
}
