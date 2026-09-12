import { TiltCard } from "@/components/site/TiltCard";
import { ParallaxSection } from "@/components/site/ParallaxSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FloatingParticles } from "@/components/site/FloatingParticles";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  Globe,
  GraduationCap,
  Mail,
  Smartphone,
  Sparkles,
  Trophy,
} from "lucide-react";

import codeBlocks from "@/assets/code-blocks.png";
import profile from "@/assets/profile.jpg";
import expenseImg from "@/assets/proj-expense.jpg";
import focusImg from "@/assets/proj-focussense.jpg";
import glacierImg from "@/assets/proj-glacier.jpg";
import vawarImg from "@/assets/proj-vawar.jpg";
import rocket from "@/assets/rocket.png";
import trophy from "@/assets/trophy.png";
import resumePdf from "@/assets/Daksh Jain.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jain Daksh Swapnil — AI/ML Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Jain Daksh Swapnil — AI/ML engineer and full-stack developer building intelligent, practical solutions that turn ideas into real-world products.",
      },
      {
        property: "og:title",
        content: "Jain Daksh Swapnil — AI/ML Engineer & Full-Stack Developer",
      },
      {
        property: "og:description",
        content: "AI/ML and full-stack projects: VAWAR, Expense Tracker, Glacier and FocusSense.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const chips = [
  { label: "AI/ML", icon: Brain, tone: "text-primary" },
  { label: "Python", icon: Code2, tone: "text-amber" },
  { label: "Flutter", icon: Smartphone, tone: "text-sky" },
  { label: "Full Stack", icon: Globe, tone: "text-violet" },
];

const stats = [
  {
    icon: BriefcaseBusiness,
    title: "4+",
    titleClass: "text-foreground",
    sub: "Projects Completed",
    note: "End-to-end Solutions",
    bg: "bg-brand-soft text-primary",
  },
  {
    icon: Brain,
    title: "AI/ML",
    titleClass: "text-violet",
    sub: "Real-World Applications",
    note: "Solving Practical Problems",
    bg: "bg-violet-soft text-violet",
  },
  {
    icon: Trophy,
    title: "Award-Winning",
    titleClass: "text-amber",
    sub: "VAWAR Project",
    note: "Recognition & Achievements",
    bg: "bg-amber-soft text-amber",
  },
  {
    icon: GraduationCap,
    title: "B.Tech",
    titleClass: "text-sky",
    sub: "AI & Machine Learning",
    note: "WCE, Sangli (2026-2029)",
    bg: "bg-sky-soft text-sky",
  },
];

const projects = [
  {
    name: "VAWAR",
    img: vawarImg,
    featured: true,
    nameClass: "text-primary",
    desc: "AI-powered platform for agriculture with disease detection, weather forecasting, AR field scanning & more.",
    tags: ["Flutter", "Python", "TensorFlow"],
    dot: "bg-primary",
  },
  {
    name: "Expense Tracker",
    img: expenseImg,
    nameClass: "text-violet",
    desc: "Smart expense tracking with ML-based analytics and future expense prediction.",
    tags: ["Flutter", "Python", "ML"],
    dot: "bg-violet",
  },
  {
    name: "Glacier",
    img: glacierImg,
    nameClass: "text-sky",
    desc: "IPL analytics platform with match prediction, player insights and advanced statistics.",
    tags: ["Python", "ML", "Flask"],
    dot: "bg-sky",
  },
  {
    name: "FocussSense",
    img: focusImg,
    nameClass: "text-primary",
    desc: "Productivity analytics app with smart insights to improve focus and build better habits.",
    tags: ["Flutter", "Firebase", "ML"],
    dot: "bg-primary",
  },
];

const whatIBuild = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Building intelligent models that learn, predict and solve real-world problems.",
    bg: "bg-brand-soft text-primary",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Cross-platform mobile apps with beautiful UI and seamless user experience.",
    bg: "bg-violet-soft text-violet",
  },
  {
    icon: Globe,
    title: "Full-Stack Development",
    desc: "End-to-end web solutions using modern frameworks and best practices.",
    bg: "bg-sky-soft text-sky",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    desc: "Turning data into meaningful insights through analysis, visualization and ML.",
    bg: "bg-amber-soft text-amber",
  },
];

const achievementPoints = [
  {
    title: "Awarded Project",
    desc: "Recognized for innovation and impact",
  },
  {
    title: "Solving Real Problems",
    desc: "Built for farmers, by understanding their needs",
  },
  {
    title: "Tech for Good",
    desc: "Using AI to create sustainable impact",
  },
];

