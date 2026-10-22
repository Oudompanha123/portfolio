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

// Personal side-project spotlight, shown below Featured Projects.
export const spotlight = {
  name: "Coc Docs Platform (CDP)",
  siteUrl: "https://coocon.me",
  liveUrl: "https://coocon.me/login",
  image: "/image/cdp-preview.png",
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
  description?: string;
  logo?: string;
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
  projects: {
    heading: string;
    intro: string;
    viewAll: string;
    githubLabel: string;
    demoLabel: string;
    websiteLabel: string;
    items: {
      title: string;
      description: string;
      stack: string[];
      /** Overrides the default "Live Demo" link (#contact) when set. */
      demoUrl?: string;
      /** Overrides the default GitHub profile link; pass null to hide the GitHub button entirely. */
      githubUrl?: string | null;
      /** Shows an extra "Website" link with a globe icon when set. */
      websiteUrl?: string;
    }[];
  };
  spotlight: {
    eyebrow: string;
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
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
      role: "Full Stack Developer",
      tagline:
        "I build and maintain web applications, RESTful APIs, and database-driven solutions in a B2B fintech environment — Java, Spring Boot, microservices, and GraphQL on the backend, Next.js and TypeScript on the frontend.",
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
        "I'm a full-stack developer with 2+ years of hands-on experience building and maintaining web applications, RESTful APIs, and database-driven solutions in a B2B fintech environment. I work end to end with Java, Spring Boot, microservices, and GraphQL APIs on the backend, and Next.js and TypeScript on the frontend.",
        "I'm strong in system integration and API Gateway design — connecting internal services to third-party financial systems through REST and GraphQL, with Spring Cloud, Eureka, and OpenFeign keeping payment and loan flows running even when one service slows down. I'm comfortable debugging across the whole stack to keep production systems reliable.",
        "At KOSIGN — a Webcash Group company building B2B fintech, e-finance, and global IT outsourcing solutions — I've delivered KHQR-based billing and auto-collection, digital loan origination and repayment, and GDT-integrated e-invoicing, all secured with Spring Security, JWT, and role-based access control. I hold a Bachelor's Degree in Computer Science from the Royal University of Phnom Penh and completed 864 hours of training at the Korea Software HRD Center. I work comfortably in Khmer (native) and English (advanced).",
      ],
    },
    skills: {
      eyebrow: "skills",
      title: "What I work with",
      groups: [
        {
          title: "API Development & Integration",
          items: ["REST", "GraphQL", "OpenFeign", "Swagger / OpenAPI", "Postman"],
        },
        {
          title: "API Gateway & Microservices",
          items: [
            "Spring Cloud Gateway",
            "Eureka",
            "Load Balancing",
            "Timeouts & Fallbacks",
          ],
        },
        {
          title: "Java & Spring Boot",
          items: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate"],
        },
        {
          title: "Security",
          items: ["Spring Security", "JWT", "OAuth2", "RBAC"],
        },
        {
          title: "Relational Databases",
          items: ["PostgreSQL", "ERD Design", "SQL Tuning", "Data Validation"],
        },
        {
          title: "Production Support & Deployment",
          items: ["Docker", "GitLab CI/CD", "Spring Boot Actuator", "Zabbix"],
        },
        {
          title: "Git & Team Workflow",
          items: ["Git", "GitHub", "GitLab", "Merge Requests", "Code Review"],
        },
        {
          title: "Frontend & Prototyping",
          items: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn/UI",
            "MUI",
            "Vite",
          ],
        },
      ],
    },
    projects: {
      heading: "Featured Projects",
      intro:
        "A collection of projects showcasing my full-stack development skills and problem-solving approach",
      viewAll: "View All Projects on GitHub",
      githubLabel: "GitHub",
      demoLabel: "Live Demo",
      websiteLabel: "Website",
      items: [
        {
          title: "We Invoice",
          description:
            "A side project at KOSIGN — a seamless e-invoicing API that connects an existing ERP system directly to Cambodia's GDT for fast, compliant tax reporting. Built for scalability and security: real-time automated validation, guaranteed GDT compliance, and instant tax submission in place of manual, error-prone processes.",
          stack: ["Next.js", "Spring Boot", "PostgreSQL", "TypeScript", "Tailwind CSS"],
          demoUrl: "https://dev.we-invoice.com",
          websiteUrl: "https://dev.we-invoice.com",
          githubUrl: null,
        },
        {
          title: "WeBill365",
          description:
            "A personal side project — a solution for billing & payment collection. Transform how a business collects payments with a centralized platform to manage, automate, and track every transaction: automated bulk bill creation, KHQR payment collection, real-time payment tracking & alerts, and SMS & Telegram notifications.",
          stack: ["Next.js", "Spring Boot", "PostgreSQL", "TypeScript", "Tailwind CSS"],
          demoUrl: "https://webill365.com/kh",
          websiteUrl: "https://webill365.com/kh",
          githubUrl: null,
        },
        {
          title: "Cafe Merchant",
          description:
            "A side project at KOSIGN — a Foodpanda-style ordering platform for café merchants, where customers browse the menu and order online while the merchant manages incoming orders and payments in real time.",
          stack: ["Next.js", "Spring Boot", "PostgreSQL", "TypeScript", "Tailwind CSS"],
          demoUrl: "https://cafe-merchant.kosign.dev",
          websiteUrl: "https://cafe-merchant.kosign.dev",
          githubUrl: null,
        },
        {
          title: "Coc Docs Platform (CDP)",
          description:
            "A personal side project — one workspace for every product's documentation. Tracks what's written, what's missing, and who's behind it across every product a team ships, with per-product knowledge bases, content-status tracking, and team role management.",
          stack: ["Next.js", "Spring Boot", "PostgreSQL", "TypeScript", "Tailwind CSS"],
          demoUrl: "https://coocon.me/login",
          websiteUrl: "https://coocon.me",
          githubUrl: null,
        },
      ],
    },
    spotlight: {
      eyebrow: "personal project",
      badge: "✦ Now tracking documentation coverage",
      title: "One workspace for every product's",
      titleAccent: "documentation.",
      description:
        "Coc Docs Platform is a side project I'm building — it tracks what's written, what's missing, and who's behind it, across every product a team ships. Each product gets its own knowledge base with per-item content status, quick editing, and team role management.",
      primaryCta: "View live workspace",
      secondaryCta: "Visit coocon.me",
    },
    experience: {
      eyebrow: "experience",
      title: "Where I've worked",
      educationTitle: "Education",
      jobs: [
        {
          role: "Web Developer (Full Stack)",
          company: "KOSIGN (Cambodia) Investment Co., Ltd.",
          description:
            "A Webcash Group company building B2B fintech, e-finance, and global IT outsourcing solutions, including system integrations and banking infrastructure.",
          logo: "/image/KOSIGN-removebg-preview.png",
          period: "2024 — Present",
          points: [
            "Integrated internal services with third-party financial systems through REST and GraphQL APIs, fetching only the fields each screen needed.",
            "Built services in a Spring Cloud microservices architecture with Eureka, API Gateway routing, and OpenFeign, adding timeouts and fallbacks so one degraded service didn't stop payment or loan flows.",
            "Delivered regulated fintech features: KHQR-based billing and auto-collection, digital loan origination and repayment, and GDT-integrated e-invoicing.",
            "Secured services with Spring Security, JWT, and role-based access control, passing code reviews against Webcash Group's K-Fintech standards.",
            "Designed PostgreSQL schemas and ERDs, and tuned SQL so billing and settlement data stayed fast and reconciled.",
            "Deployed with Docker and GitLab CI/CD, monitored with Spring Boot Actuator and Zabbix, and traced failed transactions to resolve tickets quickly.",
            "Wrote Swagger/OpenAPI specs before development so partner teams could integrate in parallel, and tested APIs with Postman.",
          ],
        },
      ],
      education: [
        {
          credential: "Bachelor Degree of Computer Science",
          institution: "Royal University of Phnom Penh",
          period: "2021 — 2024",
          image: "/image/Rupp.png",
          contain: true,
        },
        {
          credential: "Software Expert Training Program",
          institution: "Korea Software HRD Center",
          period: "2024 — 2025",
          image: "/image/HRD-Award.png",
          caption:
            "Top Team Award — 12th Basic Training Course, Korea Software HRD Center (2024)",
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
      role: "អ្នកអភិវឌ្ឍ Full Stack",
      tagline:
        "ខ្ញុំបង្កើត និងថែទាំកម្មវិធីគេហទំព័រ RESTful API និងដំណោះស្រាយដែលផ្អែកលើទិន្នន័យ នៅក្នុងបរិយាកាស B2B Fintech — ជាមួយ Java, Spring Boot, microservices និង GraphQL នៅខាងក្រោយ Next.js និង TypeScript នៅខាងមុខ។",
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
        "ខ្ញុំជាអ្នកអភិវឌ្ឍ Full Stack ដែលមានបទពិសោធន៍ជាក់ស្តែងជាង 2 ឆ្នាំ ក្នុងការបង្កើត និងថែទាំកម្មវិធីគេហទំព័រ RESTful API និងដំណោះស្រាយដែលផ្អែកលើទិន្នន័យ នៅក្នុងបរិយាកាស B2B Fintech។ ខ្ញុំធ្វើការពេញលេញចាប់ពីដើមដល់ចប់ ជាមួយ Java, Spring Boot, microservices និង GraphQL API នៅខាងក្រោយ និង Next.js, TypeScript នៅខាងមុខ។",
        "ខ្ញុំខ្លាំងផ្នែកការភ្ជាប់ប្រព័ន្ធ (system integration) និងការរចនា API Gateway — ភ្ជាប់សេវាកម្មខាងក្នុងជាមួយប្រព័ន្ធហិរញ្ញវត្ថុភាគីទីបីតាម REST និង GraphQL ដោយប្រើ Spring Cloud, Eureka និង OpenFeign ដើម្បីរក្សាលំហូរការទូទាត់ និងប្រាក់កម្ចីឱ្យនៅតែដំណើរការ ទោះបីសេវាកម្មណាមួយយឺតក៏ដោយ។ ខ្ញុំអាចតាមដាន និងដោះស្រាយកំហុសពេញមួយ stack ដើម្បីរក្សាប្រព័ន្ធផលិតកម្មឱ្យមានស្ថេរភាព។",
        "នៅ KOSIGN — ក្រុមហ៊ុនមួយរបស់ Webcash Group ដែលបង្កើតដំណោះស្រាយ B2B Fintech, e-Finance និង Global IT Outsourcing — ខ្ញុំបានបង្កើតសេវាចេញវិក្កយបត្រ និងប្រមូលប្រាក់ដោយស្វ័យប្រវត្តិតាម KHQR ការផ្ដល់ និងសងប្រាក់កម្ចីឌីជីថល និងសេវាចេញវិក្កយបត្រអេឡិចត្រូនិកភ្ជាប់ជាមួយ GDT ដោយធានាសុវត្ថិភាពជាមួយ Spring Security, JWT និងការអនុញ្ញាតតាមតួនាទី។ ខ្ញុំបានបញ្ចប់ថ្នាក់បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ ពីសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ និងបានបញ្ចប់ការបណ្ដុះបណ្ដាលចំនួន 864 ម៉ោង នៅ Korea Software HRD Center។ ខ្ញុំអាចប្រើភាសាខ្មែរ (ភាសាកំណើត) និងភាសាអង់គ្លេស (កម្រិតខ្ពស់)។",
      ],
    },
    skills: {
      eyebrow: "ជំនាញ",
      title: "អ្វីដែលខ្ញុំប្រើប្រាស់",
      groups: [
        {
          title: "ការអភិវឌ្ឍ និងភ្ជាប់ API",
          items: ["REST", "GraphQL", "OpenFeign", "Swagger / OpenAPI", "Postman"],
        },
        {
          title: "API Gateway & Microservices",
          items: [
            "Spring Cloud Gateway",
            "Eureka",
            "Load Balancing",
            "Timeouts & Fallbacks",
          ],
        },
        {
          title: "Java & Spring Boot",
          items: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate"],
        },
        {
          title: "សុវត្ថិភាព",
          items: ["Spring Security", "JWT", "OAuth2", "RBAC"],
        },
        {
          title: "មូលដ្ឋានទិន្នន័យ Relational",
          items: ["PostgreSQL", "ERD Design", "SQL Tuning", "Data Validation"],
        },
        {
          title: "ការគាំទ្រផលិតកម្ម & ការដាក់ឱ្យប្រើប្រាស់",
          items: ["Docker", "GitLab CI/CD", "Spring Boot Actuator", "Zabbix"],
        },
        {
          title: "Git & ការងារជាក្រុម",
          items: ["Git", "GitHub", "GitLab", "Merge Requests", "Code Review"],
        },
        {
          title: "ផ្នែកខាងមុខ & ការធ្វើគំរូ",
          items: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn/UI",
            "MUI",
            "Vite",
          ],
        },
      ],
    },
    projects: {
      heading: "គម្រោងដែលបានធ្វើឡើង",
      intro:
        "បណ្តុំគម្រោងដែលបង្ហាញពីជំនាញ Full Stack និងវិធីសាស្រ្តដោះស្រាយបញ្ហារបស់ខ្ញុំ",
      viewAll: "មើលគម្រោងទាំងអស់នៅលើ GitHub",
      githubLabel: "GitHub",
      demoLabel: "សាកល្បង Live",
      websiteLabel: "វេបសាយ",
      items: [
        {
          title: "We Invoice",
          description:
            "គម្រោងនៅ KOSIGN — API ចេញវិក្កយបត្រអេឡិចត្រូនិកដ៏ងាយស្រួល ដែលភ្ជាប់ប្រព័ន្ធ ERP ដែលមានស្រាប់ដោយផ្ទាល់ទៅកាន់ GDT កម្ពុជា សម្រាប់ការរាយការណ៍ពន្ធដ៏លឿន និងត្រឹមត្រូវតាមច្បាប់។ សាងសង់សម្រាប់ការពង្រីក និងសុវត្ថិភាព៖ ការផ្ទៀងផ្ទាត់ដោយស្វ័យប្រវត្តិភ្លាមៗ ការធានាគោរពច្បាប់ GDT ១០០% និងការដាក់ស្នើពន្ធភ្លាមៗជំនួសដំណើរការដោយដៃដែលងាយមានកំហុស។",
          stack: ["Next.js", "Spring Boot", "PostgreSQL", "TypeScript", "Tailwind CSS"],
          demoUrl: "https://dev.we-invoice.com",
          websiteUrl: "https://dev.we-invoice.com",
          githubUrl: null,
        },
        {
          title: "WeBill365",
          description:
            "គម្រោងផ្ទាល់ខ្លួន — ដំណោះស្រាយសម្រាប់ចេញវិក្កយបត្រ និងប្រមូលការទូទាត់។ ផ្លាស់ប្តូរវិធីដែលអាជីវកម្មប្រមូលការទូទាត់ ជាមួយនឹងវេទិកាតែមួយសម្រាប់គ្រប់គ្រង ធ្វើស្វ័យប្រវត្តិកម្ម និងតាមដានរាល់ប្រតិបត្តិការ៖ ការបង្កើតវិក្កយបត្រច្រើនដោយស្វ័យប្រវត្តិ ការទូទាត់តាម KHQR ការតាមដានការទូទាត់ និងការជូនដំណឹងភ្លាមៗ ព្រមទាំងការជូនដំណឹងតាម SMS និង Telegram។",
          stack: ["Next.js", "Spring Boot", "PostgreSQL", "TypeScript", "Tailwind CSS"],
          demoUrl: "https://webill365.com/kh",
          websiteUrl: "https://webill365.com/kh",
          githubUrl: null,
        },
        {
          title: "Cafe Merchant",
          description:
            "គម្រោងនៅ KOSIGN — វេទិកាកម្មង់អាហារបែប Foodpanda សម្រាប់ហាងកាហ្វេ ដែលអតិថិជនអាចមើលមីនុយ និងកម្មង់តាមអនឡាញ ខណៈដែលហាងគ្រប់គ្រងការបញ្ជាទិញ និងការទូទាត់ជាក់ស្ដែង។",
          stack: ["Next.js", "Spring Boot", "PostgreSQL", "TypeScript", "Tailwind CSS"],
          demoUrl: "https://cafe-merchant.kosign.dev",
          websiteUrl: "https://cafe-merchant.kosign.dev",
          githubUrl: null,
        },
        {
          title: "Coc Docs Platform (CDP)",
          description:
            "គម្រោងផ្ទាល់ខ្លួន — កន្លែងធ្វើការតែមួយសម្រាប់ឯកសារផលិតផលទាំងអស់។ តាមដានអ្វីដែលបានសរសេរ អ្វីដែលខ្វះ និងអ្នកទទួលខុសត្រូវ លើផលិតផលនីមួយៗ ដោយមានមូលដ្ឋានចំណេះដឹងសម្រាប់ផលិតផលនីមួយៗ ការតាមដានស្ថានភាពមាតិកា និងការគ្រប់គ្រងតួនាទីក្រុម។",
          stack: ["Next.js", "Spring Boot", "PostgreSQL", "TypeScript", "Tailwind CSS"],
          demoUrl: "https://coocon.me/login",
          websiteUrl: "https://coocon.me",
          githubUrl: null,
        },
      ],
    },
    spotlight: {
      eyebrow: "គម្រោងផ្ទាល់ខ្លួន",
      badge: "✦ កំពុងតាមដានភាពពេញលេញនៃឯកសារ",
      title: "កន្លែងធ្វើការតែមួយសម្រាប់",
      titleAccent: "ឯកសារផលិតផលទាំងអស់។",
      description:
        "Coc Docs Platform ជាគម្រោងផ្ទាល់ខ្លួនដែលខ្ញុំកំពុងបង្កើត — វាតាមដានអ្វីដែលបានសរសេរ អ្វីដែលខ្វះ និងអ្នកទទួលខុសត្រូវ លើផលិតផលនីមួយៗ ដែលក្រុមមួយកំពុងដាក់ឱ្យដំណើរការ។ ផលិតផលនីមួយៗមានមូលដ្ឋានចំណេះដឹងផ្ទាល់ខ្លួន ជាមួយនឹងការតាមដានស្ថានភាពមាតិកា ការកែសម្រួលរហ័ស និងការគ្រប់គ្រងតួនាទីក្រុម។",
      primaryCta: "មើលកន្លែងធ្វើការផ្ទាល់",
      secondaryCta: "ចូលមើល coocon.me",
    },
    experience: {
      eyebrow: "បទពិសោធន៍",
      title: "កន្លែងដែលខ្ញុំធ្លាប់ធ្វើការ",
      educationTitle: "ការសិក្សា",
      jobs: [
        {
          role: "Web Developer (Full Stack)",
          company: "KOSIGN (Cambodia) Investment Co., Ltd.",
          description:
            "ក្រុមហ៊ុនមួយរបស់ Webcash Group ដែលបង្កើតដំណោះស្រាយ B2B Fintech, e-Finance និង Global IT Outsourcing រួមទាំងការភ្ជាប់ប្រព័ន្ធ និងហេដ្ឋារចនាសម្ព័ន្ធធនាគារ។",
          logo: "/image/KOSIGN-removebg-preview.png",
          period: "2024 — បច្ចុប្បន្ន",
          points: [
            "បានភ្ជាប់សេវាកម្មខាងក្នុងជាមួយប្រព័ន្ធហិរញ្ញវត្ថុភាគីទីបី តាមរយៈ REST និង GraphQL API ដោយទាញយកតែទិន្នន័យដែលអេក្រង់នីមួយៗត្រូវការ។",
            "បានបង្កើតសេវាកម្មក្នុងស្ថាបត្យកម្ម microservices ជាមួយ Spring Cloud, Eureka, API Gateway routing និង OpenFeign ព្រមទាំងបន្ថែម timeout និង fallback ដើម្បីកុំឱ្យសេវាកម្មណាមួយដែលយឺតបញ្ឈប់លំហូរការទូទាត់ ឬប្រាក់កម្ចី។",
            "បានផ្ដល់មុខងារហិរញ្ញវត្ថុដែលគោរពច្បាប់៖ ការចេញវិក្កយបត្រ និងប្រមូលប្រាក់ដោយស្វ័យប្រវត្តិតាម KHQR ការផ្ដល់ និងសងប្រាក់កម្ចីឌីជីថល និងការចេញវិក្កយបត្រអេឡិចត្រូនិកភ្ជាប់ជាមួយ GDT។",
            "បានធានាសុវត្ថិភាពសេវាកម្មដោយ Spring Security, JWT និងការអនុញ្ញាតតាមតួនាទី ព្រមទាំងឆ្លងកាត់ការត្រួតពិនិត្យកូដតាមស្តង់ដារ K-Fintech របស់ Webcash Group។",
            "បានរចនា schema និង ERD សម្រាប់ PostgreSQL ព្រមទាំងកែលម្អ SQL ដើម្បីរក្សាទិន្នន័យវិក្កយបត្រ និងការទូទាត់ឱ្យលឿន និងត្រឹមត្រូវ។",
            "បានដាក់ឱ្យប្រើប្រាស់ដោយ Docker និង GitLab CI/CD តាមដានដោយ Spring Boot Actuator និង Zabbix ព្រមទាំងតាមដានប្រតិបត្តិការបរាជ័យ ដើម្បីដោះស្រាយបញ្ហាបានលឿន។",
            "បានសរសេរឯកសារ Swagger/OpenAPI មុនពេលអភិវឌ្ឍ ដើម្បីឱ្យក្រុមការងារភាគីនានាអាចភ្ជាប់ប្រព័ន្ធស្របគ្នាបាន ព្រមទាំងសាកល្បង API ដោយ Postman។",
          ],
        },
      ],
      education: [
        {
          credential: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ",
          institution: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
          period: "2021 — 2024",
          image: "/image/Rupp.png",
          contain: true,
        },
        {
          credential: "កម្មវិធីបណ្ដុះបណ្ដាលអ្នកជំនាញ Software",
          institution: "Korea Software HRD Center",
          period: "2024 — 2025",
          image: "/image/HRD-Award.png",
          caption:
            "ពានរង្វាន់ក្រុមឆ្នើម — វគ្គបណ្ដុះបណ្ដាលមូលដ្ឋានលើកទី១២ Korea Software HRD Center (2024)",
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
