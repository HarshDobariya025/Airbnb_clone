# Current Project Audit — Airbnb Clone

> **Status**: Audit only. No files modified, no files deleted.  
> **Date**: September 2026  
> **Auditor**: Senior Frontend Architect

---

## Table of Contents

1. [Current Architecture](#1-current-architecture)
2. [Current Folder Structure](#2-current-folder-structure)
3. [Components Currently Available](#3-components-currently-available)
4. [Components That Should Be Reused](#4-components-that-should-be-reused)
5. [Components That Should Be Refactored](#5-components-that-should-be-refactored)
6. [Components That Should Be Removed](#6-components-that-should-be-removed)
7. [Duplicate Code](#7-duplicate-code)
8. [Giant Components](#8-giant-components)
9. [Poor Separation of Concerns](#9-poor-separation-of-concerns)
10. [Frontend/Backend Coupling](#10-frontendbackend-coupling)
11. [API Problems](#11-api-problems)
12. [CSS Problems](#12-css-problems)
13. [State-Management Problems](#13-state-management-problems)
14. [Accessibility Problems](#14-accessibility-problems)
15. [Visual Implementation Problems](#15-visual-implementation-problems)
16. [Recommended Migration Plan](#16-recommended-migration-plan)

---

## 1. Current Architecture

### Summary

The project is a **Next.js 16 App Router** frontend with **no backend whatsoever**. All data is
hard-coded as static objects inside `lib/data.ts`. There is no Express server, no API routes (not
even Next.js route handlers), no database, and no network calls.

The entire UI is implemented as a single monolithic client component
(`components/airbnb/page-shell.tsx` — 45 lines each up to 2000+ characters wide). Every
sub-component (Navbar, PhotoGrid, BookingCard, AmenitySection, CalendarSection, ReviewsSection,
Modal, PhotoTour, LocationSection) is defined in the same file and never exported.

### Technology Stack (Actual)

| Layer | Technology | Status |
|---|---|---|
| Framework | Next.js 16.3.3, App Router | OK |
| Language | TypeScript 5.7.3 | OK |
| Styling | Tailwind CSS v4 + hand-written CSS in `globals.css` | HYBRID — Tailwind not used in components |
| Icons | lucide-react 1.16.0 | OK |
| UI primitives | @base-ui/react, shadcn (base-nova style) | Installed but barely used |
| State | Local useState only — no context, no store | Insufficient |
| Routing | App Router — single page, no dynamic routes | Missing listing/search/booking routes |
| Data | Hard-coded TypeScript objects in `lib/data.ts` | No real data layer |
| Backend | **None** | Completely missing |
| API | **None** — fake async functions in `lib/data.ts` | Not real |
| Images | Unsplash CDN URLs, next/image with `unoptimized: true` | No local assets |

---

## 2. Current Folder Structure

```
Airbnb_clone/
├── app/
│   ├── globals.css          <- All CSS lives here (269 lines, custom classes only)
│   ├── layout.tsx           <- Root layout (metadata, analytics)
│   └── page.tsx             <- Renders <PageShell /> and nothing else
│
├── components/
│   ├── airbnb/
│   │   └── page-shell.tsx   <- ENTIRE APPLICATION IN ONE FILE (45 lines x ~1000 chars each)
│   └── ui/
│       └── button.tsx       <- shadcn/base-ui Button component (UNUSED in app)
│
├── lib/
│   ├── data.ts              <- Static data + domain types + fake async fns (111 lines)
│   └── utils.ts             <- cn() helper only
│
├── docs/                    <- (being created now)
├── public/                  <- (empty — no local assets)
├── node_modules/
├── .next/
├── package.json
├── tsconfig.json
├── next.config.mjs
├── components.json
├── pnpm-workspace.yaml
├── postcss.config.mjs
└── .gitignore
```

### What is completely absent

- `hooks/` directory — no custom hooks at all
- `services/` directory — no service layer
- `types/` directory — types are mixed into `lib/data.ts`
- `backend/` or `server/` directory — no Express server
- `app/api/` directory — no Next.js route handlers
- `app/listings/[id]/` — no dynamic listing route
- `context/` or any global state provider
- Test files of any kind
- `public/` assets (empty)

---

## 3. Components Currently Available

All components are **private inner functions** inside `page-shell.tsx`. They are not exported, not
independently testable, and cannot be reused across pages.

| Component | Location | Type | Estimated real LOC |
|---|---|---|---|
| `Icon` helper | page-shell.tsx L8-12 | Utility fn | ~10 |
| `Navbar` | page-shell.tsx L14-20 | Client, inline | ~40 |
| `PhotoGrid` | page-shell.tsx L22-25 | Client, inline | ~25 |
| `BookingCard` | page-shell.tsx L27-30 | Client, inline | ~80 |
| `AmenitySection` | page-shell.tsx L32 | Client, inline | ~25 |
| `CalendarSection` | page-shell.tsx L34 | Client, inline | ~60 |
| `ReviewsSection` | page-shell.tsx L36 | Client, inline | ~70 |
| `Modal` | page-shell.tsx L38 | Client, inline | ~25 |
| `PhotoTour` | page-shell.tsx L40 | Client, inline | ~60 |
| `LocationSection` | page-shell.tsx L42 | Client, inline | ~35 |
| `PageShell` (root) | page-shell.tsx L44 | Client, exported | ~80 |
| `Button` (shadcn) | components/ui/button.tsx | UI primitive | 59 lines |

The shadcn `Button` component is **never used** anywhere in the application despite being
installed and configured.

---

## 4. Components That Should Be Reused

These patterns appear multiple times and are candidates for proper shared components:

| Pattern | Where it appears | Suggested component |
|---|---|---|
| Avatar (letter in red circle) | ReviewsSection, Modal reviews | `<Avatar initial size />` |
| OutlineButton (border+hover style) | Amenities, Calendar, Host card | `<Button variant="outline" />` (already in ui/) |
| SectionHeading (h2 + optional subtitle) | Every content section | `<SectionHeading title subtitle />` |
| StarRating (star icon + score) | Reviews, BookingCard, NearbyGrid | `<StarRating score count />` |
| PhotoThumbnail (relative + Image + overlay) | PhotoGrid, PhotoTour strip | `<PhotoThumbnail src alt onClick active />` |
| Modal wrapper | Amenities modal, Reviews modal | `<Modal title onClose />` — exists, just unexported |
| GuestCounter row (label + stepper) | BookingCard guest menu | `<GuestCounter label value onChange min max />` |
| MapPlaceholder | LocationSection | `<MapPlaceholder />` |

---

## 5. Components That Should Be Refactored

| Component | Problem | Required refactor |
|---|---|---|
| `PageShell` | God component — owns all state, all layout, all sub-trees | Extract sub-components; move state to hooks |
| `Navbar` | Mixes desktop nav, compact nav, and booking CTA in one function | Split: Navbar, SearchPill, CompactBar |
| `PhotoGrid` | Hardcodes `listing.photos` directly | Accept `photos` as prop |
| `BookingCard` | Contains guest dropdown state and date state; no pricing abstraction | Extract GuestPicker, DatePicker, PriceSummary |
| `CalendarSection` | Month logic uses numeric magic constants; no real date handling | Use proper Date objects; accept checkIn/checkOut as props |
| `ReviewsSection` | Hardcoded score strings and bar widths as inline style | Derive from data; compute widths |
| `PhotoTour` | Keyboard navigation missing; no previous button | Add arrow key handling, prev/next buttons |
| `Modal` | Missing focus trap; missing scroll lock; no `aria-labelledby` | Add focus trap, inert on background, aria-labelledby |
| `LocationSection` | Map is a pure CSS decoration | Integrate Leaflet or static map image |
| `Icon` helper | Silent fallback to House icon on unknown names | Use explicit icon map with TS discriminated union |

---

## 6. Components That Should Be Removed

| Item | Reason |
|---|---|
| `page-shell.tsx` as a monolith | Replace entirely with properly separated component tree |
| Inline function declarations inside `page-shell.tsx` | Become standalone files in `components/listing/` |
| Fake async API functions at bottom of `lib/data.ts` | Replace with real service layer calls to Express backend |
| Type aliases lines 88-110 in `lib/data.ts` | Meaningless noise-types (`BuildStatus`, `Done`, `Finished`, etc.); remove entirely |

---

## 7. Duplicate Code

### 7a. Avatar markup repeated

The `.avatar` div (red circle with initial letter) appears identically in:
- `ReviewsSection` (inside `.review-grid`)
- Modal reviews body
No shared component; JSX is copy-pasted each time.

### 7b. Modal structure repeated

The `Modal` wrapper is defined once but its inner content for amenities and reviews duplicates the
same avatar/text layout as the main reviews section.

### 7c. `outline-btn` button

The same button appearance is produced by hardcoded `className="outline-btn"` in AmenitySection,
CalendarSection, and HostCard. The existing `<Button variant="outline">` in
`components/ui/button.tsx` is never used.

### 7d. Hardcoded `#717171` color

The muted text color appears **at least 25 times** in `globals.css` as a raw hex value. Never
stored as a CSS custom property or Tailwind token.

### 7e. Hardcoded `#ff385c` brand color

The Airbnb red appears **9 times** in `globals.css` and once inline in `page-shell.tsx`. Not
declared as a CSS variable or Tailwind `theme.extend` color.

### 7f. Hardcoded `#222` primary color

Appears **30+ times** in `globals.css` as a raw hex value. Not a token.

---

## 8. Giant Components

### `page-shell.tsx` — The Monolith

45 lines of TypeScript, each line a single-line-minified function containing hundreds of characters
of JSX. Estimated real LOC if formatted properly:

| Logical unit | Estimated real LOC |
|---|---|
| Icon helper | 10 |
| Navbar | 40 |
| PhotoGrid | 25 |
| BookingCard | 80 |
| AmenitySection | 25 |
| CalendarSection | 60 |
| ReviewsSection | 70 |
| Modal | 25 |
| PhotoTour | 60 |
| LocationSection | 35 |
| PageShell root | 80 |
| **Total** | **~510 real LOC** |

All 510 lines are in one file, never independently importable, never independently testable.

### `globals.css` — The Style Monolith

All 269 lines in one file with no logical separation. Mixes:
- Tailwind imports
- CSS resets
- Navbar, page layout, photo grid, booking card, calendar, reviews, modal, photo tour, map
- No CSS Modules, no scoping, all class names globally flat

---

## 9. Poor Separation of Concerns

### 9a. Data, types, and utility functions in one file

`lib/data.ts` contains four completely different things:
1. Runtime data (listing object, photos, reviews, amenities, nearby)
2. Domain type definitions (Photo, Amenity, Nearby, Listing, etc.)
3. Fake async service functions (getListing, getReviews)
4. Meaningless noise types (lines 88-110)

These should be in:
- `types/listing.ts` — domain types
- `lib/mock-data.ts` — static data for development
- `services/listing.service.ts` — real API calls

### 9b. Business logic in JSX

Calendar day state (selected/past/future) is computed inside a JSX class-name ternary:
```
d >= 18 && d <= 23 && month === 0 ? 'selected' : d && d < 18 && month === 0 ? 'past' : ''
```
Should be a pure utility: `getCalendarDayState(day, checkIn, checkOut, month)`.

Review bar widths are hardcoded magic strings in inline style:
```
style={{width: n === 5 ? '96%' : n === 4 ? '6%' : '1%'}}
```
Should be computed from review count data.

Nearby page 2 data is constructed inline inside a JSX map:
```
const item = page === 1 ? x : {...x, title: ['Beachside...'][i], image: ...}
```
Should be a `useNearbyListings(page)` hook.

### 9c. Data imported directly into components

`import { listing, reviews, ... } from '@/lib/data'` bypasses any service or hook layer. Data is
a module-level constant — effectively global state with no async lifecycle.

### 9d. All state owned by root

All modal/tour/guest/page state lives in `PageShell`. As components are separated this becomes
prop-drilling. No context or shared hooks.

---

## 10. Frontend/Backend Coupling

### Current situation: No backend exists

There is **no backend**. The project requires Node.js + Express + TypeScript — entirely absent.

### Fake API pattern

```ts
export async function getListing() { return listing }
export async function getReviews() { return reviews }
export async function getNearby() { return listing.nearby }
```
These are disguised as async but synchronously return module constants. They are **never called** —
`page-shell.tsx` imports `listing` directly as a static import.

### Missing backend structure

- `backend/src/routes/` — Express routers
- `backend/src/controllers/` — request handlers
- `backend/src/services/` — business logic
- `backend/src/repositories/` — data access
- `backend/src/types/` — shared domain types
- `backend/src/middleware/` — CORS, error handling, auth
- Any database or file-based data store

### Missing frontend service layer

No `services/api.ts` or `services/listing.ts`. No `fetch()` calls anywhere. If a backend is added,
every component will need significant surgery.

---

## 11. API Problems

| Problem | Severity |
|---|---|
| No HTTP API exists | Critical |
| No Next.js route handlers (`app/api/`) | Critical |
| No Express server in the repository | Critical |
| getListing/getReviews are synchronous module reads masquerading as async | High |
| No error handling (no try/catch, no loading states, no error states) | High |
| No loading skeleton or suspense boundary | High |
| `typescript: { ignoreBuildErrors: true }` suppresses type errors silently | High |
| `images: { unoptimized: true }` disables Next.js image optimization | Medium |
| No environment variable for backend URL | Medium |
| No API client abstraction | Medium |

---

## 12. CSS Problems

### 12a. Tailwind not used in components

Despite Tailwind CSS v4 being installed and imported, **zero Tailwind utility classes are used** in
any component. All styling is via custom class names in `globals.css`. The `tw-animate-css` and
`shadcn/tailwind.css` imports are also unused by actual components.

### 12b. Global flat class namespace

All class names are globally unscoped:
- `.modal` — conflicts with any future modal
- `.tour` — conflicts with any future tour/trip UI
- `.avatar` — conflicts with user profile components
- `.cancel` — conflicts with any cancel button

No CSS Modules, no `@layer` organization, no scoped patterns.

### 12c. No design tokens — hardcoded values everywhere

| Value | Occurrences | Should be |
|---|---|---|
| `#ff385c` brand red | 9 | `--color-brand` |
| `#717171` muted text | 25+ | `--color-text-muted` |
| `#222` or `#222222` primary text | 30+ | `--color-text-primary` |
| `#ddd` border | 20+ | `--color-border` |
| `#f7f7f7` surface | 12+ | `--color-surface` |

### 12d. Wrong font

Body uses `font-family: Arial, Helvetica, sans-serif`. Airbnb uses Circular (or equivalent: Inter).
This single issue degrades visual fidelity across every text element.

### 12e. Photo grid layout close but not exact

Hero photo uses `height: 380px` absolute height. The reference derives height from aspect ratio.
The "Show all photos" overlay appears on only the 4th small thumbnail instead of as a separate
button overlaid on the entire grid.

### 12f. Missing intermediate breakpoints

One `@media (max-width: 767px)` block handles mobile. Viewports between 768px–1280px are
completely unhandled — the two-column layout breaks at these widths.

### 12g. No focus-visible styles

No custom `:focus-visible` styles beyond browser defaults. Keyboard users have inconsistent focus
rings.

### 12h. CSS not co-located with components

When the component tree is split into files, CSS will need to be entirely redistributed from the
monolithic `globals.css`.

---

## 13. State-Management Problems

### 13a. All state in PageShell

```ts
const [compact, setCompact] = useState(false)
const [tour, setTour] = useState<number | null>(null)
const [modal, setModal] = useState<'amenities' | 'reviews' | null>(null)
const [guests, setGuests] = useState(2)
const [page, setPage] = useState(1)
```
Appropriate for a prototype. Will cause prop-drilling as the tree grows.

### 13b. No booking state

checkIn and checkOut exist as hardcoded strings in JSX (`10/18/2026`, `10/23/2026`) — not in state
at all. Booking card does not update from calendar selection. Calendar does not interact with
booking card.

### 13c. Guest count disconnected from pricing

`guests` is in state but the compact navbar CTA hardcodes `₹28,499 · ★ 4.95` regardless. Price
never recalculates.

### 13d. No URL state

Modal open state, photo tour index, and current page are pure in-memory. Not linkable or
shareable. In real Airbnb, modals and views are URL-addressable.

### 13e. No loading or error state

No loading states, skeleton loaders, or error boundaries. Invisible now with static data; breaks
immediately with real async fetching.

### 13f. No custom hooks

Zero hooks exist for:
- Scroll position / compact navbar detection
- Photo tour navigation
- Guest picker state
- Modal state
- Calendar/date range selection
- Nearby listings pagination

---

## 14. Accessibility Problems

### 14a. Missing focus trap in modals

When modals open, focus is not trapped. Tabbing cycles through background page elements. WCAG 2.1
AA requires modal dialogs to trap focus.

### 14b. Missing `aria-labelledby` on modals

```tsx
// Current:
<div className="modal-backdrop" role="dialog" aria-modal="true">
// Required:
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">...</h2>
```
Screen readers announce an unnamed dialog.

### 14c. Missing body scroll lock

When a modal or photo tour is open, background content is still scrollable.

### 14d. Photo tour has no previous button

`PhotoTour` has a ChevronRight next button but no previous button. No keyboard arrow key
navigation.

### 14e. Calendar cells are `<span>`, not `<button>`

Calendar day cells cannot be focused or activated via keyboard. They must be `<button>` or have
`role="button"` with `tabindex="0"` and keyboard event handlers.

### 14f. Guest stepper buttons missing `aria-label`

```tsx
<button onClick={() => setGuests(Math.max(1, guests - 1))}>−</button>
<button onClick={() => setGuests(guests + 1)}>+</button>
```
A screen reader announces "minus button" and "plus button" with no context about what is being
changed.

### 14g. No `aria-expanded` on dropdowns

The guest picker button has no `aria-expanded` attribute to communicate its open/closed state to
assistive technologies.

### 14h. Section anchors scroll behind fixed navbar

`<a href="#amenities">` links exist in the compact navbar. The target sections have no
`scroll-margin-top` to account for the fixed navbar height (~64px). Content scrolls behind the bar.

### 14i. `<Image>` alt text issues

`alt="Mirashya Homes host"` is overly descriptive. Should be the host's name only. Some alts are
repeated across different images.

---

## 15. Visual Implementation Problems

### 15a. Font is wrong — most critical visual issue

Reference uses Circular (proprietary) or a close substitute like Inter. Current uses Arial. This
degrades every single text element's visual fidelity.

### 15b. Photo grid height is off

Hero is `height: 380px` absolute. Reference is proportioned (~420px at 1280px viewport, ratio-based).

### 15c. "Show all photos" overlay is misplaced

Currently appears only on the 4th small thumbnail as an opacity hover. Reference shows it as a
dedicated button overlaid bottom-right of the entire photo grid.

### 15d. Booking card lacks price breakdown

Missing: base price × nights, cleaning fee, service fee, taxes, total. Reserve button uses a
gradient (`#ff385c` to `#ff1a1a`). Reference uses flat `#ff385c`. Date inputs show hardcoded
strings, not a real date picker.

### 15e. Map is a CSS gradient placeholder

Location map is `linear-gradient(135deg, #d4e9d9, #c8e6f5)` with a dot. Reference shows real map
tiles. Significant fidelity gap.

### 15f. Star rating uses text symbols

Reviews use `★★★★★` text characters. Reference uses individual `<Star>` icon components.
Font-rendered stars look different (size, weight, color inconsistency).

### 15g. "Guest favourite" badge missing the diamond icon

Reference shows a distinctive black diamond badge component. Current uses a `✦` text character
with inconsistent styling across sections.

### 15h. Rating bar widths are magic strings

```tsx
style={{width: n === 5 ? '96%' : n === 4 ? '6%' : '1%'}}
```
Should be computed from review distribution data.

### 15i. Nearby listings page 2 data is hardcoded JSX

Page 2 item list is a string array literal inside a JSX map. Page 2 images reuse main listing
photos — visually incorrect.

### 15j. Compact navbar pricing is hardcoded

```tsx
<strong>₹28,499</strong><span>· ★ 4.95</span>
```
Disconnected from any state or data source. Does not update based on date selection.

### 15k. Calendar visual mismatch

- Calendar months use `#f7f7f7` background; reference shows clean white
- No interactive date selection (clicking a day does nothing)
- No range highlight between check-in and checkout
- No unavailable day treatment

---

## 16. Recommended Migration Plan

> **Approach**: Incremental replacement — each phase produces a shippable state. Never leave the
> dev server broken.

---

### Phase 0 — Setup & Configuration (Day 1)

1. Restructure as monorepo: `frontend/` (current Next.js) + `backend/` (new Express)
2. Create `backend/` with package.json, tsconfig, `src/index.ts`, routes/controllers/services/repositories
3. Extract domain types from `lib/data.ts` into `frontend/src/types/listing.ts`
4. Define CSS design tokens as CSS custom properties in `globals.css`:
   ```css
   :root {
     --color-brand: #ff385c;
     --color-text-primary: #222222;
     --color-text-muted: #717171;
     --color-border: #dddddd;
     --color-surface: #f7f7f7;
   }
   ```
5. Add Inter from Google Fonts to `layout.tsx`
6. Set `typescript: { ignoreBuildErrors: false }` in `next.config.mjs`
7. Enable Next.js image optimization (remove `unoptimized: true`)

---

### Phase 1 — Backend API (Days 2–3)

1. Implement Express routes:
   - `GET /api/listings/:id`
   - `GET /api/listings/:id/reviews`
   - `GET /api/listings/:id/nearby`
   - `GET /api/listings/:id/availability`
2. Implement controllers → services → repositories pattern using mock JSON as the data store
3. Add CORS, error handling, request validation middleware
4. Add `NEXT_PUBLIC_API_URL` env variable to frontend

---

### Phase 2 — Frontend Service Layer & Hooks (Days 3–4)

1. Create `services/api.ts` — base fetch client with error handling
2. Create `services/listing.service.ts` — fetchListing, fetchReviews, fetchNearby
3. Create custom hooks:
   - `useListingData(id)` — fetches and caches listing detail
   - `useReviews(listingId)` — fetches reviews with pagination
   - `useNearby(listingId)` — fetches and paginates nearby
   - `useScrollCompact(threshold)` — navbar compact detection
   - `usePhotoTour(photos)` — photo navigation state
   - `useGuestPicker(initial, max)` — guest count state
   - `useDateRange()` — check-in / check-out selection
   - `useModal()` — modal open/close state

---

### Phase 3 — Component Decomposition (Days 4–6)

Break `page-shell.tsx` into properly separated, independently importable components:

```
components/
├── layout/
│   ├── Navbar.tsx
│   ├── SearchPill.tsx
│   └── CompactBar.tsx
├── listing/
│   ├── ListingHeader.tsx
│   ├── PhotoGrid.tsx
│   ├── ListingIntro.tsx
│   ├── HostHighlights.tsx
│   ├── ListingDescription.tsx
│   ├── SleepSection.tsx
│   ├── AmenitiesSection.tsx
│   ├── CalendarSection.tsx
│   ├── ReviewsSection.tsx
│   ├── LocationSection.tsx
│   ├── HostCard.tsx
│   ├── ThingsToKnow.tsx
│   └── NearbyListings.tsx
├── booking/
│   ├── BookingCard.tsx
│   ├── DatePicker.tsx
│   ├── GuestPicker.tsx
│   └── PriceSummary.tsx
├── gallery/
│   ├── PhotoTour.tsx
│   └── PhotoThumbnail.tsx
├── reviews/
│   ├── ReviewCard.tsx
│   ├── RatingBars.tsx
│   └── ReviewTags.tsx
├── modals/
│   ├── Modal.tsx
│   ├── AmenitiesModal.tsx
│   └── ReviewsModal.tsx
└── ui/
    ├── button.tsx           <- existing, keep
    ├── Avatar.tsx
    ├── StarRating.tsx
    ├── SectionHeading.tsx
    └── OutlineButton.tsx
```

---

### Phase 4 — App Router Pages (Day 7)

```
app/
├── layout.tsx
├── page.tsx                         <- redirect or search page
└── listings/
    └── [id]/
        ├── page.tsx                 <- listing detail Server Component
        └── loading.tsx              <- skeleton loader
```

- `listings/[id]/page.tsx` is a Server Component that fetches data server-side
- Interactive sub-components are marked `'use client'`
- URL params: `?modal=photos&photo=3` for deep-linking

---

### Phase 5 — Visual Polish (Days 7–8)

1. Fix font: Inter from Google Fonts
2. Fix photo grid: proper aspect ratios, repositioned "Show all photos" button
3. Fix booking card: full price breakdown, flat reserve button color
4. Fix star rendering: `<Star>` icon used consistently
5. Fix calendar: range highlighting, clickable days that update booking card
6. Fix map: static Mapbox or Leaflet tile
7. Apply design token variables throughout CSS
8. Migrate hand-written CSS classes to Tailwind utilities

---

### Phase 6 — Accessibility Pass (Day 9)

1. Focus trap in all modals (use @base-ui/react/dialog or manual `inert` attribute)
2. `aria-labelledby` on all dialogs
3. `scroll-margin-top` on all anchored sections
4. Calendar cells: `<button>` with `aria-label="Select October 18"`
5. Guest stepper: `aria-label="Decrease adults"`, `aria-label="Increase adults"`
6. `aria-expanded` on guest picker and date picker triggers
7. Body scroll lock when modal/tour is open
8. Photo tour: keyboard arrow key handlers, previous button
9. Consistent `focus-visible` ring styles

---

### Phase 7 — Documentation & Architecture (Day 10)

1. `docs/architecture.md` — system diagram, component tree, data flow
2. `docs/api-reference.md` — all backend endpoints documented
3. `docs/ai-workflow.md` — AI agent configuration, subagent roles
4. `.agents/` — agent configuration files
5. Final README.md

---

## Summary of Critical Violations

| # | Issue | Severity | Phase Fix |
|---|---|---|---|
| 1 | No backend exists | Critical | Phase 1 |
| 2 | Entire UI in one file | Critical | Phase 3 |
| 3 | No custom hooks | Critical | Phase 2 |
| 4 | No service layer | Critical | Phase 2 |
| 5 | No real API calls | Critical | Phase 1-2 |
| 6 | No dynamic routing | Critical | Phase 4 |
| 7 | Wrong font (Arial) | High | Phase 0 |
| 8 | No design tokens | High | Phase 0 |
| 9 | No focus trap in modals | High | Phase 6 |
| 10 | Business logic in JSX | High | Phase 3 |
| 11 | Hardcoded dates — not in state | High | Phase 3 |
| 12 | No loading/error states | High | Phase 2 |
| 13 | Calendar cells are span, not button | Medium | Phase 6 |
| 14 | Guest stepper missing aria-label | Medium | Phase 6 |
| 15 | ignoreBuildErrors: true | Medium | Phase 0 |
| 16 | Map is CSS gradient | Medium | Phase 5 |
| 17 | No price breakdown in booking card | Medium | Phase 5 |
| 18 | Nearby page 2 data hardcoded in JSX | Medium | Phase 3 |
| 19 | Star rating uses text symbols | Medium | Phase 5 |
| 20 | No scroll-margin-top on sections | Medium | Phase 6 |
