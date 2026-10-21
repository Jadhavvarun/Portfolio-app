import type { NextApiRequest, NextApiResponse } from "next";

type ContactResponse = {
  success: boolean;
  message?: string;
  error?: string;
  id?: string;
};

const FIREBASE_API_KEY =
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
  "AIzaSyCYKlK3AO2UBgPSPnCeE8nZCDsl0_y9tG4";
const FIREBASE_PROJECT_ID =
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ||
  "varun-portfolio-f7909";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  // Only accept POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      success: false,
      error: `Method ${req.method} Not Allowed`,
    });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    // Validate name
    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid name.",
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address.",
      });
    }

    // Validate message
    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: "Please provide a message.",
      });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject =
      subject && typeof subject === "string" && subject.trim()
        ? subject.trim()
        : "General Collaboration";
    const trimmedMessage = message.trim();

    // Log the incoming submission in server logs
    console.log("=== NEW INQUIRY FOR VARUN JADHAV ===");
    console.log(`From: ${trimmedName} <${trimmedEmail}>`);
    console.log(`Subject: ${trimmedSubject}`);
    console.log(`Message: ${trimmedMessage}`);
    console.log(`Time: ${new Date().toISOString()}`);

    let savedDocId: string | null = null;
    let firestoreError: string | null = null;

    // Primary: Direct Google Cloud Firestore REST API
    // Executes synchronously and reliably in serverless/Node environments without transport delays
    try {
      const firestoreUrl = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/contact?key=${FIREBASE_API_KEY}`;
      const restResponse = await fetch(firestoreUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            name: { stringValue: trimmedName },
            email: { stringValue: trimmedEmail },
            subject: { stringValue: trimmedSubject },
            message: { stringValue: trimmedMessage },
            createdAt: { timestampValue: new Date().toISOString() },
            read: { booleanValue: false },
            starred: { booleanValue: false },
          },
        }),
      });

      const restData = await restResponse.json().catch(() => ({}));

      if (restResponse.ok && restData.name) {
        // Extract Firestore document ID from: "projects/.../databases/(default)/documents/contact/<docId>"
        savedDocId = restData.name.split("/").pop() || null;
      } else {
        firestoreError =
          restData.error?.message ||
          `Firestore returned HTTP ${restResponse.status} ${restResponse.statusText}`;
      }
    } catch (restErr: any) {
      firestoreError = restErr.message || "Network error connecting to Firestore REST API";
    }

    // Secondary fallback: Try Firebase JS SDK if REST didn't succeed
    if (!savedDocId) {
      try {
        const { db } = await import("@/lib/firebase");
        const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
        const docRef = await addDoc(collection(db, "contact"), {
          name: trimmedName,
          email: trimmedEmail,
          subject: trimmedSubject,
          message: trimmedMessage,
          createdAt: serverTimestamp(),
          read: false,
          starred: false,
        });
        savedDocId = docRef.id;
        firestoreError = null;
      } catch (sdkErr: any) {
        console.error("Firestore SDK fallback error:", sdkErr);
        if (!firestoreError) {
          firestoreError = sdkErr.message || "Failed to save via Firestore SDK";
        }
      }
    }

    // If writing to Firestore failed, return explicit error rather than a false positive
    if (!savedDocId) {
      console.error("Firestore persistence failure:", firestoreError);
      return res.status(500).json({
        success: false,
        error: `Could not save lead to Firestore: ${firestoreError}. Please check Firestore Security Rules in Firebase Console.`,
      });
    }

    console.log(`Successfully stored lead in Firestore: /contact/${savedDocId}`);

    return res.status(200).json({
      success: true,
      id: savedDocId,
      message: "Thank you for reaching out! Your message was received successfully.",
    });
  } catch (error: any) {
    console.error("Error processing contact submission:", error);
    return res.status(500).json({
      success: false,
      error:
        error.message ||
        "An internal server error occurred. Please try again or email jadhavvarun67@gmail.com directly.",
    });
  }
}
