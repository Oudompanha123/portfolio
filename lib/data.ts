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
  description?: string;
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
      role: "Backend Developer (Java) at KOSIGN",
      tagline:
        "I build and maintain backend applications and RESTful APIs with Java and Spring (Spring Boot, Spring MVC, Spring Security) — plus the Next.js interfaces they power.",
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
        "I'm a backend-focused Java developer with 2+ years of hands-on experience building and maintaining backend applications and RESTful APIs using Java and Spring (Spring Boot, Spring MVC, Spring Security). I hold a Computer Science degree from the Royal University of Phnom Penh.",
        "I'm strong in OOP, relational database design (PostgreSQL, ERD), and JWT-based authentication, and experienced in debugging production systems, cross-team collaboration, and integrating APIs with external and third-party systems.",
        "At KOSIGN — a company specializing in B2B Fin-Tech, e-Finance, and Global IT Outsourcing — I design microservices with Spring Cloud (Eureka, API Gateway, OpenFeign) and build the matching frontends in Next.js and TypeScript. I completed the Software Expert Training Program at the Korea Software HRD Center, and I work comfortably in English (advanced) and Khmer (fluent).",
      ],
    },
    skills: {
      eyebrow: "skills",
      title: "What I work with",
      groups: [
        {
          title: "Java & OOP",
          items: [
            "Java (OOP, MVC, JSON)",
            "Spring Boot",
            "Spring MVC",
            "Spring Security",
            "Spring Data JPA",
            "Hibernate",
          ],
        },
        {
          title: "Microservices",
          items: [
            "Eureka Service Discovery",
            "API Gateway",
            "Spring Cloud OpenFeign",
            "Load Balancer",
          ],
        },
        {
          title: "Database & API Design",
          items: [
            "SQL & Relational DB Design",
            "PostgreSQL",
            "RESTful API Design",
            "JWT & OAuth2",
            "RBAC",
            "Third-Party API Integration",
          ],
        },
        {
          title: "DevOps & Tools",
          items: ["Git", "GitLab", "Docker", "Postman", "Swagger / OpenAPI"],
        },
        {
          title: "Frontend",
          items: [
            "HTML5 & CSS3",
            "Tailwind CSS",
            "JavaScript",
            "jQuery",
            "TypeScript",
            "Next.js",
            "React.js",
          ],
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
          description:
            "The company specializes in B2B Fin-Tech, e-Finance, and Global IT Outsourcing.",
          period: "Aug 2024 — Present",
          points: [
            "Developed backend applications and RESTful APIs using Spring Boot and Spring Data JPA for data access, implementing JWT authentication and role-based authorization (RBAC), integrated with PostgreSQL.",
            "Designed and implemented backend services using a microservices architecture (Spring Cloud, Eureka Service Discovery, API Gateway) to support integration with third-party systems.",
            "Applied client-side load balancing with Spring Cloud LoadBalancer and inter-service communication with Spring Cloud OpenFeign.",
            "Collaborated with cross-functional teams to design solutions and integrate REST APIs between frontend and backend services.",
            "Built responsive front-end interfaces using Next.js, TypeScript, HTML5, CSS3, and Tailwind CSS.",
            "Containerized applications with Docker, and used Git and GitLab for version control and CI/CD coordination.",
            "Performed API testing with Postman and maintained code quality throughout the development lifecycle.",
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
      role: "អ្នកអភិវឌ្ឍ Backend (Java) នៅ KOSIGN",
      tagline:
        "ខ្ញុំបង្កើត និងថែទាំកម្មវិធី Backend និង RESTful API ដោយ Java និង Spring (Spring Boot, Spring MVC, Spring Security) — ព្រមទាំងផ្ទៃប្រើប្រាស់ Next.js ដែលភ្ជាប់ជាមួយ។",
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
        "ខ្ញុំជាអ្នកអភិវឌ្ឍ Java ដែលផ្ដោតលើ Backend មានបទពិសោធន៍ជាក់ស្ដែងជាង 2 ឆ្នាំ ក្នុងការបង្កើត និងថែទាំកម្មវិធី Backend និង RESTful API ដោយប្រើ Java និង Spring (Spring Boot, Spring MVC, Spring Security)។ ខ្ញុំបានបញ្ចប់ថ្នាក់បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ ពីសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ។",
        "ខ្ញុំមានចំណេះដឹងរឹងមាំលើ OOP ការរចនាមូលដ្ឋានទិន្នន័យ Relational (PostgreSQL, ERD) និងការផ្ទៀងផ្ទាត់ដោយ JWT ព្រមទាំងមានបទពិសោធន៍ក្នុងការតាមដានកំហុសលើប្រព័ន្ធផលិតកម្ម ការសហការជាមួយក្រុមផ្សេងៗ និងការភ្ជាប់ API ជាមួយប្រព័ន្ធខាងក្រៅ ឬភាគីទីបី។",
        "នៅ KOSIGN — ក្រុមហ៊ុនឯកទេសខាង B2B Fin-Tech, e-Finance និង Global IT Outsourcing — ខ្ញុំរចនា microservices ដោយ Spring Cloud (Eureka, API Gateway, OpenFeign) និងបង្កើតផ្ទៃខាងមុខដែលត្រូវគ្នាដោយ Next.js និង TypeScript។ ខ្ញុំបានបញ្ចប់កម្មវិធីបណ្ដុះបណ្ដាលអ្នកជំនាញ Software នៅ Korea Software HRD Center ហើយខ្ញុំអាចប្រើភាសាអង់គ្លេស (កម្រិតខ្ពស់) និងភាសាខ្មែរ (ស្ទាត់ជំនាញ)។",
      ],
    },
    skills: {
      eyebrow: "ជំនាញ",
      title: "អ្វីដែលខ្ញុំប្រើប្រាស់",
      groups: [
        {
          title: "Java & OOP",
          items: [
            "Java (OOP, MVC, JSON)",
            "Spring Boot",
            "Spring MVC",
            "Spring Security",
            "Spring Data JPA",
            "Hibernate",
          ],
        },
        {
          title: "Microservices",
          items: [
            "Eureka Service Discovery",
            "API Gateway",
            "Spring Cloud OpenFeign",
            "Load Balancer",
          ],
        },
        {
          title: "រចនាមូលដ្ឋានទិន្នន័យ & API",
          items: [
            "SQL & Relational DB Design",
            "PostgreSQL",
            "RESTful API Design",
            "JWT & OAuth2",
            "RBAC",
            "Third-Party API Integration",
          ],
        },
        {
          title: "DevOps & ឧបករណ៍",
          items: ["Git", "GitLab", "Docker", "Postman", "Swagger / OpenAPI"],
        },
        {
          title: "ផ្នែកខាងមុខ (Frontend)",
          items: [
            "HTML5 & CSS3",
            "Tailwind CSS",
            "JavaScript",
            "jQuery",
            "TypeScript",
            "Next.js",
            "React.js",
          ],
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
          description:
            "ក្រុមហ៊ុននេះមានឯកទេសខាង B2B Fin-Tech, e-Finance និង Global IT Outsourcing។",
          period: "សីហា 2024 — បច្ចុប្បន្ន",
          points: [
            "បានបង្កើតកម្មវិធី Backend និង RESTful API ដោយ Spring Boot និង Spring Data JPA សម្រាប់ចូលប្រើទិន្នន័យ ព្រមទាំងអនុវត្តការផ្ទៀងផ្ទាត់ JWT និងការអនុញ្ញាតតាមតួនាទី (RBAC) ភ្ជាប់ជាមួយ PostgreSQL។",
            "បានរចនា និងអនុវត្តសេវា Backend ដោយប្រើស្ថាបត្យកម្ម microservices (Spring Cloud, Eureka Service Discovery, API Gateway) ដើម្បីគាំទ្រការភ្ជាប់ជាមួយប្រព័ន្ធភាគីទីបី។",
            "បានអនុវត្ត client-side load balancing ដោយ Spring Cloud LoadBalancer និងការទំនាក់ទំនងរវាងសេវាដោយ Spring Cloud OpenFeign។",
            "បានសហការជាមួយក្រុមការងារឆ្លងផ្នែក ដើម្បីរចនាដំណោះស្រាយ និងភ្ជាប់ REST API រវាងផ្នែកខាងមុខ និងខាងក្រោយ។",
            "បានបង្កើតផ្ទៃខាងមុខឆ្លើយតបដោយ Next.js, TypeScript, HTML5, CSS3 និង Tailwind CSS។",
            "បានប្រើ Docker សម្រាប់ Containerize កម្មវិធី ព្រមទាំងប្រើ Git និង GitLab សម្រាប់គ្រប់គ្រងកំណែ និង CI/CD។",
            "បានធ្វើតេស្ត API ដោយ Postman ព្រមទាំងរក្សាគុណភាពកូដពេញមួយវដ្តនៃការអភិវឌ្ឍ។",
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
