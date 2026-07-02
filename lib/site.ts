export const SITE = {
  name: "Sri Natesh Computer Center",
  shortName: "SNIT",
  tagline: "Learning Never Exhausts the Mind.",
  director: "Mr. Natesh Gowda",
  description:
    "Sri Natesh Computer Center (SNIT) in Mulbagal, Karnataka offers career-focused computer education including CIT, DIT, DCA, PGDCA, Tally, Hardware, Multimedia, Abacus Academy and teacher training courses. Recognized by RCSS Bangalore, Government of Karnataka and Skill India.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.snitmulbagal.in",
  address: {
    line1: "Thyagaraja Colony",
    city: "Mulbagal",
    state: "Karnataka",
    pincode: "563131",
    full: "Thyagaraja Colony, Mulbagal, Karnataka - 563131",
  },
  phones: ["9739266491", "9035590734", "6360379274"],
  primaryPhone: "9739266491",
  whatsapp: "919739266491",
  emails: ["reachnatesh22@gmail.com", "nateshcomputer@gmail.com"],
  recognitions: ["RCSS Bangalore", "Government of Karnataka", "Skill India"],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/sri_natesh_computer_center?igsh=MXVhNHA2dzhjMXV1cw==",
    youtube: "",
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=Sri+Natesh+Computer+Center+Thyagaraja+Colony+Mulbagal+Karnataka+563131&output=embed",
  mapLink: "https://share.google/0rVgg6jGRrsZAGQZp",
  stats: [
    { label: "Years of Training Excellence", value: "15+" },
    { label: "Students Trained", value: "6000+" },
    { label: "Courses Offered", value: "20+" },
    { label: "Recognized Programs", value: "RCSS" },
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
