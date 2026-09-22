import type {
  Education,
  Experience,
  ExperienceAward,
  Language,
  PersonalInfo,
  Project,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Detnarin Chaiaksorn",
  role: "Software Developer",
  heroLead:
    "Software developer building practical web experiences, AI-assisted systems, and interactive products.",
  heroHighlight: "UTCC Computer Science · Second-Class Honors · GPAX 3.44",
  bio: "I turn requirements into working software - from Python backends and CMS sites to user-tested product interfaces.",
  email: "detnarin.cha@gmail.com",
  github: "https://github.com/Liondetnarin",
  linkedin: "https://linkedin.com/in/detnarin-chaiaksorn-47b154403",
  focus:
    "AI voice systems, vector databases, CMS-powered web apps, and interactive software prototypes.",
  resumeUrl: "/resume/detnarin-chaiaksorn-resume.pdf",
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "one-flag-thailand",
    title: "One Flag Thailand",
    summary: "Official website and presentation hub for One Flag Thailand.",
    description:
      "Official website for One Flag Thailand, a national initiative created to make history and pursue a new world record for Thailand.",
    contribution:
      "Built with Next.js, TypeScript, Tailwind CSS, and Sanity CMS for dynamic content management, then deployed to production on Vercel.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    imageUrl: "/images/img-one.webp",
    demoUrl: "https://oneflagthailand.com",
    category: "fullstack",
    featured: true,
    badge: "Production Website",
  },
  {
    id: "2",
    slug: "luck-ju",
    title: "Luck Ju",
    summary: "B2C e-commerce storefront for collectible art toys.",
    description:
      "Responsive online storefront designed to present and sell collectible art toys.",
    contribution:
      "Built with Next.js, TypeScript, Tailwind CSS, Supabase, and Omise, with PromptPay QR as the supported payment method.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Omise"],
    imageUrl: "/images/img-lj.webp",
    demoUrl: "https://luck-ju.vercel.app",
    category: "fullstack",
    featured: true,
    badge: "Production Website",
  },
  {
    id: "3",
    slug: "wenworks",
    title: "WenWorks",
    summary: "CMS-powered multilingual marketing website built with Next.js.",
    description:
      "High-performance marketing website with multi-language support, SEO optimization, and CMS integration using Next.js, TypeScript, Tailwind CSS, and Sanity. Deployed on Vercel.",
    contribution:
      "Delivered responsive pages, CMS content structure, multilingual routing, and production-ready architecture.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    imageUrl: "/images/img-ww.webp",
    demoUrl: "https://www.wenworks.co/th",
    category: "web",
    featured: true,
    badge: "Production Website",
  },
  {
    id: "4",
    slug: "dino-marcom",
    title: "Dino Marcom",
    summary: "CMS-driven marketing landing page with dynamic content management.",
    description:
      "Marketing landing page built with Next.js, TypeScript, Tailwind CSS, and Sanity CMS. Focused on SEO, clean UI, and content workflows for a production marketing team.",
    contribution:
      "Built responsive layouts, CMS schema, and deployment pipeline with Vercel.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    imageUrl: "/images/img-dino-marcom.webp",
    demoUrl: "https://dinomarcom.vercel.app/th",
    category: "web",
    badge: "CMS Landing Page",
  },
  {
    id: "5",
    slug: "tf-superbike",
    title: "TF-Superbike",
    summary: "Web landing page for a high-performance motorcycle business.",
    description:
      "Web landing page for a high-performance motorcycle business. Built with Next.js and Tailwind CSS, featuring responsive design and performance optimizations.",
    contribution:
      "Created responsive design, performance optimizations, and presentation-ready web experience with Next.js and Tailwind CSS.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    imageUrl: "/images/img-tf.webp",
    demoUrl: "https://tf-superbike.vercel.app/",
    category: "fullstack",
    badge: "Production Website",
  },
  {
    id: "6",
    slug: "coding-is-magic",
    title: "Coding is Magic",
    summary: "Award-winning 2D game that teaches Python through puzzle play.",
    description:
      "2D pixel art game (Unity, C#) designed to teach Python through puzzle-based gameplay. Awarded 2nd place in university showcase 2026.",
    contribution:
      "Built gameplay systems, learning interactions, and presentation-ready game flow with Unity and C#.",
    techStack: ["Unity", "C#", "2D Game"],
    imageUrl: "/images/img-coding-is-magic.webp",
    githubUrl: "https://github.com/Tanakorn-C/Coding-is-Magic-RPG",
    demoUrl:
      "https://play.unity.com/en/games/a3a8b201-7355-4eb9-9879-6b9b04a3737b/webgl",
    category: "game",
    featured: true,
    badge: "2nd Place Award",
  },
  {
    id: "7",
    slug: "utcc-phobia",
    title: "UTCC PHOBIA",
    summary: "3D horror game prototype built with Unreal Engine 5.",
    description:
      "3D horror game built with Unreal Engine 5, featuring custom environments based on the UTCC campus, gameplay mechanics, and interactive storytelling.",
    contribution:
      "Created interactive gameplay, environments, and presentation-ready horror experience in Unreal Engine 5.",
    techStack: ["Unreal Engine 5", "Blender", "3D"],
    imageUrl: "/images/img-utcc.webp",
    youtubeUrl: "https://youtu.be/dMLk6AdQNng",
    category: "game",
    badge: "3D Game",
  },
  {
    id: "8",
    slug: "unifood",
    title: "UniFood",
    summary: "Restaurant review platform with rankings, filtering, and user ratings.",
    description:
      "Full-stack restaurant review platform with category filters, popularity ranking, and user ratings. Built using React, Vite, Spring Boot, and MongoDB.",
    contribution:
      "Built full-stack features across React UI, Spring Boot APIs, MongoDB data, and review filtering flows.",
    techStack: ["React", "Vite", "Spring Boot", "MongoDB"],
    imageUrl: "/images/img-unifood.webp",
    //demoUrl: "https://unifood.vercel.app/",
    canvaUrl: "https://canva.link/qpttc7ehv75oau9",
    category: "fullstack",
    badge: "Full-Stack Platform",
  },
];

