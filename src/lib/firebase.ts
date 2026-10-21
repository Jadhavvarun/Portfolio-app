import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

// Firebase web configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCYKlK3AO2UBgPSPnCeE8nZCDsl0_y9tG4",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "varun-portfolio-f7909.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "varun-portfolio-f7909",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "varun-portfolio-f7909.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "12600215732",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:12600215732:web:7dcb2f7787ad2e1cd9afe1",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-S7QY13F39R",
};

// Singleton Firebase App instance (safely handles Next.js SSR and client hot reloads)
export const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Firebase Authentication & Google Provider
export const auth: Auth = getAuth(app);
export const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Firestore Database instance
export const db: Firestore = getFirestore(app);

// Safe Client-side Analytics initialization
let analytics: Analytics | null = null;
if (typeof window !== "undefined") {
  isSupported()
    .then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    })
    .catch(() => {
      // Analytics unsupported in current environment, ignore safely
    });
}

// Configurable Admin Emails list
export const ADMIN_EMAILS: string[] = (
  process.env.NEXT_PUBLIC_ADMIN_EMAILS ||
  "jadhavvarun67@gmail.com"
)
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);

/**
 * Check if the given user email is an authorized administrator
 */
export const checkIsAdmin = (email: string | null | undefined): boolean => {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.trim().toLowerCase());
};

export { analytics };
export default app;
