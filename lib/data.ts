/* ===========================================================================
   EDIT THIS FILE to make the portfolio yours.
   All text is bilingual: `content.en` (English) and `content.km` (Khmer).
   Language-independent values (name, email, photo, links) live in `site`.
=========================================================================== */

export type Locale = "en" | "km";
export const LOCALES: Locale[] = ["en", "km"];

// Values that don't change between languages.
export const site = {
  name: "Chamreun Odompanha",
  email: "oudompanha456@gmail.com",
  photo: "/image/Chamreun%20Odompanha.png",
  availableForWork: true,
};

// Footer / contact links. Remove any you don't use.
export const socials: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/Oudompanha123" },
  { label: "Telegram", href: "https://t.me/+85516334249" },
  { label: "Email", href: "mailto:oudompanha456@gmail.com" },
];

export type SkillGroup = { title: string; items: string[] };
export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};
export type EducationItem = {
  credential: string;
  institution: string;
  period: string;
  image?: string;
  caption?: string;
  contain?: boolean; // center & contain the image (for logos) vs full-width
};

export type Content = {
  profile: { role: string; tagline: string; location: string };
  nav: { about: string; skills: string; experience: string; contact: string };
  hero: {
    available: string;
    greeting: string;
    introLead: string;
    sayHello: string;
    viewWork: string;
  };
  stats: { value: string; label: string }[];
  about: { eyebrow: string; title: string; paragraphs: string[] };
  skills: { eyebrow: string; title: string; groups: SkillGroup[] };
  experience: {
    eyebrow: string;
    title: string;
    educationTitle: string;
    jobs: ExperienceItem[];
    education: EducationItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    sent: string;
    sentBody: string;
    sendAnother: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    genericError: string;
    errors: {
      name: string;
      email: string;
      emailInvalid: string;
      message: string;
    };
  };
};

