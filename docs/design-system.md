# Airbnb Clone — Design System & Primitives

> **Status**: Approved & Implemented  
> **Visual Source of Truth**: Assignment Screenshots (`docs/screenshots/` extracted from `Airbnb_Pic.docx`)  
> **Scope**: Centralized Design Tokens, Reusable Primitives, Layout Rules  
> **Note**: Do not rebuild individual listing sections until this system is established.

---

## 1. Design Philosophy & Visual Source of Truth

This design system is an **original implementation** inspired by the provided Airbnb assignment screenshots. It translates visual patterns, proportions, micro-interactions, and hierarchies into a small, maintainable design system without redundant abstractions.

### Screenshot Reference Mapping

| Component / Token Area | Reference Screenshot | Key Visual Characteristics |
|---|---|---|
| **Header & Search Pill** | `image1.png` | Centered 3-segment pill (`Anywhere` \| `Anytime` \| `Add guests`), rounded-full, brand red circle button with search icon. |
| **Photo Grid** | `image1.png` | 5-photo bento grid, 16px outer radius on corners, 8px/2px inner borders, floating "Show all photos" outline button. |
| **Guest Favourite Badge** | `image14.png` | Laurel wreath badge, 12px rounded container, bold 4.95 score with 5 stars, review count with vertical divider. |
| **Host Header & Features** | `image14.png` | Circular host avatar, bold titles with 14px muted subtexts, clean 24px icon alignment. |
| **Sticky Booking Card** | `image14.png`, `image15.png` | 370px fixed-width card, 16px radius, `0 6px 16px rgba(0,0,0,0.12)` shadow, 8px input border, `#FF385C` Reserve button. |
| **Compact Navbar** | `image15.png`, `image16.png` | 64px sticky bar, active section underline tabs, condensed price/rating summary, mini Reserve button. |
| **Where You'll Sleep** | `image15.png` | 12px rounded photo cards, double bed / sofa descriptions. |
| **Amenities Grid & Modal** | `image16.png`, `image17.png`, `image20.png` | 2-column list with 24px icons, 8px outline button, 780px modal with `rgba(0,0,0,0.6)` overlay, category dividers. |
| **Reviews Grid** | `image25.png` | 2-column grid, 40px avatars, 5 solid black stars, reviewer tenure, "Show all 19 reviews" outline button. |
| **Location Map** | `image26.png` | 16px rounded map container, center house pin, zoom controls. |
| **Meet Your Host Card** | `image27.png` | Elevated card (`0 6px 20px rgba(0,0,0,0.12)`), 24px radius, 96px verified avatar with checkmark badge, 3 stat columns. |
| **Things to Know & Nearby** | `image28.png`, `image29.png` | 3-column policy section, 5-card horizontal carousel with 16px radius and circular pagination controls. |

---

## 2. Centralized Design Tokens

