import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  BrainCircuit,
  Briefcase,
  Code2,
  Download,
  Globe,
  Grid2X2,
  LayoutGrid,
  Mail,
  Smartphone,
  Star,
  Trophy,
  Users2,
  Wrench,
} from "lucide-react";

import projectsHero3D from "@/assets/projects-hero-3d.jpg";
import ctaLightbulb3D from "@/assets/cta-lightbulb-3d.jpg";
import vawarImg from "@/assets/proj-vawar.jpg";
import expenseImg from "@/assets/proj-expense.jpg";
import glacierImg from "@/assets/proj-glacier.jpg";
import focusImg from "@/assets/proj-focussense.jpg";
import resumePdf from "@/assets/Daksh Jain.pdf";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "My Projects — Jain Daksh Swapnil | AI & Full-Stack Developer" },
      {
        name: "description",
        content:
          "A collection of real-world projects that showcase my skills in AI/ML, full-stack development and problem solving.",
      },
      { property: "og:title", content: "My Projects — Jain Daksh Swapnil" },
      {
        property: "og:description",
        content:
          "Projects including VAWAR (AI Agriculture), Expense Tracker, Glacier (IPL Match Predictor), and FocusSense.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

type CategoryType = "all" | "ai-ml" | "web" | "mobile" | "tools";

const filterCategories = [
  {
    id: "all" as CategoryType,
    label: "All Projects",
    icon: LayoutGrid,
    activeColor: "bg-emerald-600 text-white",
  },
  { id: "ai-ml" as CategoryType, label: "AI/ML", icon: Brain, iconColor: "text-purple-600" },
  { id: "web" as CategoryType, label: "Web Development", icon: Globe, iconColor: "text-blue-600" },
  {
    id: "mobile" as CategoryType,
    label: "Mobile Apps",
    icon: Smartphone,
    iconColor: "text-purple-500",
  },
  {
    id: "tools" as CategoryType,
    label: "Tools & Others",
    icon: Wrench,
    iconColor: "text-emerald-600",
  },
];

const projectsData = [
  {
    id: "vawar",
    featured: true,
    title: "VAWAR",
    subtitle: "Versatile AI for Weather, Agriculture & Resources",
    description:
      "AI-powered platform for agriculture with disease detection, weather forecasting, AR field scanning, chatbot assistant and more.",
    image: vawarImg,
    categories: ["ai-ml", "mobile"],
    tags: ["Flutter", "Python", "TensorFlow", "FastAPI"],
    btnColor: "bg-emerald-600 hover:bg-emerald-700",
    titleColor: "text-emerald-700",
  },
  {
    id: "expense-tracker",
    featured: false,
    title: "Expense Tracker",
    subtitle: "Smart Expense Management System",
    description:
      "Expense tracking application with ML-based analytics, future expense prediction and interactive dashboards.",
    image: expenseImg,
    categories: ["mobile", "ai-ml", "web"],
    tags: ["Flutter", "Python", "ML", "SQLite"],
    btnColor: "bg-[#7c3aed] hover:bg-[#6d28d9]",
    titleColor: "text-[#7c3aed]",
  },
  {
    id: "glacier",
    featured: false,
    title: "Glacier",
    subtitle: "IPL Analytics & Match Predictor",
    description:
      "IPL analytics platform with match prediction, player insights, team analysis and advanced statistics.",
    image: glacierImg,
    categories: ["ai-ml", "web", "tools"],
    tags: ["Python", "ML", "Flask", "Pandas"],
    btnColor: "bg-[#0284c7] hover:bg-[#0369a1]",
    titleColor: "text-[#0284c7]",
  },
  {
    id: "focussense",
    featured: false,
    title: "FocusSense",
    subtitle: "Productivity Analytics App",
    description:
      "Productivity analytics app that helps users analyze focus patterns, build better habits and improve daily performance.",
    image: focusImg,
    categories: ["ai-ml", "mobile"],
    tags: ["Flutter", "Firebase", "ML"],
    btnColor: "bg-emerald-600 hover:bg-emerald-700",
    titleColor: "text-emerald-700",
  },
];

const highlights = [
  {
    icon: Code2,
    title: "4+",
    subtitle: "Projects Completed",
    iconBg: "bg-[#e8f8f0] text-emerald-600",
  },
  {
    icon: BrainCircuit,
    title: "AI/ML",
    subtitle: "Real-world Applications",
    iconBg: "bg-[#f3e8ff] text-[#9333ea]",
  },
  {
    icon: Trophy,
    title: "Award-Winning",
    subtitle: "VAWAR Project",
    iconBg: "bg-[#e0f2fe] text-[#0284c7]",
  },
  {
    icon: Briefcase,
    title: "End-to-End",
    subtitle: "Solutions Built",
    iconBg: "bg-[#ffedd5] text-[#ea580c]",
  },
  {
    icon: Users2,
    title: "Problem Solver",
    subtitle: "Always Learning",
    iconBg: "bg-[#e8f8f0] text-emerald-600",
  },
];

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.categories.includes(activeCategory));

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

      <div className="shell space-y-8">
        {/* ========================================================================= */}
        {/* TOP HERO SECTION: TITLE + CATEGORIES + 3D LAPTOP ILLUSTRATION */}
        {/* ========================================================================= */}
        <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_minmax(320px,420px)]">
          <div>
            {/* HEADING WITH GREEN BULLET */}
            <div className="flex items-center gap-3">
              <span className="size-3.5 rounded-full bg-emerald-600" />
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.2rem]">
                My <span className="text-emerald-600">Projects</span>
              </h1>
            </div>

            {/* SUBTITLE */}
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-600 sm:text-base">
              A collection of real-world projects that showcase my skills in AI/ML, full-stack
              development and problem solving.
            </p>

            {/* FILTER CATEGORY BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {filterCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const IconComponent = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13.5px] font-bold transition-all ${
                      isActive
                        ? "bg-emerald-600 text-white shadow-sm shadow-emerald-600/30"
                        : "border border-gray-200/80 bg-white text-gray-700 shadow-xs hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <IconComponent
                      className={`size-4 shrink-0 ${
                        isActive ? "text-white" : cat.iconColor || "text-gray-600"
                      }`}
                    />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3D LAPTOP HERO ILLUSTRATION */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="group relative animate-float">
              <div
                className="absolute -inset-4 -z-10 rounded-full bg-emerald-300/20 blur-2xl transition-all duration-500 group-hover:bg-emerald-300/35"
                aria-hidden="true"
              />
              <img
                src={projectsHero3D}
                alt="3D render of a laptop with code editor and floating tech icons"
                className="w-full max-w-[340px] rounded-3xl object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-transform duration-500 hover:scale-[1.03] sm:max-w-[400px]"
              />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PROJECTS GRID (4 CARDS) */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100/90 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
            >
              <div>
                {/* PROJECT IMAGE CONTAINER */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {p.featured && (
                    <span className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-md bg-emerald-600 px-2 py-0.5 text-[11px] font-extrabold text-white shadow-xs">
                      <Star className="size-3 fill-white" />
                      Featured
                    </span>
                  )}
                </div>

                {/* CARD BODY */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-[17px] font-extrabold tracking-tight text-gray-900">
                    {p.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] font-bold text-gray-700 leading-snug">
                    {p.subtitle}
                  </p>
                  <p className="mt-3 text-[12.5px] font-normal leading-relaxed text-gray-500">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* CARD FOOTER: TAGS + ACTION ARROW */}
              <div className="flex items-center justify-between gap-2 border-t border-gray-50 p-4 pt-3 sm:p-5 sm:pt-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-gray-100 bg-gray-50 px-2 py-0.5 text-[11px] font-semibold text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  aria-label={`View ${p.title} details`}
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full ${p.btnColor} text-white shadow-sm transition-transform group-hover:translate-x-0.5 active:scale-95`}
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* ========================================================================= */}
        {/* HIGHLIGHTS / STATS STRIP BAR */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-2 gap-4 rounded-3xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:grid-cols-3 lg:grid-cols-5">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className={`flex items-center gap-3 px-2 py-1 ${
                i > 0 ? "lg:border-l lg:border-gray-100" : ""
              }`}
            >
              <div
                className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${h.iconBg} shadow-xs`}
              >
                <h.icon className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[14px] font-extrabold leading-snug text-gray-900">
                  {h.title}
                </div>
                <div className="truncate text-[12px] font-medium text-gray-400">{h.subtitle}</div>
              </div>
            </div>
          ))}
        </section>

        {/* ========================================================================= */}
        {/* CALL TO ACTION BOTTOM BANNER */}
        {/* ========================================================================= */}
        <section className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] md:flex-row md:p-8">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="relative hidden size-16 shrink-0 sm:flex items-center justify-center rounded-2xl bg-emerald-50/70 p-2">
              <img
                src={ctaLightbulb3D}
                alt="Lightbulb illustration"
                className="size-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                Have an idea <span className="text-emerald-600">worth building?</span>
              </h2>
              <p className="mt-1 text-[13.5px] font-medium text-gray-500">
                Let&apos;s collaborate and turn your ideas into impactful digital solutions.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-2xl bg-[#10b981] px-6 py-3.5 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(16,185,129,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#059669] hover:shadow-[0_12px_24px_rgba(16,185,129,0.45)]"
            >
              <Mail className="size-4" />
              Contact Me
            </Link>
            <a
              href={resumePdf}
              download="Daksh_Jain_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-3.5 text-[14px] font-bold text-gray-800 shadow-xs transition-all hover:-translate-y-0.5 hover:bg-gray-50 hover:border-gray-300"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