function HomePage() {
  const heroReveal = useScrollReveal({ direction: "up", delay: 0 });
  const heroTextReveal = useScrollReveal({ direction: "up", delay: 0.15 });
  const chipsReveal = useScrollReveal({ direction: "up", delay: 0.3 });
  const ctaReveal = useScrollReveal({ direction: "up", delay: 0.4 });
  const statsReveal = useScrollReveal({ direction: "up", delay: 0.1 });
  const projectsReveal = useScrollReveal({ direction: "up", delay: 0.1 });
  const buildReveal = useScrollReveal({ direction: "up", delay: 0.1 });
  const achieveReveal = useScrollReveal({ direction: "up", delay: 0.1 });
  const eduReveal = useScrollReveal({ direction: "up", delay: 0.1 });
  const ctaSectionReveal = useScrollReveal({ direction: "up", delay: 0.1 });

  return (
    <div className="space-y-6 pb-16 pt-6 sm:space-y-8">
      {/* HERO */}
      <section className="shell relative">
        <FloatingParticles count={20} className="rounded-3xl" />
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <div ref={heroReveal.ref} style={heroReveal.style}>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5 text-[13px] font-semibold text-primary">
                <Sparkles className="size-3.5" />
                Hello, I&apos;m 👋
              </span>

              <h1 className="mt-5 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
                Jain Daksh Swapnil
              </h1>
            </div>

            <div ref={heroTextReveal.ref} style={heroTextReveal.style}>
              <p className="mt-4 text-xl font-extrabold sm:text-2xl">
                <span className="text-primary">AI/ML Engineer</span>{" "}
                <span className="text-foreground">&amp; Full-Stack Developer</span>
              </p>

              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                Building intelligent, practical solutions that turn ideas into{" "}
                <span className="font-semibold text-primary">real-world products.</span>
              </p>
            </div>

            <div ref={chipsReveal.ref} style={chipsReveal.style}>
              <div className="mt-6 flex flex-wrap gap-3">
                {chips.map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2.5 text-[13px] font-semibold shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
                  >
                    <c.icon className={`size-4 ${c.tone}`} />
                    {c.label}
                  </span>
                ))}
              </div>
            </div>

            <div ref={ctaReveal.ref} style={ctaReveal.style}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/projects"
                  className="btn-3d inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-[15px] font-bold text-primary-foreground"
                >
                  View My Projects
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href={resumePdf}
                  download="Daksh_Jain_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-3d inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-[15px] font-bold"
                >
                  <Download className="size-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <ParallaxSection speed={0.08} className="relative">
            <TiltCard maxDeg={4}>
              <img
                src={profile}
                alt="Portrait of Jain Daksh Swapnil"
                width={1024}
                height={1024}
                className="aspect-[4/5] w-full rounded-3xl object-cover object-[center_18%] shadow-[var(--shadow-lift)] sm:aspect-[5/4] lg:aspect-[4/5]"
              />
            </TiltCard>
            <div className="mx-auto mt-4 flex w-full items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-lift)] sm:absolute sm:-bottom-6 sm:left-0 sm:mt-0 sm:w-auto sm:max-w-[19rem]">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <CheckCircle2 className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-2 text-[13px] font-bold">
                  Open to Opportunities
                  <span className="size-2 rounded-full bg-primary" />
                </span>
                <span className="block text-[12px] text-muted-foreground">
                  Let&apos;s build something impactful!
                </span>
              </span>
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* STATS */}
      <section className="shell pt-6 sm:pt-10">
        <div ref={statsReveal.ref} style={statsReveal.style}>
          <TiltCard maxDeg={3} glare={false}>
            <div className="grid gap-4 rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:grid-cols-2 sm:gap-0 lg:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.title}
                  className={`flex items-start gap-3 px-1 py-2 sm:px-5 ${
                    i > 0 ? "lg:border-l lg:border-border" : ""
                  }`}
                >
                  <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${s.bg}`}>
                    <s.icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className={`block text-lg font-extrabold ${s.titleClass}`}>
                      {s.title}
                    </span>
                    <span className="block text-[13px] font-semibold">{s.sub}</span>
                    <span className="block text-[12px] text-muted-foreground">{s.note}</span>
                  </span>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="shell">
        <div ref={projectsReveal.ref} style={projectsReveal.style}>
          <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-lg bg-brand-soft px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary">
                Featured Projects
              </span>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-[13px] font-bold transition-colors hover:bg-secondary"
              >
                View All Projects
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {projects.map((p, idx) => (
                <TiltCard key={p.name} maxDeg={5}>
                  <ProjectCard p={p} delay={idx * 0.08} />
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section className="shell">
        <div ref={buildReveal.ref} style={buildReveal.style}>
          <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:p-6">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary">
              What I Build
            </span>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {whatIBuild.map((b) => (
                <TiltCard key={b.title} maxDeg={5}>
                  <div className="card-soft flex gap-3 p-4">
                    <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${b.bg}`}>
                      <b.icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-[14px] font-extrabold">{b.title}</span>
                      <span className="mt-1 block text-[12.5px] leading-relaxed text-muted-foreground">
                        {b.desc}
                      </span>
                    </span>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ACHIEVEMENT */}
      <section className="shell">
        <div ref={achieveReveal.ref} style={achieveReveal.style}>
          <div className="grid items-center gap-6 rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:p-8 lg:grid-cols-[auto_1.2fr_1fr]">
            <img
              src={trophy}
              alt="Award trophy for the VAWAR project"
              loading="lazy"
              width={768}
              height={768}
              className="mx-auto w-40 animate-float lg:w-48"
            />
            <div>
              <span className="inline-flex items-center gap-2 rounded-lg bg-amber-soft px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-amber">
                <Trophy className="size-3.5" />
                Featured Achievement
              </span>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
                VAWAR – Versatile AI for Weather, Agriculture &amp; Resources
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                An AI-powered solution designed to empower farmers with smart tools for agriculture,
                weather forecasting, market insights and more.
              </p>
              <Link
                to="/projects"
                className="btn-3d mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-[14px] font-bold text-primary-foreground"
              >
                Explore VAWAR Project
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <ul className="space-y-4 lg:border-l lg:border-border lg:pl-8">
              {achievementPoints.map((a) => (
                <li key={a.title} className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    <span className="block text-[14px] font-bold">{a.title}</span>
                    <span className="block text-[12.5px] text-muted-foreground">{a.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION STRIP */}
      <section className="shell">
        <div ref={eduReveal.ref} style={eduReveal.style}>
          <Link to="/education" className="card-soft flex items-center gap-4 p-5 sm:p-6">
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-violet-soft text-violet">
              <GraduationCap className="size-6" />
            </span>
            <span>
              <span className="block text-[15px] font-extrabold sm:text-lg">
                B.Tech in Artificial Intelligence &amp; Machine Learning
              </span>
              <span className="block text-[13.5px] font-semibold text-violet">
                Walchand College of Engineering, Sangli
              </span>
              <span className="block text-[13px] text-muted-foreground">
                2026 - 2029 (Expected)
              </span>
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="shell">
        <div ref={ctaSectionReveal.ref} style={ctaSectionReveal.style}>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-brand-soft/60 px-5 py-8 text-center sm:px-10">
            <FloatingParticles count={15} className="rounded-3xl" />
            <div className="relative z-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
              <img
                src={rocket}
                alt=""
                loading="lazy"
                width={768}
                height={768}
                className="hidden w-28 animate-float sm:block lg:w-36"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  Have an idea worth building?
                </h2>
                <p className="mt-1 text-2xl font-extrabold text-primary sm:text-3xl">
                  Let&apos;s turn it into something real.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    to="/contact"
                    className="btn-3d inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-[15px] font-bold text-primary-foreground"
                  >
                    <Mail className="size-4" />
                    Contact Me
                  </Link>
                  <Link
                    to="/projects"
                    className="btn-3d inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-[15px] font-bold"
                  >
                    View My Projects
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
              <img
                src={codeBlocks}
                alt=""
                loading="lazy"
                width={768}
                height={768}
                className="hidden w-28 sm:block lg:w-36"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/** Extracted project card with its own scroll reveal for staggering */
function ProjectCard({ p, delay }: { p: (typeof projects)[number]; delay: number }) {
  const reveal = useScrollReveal({ direction: "up", delay });

  return (
    <article
      ref={reveal.ref}
      style={reveal.style}
      className="card-soft flex flex-col overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img
          src={p.img}
          alt={`${p.name} project preview`}
          loading="lazy"
          width={1024}
          height={640}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {p.featured ? (
          <span className="absolute left-3 top-3 rounded-lg bg-primary px-2.5 py-1 text-[11px] font-bold text-primary-foreground">
            Featured
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className={`text-base font-extrabold ${p.nameClass}`}>{p.name}</h3>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">{p.desc}</p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border px-2 py-1 text-[11px] font-semibold text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <Link
            to="/projects"
            aria-label={`Open ${p.name}`}
            className={`grid size-8 shrink-0 place-items-center rounded-full text-primary-foreground transition-transform hover:scale-110 ${p.dot}`}
          >
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
