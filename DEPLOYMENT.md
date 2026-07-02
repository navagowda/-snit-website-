# Deployment Guide

This project is a standard Next.js 14 App Router app and deploys cleanly to **Vercel** (recommended) or **Netlify**. A note on GitHub Pages is included, since this project uses server-rendered routes (forms, dynamic sitemap) that GitHub Pages' static-only hosting cannot run natively.

---

## Option A — Vercel (Recommended)

Vercel is built by the makers of Next.js and requires zero configuration.

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — leave build settings as default:
   - **Build command:** `next build`
   - **Output directory:** `.next` (auto)
4. Under **Environment Variables**, add the six Firebase variables from `.env.local.example` (see `FIREBASE_SETUP.md`), plus:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```
5. Click **Deploy**. Your site will be live at `your-project.vercel.app` within a minute.
6. To use your own domain: **Project → Settings → Domains** → add your domain and follow the DNS instructions (usually a CNAME or A record).

---

## Option B — Netlify

1. Push this project to GitHub.
2. Go to [app.netlify.com](https://app.netlify.com/) → **Add new site → Import an existing project**.
3. Select your repository. Netlify will detect Next.js and use the official Next.js Runtime plugin automatically. If prompted, confirm:
   - **Build command:** `next build`
   - **Publish directory:** `.next`
4. Under **Site settings → Environment variables**, add the same variables as in the Vercel step above.
5. Click **Deploy site**.
6. Add a custom domain under **Domain management**.

---

## Option C — GitHub Pages (Static Export)

GitHub Pages only serves static files, so the Firebase enquiry forms, dynamic sitemap route, and any server features must be replaced with static equivalents to use this option:

1. In `next.config.mjs`, add:
   ```js
   const nextConfig = {
     output: "export",
     images: { unoptimized: true },
   };
   ```
2. Replace `app/sitemap.ts` with a static `public/sitemap.xml` file, since dynamic routes aren't supported in static export.
3. Run:
   ```bash
   npm run build
   ```
   This generates a static `out/` folder.
4. Push the contents of `out/` to a `gh-pages` branch (or use the `gh-pages` npm package / a GitHub Actions workflow) and enable GitHub Pages on that branch in your repo settings.

**Note:** the Firebase Firestore enquiry forms still work fine in a static export (Firestore writes happen client-side via JavaScript), so this option is fully usable — only the *dynamic* `sitemap.ts` needs the static replacement above.

---

## Post-Deployment Checklist

- [ ] Verify all forms submit successfully and appear in Firebase Console
- [ ] Test the WhatsApp and Call floating buttons on a real mobile device
- [ ] Confirm `https://your-domain.com/sitemap.xml` and `/robots.txt` load correctly
- [ ] Submit the sitemap URL in [Google Search Console](https://search.google.com/search-console)
- [ ] Update `NEXT_PUBLIC_SITE_URL` to match your final domain (affects canonical URLs & Open Graph tags)
- [ ] Replace placeholder gallery tiles with real photography (see README)
- [ ] Run a [PageSpeed Insights](https://pagespeed.web.dev/) check on the live URL
