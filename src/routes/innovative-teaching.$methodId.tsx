import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Hash } from "lucide-react";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import {
  findTeachingMethod,
  getTeachingMethodIndex,
  innovativeTeachingMethods,
} from "@/lib/innovativeTeaching";

const s = findSection("innovative-teaching");

export const Route = createFileRoute("/innovative-teaching/$methodId")({
  head: () => ({
    meta: [
      { title: "Innovative Teaching Method - EMerge Sri Lanka" },
      { name: "description", content: s.intro },
      { property: "og:title", content: "Innovative Teaching Method - EMerge Sri Lanka" },
      { property: "og:description", content: s.intro },
    ],
  }),
  component: TeachingMethodPage,
});

function TeachingMethodPage() {
  const { methodId } = Route.useParams();
  const method = findTeachingMethod(methodId);

  if (!method) {
    return (
      <SectionPage section={s}>
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <h2 className="text-2xl font-black">Method not found</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            This teaching method may have moved. Return to the hub to browse the complete catalogue.
          </p>
          <Link
            to="/innovative-teaching"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-bold text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to hub
          </Link>
        </div>
      </SectionPage>
    );
  }

  const index = getTeachingMethodIndex(method.id);
  const previous =
    innovativeTeachingMethods[
      (index - 1 + innovativeTeachingMethods.length) % innovativeTeachingMethods.length
    ];
  const next = innovativeTeachingMethods[(index + 1) % innovativeTeachingMethods.length];

  return (
    <SectionPage section={s}>
      <article>
        <Link
          to="/innovative-teaching"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-navy)] hover:text-[var(--color-crimson)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Innovative Teaching Hub
        </Link>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="relative aspect-[16/8] bg-secondary">
            <img
              src={method.image}
              alt={`${method.title} teaching method`}
              className="h-full w-full object-cover"
            />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-[var(--color-navy)] shadow-sm">
              <Hash className="h-3.5 w-3.5" />
              Method {method.number}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2">
              {method.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">{method.title}</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
              {method.summary}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <MethodBlock title="What it is" body={[method.what]} />
          <MethodBlock title="How it works" body={method.how} />
          <MethodBlock title="Why it works" body={[method.why]} />
        </div>

        <section className="mt-8 rounded-2xl border border-border bg-secondary/50 p-6 md:p-8">
          <h3 className="text-xl font-black">Key teaching points</h3>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {method.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-crimson)]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            to="/innovative-teaching/$methodId"
            params={{ methodId: previous.id }}
            className="group rounded-2xl border border-border bg-card p-5 hover:bg-secondary/60"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Previous
            </span>
            <span className="mt-2 flex items-center gap-2 text-sm font-black text-foreground">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {previous.title}
            </span>
          </Link>
          <Link
            to="/innovative-teaching/$methodId"
            params={{ methodId: next.id }}
            className="group rounded-2xl border border-border bg-card p-5 text-right hover:bg-secondary/60"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Next
            </span>
            <span className="mt-2 flex items-center justify-end gap-2 text-sm font-black text-foreground">
              {next.title}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </article>
    </SectionPage>
  );
}

function MethodBlock({ title, body }: { title: string; body: string[] }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-lg font-black">{title}</h3>
      <div className="mt-3 space-y-3 text-sm leading-6 text-muted-foreground">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
