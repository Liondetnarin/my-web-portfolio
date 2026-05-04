import type { Experience, PersonalInfo, Project, SkillCategory } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Detnarin Chaiaksorn",
  role: "Full-Stack Developer",
  bio: "Full-stack developer focused on building clean, practical web applications with React, Next.js, Python, and backend systems. Experienced in AI voice assistant development, CMS-powered websites, game projects, and real-world testing from internship work.",
  email: "detnarin.cha@gmail.com",
  github: "https://github.com/Liondetnarin",
  linkedin: "https://linkedin.com/in/detnarin-chaiaksorn",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Voice Assistant",
    summary: "Voice-driven assistant built across backend, database, and frontend workflows.",
    description:
      "Built an AI voice assistant during internship at FORVIZ. Developed backend features, designed database, and tested voice pipelines using Google ADK and Python. Implemented frontend UI and conducted real-world testing with user feedback.",
    contribution:
      "Implemented backend features, designed database flows, built UI from prototypes, and tested voice pipelines with real users.",
    techStack: ["Python", "Google ADK", "React", "TypeScript"],
    githubUrl: "https://github.com/Liondetnarin",
    category: "ai",
    featured: true,
    badge: "Internship Project",
  },
  {
    id: "2",
    title: "WenWorks",
    summary: "CMS-powered multilingual marketing website built with Next.js.",
    description:
      "Developed a high-performance marketing website with multi-language support and CMS integration using Next.js, Tailwind, and Sanity. Focused on performance and clean UI.",
    contribution:
      "Delivered responsive pages, CMS content structure, multilingual routing, and performance-focused UI details.",
    techStack: ["Next.js", "Tailwind CSS", "Sanity", "TypeScript"],
    imageUrl: "/images/img-wenworks.png",
    githubUrl: "https://github.com/Liondetnarin",
    demoUrl: "https://www.wenworks.co/th",
    category: "web",
    featured: true,
    badge: "Production Website",
  },
  {
    id: "3",
    title: "Coding is Magic",
    summary: "Award-winning 2D game that teaches Python through puzzle play.",
    description:
      "2D pixel art game (Unity, C#) designed to teach Python through puzzle-based gameplay. Awarded 2nd place in university showcase 2026.",
    contribution:
      "Built gameplay systems, learning interactions, and presentation-ready game flow with Unity and C#.",
    techStack: ["Unity", "C#", "2D Game"],
    imageUrl: "/images/img-coding-is-magic.png",
    githubUrl: "https://github.com/Tanakorn-C/Coding-is-Magic-RPG",
    demoUrl: "https://play.unity.com/en/games/a3a8b201-7355-4eb9-9879-6b9b04a3737b/webgl",
    category: "game",
    featured: true,
    badge: "2nd Place Award",
  },
  {
    id: "4",
    title: "HomeFlow",
    summary: "Mobile-first task and household resource management app.",
    description:
      "Mobile-first web app for managing home tasks and resources with a clean and user-friendly interface.",
    contribution:
      "Designed core mobile flows and built practical task management screens with a clean interaction model.",
    techStack: ["React Native", "JavaScript"],
    githubUrl: "https://github.com/Liondetnarin",
    category: "mobile",
    badge: "Mobile App",
  },
  {
    id: "5",
    title: "UniFood",
    summary: "Restaurant review platform with rankings, filtering, and user ratings.",
    description:
      "Full-stack restaurant review platform with filtering, ranking, and user ratings. Built using React, Spring Boot, and MongoDB.",
    contribution:
      "Built full-stack features across React UI, Spring Boot APIs, MongoDB data, and review filtering flows.",
    techStack: ["React", "Spring Boot", "MongoDB", "Java"],
    imageUrl: "/images/img-unifood.png",
    githubUrl: "https://github.com/Liondetnarin",
    demoUrl: "https://canva.link/qpttc7ehv75oau9",
    category: "fullstack",
    badge: "Full-Stack Platform",
  },
  {
    id: "6",
    title: "UTCC PHOBIA",
    summary: "3D horror game prototype built with Unreal Engine 5.",
    description:
      "3D horror game built with Unreal Engine 5, featuring custom environments, gameplay mechanics, and interactive storytelling.",
    contribution:
      "Created interactive gameplay, environments, and presentation-ready horror experience in Unreal Engine 5.",
    techStack: ["Unreal Engine 5", "Blender", "3D"],
    imageUrl: "/images/img-utcc.png",
    githubUrl: "https://github.com/Liondetnarin",
    demoUrl: "https://youtu.be/dMLk6AdQNng",
    category: "game",
    badge: "3D Game",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "Java", "C#"],
  },
  {
    name: "Database",
    skills: ["MySQL", "MongoDB", "Supabase"],
  },
  {
    name: "Tools",
    skills: ["Git", "Figma"],
  },
];

export const experiences: Experience[] = [
  {
    company: "FORVIZ Company Limited",
    role: "Software Developer Intern",
    period: "January 2026 – May 2026",
    description:
      "Worked on an AI Voice Assistant system across frontend and backend. Designed database, implemented features, and tested voice systems using Google ADK. Built UI from prototypes and participated in real-world testing to improve system performance.",
  },
];
