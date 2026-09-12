import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  Code2,
  Download,
  FolderOpen,
  MapPin,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";

import heroExperience from "@/assets/hero-experience.jpg";
import rocketImg from "@/assets/rocket.png";
import resumePdf from "@/assets/Daksh Jain.pdf";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Jain Daksh Swapnil | AI & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Hands-on internships and real-world projects that helped me grow as a developer, collaborator, and problem solver at Sumago Infotech and Param Electroinfo.",
      },
      { property: "og:title", content: "Experience — Jain Daksh Swapnil" },
      {
        property: "og:description",
        content: "Professional experience, internships, recognitions and technologies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

/* CUSTOM TECH ICONS */
function HtmlIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="#E34F26">
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17 5H5.5l.4 4.5h11.7l-.4 4.8-4.2 1.4-4.2-1.4-.3-3H6l.5 5.5L12 20.3l5.5-1.8 1-13.5z" />
    </svg>
  );
}

function CssIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="#1572B6">
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17 5H5.5l.4 4.5h11.7l-.4 4.8-4.2 1.4-4.2-1.4-.3-3H6l.5 5.5L12 20.3l5.5-1.8 1-13.5z" />
    </svg>
  );
}

function JsIcon() {
  return (
    <div className="flex size-4 shrink-0 items-center justify-center rounded bg-[#F7DF1E] text-[9px] font-black text-black">
      JS
    </div>
  );
}

function ReactIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.2"
        stroke="#61DAFB"
        strokeWidth="1.5"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.2"
        stroke="#61DAFB"
        strokeWidth="1.5"
        transform="rotate(120 12 12)"
      />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="#339933">
      <path d="M12 2l10 5.8v11.6L12 25.2 2 19.4V7.8L12 2zm0 3.2L4.5 9.5v8.9l7.5 4.3 7.5-4.3V9.5L12 5.2z" />
    </svg>
  );
}

function ExpressIcon() {
  return (
    <div className="flex size-4 shrink-0 items-center justify-center rounded bg-black text-[8px] font-black text-white">
      ex
    </div>
  );
}

function PhpIcon() {
  return (
    <div className="flex size-4 shrink-0 items-center justify-center rounded bg-[#777BB4] text-[8px] font-black text-white">
      PHP
    </div>
  );
}

function MysqlIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="#4479A1">
      <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 21l7.03-3.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z" />
    </svg>
  );
}

function MongodbIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="#47A248">
      <path d="M12 1.5c-.3 0-6 6.5-6 12 0 4.5 3 7.5 6 9 3-1.5 6-4.5 6-9 0-5.5-5.7-12-6-12zm0 18.5c-2.3-1.2-4.5-3.5-4.5-6.5 0-3.8 3.5-8.2 4.5-9.5 1 1.3 4.5 5.7 4.5 9.5 0 3-2.2 5.3-4.5 6.5z" />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="#F05032">
      <path d="M21.6 10.9l-8.5-8.5a1.8 1.8 0 00-2.6 0L8.7 4.2l3.3 3.3c.7-.2 1.5 0 2 .5.6.6.7 1.4.5 2.1l3.2 3.2c.7-.2 1.5 0 2.1.5.8.8.8 2.2 0 3-.8.8-2.2.8-3 0-.6-.6-.7-1.5-.5-2.1l-3-3v5.6c.3.2.6.5.7.8.8.8.8 2.2 0 3s-2.2.8-3 0a2.2 2.2 0 010-3c.3-.4.7-.6 1.2-.7V9.7c-.5-.1-.9-.3-1.2-.7-.6-.6-.7-1.4-.5-2.1L7.2 5.6 2.4 10.4a1.8 1.8 0 000 2.6l8.5 8.5c.7.7 1.9.7 2.6 0l8.1-8.1a1.8 1.8 0 000-2.5z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="#181717">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function VsCodeIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="#007ACC">
      <path d="M17.5 2.1L9.2 9.8 4.5 6.2 2 7.6v8.8l2.5 1.4 4.7-3.6 8.3 7.7 4.5-2.2V4.3l-4.5-2.2zm0 4.8v10.2l-6-5.1 6-5.1z" />
    </svg>
  );
}

function PostmanIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="#FF6C37">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12l8-4-4 8-1-3-3-1z" fill="white" />
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24">
      <path d="M8 2h4v4H8z" fill="#F24E1E" />
      <path d="M12 2h4a4 4 0 010 8h-4V2z" fill="#FF7262" />
      <path d="M8 6h4v4H8z" fill="#A259FF" />
      <path d="M8 10h4v4H8z" fill="#0ACF83" />
      <path d="M8 14h4a4 4 0 11-4-4v4z" fill="#1ABCFE" />
    </svg>
  );
}

function BootstrapIcon() {
  return (
    <div className="flex size-4 shrink-0 items-center justify-center rounded bg-[#7952B3] text-[9px] font-black text-white">
      B
    </div>
  );
}

function TailwindIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="#38BDF8">
      <path d="M12 6c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.28 1.96 1.11 2.86 2.03C14.07 13.26 15.82 15 20 15c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.28-1.96-1.11-2.86-2.03C17.93 7.74 16.18 6 12 6z" />
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="#FCC624">
      <path d="M12 2C9.2 2 7 4.2 7 7c0 1.2.4 2.2 1 3-1.8 1.5-3 3.8-3 6.5C5 18 6 19 8 19c.8 1.2 2.3 2 4 2s3.2-.8 4-2c2 0 3-1 3-2.5 0-2.7-1.2-5-3-6.5.6-.8 1-1.8 1-3 0-2.8-2.2-5-5-5zm-2 5a1 1 0 112 0 1 1 0 01-2 0zm4 0a1 1 0 112 0 1 1 0 01-2 0z" />
    </svg>
  );
}

/* LOGO SVGS FOR COMPANIES */
function SumagoLogo() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex items-center gap-1">
        <span className="text-sm font-black text-gray-900 tracking-tight">sumago</span>
        <div className="flex gap-0.5">
          <span className="size-1.5 rounded-full bg-[#f97316]" />
          <span className="size-1.5 rounded-full bg-[#10b981]" />
        </div>
      </div>
      <span className="text-[8px] font-bold tracking-widest text-gray-400 uppercase">INFOTECH</span>
    </div>
  );
}

function ParamLogo() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex size-7 items-center justify-center rounded bg-gradient-to-br from-[#0284c7] to-[#1e3a8a] text-white font-black text-sm shadow-xs">
        P
      </div>
      <span className="mt-1 text-[9px] font-extrabold text-gray-900 tracking-wider">PARAM</span>
      <span className="text-[6.5px] font-bold text-gray-400 tracking-widest uppercase">
        ELECTROINFO
      </span>
    </div>
  );
}

const stats = [
  {
    icon: Briefcase,
    value: "2",
    label: "Internships",
    sub: "Completed",
    iconBg: "bg-[#e8f8f0] text-emerald-600",
  },
  {
    icon: Calendar,
    value: "10",
    label: "Months of",
    sub: "Professional Experience",
    iconBg: "bg-[#e8f8f0] text-emerald-600",
  },
  {
    icon: Code2,
    value: "10+",
    label: "Technologies",
    sub: "Worked With",
    iconBg: "bg-[#e8f8f0] text-emerald-600",
  },
  {
    icon: Star,
    value: "1",
    label: "Recognition",
    sub: "Earned",
    iconBg: "bg-[#e8f8f0] text-emerald-600",
  },
];

const techPills = [
  // Row 1
  [
    { name: "HTML", icon: HtmlIcon },
    { name: "CSS", icon: CssIcon },
    { name: "JavaScript", icon: JsIcon },
    { name: "React.js", icon: ReactIcon },
    { name: "Node.js", icon: NodeIcon },
    { name: "Express.js", icon: ExpressIcon },
    { name: "PHP", icon: PhpIcon },
    { name: "MySQL", icon: MysqlIcon },
    { name: "MongoDB", icon: MongodbIcon },
  ],
  // Row 2
  [
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: GithubIcon },
    { name: "VS Code", icon: VsCodeIcon },
    { name: "Postman", icon: PostmanIcon },
    { name: "Figma", icon: FigmaIcon },
    { name: "Bootstrap", icon: BootstrapIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "Linux", icon: LinuxIcon },
  ],
];

