import { Link } from "@tanstack/react-router";
import {
  Award,
  Briefcase,
  Code2,
  FolderOpen,
  GraduationCap,
  Home,
  Mail,
  Menu,
  Trophy,
  User,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

const mainLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: User },
  { to: "/projects", label: "Projects", icon: FolderOpen },
  { to: "/skills", label: "Skills", icon: Code2 },
  { to: "/achievements", label: "Achievements", icon: Trophy },
  { to: "/certifications", label: "Certifications", icon: Award },
  { to: "/experience", label: "Experience", icon: Briefcase },
  { to: "/education", label: "Education", icon: GraduationCap },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 pt-2 sm:pt-4">
      <div className="shell">
        <nav
          className={`nav-glass flex items-center justify-between rounded-2xl border border-gray-200/80 bg-white/90 px-4 py-2.5 ${scrolled ? "nav-scrolled" : ""}`}
        >
          {/* LOGO / MONOGRAM */}
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3 group"
            onClick={() => setOpen(false)}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-lg font-black text-white shadow-sm shadow-emerald-500/20 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
              D
            </span>
            <div className="min-w-0">
              <span className="block truncate text-[14px] font-extrabold uppercase tracking-wide text-gray-900">
                Jain Daksh Swapnil
              </span>
              <span className="block truncate text-[11.5px] font-semibold text-emerald-600">
                AI &amp; Full-Stack Developer
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden items-center gap-1 lg:flex">
            {mainLinks.map((l) => (
              <NavItem key={l.to} {...l} />
            ))}
          </div>

          {/* CONTACT ME BUTTON */}
          <div className="hidden items-center lg:flex">
            <Link
              to="/contact"
              className="btn-3d flex items-center gap-1.5 rounded-xl border border-emerald-200/80 bg-[#e8f8f0] px-3.5 py-1.5 text-[13px] font-bold text-emerald-600 transition-all hover:bg-emerald-100 hover:text-emerald-700"
            >
              <Mail className="size-4" />
              Contact
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 shrink-0 place-items-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm lg:hidden transition-transform active:scale-95"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {/* MOBILE DROPDOWN */}
        {open ? (
          <div
            className="mt-2 grid grid-cols-2 gap-1.5 rounded-2xl border border-gray-200 bg-white p-2.5 shadow-lg lg:hidden"
            style={{
              animation: "mobile-menu-in 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {mainLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-emerald-50 text-emerald-600 font-bold" }}
                className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-[13px] font-semibold text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
              >
                <l.icon className="size-4" />
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="col-span-2 flex items-center justify-center gap-2 rounded-xl bg-[#e8f8f0] px-3 py-2.5 text-[13px] font-bold text-emerald-600 transition-colors hover:bg-emerald-100"
            >
              <Mail className="size-4" />
              Contact Me
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function NavItem({ to, label, icon: Icon }: { to: string; label: string; icon: typeof Home }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      activeProps={{
        className:
          "relative bg-[#e8f8f0] text-emerald-600 font-bold shadow-xs after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-emerald-600 after:rounded-full",
      }}
      className="nav-link-3d flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[13px] font-semibold text-gray-600 hover:bg-emerald-50/70 hover:text-emerald-700"
    >
      <Icon className="size-4 shrink-0" />
      <span>{label}</span>
    </Link>
  );
}
