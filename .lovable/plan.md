## Goal

Launch the EMerge Sri Lanka site as a clean framework: each content area is a single tab/card on the homepage with a thumbnail + short intro. Clicking opens its own dedicated detail page. Content for each section will be filled in gradually later — for now each detail page gets a clear placeholder ("Content coming soon") plus the section's intent so structure and navigation are real and complete.

## Design direction

- **Palette:** Royal Blue (#1E3A8A / deep navy primary), Crimson Red (#DC143C accent for urgency/CTAs), Pure White background, soft slate for body text. Dark navy footer with thin crimson border.
- **Typography:** Montserrat for headings (bold), Inter for body.
- **Style:** Clean, medical-professional with subtle glass/elevation on cards, gentle hover lift, animated heartbeat pulse line in the hero. No overlapping/stacked cards — strict grid, generous spacing.
- **Logo:** Uploaded EMerge logo used in header and footer.

## Site structure (routes)

```
/                       Home — hero + grid of all section cards
/about                  About EMerge SL
/teaching               Teaching Hub (Doctors, Nurses, HCAs, PAs)
/workshops              Workshops & Events
/resources              Resources (algorithms, protocols, downloads)
/links                  Important Links (LITFL, CoreEM, IFEM)
/disaster-management    Disaster Management
/social-services        Social Services
/research               Quality Improvement & Research
/electives              Elective Opportunities
/patient-education      Patient Education  ← replaces "Communication"
/first-aid              First Aid
/ai-apps                AI Projects — two tabs: Under Development | Fully Developed
/contact                Contact
```

Each route is a real page with its own SEO `head()` (title, description, og tags). No hash-anchor sections — every content area is its own route as requested.

## Homepage layout

1. **Header** — logo left, nav (About, Teaching, Workshops, Resources, AI Apps, Contact), crimson "Join the Network" button.
2. **Hero** — tagline *"Educate • Elevate • Excel"*, headline *"Empowering Sri Lanka in Emergencies"*, short sub-line, primary CTA (Explore Resources), secondary CTA (Contact Us). Animated ECG pulse line in background.
3. **Section grid** — responsive 3-column card grid. One card per content area with:
   - thumbnail/icon block (color-coded)
   - section title
   - 1–2 line intro
   - "Open →" link to the detail route
   Cards are evenly spaced, no overlap, no clustering.
4. **Footer** — navy background, thin crimson top border, logo, contact (Colombo, email, phone), site map, small credit line.

## Detail page template

Every section route uses the same layout:
- Breadcrumb (Home / Section)
- Page title + intro paragraph (from the brief)
- Empty-state panel: "We're building this section. Content will be added soon." with a contact link
- Consistent footer

For **AI Apps** (`/ai-apps`) the page uses a shadcn `Tabs` component with two tabs:
- **Under Development** — empty grid with placeholder cards
- **Fully Developed** — empty grid with placeholder cards

## What's in scope this turn

- Color tokens + fonts wired into `src/styles.css`
- Logo uploaded via lovable-assets
- Header + Footer components
- Home page with hero + section card grid
- All 13 detail routes with the placeholder template
- AI Apps page with two-tab layout
- SEO `head()` on every route

## What's deferred

- Actual protocol/algorithm content, workshop calendar data, course details, real AI app entries — to be filled in by you in later turns from the uploaded PDFs (ECG Crash Course, EMERGE doc, MCI cards, checklists, workshop flyers).

## Technical notes

- TanStack Start file-based routing under `src/routes/`.
- Each route file: `createFileRoute("/<path>")` with `head()` + component.
- Shared `<SectionPage>` component to keep detail pages consistent.
- Section list defined once in `src/lib/sections.ts` (id, title, intro, icon, route) and consumed by both the home grid and the header nav.
- Logo stored as `src/assets/emerge-logo.png.asset.json` via lovable-assets.
