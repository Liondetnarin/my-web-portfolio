export type ProjectCategory = "web" | "ai" | "mobile" | "game" | "fullstack";

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  contribution: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  category: ProjectCategory;
  featured?: boolean;
  badge?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
}
