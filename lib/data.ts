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
  projects: {
    heading: string;
    intro: string;
    viewAll: string;
    githubLabel: string;
    demoLabel: string;
    items: {
      title: string;
      description: string;
      stack: string[];
    }[];
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
        "I build responsive web applications, secure backend services, and data-driven solutions with Java, Spring Boot, React, Next.js, and PostgreSQL.",
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
        "I am a full-stack developer with 2+ years of hands-on experience building and maintaining web applications, RESTful APIs, and database-driven solutions using Java, Spring Boot, Next.js, TypeScript, and modern frontend tooling.",
        "I hold a Bachelor Degree in Computer Science from the Royal University of Phnom Penh and completed the Software Expert Training Program at the Korea Software HRD Center. My work focuses on clean architecture, scalable backend design, and building user-friendly interfaces that align with business goals.",
        "At KOSIGN, I design and develop full-stack features for B2B Fin-Tech and e-Finance systems, integrating backend services with PostgreSQL, JWT authentication, and third-party APIs while delivering responsive front-end experiences in React and Next.js. I am confident working in English and Khmer, and I enjoy solving technical problems with strong communication and collaboration.",
      ],
    },
    skills: {
      eyebrow: "skills",
      title: "What I work with",
      groups: [
        {
          title: "Frontend",
          items: [
            "HTML5 & CSS3",
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "jQuery",
          ],
        },
        {
          title: "Backend",
          items: [
            "Java 17-21",
            "Spring Boot",
            "Spring Security",
            "RBAC",
            "JWT & OAuth2",
            "Spring Data JPA",
            "Hibernate",
          ],
        },
        {
          title: "Database & API Design",
          items: [
            "SQL",
            "MySQL",
            "PostgreSQL",
            "ERD Design",
            "RESTful & SOAP API Design",
          ],
        },
        {
          title: "Microservices",
          items: [
            "Eureka",
            "API Gateway",
            "Spring Cloud OpenFeign",
            "Load Balancer",
          ],
        },
        {
          title: "DevOps & Tools",
          items: ["Git", "Docker", "Postman", "Swagger / OpenAPI", "AWS", "Jira", "Confluence"],
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
      items: [
        {
          title: "E-Commerce Platform",
          description:
            "Full-stack e-commerce solution with Next.js frontend and Spring Boot backend. Features JWT authentication, product management, shopping cart, and admin dashboard.",
          stack: ["Next.js", "Spring Boot", "PostgreSQL", "Docker", "JWT", "Redis"],
        },
        {
          title: "Library Management System",
          description:
            "Modern library management application with React frontend and Spring Boot backend. Includes CRUD operations, advanced pagination, and responsive design.",
          stack: ["React", "Tailwind CSS", "Spring Boot", "MySQL", "REST API"],
        },
        {
          title: "Digital Wallet API",
          description:
            "Comprehensive financial API supporting SOAP and REST protocols. Implements complex transaction validations, security layers, and microservices architecture.",
          stack: ["Java", "Spring Boot", "SOAP", "Docker", "Microservices", "OAuth2"],
        },
      ],
    },
    experience: {
      eyebrow: "experience",
      title: "Where I've worked",
      educationTitle: "Education",
      jobs: [
        {
          role: "Web Developer / Full Stack Developer",
          company: "KOSIGN (Cambodia) Investment Co., Ltd.",
          description:
            "The company specializes in B2B Fin-Tech, e-Finance, and Global IT Outsourcing.",
          period: "Aug 2024 — Present",
          points: [
            "Developed backend applications and RESTful APIs with Spring Boot and Spring Data JPA for efficient data access, JWT authentication, and role-based authorization integrated with PostgreSQL.",
            "Built and maintained microservice-based backend systems using Spring Cloud, Eureka, API Gateway, and OpenFeign for service discovery, routing, and inter-service communication.",
            "Collaborated with cross-functional teams to design solutions, connect frontend and backend services, and deliver business-ready features for internal and external users.",
            "Built responsive and user-friendly interfaces using Next.js, TypeScript, HTML5, CSS3, and Tailwind CSS to support modern web experiences.",
            "Containerized services with Docker and used Git and GitLab for source control, versioning, and release coordination.",
            "Tested API endpoints using Postman and ensured application quality through consistent debugging, code review, and iterative improvements.",
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
        "ខ្ញុំបង្កើតកម្មវិធីគេហទំព័រឆ្លើយតប, សេវាកម្ម Backend មានសុវត្ថិភាព, និងដំណោះស្រាយដែលផ្អែកលើទិន្នន័យដោយ Java, Spring Boot, React, Next.js និង PostgreSQL។",
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
        "ខ្ញុំជាអ្នកអភិវឌ្ឍ Full Stack ដែលមានបទពិសោធន៍ជាក់ស្តែងជាង 2 ឆ្នាំ ក្នុងការបង្កើត និងថែទាំកម្មវិធីគេហទំព័រ RESTful API និងដំណោះស្រាយដែលផ្អែកលើទិន្នន័យ ដោយប្រើ Java, Spring Boot, Next.js, TypeScript និងឧបករណ៍ Frontend ស្តង់ដារ។",
        "ខ្ញុំបានបញ្ចប់ថ្នាក់បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ ពីសាកលវិទ្យាល័យភូមិន្ទភ Cambodia និងបានចូលរួមក្នុងកម្មវិធីបណ្ដុះបណ្ដាល Software Expert Training Program នៅ Korea Software HRD Center។ ខ្ញុំផ្តោតលើស្ថាបត្យកម្មកូដដែលបានរចនាយ៉ាងស្អាត, Backend ដែលអាចធ្វើមាត្រដ្ឋានបាន, និងផ្ទៃប្រើប្រាស់ដែលងាយស្រួលសម្រាប់អ្នកប្រើ។",
        "នៅ KOSIGN ខ្ញុំរចនា និងអភិវឌ្ឍលក្ខណៈពិសេស Full Stack សម្រាប់ប្រព័ន្ធ B2B Fin-Tech និង e-Finance, ភ្ជាប់សេវាកម្ម Backend ជាមួយ PostgreSQL, JWT, និង API ភាគីទីបី ខណៈពេលដែលផ្តល់នូវផ្ទៃ front-end ที่ឆ្លើយតបលើ React និង Next.js។ ខ្ញុំមានទំនុកចិត្តក្នុងការដំណើរការនៅក្នុងភាសាអង់គ្លេស និងខ្មែរ ហើយមានការស្រលាញ់ក្នុងការដោះស្រាយបញ្ហាលើបច្ចេកវិទ្យា ដោយទំនាក់ទំនង និងសហការដែលល្អ។",
      ],
    },
    skills: {
      eyebrow: "ជំនាញ",
      title: "អ្វីដែលខ្ញុំប្រើប្រាស់",
      groups: [
        {
          title: "Frontend",
          items: [
            "HTML5 & CSS3",
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "jQuery",
          ],
        },
        {
          title: "Backend",
          items: [
            "Java 17-21",
            "Spring Boot",
            "Spring MVC",
            "Spring Security",
            "Spring Data JPA",
            "Hibernate",
          ],
        },
        {
          title: "Database & API Design",
          items: [
            "SQL",
            "MySQL",
            "PostgreSQL",
            "RESTful API Design",
            "SOAP API",
            "JWT & OAuth2",
            "RBAC",
          ],
        },
        {
          title: "Microservices",
          items: [
            "Eureka",
            "API Gateway",
            "Spring Cloud OpenFeign",
            "Load Balancer",
          ],
        },
        {
          title: "DevOps & Tools",
          items: ["Git", "GitLab", "Docker", "Postman", "Swagger / OpenAPI"],
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
      items: [
        {
          title: "ប្រព័ន្ធអេឡិចត្រូនិកផ្សារ",
          description:
            "ដំណោះស្រាយ e-commerce ជា full-stack ដែលប្រើ Next.js ជាផ្នែក frontend និង Spring Boot ជាផ្នែក backend។ មានសុវត្ថិភាព JWT, ការគ្រប់គ្រងផលិតផល, កន្ត្រង់ទំនិញ, និងផ្ទាំងគ្រប់គ្រងអ្នកគ្រប់គ្រង។",
          stack: ["Next.js", "Spring Boot", "PostgreSQL", "Docker", "JWT", "Redis"],
        },
        {
          title: "ប្រព័ន្ធគ្រប់គ្រងបណ្ណាល័យ",
          description:
            "កម្មវិធីគ្រប់គ្រងបណ្ណាល័យទំនើបដែលមាន frontend ជាមួយ React និង backend ជាមួយ Spring Boot។ រួមបញ្ចូល CRUD, pagination, និង UI ដែលឆ្លើយតប។",
          stack: ["React", "Tailwind CSS", "Spring Boot", "MySQL", "REST API"],
        },
        {
          title: "Digital Wallet API",
          description:
            "API ធនាគារដែលមានលក្ខណៈពិសេសទាំង SOAP និង REST។ បង្កើតឡើងដោយ validation សម្រាប់ប្រតិបត្តិការប្រាក់, ស្រទាប់សុវត្ថិភាព, និងស្ថាបត្យកម្ម microservices។",
          stack: ["Java", "Spring Boot", "SOAP", "Docker", "Microservices", "OAuth2"],
        },
      ],
    },
    experience: {
      eyebrow: "បទពិសោធន៍",
      title: "កន្លែងដែលខ្ញុំធ្លាប់ធ្វើការ",
      educationTitle: "ការសិក្សា",
      jobs: [
        {
          role: "Web Developer / Full Stack Developer",
          company: "KOSIGN (Cambodia) Investment Co., Ltd.",
          description:
            "ក្រុមហ៊ុននេះមានឯកទេសខាង B2B Fin-Tech, e-Finance និង Global IT Outsourcing។",
          period: "សីហា 2024 — បច្ចុប្បន្ន",
          points: [
            "បានបង្កើតកម្មវិធី Backend និង RESTful API ដោយ Spring Boot និង Spring Data JPA សម្រាប់ដំណើរការទិន្នន័យ, JWT authentication, និង role-based authorization ដែលភ្ជាប់ជាមួយ PostgreSQL។",
            "បានបង្កើត និងថែទាំប្រព័ន្ធ Backend សក្ដី microservice ដោយប្រើ Spring Cloud, Eureka, API Gateway, និង OpenFeign សម្រាប់ service discovery, routing, និង inter-service communication។",
            "បានសហការជាមួយក្រុមការងារឆ្លងផ្នែកដើម្បីរចនាដំណោះស្រាយ, ភ្ជាប់សេវាកម្ម Frontend និង Backend, និងបញ្ជូនមុខងារសម្រាប់អ្នកប្រើប្រាស់ក្នុងអាជីវកម្ម។",
            "បានបង្កើតផ្ទៃគេហទំព័រដែលឆ្លើយតប និងងាយប្រើ ដោយ Next.js, TypeScript, HTML5, CSS3, និង Tailwind CSS។",
            "បាន Containerize សេវាកម្មដោយ Docker និងប្រើ Git, GitLab សម្រាប់ source control, versioning, និង coordination នៃ release។",
            "បានធ្វើការធ្វើតេស្ត API ដោយ Postman និងរក្សាគុណភាពកម្មវិធីតាមរយៈ debugging, code review, និងការកែលម្អជាបន្ត។",
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
