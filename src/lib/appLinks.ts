export type AppLink = {
  label: string;
  href: string;
  isLive: boolean;
  status: string;
  description: string;
  download?: boolean;
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
    href: "/download-app",
    isLive: true,
    status: "Try the app",
    description: "Try the Android app now or scan the QR code to download it.",
  },
} satisfies Record<string, AppLink>;
