---
name: airbnb-clone-assistant
description: Specialized AI assistant for maintaining and extending the Airbnb clone React application.
---

# Airbnb Clone Development Skill

This skill configures the AI to assist with the Airbnb Clone codebase, providing context on architecture, styling guidelines, and component patterns.

## Architecture Guidelines
- **Framework:** React + Vite
- **Data Layer:** Static JSON (`src/data/listing.json`) is the single source of truth for property content.
- **Image Handling:** Use `imageProxy.js` to serve images directly from the Vercel CDN (`https://airbnb-clone-umber-two.vercel.app/assets/...`) to avoid local rate-limiting issues.
- **State Management:** All complex modal/overlay state (PhotoTour, Lightbox, Amenities) is lifted to `App.jsx`.

## Styling Guidelines (Pixel-Perfect Adherence)
- **Vanilla CSS:** Use plain CSS modules (`Component.css`) imported into standard JSX files. Avoid Tailwind or CSS-in-JS.
- **Design Tokens:** Always use CSS variables from `src/index.css` (e.g., `var(--text-primary)`, `var(--line-soft)`, `var(--radius-md)`) instead of hardcoding hex values or pixel border-radii.
- **Typography:** The app uses Google Fonts `Plus Jakarta Sans` to approximate Airbnb's Circular font.
- **BEM Convention:** Use a simplified BEM-like naming convention for components (e.g., `.bw`, `.bw__discount`, `.bw__discount-title`).

## Component Structure
1. Components MUST be responsive and adaptive.
2. SVGs must be extracted into `src/components/Icons.jsx` and imported to maintain clean JSX.
3. Use Semantic HTML (`<section>`, `<aside>`, `<nav>`, `<main>`) for accessibility.
4. Ensure interactive elements (`<button>`, `<a>`) have clear focus states and `aria-label`s where appropriate.

## Example Usage
When asked to "Add a new feature to the booking widget", the AI should:
1. Check `src/data/listing.json` to ensure the required data fields exist.
2. Modify `src/components/BookingWidget/BookingWidget.jsx` and `.css` adhering to BEM and existing design tokens.
3. Test layout changes across desktop viewport sizes (mobile is out of scope).
