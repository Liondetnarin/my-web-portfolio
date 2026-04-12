import type { Experience, PersonalInfo, Project, SkillCategory } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Alex Chen",
  role: "Full-Stack Developer",
  bio: "I'm a passionate full-stack developer with 4+ years of experience building scalable web applications. I love creating elegant solutions to complex problems and am always excited to learn new technologies.",
  email: "alex.chen@example.com",
  github: "https://github.com/alexchen",
  linkedin: "https://linkedin.com/in/alexchen",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart, payments via Stripe, and an admin dashboard. Built with Next.js and PostgreSQL.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/alexchen/ecommerce",
    demoUrl: "https://shop-demo.vercel.app",
    category: "fullstack",
    featured: true,
  },
  {
    id: "2",
    title: "Real-Time Chat App",
    description:
      "A real-time messaging application with WebSocket support, rooms, and direct messages. Features end-to-end encryption and media sharing.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    githubUrl: "https://github.com/alexchen/chat-app",
    demoUrl: "https://chat-demo.vercel.app",
    category: "fullstack",
    featured: true,
  },
  {
    id: "3",
    title: "REST API Service",
    description:
      "A scalable REST API for a social media platform. Includes authentication, rate limiting, caching, and comprehensive documentation.",
    techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/alexchen/rest-api",
    category: "backend",
    featured: true,
  },
  {
    id: "4",
    title: "DevTrack Dashboard",
    description:
      "A developer productivity dashboard with GitHub stats, task tracking, and time management tools. Integrates with multiple third-party APIs.",
    techStack: ["React", "TypeScript", "Vite", "Recharts", "Tailwind CSS"],
    githubUrl: "https://github.com/alexchen/devtrack",
    demoUrl: "https://devtrack.vercel.app",
    category: "frontend",
  },
  {
    id: "5",
    title: "Portfolio CMS",
    description:
      "A headless CMS backend built for managing portfolio content. Supports markdown, image uploads to S3, and a webhook system.",
    techStack: ["Node.js", "Fastify", "MongoDB", "AWS S3", "TypeScript"],
    githubUrl: "https://github.com/alexchen/portfolio-cms",
    category: "backend",
  },
  {
    id: "6",
    title: "UI Component Library",
    description:
      "A reusable React component library with 30+ accessible components. Includes Storybook documentation and automated visual regression tests.",
    techStack: ["React", "TypeScript", "Storybook", "Vitest", "CSS Modules"],
    githubUrl: "https://github.com/alexchen/ui-lib",
    demoUrl: "https://ui-lib.vercel.app",
    category: "frontend",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Vite",
    ],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Fastify", "REST APIs", "GraphQL", "Docker"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle ORM"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub Actions", "Vercel", "AWS", "Linux", "Figma"],
  },
];

export const experiences: Experience[] = [
  {
    company: "TechCorp Solutions",
    role: "Senior Full-Stack Developer",
    period: "2023 – Present",
    description:
      "Led development of a multi-tenant SaaS platform serving 50k+ users. Architected microservices migration reducing latency by 40%.",
  },
  {
    company: "WebAgency Pro",
    role: "Full-Stack Developer",
    period: "2021 – 2023",
    description:
      "Built and maintained 15+ client websites and web applications. Introduced TypeScript and improved code review processes.",
  },
  {
    company: "StartupXYZ",
    role: "Frontend Developer",
    period: "2020 – 2021",
    description:
      "Developed responsive React applications and contributed to design system creation. Improved Lighthouse scores from 60 to 95+.",
  },
];
