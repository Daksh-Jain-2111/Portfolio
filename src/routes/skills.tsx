import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  AppWindow,
  BarChart3,
  Binary,
  Bot,
  Brain,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Eye,
  FileCode2,
  FolderOpen,
  Globe,
  HardDrive,
  Layers,
  LayoutGrid,
  Mail,
  MessageSquareText,
  Network,
  Palette,
  Send,
  Server,
  Share2,
  Smartphone,
  Sparkles,
  Table2,
  Terminal,
  Wrench,
  LucideIcon,
  Zap,
} from "lucide-react";

import projectsHero3D from "@/assets/projects-hero-3d.jpg";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Jain Daksh Swapnil | AI & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Technologies and tools I use to build real-world solutions across AI/ML, Programming Languages, Mobile, Web, Data & DevOps.",
      },
      { property: "og:title", content: "Skills — Jain Daksh Swapnil" },
      {
        property: "og:description",
        content:
          "Technical skills across AI & ML, Flutter, Python, React, FastAPI, Data Analytics and DevOps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

type SkillCategory = "all" | "ai-ml" | "dev" | "data" | "tools";

interface SkillItem {
  name: string;
  desc: string;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  iconColor?: string;
  customIcon?: React.ComponentType<{ className?: string }>;
}

interface SkillGroup {
  id: string;
  category: SkillCategory;
  title: string;
  headerIcon: LucideIcon | React.ComponentType<{ className?: string }>;
  headerTone: string;
  skills: SkillItem[];
}

const filterCategories = [
  { id: "all" as SkillCategory, label: "All Skills", icon: LayoutGrid },
  { id: "ai-ml" as SkillCategory, label: "AI / ML", icon: Brain, iconColor: "text-purple-600" },
  { id: "dev" as SkillCategory, label: "Development", icon: Code2, iconColor: "text-blue-600" },
  {
    id: "data" as SkillCategory,
    label: "Data & Analytics",
    icon: BarChart3,
    iconColor: "text-amber-500",
  },
  {
    id: "tools" as SkillCategory,
    label: "Tools & Others",
    icon: Wrench,
    iconColor: "text-emerald-600",
  },
];

/* CUSTOM ACCENT ICONS FOR LOGOS */
function PythonIcon() {
  return (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24">
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

function DartIcon() {
  return (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24">
      <path fill="#0175C2" d="M4.1 3.5L12 11.4 19.9 3.5H4.1z" />
      <path fill="#02569B" d="M12 11.4l7.9-7.9v17L12 12.6V11.4z" />
      <path fill="#0175C2" d="M4.1 20.5L12 12.6v7.9H4.1z" />
      <path fill="#00B4AB" d="M4.1 3.5L12 11.4 4.1 19.3V3.5z" />
    </svg>
  );
}

function JsIcon() {
  return (
    <div className="flex size-5 shrink-0 items-center justify-center rounded bg-[#F7DF1E] text-[10px] font-black text-black">
      JS
    </div>
  );
}

function CppIcon() {
  return (
    <div className="flex size-5 shrink-0 items-center justify-center rounded bg-[#00599C] text-[9px] font-black text-white">
      C++
    </div>
  );
}

function FlutterIcon() {
  return (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24">
      <path fill="#47C5FB" d="M14.3 2.5L3 13.8l3.4 3.4L21 2.5h-6.7z" />
      <path fill="#47C5FB" d="M14.3 10.9L8.7 16.5l3.4 3.4 5.6-5.6-3.4-3.4z" />
      <path fill="#00569E" d="M12.1 19.9l2.2 2.2h6.7l-5.6-5.6-3.3 3.4z" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="#3DDC84">
      <path d="M17.5 8.5l1.8-3.1a.6.6 0 00-1-.6l-1.8 3.1A9 9 0 0012 7c-1.6 0-3.1.4-4.5.9L5.7 4.8a.6.6 0 00-1 .6l1.8 3.1A9.5 9.5 0 002.5 16h19a9.5 9.5 0 00-4-7.5zM7.5 13a1 1 0 110-2 1 1 0 010 2zm9 0a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
  );
}

function FirebaseIcon() {
  return (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24">
      <path fill="#FFA000" d="M4 18l3-14 4.5 7L4 18z" />
      <path fill="#F57C00" d="M14 6l-2.5 5 4.5-5 3.5 12H4l10-12z" />
      <path fill="#FFCA28" d="M19.5 18L16 6l-4.5 12h8z" />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg className="size-5 shrink-0 animate-spin-slow" viewBox="0 0 24 24" fill="none">
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

function DockerIcon() {
  return (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="#2496ED">
      <path d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm6-3h2v2h-2V5zm-3 0h2v2h-2V5zm-3 0h2v2H7V5zm14 7c-.5-.4-1.6-.5-2.4-.2-.2-.6-.6-1.2-1.2-1.6l-.6-.4-.4.6c-.6.8-.7 2-.4 2.8-.7.4-1.8.4-2.8.3H2.8C2.3 15 2.8 17 4 18.3c1.7 1.8 4.6 2.7 8.5 2.7 7.2 0 10.9-4 11-8.7v-.3l-.5.1z" />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="#F05032">
      <path d="M21.6 10.9l-8.5-8.5a1.8 1.8 0 00-2.6 0L8.7 4.2l3.3 3.3c.7-.2 1.5 0 2 .5.6.6.7 1.4.5 2.1l3.2 3.2c.7-.2 1.5 0 2.1.5.8.8.8 2.2 0 3-.8.8-2.2.8-3 0-.6-.6-.7-1.5-.5-2.1l-3-3v5.6c.3.2.6.5.7.8.8.8.8 2.2 0 3s-2.2.8-3 0a2.2 2.2 0 010-3c.3-.4.7-.6 1.2-.7V9.7c-.5-.1-.9-.3-1.2-.7-.6-.6-.7-1.4-.5-2.1L7.2 5.6 2.4 10.4a1.8 1.8 0 000 2.6l8.5 8.5c.7.7 1.9.7 2.6 0l8.1-8.1a1.8 1.8 0 000-2.5z" />
    </svg>
  );
}

function VsCodeIcon() {
  return (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="#007ACC">
      <path d="M17.5 2.1L9.2 9.8 4.5 6.2 2 7.6v8.8l2.5 1.4 4.7-3.6 8.3 7.7 4.5-2.2V4.3l-4.5-2.2zm0 4.8v10.2l-6-5.1 6-5.1z" />
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="#FCC624">
      <path d="M12 2C9.2 2 7 4.2 7 7c0 1.2.4 2.2 1 3-1.8 1.5-3 3.8-3 6.5C5 18 6 19 8 19c.8 1.2 2.3 2 4 2s3.2-.8 4-2c2 0 3-1 3-2.5 0-2.7-1.2-5-3-6.5.6-.8 1-1.8 1-3 0-2.8-2.2-5-5-5zm-2 5a1 1 0 112 0 1 1 0 01-2 0zm4 0a1 1 0 112 0 1 1 0 01-2 0z" />
    </svg>
  );
}

/* SKILL GROUPS DATA */
const skillGroups: SkillGroup[] = [
  {
    id: "ai-ml",
    category: "ai-ml",
    title: "AI & MACHINE LEARNING",
    headerIcon: Brain,
    headerTone: "bg-[#e8f8f0] text-emerald-600",
    skills: [
      {
        name: "Machine Learning",
        desc: "Building models that learn from data",
        icon: BrainCircuit,
        iconColor: "text-emerald-600",
      },
      {
        name: "Deep Learning",
        desc: "Neural networks & advanced DL models",
        icon: Cpu,
        iconColor: "text-purple-600",
      },
      {
        name: "Computer Vision",
        desc: "Image processing & vision applications",
        icon: Eye,
        iconColor: "text-sky-600",
      },
      {
        name: "Natural Language Processing",
        desc: "Text analysis, NER, chatbots & more",
        icon: MessageSquareText,
        iconColor: "text-teal-600",
      },
      {
        name: "TensorFlow",
        desc: "Model building, training & deployment",
        icon: FlameIcon,
        iconColor: "text-orange-500",
      },
      {
        name: "Scikit-learn",
        desc: "ML algorithms & data mining",
        icon: Sparkles,
        iconColor: "text-blue-500",
      },
    ],
  },
  {
    id: "programming",
    category: "dev",
    title: "PROGRAMMING LANGUAGES",
    headerIcon: Code2,
    headerTone: "bg-[#f3e8ff] text-[#9333ea]",
    skills: [
      { name: "Python", desc: "Core language for ML, backend & scripting", customIcon: PythonIcon },
      { name: "Dart", desc: "Language for Flutter development", customIcon: DartIcon },
      { name: "JavaScript", desc: "Frontend development & interactivity", customIcon: JsIcon },
      {
        name: "SQL",
        desc: "Database querying & data management",
        icon: Database,
        iconColor: "text-sky-600",
      },
      { name: "C / C++", desc: "Problem solving & system programming", customIcon: CppIcon },
    ],
  },
  {
    id: "mobile",
    category: "dev",
    title: "MOBILE DEVELOPMENT",
    headerIcon: Smartphone,
    headerTone: "bg-[#e8f8f0] text-emerald-600",
    skills: [
      { name: "Flutter", desc: "Cross-platform mobile development", customIcon: FlutterIcon },
      { name: "Android (Native)", desc: "Native Android app development", customIcon: AndroidIcon },
      {
        name: "Firebase",
        desc: "Auth, Firestore, Storage, Cloud Functions",
        customIcon: FirebaseIcon,
      },
      {
        name: "SQLite",
        desc: "Local database for mobile applications",
        icon: HardDrive,
        iconColor: "text-blue-500",
      },
      {
        name: "State Management",
        desc: "Provider, GetX, Bloc",
        icon: Layers,
        iconColor: "text-gray-600",
      },
    ],
  },
  {
    id: "web-backend",
    category: "dev",
    title: "WEB & BACKEND DEVELOPMENT",
    headerIcon: Globe,
    headerTone: "bg-[#e0f2fe] text-[#0284c7]",
    skills: [
      { name: "React.js", desc: "Building modern & responsive web apps", customIcon: ReactIcon },
      {
        name: "FastAPI",
        desc: "High-performance Python backend",
        icon: Zap,
        iconColor: "text-teal-500",
      },
      {
        name: "REST APIs",
        desc: "Designing & integrating RESTful services",
        icon: Share2,
        iconColor: "text-indigo-500",
      },
      {
        name: "HTML, CSS, Tailwind CSS",
        desc: "Structuring & styling beautiful UIs",
        icon: Palette,
        iconColor: "text-sky-500",
      },
      {
        name: "Node.js (Basics)",
        desc: "Server-side JavaScript runtime",
        icon: Server,
        iconColor: "text-emerald-600",
      },
    ],
  },
  {
    id: "data-analytics",
    category: "data",
    title: "DATA & ANALYTICS",
    headerIcon: BarChart3,
    headerTone: "bg-[#ffedd5] text-[#ea580c]",
    skills: [
      {
        name: "Pandas",
        desc: "Data manipulation & analysis",
        icon: Table2,
        iconColor: "text-indigo-600",
      },
      {
        name: "NumPy",
        desc: "Numerical computing with Python",
        icon: Binary,
        iconColor: "text-blue-600",
      },
      {
        name: "Matplotlib / Seaborn",
        desc: "Data visualization & plotting",
        icon: BarChart3,
        iconColor: "text-amber-500",
      },
      {
        name: "Data Preprocessing",
        desc: "Cleaning, transforming & preparing data",
        icon: Sparkles,
        iconColor: "text-teal-600",
      },
      {
        name: "Excel",
        desc: "Data analysis & reporting",
        icon: FileCode2,
        iconColor: "text-emerald-600",
      },
    ],
  },
  {
    id: "tools-devops",
    category: "tools",
    title: "TOOLS & DEVOPS",
    headerIcon: Wrench,
    headerTone: "bg-[#e8f8f0] text-emerald-600",
    skills: [
      { name: "Git & GitHub", desc: "Version control & collaboration", customIcon: GitIcon },
      { name: "VS Code", desc: "Code editor & productivity", customIcon: VsCodeIcon },
      { name: "Docker (Basics)", desc: "Containerization of applications", customIcon: DockerIcon },
      {
        name: "Postman",
        desc: "API testing & development",
        icon: Send,
        iconColor: "text-orange-500",
      },
      { name: "Linux (Basics)", desc: "Command line & system operations", customIcon: LinuxIcon },
    ],
  },
];

function FlameIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "size-5"} viewBox="0 0 24 24" fill="#FF6F00">
      <path d="M12 2c-.6 2.5-2.8 4.8-4.5 7-2 2.5-3.5 5.5-3.5 9 0 4.4 3.6 8 8 8s8-3.6 8-8c0-4.5-2.8-7.5-5.5-11-.6-.8-1.5-1.7-2.5-5z" />
    </svg>
  );
}

/* WHAT I CAN BUILD DATA */
const buildCapabilities = [
  {
    title: "AI Applications",
    subtitle: "Intelligent solutions using ML, DL, NLP & CV",
    icon: Bot,
    iconBg: "bg-[#e8f8f0] text-emerald-600",
  },
  {
    title: "Mobile Applications",
    subtitle: "Cross-platform mobile apps with beautiful UI/UX",
    icon: Smartphone,
    iconBg: "bg-[#f3e8ff] text-[#9333ea]",
  },
  {
    title: "Full-Stack Systems",
    subtitle: "Scalable web apps with robust backends",
    icon: AppWindow,
    iconBg: "bg-[#e0f2fe] text-[#0284c7]",
  },
  {
    title: "Data-Driven Solutions",
    subtitle: "Analytics, dashboards & insights that drive impact",
    icon: BarChart3,
    iconBg: "bg-[#ffedd5] text-[#ea580c]",
  },
];

function TargetIllustration() {
  return (
    <div className="relative flex size-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50/70 p-2">
      <div className="relative flex size-12 items-center justify-center rounded-full bg-indigo-50 border-2 border-indigo-200">
        <div className="flex size-8 items-center justify-center rounded-full bg-purple-100 border-2 border-purple-300">
          <div className="size-4 rounded-full bg-emerald-500 shadow-sm" />
        </div>
        {/* Stylized Arrow hit */}
        <div className="absolute -top-1 -right-1 size-4 rotate-45 border-t-2 border-r-2 border-indigo-600" />
      </div>
    </div>
  );
}

function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeCategory);

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
            {/* BADGE WITH GREEN BULLET */}
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-emerald-600" />
              <span className="text-[12px] font-black uppercase tracking-widest text-emerald-600">
                MY SKILLS
              </span>
            </div>

            {/* HEADING */}
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.2rem] leading-[1.12]">
              Technologies I use
              <br />
              <span className="text-emerald-600">to build real solutions</span>
            </h1>

            {/* SUBTITLE */}
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-600 sm:text-base">
              I combine creativity with the right technologies to build intelligent, scalable and
              impactful digital products.
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
                alt="3D render of laptop with code editor and floating skills icons"
                className="w-full max-w-[340px] rounded-3xl object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-transform duration-500 hover:scale-[1.03] sm:max-w-[400px]"
              />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SKILLS CARDS (3x2 GRID) */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGroups.map((group) => {
            const HeaderIcon = group.headerIcon;
            return (
              <article
                key={group.id}
                className="flex flex-col justify-between rounded-3xl border border-gray-100/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              >
                <div>
                  {/* GROUP HEADER */}
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${group.headerTone} shadow-xs`}
                    >
                      <HeaderIcon className="size-5" />
                    </div>
                    <h2 className="text-[14.5px] font-extrabold uppercase tracking-wide text-gray-900">
                      {group.title}
                    </h2>
                  </div>

                  {/* SKILLS LIST */}
                  <div className="mt-4 space-y-4">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="flex items-start gap-3">
                        {skill.customIcon ? (
                          <div className="mt-0.5 shrink-0">
                            <skill.customIcon />
                          </div>
                        ) : skill.icon ? (
                          <div className="mt-0.5 shrink-0">
                            <skill.icon
                              className={`size-5 ${skill.iconColor || "text-emerald-600"}`}
                            />
                          </div>
                        ) : null}
                        <div className="min-w-0">
                          <div className="text-[13.5px] font-bold text-gray-900 leading-snug">
                            {skill.name}
                          </div>
                          <div className="text-[12px] font-normal text-gray-500 leading-snug">
                            {skill.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* ========================================================================= */}
        {/* WHAT I CAN BUILD SECTION */}
        {/* ========================================================================= */}
        <section className="space-y-3">
          <span className="text-[12px] font-black uppercase tracking-widest text-emerald-600">
            WHAT I CAN BUILD
          </span>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {buildCapabilities.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3.5 rounded-2xl border border-gray-100/90 bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${item.iconBg} shadow-xs`}
                >
                  <item.icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[14px] font-extrabold text-gray-900 leading-snug">
                    {item.title}
                  </div>
                  <div className="text-[12px] font-medium text-gray-500 leading-tight">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CALL TO ACTION BOTTOM BANNER */}
        {/* ========================================================================= */}
        <section className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] md:flex-row md:p-8">
          <div className="flex items-center gap-4 text-center md:text-left">
            <TargetIllustration />
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl leading-snug">
                From skills to impact.
                <br />
                <span className="text-emerald-600">Turning ideas into real-world products.</span>
              </h2>
              <p className="mt-1 text-[13.5px] font-medium text-gray-500">
                I&apos;m always excited to work on innovative ideas and solve meaningful problems.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="flex items-center gap-2 rounded-2xl bg-[#10b981] px-6 py-3.5 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(16,185,129,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#059669] hover:shadow-[0_12px_24px_rgba(16,185,129,0.45)]"
            >
              <FolderOpen className="size-4" />
              View My Projects
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-3.5 text-[14px] font-bold text-gray-800 shadow-xs transition-all hover:-translate-y-0.5 hover:bg-gray-50 hover:border-gray-300"
            >
              <Mail className="size-4" />
              Contact Me
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
