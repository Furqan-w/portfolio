# Implementation Plan: Replace Default Tab Favicon with Custom FU Monogram Logo

## 1. Requirement
The user requested replacing the default browser tab icon (which currently shows the fallback globe icon on GitHub Pages / dev) with their custom **FU** monogram logo.

---

## 2. Planned Changes

### 1. Create `src/app/icon.svg` and `public/icon.svg`
Create the SVG favicon using the user's custom monogram logo:
- Include `@media (prefers-color-scheme: dark)` styling so the logo stroke is visible in both dark browser tabs (like the user's browser) and light browser tabs:
  - Dark tabs: Crisp white/light-zinc `#F4F4F5`
  - Light tabs: Sleek dark `#18181B`
- Place in `src/app/icon.svg` (Next.js built-in metadata icon) and `public/icon.svg`.

### 2. Update `src/app/layout.tsx`
- Update `metadata.icons` to point to the new SVG icon with `process.env.NEXT_PUBLIC_BASE_PATH`:
  ```ts
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/icon.svg`,
  },
  ```
  This ensures that both locally on `http://localhost:3000` and on GitHub Pages (`/portfolio/`), the browser tab icon resolves without 404s.

---

## 3. Verification
- Verify `npm run build` succeeds with zero errors.
- Verify generated `out/index.html` has `<link rel="icon" ...>` pointing to the custom icon.
