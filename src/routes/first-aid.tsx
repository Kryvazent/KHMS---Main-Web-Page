import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import {
  Heart,
  Flame,
  Droplets,
  AlertTriangle,
  Bandage,
  Activity,
  ExternalLink,
  Smartphone,
} from "lucide-react";
import { appLinks } from "@/lib/appLinks";

const s = findSection("first-aid");

const guides = [
  {
    icon: <Heart />,
    title: "Adult CPR",
    steps: [
      "Check response & breathing",
      "Call for help (1990)",
      "30 compressions : 2 breaths",
      "AED as soon as it arrives",
    ],
  },
  {
    icon: <Activity />,
    title: "Choking adult",
    steps: [
      "Encourage cough",
      "5 back blows",
      "5 abdominal thrusts",
      "Repeat until clear or unresponsive",
    ],
  },
  {
    icon: <Droplets />,
    title: "Severe bleeding",
    steps: [
      "Apply direct pressure",
      "Add dressings — don't remove",
      "Elevate if possible",
      "Tourniquet for limb if life-threatening",
    ],
  },
  {
    icon: <Flame />,
    title: "Burns",
    steps: [
      "Cool with running water 20 min",
      "Remove jewellery",
      "Cover with cling film",
      "Do NOT apply creams or ice",
    ],
  },
  {
    icon: <AlertTriangle />,
    title: "Snakebite",
    steps: [
      "Stay still — minimise movement",
      "Immobilise the limb",
      "Remove tight items",
      "Get to a hospital with antivenom",
    ],
  },
  {
    icon: <Bandage />,
    title: "Recovery position",
    steps: [
      "Used for unresponsive but breathing",
      "Arm out, knee bent",
      "Roll on side",
      "Tilt head to keep airway open",
    ],
  },
];

export const Route = createFileRoute("/first-aid")({
  head: () => ({
    meta: [
      { title: "First Aid — EMerge Sri Lanka" },
      {
        name: "description",
        content:
          "Quick first-aid guides — CPR, choking, bleeding, burns, snakebite and the recovery position.",
      },
      { property: "og:title", content: "First Aid — EMerge Sri Lanka" },
      { property: "og:description", content: "Quick first-aid guides for everyday emergencies." },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: () => (
    <SectionPage section={s}>
      <FirstAidAppBanner />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <article key={g.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-crimson)] text-white">
              {g.icon}
            </div>
            <h3 className="text-lg font-bold">{g.title}</h3>
            <ol className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {g.steps.map((step, i) => (
                <li key={i} className="flex gap-2">
                  <span className="font-bold text-[var(--color-navy)]">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        These guides are for awareness. For any serious emergency in Sri Lanka, call{" "}
        <strong className="text-[var(--color-crimson)]">1990 Suwa Seriya</strong>.
      </p>
    </SectionPage>
  ),
});

function FirstAidAppBanner() {
  const link = appLinks.firstAidApp;

  return (
    <section className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-crimson)]">
            First Aid App
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight">Quick app access</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            The app button is ready to connect when the final First Aid app URL is available.
          </p>
        </div>
        <a
          href={link.href}
          aria-disabled={!link.isLive}
          onClick={(event) => {
            if (!link.isLive) event.preventDefault();
          }}
          className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold ${
            link.isLive
              ? "bg-[var(--color-crimson)] text-white hover:bg-[var(--color-crimson)]/90"
              : "cursor-not-allowed bg-secondary text-muted-foreground"
          }`}
        >
          <Smartphone className="h-4 w-4" />
          {link.label}
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
