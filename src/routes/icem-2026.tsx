import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Images, Mic2, PlaneTakeoff } from "lucide-react";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import logoMarkUrl from "@/assets/emerge-logo-mark.png";

const s = findSection("icem-2026");

const highlights = [
  {
    icon: Mic2,
    title: "Sessions",
    body: "Talks, workshops, panel appearances and EMerge teaching moments for ICEM 2026.",
  },
  {
    icon: Images,
    title: "Media Wall",
    body: "Conference photos, posters, team shots and gallery updates can be added here.",
  },
  {
    icon: CalendarDays,
    title: "Timeline",
    body: "A dated run of accepted abstracts, travel updates, programme days and post-event highlights.",
  },
];

export const Route = createFileRoute("/icem-2026")({
  head: () => ({
    meta: [
      { title: "EMerge at ICEM 2026 - EMerge Sri Lanka" },
      { name: "description", content: s.intro },
      { property: "og:title", content: "EMerge at ICEM 2026 - EMerge Sri Lanka" },
      { property: "og:description", content: s.intro },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: () => (
    <SectionPage section={s}>
      <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="grid gap-0 md:grid-cols-[1fr_18rem]">
          <div className="p-6 md:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-crimson)]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-crimson)]">
              <PlaneTakeoff className="h-3.5 w-3.5" />
              ICEM 2026
            </div>
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">
              EMerge conference hub
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
              A dedicated page for EMerge activity around ICEM 2026, including session updates,
              media and post-event highlights.
            </p>
          </div>
          <div className="flex min-h-56 items-center justify-center bg-secondary p-8">
            <img src={logoMarkUrl} alt="EMerge" className="h-40 w-40 object-contain" />
          </div>
        </div>
      </section>

      <div className="mt-8 flex snap-x gap-5 overflow-x-auto pb-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="min-w-[16rem] snap-start rounded-2xl border border-border bg-card p-6 shadow-sm sm:min-w-[20rem]"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-navy)] text-white">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-black">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>
    </SectionPage>
  ),
});
