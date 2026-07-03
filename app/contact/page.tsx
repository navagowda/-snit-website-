import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Section from "@/components/Section";
import EnquiryForm from "@/components/EnquiryForm";
import MapEmbed from "@/components/MapEmbed";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sri Natesh Computer Center (SNIT), Thyagaraja Colony, Mulbagal, Karnataka - 563131. Call, WhatsApp, email, or visit our center directly.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-radial py-20 text-center text-cream">
        <div className="container-snit">
          <span className="eyebrow rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-gold">Contact</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance font-display text-4xl font-semibold sm:text-5xl">
            We&apos;d love to hear from you
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-cream/70">
            Have a question about a course, timings, or fees? Reach us directly — or fill the form below.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="card flex items-start gap-4 p-6">
              <MapPin className="mt-1 shrink-0 text-gold-deep dark:text-gold" size={22} />
              <div>
                <p className="font-semibold text-navy-900 dark:text-cream">Visit Us</p>
                <p className="mt-1 text-sm text-navy-600 dark:text-cream/70">{SITE.address.full}</p>
              </div>
            </div>
            <div className="card flex items-start gap-4 p-6">
              <Phone className="mt-1 shrink-0 text-gold-deep dark:text-gold" size={22} />
              <div>
                <p className="font-semibold text-navy-900 dark:text-cream">Call Us</p>
                {SITE.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="mt-1 block text-sm text-navy-600 hover:text-gold-deep dark:text-cream/70 dark:hover:text-gold">
                    +91 {p}
                  </a>
                ))}
              </div>
            </div>
            <div className="card flex items-start gap-4 p-6">
              <Mail className="mt-1 shrink-0 text-gold-deep dark:text-gold" size={22} />
              <div>
                <p className="font-semibold text-navy-900 dark:text-cream">Email Us</p>
                {SITE.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="mt-1 block break-all text-sm text-navy-600 hover:text-gold-deep dark:text-cream/70 dark:hover:text-gold">
                    {e}
                  </a>
                ))}
              </div>
            </div>
            <div className="card flex items-start gap-4 p-6">
              <Clock className="mt-1 shrink-0 text-gold-deep dark:text-gold" size={22} />
              <div>
                <p className="font-semibold text-navy-900 dark:text-cream">Center Hours</p>
                <p className="mt-1 text-sm text-navy-600 dark:text-cream/70">Mon – Sat: 9:00 AM – 7:30 PM</p>
                <p className="text-sm text-navy-600 dark:text-cream/70">Sunday: Abacus Academy batch only</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-leaf w-full"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>

          <div className="space-y-6">
            <div className="card p-8">
              <h2 className="mb-1 font-display text-xl font-semibold text-navy-900 dark:text-cream">Send an Enquiry</h2>
              <p className="mb-5 text-sm text-navy-500 dark:text-cream/60">We usually respond within one business day.</p>
              <EnquiryForm source="contact-page" />
            </div>
            <MapEmbed />
          </div>
        </div>
      </Section>
    </>
  );
}
