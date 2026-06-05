import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import { GraduationCap, Stethoscope, HeartPulse, Users, BookMarked } from "lucide-react";

const s = findSection("teaching");

const tracks = [
  {
    id: "post-graduate",
    icon: <BookMarked />,
    title: "Post Graduate",
    body: "Registrars' Forum — case-based teaching across diabetic emergencies, sepsis, stroke, tox, trauma and more.",
    items: ["Registrars' Forum", "Grand Rounds", "Decision Matrix"],
  },
  {
    id: "doctors",
    icon: <Stethoscope />,
    title: "Doctors",
    body: "EM Learning Days, simulation-based teaching and bedside rounds with consultant emergency physicians.",
    items: ["EM Learning Day", "Bedside teaching", "Simulation labs"],
  },
  {
    id: "nurses",
    icon: <HeartPulse />,
    title: "Nurses",
    body: "Hands-on simulation, oxygen delivery, NIV practical, ECG & safe defibrillation. CPD points + e-certificate.",
    items: ["Oxygen & NIV", "Arrest rhythms", "Defibrillation"],
  },
  {
    id: "health-care-staff",
    icon: <Users />,
    title: "Health Care Staff",
    body: "Essential skills for healthcare support workers — patient handling, basic monitoring and emergency response.",
    items: ["Basic life support", "Patient handling", "Vital signs"],
  },
  {
    id: "other-staff",
    icon: <GraduationCap />,
    title: "Other Staff",
    body: "Cross-disciplinary sessions for PAs, paramedics, technicians and allied health professionals in the ED.",
    items: ["Triage basics", "Equipment use", "Team comms"],
  },
];

export const Route = createFileRoute("/teaching")({
  head: () => ({
    meta: [
      { title: "Teaching Hub — EMerge Sri Lanka" },
      { name: "description", content: "Structured learning for doctors, nurses, HCAs and PAs — Registrars' Forum, EM Learning Days and simulation training." },
      { property: "og:title", content: "Teaching Hub — EMerge Sri Lanka" },
      { property: "og:description", content: "Structured learning for doctors, nurses, HCAs and PAs." },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: () => (
    <SectionPage section={s}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tracks.map((t) => (
          <article key={t.title} id={t.id} className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">

            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-navy)] text-white">
              {t.icon}
            </div>
            <h3 className="text-lg font-bold">{t.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t.items.map((i) => (
                <li key={i} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/70">
                  {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-deep)] p-8 text-white">
        <h2 className="text-xl font-bold">Special programs</h2>
        <p className="mt-2 text-white/80">
          <strong>ECA Training</strong> and <strong>Critical Care Seminars</strong> — flagship deep-dives
          delivered alongside the Continuous Learning WhatsApp community.
        </p>
      </div>
    </SectionPage>
  ),
});
