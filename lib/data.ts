import type { Experience, PersonalInfo, Project, SkillCategory } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Detnarin Chaiaksorn",
  role: "Full-Stack Developer",
  bio: "Computer Science student with an interest in full-stack development. Experienced in building academic and personal projects across frontend and backend, with some hands-on experience in client demos and requirement gathering. Interested in AI, IoT, and emerging technologies.",
  email: "detnarin.cha@gmail.com",
  github: "https://github.com/Liondetnarin",
  linkedin: "https://linkedin.com/in/detnarin-chaiaksorn",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Voice Assistant",
    description:
      "Built an AI voice assistant during internship at FORVIZ. Developed backend features, designed database, and tested voice pipelines using Google ADK and Python. Implemented frontend UI and conducted real-world testing with user feedback.",
    techStack: ["Python", "Google ADK", "React", "TypeScript"],
    githubUrl: "https://github.com/Liondetnarin",
    category: "fullstack",
    featured: true,
  },
  {
    id: "2",
    title: "WenWorks",
    description:
      "Developed a high-performance marketing website with multi-language support and CMS integration using Next.js, Tailwind, and Sanity. Focused on performance and clean UI.",
    techStack: ["Next.js", "Tailwind CSS", "Sanity", "TypeScript"],
    githubUrl: "https://github.com/Liondetnarin",
    demoUrl: "https://www.wenworks.co/th",
    category: "frontend",
    featured: true,
  },
  {
    id: "3",
    title: "Coding is Magic",
    description:
      "2D pixel art game (Unity, C#) designed to teach Python through puzzle-based gameplay. Awarded 2nd place in university showcase 2026.",
    techStack: ["Unity", "C#", "2D Game"],
    githubUrl: "https://github.com/Liondetnarin",
    category: "frontend",
    featured: true,
  },
  {
    id: "4",
    title: "HomeFlow",
    description:
      "Mobile-first web app for managing home tasks and resources with a clean and user-friendly interface.",
    techStack: ["React Native", "JavaScript"],
    githubUrl: "https://github.com/Liondetnarin",
    category: "frontend",
  },
  {
    id: "5",
    title: "UniFood",
    description:
      "Full-stack restaurant review platform with filtering, ranking, and user ratings. Built using React, Spring Boot, and MongoDB.",
    techStack: ["React", "Spring Boot", "MongoDB", "Java"],
    githubUrl: "https://github.com/Liondetnarin",
    category: "fullstack",
  },
  {
    id: "6",
    title: "UTCC PHOBIA",
    description:
      "3D horror game built with Unreal Engine 5, featuring custom environments, gameplay mechanics, and interactive storytelling.",
    techStack: ["Unreal Engine 5", "Blueprints", "3D"],
    githubUrl: "https://github.com/Liondetnarin",
    category: "frontend",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "Java", "Spring Boot", "C#"],
  },
  {
    name: "Database",
    skills: ["MySQL", "MongoDB"],
  },
  {
    name: "Tools",
    skills: [
      "Git",
      "React Native",
      "Unity",
      "Unreal Engine 5",
      "Google ADK",
      "AI Prompting",
    ],
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