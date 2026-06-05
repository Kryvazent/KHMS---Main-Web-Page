import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import { ExternalLink } from "lucide-react";

const s = findSection("links");

const links = [
  { name: "LITFL", url: "https://litfl.com", desc: "Life in the Fast Lane — free open-access medical education." },
  { name: "CoreEM", url: "https://coreem.net", desc: "Bread & butter emergency medicine, evidence-based summaries." },
  { name: "IFEM Academy", url: "https://www.ifem.cc", desc: "International Federation for Emergency Medicine resources." },
  { name: "EMCrit", url: "https://emcrit.org", desc: "Critical care and resuscitation podcast and guides." },
  { name: "RCEMLearning", url: "https://www.rcemlearning.co.uk", desc: "Royal College of Emergency Medicine learning portal." },
  { name: "WikEM", url: "https://wikem.org", desc: "The global EM wiki — quick reference for practising clinicians." },
];

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Important Links — EMerge Sri Lanka" },
      { name: "description", content: "Curated Medical Education and emergency medicine references — LITFL, CoreEM, IFEM Academy and more." },
      { property: "og:title", content: "Important Links — EMerge Sri Lanka" },
      { property: "og:description", content: "Curated Medical Education and EM references." },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: () => (
    <SectionPage section={s}>
      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((l) => (
          <a
            key={l.name}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-[var(--color-navy)]/40 hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-navy)] text-white">
              <ExternalLink className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-foreground group-hover:text-[var(--color-navy)]">{l.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{l.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </SectionPage>
  ),
});
