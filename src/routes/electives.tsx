import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import { Globe2, Plane, Users } from "lucide-react";

const s = findSection("electives");

const opps = [
  { icon: <Plane />, title: "International Electives", body: "Short-term placements with partner EDs across South Asia, Europe and Australasia." },
  { icon: <Users />, title: "Observerships at CSTH A&E", body: "Structured observerships for visiting trainees — bedside rounds, simulation and audit." },
  { icon: <Globe2 />, title: "Global Exchange", body: "Collaborative training with IFEM Academy and regional emergency-medicine societies." },
];

export const Route = createFileRoute("/electives")({
  head: () => ({
    meta: [
      { title: "Elective Opportunities — EMerge Sri Lanka" },
      { name: "description", content: "International electives, observerships at CSTH A&E and global exchange programs in emergency medicine." },
      { property: "og:title", content: "Elective Opportunities — EMerge Sri Lanka" },
      { property: "og:description", content: "International electives, observerships and global exchange." },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: () => (
    <SectionPage section={s}>
      <div className="grid gap-6 md:grid-cols-3">
        {opps.map((o) => (
          <article key={o.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-crimson)] text-white">
              {o.icon}
            </div>
            <h3 className="text-lg font-bold">{o.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{o.body}</p>
          </article>
        ))}
      </div>
    </SectionPage>
  ),
});
