export type ProjectCategory = "frontend" | "backend" | "fullstack";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  category: ProjectCategory;
  featured?: boolean;
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
