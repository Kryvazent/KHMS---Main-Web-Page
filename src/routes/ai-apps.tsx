import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import {
  Hammer,
  Rocket,
  Stethoscope,
  HeartPulse,
  Brain,
  Bot,
  MessageSquare,
  Activity,
  ExternalLink,
  Smartphone,
} from "lucide-react";
import { appLinks } from "@/lib/appLinks";

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
      <AppLinksPanel />

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
          <article
            key={i.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-crimson)] text-white">
              <i.icon className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-navy)]">
              {i.status}
            </span>
            <h3 className="mt-1 text-lg font-bold text-foreground">{i.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.body}</p>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}

function AppLinksPanel() {
  return (
    <section className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-crimson)]">
            App Launch Links
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight">EMerge Apps</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Quick access buttons are ready for the external app and First Aid app once the final
            URLs are available.
          </p>
        </div>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-navy)] text-white">
          <Smartphone className="h-7 w-7" />
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <AppLinkCard link={appLinks.externalApp} />
        <AppLinkCard link={appLinks.firstAidApp} />
      </div>
    </section>
  );
}

function AppLinkCard({ link }: { link: (typeof appLinks)[keyof typeof appLinks] }) {
  return (
    <a
      href={link.href}
      target={link.isLive ? "_blank" : undefined}
      rel={link.isLive ? "noreferrer" : undefined}
      aria-disabled={!link.isLive}
      onClick={(event) => {
        if (!link.isLive) event.preventDefault();
      }}
      className={`rounded-2xl border border-border p-5 ${
        link.isLive
          ? "bg-secondary/50 hover:border-[var(--color-crimson)]"
          : "cursor-not-allowed bg-secondary/40"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-black">{link.label}</h3>
        <ExternalLink className="h-4 w-4 text-[var(--color-crimson)]" />
      </div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{link.description}</p>
      <span className="mt-4 inline-flex rounded-full bg-card px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {link.status}
      </span>
    </a>
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