export const content: Record<Locale, Content> = {
  en: {
    profile: {
      role: "Full-Stack Web Developer at KOSIGN",
      tagline:
        "I build full-stack web applications — Spring Boot APIs on the back, Next.js interfaces on the front.",
      location: "Phnom Penh, Cambodia · GMT+7",
    },
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      available: "Available for work",
      greeting: "Hello, I'm",
      introLead: "I'm a",
      sayHello: "Say Hello!",
      viewWork: "View work",
    },
    stats: [
      { value: "2+", label: "Years building for the web" },
      { value: "10+", label: "Projects shipped" },
      { value: "12+", label: "Tools & technologies" },
    ],
    about: {
      eyebrow: "about",
      title: "A bit about me",
      paragraphs: [
        "I'm a web developer based in Phnom Penh with a Computer Science degree from the Royal University of Phnom Penh. I work across the full stack and care about clean APIs, responsive interfaces, and code that's easy to maintain.",
        "At KOSIGN I design RESTful APIs with Spring Boot — handling business logic, JWT/OAuth2 authentication, and database access — and build the matching frontends in Next.js, TypeScript, and Tailwind CSS, wiring the two together end to end.",
        "I completed the Software Expert Training Program at the Korea Software HRD Center, and I work comfortably in English (advanced) and Khmer (fluent).",
      ],
    },
    skills: {
      eyebrow: "skills",
      title: "What I work with",
      groups: [
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
      ],
    },
    experience: {
      eyebrow: "experience",
      title: "Where I've worked",
      educationTitle: "Education",
      jobs: [
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
      ],
      education: [
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
          image: "/image/Rupp.png",
          contain: true,
        },
      ],
    },
    contact: {
      eyebrow: "contact",
      title: "Let's build something",
      intro:
        "Have a project in mind, a role to fill, or just want to say hello? Send a note and I'll reply within a day or two.",
      sent: "Message sent",
      sentBody: "Thanks for reaching out — I'll be in touch soon.",
      sendAnother: "Send another",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Ada Lovelace",
      emailPlaceholder: "ada@example.com",
      messagePlaceholder: "Tell me a little about what you have in mind.",
      submit: "Send message",
      submitting: "Sending…",
      genericError: "Something went wrong. Try again.",
      errors: {
        name: "Please enter your name.",
        email: "Please enter your email.",
        emailInvalid: "That email address doesn't look right.",
        message: "Please enter a message.",
      },
    },
  },

  km: {
    profile: {
      role: "អ្នកអភិវឌ្ឍគេហទំព័រ Full-Stack នៅ KOSIGN",
      tagline:
        "ខ្ញុំបង្កើតកម្មវិធីគេហទំព័រ Full-Stack — API ដោយ Spring Boot នៅខាងក្រោយ និងផ្ទៃប្រើប្រាស់ Next.js នៅខាងមុខ។",
      location: "ភ្នំពេញ ប្រទេសកម្ពុជា · GMT+7",
    },
    nav: {
      about: "អំពី",
      skills: "ជំនាញ",
      experience: "បទពិសោធន៍",
      contact: "ទំនាក់ទំនង",
    },
    hero: {
      available: "អាចទទួលការងារ",
      greeting: "សួស្ដី ខ្ញុំគឺ",
      introLead: "ខ្ញុំជា",
      sayHello: "ទាក់ទងមកខ្ញុំ!",
      viewWork: "មើលការងារ",
    },
    stats: [
      { value: "2+", label: "ឆ្នាំនៃការអភិវឌ្ឍគេហទំព័រ" },
      { value: "10+", label: "គម្រោងបានបញ្ចប់" },
      { value: "12+", label: "ឧបករណ៍ និងបច្ចេកវិទ្យា" },
    ],
    about: {
      eyebrow: "អំពី",
      title: "ខ្លះៗអំពីខ្ញុំ",
      paragraphs: [
        "ខ្ញុំជាអ្នកអភិវឌ្ឍគេហទំព័រនៅទីក្រុងភ្នំពេញ ដែលបានបញ្ចប់ថ្នាក់បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ ពីសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ។ ខ្ញុំធ្វើការគ្រប់ផ្នែកនៃ full stack ហើយយកចិត្តទុកដាក់លើ API ស្អាត ផ្ទៃប្រើប្រាស់ឆ្លើយតបបានល្អ និងកូដដែលងាយស្រួលថែទាំ។",
        "នៅ KOSIGN ខ្ញុំរចនា RESTful API ដោយ Spring Boot — គ្រប់គ្រងតក្កៈអាជីវកម្ម ការផ្ទៀងផ្ទាត់ JWT/OAuth2 និងការចូលប្រើមូលដ្ឋានទិន្នន័យ — ហើយបង្កើតផ្ទៃខាងមុខដែលត្រូវគ្នាដោយ Next.js, TypeScript និង Tailwind CSS ភ្ជាប់ទាំងពីរចូលគ្នាពីដើមដល់ចប់។",
        "ខ្ញុំបានបញ្ចប់កម្មវិធីបណ្ដុះបណ្ដាលអ្នកជំនាញ Software នៅ Korea Software HRD Center ហើយខ្ញុំអាចប្រើភាសាអង់គ្លេស (កម្រិតខ្ពស់) និងភាសាខ្មែរ (ស្ទាត់ជំនាញ)។",
      ],
    },
    skills: {
      eyebrow: "ជំនាញ",
      title: "អ្វីដែលខ្ញុំប្រើប្រាស់",
      groups: [
        {
          title: "ផ្នែកខាងក្រោយ (Backend)",
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
          title: "ផ្នែកខាងមុខ (Frontend)",
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
          title: "ឧបករណ៍ និងការអនុវត្ត",
          items: ["Git", "GitLab", "Docker", "Postman", "Full-Stack Development"],
        },
      ],
    },
    experience: {
      eyebrow: "បទពិសោធន៍",
      title: "កន្លែងដែលខ្ញុំធ្លាប់ធ្វើការ",
      educationTitle: "ការសិក្សា",
      jobs: [
        {
          role: "អ្នកអភិវឌ្ឍគេហទំព័រ",
          company: "KOSIGN (Cambodia) Investment Co., Ltd.",
          period: "សីហា 2024 — បច្ចុប្បន្ន",
          points: [
            "បានបង្កើត RESTful API ដ៏រឹងមាំដោយ Spring Boot សម្រាប់តក្កៈអាជីវកម្ម ការផ្ទៀងផ្ទាត់ (JWT, OAuth2) និងការទំនាក់ទំនងជាមួយមូលដ្ឋានទិន្នន័យ។",
            "បានបង្កើតផ្ទៃប្រើប្រាស់គេហទំព័រឆ្លើយតប និងងាយស្រួលប្រើ ដោយ Next.js, TypeScript និង Tailwind CSS។",
            "បានភ្ជាប់សេវាផ្នែកខាងមុខ និងខាងក្រោយ ដើម្បីធានាលំហូរទិន្នន័យរលូន និងដំណើរការល្អ។",
            "បានសហការជាមួយក្រុមការងារ ដើម្បីរចនា អភិវឌ្ឍ សាកល្បង និងដាក់ឱ្យដំណើរការកម្មវិធីគេហទំព័រ full-stack។",
            "បានរក្សាគុណភាពកូដ និងគ្រប់គ្រងកំណែដោយ GitLab ព្រមទាំងសាកល្បង API ដោយ Postman។",
          ],
        },
      ],
      education: [
        {
          credential: "កម្មវិធីបណ្ដុះបណ្ដាលអ្នកជំនាញ Software",
          institution: "Korea Software HRD Center",
          period: "2024 — 2025",
          image: "/image/HRD-Award.png",
          caption:
            "ពានរង្វាន់ក្រុមឆ្នើម — វគ្គបណ្ដុះបណ្ដាលមូលដ្ឋានលើកទី១២ Korea Software HRD Center (2024)",
        },
        {
          credential: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ",
          institution: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
          period: "2021 — 2024",
          image: "/image/Rupp.png",
          contain: true,
        },
      ],
    },
    contact: {
      eyebrow: "ទំនាក់ទំនង",
      title: "តោះបង្កើតអ្វីមួយជាមួយគ្នា",
      intro:
        "មានគម្រោងក្នុងចិត្ត ត្រូវការជ្រើសរើសបុគ្គលិក ឬគ្រាន់តែចង់ស្វាគមន៍? ផ្ញើសារមក ខ្ញុំនឹងឆ្លើយតបក្នុងរយៈពេលមួយ ឬពីរថ្ងៃ។",
      sent: "សារត្រូវបានផ្ញើ",
      sentBody: "អរគុណសម្រាប់ការទាក់ទង — ខ្ញុំនឹងឆ្លើយតបឆាប់ៗនេះ។",
      sendAnother: "ផ្ញើសារម្ដងទៀត",
      nameLabel: "ឈ្មោះ",
      emailLabel: "អ៊ីមែល",
      messageLabel: "សារ",
      namePlaceholder: "ឧ. សុខ សុភា",
      emailPlaceholder: "ada@example.com",
      messagePlaceholder: "ប្រាប់ខ្ញុំបន្តិចអំពីអ្វីដែលអ្នកកំពុងគិត។",
      submit: "ផ្ញើសារ",
      submitting: "កំពុងផ្ញើ…",
      genericError: "មានបញ្ហាបានកើតឡើង។ សូមព្យាយាមម្ដងទៀត។",
      errors: {
        name: "សូមបញ្ចូលឈ្មោះរបស់អ្នក។",
        email: "សូមបញ្ចូលអ៊ីមែលរបស់អ្នក។",
        emailInvalid: "អ៊ីមែលនេះមើលទៅមិនត្រឹមត្រូវ។",
        message: "សូមបញ្ចូលសារ។",
      },
    },
  },
};
