import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import { Target, Heart, Compass } from "lucide-react";

const s = findSection("about");

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EMerge Sri Lanka" },
      { name: "description", content: "Empowering emergency medicine in Sri Lanka through resource-adapted protocols, education and frontline innovation." },
      { property: "og:title", content: "About — EMerge Sri Lanka" },
      { property: "og:description", content: "Empowering emergency medicine in Sri Lanka through resource-adapted protocols, education and frontline innovation." },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: () => (
    <SectionPage section={s}>
      <Prose>
        <p className="text-lg leading-relaxed text-foreground/90">
          EMerge is a Sri Lankan emergency medicine initiative born inside the A&E at CSTH.
          We build practical, resource-adapted teaching and protocols for the people who actually
          run the resus room — doctors, nurses, healthcare assistants and post-graduate trainees.
        </p>
      </Prose>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Pillar
          icon={<Target className="h-6 w-6" />}
          title="Educate"
          body="Bite-sized teaching, simulation days and bedside rounds tuned to real Sri Lankan EDs."
        />
        <Pillar
          icon={<Compass className="h-6 w-6" />}
          title="Elevate"
          body="Lift the floor of care — checklists, algorithms and quality improvement everyone can use."
        />
        <Pillar
          icon={<Heart className="h-6 w-6" />}
          title="Excel"
          body="Build a network of frontline innovators publishing local data and protocols."
        />
      </div>

      <h2 className="mt-16 text-2xl font-bold">Built for our reality</h2>
      <p className="mt-3 text-muted-foreground">
        Standard textbooks assume things we don't always have. Our protocols are written for the
        ED we actually work in.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-[var(--color-navy)] text-white">
            <tr>
              <th className="p-4 text-left font-semibold">Traditional guidelines</th>
              <th className="p-4 text-left font-semibold">EMerge adaptation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <Row a="Advanced imaging — MRI, CT, angiography" b="Focused POCUS — echo, lung, abdomen" />
            <Row a="Immediate specialist backup" b="Clinical diagnosis + direct phone call" />
            <Row a="Unlimited central oxygen" b="Targeted O₂ — portable tank, titrated" />
          </tbody>
        </table>
      </div>
    </SectionPage>
  ),
});

function Prose({ children }: { children: React.ReactNode }) {
  return <div className="max-w-3xl">{children}</div>;
}

function Pillar({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-crimson)] text-white">
        {icon}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function Row({ a, b }: { a: string; b: string }) {
  return (
    <tr className="bg-card">
      <td className="p-4 text-foreground/70">{a}</td>
      <td className="p-4 font-semibold text-[var(--color-navy)]">{b}</td>
    </tr>
  );
}
