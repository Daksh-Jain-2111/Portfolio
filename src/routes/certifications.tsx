import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Bot,
  Brain,
  CheckCircle2,
  Code2,
  ExternalLink,
  FolderOpen,
  GraduationCap,
  Sparkles,
  Zap,
} from "lucide-react";

import heroCertifications from "@/assets/hero-certifications.jpg";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Jain Daksh Swapnil | AI & Full-Stack Developer" },
      {
        name: "description",
        content:
          "A collection of certifications and learning credentials covering AI/ML, programming, prompt engineering, and modern development.",
      },
      { property: "og:title", content: "Certifications — Jain Daksh Swapnil" },
      {
        property: "og:description",
        content:
          "SoloLearn programming certificates, Microsoft Learning Paths in AI and agents, and technical milestones.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CertificationsPage,
});

/* CUSTOM LOGOS & ICONS */
function MicrosoftLogo({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <rect x="1" y="1" width="10" height="10" fill="#F25022" />
      <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
      <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
      <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
    </svg>
  );
}

function SoloLearnLogo({ color = "#9333ea" }: { color?: string }) {
  return (
    <div
      className="flex items-center gap-1.5 font-extrabold tracking-wider text-[11px] uppercase"
      style={{ color }}
    >
      <svg className="size-4" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2.5" />
        <path d="M12 7v10M7 12h10" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span>SOLOLEARN</span>
    </div>
  );
}

function PythonIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24">
      <path
        fill="#3776AB"
        d="M11.9 2c-3.1 0-4.9 1.4-4.9 3.5v2.6h5.1v.7H4.3C2.2 8.8 1 10.6 1 13.7s1.3 4.9 3.4 4.9h2v-2.8c0-2.3 2-4.2 4.3-4.2h5.1v-.8c0-2.1-1.7-3.8-3.8-3.8h-5V5.5c0-2 1.8-3.5 4.9-3.5 3 0 4.9 1.5 4.9 3.5v1.2h-2V5.5c0-.8-.7-1.5-1.5-1.5H11.9zm-2.4 1.8c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
      />
      <path
        fill="#FFD43B"
        d="M12.1 22c3.1 0 4.9-1.4 4.9-3.5v-2.6H12v-.7h7.7c2.1 0 3.3-1.8 3.3-4.9s-1.3-4.9-3.4-4.9h-2v2.8c0 2.3-2 4.2-4.3 4.2H8.2v.8c0 2.1 1.7 3.8 3.8 3.8h5v1.2c0 2-1.8 3.5-4.9 3.5-3 0-4.9-1.5-4.9-3.5v-1.2h2v1.2c0 .8.7 1.5 1.5 1.5h.4zm2.4-1.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
      />
    </svg>
  );
}

function CIcon() {
  return (
    <div className="flex size-4 shrink-0 items-center justify-center rounded bg-[#A8B9CC] text-[9px] font-black text-[#1E293B]">
      C
    </div>
  );
}

function CppIcon() {
  return (
    <div className="flex size-4 shrink-0 items-center justify-center rounded bg-[#00599C] text-[8px] font-black text-white">
      C++
    </div>
  );
}

function JavaIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="#EA2D2E">
      <path d="M8.8 19.5s-.8.6.6.8c1.7.2 2.9.2 5.1-.2 0 0 .7.4 1.4.7-4.4 2.1-10.4.3-7.1-1.3zm-.6-2.5s-1 .7.4.9c2 .3 3.9.3 7.3-.3 0 0 .5.5 1 .7-5.5 2.1-12.7.5-8.7-1.3zm4.5-4.4c.7.8.6 1.5.6 1.5s-.2.7-1.7 1.2c-1.8.6-3.8.4-5.3-.3 0 0-.4.5.6.8 3.1.9 7.4.4 8.7-1.4 1.1-1.6-.9-2.5-2.9-1.8zm3.6-3.7c1.3 1.5-.7 3.5-3.3 4.5 0 0 .7-.4 1-.7 1.7-.7 2.8-1.9 2-2.9-.8-1-2.4-1.4-3.7-2.1-1.1-.6-1.5-1.5-1.5-1.5s1.2.3 2.5 1c1.5.9 2.2 1.1 3 1.7z" />
    </svg>
  );
}

