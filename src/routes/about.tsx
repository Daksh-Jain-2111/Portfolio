import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Boxes,
  BrainCircuit,
  Code2,
  Download,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Medal,
  Smartphone,
  Target,
  Trophy,
} from "lucide-react";

import profileImg from "@/assets/profile-about.jpg";
import aboutLaptop3D from "@/assets/about-hero-3d.jpg";
import resumePdf from "@/assets/Daksh Jain.pdf";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jain Daksh Swapnil | AI & Full-Stack Developer" },
      {
        name: "description",
        content:
          "I'm Jain Daksh Swapnil, a Computer Engineering student combining AI/ML with full-stack development to build intelligent, impactful and user-friendly solutions.",
      },
      { property: "og:title", content: "About — Jain Daksh Swapnil" },
      {
        property: "og:description",
        content:
          "Background, focus areas, and education of Jain Daksh Swapnil, AI & Full-Stack Developer.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function GmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M2 6.5A2.5 2.5 0 0 1 4.5 4h1.25L12 9.5 18.25 4H19.5A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5H19V9.67l-7 5.5-7-5.5V20H4.5A2.5 2.5 0 0 1 2 17.5v-11z"
        fill="#EA4335"
      />
      <path
        d="M22 6.5V8.5L12 16.5 2 8.5V6.5A2.5 2.5 0 0 1 4.5 4h.75l6.75 5.5L18.75 4h.75A2.5 2.5 0 0 1 22 6.5z"
        fill="#EA4335"
      />
      <path d="M2 6.5V17.5A2.5 2.5 0 0 0 4.5 20h2V9.5L2 6.5z" fill="#4285F4" />
      <path d="M22 6.5V17.5a2.5 2.5 0 0 1-2.5 2.5h-2V9.5l4.5-3z" fill="#34A853" />
      <path d="M6.5 20h11V9.67l-5.5 4.33L6.5 9.67V20z" fill="#FBBC05" />
    </svg>
  );
}

const stats = [
  {
    icon: Trophy,
    value: "4+",
    valueClass: "text-emerald-600",
    label: "Major Projects",
    note: "End-to-end Solutions",
    iconBg: "bg-[#e8f8f0] text-emerald-600",
  },
  {
    icon: Medal,
    value: "1+",
    valueClass: "text-[#9333ea]",
    label: "Awards & Recognitions",
    note: "For Innovation",
    iconBg: "bg-[#f3e8ff] text-[#9333ea]",
  },
  {
    icon: Code2,
    value: "3+",
    valueClass: "text-[#0284c7]",
    label: "Years of Coding",
    note: "Problem Solving",
    iconBg: "bg-[#e0f2fe] text-[#0284c7]",
  },
  {
    icon: Target,
    value: "100%",
    valueClass: "text-[#ea580c]",
    label: "Passion",
    note: "For Building Impact",
    iconBg: "bg-[#ffedd5] text-[#ea580c]",
  },
];

const whatIDo = [
  {
    icon: BrainCircuit,
    label: "Artificial Intelligence / Machine Learning",
    iconColor: "text-emerald-600",
    hoverBorder: "hover:border-emerald-300 hover:bg-emerald-50/20",
  },
  {
    icon: Smartphone,
    label: "Mobile App Development",
    iconColor: "text-[#0284c7]",
    hoverBorder: "hover:border-sky-300 hover:bg-sky-50/20",
  },
  {
    icon: Globe,
    label: "Full-Stack Web Development",
    iconColor: "text-[#9333ea]",
    hoverBorder: "hover:border-purple-300 hover:bg-purple-50/20",
  },
  {
    icon: BarChart3,
    label: "Data Analysis & Visualization",
    iconColor: "text-[#ea580c]",
    hoverBorder: "hover:border-amber-300 hover:bg-amber-50/20",
  },
  {
    icon: Boxes,
    label: "AR / Computer Vision",
    iconColor: "text-teal-600",
    hoverBorder: "hover:border-teal-300 hover:bg-teal-50/20",
  },
];

const education = [
  {
    title: "Diploma in Computer Engineering",
    org: "MSBTE",
    orgClass: "text-emerald-600",
    meta: "2021 – 2024  •  95.35%",
    iconBg: "bg-[#e8f8f0] text-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    org: "Walchand College of Engineering, Sangli",
    orgClass: "text-[#9333ea]",
    meta: "2024 – 2028 (Expected)",
    iconBg: "bg-[#f3e8ff] text-[#9333ea]",
    dotColor: "bg-purple-500",
  },
];

