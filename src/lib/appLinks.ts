export type AppLink = {
  label: string;
  href: string;
  isLive: boolean;
  status: string;
  description: string;
};

export const appLinks = {
  externalApp: {
    label: "External EM App",
    href: "https://sportem.app/",
    isLive: true,
    status: "Open app",
    description: "Launch the external EMerge app.",
  },
  firstAidApp: {
    label: "First Aid App",
    href: "#",
    isLive: false,
    status: "Link pending",
    description: "Placeholder for the First Aid app. Replace the href when the final URL is ready.",
  },
} satisfies Record<string, AppLink>;
