import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Calendar,
  CheckCircle2,
  FolderOpen,
  GraduationCap,
  Landmark,
  MapPin,
  Medal,
  School,
  Settings,
  Sparkles,
  Star,
  Target,
  Trophy,
  UserCheck,
} from "lucide-react";

import heroEducation from "@/assets/hero-education.jpg";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Jain Daksh Swapnil | AI & Full-Stack Developer" },
      {
        name: "description",
        content:
          "My academic journey: B.Tech in AI & ML (Walchand College of Engineering), Diploma in Computer Engineering (Diploma Topper 95.35%), and SSC (91%).",
      },
      { property: "og:title", content: "Education — Jain Daksh Swapnil" },
      {
        property: "og:description",
        content:
          "Academic journey from foundational schooling to engineering with focus on AI & Computer Engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducationPage,
});

/* CUSTOM GRAPHICS */
function CampusIllustration() {
  return (
    <svg className="w-32 h-20 opacity-85" viewBox="0 0 140 90" fill="none">
      {/* Soft background clouds & trees */}
      <circle cx="20" cy="65" r="14" fill="#E9D5FF" />
      <circle cx="120" cy="65" r="14" fill="#E9D5FF" />
      <circle cx="35" cy="70" r="10" fill="#DDD6FE" />
      <circle cx="105" cy="70" r="10" fill="#DDD6FE" />
      {/* Central University Building */}
      <path d="M50 45L70 30L90 45V80H50V45Z" fill="#C4B5FD" />
      <path d="M70 30L60 22L70 14L80 22L70 30Z" fill="#8B5CF6" />
      {/* Left & Right Wings */}
      <rect x="25" y="55" width="25" height="25" rx="3" fill="#DDD6FE" />
      <rect x="90" y="55" width="25" height="25" rx="3" fill="#DDD6FE" />
      {/* Windows & Doors */}
      <rect x="63" y="62" width="14" height="18" rx="7" fill="#5B21B6" />
      <circle cx="70" cy="48" r="4" fill="#5B21B6" />
      <rect x="30" y="62" width="6" height="8" rx="2" fill="#7C3AED" />
      <rect x="40" y="62" width="6" height="8" rx="2" fill="#7C3AED" />
      <rect x="95" y="62" width="6" height="8" rx="2" fill="#7C3AED" />
      <rect x="105" y="62" width="6" height="8" rx="2" fill="#7C3AED" />
      <line x1="10" y1="80" x2="130" y2="80" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function TextbookIllustration() {
  return (
    <svg className="w-28 h-20 opacity-80" viewBox="0 0 100 70" fill="none">
      <path
        d="M50 25C40 20 20 22 10 28V58C20 52 40 50 50 55C60 50 80 52 90 58V28C80 22 60 20 50 25Z"
        fill="#E0F2FE"
        stroke="#38BDF8"
        strokeWidth="2"
      />
      <line x1="50" y1="25" x2="50" y2="55" stroke="#0284C7" strokeWidth="2" />
      <line
        x1="20"
        y1="36"
        x2="42"
        y2="33"
        stroke="#BAE6FD"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="42"
        x2="42"
        y2="39"
        stroke="#BAE6FD"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="58"
        y1="33"
        x2="80"
        y2="36"
        stroke="#BAE6FD"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="58"
        y1="39"
        x2="80"
        y2="42"
        stroke="#BAE6FD"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RosetteRibbon() {
  return (
    <div className="relative flex size-24 shrink-0 items-center justify-center">
      {/* Ribbons hanging below */}
      <div
        className="absolute -bottom-3 left-6 h-10 w-4 -rotate-12 bg-gradient-to-b from-amber-500 to-amber-700 shadow-sm"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)" }}
      />
      <div
        className="absolute -bottom-3 right-6 h-10 w-4 rotate-12 bg-gradient-to-b from-amber-500 to-amber-700 shadow-sm"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)" }}
      />
      {/* Outer Rosette Circle */}
      <div className="relative flex size-20 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-amber-500 p-1 shadow-md border-2 border-amber-300">
        <div className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 border border-amber-300/60 shadow-inner">
          <Star className="size-9 fill-amber-200 text-amber-100 drop-shadow-md" />
        </div>
      </div>
    </div>
  );
}

const stats = [
  {
    icon: GraduationCap,
    value: "B.Tech",
    label: "Current Degree",
    sub: "AI & ML",
    iconBg: "bg-[#e8f8f0] text-emerald-600",
    valueColor: "text-emerald-600",
  },
  {
    icon: Medal,
    value: "95.35%",
    label: "Diploma Score",
    sub: "Computer Engineering",
    iconBg: "bg-[#f3e8ff] text-[#9333ea]",
    valueColor: "text-purple-600",
  },
  {
    icon: Trophy,
    value: "Diploma Topper",
    label: "Academic Recognition",
    sub: "Government Polytechnic Dhule",
    iconBg: "bg-[#ffedd5] text-[#ea580c]",
    valueColor: "text-amber-600 text-lg",
  },
  {
    icon: BookOpen,
    value: "91%",
    label: "SSC Score",
    sub: "10th Standard",
    iconBg: "bg-[#e0f2fe] text-[#0284c7]",
    valueColor: "text-blue-600",
  },
];

function EducationPage() {
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
        {/* HERO SECTION: TITLE + 3D EDUCATION HERO */}
        {/* ========================================================================= */}
        <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_minmax(320px,420px)]">
          <div>
            {/* EYEBROW */}
            <div className="inline-block">
              <div className="flex items-center gap-2">
                <GraduationCap className="size-4 text-emerald-600" />
                <span className="text-[12px] font-black uppercase tracking-widest text-emerald-600">
                  EDUCATION
                </span>
              </div>
              <div className="mt-1 h-1 w-8 rounded-full bg-emerald-500" />
            </div>

            {/* HEADING */}
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.2rem] leading-[1.12]">
              Building my foundation,
              <br />
              <span className="text-emerald-600">one milestone at a time.</span>
            </h1>

            {/* SUBTITLE */}
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-600 sm:text-base">
              My academic journey from foundational schooling to engineering, with a focus on
              Computer Engineering, Artificial Intelligence and Machine Learning.
            </p>
          </div>

          {/* 3D EDUCATION HERO WITH GRADUATION CAP & LAPTOP */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="group relative animate-float">
              <div
                className="absolute -inset-4 -z-10 rounded-full bg-emerald-300/20 blur-2xl transition-all duration-500 group-hover:bg-emerald-300/35"
                aria-hidden="true"
              />
              <img
                src={heroEducation}
                alt="3D render of graduation cap, stacked books, laptop with AI and plant on pedestal"
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
                <div className="text-[11px] font-medium text-gray-400">{s.label}</div>
                <div
                  className={`font-black ${s.valueColor || "text-2xl text-gray-900"} leading-tight`}
                >
                  {s.value}
                </div>
                <div className="truncate text-[11.5px] font-medium text-gray-500">{s.sub}</div>
              </div>
            </div>
          ))}
        </section>

        {/* ========================================================================= */}
        {/* SECTION 1: ACADEMIC JOURNEY (TIMELINE) */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e8f8f0] text-emerald-600">
              <BookOpen className="size-4.5" />
            </div>
            <h2 className="text-[15px] font-extrabold uppercase tracking-wide text-gray-900">
              ACADEMIC JOURNEY
            </h2>
          </div>

          <div className="relative space-y-8 pl-0 md:pl-2">
            {/* NODE 1: B.TECH */}
            <div className="relative grid grid-cols-1 gap-4 md:grid-cols-[140px_auto_1fr] md:gap-6 items-start">
              {/* Left Date Column */}
              <div className="text-left md:text-right pt-2">
                <div className="text-[13px] font-extrabold text-purple-600 leading-snug">
                  2026 – 2029
                </div>
                <span className="text-[11px] font-semibold text-purple-400">(Expected)</span>
              </div>

              {/* Center Timeline Node */}
              <div className="relative hidden md:flex h-full flex-col items-center">
                <div className="size-4 rounded-full border-2 border-purple-500 bg-white ring-4 ring-purple-50 shadow-xs z-10" />
                <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
              </div>

              {/* Content Card */}
              <article className="flex flex-col lg:flex-row gap-6 rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:shadow-md justify-between relative overflow-hidden">
                {/* Left Icon Box */}
                <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-purple-100 bg-purple-50 text-purple-600 shadow-xs">
                  <GraduationCap className="size-10 text-purple-600" />
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-extrabold text-gray-900 leading-snug">
                    B.Tech in Artificial Intelligence &amp; Machine Learning
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-[13px] font-bold text-purple-600">
                    <MapPin className="size-3.5" />
                    <span>Walchand College of Engineering, Sangli</span>
                  </div>

                  <div className="mt-4 space-y-2 text-[12.5px] text-gray-600 leading-relaxed">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-3.5 text-gray-400 shrink-0" />
                      <span>Duration: 2026 – 2029 (Expected)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCheck className="size-3.5 text-gray-400 shrink-0" />
                      <span>Direct 2nd Year Entry</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Target className="size-3.5 text-gray-400 shrink-0 mt-0.5" />
                      <span>
                        Focus: AI, Machine Learning, Data Science, Full Stack Development and
                        Problem Solving
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Badge & Artwork */}
                <div className="flex flex-col items-end justify-between shrink-0">
                  <span className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-[11px] font-extrabold text-purple-700 uppercase tracking-wider">
                    CURRENTLY PURSUING
                  </span>
                  <div className="mt-4 lg:mt-0">
                    <CampusIllustration />
                  </div>
                </div>
              </article>
            </div>

            {/* NODE 2: DIPLOMA */}
            <div className="relative grid grid-cols-1 gap-4 md:grid-cols-[140px_auto_1fr] md:gap-6 items-start">
              {/* Left Date Column */}
              <div className="text-left md:text-right pt-2">
                <div className="text-[13px] font-extrabold text-emerald-600 leading-snug">
                  2023 – 2026
                </div>
              </div>

              {/* Center Timeline Node */}
              <div className="relative hidden md:flex h-full flex-col items-center">
                <div className="size-4 rounded-full border-2 border-emerald-500 bg-white ring-4 ring-emerald-50 shadow-xs z-10" />
                <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
              </div>

              {/* Content Card */}
              <article className="flex flex-col lg:flex-row gap-6 rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:shadow-md justify-between relative overflow-hidden">
                {/* Left Icon Box */}
                <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 text-emerald-600 shadow-xs">
                  <Settings className="size-10 text-emerald-600" />
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-extrabold text-gray-900 leading-snug">
                    Diploma in Computer Engineering
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-[13px] font-bold text-emerald-600">
                    <MapPin className="size-3.5" />
                    <span>SMDR Government Polytechnic, Dhule</span>
                  </div>

                  <div className="mt-4 space-y-2 text-[12.5px] text-gray-600 leading-relaxed">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-3.5 text-gray-400 shrink-0" />
                      <span>Duration: 2023 – 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Medal className="size-3.5 text-gray-400 shrink-0" />
                      <div>
                        Academic Performance:{" "}
                        <span className="text-xl font-black text-emerald-600 ml-1">95.35%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Topper Award Card */}
                <div className="flex items-center gap-4 rounded-2xl border border-amber-100 bg-amber-50/40 p-4 lg:w-72 shrink-0">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100/70 text-amber-600">
                    <Trophy className="size-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[13px] font-black text-amber-800">
                      <span>Topper Award</span>
                    </div>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-gray-500">
                      Awarded for outstanding academic performance at Government Polytechnic, Dhule.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* NODE 3: SSC */}
            <div className="relative grid grid-cols-1 gap-4 md:grid-cols-[140px_auto_1fr] md:gap-6 items-start">
              {/* Left Date Column */}
              <div className="text-left md:text-right pt-2">
                <div className="text-[13px] font-extrabold text-blue-600 leading-snug">
                  2022 – 2023
                </div>
              </div>

              {/* Center Timeline Node */}
              <div className="relative hidden md:flex h-full flex-col items-center">
                <div className="size-4 rounded-full border-2 border-blue-500 bg-white ring-4 ring-blue-50 shadow-xs z-10" />
              </div>

              {/* Content Card */}
              <article className="flex flex-col lg:flex-row gap-6 rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:shadow-md justify-between relative overflow-hidden">
                {/* Left Icon Box */}
                <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-xs">
                  <School className="size-10 text-blue-600" />
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-extrabold text-gray-900 leading-snug">
                    Secondary School Certificate (SSC)
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-[13px] font-bold text-blue-600">
                    <MapPin className="size-3.5" />
                    <span>Dere Brothers English Medium School, Songir</span>
                  </div>

                  <div className="mt-4 space-y-2 text-[12.5px] text-gray-600 leading-relaxed">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-3.5 text-gray-400 shrink-0" />
                      <span>Year: 2022 – 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="size-3.5 text-gray-400 shrink-0" />
                      <div>
                        Score: <span className="text-xl font-black text-blue-600 ml-1">91%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Badge & Artwork */}
                <div className="flex flex-col items-end justify-between shrink-0">
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-[11px] font-extrabold text-blue-700 uppercase tracking-wider">
                    SSC
                  </span>
                  <div className="mt-4 lg:mt-0">
                    <TextbookIllustration />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: TWO COLUMNS (STEPPER + DIPLOMA TOPPER CARD) */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* COLUMN 1: FROM FOUNDATION TO AI/ML */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
              <Target className="size-4.5 text-emerald-600" />
              <h2 className="text-[14.5px] font-extrabold uppercase tracking-wide text-gray-900">
                FROM FOUNDATION TO AI/ML
              </h2>
            </div>

            <div className="rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between h-[calc(100%-2.5rem)]">
              <div className="grid grid-cols-3 gap-3 text-center relative items-start pt-4">
                {/* STEP 1: SSC */}
                <div className="flex flex-col items-center">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-xs border border-blue-100">
                    <School className="size-7" />
                  </div>
                  <h3 className="mt-3 text-sm font-extrabold text-gray-900">SSC</h3>
                  <p className="mt-1 text-[11px] text-gray-500 leading-snug">
                    Strong academic foundation and discipline
                  </p>
                </div>

                {/* STEP 2: DIPLOMA */}
                <div className="flex flex-col items-center">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-xs border border-emerald-100">
                    <Settings className="size-7" />
                  </div>
                  <h3 className="mt-3 text-sm font-extrabold text-gray-900">Diploma</h3>
                  <p className="mt-1 text-[11px] text-gray-500 leading-snug">
                    Built core engineering skills and programming fundamentals
                  </p>
                </div>

                {/* STEP 3: B.TECH */}
                <div className="flex flex-col items-center">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 shadow-xs border border-purple-100">
                    <Brain className="size-7" />
                  </div>
                  <h3 className="mt-3 text-sm font-extrabold text-gray-900">B.Tech AI &amp; ML</h3>
                  <p className="mt-1 text-[11px] text-gray-500 leading-snug">
                    Specializing in intelligent systems and real-world AI applications
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: ACADEMIC ACHIEVEMENT */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
              <Trophy className="size-4.5 text-emerald-600" />
              <h2 className="text-[14.5px] font-extrabold uppercase tracking-wide text-gray-900">
                ACADEMIC ACHIEVEMENT
              </h2>
            </div>

            <div className="rounded-3xl border border-amber-200/70 bg-gradient-to-br from-amber-50/50 via-white to-amber-50/30 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center gap-6 h-[calc(100%-2.5rem)] justify-center">
              <RosetteRibbon />
              <div className="text-center sm:text-left min-w-0">
                <h3 className="text-xl font-extrabold text-amber-950">Diploma Topper</h3>
                <div className="mt-0.5 text-xs font-bold text-gray-600">
                  SMDR Government Polytechnic, Dhule
                </div>
                <p className="mt-2 text-[12px] leading-relaxed text-gray-500">
                  Recognized for exceptional academic performance, consistency, and dedication
                  throughout the diploma.
                </p>
                <div className="mt-3 inline-block rounded-xl border border-amber-200 bg-white px-5 py-1.5 text-2xl font-black text-amber-600 shadow-xs">
                  95.35%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BOTTOM CALL TO ACTION BANNER */}
        {/* ========================================================================= */}
        <section className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] md:flex-row md:p-8">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#e8f8f0] text-emerald-600 shadow-xs">
              <GraduationCap className="size-7" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                Learning doesn&apos;t stop with a degree.
              </h2>
              <p className="mt-1 text-[13.5px] font-medium text-gray-500">
                I continue to learn, build and innovate to solve real-world problems and create
                meaningful impact through technology.
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
