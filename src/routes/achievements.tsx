import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  Bookmark,
  Building2,
  FileCheck2,
  GraduationCap,
  Landmark,
  Leaf,
  Medal,
  Sparkles,
  Sprout,
  Star,
  Trophy,
  Users2,
} from "lucide-react";

import trophyImg from "@/assets/trophy.png";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Jain Daksh Swapnil | AI & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Milestones that define my journey: Competition wins (State & National Level), Industry Recognition (Sumago Infotech), and Academic Excellence.",
      },
      { property: "og:title", content: "Achievements — Jain Daksh Swapnil" },
      {
        property: "og:description",
        content: "Competition wins, recognitions and academic milestones of Jain Daksh Swapnil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AchievementsPage,
});

/* CUSTOM GRAPHICS */
function LaurelWreath({
  className,
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className || "size-20"} viewBox="0 0 100 80" fill="none">
      {/* Left branch */}
      <path d="M20 70C15 50 18 30 35 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <ellipse
        cx="23"
        cy="60"
        rx="6"
        ry="3"
        transform="rotate(-30 23 60)"
        fill={color}
        opacity="0.85"
      />
      <ellipse
        cx="18"
        cy="48"
        rx="6"
        ry="3"
        transform="rotate(-40 18 48)"
        fill={color}
        opacity="0.85"
      />
      <ellipse
        cx="18"
        cy="35"
        rx="6"
        ry="3"
        transform="rotate(-50 18 35)"
        fill={color}
        opacity="0.85"
      />
      <ellipse
        cx="25"
        cy="24"
        rx="6"
        ry="3"
        transform="rotate(-60 25 24)"
        fill={color}
        opacity="0.85"
      />
      <ellipse
        cx="35"
        cy="16"
        rx="6"
        ry="3"
        transform="rotate(-70 35 16)"
        fill={color}
        opacity="0.85"
      />

      {/* Right branch */}
      <path d="M80 70C85 50 82 30 65 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <ellipse
        cx="77"
        cy="60"
        rx="6"
        ry="3"
        transform="rotate(30 77 60)"
        fill={color}
        opacity="0.85"
      />
      <ellipse
        cx="82"
        cy="48"
        rx="6"
        ry="3"
        transform="rotate(40 82 48)"
        fill={color}
        opacity="0.85"
      />
      <ellipse
        cx="82"
        cy="35"
        rx="6"
        ry="3"
        transform="rotate(50 82 35)"
        fill={color}
        opacity="0.85"
      />
      <ellipse
        cx="75"
        cy="24"
        rx="6"
        ry="3"
        transform="rotate(60 75 24)"
        fill={color}
        opacity="0.85"
      />
      <ellipse
        cx="65"
        cy="16"
        rx="6"
        ry="3"
        transform="rotate(70 65 16)"
        fill={color}
        opacity="0.85"
      />
    </svg>
  );
}

function GatewayArch({ className }: { className?: string }) {
  return (
    <svg
      className={className || "w-28 h-16"}
      viewBox="0 0 120 70"
      fill="none"
      stroke="#60A5FA"
      strokeWidth="1.5"
    >
      {/* Outer Pillars & Gateway Dome */}
      <path d="M20 68V24H35V68M85 68V24H100V68" />
      <path d="M35 24V14H85V24" />
      <path d="M40 68V36C40 28 80 28 80 36V68" />
      {/* Top minarets */}
      <path d="M22 24L27.5 12L33 24M87 24L92.5 12L98 24" />
      <path d="M52 14L60 4L68 14" />
      {/* Decorative details */}
      <line x1="20" y1="44" x2="35" y2="44" />
      <line x1="85" y1="44" x2="100" y2="44" />
      <line x1="10" y1="68" x2="110" y2="68" strokeWidth="2" />
    </svg>
  );
}

