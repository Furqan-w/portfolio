# Implementation Plan: GitHub Pages Deployment

## 1. Overview
The goal is to enable automated deployment of Furqan Waris's portfolio to GitHub Pages from the repository `Furqan-w/portfolio`.

Site Target URL: `https://furqan-w.github.io/portfolio/`

---

## 2. Key Challenges & Solutions

| Challenge | Solution |
| :--- | :--- |
| **Static Hosting Requirement** | GitHub Pages only serves static assets. Configure Next.js for static export (`output: 'export'`). |
| **Subpath Asset Resolution** | The site is hosted under `/portfolio/` instead of domain root. Configure `basePath` and `assetPrefix` in production. |
| **Jekyll Ignoring `_next/`** | GitHub Pages runs Jekyll by default, ignoring folders prefixed with `_`. We must include a `.nojekyll` file or upload via GitHub Pages Actions. |
| **Image Resolution in `<img>`** | Cover image URLs in `portfolioData.ts` start with `/projects/...`. Update `ProjectCard.tsx` to prepend `basePath` in production so images don't 404. |
| **Next.js 16 Config Compatibility** | Remove server-only experimental flags like `partialPrefetching` when using `output: 'export'`. Set `images.unoptimized: true`. |

---

## 3. Step-by-Step Implementation Steps

### Step 1: Update `next.config.ts`
- Set `output: 'export'`.
- Set `images: { unoptimized: true }`.
- Set conditional `basePath` for production (`/portfolio`).
- Expose `NEXT_PUBLIC_BASE_PATH` in `env` for client-side asset path resolution.

### Step 2: Handle Asset Paths in Components
- In `src/components/ProjectCard.tsx`, ensure `project.coverImage` prepends `process.env.NEXT_PUBLIC_BASE_PATH || ''`.

### Step 3: Create GitHub Actions Workflow
- Create `.github/workflows/deploy.yml` configured to:
  - Trigger on push to `main` (or manual dispatch).
  - Check out repository.
  - Setup Node.js with caching (`npm`).
  - Run `npm ci` and `npm run build`.
  - Add `.nojekyll` to the `out` directory.
  - Upload artifact via `actions/upload-pages-artifact@v3`.
  - Deploy to GitHub Pages via `actions/deploy-pages@v4`.

### Step 4: Verification & Test Build
- Run `npm run build` locally to verify:
  - Clean static export into `out/` folder.
  - No routing or build errors.
  - Output files and assets are properly generated.

---

## 4. User Action Required in GitHub Repository Settings
Once pushed to GitHub:
1. Go to repository **Settings** -> **Pages**.
2. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
