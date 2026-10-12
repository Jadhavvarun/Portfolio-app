import type { NextApiRequest, NextApiResponse } from "next";

type ContactResponse = {
  success: boolean;
  message?: string;
  error?: string;
};

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

    // Log the incoming submission (in server logs / Netlify function logs)
    console.log("=== NEW INQUIRY FOR VARUN JADHAV ===");
    console.log(`From: ${name.trim()} <${email.trim()}>`);
    console.log(`Subject: ${subject ? subject.trim() : "General Collaboration"}`);
    console.log(`Message: ${message.trim()}`);
    console.log(`Time: ${new Date().toISOString()}`);

    // If environment variables are set for email services (e.g. Resend / Webhook),
    // they can be dispatched here cleanly without breaking frontend.
    // e.g.:
    // if (process.env.WEBHOOK_URL) {
    //   await fetch(process.env.WEBHOOK_URL, { method: "POST", body: JSON.stringify(...) });
    // }

    return res.status(200).json({
      success: true,
      message: "Thank you for reaching out! Your message was received successfully.",
    });
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return res.status(500).json({
      success: false,
      error: "An internal server error occurred. Please try again or email jadhavvarun67@gmail.com directly.",
    });
  }
}
