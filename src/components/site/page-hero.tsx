import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ParallaxSection } from "@/components/site/ParallaxSection";

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  const titleReveal = useScrollReveal({ direction: "up", delay: 0.1 });
  const descReveal = useScrollReveal({ direction: "up", delay: 0.25 });
  const childReveal = useScrollReveal({ direction: "up", delay: 0.4 });

  return (
    <section className="border-b border-border bg-surface">
      <div className="shell grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="min-w-0">
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              {eyebrow}
            </span>
          ) : null}
          <div ref={titleReveal.ref} style={titleReveal.style}>
            <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {title} {highlight ? <span className="text-primary">{highlight}</span> : null}
            </h1>
          </div>
          <div ref={descReveal.ref} style={descReveal.style}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
          {children ? (
            <div ref={childReveal.ref} style={childReveal.style}>
              <div className="mt-7">{children}</div>
            </div>
          ) : null}
        </div>

        <ParallaxSection speed={0.1} className="relative">
          <div className="absolute inset-6 -z-10 rounded-[3rem] bg-brand-soft blur-2xl" />
          <img
            src={image}
            alt={imageAlt}
            width={1200}
            height={900}
            className="mx-auto w-full max-w-lg rounded-3xl"
          />
        </ParallaxSection>
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  highlight,
  description,
  align = "center",
}: {
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
}) {
  const reveal = useScrollReveal({ direction: "up", delay: 0.05 });

  return (
    <div
      ref={reveal.ref}
      style={reveal.style}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        {title} {highlight ? <span className="text-primary">{highlight}</span> : null}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
