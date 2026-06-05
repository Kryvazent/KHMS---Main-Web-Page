import {
  Info,
  GraduationCap,
  CalendarDays,
  BookOpen,
  Link as LinkIcon,
  ShieldAlert,
  HeartHandshake,
  FlaskConical,
  Globe2,
  Megaphone,
  Stethoscope,
  Sparkles,
  Mail,
  type LucideIcon,
} from "lucide-react";

export type Section = {
  id: string;
  title: string;
  intro: string;
  route: string;
  icon: LucideIcon;
  accent?: "navy" | "crimson";
};

export const sections: Section[] = [
  {
    id: "about",
    title: "About EMerge SL",
    intro: "Empowering emergency medicine professionals through education, innovation and service.",
    route: "/about",
    icon: Info,
    accent: "navy",
  },
  {
    id: "teaching",
    title: "Teaching Hub",
    intro: "Structured learning for Doctors, Nurses, Healthcare Assistants and PAs.",
    route: "/teaching",
    icon: GraduationCap,
    accent: "crimson",
  },
  {
    id: "workshops",
    title: "Workshops & Events",
    intro: "ECA, Advanced Airway Day and recurring EM Learning Days.",
    route: "/workshops",
    icon: CalendarDays,
    accent: "navy",
  },
  {
    id: "resources",
    title: "Resources",
    intro: "Algorithms, clinical protocols and downloadable guides.",
    route: "/resources",
    icon: BookOpen,
    accent: "navy",
  },
  {
    id: "links",
    title: "Important Links",
    intro: "Curated access to LITFL, CoreEM, IFEM Academy and more.",
    route: "/links",
    icon: LinkIcon,
    accent: "crimson",
  },
  {
    id: "disaster",
    title: "Disaster Management",
    intro: "Sri Lanka's emergency response initiatives and preparedness.",
    route: "/disaster-management",
    icon: ShieldAlert,
    accent: "crimson",
  },
  {
    id: "social",
    title: "Social Services",
    intro: "Volunteer programs, community outreach and impact stories.",
    route: "/social-services",
    icon: HeartHandshake,
    accent: "navy",
  },
  {
    id: "research",
    title: "Quality Improvement & Research",
    intro: "Audits, publications and innovative healthcare projects.",
    route: "/research",
    icon: FlaskConical,
    accent: "navy",
  },
  {
    id: "electives",
    title: "Elective Opportunities",
    intro: "Global exchange and international training programs.",
    route: "/electives",
    icon: Globe2,
    accent: "crimson",
  },
  {
    id: "patient-education",
    title: "Patient Education",
    intro: "Plain-language guides empowering patients and families.",
    route: "/patient-education",
    icon: Megaphone,
    accent: "navy",
  },
  {
    id: "first-aid",
    title: "First Aid",
    intro: "Quick-access tutorials and printable first-aid guides.",
    route: "/first-aid",
    icon: Stethoscope,
    accent: "crimson",
  },
  {
    id: "ai-apps",
    title: "AI Projects",
    intro: "Under development and fully deployed AI tools for EM care.",
    route: "/ai-apps",
    icon: Sparkles,
    accent: "navy",
  },
  {
    id: "contact",
    title: "Contact",
    intro: "Get in touch for workshops, events, training and collaboration.",
    route: "/contact",
    icon: Mail,
    accent: "crimson",
  },
];

export const findSection = (id: string) => sections.find((s) => s.id === id)!;
