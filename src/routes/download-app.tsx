import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { renderSVG } from "uqr";
import { ArrowDownToLine, ArrowLeft, Check, Smartphone } from "lucide-react";
import { SectionPage } from "@/components/SectionPage";
import { findSection } from "@/lib/sections";

const section = findSection("first-aid");
const apkUrl =
  "https://drive.usercontent.google.com/download?id=13LSEwjuRTJfGTcvnrdIIlpCPJM3auB0t&export=download&confirm=t";

export const Route = createFileRoute("/download-app")({
  head: () => ({
    meta: [
      { title: "Download the First Aid App — EMerge Sri Lanka" },
      {
        name: "description",
        content: "Try the EMerge First Aid Android app now. iOS and Google Play versions are coming soon.",
      },
      { property: "og:title", content: "Download the EMerge First Aid App" },
      {
        property: "og:description",
        content: "Try the Android app now. Coming soon to Google Play and the App Store.",
      },
    ],
    links: [{ rel: "canonical", href: "/download-app" }],
  }),
  component: DownloadAppPage,
});

function DownloadAppPage() {
  const [qrImage, setQrImage] = useState("");

  useEffect(() => {
    const downloadUrl = new URL(apkUrl, window.location.origin).toString();
    const svg = renderSVG(downloadUrl, { border: 3, ecc: "M" });
    setQrImage(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`);
  }, []);

  return (
    <SectionPage section={section}>
      <section className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-[var(--color-navy)]/10">
        <div className="grid md:grid-cols-[1fr_0.85fr]">
          <div className="p-7 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-crimson)]/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--color-crimson)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-crimson)]" /> Android app available
            </div>
            <h2 className="mt-6 max-w-xl text-3xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
              First aid, ready when you need it.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">
              Try the EMerge First Aid mobile app now. Scan the code with your phone or download
              the Android installer directly.
            </p>

            <a
              href={apkUrl}
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[var(--color-crimson)] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[var(--color-crimson)]/20 transition hover:-translate-y-0.5 hover:bg-[var(--color-crimson)]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-crimson)] focus-visible:ring-offset-2"
            >
              <ArrowDownToLine className="h-5 w-5" />
              Try the app now
            </a>
            <p className="mt-3 text-xs font-medium text-muted-foreground">
              Android installer · APK download
            </p>

            <div className="mt-10 border-t border-border pt-6">
              <p className="text-sm font-bold text-foreground">Coming soon</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-bold text-foreground">
                  <Check className="h-3.5 w-3.5 text-[var(--color-crimson)]" /> Google Play
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-bold text-foreground">
                  <Check className="h-3.5 w-3.5 text-[var(--color-crimson)]" /> App Store
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                The mobile app will be available on Google Play and the App Store soon.
              </p>
            </div>

            <Link
              to="/first-aid"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-navy)] hover:text-[var(--color-crimson)]"
            >
              <ArrowLeft className="h-4 w-4" /> Browse first-aid guides
            </Link>
          </div>

          <div className="relative flex flex-col items-center justify-center overflow-hidden bg-[var(--color-navy)] px-7 py-10 text-center text-white md:px-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full border border-white/10" />
            <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15">
              <Smartphone className="h-6 w-6" />
            </div>
            <p className="relative text-xs font-extrabold uppercase tracking-[0.18em] text-white/65">
              Scan to download
            </p>
            <div className="relative mt-5 flex h-64 w-64 items-center justify-center rounded-2xl bg-white p-4 shadow-2xl sm:h-72 sm:w-72">
              {qrImage ? (
                <img
                  src={qrImage}
                  alt="QR code linking to the EMerge First Aid Android app download"
                  className="h-full w-full"
                />
              ) : (
                <div className="h-full w-full animate-pulse rounded-lg bg-secondary" aria-hidden="true" />
              )}
            </div>
            <p className="relative mt-5 max-w-xs text-sm leading-6 text-white/75">
              Point your phone camera at the code to open the Android app download.
            </p>
          </div>
        </div>
      </section>
    </SectionPage>
  );
}
