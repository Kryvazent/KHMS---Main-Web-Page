import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import { Hammer, Rocket, Stethoscope, HeartPulse, Brain, Bot, MessageSquare, Activity } from "lucide-react";

const s = findSection("ai-apps");

const underDevelopment = [
  {
    icon: Stethoscope,
    title: "EMerge Triage Assistant",
    body: "An offline-first chatbot that walks nurses through SATS triage, flags red-flag vitals and suggests the correct triage colour.",
    status: "Prototype testing — CSTH A&E",
  },
  {
    icon: Brain,
    title: "Snakebite Species Identifier",
    body: "Image-based classifier for the 5 medically important Sri Lankan snakes with a built-in antivenom dosing aid.",
    status: "Dataset collection",
  },
  {
    icon: HeartPulse,
    title: "ECG Interpreter for Juniors",
    body: "Photo-in / structured-report-out tool focused on STEMI, hyperkalaemia and bradyarrhythmias for first-call doctors.",
    status: "Alpha",
  },
];

const fullyDeveloped = [
  {
    icon: Bot,
    title: "EMerge Protocol GPT",
    body: "Conversational access to every EMerge protocol — ask in plain English or Sinhala and get the algorithm step you need.",
    status: "Live",
  },
  {
    icon: Activity,
    title: "Paediatric Dose Calculator",
    body: "Weight- or age-based dosing for the 40 most-used emergency drugs, with maximum-dose safety caps.",
    status: "Live",
  },
  {
    icon: MessageSquare,
    title: "Patient Education Translator",
    body: "Generates trilingual (English / Sinhala / Tamil) discharge advice for common ED presentations.",
    status: "Live",
  },
];

export const Route = createFileRoute("/ai-apps")({
  head: () => ({
    meta: [
      { title: "AI Projects — EMerge Sri Lanka" },
      { name: "description", content: s.intro },
      { property: "og:title", content: "AI Projects — EMerge Sri Lanka" },
      { property: "og:description", content: s.intro },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: AiAppsPage,
});

type Tab = "under" | "fully";

function AiAppsPage() {
  const [tab, setTab] = useState<Tab>("under");
  const items = tab === "under" ? underDevelopment : fullyDeveloped;
  return (
    <SectionPage section={s}>
      <div className="mb-8 inline-flex rounded-full border border-border bg-secondary/50 p-1">
        <TabBtn active={tab === "under"} onClick={() => setTab("under")}>
          <Hammer className="h-4 w-4" /> Under Development
        </TabBtn>
        <TabBtn active={tab === "fully"} onClick={() => setTab("fully")}>
          <Rocket className="h-4 w-4" /> Fully Developed
        </TabBtn>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <article key={i.title} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-crimson)] text-white">
              <i.icon className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-navy)]">{i.status}</span>
            <h3 className="mt-1 text-lg font-bold text-foreground">{i.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.body}</p>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}

function TabBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
        active
          ? "bg-[var(--color-navy)] text-white shadow"
          : "text-foreground/70 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
