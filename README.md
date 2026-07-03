# Sri Natesh Computer Center (SNIT) — Website

A premium, modern, SEO-optimized website for **Sri Natesh Computer Center (SNIT)**, Mulbagal, Karnataka — built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Firebase Firestore** for enquiry storage.

> Tagline: *"Learning Never Exhausts the Mind."*

---

## ✨ Features

- Animated hero with typing effect, ambient particles, and course-lab illustration
- 8 fully-built pages: Home, About, Courses, Abacus Academy, Admissions, Gallery, Testimonials, Contact
- 17+ real course listings across Foundation, Diploma, Office & Accounts, Design & Media, Programming, and Distance Education
- Dedicated **Abacus Academy** page with benefits, weekend schedule, and its own admission form
- Enquiry forms wired to **Firebase Firestore** (no admin login needed — view submissions in the Firebase Console)
- Course enquiry popup modal on every course card
- Testimonials slider + full testimonials page
- Gallery with lightbox
- FAQ accordions
- Floating WhatsApp button, floating Call button, Back-to-top button
- Sticky navbar, Dark/Light theme toggle (persisted)
- SEO: metadata, Open Graph, Twitter cards, JSON-LD (`EducationalOrganization` schema), dynamic `sitemap.xml`, `robots.txt`
- Downloadable PDF brochure (`public/SNIT-Brochure.pdf`)
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
├── components/                # Navbar, Footer, Hero, forms, sliders, etc.
├── lib/
│   ├── site.ts                # Central business info (name, phones, address…)
│   ├── courses.ts             # Course catalog data
│   └── firebase.ts            # Firebase init + submitEnquiry()
├── public/
│   ├── images/logo.png        # SNIT seal logo
│   ├── SNIT-Brochure.pdf
│   └── robots.txt
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## 🚀 Getting Started (Local Development)

**Requirements:** Node.js 18.18+ (Node 20 LTS recommended) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables and fill in your Firebase config
cp .env.local.example .env.local

# 3. Run the dev server
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

Almost everything editable lives in two files:

- **`lib/site.ts`** — business name, tagline, address, phone numbers, emails, recognitions, stats, social links, Google Maps link.
- **`lib/courses.ts`** — the full course catalog (add/edit/remove courses here; they automatically appear on the Home and Courses pages).

Testimonials live in `components/TestimonialsSlider.tsx` (`TESTIMONIALS` array). Gallery images are defined in `app/gallery/page.tsx` and `app/abacus-academy/page.tsx` as styled placeholder tiles — replace the `gradient` field with a real `<Image src="..." />` once you have real photography (see note below).

### Replacing gallery placeholders with real photos
The gallery currently uses CSS gradient tiles as stand-ins for real photography (no stock photos were available at build time). To use real photos:
1. Add images to `public/images/gallery/`.
2. In `components/Gallery.tsx`, swap the `style={{ background: item.gradient }}` div for a Next.js `<Image>` pointing at your photo.

---

## 🔥 Firebase Setup (Enquiry Storage)

Enquiry form submissions are written to a Firestore collection called `enquiries` — **no login or admin panel is required**; you view submissions directly in the Firebase Console. Full step-by-step instructions are in **[FIREBASE_SETUP.md](./FIREBASE_SETUP.md)**.

---

## 🌐 Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for step-by-step guides for Vercel, Netlify, and a static-export option.

---

## 📈 SEO Checklist (already implemented)

- [x] Unique `<title>` and meta description per page
- [x] Open Graph + Twitter card tags
- [x] `EducationalOrganization` JSON-LD structured data
- [x] `robots.txt` + dynamic `sitemap.xml`
- [x] Semantic headings, alt text on images, accessible focus states
- [x] Fast fonts via `next/font` (no layout shift, self-hosted)

Once deployed, submit your sitemap (`https://yourdomain.com/sitemap.xml`) in **Google Search Console**.

---

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase Firestore](https://firebase.google.com/docs/firestore) (client SDK)
- [lucide-react](https://lucide.dev/) icons
- Fonts: Fraunces (display) + Inter (body) + JetBrains Mono (accents) via `next/font/google`

---

## 📄 License

Built for the exclusive use of Sri Natesh Computer Center (SNIT), Mulbagal. All business content, branding, and copy belong to the business owner.
