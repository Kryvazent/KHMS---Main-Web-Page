import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";
import { Mail, MapPin, Phone } from "lucide-react";

const s = findSection("contact");

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — EMerge Sri Lanka` },
      { name: "description", content: s.intro },
      { property: "og:title", content: "Contact — EMerge Sri Lanka" },
      { property: "og:description", content: s.intro },
      { property: "og:url", content: s.route },
    ],
    links: [{ rel: "canonical", href: s.route }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SectionPage section={s}>
      <div className="grid gap-6 md:grid-cols-3">
        <InfoCard icon={<MapPin className="h-5 w-5" />} title="Location" body="Colombo, Sri Lanka" />
        <InfoCard icon={<Mail className="h-5 w-5" />} title="Email" body="info@emergesrilanka.org" />
        <InfoCard icon={<Phone className="h-5 w-5" />} title="Phone" body="Coordinator: Dr Nilanka Mudithakumara" />
      </div>
      <div className="mt-10 rounded-2xl border border-border bg-card p-8">
        <h2 className="text-xl font-bold">Get in touch</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          For workshops, trainings, events or collaboration enquiries. A contact form will be added shortly.
        </p>
      </div>
    </SectionPage>
  );
}

function InfoCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-navy)] text-white">
        {icon}
      </div>
      <h3 className="font-bold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
