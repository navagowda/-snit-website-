export type Course = {
  slug: string;
  name: string;
  category: "Foundation" | "Diploma" | "Office & Accounts" | "Design & Media" | "Programming" | "Distance Education";
  duration: string;
  summary: string;
  highlights: string[];
};

export const COURSES: Course[] = [
  {
    slug: "basic-computer",
    name: "Basic Computer Course",
    category: "Foundation",
    duration: "2 Months",
    summary:
      "A first step into computing — operating systems, MS Office, internet and email, built for absolute beginners.",
    highlights: ["Windows & File Management", "MS Word, Excel, PowerPoint", "Internet & Email", "Typing Basics"],
  },
  {
    slug: "cit",
    name: "CIT — Certificate in Information Technology",
    category: "Foundation",
    duration: "3 Months",
    summary: "A certificate-level IT foundation course covering office tools, internet skills and basic troubleshooting.",
    highlights: ["Office Applications", "Internet Fundamentals", "PC Troubleshooting Basics", "Certificate on Completion"],
  },
  {
    slug: "dca",
    name: "DCA — Diploma in Computer Applications",
    category: "Diploma",
    duration: "6 Months",
    summary: "A structured diploma covering office productivity, internet, and an introduction to accounting and DTP.",
    highlights: ["MS Office Suite", "Tally Basics", "Internet & Email", "DTP Introduction"],
  },
  {
    slug: "adca",
    name: "ADCA — Advanced Diploma in Computer Applications",
    category: "Diploma",
    duration: "1 Year",
    summary: "A career-oriented advanced diploma combining office tools, accounting, DTP, and web basics for job readiness.",
    highlights: ["Advanced MS Office", "Tally with GST", "DTP & Web Basics", "Project & Assessment"],
  },
  {
    slug: "pgdca",
    name: "PGDCA — Post Graduate Diploma in Computer Applications",
    category: "Diploma",
    duration: "1 Year",
    summary: "A postgraduate-level diploma for graduates seeking IT-enabled roles, covering programming and applications.",
    highlights: ["Programming Fundamentals", "Database Basics", "Office & Web Applications", "Industry-Ready Projects"],
  },
  {
    slug: "dtp",
    name: "DTP — Desktop Publishing",
    category: "Design & Media",
    duration: "2 Months",
    summary: "Hands-on training in page layout and print design tools used by publishers and print shops.",
    highlights: ["Page Layout Design", "Photo Editing Basics", "Print-Ready Output", "Practical Projects"],
  },
  {
    slug: "tally-gst",
    name: "Tally with GST",
    category: "Office & Accounts",
    duration: "2 Months",
    summary: "Practical accounting on Tally Prime with GST billing, returns, and real business-style ledgers.",
    highlights: ["Voucher & Ledger Entry", "GST Billing & Returns", "Inventory Management", "Balance Sheet Prep"],
  },
  {
    slug: "hardware",
    name: "Computer Hardware & Networking",
    category: "Foundation",
    duration: "3 Months",
    summary: "Assembly, troubleshooting, and networking fundamentals for a technician-track career.",
    highlights: ["PC Assembly & Repair", "OS Installation", "Networking Basics", "Preventive Maintenance"],
  },
  {
    slug: "software",
    name: "Software Applications",
    category: "Foundation",
    duration: "2 Months",
    summary: "Application-focused training across essential productivity and utility software.",
    highlights: ["Office Suite Mastery", "PDF & Utility Tools", "File & Data Management", "Cloud Basics"],
  },
  {
    slug: "multimedia",
    name: "Multimedia & Graphics",
    category: "Design & Media",
    duration: "3 Months",
    summary: "Creative training in image editing, animation basics, and multimedia project creation.",
    highlights: ["Photo Editing", "Animation Fundamentals", "Video Editing Basics", "Portfolio Project"],
  },
  {
    slug: "programming",
    name: "Programming Fundamentals",
    category: "Programming",
    duration: "3 Months",
    summary: "Core programming logic and C/C++ fundamentals to build a strong problem-solving base.",
    highlights: ["C & C++ Basics", "Logic Building", "Data Structures Intro", "Mini Projects"],
  },
  {
    slug: "python",
    name: "Python Programming",
    category: "Programming",
    duration: "3 Months",
    summary: "In-demand Python training from syntax to mini-projects, ideal for students and job seekers.",
    highlights: ["Python Syntax & Logic", "File Handling", "Basic Automation", "Mini Projects"],
  },
  {
    slug: "web-designing",
    name: "Web Designing",
    category: "Programming",
    duration: "3 Months",
    summary: "Build real websites using HTML, CSS, and JavaScript fundamentals, with a live portfolio project.",
    highlights: ["HTML5 & CSS3", "JavaScript Basics", "Responsive Design", "Live Portfolio Website"],
  },
  {
    slug: "typing",
    name: "English & Kannada Typing",
    category: "Foundation",
    duration: "2 Months",
    summary: "Speed and accuracy training for government exams and office-ready typing skills.",
    highlights: ["Touch Typing Method", "Speed & Accuracy Drills", "Govt. Exam Practice Sets", "Certification"],
  },
  {
    slug: "online-courses",
    name: "Online / Live Virtual Courses",
    category: "Distance Education",
    duration: "Flexible",
    summary: "Attend select SNIT courses live online with the same structured curriculum and support.",
    highlights: ["Live Online Classes", "Recorded Sessions", "Doubt-Clearing Support", "Flexible Timings"],
  },
  {
    slug: "distance-education",
    name: "Distance Education Support",
    category: "Distance Education",
    duration: "As per University",
    summary: "Guidance and study support for students enrolled in distance/correspondence degree programs.",
    highlights: ["Admission Guidance", "Study Material Support", "Exam Preparation Help", "University Liaison"],
  },
  {
    slug: "sslc-puc-degree",
    name: "SSLC / PUC / Degree Admissions Guidance",
    category: "Distance Education",
    duration: "Seasonal",
    summary: "End-to-end guidance for SSLC, PUC and Degree admissions, documentation, and college selection.",
    highlights: ["Admission Counselling", "Document Assistance", "College/Course Selection", "Application Support"],
  },
];

export const CATEGORIES = Array.from(new Set(COURSES.map((c) => c.category)));