function AcademicGraphic({ isPurple = false }: { isPurple?: boolean }) {
  return (
    <div
      className={`relative flex h-28 w-36 shrink-0 flex-col items-center justify-center overflow-hidden rounded-2xl shadow-sm ${
        isPurple
          ? "bg-gradient-to-br from-[#6b21a8] via-[#581c87] to-[#3b0764]"
          : "bg-gradient-to-br from-[#059669] via-[#047857] to-[#064e3b]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.2),transparent_70%)]" />
      <LaurelWreath className="absolute size-24 opacity-40 text-white" color="#FFFFFF" />
      <GraduationCap className="relative z-10 size-10 text-white drop-shadow-md" />
      <div className="relative z-10 mt-1 flex gap-1 text-white/90">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="size-2.5 fill-white text-white" />
        ))}
      </div>
    </div>
  );
}

function AchievementsPage() {
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
        {/* HERO SECTION: TITLE + 3D TROPHY ILLUSTRATION */}
        {/* ========================================================================= */}
        <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_minmax(320px,420px)]">
          <div>
            {/* EYEBROW */}
            <div className="inline-block">
              <span className="text-[12px] font-black uppercase tracking-widest text-emerald-600">
                ACHIEVEMENTS
              </span>
              <div className="mt-1 h-1 w-8 rounded-full bg-emerald-500" />
            </div>

            {/* HEADING */}
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.2rem] leading-[1.12]">
              Milestones that
              <br />
              define my <span className="text-emerald-600">journey.</span>
            </h1>

            {/* SUBTITLE */}
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-600 sm:text-base">
              A collection of my proudest accomplishments, recognitions, and milestones that reflect
              my passion, dedication, and impact.
            </p>
          </div>

          {/* 3D TROPHY HERO WITH PEDESTAL */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="group relative animate-float">
              {/* Background ambient glow */}
              <div
                className="absolute -inset-4 -z-10 rounded-full bg-emerald-300/20 blur-2xl transition-all duration-500 group-hover:bg-emerald-300/35"
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-center">
                <img
                  src={trophyImg}
                  alt="3D Trophy with laurel wreath on white pedestal"
                  className="w-full max-w-[280px] object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-transform duration-500 hover:scale-[1.03] sm:max-w-[320px]"
                />
                {/* Plaque text box */}
                <div className="-mt-8 z-10 rounded-lg bg-gray-900 px-4 py-1.5 text-center shadow-lg border border-gray-700">
                  <span className="block text-[11px] font-black uppercase tracking-widest text-emerald-400">
                    KEEP BUILDING
                  </span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-300">
                    KEEP GROWING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 1: MAJOR ACHIEVEMENTS (COMPETITIONS) */}
        {/* ========================================================================= */}
        <section className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e8f8f0] text-emerald-600">
                <Trophy className="size-4.5" />
              </div>
              <h2 className="text-[15px] font-extrabold uppercase tracking-wide text-gray-900">
                MAJOR ACHIEVEMENTS (COMPETITIONS)
              </h2>
            </div>
            <span className="text-xs font-semibold italic text-gray-400">
              Leading. Innovating. Winning.
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* CARD 1: 1ST PRIZE STATE-LEVEL */}
            <article className="group relative flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-gray-100/90 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
              {/* Corner Flag Bookmark */}
              <div className="absolute right-5 top-0 z-20 flex h-8 w-6 items-center justify-center rounded-b-sm bg-emerald-600 text-white shadow-xs">
                <Star className="size-3 fill-white" />
              </div>

              {/* Left Graphic Artwork */}
              <div className="relative flex h-48 w-full sm:h-auto sm:w-44 shrink-0 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#064e3b] via-[#022c22] to-black p-4 text-center border border-emerald-900/40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.25),transparent_70%)]" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <LaurelWreath className="size-24 text-amber-400" color="#FBBF24" />
                    <span className="absolute font-black text-3xl text-amber-300 drop-shadow-md">
                      1
                    </span>
                  </div>
                  <div className="mt-1 flex size-12 items-center justify-center rounded-full bg-gradient-to-b from-amber-400 to-amber-600 shadow-md">
                    <Trophy className="size-6 text-emerald-950" />
                  </div>
                  <div className="mt-2 h-3 w-16 rounded bg-gray-900 border border-amber-500/40" />
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-1 flex-col justify-between pt-4 sm:pl-5 sm:pt-0">
                <div>
                  <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 border border-emerald-200/60">
                    <Star className="size-3 fill-emerald-600 text-emerald-600" />
                    TOP ACHIEVEMENT
                  </span>

                  <h3 className="mt-2.5 text-[17px] font-extrabold leading-snug text-gray-900">
                    1st Prize – State-Level Project Competition
                  </h3>

                  <div className="mt-1.5 flex items-center gap-1.5 text-[13px] font-bold text-emerald-600">
                    <Sprout className="size-4" />
                    <span>Project: VAWAR</span>
                  </div>

                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-gray-500">
                    Secured First Prize at the State-Level Project Competition for building an
                    impactful solution with real-world application and strong innovation.
                  </p>
                </div>
              </div>
            </article>

            {/* CARD 2: 3RD PRIZE NATIONAL-LEVEL */}
            <article className="group relative flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-gray-100/90 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
              {/* Corner Flag Bookmark */}
              <div className="absolute right-5 top-0 z-20 flex h-8 w-6 items-center justify-center rounded-b-sm bg-[#9333ea] text-white shadow-xs">
                <Star className="size-3 fill-white" />
              </div>

              {/* Left Graphic Artwork */}
              <div className="relative flex h-48 w-full sm:h-auto sm:w-44 shrink-0 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#3b0764] via-[#2e1065] to-black p-4 text-center border border-purple-900/40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25),transparent_70%)]" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <LaurelWreath className="size-24 text-purple-300" color="#D8B4FE" />
                    <span className="absolute font-black text-3xl text-purple-200 drop-shadow-md">
                      3
                    </span>
                  </div>
                  <div className="mt-1 flex size-12 items-center justify-center rounded-full bg-gradient-to-b from-purple-400 to-purple-600 shadow-md">
                    <Trophy className="size-6 text-purple-950" />
                  </div>
                  <div className="mt-2 h-3 w-16 rounded bg-gray-900 border border-purple-400/40" />
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-1 flex-col justify-between pt-4 sm:pl-5 sm:pt-0">
                <div>
                  <h3 className="mt-1 text-[17px] font-extrabold leading-snug text-gray-900">
                    3rd Prize – National-Level Project Competition
                  </h3>

                  <div className="mt-1.5 flex items-center gap-1.5 text-[13px] font-bold text-purple-600">
                    <Sprout className="size-4" />
                    <span>Project: VAWAR</span>
                  </div>

                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-gray-500">
                    Secured Third Prize at the National-Level Project Competition among top
                    innovative teams from across the country.
                  </p>
                </div>
              </div>
            </article>

            {/* CARD 3: RANK 231 NEC IIT BOMBAY */}
            <article className="group relative flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-gray-100/90 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
              {/* Corner Flag Bookmark */}
              <div className="absolute right-5 top-0 z-20 flex h-8 w-6 items-center justify-center rounded-b-sm bg-blue-600 text-white shadow-xs">
                <Star className="size-3 fill-white" />
              </div>

              {/* Left Graphic Artwork */}
              <div className="relative flex h-48 w-full sm:h-auto sm:w-44 shrink-0 flex-col items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#172554] via-[#1e1b4b] to-black p-4 text-center border border-blue-900/40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_70%)]" />
                <div className="relative z-10 pt-1">
                  <div className="text-2xl font-black tracking-wider text-white">NEC</div>
                  <div className="text-[12px] font-bold tracking-widest text-blue-300">E-CELL</div>
                  <div className="text-[9.5px] font-semibold tracking-wider text-blue-400">
                    IIT BOMBAY
                  </div>
                </div>
                <div className="relative z-10 pb-1">
                  <GatewayArch />
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-1 flex-col justify-between pt-4 sm:pl-5 sm:pt-0">
                <div>
                  <h3 className="mt-1 text-[17px] font-extrabold leading-snug text-gray-900">
                    Rank 231 – National Entrepreneurship Challenge
                  </h3>

                  <div className="mt-1.5 flex items-center gap-1.5 text-[13px] font-bold text-blue-600">
                    <Landmark className="size-4" />
                    <span>E-Cell, IIT Bombay</span>
                  </div>

                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-gray-500">
                    Secured All India Rank 231 out of 5,000+ teams in NEC organized by E-Cell, IIT
                    Bombay.
                  </p>
                </div>
              </div>
            </article>

            {/* CARD 4: 2ND PRIZE COLLEGE-LEVEL HACKATHON */}
            <article className="group relative flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-gray-100/90 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
              {/* Corner Flag Bookmark */}
              <div className="absolute right-5 top-0 z-20 flex h-8 w-6 items-center justify-center rounded-b-sm bg-amber-600 text-white shadow-xs">
                <Star className="size-3 fill-white" />
              </div>

              {/* Left Graphic Artwork */}
              <div className="relative flex h-48 w-full sm:h-auto sm:w-44 shrink-0 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#451a03] via-[#291305] to-black p-4 text-center border border-amber-900/40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.25),transparent_70%)]" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex size-14 items-center justify-center rounded-full bg-gradient-to-b from-amber-300 to-amber-500 shadow-md">
                    <Trophy className="size-7 text-amber-950" />
                  </div>
                  <div className="mt-3 h-3 w-16 rounded bg-gray-900 border border-amber-500/40" />
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-1 flex-col justify-between pt-4 sm:pl-5 sm:pt-0">
                <div>
                  <h3 className="mt-1 text-[17px] font-extrabold leading-snug text-gray-900">
                    2nd Prize – College-Level Hackathon
                  </h3>

                  <div className="mt-1.5 flex items-center gap-1.5 text-[13px] font-bold text-amber-600">
                    <Users2 className="size-4" />
                    <span>Team Achievement</span>
                  </div>

                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-gray-500">
                    Secured Second Prize at the College-Level Hackathon for building a
                    problem-solving solution under tight time constraints.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: INDUSTRY RECOGNITION */}
        {/* ========================================================================= */}
        <section className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e8f8f0] text-emerald-600">
                <Medal className="size-4.5" />
              </div>
              <h2 className="text-[15px] font-extrabold uppercase tracking-wide text-gray-900">
                INDUSTRY RECOGNITION
              </h2>
            </div>
            <span className="text-xs font-semibold italic text-gray-400">
              Recognized. Respected. Valued.
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* ITEM 1: PERFORMER OF THE BATCH */}
            <article className="flex gap-4 rounded-3xl border border-gray-100/90 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#e8f8f0] text-emerald-600 shadow-xs">
                <Medal className="size-7" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-extrabold text-gray-900">Performer of the Batch</h3>
                <div className="mt-0.5 flex items-center gap-1.5 text-[12.5px] font-bold text-emerald-600">
                  <Building2 className="size-3.5" />
                  <span>Sumago Infotech</span>
                </div>
                <p className="mt-2 text-[12.5px] leading-relaxed text-gray-500">
                  Recognized as the Performer of the Batch during my 3-month internship for
                  consistent dedication, quick learning, and outstanding contributions.
                </p>
              </div>
            </article>

            {/* ITEM 2: PROJECT EXCELLENCE */}
            <article className="flex gap-4 rounded-3xl border border-gray-100/90 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#e8f8f0] text-emerald-600 shadow-xs">
                <Award className="size-7" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-extrabold text-gray-900">Project Excellence</h3>
                <div className="mt-0.5 flex items-center gap-1.5 text-[12.5px] font-bold text-emerald-600">
                  <Building2 className="size-3.5" />
                  <span>Sumago Infotech</span>
                </div>
                <p className="mt-2 text-[12.5px] leading-relaxed text-gray-500">
                  Awarded for delivering exceptional quality, innovation, and impact in the VAWAR
                  project during my internship.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: ACADEMIC MILESTONE */}
        {/* ========================================================================= */}
        <section className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e8f8f0] text-emerald-600">
                <GraduationCap className="size-4.5" />
              </div>
              <h2 className="text-[15px] font-extrabold uppercase tracking-wide text-gray-900">
                ACADEMIC MILESTONE
              </h2>
            </div>
            <span className="text-xs font-semibold italic text-gray-400">
              Consistent. Focused. Driven.
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* DIPLOMA MILESTONE */}
            <article className="flex flex-col sm:flex-row gap-5 rounded-3xl border border-gray-100/90 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-0.5 hover:shadow-md">
              <AcademicGraphic isPurple={false} />
              <div className="flex flex-col justify-center min-w-0">
                <div className="text-3xl font-black text-emerald-600">95.35%</div>
                <h3 className="mt-0.5 text-[15px] font-extrabold text-gray-900 leading-snug">
                  Diploma in Computer Engineering
                </h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-[12px] font-medium text-gray-500">
                  <FileCheck2 className="size-3.5 shrink-0 text-emerald-600" />
                  Strong academic performance backed by consistent hard work and dedication.
                </p>
              </div>
            </article>

            {/* 10TH MILESTONE */}
            <article className="flex flex-col sm:flex-row gap-5 rounded-3xl border border-gray-100/90 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-0.5 hover:shadow-md">
              <AcademicGraphic isPurple={true} />
              <div className="flex flex-col justify-center min-w-0">
                <div className="text-3xl font-black text-[#9333ea]">91%</div>
                <h3 className="mt-0.5 text-[15px] font-extrabold text-gray-900 leading-snug">
                  10th (SSC)
                </h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-[12px] font-medium text-gray-500">
                  <FileCheck2 className="size-3.5 shrink-0 text-purple-600" />
                  Completed 10th Standard (SSC) with excellent performance.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BOTTOM QUOTE / SIGNATURE STRIP */}
        {/* ========================================================================= */}
        <section className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white px-6 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e8f8f0] text-emerald-600 font-serif font-black text-base">
              “
            </div>
            <p className="text-[13px] font-medium italic text-gray-700 leading-relaxed">
              Success is not just about winning, but the{" "}
              <span className="font-bold text-emerald-600">impact</span> you create and the people
              you <span className="font-bold text-emerald-600">inspire.</span>
            </p>
          </div>

          <div className="font-serif italic text-lg text-gray-800 font-semibold tracking-wide shrink-0">
            — Daksh Jain
          </div>
        </section>
      </div>
    </div>
  );
}
