import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import { FlaskConical, FileBarChart, Lightbulb } from "lucide-react";

const s = findSection("research");

const items = [
  { icon: <FileBarChart />, title: "ED Audits", body: "Door-to-needle times, sepsis bundle compliance, triage accuracy and length-of-stay audits." },
  { icon: <FlaskConical />, title: "Publications", body: "Case reports, observational studies and registry data from CSTH A&E and partner hospitals." },
  { icon: <Lightbulb />, title: "Innovation Projects", body: "Low-cost devices, AI-assisted triage and digital tools designed for Sri Lankan EDs." },
];

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Quality Improvement & Research — EMerge Sri Lanka" },
      { name: "description", content: "Audits, publications and innovation projects from Sri Lankan emergency departments." },
      { property: "og:title", content: "Quality Improvement & Research — EMerge Sri Lanka" },
      { property: "og:description", content: "Audits, publications and ED innovation projects." },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: () => (
    <SectionPage section={s}>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((i) => (
          <article key={i.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-navy)] text-white">
              {i.icon}
            </div>
            <h3 className="text-lg font-bold">{i.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-bold">Submit your data</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We're building a registry of Sri Lankan ED case data and outcomes. Get in touch to contribute audits, case reports or QI projects.
        </p>
      </div>
    </SectionPage>
  ),
});
