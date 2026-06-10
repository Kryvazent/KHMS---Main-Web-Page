import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Wrench,
  Users,
  Layers,
  Download,
  BookOpen,
  Activity,
  Smartphone,
  PlayCircle,
  Lightbulb,
  Images,
  PlaneTakeoff,
  ExternalLink,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import logoMarkUrl from "@/assets/emerge-logo-mark.png";
import { sections } from "@/lib/sections";
import { appLinks } from "@/lib/appLinks";
import { innovativeTeachingMethods } from "@/lib/innovativeTeaching";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EMerge — Emergency Care for the Real World" },
      {
        name: "description",
        content:
          "Practical, resource-adapted emergency medicine protocols and open-access education for frontline clinicians in low- and middle-income countries.",
      },
      { property: "og:title", content: "EMerge — Emergency Care for the Real World" },
      {
        property: "og:description",
        content:
          "Resource-adapted protocols, triage tools and Medical Education for the frontline.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <FeaturedGateway />
      <AboutEMerge />
      <Validation />
      <Pillars />
      <QuickAccess />
      <ExploreAll />
      <Community />
      <SiteFooter />
    </div>
  );
}

function AboutEMerge() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-crimson)]">
            About EMergeSL
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            Empowering emergency medicine professionals through{" "}
            <span className="text-[var(--color-crimson)]">education, innovation,</span> and{" "}
            <span className="text-[var(--color-crimson)]">service.</span>
          </h2>
          <p className="mt-6 text-muted-foreground md:text-lg">
            EMergeSL is a clinician-led collective building practical training, open protocols and
            frontline tools for every member of the emergency care team — from PAs and nurses to
            doctors and disaster responders.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-bold text-white hover:bg-[var(--color-navy)]/90"
            >
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/teaching"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-bold text-foreground hover:bg-secondary"
            >
              Teaching Hub
            </Link>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-[var(--color-navy-deep)] shadow-2xl">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-doctors-in-a-meeting-7689/1080p.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy-deep)]/80 via-[var(--color-navy)]/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-crimson)] text-white shadow-2xl shadow-[var(--color-crimson)]/40 ring-4 ring-white/20">
              <PlayCircle className="h-8 w-8" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
            <span>Workshops & Field Training</span>
            <span className="text-[var(--color-crimson-soft)]">Live reel</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExploreAll() {
  return (
    <section className="bg-secondary/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-crimson)]">
              Explore everything
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
              All Content Areas
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Every section of EMerge SL — teaching, workshops, protocols, disaster response,
              research, electives, AI tools and more.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => {
            const Icon = s.icon;
            const accent = s.accent === "crimson" ? "var(--color-crimson)" : "var(--color-navy)";
            return (
              <Link
                key={s.id}
                to={s.route}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-white"
                  style={{ backgroundColor: accent }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold leading-tight">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.intro}</p>
                <span
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold"
                  style={{ color: accent }}
                >
                  Open{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy-deep)] to-[var(--color-navy)] text-white">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 1600 400"
        preserveAspectRatio="none"
      >
        <path
          className="ecg-line"
          d="M0 200 L400 200 L440 200 L460 120 L480 280 L500 80 L520 320 L540 200 L900 200 L940 200 L960 100 L980 300 L1000 200 L1600 200"
          stroke="#DC143C"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="2000"
        />
      </svg>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,26rem)]">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
            Educate • Elevate • Excel
          </p>
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Emergency Care for the{" "}
            <span className="text-[var(--color-crimson-soft)]">Real World</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            Equipping frontline healthcare workers in low- and middle-income countries with
            practical, resource-adapted protocols and open-access education. Because standard
            textbooks don't work when the CT scanner is down.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-crimson)] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[var(--color-crimson)]/30 transition-transform hover:-translate-y-0.5"
            >
              Browse Clinical Protocols <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#offline-app"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Download the Offline App
            </a>
          </div>
        </div>
        <div className="hidden justify-center lg:flex lg:justify-end">
          <div className="rounded-lg bg-white/95 p-4 shadow-2xl shadow-black/30 ring-1 ring-white/30 md:p-5">
            <img
              src={logoMarkUrl}
              alt="EMerge logo mark"
              className="h-48 w-48 object-contain sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedGateway() {
  return (
    <section className="border-b border-border/60 bg-secondary/40 py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex snap-x gap-5 overflow-x-auto pb-3">
          <Link
            to="/innovative-teaching"
            className="group min-w-[18rem] snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:min-w-[25rem]"
          >
            <div className="relative aspect-[16/9] bg-secondary">
              <img
                src={innovativeTeachingMethods[0].image}
                alt="Innovative Teaching Hub"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--color-crimson)]/10 px-3 py-1 text-xs font-bold text-[var(--color-crimson)]">
                <Lightbulb className="h-3.5 w-3.5" />
                Highlight
              </div>
              <h2 className="text-xl font-black leading-tight">Innovative Teaching Hub</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Fifteen photo-led teaching techniques from One Minute Viva to EM Algos.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-crimson)]">
                Open hub{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          <Link
            to="/em-diaries"
            className="group min-w-[18rem] snap-start rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:min-w-[20rem]"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-navy)] text-white">
              <Images className="h-6 w-6" />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-navy)]">
              New Tab
            </p>
            <h2 className="mt-2 text-xl font-black leading-tight">EM Diaries</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Dated programme photos, field notes and EMerge memories in one place.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-navy)]">
              Open diaries{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            to="/icem-2026"
            className="group min-w-[18rem] snap-start rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:min-w-[20rem]"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-crimson)] text-white">
              <PlaneTakeoff className="h-6 w-6" />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-crimson)]">
              Conference
            </p>
            <h2 className="mt-2 text-xl font-black leading-tight">EMerge at ICEM 2026</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              A dedicated space for conference updates, sessions and media.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-crimson)]">
              Open ICEM hub{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <div className="min-w-[18rem] snap-start rounded-2xl border border-border bg-card p-6 shadow-sm sm:min-w-[22rem]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-navy)] text-white">
              <Smartphone className="h-6 w-6" />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-navy)]">
              App Links
            </p>
            <h2 className="mt-2 text-xl font-black leading-tight">EMerge Apps</h2>
            <div className="mt-4 grid gap-2">
              <AppLinkPill link={appLinks.externalApp} />
              <AppLinkPill link={appLinks.firstAidApp} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppLinkPill({ link }: { link: (typeof appLinks)[keyof typeof appLinks] }) {
  return (
    <a
      href={link.href}
      target={link.isLive ? "_blank" : undefined}
      rel={link.isLive ? "noreferrer" : undefined}
      aria-disabled={!link.isLive}
      onClick={(event) => {
        if (!link.isLive) event.preventDefault();
      }}
      className={`flex items-center justify-between gap-3 rounded-xl border border-border px-3 py-2 text-sm font-bold ${
        link.isLive
          ? "bg-secondary text-foreground hover:border-[var(--color-crimson)]"
          : "cursor-not-allowed bg-secondary/60 text-muted-foreground"
      }`}
    >
      <span className="flex items-center gap-2">
        <ExternalLink className="h-4 w-4" />
        {link.label}
      </span>
      <span className="text-[0.7rem] uppercase tracking-wider">{link.status}</span>
    </a>
  );
}

