import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import { Radio, ShieldCheck, Clock } from "lucide-react";

const s = findSection("disaster");

const methane = [
  ["M", "Major Incident", "Declared / Standby — state clearly."],
  ["E", "Exact Location", "Grid reference, full address, nearest landmark, RV point."],
  ["T", "Type of Incident", "Transport, fire, explosion, CBRNe, structural, crowd, shooter."],
  ["H", "Hazards", "Fire, fuel, electricity, secondary device, structural, weather, hostile."],
  ["A", "Access / Egress", "Best routes in & out for emergency vehicles; cordon points."],
  ["N", "Number of Casualties", "Estimated total + breakdown (P1/P2/P3/Dead)."],
  ["E", "Emergency Services", "Present and required: Police, Fire, HEMS, EMS, HART, military."],
];

const cscatt = [
  ["C", "Command & Control", "Bronze / Silver / Gold. Wear tabard. Forward Control Point."],
  ["S", "Safety", "1-2-3: Self → Scene → Survivors. PPE. Dynamic risk assessment."],
  ["C", "Communication", "Send & repeat METHANE. JESIP principles. Log decisions."],
  ["A", "Assessment", "Scene survey + reassessment every 15 min. Anticipate surge."],
  ["T", "Triage", "Primary SIEVE (START/JumpSTART). Secondary SORT/SALT. Re-triage."],
  ["T", "Treatment", "ABC + catastrophic haemorrhage first. CCS Red→Yellow→Green."],
  ["T", "Transport", "Right patient, right place, right time. Spread the load."],
];

export const Route = createFileRoute("/disaster-management")({
  head: () => ({
    meta: [
      { title: "Disaster Management — EMerge Sri Lanka" },
      { name: "description", content: "METHANE, CSCATTT and the ED First 30 Minutes — major-incident frameworks for Sri Lanka." },
      { property: "og:title", content: "Disaster Management — EMerge Sri Lanka" },
      { property: "og:description", content: "Major-incident frameworks: METHANE, CSCATTT, ED First 30 Minutes." },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: () => (
    <SectionPage section={s}>
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel
          icon={<Radio />}
          title="METHANE"
          subtitle="First on-scene / hospital alert message"
        >
          <ul className="space-y-2">
            {methane.map(([k, t, d]) => (
              <li key={k + t} className="rounded-lg bg-secondary/50 p-3 text-sm">
                <span className="font-bold text-[var(--color-crimson)]">{k}</span>{" "}
                <span className="font-semibold">— {t}.</span>{" "}
                <span className="text-muted-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel
          icon={<ShieldCheck />}
          title="CSCATTT"
          subtitle="Command structure & medical priorities at scene"
        >
          <ul className="space-y-2">
            {cscatt.map(([k, t, d], i) => (
              <li key={i} className="rounded-lg bg-secondary/50 p-3 text-sm">
                <span className="font-bold text-[var(--color-crimson)]">{k}</span>{" "}
                <span className="font-semibold">— {t}.</span>{" "}
                <span className="text-muted-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-navy)] text-white">
            <Clock className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold">ED — First 30 Minutes</h3>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <Step time="0–5 min" title="Confirm & Declare" body="Verify METHANE. Consultant declares Major Incident. Switchboard cascades. Tabards on." />
          <Step time="5–15 min" title="Create Capacity" body="Empty resus. Zone the ED. Single entry. Open MCI cupboard. Start Master Casualty List." />
          <Step time="15–30 min" title="Receive & Distribute" body="Senior re-triage at door. Trauma teams allocated. MTP. SITREP every 15 min." />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Ref: MIMMS 4th ed · NHS England EPRR · WHO Hospital Emergency Response Checklist.
        </p>
      </div>
    </SectionPage>
  ),
});

function Panel({
  icon, title, subtitle, children,
}: {
  icon: React.ReactNode; title: string; subtitle: string; children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-crimson)] text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function Step({ time, title, body }: { time: string; title: string; body: string }) {
  return (
    <div className="rounded-xl bg-secondary/40 p-4">
      <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-crimson)]">{time}</span>
      <h4 className="mt-1 font-bold">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
