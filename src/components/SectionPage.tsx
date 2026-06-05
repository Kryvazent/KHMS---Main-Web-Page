import { Link } from "@tanstack/react-router";
import { ChevronRight, Hammer } from "lucide-react";
import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import type { Section } from "@/lib/sections";

export function SectionPage({
  section,
  children,
}: {
  section: Section;
  children?: ReactNode;
}) {
  const Icon = section.icon;
  const accentBg =
    section.accent === "crimson"
      ? "bg-[var(--color-crimson)]"
      : "bg-[var(--color-navy)]";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy-deep)] to-[var(--color-navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{section.title}</span>
          </nav>
          <div className="flex items-start gap-5">
            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${accentBg} text-white shadow-lg`}>
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tight md:text-5xl">{section.title}</h1>
              <p className="mt-3 max-w-2xl text-base text-white/80 md:text-lg">{section.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-4 py-14 md:px-8">
        {children ?? <ComingSoon />}
      </main>

      <SiteFooter />
    </div>
  );
}

function ComingSoon() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-border bg-secondary/40 p-10 text-center md:p-16">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-crimson)]/10 text-[var(--color-crimson)]">
        <Hammer className="h-7 w-7" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">We're building this section</h2>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        Content will be added gradually. The framework is live — protocols, guides and resources are on their way.
      </p>
      <Link
        to="/contact"
        className="mt-6 inline-flex rounded-full bg-[var(--color-navy)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-navy-deep)]"
      >
        Contribute or request content
      </Link>
    </div>
  );
}
