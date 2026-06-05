import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import { Users, HandHeart, School } from "lucide-react";

const s = findSection("social");

const programs = [
  { icon: <HandHeart />, title: "Community Outreach", body: "First-aid drives and awareness camps for schools, workplaces and rural communities." },
  { icon: <Users />, title: "Volunteer Programs", body: "Opportunities for medical students, nurses and lay responders to join EMerge field activities." },
  { icon: <School />, title: "School First Responder Training", body: "Teaching life-saving basics — CPR, choking, bleeding control — in Sri Lankan schools." },
];

export const Route = createFileRoute("/social-services")({
  head: () => ({
    meta: [
      { title: "Social Services — EMerge Sri Lanka" },
      { name: "description", content: "Community outreach, volunteer programs and first-responder training in Sri Lanka." },
      { property: "og:title", content: "Social Services — EMerge Sri Lanka" },
      { property: "og:description", content: "Community outreach, volunteer programs and first-responder training." },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: () => (
    <SectionPage section={s}>
      <div className="grid gap-6 md:grid-cols-3">
        {programs.map((p) => (
          <article key={p.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-crimson)] text-white">
              {p.icon}
            </div>
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-2xl bg-secondary/50 p-8 text-center">
        <h2 className="text-xl font-bold">Want to volunteer?</h2>
        <p className="mt-2 text-muted-foreground">Reach out via the Contact page to join an upcoming program.</p>
      </div>
    </SectionPage>
  ),
});
