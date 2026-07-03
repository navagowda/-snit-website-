# Sri Natesh Computer Center (SNIT) — Website

A premium, modern, SEO-optimized website for **Sri Natesh Computer Center (SNIT)**, Mulbagal, Karnataka — built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

> Tagline: *"Learning Never Exhausts the Mind."*

---

## ✨ Features

- Animated hero with typing effect, ambient particles, and real computer-lab photography
- 8 fully-built pages: Home, About, Courses, Abacus Academy, Admissions, Gallery, Testimonials, Contact
- 20 real course listings across Foundation, Diploma, Office & Accounts, Design & Media, Teacher Training, Abacus, and Distance Education — each with eligibility criteria
- Dedicated **Abacus Academy** page with benefits, weekend schedule, and its own real student photo gallery
- Enquiry forms that open **WhatsApp** with a pre-filled message (name, phone, email, course, notes) sent straight to the center's number — no backend or database required
- Course enquiry popup modal on every course card
- **Real photo gallery** (~40 photos) across Building, Computer Lab, Classroom, Students, Abacus, Events, Certificates and general Gallery categories, with category filter tabs and a keyboard-navigable lightbox
- Founder & Director section (About + Home) with a real photo
- Official SNIT seal logo and the real RCSS Bangalore recognition logo
- Downloadable PDF brochure (`public/SNIT-Brochure.pdf`), combined from the 5 real brochure page images
- Testimonials slider + full testimonials page
- FAQ accordions
- Floating WhatsApp button, floating Call button, Back-to-top button
- Sticky navbar, Dark/Light theme toggle (persisted)
- SEO: metadata, Open Graph, Twitter cards, JSON-LD (`EducationalOrganization` schema), dynamic `sitemap.xml`, `robots.txt`
- Fully responsive, keyboard-accessible, respects `prefers-reduced-motion`

---

## 🗂 Project Structure

```
snit-website/
├── app/
│   ├── layout.tsx            # Root layout, fonts, metadata, JSON-LD
│   ├── globals.css           # Tailwind base + design system utilities
│   ├── sitemap.ts            # Dynamic sitemap.xml
│   ├── page.tsx              # Home
│   ├── about/page.tsx
│   ├── courses/page.tsx
│   ├── abacus-academy/page.tsx
│   ├── admissions/page.tsx
│   ├── gallery/page.tsx
│   ├── testimonials/page.tsx
│   └── contact/page.tsx
├── components/                # Navbar, Footer, Hero, Gallery, forms, sliders, etc.
├── lib/
│   ├── site.ts                 # Central business info (name, phones, address…)
│   ├── courses.ts              # Course catalog data (20 courses)
│   └── gallery.ts              # Real photo manifest (paths, titles, categories, dimensions)
├── public/
│   ├── images/                 # Logo, RCSS logo, founder photos, OG share image
│   ├── assets/images/          # Real center photography (webp, full + thumbnail)
│   ├── brochures/               # Original 5 brochure page images
│   ├── SNIT-Brochure.pdf        # Combined downloadable brochure
│   └── robots.txt
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## 🚀 Getting Started (Local Development)

**Requirements:** Node.js 18.18+ (Node 20 LTS recommended) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create a production build locally:

```bash
npm run build
npm run start
```

---

## 🔧 Editing Business Content

- **`lib/site.ts`** — business name, tagline, address, phone numbers, emails, recognitions, stats, social links, Google Maps link.
- **`lib/courses.ts`** — the full course catalog. Add/edit/remove courses here; they automatically appear on the Home and Courses pages.
- **`lib/gallery.ts`** — the photo manifest. To add more real photos: drop new `.webp` files (plus a `-thumb.webp` version) into `public/assets/images/`, then add an entry here with `category`, `src`, `thumb`, `title`, `width`, `height`. New categories automatically get their own filter tab on the Gallery page.
- Testimonials live in `components/TestimonialsSlider.tsx` (`TESTIMONIALS` array).

### Enquiry form behavior
Every enquiry form on the site (`components/EnquiryForm.tsx`) opens WhatsApp with a pre-filled message addressed to the number in `lib/site.ts` (`whatsapp` field) — nothing is stored in a database. If you'd rather capture enquiries in a spreadsheet or CRM, that would need a small backend change (e.g. re-adding Firebase — see `FIREBASE_SETUP.md` for a ready-made guide, since the code for it, `lib/firebase.ts`, is still in the project but currently unused).

### Replacing or adding photos
Real photography is already wired in for the Hero, About (building + founder), Gallery, and Abacus Academy pages. To swap or add photos, see the `lib/gallery.ts` instructions above.

---

## 🌐 Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for step-by-step guides for Vercel, Netlify, and a static-export option.

---

## 📈 SEO Checklist (already implemented)

- [x] Unique `<title>` and meta description per page
- [x] Open Graph + Twitter card tags (opaque share image at `public/images/og-image.png`)
- [x] `EducationalOrganization` JSON-LD structured data
- [x] `robots.txt` + dynamic `sitemap.xml`
- [x] Semantic headings, alt text on images, accessible focus states
- [x] Fast fonts via `next/font` (no layout shift, self-hosted)

Once deployed, submit your sitemap (`https://yourdomain.com/sitemap.xml`) in **Google Search Console**.

---

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) icons
- Fonts: Fraunces (display) + Inter (body) + JetBrains Mono (accents) via `next/font/google`

---

## 📄 License

Built for the exclusive use of Sri Natesh Computer Center (SNIT), Mulbagal. All business content, branding, and copy belong to the business owner.
