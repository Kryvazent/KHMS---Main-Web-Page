import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import { Megaphone, FileHeart, Languages } from "lucide-react";

const s = findSection("patient-education");

const topics = [
  "When to come to A&E vs your GP",
  "Chest pain — what to do at home",
  "Childhood fever red flags",
  "Snakebite first aid",
  "Stroke — recognise FAST",
  "Diabetic emergencies at home",
  "Burns — first 10 minutes",
  "Medication safety at home",
];

export const Route = createFileRoute("/patient-education")({
  head: () => ({
    meta: [
      { title: "Patient Education — EMerge Sri Lanka" },
      { name: "description", content: "Plain-language guides for patients and families — when to seek emergency care and what to do at home." },
      { property: "og:title", content: "Patient Education — EMerge Sri Lanka" },
      { property: "og:description", content: "Plain-language guides for patients and families." },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: () => (
    <SectionPage section={s}>
      <div className="grid gap-6 md:grid-cols-3">
        <Card icon={<Megaphone />} title="Clear, simple language" body="Written for patients and caregivers — no jargon." />
        <Card icon={<Languages />} title="Sinhala · Tamil · English" body="Trilingual versions to reach every household." />
        <Card icon={<FileHeart />} title="Printable handouts" body="One-page PDFs to give patients at discharge." />
      </div>

      <h2 className="mt-12 text-xl font-bold">Topics in the works</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {topics.map((t) => (
          <li key={t} className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground">
            {t}
          </li>
        ))}
      </ul>
    </SectionPage>
  ),
});

function Card({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-navy)] text-white">
        {icon}
      </div>
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </article>
  );
}
