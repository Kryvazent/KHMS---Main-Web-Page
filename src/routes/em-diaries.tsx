import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Images, Search, UsersRound } from "lucide-react";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";

const s = findSection("em-diaries");

const diaryEntries = [
  {
    date: "11.03.2026",
    memoryTitle: "Memories from 11.03.2026",
    title: "Nurses and Health Care Assistant Combined Training - ABCDE Approach",
    summary:
      "A combined practical training session for nurses and health care assistants, focused on the ABCDE approach and hands-on emergency response.",
    tags: ["ABCDE Approach", "Nurses", "Health Care Assistants", "Hands-on Training"],
    photos: [
      {
        src: "/em-diaries/2026-03-11-abcde-approach/abcde-approach-01.jpeg",
        alt: "Hands-on ABCDE training demonstration with nurses gathered around a mannequin",
        caption: "Hands-on ABCDE approach demonstration",
      },
      {
        src: "/em-diaries/2026-03-11-abcde-approach/abcde-approach-02.jpeg",
        alt: "Participants observing airway and breathing practice during ABCDE training",
        caption: "Airway and breathing practice discussion",
      },
      {
        src: "/em-diaries/2026-03-11-abcde-approach/abcde-approach-03.jpeg",
        alt: "Nurses and health care assistants standing around the training bay",
        caption: "Combined team learning session",
      },
      {
        src: "/em-diaries/2026-03-11-abcde-approach/abcde-approach-04.jpeg",
        alt: "Instructor leading ABCDE approach teaching beside a training bed",
        caption: "Facilitated bedside teaching",
      },
    ],
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
            <h2 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">EM diaries</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
              Memories from EMerge programmes, arranged by date with photos, field notes and
              training highlights.
            </p>
          </div>
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-navy)] text-white">
            <Images className="h-8 w-8" />
          </div>
        </div>
      </section>

      <div className="mt-10 space-y-10">
        {diaryEntries.map((entry) => (
          <article key={entry.date} className="scroll-mt-24">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
              <a
                href={entry.photos[0].src}
                target="_blank"
                rel="noreferrer"
                className="group relative min-h-[28rem] overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm"
              >
                <img
                  src={entry.photos[0].src}
                  alt={entry.photos[0].alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 text-white">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                    <Search className="h-3.5 w-3.5" />
                    Open photo
                  </div>
                </div>
              </a>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)]/10 px-3 py-1 text-xs font-bold text-[var(--color-navy)]">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {entry.date}
                </div>
                <h3 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                  {entry.memoryTitle}
                </h3>
                <p className="mt-3 text-base font-bold leading-7 text-foreground">{entry.title}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
                  {entry.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-crimson)]">
                  <UsersRound className="h-4 w-4" />
                  Nurses and health care assistants combined training
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {entry.photos.slice(1).map((photo) => (
                <a
                  key={photo.src}
                  href={photo.src}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-bold text-foreground">{photo.caption}</p>
                  </div>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionPage>
  ),
});
