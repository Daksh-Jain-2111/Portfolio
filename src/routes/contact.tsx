import { useState, useRef, type FormEvent } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle2,
  Download,
  Eye,
  FolderOpen,
  Handshake,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Share2,
  Sparkles,
  User,
  Users2,
  Zap,
} from "lucide-react";

import { sendEmailDirect } from "@/lib/email";
import heroContact from "@/assets/hero-contact.jpg";
import resumePdf from "@/assets/Daksh Jain.pdf";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jain Daksh Swapnil | AI & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Get in touch with Jain Daksh Swapnil for collaborations, opportunities, or interesting AI and full-stack projects.",
      },
      { property: "og:title", content: "Contact — Jain Daksh Swapnil" },
      {
        property: "og:description",
        content: "Let's build something meaningful. Send a message or connect on social media.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

/* CUSTOM SOCIAL LOGOS */
function WhatsAppIcon() {
  return (
    <svg className="size-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.511 2 2.012 6.5 2.012 12.02c0 1.97.57 3.82 1.57 5.39L2 22.08l4.82-1.54c1.5 1 3.28 1.56 5.21 1.56 5.52 0 10.02-4.5 10.02-10.02C22.05 6.5 17.55 2 12.03 2zm5.83 14.28c-.25.69-1.44 1.34-1.99 1.4-.52.06-1.18.09-3.41-.83-2.67-1.11-4.38-3.83-4.51-4-.13-.18-1.07-1.42-1.07-2.72s.67-1.93.91-2.2c.24-.26.53-.33.71-.33.18 0 .36 0 .52.01.17.01.4.06.6.53.22.52.74 1.8.8 1.93.07.13.11.29.02.47-.08.19-.13.3-.26.46-.13.15-.28.34-.4.46-.13.13-.27.28-.12.54.16.27.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.13.43.11.59-.07.16-.18.69-.8 1.87-.08.18.09 1.15.54 1.35.64.2.1.33.15.38.23.05.08.05.47-.2 1.16z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="size-6 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg className="size-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.03 2.05c-3.1 0-5.63 2.5-5.63 5.6 0 .52.07 1.02.2 1.5-.78.13-1.63.45-2.07.82-.44.38-.41.83-.34 1.07.18.61.94.88 1.48 1.06-.06.45-.1.9-.1 1.37 0 1.28.48 2.27 1.27 2.82-.43.5-.95.84-1.57.97-.47.1-.86.37-.89.8-.03.44.3.82.74.96 1.33.43 2.7.25 3.9-.12.44.52 1.04.88 1.7.97.4.06.8.08 1.2.08.41 0 .8-.02 1.2-.08.66-.09 1.26-.45 1.7-.97 1.2.37 2.57.55 3.9.12.44-.14.77-.52.74-.96-.03-.43-.42-.7-.89-.8-.62-.13-1.14-.47-1.57-.97.79-.55 1.27-1.54 1.27-2.82 0-.47-.04-.92-.1-1.37.54-.18 1.3-.45 1.48-1.06.07-.24.1-.69-.34-1.07-.44-.37-1.29-.69-2.07-.82.13-.48.2-.98.2-1.5 0-3.1-2.53-5.6-5.63-5.6z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="size-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="size-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setStatus("idle");
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const purpose = String(formData.get("purpose") ?? "General Query").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await sendEmailDirect({
        name,
        email,
        subject,
        purpose,
        message,
      });

      if (response.success) {
        setStatus("success");
        setErrorMessage(null);
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setStatus("error");
        setErrorMessage(
          response.error ||
          "Failed to send message. Please try again or email dakshjainlptp1008@gmail.com directly.",
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-5rem)] bg-[#fbfdfc] pb-16 pt-4 sm:pt-6">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div
        className="pointer-events-none absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-emerald-200/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 top-10 -z-10 h-[28rem] w-[28rem] rounded-full bg-teal-100/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="shell space-y-12">
        {/* ========================================================================= */}
        {/* HERO SECTION: TITLE + 3D CONTACT ILLUSTRATION */}
        {/* ========================================================================= */}
        <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_minmax(320px,420px)]">
          <div>
            {/* EYEBROW */}
            <div className="inline-block">
              <span className="text-[12px] font-black uppercase tracking-widest text-emerald-600">
                CONTACT
              </span>
              <div className="mt-1 h-1 w-8 rounded-full bg-emerald-500" />
            </div>

            {/* HEADING */}
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.2rem] leading-[1.12]">
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-emerald-600">meaningful.</span>
            </h1>

            {/* SUBTITLE */}
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-600 sm:text-base">
              I&apos;m always open to discussing new opportunities, collaborations, or interesting
              projects.
              <br />
              Feel free to reach out!
            </p>

            {/* 3 FEATURE PILLS */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-gray-100/90 bg-white px-3.5 py-2 text-[12.5px] font-bold text-gray-800 shadow-xs">
                <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Send className="size-3.5" />
                </div>
                <span>Open to Opportunities</span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-gray-100/90 bg-white px-3.5 py-2 text-[12.5px] font-bold text-gray-800 shadow-xs">
                <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Users2 className="size-3.5" />
                </div>
                <span>Let&apos;s Build Together</span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-gray-100/90 bg-white px-3.5 py-2 text-[12.5px] font-bold text-gray-800 shadow-xs">
                <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Handshake className="size-3.5" />
                </div>
                <span>Collaborate &amp; Create Impact</span>
              </div>
            </div>
          </div>

          {/* 3D CONTACT HERO WITH ENVELOPE & LAPTOP */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="group relative animate-float">
              <div
                className="absolute -inset-4 -z-10 rounded-full bg-emerald-300/20 blur-2xl transition-all duration-500 group-hover:bg-emerald-300/35"
                aria-hidden="true"
              />
              <img
                src={heroContact}
                alt="3D render of open envelope with Lets Connect card, laptop, and mug"
                className="w-full max-w-[320px] rounded-3xl object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-transform duration-500 hover:scale-[1.03] sm:max-w-[380px]"
              />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MAIN CONTENT GRID (LEFT: INFO + ACTIONS | RIGHT: FORM + SOCIALS) */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          {/* ======================================================================= */}
          {/* LEFT COLUMN: GET IN TOUCH + QUICK ACTIONS */}
          {/* ======================================================================= */}
          <div className="space-y-6">
            {/* GET IN TOUCH CARD */}
            <article className="rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8f8f0] text-emerald-600 shadow-xs">
                  <User className="size-5.5" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900">Get in Touch</h2>
                  <p className="text-xs text-gray-400 font-medium">
                    I&apos;d love to hear from you!
                  </p>
                </div>
              </div>
              <div className="mt-3 h-0.5 w-12 bg-emerald-500 rounded-full" />

              {/* Details List */}
              <div className="mt-6 space-y-4">
                {/* Name */}
                <div className="flex items-center gap-3.5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <User className="size-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase">Name</div>
                    <div className="text-sm font-extrabold text-gray-900">Jain Daksh Swapnil</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase">Location</div>
                    <div className="text-sm font-extrabold text-gray-900">
                      Songir, Dhule, Maharashtra, India
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3.5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase">Phone</div>
                    <a
                      href="tel:+919421757907"
                      className="text-sm font-extrabold text-gray-900 hover:text-emerald-600 transition-colors"
                    >
                      +91 94217 57907
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase">Email</div>
                    <a
                      href="mailto:dakshjainlptp1008@gmail.com"
                      className="text-sm font-extrabold text-gray-900 hover:text-emerald-600 transition-colors break-all"
                    >
                      dakshjainlptp1008@gmail.com
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-3.5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <GitHubIcon />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase">GitHub</div>
                    <a
                      href="https://github.com/Daksh-Jain-2111"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-black-600 hover:underline"
                    >
                      (https://github.com/Daksh-Jain-2111)
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3.5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <LinkedInIcon />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/daksh-jain-a9b714352"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-black-600 hover:underline"
                    >
                      (https://www.linkedin.com/in/daksh-jain-a9b714352)
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* QUICK ACTIONS CARD */}
            <article className="rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#e8f8f0] text-emerald-600 shadow-xs">
                  <Zap className="size-4.5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-gray-900">Quick Actions</h3>
                  <p className="text-xs text-gray-400 font-medium">
                    Explore more or download my resume.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={resumePdf}
                  download="Daksh_Jain_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-200/80 bg-emerald-50/70 px-4 py-3.5 text-xs font-bold text-emerald-700 shadow-xs transition-all hover:bg-emerald-100 hover:-translate-y-0.5"
                >
                  <Download className="size-4 text-emerald-600" />
                  Download Resume
                </a>

                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-purple-200/80 bg-purple-50/70 px-4 py-3.5 text-xs font-bold text-purple-700 shadow-xs transition-all hover:bg-purple-100 hover:-translate-y-0.5"
                >
                  <Eye className="size-4 text-purple-600" />
                  View Resume
                </a>
              </div>

              <Link
                to="/projects"
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-blue-200/80 bg-blue-50/70 px-4 py-3.5 text-xs font-bold text-blue-700 shadow-xs transition-all hover:bg-blue-100 hover:-translate-y-0.5"
              >
                <FolderOpen className="size-4 text-blue-600" />
                View My Projects
              </Link>
            </article>
          </div>

          {/* ======================================================================= */}
          {/* RIGHT COLUMN: SEND MESSAGE FORM + SOCIAL MEDIA */}
          {/* ======================================================================= */}
          <div className="space-y-6">
            {/* SEND ME A MESSAGE CARD */}
            <article className="rounded-3xl border border-gray-100/90 bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8f8f0] text-emerald-600 shadow-xs">
                  <MessageSquare className="size-5.5" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900">Send Me a Message</h2>
                  <p className="text-xs text-gray-400 font-medium">
                    Fill out the form below and I&apos;ll get back to you.
                  </p>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Your Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    placeholder="Enter your name"
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-60 disabled:bg-gray-50"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    placeholder="Enter your email"
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-60 disabled:bg-gray-50"
                  />
                </div>

                {/* Subject & Purpose */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      disabled={isSubmitting}
                      placeholder="Enter subject"
                      className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-60 disabled:bg-gray-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="purpose" className="block text-xs font-bold text-gray-700">
                      Purpose
                    </label>
                    <select
                      id="purpose"
                      name="purpose"
                      disabled={isSubmitting}
                      className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-60 disabled:bg-gray-50"
                    >
                      <option value="Collaboration">Collaboration</option>
                      <option value="Hiring / Job Opportunity">Hiring / Job Opportunity</option>
                      <option value="Freelance Project">Freelance Project</option>
                      <option value="Mentorship & Advice">Mentorship &amp; Advice</option>
                      <option value="General Query">General Query</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    disabled={isSubmitting}
                    placeholder="Write your message here..."
                    className="mt-1.5 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-60 disabled:bg-gray-50"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#10b981] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(16,185,129,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#059669] hover:shadow-[0_12px_24px_rgba(16,185,129,0.45)] cursor-pointer disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Send Message
                    </>
                  )}
                </button>

                {status === "success" ? (
                  <div className="flex items-start gap-2.5 rounded-2xl bg-emerald-50 p-4 text-xs font-semibold text-emerald-800 border border-emerald-200 shadow-xs animate-in fade-in duration-300">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-bold text-emerald-900">Message sent successfully!</p>
                      <p className="mt-0.5 text-emerald-700 font-normal">
                        Thank you! Your message has been sent.!!!
                      </p>
                    </div>
                  </div>
                ) : null}

                {status === "error" && errorMessage ? (
                  <div className="flex items-start gap-2.5 rounded-2xl bg-rose-50 p-4 text-xs font-semibold text-rose-800 border border-rose-200 shadow-xs animate-in fade-in duration-300">
                    <AlertCircle className="size-4 shrink-0 text-rose-600 mt-0.5" />
                    <div>
                      <p className="font-bold text-rose-900">Unable to send message</p>
                      <p className="mt-0.5 text-rose-700 font-normal">{errorMessage}</p>
                    </div>
                  </div>
                ) : null}
              </form>
            </article>

            {/* CONNECT ON SOCIAL MEDIA */}
            <article className="rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#e8f8f0] text-emerald-600 shadow-xs">
                  <Share2 className="size-4.5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-gray-900">
                    Connect on Social Media
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">
                    Let&apos;s connect and stay in touch!
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2.5 pt-2 text-center">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919421757907"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-1.5 transition-transform hover:-translate-y-1"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#25D366] shadow-sm">
                    <WhatsAppIcon />
                  </div>
                  <div className="text-[11.5px] font-extrabold text-gray-900">WhatsApp</div>

                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/dakshu1748"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-1.5 transition-transform hover:-translate-y-1"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] shadow-sm">
                    <InstagramIcon />
                  </div>
                  <div className="text-[11.5px] font-extrabold text-gray-900">Instagram</div>

                </a>

                {/* Snapchat */}
                <a
                  href="https://www.snapchat.com/add/dakshu_122tp"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-1.5 transition-transform hover:-translate-y-1"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#FFFC00] shadow-sm border border-yellow-300/40">
                    <SnapchatIcon />
                  </div>
                  <div className="text-[11.5px] font-extrabold text-gray-900">Snapchat</div>

                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Daksh-Jain-2111"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-1.5 transition-transform hover:-translate-y-1"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#181717] shadow-sm">
                    <GitHubIcon />
                  </div>
                  <div className="text-[11.5px] font-extrabold text-gray-900">GitHub</div>

                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/daksh-jain-a9b714352"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-1.5 transition-transform hover:-translate-y-1"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#0A66C2] shadow-sm">
                    <LinkedInIcon />
                  </div>
                  <div className="text-[11.5px] font-extrabold text-gray-900">LinkedIn</div>

                </a>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