function Validation() {
  const items = [
    {
      icon: Wrench,
      title: "Frugal Environments",
      body: "Workarounds and DIY solutions for equipment shortages.",
    },
    {
      icon: Users,
      title: "Task-Shifting",
      body: "Clear guidance designed for clinical officers, nurses, and medical assistants.",
    },
    {
      icon: Layers,
      title: "Resource Stratification",
      body: "Protocols that scale from a basic rural clinic to a regional referral center.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Built for Your Reality</h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Most emergency medicine guidelines assume unlimited oxygen, advanced imaging, and
          immediate specialist backup. EMerge is different. We provide evidence-based medicine
          adapted for:
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-navy)] text-white">
              <i.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold">{i.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pillars() {
  const cols = [
    {
      icon: Wrench,
      title: "Resource-Stratified Protocols",
      body: "Step-by-step algorithms for trauma, infectious emergencies, and toxicology, tailored to the supplies you actually have on hand.",
      cta: "Explore Protocols",
      to: "/resources",
    },
    {
      icon: Activity,
      title: "Triage & Operations",
      body: "Tools to organize the chaos. Validated low-resource triage scales, mass-casualty plans, and departmental workflows.",
      cta: "Improve Your ED",
      to: "/disaster-management",
    },
    {
      icon: BookOpen,
      title: "Medical Education & Training",
      body: "Bite-sized infographics, low-bandwidth video tutorials, and POCUS guides designed for on-shift quick reference.",
      cta: "Start Learning",
      to: "/teaching",
    },
  ];
  return (
    <section className="bg-secondary/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Core Pillars</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cols.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-crimson)] text-white">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.body}</p>
              <Link
                to={c.to}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-crimson)]"
              >
                {c.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickAccess() {
  const cards = [
    { tag: "Toxicology", title: "The EMerge Snakebite & Antivenom Protocol", to: "/resources" },
    {
      tag: "Respiratory",
      title: "How to Build a CPAP System from Basic Ward Supplies",
      to: "/resources",
    },
    { tag: "POCUS", title: "POCUS Guide: The eFAST Exam in Under 3 Minutes", to: "/resources" },
    {
      tag: "Triage",
      title: "South African Triage Scale (SATS) Implementation Toolkit",
      to: "/resources",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">High-Yield Quick Reference</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        The protocols our users open most — straight to the algorithm.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <Link
            key={i}
            to={c.to}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-navy)]/40 hover:shadow-xl"
          >
            <div>
              <div className="mb-4 inline-flex h-9 items-center rounded-full bg-[var(--color-navy)]/10 px-3 text-xs font-bold uppercase tracking-wider text-[var(--color-navy)]">
                {c.tag}
              </div>
              <h3 className="text-base font-bold leading-snug">{c.title}</h3>
            </div>
            <ArrowRight className="mt-6 h-5 w-5 text-[var(--color-crimson)] transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function Community() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-navy-deep)] text-white"
      id="offline-app"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,20,60,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Join a Global Network of Frontline Innovators
            </h2>
            <p className="mt-5 text-white/80 md:text-lg">
              You are not practicing in isolation. Join thousands of nurses, clinical officers, and
              doctors who are defining the future of global emergency medicine. Share your cases,
              publish your local data, and connect with mentors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/research"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-crimson)] px-6 py-3 text-sm font-bold text-white shadow-lg"
              >
                Submit a Case Study <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
              >
                Contribute a Protocol
              </Link>
            </div>
          </div>
          <figure className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur">
            <Smartphone className="mb-4 h-8 w-8 text-[var(--color-crimson-soft)]" />
            <blockquote className="text-lg italic leading-relaxed text-white/90 md:text-xl">
              "EMerge gives me protocols I can actually use at 2 AM in my district hospital when I'm
              the only clinician on duty."
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-white/70">
              — Dr. Kwame O., District Medical Officer
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
