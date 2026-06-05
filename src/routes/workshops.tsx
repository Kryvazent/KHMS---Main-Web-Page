import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import { Calendar } from "lucide-react";

const s = findSection("workshops");

const workshops = [
  { date: "23 Mar", title: "Approach to Shortness of Breath & NIV (CPAP/BIPAP)", who: "Doctors • Simulation" },
  { date: "25 Mar", title: "Nurses' EM — Oxygen Delivery & NIV", who: "Nurses • CPD + e-cert" },
  { date: "2 Apr", title: "Registrars' Forum — Diabetic Emergencies (DKA, HHS, Hypoglycaemia)", who: "Post Graduate" },
  { date: "6 Apr", title: "Unconscious Patient & Tachy-brady Arrhythmias", who: "Doctors • Simulation" },
  { date: "8 Apr", title: "Nurses' Learning — Arrest & Peri-arrest Rhythms, ECG & Defibrillation", who: "Nurses" },
  { date: "9 Apr", title: "Registrars' Forum — Sepsis Management & 2026 Guidelines", who: "Post Graduate" },
  { date: "20 Apr", title: "EM Learning Day — Trauma update", who: "Doctors" },
  { date: "22 Apr", title: "Nurses' EM — Arrest Rhythms, ECG & Safe Defibrillation", who: "Nurses" },
  { date: "23 Apr", title: "Registrars' Forum — Acute Stroke (Ischaemic, Haemorrhagic, Mimics)", who: "Post Graduate" },
  { date: "27 Apr", title: "EM Learning Day — Toxicology & Toxidromes", who: "Doctors" },
  { date: "29 Apr", title: "Grand Ward Round at A&E", who: "All • Bedside teaching" },
  { date: "30 Apr", title: "Registrars' Forum — Special Considerations & Modifications in Resus", who: "Post Graduate" },
  { date: "4 May", title: "EM Learning Day — Cardiac Arrest in Special Circumstances (ERC 2025)", who: "Doctors" },
  { date: "11 May", title: "EM Learning Day — Trauma per ATLS 11", who: "Doctors" },
  { date: "14 May", title: "Registrars' Forum — Poly-trauma, ATLS 11 Update", who: "Post Graduate" },
  { date: "18 May", title: "EM Learning Day — Altered Level of Consciousness (AEIOU TIPS)", who: "Doctors" },
];

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Workshops & Events — EMerge Sri Lanka" },
      { name: "description", content: "EM Learning Days, Nurses' Learning, Registrars' Forum and Grand Rounds at CSTH A&E." },
      { property: "og:title", content: "Workshops & Events — EMerge Sri Lanka" },
      { property: "og:description", content: "EM Learning Days, Nurses' Learning, Registrars' Forum and Grand Rounds." },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: () => (
    <SectionPage section={s}>
      <p className="mb-8 text-muted-foreground">
        Recurring sessions at the CSTH A&E Teaching Area. Join the continuous learning WhatsApp group from any flyer to RSVP.
      </p>

      <div className="mb-10 grid gap-5 md:grid-cols-2">
        <article id="ecg" className="scroll-mt-24 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold text-[var(--color-navy)]">ECG Workshop</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Systematic 10-step ECG reading, STEMI mimics, life-threatening arrhythmias, paced rhythms and the can't-miss patterns for ED first-call.
          </p>
          <ul className="mt-3 flex flex-wrap gap-2 text-xs font-medium">
            <li className="rounded-full bg-secondary px-3 py-1">Hands-on rhythm strips</li>
            <li className="rounded-full bg-secondary px-3 py-1">STEMI / NSTEMI</li>
            <li className="rounded-full bg-secondary px-3 py-1">Brady-tachy</li>
          </ul>
        </article>
        <article id="advanced-airway" className="scroll-mt-24 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold text-[var(--color-navy)]">Advanced Airway Day</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Preparation, positioning, pre-oxygenation, RSI drug choice, video laryngoscopy, front-of-neck access and post-intubation care — full-day simulation.
          </p>
          <ul className="mt-3 flex flex-wrap gap-2 text-xs font-medium">
            <li className="rounded-full bg-secondary px-3 py-1">RSI</li>
            <li className="rounded-full bg-secondary px-3 py-1">VL & DL</li>
            <li className="rounded-full bg-secondary px-3 py-1">FONA</li>
          </ul>
        </article>
      </div>

      <h2 className="mb-4 text-xl font-bold">Upcoming calendar</h2>
      <ol className="space-y-3">
        {workshops.map((w, i) => (
          <li
            key={i}
            className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-sm"
          >
            <div className="flex h-14 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-[var(--color-crimson)] text-white">
              <Calendar className="mb-0.5 h-3.5 w-3.5 opacity-80" />
              <span className="text-xs font-bold">{w.date}</span>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-foreground">{w.title}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--color-navy)]">{w.who}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionPage>
  ),
});
