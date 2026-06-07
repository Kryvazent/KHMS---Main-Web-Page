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
    audience: "Nurses and health care assistants combined training",
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
  {
    date: "17.03.2026",
    memoryTitle: "Memories from 17.03.2026",
    title: "Nurses & Health Care Assistants Combined Training - Approach to Chest Pain",
    summary:
      "A combined training session for nurses and health care assistants focused on the emergency approach to chest pain, early recognition and practical response.",
    audience: "Nurses and health care assistants combined training",
    tags: ["Approach to Chest Pain", "Nurses", "Health Care Assistants", "Emergency Assessment"],
    photos: [
      {
        src: "/em-diaries/2026-03-17-chest-pain/chest-pain-01.jpeg",
        alt: "Instructor teaching nurses during the approach to chest pain session",
        caption: "Teaching the approach to chest pain",
      },
      {
        src: "/em-diaries/2026-03-17-chest-pain/chest-pain-02.jpeg",
        alt: "Nurses seated during a chest pain teaching session",
        caption: "Classroom teaching with the nursing team",
      },
      {
        src: "/em-diaries/2026-03-17-chest-pain/chest-pain-03.jpeg",
        alt: "Combined group listening during approach to chest pain training",
        caption: "Interactive emergency assessment discussion",
      },
      {
        src: "/em-diaries/2026-03-17-chest-pain/chest-pain-04.jpeg",
        alt: "Small group gathered around a mannequin during chest pain practical training",
        caption: "Small-group practical station",
      },
      {
        src: "/em-diaries/2026-03-17-chest-pain/chest-pain-05.jpeg",
        alt: "Participants gathered around simulation beds during chest pain training",
        caption: "Simulation bay orientation",
      },
      {
        src: "/em-diaries/2026-03-17-chest-pain/chest-pain-06.jpeg",
        alt: "Participants moving a mannequin during a practical chest pain scenario",
        caption: "Scenario-based team practice",
      },
      {
        src: "/em-diaries/2026-03-17-chest-pain/chest-pain-07.jpeg",
        alt: "Projected teaching session on airway during emergency training",
        caption: "Teaching session and case discussion",
      },
      {
        src: "/em-diaries/2026-03-17-chest-pain/chest-pain-08.jpeg",
        alt: "Instructor writing on a board during the chest pain training session",
        caption: "Board teaching and clinical priorities",
      },
      {
        src: "/em-diaries/2026-03-17-chest-pain/chest-pain-09.jpeg",
        alt: "Instructor speaking to nurses about chest pain assessment",
        caption: "Focused chest pain assessment discussion",
      },
    ],
  },
  {
    date: "19.03.2026",
    memoryTitle: "Memories from 19.03.2026",
    title: "Refractory Anaphylaxis - Dual Lens Discussion for Registrars",
    summary:
      "A registrar-focused dual lens discussion exploring refractory anaphylaxis through shared expert perspectives, clinical reasoning and emergency management priorities.",
    audience: "Registrar dual lens discussion",
    tags: ["Refractory Anaphylaxis", "Dual Lens Discussion", "Registrars", "Clinical Reasoning"],
    photos: [
      {
        src: "/em-diaries/2026-03-19-refractory-anaphylaxis/refractory-anaphylaxis-01.jpeg",
        alt: "Dual lens refractory anaphylaxis discussion with registrars seated in front",
        caption: "Dual lens discussion with the registrar group",
      },
      {
        src: "/em-diaries/2026-03-19-refractory-anaphylaxis/refractory-anaphylaxis-02.jpeg",
        alt: "Registrar group discussion during refractory anaphylaxis teaching",
        caption: "Interactive registrar discussion",
      },
      {
        src: "/em-diaries/2026-03-19-refractory-anaphylaxis/refractory-anaphylaxis-03.jpeg",
        alt: "Clinician teaching refractory anaphylaxis management to registrars",
        caption: "Expert lens on emergency management",
      },
      {
        src: "/em-diaries/2026-03-19-refractory-anaphylaxis/refractory-anaphylaxis-04.jpeg",
        alt: "Clinician leading a refractory anaphylaxis teaching discussion beside a whiteboard",
        caption: "Clinical reasoning and management priorities",
      },
    ],
  },
  {
    date: "23.03.2026",
    memoryTitle: "Memories from 23.03.2026",
    title:
      "Combined Teaching and Interdisciplinary Teaching - Approach to Shortness of Breath and NIV Basics",
    summary:
      "A combined interdisciplinary teaching session focused on the approach to shortness of breath, emergency assessment and the basics of non-invasive ventilation.",
    audience: "Combined and interdisciplinary teaching",
    tags: [
      "Shortness of Breath",
      "NIV Basics",
      "Interdisciplinary Teaching",
      "Emergency Assessment",
    ],
    photos: [
      {
        src: "/em-diaries/2026-03-23-shortness-of-breath-niv/shortness-of-breath-niv-01.jpeg",
        alt: "Combined interdisciplinary group attending teaching on shortness of breath and NIV basics",
        caption: "Combined teaching on shortness of breath",
      },
      {
        src: "/em-diaries/2026-03-23-shortness-of-breath-niv/shortness-of-breath-niv-02.jpeg",
        alt: "Clinician teaching NIV basics with participants around the simulation bed",
        caption: "NIV basics around the simulation bed",
      },
      {
        src: "/em-diaries/2026-03-23-shortness-of-breath-niv/shortness-of-breath-niv-03.jpeg",
        alt: "Interdisciplinary teaching session with participants seated and listening",
        caption: "Approach to breathlessness discussion",
      },
      {
        src: "/em-diaries/2026-03-23-shortness-of-breath-niv/shortness-of-breath-niv-04.jpeg",
        alt: "Clinicians demonstrating respiratory assessment and NIV setup beside a mannequin",
        caption: "Interdisciplinary practical demonstration",
      },
      {
        src: "/em-diaries/2026-03-23-shortness-of-breath-niv/shortness-of-breath-niv-05.jpeg",
        alt: "Participants listening during combined shortness of breath teaching",
        caption: "Shared learning with the wider team",
      },
      {
        src: "/em-diaries/2026-03-23-shortness-of-breath-niv/shortness-of-breath-niv-06.jpeg",
        alt: "Team gathered near the simulation bed during NIV basics teaching",
        caption: "Respiratory care and NIV workflow",
      },
    ],
  },
  {
    date: "30.03.2026",
    memoryTitle: "Memories from 30.03.2026",
    title:
      "Interdepartmental Combined Teaching for Medical Officers and Registrars - Approach to Chest Pain",
    summary:
      "An interdepartmental combined teaching session for medical officers and registrars focused on the structured approach to chest pain, case discussion and bedside clinical reasoning.",
    audience: "Interdepartmental combined teaching for medical officers and registrars",
    tags: [
      "Approach to Chest Pain",
      "Interdepartmental Teaching",
      "Medical Officers",
      "Registrars",
    ],
    photos: [
      {
        src: "/em-diaries/2026-03-30-interdepartmental-chest-pain/interdepartmental-chest-pain-01.jpeg",
        alt: "Medical officers and registrars attending interdepartmental chest pain teaching",
        caption: "Interdepartmental chest pain teaching",
      },
      {
        src: "/em-diaries/2026-03-30-interdepartmental-chest-pain/interdepartmental-chest-pain-02.jpeg",
        alt: "Facilitator leading a bedside chest pain discussion with medical officers and registrars",
        caption: "Bedside discussion and case prompts",
      },
      {
        src: "/em-diaries/2026-03-30-interdepartmental-chest-pain/interdepartmental-chest-pain-03.jpeg",
        alt: "Small group discussing approach to chest pain around a mannequin",
        caption: "Scenario-based clinical reasoning",
      },
      {
        src: "/em-diaries/2026-03-30-interdepartmental-chest-pain/interdepartmental-chest-pain-04.jpeg",
        alt: "Interdepartmental group observing chest pain assessment practice",
        caption: "Combined team observation",
      },
      {
        src: "/em-diaries/2026-03-30-interdepartmental-chest-pain/interdepartmental-chest-pain-05.jpeg",
        alt: "Participants gathered around facilitator during chest pain teaching",
        caption: "Focused group teaching moment",
      },
      {
        src: "/em-diaries/2026-03-30-interdepartmental-chest-pain/interdepartmental-chest-pain-06.jpeg",
        alt: "Audience listening during interdepartmental chest pain practical teaching",
        caption: "Practical approach to chest pain",
      },
      {
        src: "/em-diaries/2026-03-30-interdepartmental-chest-pain/interdepartmental-chest-pain-07.jpeg",
        alt: "Medical officers and registrars watching a chest pain scenario discussion",
        caption: "Registrar and medical officer learning circle",
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
                  {entry.audience}
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