const stats = [
  {
    icon: GraduationCap,
    value: "7+",
    label: "Technical",
    sub: "Certifications",
    iconBg: "bg-[#e8f8f0] text-emerald-600",
  },
  {
    icon: Code2,
    value: "4",
    label: "Programming",
    sub: "Languages",
    iconBg: "bg-[#e0f2fe] text-[#0284c7]",
  },
  {
    icon: Brain,
    value: "2",
    label: "AI / ML",
    sub: "Credentials",
    iconBg: "bg-[#f3e8ff] text-[#9333ea]",
  },
  {
    isMicrosoft: true,
    value: "2",
    label: "Microsoft",
    sub: "Learning Paths",
    iconBg: "bg-[#f8fafc]",
  },
];

function CertificationsPage() {
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
        {/* HERO SECTION: TITLE + 3D CERTIFICATE HERO */}
        {/* ========================================================================= */}
        <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_minmax(320px,420px)]">
          <div>
            {/* EYEBROW */}
            <div className="inline-block">
              <span className="text-[12px] font-black uppercase tracking-widest text-emerald-600">
                CERTIFICATIONS &amp; LEARNING
              </span>
              <div className="mt-1 h-1 w-8 rounded-full bg-emerald-500" />
            </div>

            {/* HEADING */}
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.2rem] leading-[1.12]">
              Continuous learning,
              <br />
              <span className="text-emerald-600">one skill at a time.</span>
            </h1>

            {/* SUBTITLE */}
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-600 sm:text-base">
              A collection of certifications and learning credentials covering AI/ML, programming,
              prompt engineering, and modern development.
            </p>
          </div>

          {/* 3D CERTIFICATE HERO WITH PEDESTAL */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="group relative animate-float">
              <div
                className="absolute -inset-4 -z-10 rounded-full bg-emerald-300/20 blur-2xl transition-all duration-500 group-hover:bg-emerald-300/35"
                aria-hidden="true"
              />
              <img
                src={heroCertifications}
                alt="3D Framed Certificate of Completion with green ribbon wax seal and floating cubes"
                className="w-full max-w-[320px] rounded-3xl object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-transform duration-500 hover:scale-[1.03] sm:max-w-[380px]"
              />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* STATS BAR (4 CARDS) */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-2 gap-4 rounded-3xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center gap-3.5 px-3 py-1 ${
                i > 0 ? "lg:border-l lg:border-gray-100" : ""
              }`}
            >
              <div
                className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${s.iconBg} shadow-xs`}
              >
                {s.isMicrosoft ? (
                  <MicrosoftLogo className="size-6" />
                ) : (
                  s.icon && <s.icon className="size-6" />
                )}
              </div>
              <div className="min-w-0">
                <div className="text-2xl font-black text-gray-900">{s.value}</div>
                <div className="truncate text-[13px] font-bold text-gray-900">{s.label}</div>
                <div className="truncate text-[11.5px] font-medium text-gray-400">{s.sub}</div>
              </div>
            </div>
          ))}
        </section>

        {/* ========================================================================= */}
        {/* SECTION 1: FEATURED CERTIFICATIONS */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e8f8f0] text-emerald-600">
                <Award className="size-4.5" />
              </div>
              <h2 className="text-[15px] font-extrabold uppercase tracking-wide text-gray-900">
                FEATURED CERTIFICATIONS
              </h2>
            </div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-purple-600">
              SoloLearn
            </span>
          </div>

          {/* ROW 1: 3 LARGE CARDS */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* CARD 1: PROMPT ENGINEERING */}
            <article className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />
              <div>
                <SoloLearnLogo color="#9333ea" />
                <h3 className="mt-3.5 text-lg font-extrabold text-gray-900 leading-snug">
                  Prompt Engineering
                </h3>
                <p className="mt-1 text-[12.5px] font-medium text-gray-500">
                  AI &amp; Modern Development
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-gray-50 pt-4 text-xs">
                <span className="flex items-center gap-1.5 font-semibold text-gray-500">
                  <CheckCircle2 className="size-3.5 text-emerald-600" />
                  Certificate of Completion
                </span>
                <a
                  href="https://www.sololearn.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-purple-600 hover:underline"
                >
                  View Credential →
                </a>
              </div>
            </article>

            {/* CARD 2: MACHINE LEARNING FOR BEGINNERS */}
            <article className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <div>
                <SoloLearnLogo color="#0284c7" />
                <h3 className="mt-3.5 text-lg font-extrabold text-gray-900 leading-snug">
                  Machine Learning for Beginners
                </h3>
                <p className="mt-1 text-[12.5px] font-medium text-gray-500">
                  AI &amp; Data Science
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-gray-50 pt-4 text-xs">
                <span className="flex items-center gap-1.5 font-semibold text-gray-500">
                  <CheckCircle2 className="size-3.5 text-emerald-600" />
                  Certificate of Completion
                </span>
                <a
                  href="https://www.sololearn.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-blue-600 hover:underline"
                >
                  View Credential →
                </a>
              </div>
            </article>

            {/* CARD 3: VIBE CODING */}
            <article className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
              <div>
                <SoloLearnLogo color="#10b981" />
                <h3 className="mt-3.5 text-lg font-extrabold text-gray-900 leading-snug">
                  Vibe Coding
                </h3>
                <p className="mt-1 text-[12.5px] font-medium text-gray-500">Modern Development</p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-gray-50 pt-4 text-xs">
                <span className="flex items-center gap-1.5 font-semibold text-gray-500">
                  <CheckCircle2 className="size-3.5 text-emerald-600" />
                  Certificate of Completion
                </span>
                <a
                  href="https://www.sololearn.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-emerald-600 hover:underline"
                >
                  View Credential →
                </a>
              </div>
            </article>
          </div>

          {/* ROW 2: 4 SMALLER CARDS */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* C Intermediate */}
            <article className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100/90 bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#ea580c]" />
              <div>
                <div className="flex items-center gap-1.5">
                  <CIcon />
                  <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#ea580c]">
                    SOLOLEARN
                  </span>
                </div>
                <h3 className="mt-2.5 text-[15px] font-extrabold text-gray-900">C Intermediate</h3>
                <p className="mt-0.5 text-[11.5px] font-medium text-gray-500">Programming</p>
              </div>
              <div className="mt-6 flex flex-col gap-2 border-t border-gray-50 pt-3 text-[11.5px]">
                <span className="flex items-center gap-1.5 text-gray-400">
                  <CheckCircle2 className="size-3 text-emerald-600" />
                  Certificate of Completion
                </span>
                <a
                  href="https://www.sololearn.com"
                  target="_blank"
                  rel="noreferrer"
                  className="self-end font-bold text-[#ea580c] hover:underline"
                >
                  View Credential →
                </a>
              </div>
            </article>

            {/* Introduction to Python */}
            <article className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100/90 bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#0284c7]" />
              <div>
                <div className="flex items-center gap-1.5">
                  <PythonIcon />
                  <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#0284c7]">
                    SOLOLEARN
                  </span>
                </div>
                <h3 className="mt-2.5 text-[15px] font-extrabold text-gray-900">
                  Introduction to Python
                </h3>
                <p className="mt-0.5 text-[11.5px] font-medium text-gray-500">Programming</p>
              </div>
              <div className="mt-6 flex flex-col gap-2 border-t border-gray-50 pt-3 text-[11.5px]">
                <span className="flex items-center gap-1.5 text-gray-400">
                  <CheckCircle2 className="size-3 text-emerald-600" />
                  Certificate of Completion
                </span>
                <a
                  href="https://www.sololearn.com"
                  target="_blank"
                  rel="noreferrer"
                  className="self-end font-bold text-[#0284c7] hover:underline"
                >
                  View Credential →
                </a>
              </div>
            </article>

            {/* Introduction to C++ */}
            <article className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100/90 bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#1e40af]" />
              <div>
                <div className="flex items-center gap-1.5">
                  <CppIcon />
                  <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#1e40af]">
                    SOLOLEARN
                  </span>
                </div>
                <h3 className="mt-2.5 text-[15px] font-extrabold text-gray-900">
                  Introduction to C++
                </h3>
                <p className="mt-0.5 text-[11.5px] font-medium text-gray-500">Programming</p>
              </div>
              <div className="mt-6 flex flex-col gap-2 border-t border-gray-50 pt-3 text-[11.5px]">
                <span className="flex items-center gap-1.5 text-gray-400">
                  <CheckCircle2 className="size-3 text-emerald-600" />
                  Certificate of Completion
                </span>
                <a
                  href="https://www.sololearn.com"
                  target="_blank"
                  rel="noreferrer"
                  className="self-end font-bold text-[#1e40af] hover:underline"
                >
                  View Credential →
                </a>
              </div>
            </article>

            {/* Introduction to Java */}
            <article className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100/90 bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#dc2626]" />
              <div>
                <div className="flex items-center gap-1.5">
                  <JavaIcon />
                  <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#dc2626]">
                    SOLOLEARN
                  </span>
                </div>
                <h3 className="mt-2.5 text-[15px] font-extrabold text-gray-900">
                  Introduction to Java
                </h3>
                <p className="mt-0.5 text-[11.5px] font-medium text-gray-500">Programming</p>
              </div>
              <div className="mt-6 flex flex-col gap-2 border-t border-gray-50 pt-3 text-[11.5px]">
                <span className="flex items-center gap-1.5 text-gray-400">
                  <CheckCircle2 className="size-3 text-emerald-600" />
                  Certificate of Completion
                </span>
                <a
                  href="https://www.sololearn.com"
                  target="_blank"
                  rel="noreferrer"
                  className="self-end font-bold text-[#dc2626] hover:underline"
                >
                  View Credential →
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: MICROSOFT LEARNING PATHS */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
            <div className="flex items-center gap-3">
              <MicrosoftLogo className="size-5" />
              <h2 className="text-[15px] font-extrabold uppercase tracking-wide text-gray-900">
                MICROSOFT LEARNING PATHS
              </h2>
            </div>
            <span className="text-xs font-bold text-blue-600">Microsoft Learn</span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* PATH 1: AI FLUENCY */}
            <article className="relative flex flex-col sm:flex-row gap-5 rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="absolute right-6 top-6">
                <MicrosoftLogo className="size-4.5" />
              </div>

              {/* 3D Sphere Graphic */}
              <div className="flex size-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200/50 shadow-inner">
                <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md">
                  <Brain className="size-8 text-white drop-shadow" />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between min-w-0 pr-6">
                <div>
                  <h3 className="text-lg font-extrabold text-gray-900 leading-snug">AI Fluency</h3>
                  <div className="mt-0.5 text-xs font-bold text-blue-600">Microsoft Learn</div>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-gray-500">
                    Build foundational AI knowledge and practical understanding of core AI concepts
                    and tools.
                  </p>
                </div>
                <a
                  href="https://learn.microsoft.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline"
                >
                  View Credential →
                </a>
              </div>
            </article>

            {/* PATH 2: AI AGENTS & MICROSOFT 365 */}
            <article className="relative flex flex-col sm:flex-row gap-5 rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="absolute right-6 top-6">
                <MicrosoftLogo className="size-4.5" />
              </div>

              {/* 3D Robot Graphic */}
              <div className="flex size-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-100 border border-purple-200/50 shadow-inner">
                <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md">
                  <Bot className="size-8 text-white drop-shadow" />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between min-w-0 pr-6">
                <div>
                  <h3 className="text-lg font-extrabold text-gray-900 leading-snug">
                    Build Foundation to Build AI Agents &amp; Extend Microsoft 365
                  </h3>
                  <div className="mt-0.5 text-xs font-bold text-blue-600">Microsoft Learn</div>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-gray-500">
                    Explore how to build AI agents and extend Microsoft 365 with powerful,
                    intelligent solutions.
                  </p>
                </div>
                <a
                  href="https://learn.microsoft.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline"
                >
                  View Credential →
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: WHAT I'VE BEEN LEARNING (ROADMAP) */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e8f8f0] text-emerald-600">
              <BookOpen className="size-4.5" />
            </div>
            <h2 className="text-[15px] font-extrabold uppercase tracking-wide text-gray-900">
              WHAT I&apos;VE BEEN LEARNING
            </h2>
          </div>

          <div className="rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-6">
            {/* BADGES ROW */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <span className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/70 px-3.5 py-2 text-xs font-bold text-emerald-800 shadow-xs">
                <Brain className="size-3.5 text-emerald-600" />
                AI / ML
              </span>
              <span className="flex items-center gap-2 rounded-xl border border-purple-200 bg-purple-50/70 px-3.5 py-2 text-xs font-bold text-purple-800 shadow-xs">
                <Sparkles className="size-3.5 text-purple-600" />
                Prompt Engineering
              </span>
              <span className="flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50/70 px-3.5 py-2 text-xs font-bold text-blue-800 shadow-xs">
                <PythonIcon />
                Python
              </span>
              <span className="flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50/70 px-3.5 py-2 text-xs font-bold text-amber-800 shadow-xs">
                <CIcon />C
              </span>
              <span className="flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50/70 px-3.5 py-2 text-xs font-bold text-indigo-800 shadow-xs">
                <CppIcon />
                C++
              </span>
              <span className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50/70 px-3.5 py-2 text-xs font-bold text-rose-800 shadow-xs">
                <JavaIcon />
                Java
              </span>
              <span className="flex items-center gap-2 rounded-xl border border-teal-200 bg-teal-50/70 px-3.5 py-2 text-xs font-bold text-teal-800 shadow-xs">
                <Code2 className="size-3.5 text-teal-600" />
                Vibe Coding
              </span>
            </div>

            {/* TIMELINE PHASES WITH ARROWS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100 text-center">
              <div className="relative flex flex-col items-center">
                <span className="text-[13px] font-extrabold text-gray-900">
                  Programming Foundations
                </span>
                <span className="mt-1 text-[11px] font-medium text-gray-400">
                  Core Syntaxes &amp; Logic
                </span>
              </div>
              <div className="relative flex flex-col items-center">
                <span className="text-[13px] font-extrabold text-gray-900">
                  AI / ML Fundamentals
                </span>
                <span className="mt-1 text-[11px] font-medium text-gray-400">
                  Models &amp; Algorithms
                </span>
              </div>
              <div className="relative flex flex-col items-center">
                <span className="text-[13px] font-extrabold text-gray-900">
                  AI Engineering &amp; Agents
                </span>
                <span className="mt-1 text-[11px] font-medium text-gray-400">
                  Copilots &amp; Integration
                </span>
              </div>
              <div className="relative flex flex-col items-center">
                <span className="text-[13px] font-extrabold text-emerald-600">
                  Modern Development ⤷
                </span>
                <span className="mt-1 text-[11px] font-medium text-gray-400">
                  Full-Stack Real Solutions
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BOTTOM CALL TO ACTION BANNER */}
        {/* ========================================================================= */}
        <section className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] md:flex-row md:p-8">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#e8f8f0] text-emerald-600 shadow-xs">
              <Zap className="size-7" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                Learning doesn&apos;t stop at a certificate.
              </h2>
              <p className="mt-1 text-[13.5px] font-medium text-gray-500">
                I apply what I learn by building real-world projects that solve meaningful problems.
              </p>
            </div>
          </div>

          <Link
            to="/projects"
            className="flex items-center gap-2 rounded-2xl bg-[#10b981] px-6 py-3.5 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(16,185,129,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#059669] hover:shadow-[0_12px_24px_rgba(16,185,129,0.45)] shrink-0"
          >
            Explore My Projects
            <ArrowRight className="size-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
