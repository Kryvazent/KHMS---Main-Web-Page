import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import logoUrl from "@/assets/emerge-logo-transparent.png";
import { sections } from "@/lib/sections";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t-2 border-[var(--color-crimson)] bg-[var(--color-navy-deep)] text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <div className="rounded-lg bg-white p-3 inline-block">
            <img src={logoUrl} alt="EMerge" className="h-10 w-auto" />
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            Empowering Sri Lanka in Emergencies. Educate • Elevate • Excel.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Learn</h4>
          <ul className="space-y-2 text-sm">
            {sections.slice(0, 5).map((s) => (
              <li key={s.id}>
                <Link to={s.route} className="hover:text-white">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Engage</h4>
          <ul className="space-y-2 text-sm">
            {sections.slice(5, 11).map((s) => (
              <li key={s.id}>
                <Link to={s.route} className="hover:text-white">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Stay Connected</h4>
          <p className="text-sm text-white/70">Colombo, Sri Lanka</p>
          <p className="text-sm text-white/70">info@emergesrilanka.org</p>
          <form className="mt-4 flex overflow-hidden rounded-full border border-white/20 bg-white/5">
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 bg-[var(--color-crimson)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[var(--color-crimson)]/90"
            >
              Join
            </button>
          </form>
          <p className="mt-2 text-xs text-white/50">Monthly high-yield clinical pearls — low bandwidth friendly.</p>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-white text-[10px] font-bold text-[var(--color-navy-deep)]">
              QR
            </div>
            <div className="text-xs text-white/60">
              Scan to visit<br />
              <span className="text-white/90">emergesrilanka.org</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <span>© {new Date().getFullYear()} EMerge Sri Lanka. All rights reserved.</span>
          <a
            href="https://www.kryvazent.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-white underline decoration-[var(--color-crimson)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--color-crimson-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Developed by Kryvazent
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
