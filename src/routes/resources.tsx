import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import { FileText, Activity, Wind, Crosshair, ListChecks } from "lucide-react";

const s = findSection("resources");

const featured = [
  { icon: <Activity />, title: "Snakebite & Antivenom Protocol", body: "Sri Lanka–adapted approach to envenomation and antivenom dosing." },
  { icon: <Wind />, title: "CPAP from Basic Ward Supplies", body: "How to build a working CPAP setup when commercial NIV is unavailable." },
  { icon: <Crosshair />, title: "POCUS: eFAST in under 3 minutes", body: "Step-by-step bedside scan for trauma — probe positions and pitfalls." },
  { icon: <ListChecks />, title: "South African Triage Scale (SATS)", body: "Implementation toolkit for low-resource triage." },
];

const categories = [
  "Algorithms",
  "Clinical Protocols & Guidelines",
  "Equipment Hacks",
  "POCUS Guides",
  "Drug Dosing Sheets",
  "Paediatric Quick Reference",
];

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — EMerge Sri Lanka" },
      { name: "description", content: "Algorithms, clinical protocols, POCUS guides and downloadable resources for emergency departments." },
      { property: "og:title", content: "Resources — EMerge Sri Lanka" },
      { property: "og:description", content: "Algorithms, clinical protocols and POCUS guides for EDs." },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: () => (
    <SectionPage section={s}>
      <h2 className="text-xl font-bold">High-yield quick reference</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {featured.map((f) => (
          <article key={f.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-crimson)] text-white">
              {f.icon}
            </div>
            <div>
              <h3 className="font-bold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
            </div>
          </article>
        ))}
      </div>

      <h2 className="mt-12 text-xl font-bold">Browse by category</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((c) => (
          <div
            key={c}
            className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm font-semibold text-foreground"
          >
            <FileText className="h-4 w-4 text-[var(--color-navy)]" />
            {c}
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        All protocols are written for low-bandwidth use — open in any browser, print on a single A4 page, or save offline through the EMerge mobile app.
      </p>
    </SectionPage>
  ),
});
