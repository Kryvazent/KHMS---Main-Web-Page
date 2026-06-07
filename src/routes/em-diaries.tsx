import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Camera, Images } from "lucide-react";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";

const s = findSection("em-diaries");

const diarySlots = [
  {
    date: "Programme Date",
    title: "Workshop Gallery",
    body: "Photos from workshops, simulation sessions and teaching days can be added here as dated albums.",
  },
  {
    date: "Programme Date",
    title: "Field Notes",
    body: "Short programme summaries, facilitator notes and learning moments can sit beside each gallery.",
  },
  {
    date: "Programme Date",
    title: "Community Moments",
    body: "Use this space for group photos, participant highlights and EMerge milestones.",
  },
];

export const Route = createFileRoute("/em-diaries")({
  head: () => ({
    meta: [
      { title: "EM Diaries - EMerge Sri Lanka" },
      { name: "description", content: s.intro },
      { property: "og:title", content: "EM Diaries - EMerge Sri Lanka" },
      { property: "og:description", content: s.intro },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: () => (
    <SectionPage section={s}>
      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-crimson)]">
              Programme Archive
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
              Dated photos and stories
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
              A dedicated diary for the programmes EMerge has delivered. The page is ready for dated
              photo albums and short programme notes.
            </p>
          </div>
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-navy)] text-white">
            <Images className="h-8 w-8" />
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {diarySlots.map((slot) => (
          <article
            key={slot.title}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="flex aspect-[4/3] items-center justify-center bg-secondary">
              <Camera className="h-12 w-12 text-muted-foreground/70" />
            </div>
            <div className="p-5">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)]/10 px-3 py-1 text-xs font-bold text-[var(--color-navy)]">
                <CalendarDays className="h-3.5 w-3.5" />
                {slot.date}
              </div>
              <h3 className="text-lg font-black">{slot.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{slot.body}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionPage>
  ),
});
