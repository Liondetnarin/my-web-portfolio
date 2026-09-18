export type ProjectCategory = "web" | "ai" | "mobile" | "game" | "fullstack";

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  contribution: string;
  techStack: string[];
  slug: string;
  githubUrl?: string;
  demoUrl?: string;
  youtubeUrl?: string;
  canvaUrl?: string;
  imageUrl?: string;
  category: ProjectCategory;
  featured?: boolean;
  badge?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ExperienceImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
  images?: ExperienceImage[];
}

export interface ExperienceAward {
  title: string;
  description: string;
  images?: ExperienceImage[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  activities?: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  heroLead: string;
  heroHighlight: string;
  email: string;
  github: string;
  linkedin: string;
  focus?: string;
  resumeUrl?: string;
}
