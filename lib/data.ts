/* ===========================================================================
   EDIT THIS FILE to make the portfolio yours.
   Everything the site renders — your name, bio, skills, experience, links —
   lives here. No need to touch the components.
=========================================================================== */

export const profile = {
  name: "Chamreun Odompanha",
  // Shown in the browser tab and meta tags
  role: "Full-Stack Web Developer at KOSIGN",
  // One punchy line under your name in the hero
  tagline:
    "I build full-stack web applications — Spring Boot APIs on the back, Next.js interfaces on the front.",
  // Are you open to work? Toggles the status dot in the hero.
  availableForWork: true,
  location: "Phnom Penh, Cambodia · GMT+7",
  email: "oudompanha456@gmail.com",
};

// Hero stats — the three numbers shown under the intro. Edit freely.
export const stats: { value: string; label: string }[] = [
  { value: "2+", label: "Years building for the web" },
  { value: "10+", label: "Projects shipped" },
  { value: "12+", label: "Tools & technologies" },
];

// Section: About — 1–3 short paragraphs. Keep it human, skip the buzzwords.
export const about: string[] = [
  "I'm a web developer based in Phnom Penh with a Computer Science degree from the Royal University of Phnom Penh. I work across the full stack and care about clean APIs, responsive interfaces, and code that's easy to maintain.",
  "At KOSIGN I design RESTful APIs with Spring Boot — handling business logic, JWT/OAuth2 authentication, and database access — and build the matching frontends in Next.js, TypeScript, and Tailwind CSS, wiring the two together end to end.",
  "I completed the Software Expert Training Program at the Korea Software HRD Center, and I work comfortably in English (advanced) and Khmer (fluent).",
];

// Section: Skills — grouped. Add/remove groups and items freely.
export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "RESTful API",
      "JWT & OAuth2",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "HTML & CSS",
    ],
  },
  {
    title: "Tools & Practices",
    items: ["Git", "GitLab", "Docker", "Postman", "Full-Stack Development"],
  },
];

// Section: Experience — your work history, most recent first.
export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Web Developer",
    company: "KOSIGN (Cambodia) Investment Co., Ltd.",
    period: "Aug 2024 — Present",
    points: [
      "Developed robust RESTful APIs using Spring Boot for business logic, authentication (JWT, OAuth2), and database interaction.",
      "Built responsive, user-friendly web interfaces with Next.js, TypeScript, and Tailwind CSS.",
      "Integrated frontend and backend services, ensuring seamless data flow and performance.",
      "Collaborated with the team to design, develop, test, and deploy full-stack web applications.",
      "Maintained code quality and version control with GitLab, and tested APIs using Postman.",
    ],
  },
];

// Section: Education — degrees and training, most recent first.
export type EducationItem = {
  credential: string;
  institution: string;
  period: string;
  image?: string; // optional photo (e.g. an award) shown under the entry
  caption?: string; // caption for the image
};

export const education: EducationItem[] = [
  {
    credential: "Software Expert Training Program",
    institution: "Korea Software HRD Center",
    period: "2024 — 2025",
    image: "/image/HRD-Award.png",
    caption:
      "Top Team Award — 12th Basic Training Course, Korea Software HRD Center (2024)",
  },
  {
    credential: "Bachelor Degree of Computer Science",
    institution: "Royal University of Phnom Penh",
    period: "2021 — 2024",
  },
];

// Footer / contact links. Remove any you don't use.
export const socials: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/Oudompanha123" },
  { label: "Telegram", href: "https://t.me/+85516334249" },
  { label: "Email", href: "mailto:oudompanha456@gmail.com" },
];
