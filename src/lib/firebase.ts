import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, Auth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, Firestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

// Firebase web configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
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

// Connect to Firebase Emulator Suite strictly in non-production local development
const isDevelopmentEmulator =
  process.env.NODE_ENV !== "production" &&
  process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === "true";

if (isDevelopmentEmulator) {
  const authHost = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST || "http://127.0.0.1:9099";
  const firestoreHost = process.env.NEXT_PUBLIC_FIRESTORE_EMULATOR_HOST || "127.0.0.1";
  const firestorePort = Number(process.env.NEXT_PUBLIC_FIRESTORE_EMULATOR_PORT) || 8080;

  try {
    if (typeof window !== "undefined") {
      // Client-side emulator connections (prevent re-connecting on Next.js HMR)
      // @ts-ignore
      if (!auth._emulatorConfig) {
        connectAuthEmulator(auth, authHost, { disableWarnings: true });
      }
      // @ts-ignore
      if (!db._settingsFrozen) {
        connectFirestoreEmulator(db, firestoreHost, firestorePort);
      }
    } else {
      // Server-side (Node/SSR/API routes)
      const serverFirestoreHost = process.env.FIRESTORE_EMULATOR_HOST
        ? process.env.FIRESTORE_EMULATOR_HOST.split(":")[0]
        : firestoreHost;
      const serverFirestorePort = process.env.FIRESTORE_EMULATOR_HOST
        ? Number(process.env.FIRESTORE_EMULATOR_HOST.split(":")[1])
        : firestorePort;

      // @ts-ignore
      if (!db._settingsFrozen) {
        connectFirestoreEmulator(db, serverFirestoreHost, serverFirestorePort);
      }
    }
  } catch (err) {
    console.warn("Firebase emulator connection notice:", err);
  }
}

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
export const ADMIN_EMAILS: string[] = [
  process.env.NEXT_PUBLIC_ADMIN_EMAILS as string
]

/**
 * Check if the given user email is an authorized administrator
 */
export const checkIsAdmin = (email: string | null | undefined): boolean => {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.trim().toLowerCase());
};

export { analytics };
export default app;
