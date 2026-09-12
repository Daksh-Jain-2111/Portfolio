import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  useMatches,
  rootRouteId,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { lazy, Suspense, useCallback, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/site/nav";
import { SiteFooter } from "../components/site/footer";
import { PageTransition } from "../components/site/PageTransition";

const SplashScreen = lazy(() =>
  import("../components/site/SplashScreen").then((m) => ({
    default: m.SplashScreen,
  })),
);

function AnimatedRoute() {
  const router = useRouter();
  const matches = useMatches();
  const childMatch = matches.find((m) => m.routeId !== rootRouteId) ?? matches[matches.length - 1];

  if (!childMatch) {
    return <Outlet />;
  }

  const route = router.routesById[childMatch.routeId];
  const Component = route?.options?.component ?? Outlet;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition
        key={childMatch.routeId}
        routePath={childMatch.routeId}
        Component={Component}
      />
    </AnimatePresence>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jain Daksh Swapnil — AI & Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Jain Daksh Swapnil, an AI and full stack developer building ML systems, mobile apps and web products.",
      },
      { name: "author", content: "Jain Daksh Swapnil" },
      {
        property: "og:title",
        content: "Jain Daksh Swapnil — AI & Full Stack Developer",
      },
      {
        property: "og:description",
        content: "AI, mobile and full stack projects, skills, achievements and experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon-192.png", type: "image/png", sizes: "192x192" },
      { rel: "apple-touch-icon", href: "/favicon-512.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  // Check if splash was already seen (for SSR/hydration)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const seen = sessionStorage.getItem("splash-seen");
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (seen || prefersReduced) {
        setSplashDone(true);
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Splash Screen — lazy loaded, shown once per session */}
      {!splashDone && (
        <Suspense fallback={null}>
          <SplashScreen onComplete={handleSplashComplete} />
        </Suspense>
      )}

      <div
        className="flex min-h-screen flex-col bg-background"
        style={{
          opacity: splashDone ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        <SiteNav />
        <main className="flex-1 min-h-[calc(100vh-8rem)] bg-background">
          <AnimatedRoute />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