function AboutPage() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] bg-[#fbfdfc] pb-16 pt-4 sm:pt-6">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div
        className="pointer-events-none absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 top-10 -z-10 h-[28rem] w-[28rem] rounded-full bg-teal-100/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="shell grid gap-8 lg:grid-cols-[20rem_minmax(0,1fr)] xl:grid-cols-[22rem_minmax(0,1fr)]">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: 3D STANDING PHONE MOCKUP DEVICE WITH PEDESTAL */}
        {/* ========================================================================= */}
        <aside className="flex flex-col items-center lg:sticky lg:top-24 lg:self-start">
          {/* DEVICE BODY */}
          <div className="relative z-10 w-full max-w-[340px] rounded-[2.5rem] border border-gray-200/90 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06),-8px_0_30px_rgba(16,185,129,0.18)]">
            {/* LEFT NEON GLOW BORDER ACCENT */}
            <div
              className="absolute inset-y-8 left-0 w-1.5 rounded-r-full bg-gradient-to-b from-emerald-300 via-emerald-500 to-teal-400 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
              aria-hidden="true"
            />

            {/* AVATAR */}
            <div className="relative mx-auto size-40 sm:size-44">
              <div className="size-full overflow-hidden rounded-full ring-4 ring-emerald-400/20 shadow-md">
                <img
                  src={profileImg}
                  alt="Jain Daksh Swapnil"
                  className="size-full object-cover object-[center_20%]"
                  width={512}
                  height={512}
                />
              </div>
            </div>

            {/* NAME & SUBTITLE */}
            <h1 className="mt-4 text-center text-[22px] font-extrabold tracking-tight text-gray-900">
              Jain Daksh Swapnil
            </h1>
            <p className="mt-0.5 text-center text-[13.5px] font-bold text-emerald-600">
              AI &amp; Full-Stack Developer
            </p>

            {/* QUOTE BOX */}
            <div className="mt-3.5 rounded-2xl border border-emerald-100/80 bg-[#f0fdf4] px-4 py-2.5 text-center">
              <p className="text-[12px] font-medium italic leading-snug text-gray-700">
                <span className="mr-1 font-serif text-sm font-bold text-emerald-500">“</span>
                Building intelligent solutions that create real impact.
                <span className="ml-1 font-serif text-sm font-bold text-emerald-500">”</span>
              </p>
            </div>

            {/* LOCATION & EMAIL */}
            <div className="mt-4 space-y-2.5 text-left">
              <div className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <MapPin className="size-4" />
                </div>
                <span className="text-[12.5px] font-semibold leading-tight text-gray-700">
                  Songir, Dhule,
                  <br />
                  Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Mail className="size-4" />
                </div>
                <a
                  href="mailto:dakshjainlptp1008@gmail.com"
                  className="truncate text-[12.5px] font-semibold text-gray-700 transition-colors hover:text-emerald-600"
                >
                  dakshjainlptp1008@gmail.com
                </a>
              </div>
            </div>

            {/* CONNECT WITH ME */}
            <div className="relative my-3.5 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100" />
              </div>
              <span className="relative bg-white px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Connect with me
              </span>
            </div>

            {/* SOCIAL BUTTONS */}
            <div className="flex justify-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex size-11 items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-800 shadow-[0_4px_10px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <Github className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/daksh-jain-a9b714352"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex size-11 items-center justify-center rounded-xl border border-gray-100 bg-white text-[#0a66c2] shadow-[0_4px_10px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dakshjainlptp1008@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Compose email to dakshjainlptp1008@gmail.com on Gmail"
                className="flex size-11 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <GmailIcon className="size-5" />
              </a>
            </div>

            {/* DOWNLOAD RESUME BUTTON */}
            <a
              href={resumePdf}
              download="Daksh_Jain_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#10b981] px-5 py-3.5 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(16,185,129,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#059669] hover:shadow-[0_12px_24px_rgba(16,185,129,0.45)] active:translate-y-0"
            >
              <Download className="size-4 stroke-[2.5]" />
              Download Resume
            </a>
          </div>

          {/* 3D CIRCULAR PEDESTAL STAND */}
          <div
            className="pointer-events-none relative -mt-3 flex h-8 w-64 items-center justify-center"
            aria-hidden="true"
          >
            {/* Base lower disc */}
            <div className="absolute bottom-0 h-6 w-64 rounded-[50%] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 shadow-[0_12px_24px_rgba(0,0,0,0.1)]" />
            {/* Mid bevel */}
            <div className="absolute bottom-1 h-5 w-60 rounded-[50%] bg-gradient-to-b from-white via-gray-100 to-gray-200 shadow-sm" />
            {/* Top platform surface */}
            <div className="absolute bottom-2 h-4 w-52 rounded-[50%] border border-white bg-gradient-to-b from-white to-gray-100" />
          </div>
        </aside>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: MAIN CONTENT */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          {/* TOP SECTION: ABOUT ME + 3D LAPTOP HERO */}
          <section className="relative grid items-center gap-6 lg:grid-cols-[1fr_minmax(280px,360px)]">
            <div>
              {/* TAG */}
              <div className="inline-block">
                <span className="text-[12px] font-black uppercase tracking-widest text-emerald-600">
                  ABOUT ME
                </span>
                <div className="mt-1 h-1 w-8 rounded-full bg-emerald-500" />
              </div>

              {/* HEADING */}
              <h2 className="mt-3 text-[2.2rem] font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
                Passionate about
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  Creating Impact
                </span>
              </h2>

              {/* BIO PARAGRAPHS */}
              <p className="mt-4 text-[14.5px] leading-relaxed text-gray-600 font-normal">
                I&apos;m Jain Daksh Swapnil, a Computer Engineering student passionate about
                building intelligent, impactful and user-friendly solutions. I combine AI/ML with
                full-stack development to create real-world applications that solve meaningful
                problems.
              </p>
              <p className="mt-3 text-[14.5px] leading-relaxed text-gray-600 font-normal">
                From AI-powered agricultural systems like VAWAR to ML-driven tools for productivity,
                sports analytics and finance, I enjoy turning ideas into products that make
                technology accessible and useful.
              </p>
            </div>

            {/* 3D LAPTOP & TOOLS ILLUSTRATION */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="group relative animate-float">
                <div
                  className="absolute -inset-4 -z-10 rounded-full bg-emerald-300/20 blur-2xl transition-all duration-500 group-hover:bg-emerald-300/35"
                  aria-hidden="true"
                />
                <img
                  src={aboutLaptop3D}
                  alt="3D Laptop illustration with AI brain, data charts, and code icons"
                  className="w-full max-w-[320px] rounded-3xl object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-transform duration-500 hover:scale-[1.03] sm:max-w-[360px]"
                />
              </div>
            </div>
          </section>

          {/* STATS ROW (4 CARDS) */}
          <section className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3.5 rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`flex size-11 shrink-0 items-center justify-center rounded-full ${s.iconBg} shadow-xs`}
                >
                  <s.icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className={`text-2xl font-black ${s.valueClass}`}>{s.value}</div>
                  <div className="truncate text-[13px] font-bold text-gray-900">{s.label}</div>
                  <div className="truncate text-[11.5px] font-medium text-gray-400">{s.note}</div>
                </div>
              </div>
            ))}
          </section>

          {/* BOTTOM ROW: WHAT I DO + EDUCATION AT A GLANCE */}
          <section className="grid gap-5 lg:grid-cols-2">
            {/* WHAT I DO */}
            <div className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div>
                <h3 className="text-[14px] font-extrabold uppercase tracking-wider text-gray-900">
                  WHAT I DO
                </h3>
                <div className="mb-3 mt-1 h-1 w-8 rounded-full bg-emerald-500" />
                <p className="text-[13px] leading-relaxed text-gray-600">
                  I build end-to-end solutions that integrate intelligent models with modern
                  applications. My focus areas include:
                </p>

                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {whatIDo.map((w, index) => (
                    <div
                      key={w.label}
                      className={`flex items-center gap-2.5 rounded-xl border border-gray-200/80 bg-white px-3 py-2.5 text-[12.5px] font-semibold text-gray-800 shadow-xs transition-all ${w.hoverBorder} ${
                        index === whatIDo.length - 1 ? "sm:col-span-1" : ""
                      }`}
                    >
                      <w.icon className={`size-4 shrink-0 ${w.iconColor}`} />
                      <span className="leading-snug">{w.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* EDUCATION AT A GLANCE */}
            <div className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div>
                <h3 className="text-[14px] font-extrabold uppercase tracking-wider text-gray-900">
                  EDUCATION AT A GLANCE
                </h3>
                <div className="mb-4 mt-1 h-1 w-8 rounded-full bg-emerald-500" />

                <div className="relative mt-2 space-y-6">
                  {education.map((e, index) => (
                    <div key={e.title} className="relative flex gap-4">
                      {/* Vertical line connecting steps */}
                      {index < education.length - 1 && (
                        <div
                          className="absolute left-[19px] top-10 bottom-[-24px] w-0.5 bg-gray-200 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <div className="size-2 rounded-full bg-emerald-400 ring-2 ring-white" />
                        </div>
                      )}
                      <div
                        className={`flex size-10 shrink-0 items-center justify-center rounded-full ${e.iconBg} z-10 shadow-xs`}
                      >
                        <GraduationCap className="size-5" />
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <h4 className="text-[14px] font-extrabold leading-snug text-gray-900">
                          {e.title}
                        </h4>
                        <p className={`mt-0.5 text-[12.5px] font-bold ${e.orgClass}`}>{e.org}</p>
                        <p className="mt-1 text-[12px] font-medium text-gray-500">{e.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