function ExperiencePage() {
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
        {/* HERO SECTION: TITLE + 3D HERO ILLUSTRATION */}
        {/* ========================================================================= */}
        <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_minmax(320px,420px)]">
          <div>
            {/* EYEBROW */}
            <div className="inline-block">
              <span className="text-[12px] font-black uppercase tracking-widest text-emerald-600">
                EXPERIENCE
              </span>
              <div className="mt-1 h-1 w-8 rounded-full bg-emerald-500" />
            </div>

            {/* HEADING */}
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.2rem] leading-[1.12]">
              Experience that
              <br />
              builds <span className="text-emerald-600">expertise.</span>
            </h1>

            {/* SUBTITLE */}
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-600 sm:text-base">
              Hands-on internships and real-world projects that helped me grow as a developer,
              collaborator, and problem solver.
            </p>
          </div>

          {/* 3D HERO WITH BRIEFCASE & LAPTOP */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="group relative animate-float">
              <div
                className="absolute -inset-4 -z-10 rounded-full bg-emerald-300/20 blur-2xl transition-all duration-500 group-hover:bg-emerald-300/35"
                aria-hidden="true"
              />
              <img
                src={heroExperience}
                alt="3D render of a green briefcase and laptop with code on white pedestal"
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
                <s.icon className="size-6" />
              </div>
              <div className="min-w-0">
                <div className="text-2xl font-black text-emerald-600">{s.value}</div>
                <div className="truncate text-[13px] font-bold text-gray-900">{s.label}</div>
                <div className="truncate text-[11.5px] font-medium text-gray-400">{s.sub}</div>
              </div>
            </div>
          ))}
        </section>

        {/* ========================================================================= */}
        {/* SECTION 1: PROFESSIONAL EXPERIENCE (TIMELINE) */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e8f8f0] text-emerald-600">
              <Briefcase className="size-4.5" />
            </div>
            <h2 className="text-[15px] font-extrabold uppercase tracking-wide text-gray-900">
              PROFESSIONAL EXPERIENCE
            </h2>
          </div>

          {/* TIMELINE CONTAINER */}
          <div className="relative space-y-8 pl-0 md:pl-2">
            {/* ITEM 1: SUMAGO INFOTECH */}
            <div className="relative grid grid-cols-1 gap-4 md:grid-cols-[140px_auto_1fr] md:gap-6 items-start">
              {/* Left Date Column */}
              <div className="text-left md:text-right pt-2">
                <div className="text-[13px] font-extrabold text-emerald-600 leading-snug">
                  June 2025 –<br />
                  Aug 2025
                </div>
                <span className="mt-1.5 inline-block rounded-md border border-emerald-200/80 bg-emerald-50 px-2 py-0.5 text-[11px] font-extrabold text-emerald-700">
                  3 Months
                </span>
              </div>

              {/* Center Timeline Node */}
              <div className="relative hidden md:flex h-full flex-col items-center">
                <div className="size-4 rounded-full border-2 border-emerald-500 bg-white ring-4 ring-emerald-50 shadow-xs z-10" />
                <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
              </div>

              {/* Content Card */}
              <article className="flex flex-col lg:flex-row gap-6 rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:shadow-md">
                {/* Logo Box */}
                <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-[#f8fafc] shadow-xs">
                  <SumagoLogo />
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-extrabold text-gray-900">
                    Software Developer Intern
                  </h3>
                  <div className="mt-0.5 text-[13.5px] font-bold text-emerald-600">
                    Sumago Infotech
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-gray-400 font-medium">
                    <MapPin className="size-3.5" />
                    <span>Nashik, Maharashtra</span>
                  </div>

                  <ul className="mt-4 space-y-2 text-[12.5px] text-gray-600 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span>Worked on the development of web applications.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span>Implemented new features and UI improvements.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span>Integrated APIs and participated in debugging and testing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span>
                        Collaborated in an agile environment to deliver quality solutions.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span>Strengthened skills in problem solving and clean coding.</span>
                    </li>
                  </ul>
                </div>

                {/* Right Recognition Box */}
                <div className="w-full lg:w-64 shrink-0 rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4 lg:border-l lg:border-emerald-100/80">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
                    Recognition
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Trophy className="size-5 text-emerald-600 shrink-0" />
                    <div className="text-[13.5px] font-extrabold text-gray-900 leading-snug">
                      Project Excellence
                    </div>
                  </div>
                  <div className="mt-0.5 text-[11.5px] font-bold text-gray-500">
                    Sumago Infotech
                  </div>
                  <p className="mt-2 text-[11.5px] leading-relaxed text-gray-500">
                    Recognized for outstanding contribution, dedication and delivering high-quality
                    work during the internship.
                  </p>
                </div>
              </article>
            </div>

            {/* ITEM 2: PARAM ELECTROINFO */}
            <div className="relative grid grid-cols-1 gap-4 md:grid-cols-[140px_auto_1fr] md:gap-6 items-start">
              {/* Left Date Column */}
              <div className="text-left md:text-right pt-2">
                <div className="text-[13px] font-extrabold text-purple-600 leading-snug">
                  June 2026 –<br />
                  Present
                </div>
                <span className="mt-1.5 inline-block rounded-md border border-purple-200/80 bg-purple-50 px-2 py-0.5 text-[11px] font-extrabold text-purple-700">
                  7+ Months*
                </span>
              </div>

              {/* Center Timeline Node */}
              <div className="relative hidden md:flex h-full flex-col items-center">
                <div className="size-4 rounded-full border-2 border-purple-500 bg-white ring-4 ring-purple-50 shadow-xs z-10" />
              </div>

              {/* Content Card */}
              <article className="flex flex-col lg:flex-row gap-6 rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:shadow-md">
                {/* Logo Box */}
                <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-[#f8fafc] shadow-xs">
                  <ParamLogo />
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-extrabold text-gray-900">
                    Software Developer Intern
                  </h3>
                  <div className="mt-0.5 text-[13.5px] font-bold text-purple-600">
                    Param Electroinfo
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-gray-400 font-medium">
                    <MapPin className="size-3.5" />
                    <span>Nashik, Maharashtra</span>
                  </div>

                  <ul className="mt-4 space-y-2 text-[12.5px] text-gray-600 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5" />
                      <span>Working on full-stack web application development.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5" />
                      <span>Building and maintaining responsive user interfaces.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5" />
                      <span>Collaborating with the team to design and integrate new features.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5" />
                      <span>Optimizing code and fixing bugs to improve performance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5" />
                      <span>Gaining hands-on experience in real-world development workflows.</span>
                    </li>
                  </ul>
                </div>

                {/* Right Status Box */}
                <div className="w-full lg:w-64 shrink-0 rounded-2xl border border-purple-100 bg-purple-50/40 p-4 lg:border-l lg:border-purple-100/80">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700">
                    Status
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs font-bold text-gray-800">
                    <span className="size-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Currently Working</span>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="text-[11.5px] italic text-gray-400 pl-2">* Internship is ongoing.</div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: TECHNOLOGIES & TOOLS I'VE WORKED WITH */}
        {/* ========================================================================= */}
        <section className="space-y-5">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e8f8f0] text-emerald-600">
              <Code2 className="size-4.5" />
            </div>
            <h2 className="text-[15px] font-extrabold uppercase tracking-wide text-gray-900">
              TECHNOLOGIES &amp; TOOLS I&apos;VE WORKED WITH
            </h2>
          </div>

          <div className="space-y-3">
            {techPills.map((row, rowIdx) => (
              <div key={rowIdx} className="flex flex-wrap items-center gap-2.5">
                {row.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 rounded-xl border border-gray-100/90 bg-white px-3.5 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5 hover:shadow-xs hover:border-gray-200"
                  >
                    <item.icon />
                    <span className="text-[12.5px] font-bold text-gray-800">{item.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BOTTOM CALL TO ACTION BANNER */}
        {/* ========================================================================= */}
        <section className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] md:flex-row md:p-8">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="relative flex size-16 shrink-0 items-center justify-center rounded-full bg-emerald-50/80">
              <img src={rocketImg} alt="3D Rocket icon" className="size-12 object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                Every experience is a <span className="text-emerald-600">step forward.</span>
              </h2>
              <p className="mt-1 text-[13.5px] font-medium text-gray-500">
                I keep learning, building and turning ideas into impact.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={resumePdf}
              download="Daksh_Jain_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-[14px] font-bold text-gray-800 shadow-xs transition-all hover:-translate-y-0.5 hover:bg-gray-50 hover:border-gray-300"
            >
              <Download className="size-4 text-emerald-600" />
              Download Resume
            </a>
            <Link
              to="/projects"
              className="flex items-center gap-2 rounded-2xl bg-[#10b981] px-6 py-3.5 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(16,185,129,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#059669] hover:shadow-[0_12px_24px_rgba(16,185,129,0.45)] shrink-0"
            >
              Explore My Projects
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
