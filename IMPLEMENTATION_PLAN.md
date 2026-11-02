# Implementation Plan: Connect Resume Download Button to PDF

## 1. Overview
The user provided their actual resume PDF at `public/Furqan_resume.pdf`. The task is to update the download button in the portfolio so clicking it directly downloads or opens this PDF file.

---

## 2. Proposed Changes

### File: `src/components/SinglePageModal.tsx`
- **Location**: Line 231-237 (in the `activeItem.id === "resume"` section).
- **Current Behavior**: A `<button>` that triggers `window.print()` with label "Print / Save PDF".
- **New Behavior**: An `<a>` anchor tag:
  - `href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Furqan_resume.pdf`}`
  - `download="Furqan_resume.pdf"`
  - `target="_blank"`
  - `rel="noopener noreferrer"`
  - Label: `Download Resume` (with `<Download />` icon).
  - Handles the GitHub Pages `basePath` automatically both locally and in production (`/portfolio/Furqan_resume.pdf`).

---

## 3. Verification Steps
- Verify `public/Furqan_resume.pdf` is present and accessible.
- Verify `SinglePageModal.tsx` renders valid semantic JSX without typescript/lint errors.
- Test static build (`npm run build`) to ensure export includes `Furqan_resume.pdf` in `out/`.
