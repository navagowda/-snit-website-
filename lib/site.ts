export const SITE = {
  name: "Sri Natesh Computer Center",
  shortName: "SNIT",
  tagline: "Learning Never Exhausts the Mind.",
  description:
    "Sri Natesh Computer Center (SNIT) in Mulbagal, Karnataka offers career-focused computer education — DCA, ADCA, PGDCA, Tally with GST, Hardware, Web Designing, Python, Abacus and more. Recognized by RCSS Bangalore, Government of Karnataka and Skill India.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.snitmulbagal.in",
  address: {
    line1: "Thygaraja Colony",
    city: "Mulbagal",
    state: "Karnataka",
    pincode: "563131",
    full: "Thygaraja Colony, Mulbagal, Karnataka - 563131",
  },
  phones: ["9739266491", "9035590734", "6360379274"],
  primaryPhone: "9739266491",
  whatsapp: "919739266491",
  emails: ["reachnatesh22@gmail.com", "nateshcomputer@gmail.com"],
  recognitions: ["RCSS Bangalore", "Government of Karnataka", "Skill India"],
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=Mulbagal,+Karnataka+563131&output=embed",
  mapLink: "https://maps.google.com/?q=Thygaraja+Colony+Mulbagal+Karnataka+563131",
  stats: [
    { label: "Years of Training Excellence", value: "15+" },
    { label: "Students Trained", value: "6000+" },
    { label: "Courses Offered", value: "20+" },
    { label: "Placement & Guidance Support", value: "100%" },
  ],
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/abacus-academy", label: "Abacus Academy" },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];