Tokens are implemented both as **CSS Custom Properties** in [`frontend/src/styles/globals.css`](file:///c:/Users/dobar/OneDrive/Desktop/Airbnb/Airbnb_clone/frontend/src/styles/globals.css) and as typed TypeScript constants in [`frontend/src/lib/design-system/tokens.ts`](file:///c:/Users/dobar/OneDrive/Desktop/Airbnb/Airbnb_clone/frontend/src/lib/design-system/tokens.ts).

### 2.1 Layout Dimensions
```css
--page-max-width:        1280px;  /* Main outer container */
--page-max-width-narrow: 1120px;  /* Compact viewports */
--content-width:         650px;   /* Main content column */
--sidebar-width:         370px;   /* Sticky booking sidebar */
--sidebar-gap:           80px;    /* Gutter between content & sidebar */
--nav-height:            76px;    /* Standard fixed navbar height */
--nav-height-compact:    64px;    /* Scrolled compact navbar height */
```

### 2.2 Section Spacing
```css
--section-spacing-y:      48px;   /* Standard vertical padding between sections */
--section-spacing-mobile: 32px;   /* Mobile vertical padding */
--section-gap:            24px;   /* Default gap between rows/cards */
```

### 2.3 Typography & Font Sizes
Font family is configured via `next/font/google` using **Inter** (Airbnb Circular equivalent), applied via `--font-sans`.

| Token | CSS Variable | Value | Weight | Line Height | Usage |
|---|---|---|---|---|---|
| **h1** | `--text-h1` | `26px` | 600 | `30px` | Listing Title |
| **h2** | `--text-h2` | `22px` | 600 | `26px` | Section Titles |
| **h3** | `--text-h3` | `18px` | 600 | `22px` | Subheadings, Modal categories |
| **h4** | `--text-h4` | `16px` | 600 | `20px` | Card Titles, Host Names |
| **body-lg** | `--text-body-lg` | `16px` | 400 | `24px` | Lead paragraphs, Review text |
| **body** | `--text-body` | `14px` | 400 | `20px` | Default body, amenities, specifications |
| **body-sm** | `--text-body-sm` | `12px` | 400 | `16px` | Fine print, metadata, tags |

### 2.4 Color Palette

| Token Name | CSS Variable | Hex / Value | Description |
|---|---|---|---|
| **Brand Primary** | `--color-brand` | `#FF385C` | Airbnb Rausch signature red |
| **Brand Hover** | `--color-brand-hover` | `#E00B41` | Darkened red for hover states |
| **Brand Active** | `--color-brand-active` | `#D70466` | Deep berry red for active pressed states |
| **Brand Gradient** | `--color-brand-gradient` | `linear-gradient(...)` | `#E61E4D` → `#E31C5F` → `#D70466` |
| **Text Primary** | `--color-text-primary` | `#222222` | High-contrast dark charcoal |
| **Text Muted** | `--color-text-muted` | `#717171` | Secondary descriptions and metadata |
| **Text Subtle** | `--color-text-subtle` | `#B0B0B0` | Placeholder text and borders |
| **Border Default** | `--color-border` | `#DDDDDD` | Default element outline |
| **Border Light** | `--color-border-light` | `#EBEBEB` | Section dividers & light separation |
| **Border Dark** | `--color-border-dark` | `#222222` | Focus rings & dark button borders |
| **Canvas** | `--color-bg-primary` | `#FFFFFF` | Primary white background |
| **Surface** | `--color-bg-secondary` | `#F7F7F7` | Soft gray for cards, tags, search pill |
| **Hover Surface** | `--color-bg-hover` | `#F2F2F2` | Subtle interactive button hover |
| **Modal Overlay** | `--color-modal-overlay` | `rgba(0, 0, 0, 0.6)` | Dimmed backdrop for dialogs |

### 2.5 Button Sizes
```css
--button-height-sm: 32px;  /* Small pills, filter chips, compact buttons */
--button-height-md: 44px;  /* Standard buttons ("Show all ...", "Message host") */
--button-height-lg: 48px;  /* Primary CTAs ("Reserve") */
```

### 2.6 Border Radius Scale
```css
--radius-xs:    4px;     /* Small indicators */
--radius-sm:    8px;     /* Buttons, form inputs, "Show all photos" button */
--radius-md:    12px;    /* Cards, bedroom photos, "Guest favourite" badge */
--radius-lg:    16px;    /* Modal dialogs, booking card, hero grid corners */
--radius-xl:    24px;    /* Meet your host elevated card, search pill */
--radius-full:  9999px;  /* Circular avatars, icon buttons, pill buttons */
```

### 2.7 Image Radii
```css
--radius-image-hero:  16px;  /* Outer corner radius for hero grid */
--radius-image-card:  16px;  /* Nearby listing cards */
--radius-image-bed:   12px;  /* Where you'll sleep bedroom cards */
--radius-image-thumb: 8px;   /* Photo tour thumbnails */
```

### 2.8 Elevation & Shadows
```css
--shadow-sm:       0 1px 2px rgba(0, 0, 0, 0.08);
--shadow-md:       0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
--shadow-card:     0 6px 16px rgba(0, 0, 0, 0.12); /* Booking Card */
--shadow-elevated: 0 6px 20px rgba(0, 0, 0, 0.12); /* Meet Your Host Card */
--shadow-modal:    0 8px 28px rgba(0, 0, 0, 0.28); /* Dialog Modals */
```

### 2.9 Icon Sizing
```css
--icon-sm: 14px;  /* Ratings stars, chevrons, mini bullets */
--icon-md: 18px;  /* Navbar actions, share/save, close button */
--icon-lg: 24px;  /* Amenities, key highlights, feature cards */
--icon-xl: 32px;  /* Host credentials, header marks */
```

---

## 3. Reusable Primitives

All primitives are located in `frontend/src/components/ui/` and barrel-exported via `frontend/src/components/ui/index.ts`.

### 3.1 Button
Clean, accessible button supporting Airbnb brand styles, outlines, and loading states.
- **File**: [`frontend/src/components/ui/Button.tsx`](file:///c:/Users/dobar/OneDrive/Desktop/Airbnb/Airbnb_clone/frontend/src/components/ui/Button.tsx)
- **Variants**: `'brand' | 'brand-gradient' | 'outline' | 'secondary' | 'ghost' | 'link'`
- **Sizes**: `'sm' | 'md' | 'lg'`
- **Usage Example**:
```tsx
import { Button } from '@/components/ui'

// Primary Reserve CTA
<Button variant="brand" size="lg" fullWidth>
  Reserve
</Button>

// Outline "Show all" Button
<Button variant="outline" size="md">
  Show all 50 amenities
</Button>

// Secondary "Message host"
<Button variant="secondary" size="md">
  Message host
</Button>
```

### 3.2 IconButton
Enforces accessible `aria-label` for icon-only triggers.
- **File**: [`frontend/src/components/ui/IconButton.tsx`](file:///c:/Users/dobar/OneDrive/Desktop/Airbnb/Airbnb_clone/frontend/src/components/ui/IconButton.tsx)
- **Variants**: `'ghost' | 'outline' | 'filled' | 'floating'`
- **Sizes**: `'sm' (32px) | 'md' (40px) | 'lg' (48px)'`
- **Usage Example**:
```tsx
import { IconButton } from '@/components/ui'
import { ChevronLeft, Share } from 'lucide-react'

<IconButton
  icon={<Share size={18} />}
  aria-label="Share listing"
  variant="ghost"
/>

<IconButton
  icon={<ChevronLeft size={16} />}
  aria-label="Previous month"
  variant="outline"
  size="sm"
/>
```

### 3.3 Divider
Consistent 1px separation lines across the layout.
- **File**: [`frontend/src/components/ui/Divider.tsx`](file:///c:/Users/dobar/OneDrive/Desktop/Airbnb/Airbnb_clone/frontend/src/components/ui/Divider.tsx)
- **Orientation**: `'horizontal' | 'vertical'`
- **Spacing**: `'none' | 'sm' | 'md' | 'lg' | 'section'`
- **Colors**: `'subtle' (#EBEBEB) | 'default' (#DDDDDD) | 'dark' (#222222)`
- **Usage Example**:
```tsx
import { Divider } from '@/components/ui'

<Divider spacing="section" color="subtle" />
<Divider orientation="vertical" spacing="md" />
```

### 3.4 Section
Semantic `<section>` wrapper ensuring consistent padding, bottom borders, and scroll navigation offsets (`scroll-mt-24`).
- **File**: [`frontend/src/components/ui/Section.tsx`](file:///c:/Users/dobar/OneDrive/Desktop/Airbnb/Airbnb_clone/frontend/src/components/ui/Section.tsx)
- **Props**: `id`, `title`, `subtitle`, `action`, `divider`, `padding`
- **Usage Example**:
```tsx
import { Section } from '@/components/ui'

<Section
  id="amenities"
  title="What this place offers"
  divider="bottom"
>
  {/* Section content */}
</Section>
```

### 3.5 Modal
Accessible dialog primitive matching Airbnb specifications.
- **File**: [`frontend/src/components/ui/Modal.tsx`](file:///c:/Users/dobar/OneDrive/Desktop/Airbnb/Airbnb_clone/frontend/src/components/ui/Modal.tsx)
- **Features**:
  - `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
  - Body scroll lock during open state
  - Escape key closing & backdrop click detection
  - Built-in focus trap
  - Close button in top-left or top-right
- **Sizes**: `'sm' (480px) | 'md' (780px) | 'lg' (896px) | 'full'`
- **Usage Example**:
```tsx
import { Modal } from '@/components/ui'

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="What this place offers"
  size="md"
  closePosition="left"
>
  <div className="space-y-6">...</div>
</Modal>
```

### 3.6 Avatar
Circular profile image with initials fallback, size presets, and verified badge support.
- **File**: [`frontend/src/components/ui/Avatar.tsx`](file:///c:/Users/dobar/OneDrive/Desktop/Airbnb/Airbnb_clone/frontend/src/components/ui/Avatar.tsx)
- **Sizes**: `'xs' (24px) | 'sm' (32px) | 'md' (40px) | 'lg' (56px) | 'xl' (96px)`
- **Features**: `isVerified` checkmark badge overlay (as seen on Mirashya Homes card).
- **Usage Example**:
```tsx
import { Avatar } from '@/components/ui'

// Reviewer Avatar
<Avatar name="Samiksha" size="md" />

// Host Avatar with Verified Badge (image27.png)
<Avatar
  src={host.image}
  name="Mirashya Homes"
  size="xl"
  isVerified={true}
/>
```

### 3.7 Rating
Precise SVG-based star rating replacing raw text `★` characters.
- **File**: [`frontend/src/components/ui/Rating.tsx`](file:///c:/Users/dobar/OneDrive/Desktop/Airbnb/Airbnb_clone/frontend/src/components/ui/Rating.tsx)
- **Variants**:
  - `inline`: `★ 4.95 · 19 reviews`
  - `stars`: 5 solid black star row (review cards)
  - `badge`: Prominent score with star row underneath (Guest favourite card)
  - `bar`: Percentage distribution bar
- **Usage Example**:
```tsx
import { Rating } from '@/components/ui'

<Rating score={4.95} count={19} variant="inline" />
<Rating variant="stars" maxStars={5} size="sm" />
<Rating score={4.95} variant="badge" />
<Rating variant="bar" label="5" percentage={95} />
```

### 3.8 Badge
Visual tags including the distinctive Airbnb "Guest favourite" badge card.
- **File**: [`frontend/src/components/ui/Badge.tsx`](file:///c:/Users/dobar/OneDrive/Desktop/Airbnb/Airbnb_clone/frontend/src/components/ui/Badge.tsx)
- **Variants**: `'guest-favourite' | 'pill' | 'discount' | 'status'`
- **Usage Example**:
```tsx
import { Badge, Button } from '@/components/ui'

// Guest favourite badge card (image14.png)
<Badge
  variant="guest-favourite"
  score={4.95}
  reviewsCount={19}
/>

// Cancellation policy notice
<Badge variant="pill">
  Free cancellation before 17 October
</Badge>

// Promo banner (image1.png)
<Badge
  variant="discount"
  action={<Button variant="outline" size="sm">Claim</Button>}
>
  Get 10% off your next stay.
</Badge>
```

### 3.9 ImageContainer
Wrapper around `next/image` with skeleton placeholder, aspect ratios, and radius tokens.
- **File**: [`frontend/src/components/ui/ImageContainer.tsx`](file:///c:/Users/dobar/OneDrive/Desktop/Airbnb/Airbnb_clone/frontend/src/components/ui/ImageContainer.tsx)
- **Aspect Ratios**: `'photo' (4:3) | 'square' (1:1) | 'video' (16:9) | 'hero' (16:10) | 'fill'`
- **Radius Presets**: `'sm' | 'md' | 'lg' | 'hero-left' | 'hero-tr' | 'hero-br' | 'full'`
- **Usage Example**:
```tsx
import { ImageContainer } from '@/components/ui'

<ImageContainer
  src="/photos/bedroom.jpg"
  alt="Master Bedroom"
  aspectRatio="photo"
  radius="md"
  hoverZoom
/>
```

---

## 4. Architectural Rules for Section Rebuilding

1. **No Magic Numbers**:
   - Use tokens (`var(--color-brand)`, `var(--radius-md)`, `tokens.layout.sidebarWidth`) instead of hardcoded hex values or arbitrary pixels.
2. **Scroll Offset Anchors**:
   - Every major section wrapped with `<Section id="...">` automatically applies `scroll-mt-24` so it aligns properly below the compact topbar.
3. **Typography Uniformity**:
   - Use `Inter` font consistently. Section titles must use `text-[22px] font-semibold`.
4. **Interactive States**:
   - All clickable elements must define clear `:hover`, `:active`, and `:focus-visible` states.
5. **No Layout Shifts**:
   - Images must use `ImageContainer` with predefined aspect ratios and skeleton placeholders.

---

## 5. Verification & Health Checklist

- [x] Inter Google Font loaded and assigned to `body`
- [x] CSS custom properties defined in `globals.css`
- [x] TypeScript tokens file in `frontend/src/lib/design-system/tokens.ts`
- [x] 9 reusable UI primitives built and exported from `components/ui`
- [x] Backward compatibility preserved for existing listing page
- [x] Frontend compiles and runs with zero TypeScript/Turbopack errors
