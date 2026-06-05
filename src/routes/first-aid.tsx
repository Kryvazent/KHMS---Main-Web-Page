import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import { Heart, Flame, Droplets, AlertTriangle, Bandage, Activity } from "lucide-react";

const s = findSection("first-aid");

const guides = [
  { icon: <Heart />, title: "Adult CPR", steps: ["Check response & breathing", "Call for help (1990)", "30 compressions : 2 breaths", "AED as soon as it arrives"] },
  { icon: <Activity />, title: "Choking adult", steps: ["Encourage cough", "5 back blows", "5 abdominal thrusts", "Repeat until clear or unresponsive"] },
  { icon: <Droplets />, title: "Severe bleeding", steps: ["Apply direct pressure", "Add dressings — don't remove", "Elevate if possible", "Tourniquet for limb if life-threatening"] },
  { icon: <Flame />, title: "Burns", steps: ["Cool with running water 20 min", "Remove jewellery", "Cover with cling film", "Do NOT apply creams or ice"] },
  { icon: <AlertTriangle />, title: "Snakebite", steps: ["Stay still — minimise movement", "Immobilise the limb", "Remove tight items", "Get to a hospital with antivenom"] },
  { icon: <Bandage />, title: "Recovery position", steps: ["Used for unresponsive but breathing", "Arm out, knee bent", "Roll on side", "Tilt head to keep airway open"] },
];

export const Route = createFileRoute("/first-aid")({
  head: () => ({
    meta: [
      { title: "First Aid — EMerge Sri Lanka" },
      { name: "description", content: "Quick first-aid guides — CPR, choking, bleeding, burns, snakebite and the recovery position." },
      { property: "og:title", content: "First Aid — EMerge Sri Lanka" },
      { property: "og:description", content: "Quick first-aid guides for everyday emergencies." },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: () => (
    <SectionPage section={s}>
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
        These guides are for awareness. For any serious emergency in Sri Lanka, call <strong className="text-[var(--color-crimson)]">1990 Suwa Seriya</strong>.
      </p>
    </SectionPage>
  ),
});
