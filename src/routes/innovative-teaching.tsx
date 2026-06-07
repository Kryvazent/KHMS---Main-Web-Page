import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import {
  innovativeTeachingMethods,
  teachingCategories,
  type TeachingCategoryId,
} from "@/lib/innovativeTeaching";

const s = findSection("innovative-teaching");

export const Route = createFileRoute("/innovative-teaching")({
  head: () => ({
    meta: [
      { title: "Innovative Teaching Hub - EMerge Sri Lanka" },
      { name: "description", content: s.intro },
      { property: "og:title", content: "Innovative Teaching Hub - EMerge Sri Lanka" },
      { property: "og:description", content: s.intro },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: InnovativeTeachingPage,
});

type ActiveTab = "all" | TeachingCategoryId;

function InnovativeTeachingPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("all");
  const methods =
    activeTab === "all"
      ? innovativeTeachingMethods
      : innovativeTeachingMethods.filter((method) => method.category === activeTab);

  return (
    <SectionPage section={s}>
      <section className="mb-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 md:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-crimson)]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-crimson)]">
              <Sparkles className="h-3.5 w-3.5" />
              Highlight
            </div>
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">
              Innovative methods of teaching
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
              Explore the EMerge teaching techniques as photo-led cards. Open any method to see the
              complete what, how and why.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-foreground/75">
                <Layers className="h-3.5 w-3.5" />
                {innovativeTeachingMethods.length} techniques
              </span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-foreground/75">
                Photo + method
              </span>
            </div>
          </div>
          <div className="relative min-h-64">
            <img
              src={innovativeTeachingMethods[0].image}
              alt="One Minute Viva teaching method"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {teachingCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              activeTab === category.id
                ? "bg-[var(--color-navy)] text-white shadow"
                : "border border-border bg-card text-foreground/70 hover:bg-secondary hover:text-foreground"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {methods.map((method) => (
          <Link
            key={method.id}
            to="/innovative-teaching/$methodId"
            params={{ methodId: method.id }}
            className="group flex min-h-[26rem] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src={method.image}
                alt={`${method.title} method visual`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-[var(--color-navy)] shadow-sm">
                {method.number.toString().padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-black leading-snug">{method.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                {method.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {method.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-1 text-[0.7rem] font-bold text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-crimson)]">
                Open method
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </SectionPage>
  );
}
