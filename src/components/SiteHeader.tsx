import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import logoUrl from "@/assets/emerge-logo-transparent.png";

type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string; hash?: string }[];
};

const nav: NavItem[] = [
  {
    label: "Teaching",
    to: "/teaching",
    children: [
      { label: "Post Graduate", to: "/teaching", hash: "post-graduate" },
      { label: "Doctors", to: "/teaching", hash: "doctors" },
      { label: "Nurses", to: "/teaching", hash: "nurses" },
      { label: "Health Care Staff", to: "/teaching", hash: "health-care-staff" },
      { label: "Other Staff", to: "/teaching", hash: "other-staff" },
    ],
  },
  {
    label: "Workshops",
    to: "/workshops",
    children: [
      { label: "ECG", to: "/workshops", hash: "ecg" },
      { label: "Advanced Airway", to: "/workshops", hash: "advanced-airway" },
    ],
  },
  { label: "Research", to: "/research" },
  { label: "Important Links", to: "/links" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 md:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src={logoUrl} alt="EMerge" className="h-10 w-auto md:h-12" />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {nav.map((n) =>
            n.children ? (
              <div
                key={n.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(n.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  to={n.to}
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-foreground/75 transition-colors hover:text-[var(--color-navy)]"
                  activeProps={{ className: "text-[var(--color-crimson)]" }}
                >
                  {n.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {openMenu === n.label && (
                  <div className="absolute left-0 top-full min-w-[12rem] rounded-xl border border-border bg-card p-2 shadow-xl">
                    {n.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        hash={c.hash}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-[var(--color-navy)]"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/75 transition-colors hover:text-[var(--color-navy)]"
                activeProps={{ className: "text-[var(--color-crimson)]" }}
              >
                {n.label}
              </Link>
            ),
          )}

          <div className="relative ml-2">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search…"
              className="h-9 w-40 rounded-full border border-border bg-secondary/50 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)]/30"
            />
          </div>
          <Link
            to="/contact"
            className="rounded-full bg-[var(--color-crimson)] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[var(--color-crimson)]/90"
          >
            Join the Network
          </Link>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <div className="flex flex-col p-4">
            {nav.map((n) => (
              <div key={n.label} className="border-b border-border/40 py-2 last:border-0">
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm font-bold text-foreground"
                >
                  {n.label}
                </Link>
                {n.children?.map((c) => (
                  <Link
                    key={c.label}
                    to={c.to}
                    hash={c.hash}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-5 py-1.5 text-sm text-foreground/70 hover:bg-secondary"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-[var(--color-crimson)] px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Join the Network
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
