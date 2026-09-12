import { createServerFn } from "@tanstack/react-start";

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  purpose: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

const RECIPIENT_EMAIL = "dakshjainlptp1008@gmail.com";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Direct email dispatcher to dakshjainlptp1008@gmail.com
 */
export async function sendEmailDirect(payload: ContactPayload): Promise<EmailResponse> {
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const subject = payload.subject?.trim() || "Portfolio Inquiry";
  const purpose = payload.purpose?.trim() || "General Query";
  const message = payload.message?.trim();

  // Validate required fields
  if (!name) {
    return { success: false, error: "Please enter your name." };
  }
  if (!email || !isValidEmail(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }
  if (!subject) {
    return { success: false, error: "Please enter a subject." };
  }
  if (!message) {
    return { success: false, error: "Please enter your message." };
  }

  const formattedSubject = `[Portfolio: ${purpose}] ${subject} - from ${name}`;

  try {
    // 1. Check if Resend API key is available in environment
    const resendApiKey =
      typeof process !== "undefined" && process.env ? process.env["RESEND_API_KEY"] : undefined;

    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [RECIPIENT_EMAIL],
          reply_to: email,
          subject: formattedSubject,
          text: `Name: ${name}\nEmail: ${email}\nPurpose: ${purpose}\nSubject: ${subject}\n\nMessage:\n${message}\n\nSent at: ${new Date().toISOString()}`,
        }),
      });

      if (resendRes.ok) {
        return { success: true, message: "Your message has been sent successfully!" };
      }
    }

    // 2. Direct delivery via FormSubmit AJAX service
    const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        _subject: formattedSubject,
        purpose,
        subject,
        message,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (formSubmitRes.ok) {
      const json = (await formSubmitRes.json().catch(() => ({}))) as {
        success?: string | boolean;
        message?: string;
      };
      if (json.success === "true" || json.success === true || formSubmitRes.status === 200) {
        return { success: true, message: "Your message has been sent successfully!" };
      }
    }

    return {
      success: false,
      error:
        "Unable to send your message right now. Please try again or email dakshjainlptp1008@gmail.com directly.",
    };
  } catch (err) {
    console.error("Email send error:", err);
    return {
      success: false,
      error: "Network error occurred while sending message. Please try again.",
    };
  }
}

/**
 * TanStack Start Server Function for backend processing
 */
export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((data: ContactPayload) => data)
  .handler(async ({ data }) => {
    return await sendEmailDirect(data);
  });