export const experiences: Experience[] = [
  {
    company: "FORVIZ Company Limited",
    role: "Software Developer Intern",
    period: "January 2026 – April 2026",
    description:
      "Contributed to an AI Voice Assistant product across Python backend, vector database architecture, and frontend implementation.",
    highlights: [
      "Developed Python backend features for an AI Voice Assistant.",
      "Implemented vector database architecture for project-specific knowledge.",
      "Evaluated real-time voice interaction using Google ADK and LiveKit.",
      "Built frontend interfaces from Figma prototypes.",
    ],
    images: [
      {
        src: "/images/img-forviz-intern.webp",
        alt: "Detnarin working with the FORVIZ team during the internship",
        caption: "Internship at FORVIZ",
      },
      {
        src: "/images/img-forviz-office.webp",
        alt: "Office environment at FORVIZ Company Limited",
        caption: "Demo day with FORVIZ teams",
      },
    ],
  },
];

export const experienceAward: ExperienceAward = {
  title: "Award-winning interactive project",
  description:
    "Coding is Magic earned 2nd place in a 2026 university showcase for turning Python learning into a playable Unity experience.",
  images: [
    {
      src: "/images/img-award-coding-is-magic.webp",
      alt: "Detnarin receiving the 2nd place award for Coding is Magic at UTCC showcase 2026",
      caption: "2nd place - UTCC University Showcase 2026",
    },
  ],
};

export const education: Education[] = [
  {
    institution: "University of the Thai Chamber of Commerce (UTCC)",
    degree: "Bachelor of Science in Computer Science",
    period: "August 2022 – May 2026",
    gpa: "3.44",
    honors: "Second-Class Honors",
    activities: [
      "Awarded 2nd place at university showcase 2026 for final project (Coding is Magic).",
    ],
  },
];

export const languages: Language[] = [
  { name: "Thai", level: "Native" },
  {
    name: "English",
    level: "Good command of technical docs & communication",
  },
];
