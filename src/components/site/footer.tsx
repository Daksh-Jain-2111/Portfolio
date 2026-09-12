import { Link } from "@tanstack/react-router";
import { Github, Instagram, Linkedin, Send, FileText } from "lucide-react";
import resumePdf from "@/assets/Daksh Jain.pdf";

function WhatsAppIcon() {
  return (
    <svg className="size-4 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.511 2 2.012 6.5 2.012 12.02c0 1.97.57 3.82 1.57 5.39L2 22.08l4.82-1.54c1.5 1 3.28 1.56 5.21 1.56 5.52 0 10.02-4.5 10.02-10.02C22.05 6.5 17.55 2 12.03 2zm5.83 14.28c-.25.69-1.44 1.34-1.99 1.4-.52.06-1.18.09-3.41-.83-2.67-1.11-4.38-3.83-4.51-4-.13-.18-1.07-1.42-1.07-2.72s.67-1.93.91-2.2c.24-.26.53-.33.71-.33.18 0 .36 0 .52.01.17.01.4.06.6.53.22.52.74 1.8.8 1.93.07.13.11.29.02.47-.08.19-.13.3-.26.46-.13.15-.28.34-.4.46-.13.13-.27.28-.12.54.16.27.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.13.43.11.59-.07.16-.18.69-.8 1.87-.08.18.09 1.15.54 1.35.64.2.1.33.15.38.23.05.08.05.47-.2 1.16z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-[#fbfdfc]">
      <div className="shell py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr_1.1fr]">
          {/* COLUMN 1: BRAND + INTRO */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-lg font-black text-white shadow-sm shadow-emerald-500/20">
                D
              </span>
              <div>
                <span className="block text-[14px] font-extrabold uppercase tracking-wide text-gray-900">
                  Jain Daksh Swapnil
                </span>
                <span className="block text-[11.5px] font-bold text-emerald-600">
                  AI • Full Stack Developer
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-gray-500">
              Turning ideas into real-world solutions with code and creativity.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="https://github.com/Daksh-Jain-2111"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex size-8.5 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-2xs transition-all hover:border-emerald-500 hover:text-emerald-600 hover:-translate-y-0.5"
              >
                <Github className="size-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/daksh-jain-a9b714352"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex size-8.5 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-2xs transition-all hover:border-emerald-500 hover:text-emerald-600 hover:-translate-y-0.5"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="https://www.instagram.com/dakshu1748"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-8.5 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-2xs transition-all hover:border-emerald-500 hover:text-emerald-600 hover:-translate-y-0.5"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://wa.me/919421757907"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex size-8.5 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-2xs transition-all hover:border-emerald-500 hover:-translate-y-0.5"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* COLUMN 2: NAVIGATION */}
          <div>
            <h3 className="text-[13px] font-extrabold uppercase tracking-wide text-gray-900">
              Navigation
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-[13px]">
              <div className="space-y-2.5">
                <div>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors hover:text-emerald-600 font-medium"
                  >
                    Home
                  </Link>
                </div>
                <div>
                  <Link
                    to="/about"
                    className="text-gray-500 transition-colors hover:text-emerald-600 font-medium"
                  >
                    About
                  </Link>
                </div>
                <div>
                  <Link
                    to="/projects"
                    className="text-gray-500 transition-colors hover:text-emerald-600 font-medium"
                  >
                    Projects
                  </Link>
                </div>
                <div>
                  <Link
                    to="/skills"
                    className="text-gray-500 transition-colors hover:text-emerald-600 font-medium"
                  >
                    Skills
                  </Link>
                </div>
                <div>
                  <Link
                    to="/achievements"
                    className="text-gray-500 transition-colors hover:text-emerald-600 font-medium"
                  >
                    Achievements
                  </Link>
                </div>
              </div>

              <div className="space-y-2.5">
                <div>
                  <Link
                    to="/certifications"
                    className="text-gray-500 transition-colors hover:text-emerald-600 font-medium"
                  >
                    Certifications
                  </Link>
                </div>
                <div>
                  <Link
                    to="/experience"
                    className="text-gray-500 transition-colors hover:text-emerald-600 font-medium"
                  >
                    Experience
                  </Link>
                </div>
                <div>
                  <Link
                    to="/education"
                    className="text-gray-500 transition-colors hover:text-emerald-600 font-medium"
                  >
                    Education
                  </Link>
                </div>
                <div>
                  <Link
                    to="/contact"
                    className="text-gray-500 transition-colors hover:text-emerald-600 font-medium"
                  >
                    Contact
                  </Link>
                </div>
                <div>
                  <a
                    href={resumePdf}
                    download="Daksh_Jain_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-emerald-600 transition-colors hover:text-emerald-700"
                  >
                    <FileText className="size-3.5" />
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3: LET'S BUILD SOMETHING GREAT */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-[13px] font-extrabold uppercase tracking-wide text-gray-900">
                Let&apos;s Build Something Great!
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-gray-500">
                I&apos;m always open to new opportunities and exciting collaborations.
              </p>
            </div>

            {/* Dashed Paper Plane Graphic */}
            <div className="mt-6 flex items-center justify-end relative">
              <svg
                className="w-48 h-12 text-emerald-400 opacity-60"
                viewBox="0 0 160 40"
                fill="none"
              >
                <path
                  d="M10 30 C 50 35, 90 10, 135 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>
              <div className="text-emerald-600 -rotate-12">
                <Send className="size-6 text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT & CREDITS */}
      <div className="border-t border-gray-100 bg-white/60 py-4">
        <div className="shell flex flex-col items-center justify-between gap-2 text-xs font-medium text-gray-400 sm:flex-row">
          <p>© 2025 Jain Daksh Swapnil. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
