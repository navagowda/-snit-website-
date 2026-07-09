import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CallFloat from "@/components/CallFloat";
import BackToTop from "@/components/BackToTop";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jbmono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} (SNIT) — Computer Training Institute in Mulbagal, Karnataka`,
    template: `%s | ${SITE.shortName} — Sri Natesh Computer Center`,
  },
  description: SITE.description,
  keywords: [
    "computer institute Mulbagal",
    "SNIT Mulbagal",
    "Sri Natesh Computer Center",
    "DCA ADCA PGDCA Mulbagal",
    "Tally GST course Mulbagal",
    "computer classes Karnataka",
    "abacus classes Mulbagal",
    "Python course Mulbagal",
    "web designing course Mulbagal",
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} (SNIT) — Computer Training Institute in Mulbagal, Karnataka`,
    description: SITE.description,
    images: [{ url: "/images/og-image.png", width: 1200, height: 1200, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} (SNIT)`,
    description: SITE.description,
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/images/snit-logo-official.png",
    apple: "/images/snit-logo-official.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE.name,
    alternateName: SITE.shortName,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/images/snit-logo-official.png`,
    image: `${SITE.url}/images/snit-logo-official.png`,
    telephone: SITE.phones.map((p) => `+91${p}`),
    email: SITE.emails,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.pincode,
      addressCountry: "IN",
    },
    slogan: SITE.tagline,
    sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.youtube],
  };

  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${inter.variable} ${jbmono.variable} font-body`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
          <CallFloat />
          <BackToTop />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
