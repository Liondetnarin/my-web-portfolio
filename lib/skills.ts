export type SkillGroupId = "frontend" | "backend" | "data" | "ai" | "delivery";

export interface SkillItem {
  id: string;
  name: string;
  group: SkillGroupId;
  icon: string;
  description: string;
  projectSlugs: string[];
}

export interface SkillGroup {
  id: SkillGroupId;
  name: string;
  shortName: string;
  description: string;
}

export const skillGroups: SkillGroup[] = [
  { id: "frontend", name: "Frontend", shortName: "01", description: "Interfaces that feel clear, responsive, and intentional." },
  { id: "backend", name: "Backend & APIs", shortName: "02", description: "Services and APIs that turn product rules into reliable flows." },
  { id: "data", name: "Data & CMS", shortName: "03", description: "Content and data foundations that keep products useful after launch." },
  { id: "ai", name: "AI", shortName: "04", description: "Practical AI systems connected to real product experiences." },
  { id: "delivery", name: "Deployment & Tools", shortName: "05", description: "The tools that move ideas from a local build to production." },
];

export const skillItems: SkillItem[] = [
  { id: "nextjs", name: "Next.js", group: "frontend", icon: "/images/icon-svg/nextjs-fill-svgrepo-com.svg", description: "My main framework for production websites, routing, performance, and full-stack React experiences.", projectSlugs: ["one-flag-thailand", "luck-ju", "wenworks", "dino-marcom", "tf-superbike"] },
  { id: "typescript", name: "TypeScript", group: "frontend", icon: "/images/icon-svg/typescript-svgrepo-com.svg", description: "Adds dependable contracts to UI and server code as projects grow beyond prototypes.", projectSlugs: ["one-flag-thailand", "luck-ju", "wenworks", "dino-marcom"] },
  { id: "react", name: "React", group: "frontend", icon: "/images/icon-svg/react-svgrepo-com.svg", description: "Used to compose interactive interfaces from small, reusable pieces.", projectSlugs: ["unifood"] },
  { id: "tailwind", name: "Tailwind CSS", group: "frontend", icon: "/images/icon-svg/tailwind-svgrepo-com.svg", description: "A fast way to build responsive visual systems while keeping layouts consistent.", projectSlugs: ["one-flag-thailand", "luck-ju", "wenworks", "dino-marcom", "tf-superbike"] },
  { id: "html", name: "HTML", group: "frontend", icon: "/images/icon-svg/html-5-svgrepo-com.svg", description: "The semantic structure behind accessible web interfaces.", projectSlugs: [] },
  { id: "css", name: "CSS", group: "frontend", icon: "/images/icon-svg/css-3-svgrepo-com.svg", description: "The visual layer for responsive layouts, themes, and interaction states.", projectSlugs: [] },
  { id: "javascript", name: "JavaScript", group: "frontend", icon: "/images/icon-svg/javascript-svgrepo-com.svg", description: "Browser behavior and product interactions that make interfaces feel alive.", projectSlugs: [] },
  { id: "nodejs", name: "Node.js", group: "backend", icon: "/images/icon-svg/node-svgrepo-com.svg", description: "Used for API routes, backend services, and JavaScript tooling around web products.", projectSlugs: [] },
  { id: "java", name: "Java", group: "backend", icon: "/images/icon-svg/java-svgrepo-com.svg", description: "A typed language used for structured backend services and API coursework.", projectSlugs: [] },
  { id: "next-api", name: "Next.js API Routes", group: "backend", icon: "/images/icon-svg/nextjs-fill-svgrepo-com.svg", description: "Server-side endpoints that keep smaller web products close to their UI and deployment.", projectSlugs: [] },
  { id: "spring-boot", name: "Spring Boot", group: "backend", icon: "/images/icon-svg/spring-boot-com.svg", description: "A structured Java backend for APIs, business logic, and full-stack coursework.", projectSlugs: ["unifood"] },
  { id: "python", name: "Python", group: "backend", icon: "/images/icon-svg/python-svgrepo-com.svg", description: "Used for backend work, AI integrations, and experiments that need a flexible runtime.", projectSlugs: [] },
  { id: "mysql", name: "MySQL", group: "data", icon: "/images/icon-svg/mysql-logo-svgrepo-com.svg", description: "Relational storage for structured data, relationships, and predictable queries.", projectSlugs: [] },
  { id: "mongodb", name: "MongoDB", group: "data", icon: "/images/icon-svg/mongodb-svgrepo-com.svg", description: "Document data for flexible product models and review-driven experiences.", projectSlugs: ["unifood"] },
  { id: "supabase", name: "Supabase", group: "data", icon: "/images/icon-svg/supabase-icon.svg", description: "A practical hosted data layer used for product data and commerce workflows.", projectSlugs: ["luck-ju"] },
  { id: "sanity", name: "Sanity", group: "data", icon: "/images/icon-svg/sanity.svg", description: "Structured content management for multilingual and marketing websites.", projectSlugs: ["one-flag-thailand", "wenworks", "dino-marcom"] },
  { id: "ai-agents", name: "AI Agents", group: "ai", icon: "/images/icon-svg/ai-agents.svg", description: "Agent workflows that connect models, tools, and useful actions to a product.", projectSlugs: [] },
  { id: "prompting", name: "Prompt Engineering", group: "ai", icon: "/images/icon-svg/prompt-engineering.svg", description: "Designing clear instructions and evaluation loops for dependable AI behavior.", projectSlugs: [] },
  { id: "machine-learning", name: "Machine Learning", group: "ai", icon: "/images/icon-svg/machine-learning.svg", description: "Exploring model-powered features with a focus on practical user outcomes.", projectSlugs: [] },
  { id: "vercel", name: "Vercel", group: "delivery", icon: "/images/icon-svg/vercel.svg", description: "Deployment and preview workflows for production Next.js websites.", projectSlugs: ["one-flag-thailand", "luck-ju", "wenworks", "dino-marcom", "tf-superbike"] },
  { id: "git", name: "Git", group: "delivery", icon: "/images/icon-svg/git-svgrepo-com.svg", description: "Version control for safe iteration, reviewable changes, and collaboration.", projectSlugs: [] },
  { id: "cicd", name: "CI/CD", group: "delivery", icon: "/images/icon-svg/cicd.svg", description: "Repeatable checks and deployment steps that keep releases easy to review.", projectSlugs: [] },
  { id: "docker", name: "Docker", group: "delivery", icon: "/images/icon-svg/docker-svgrepo-com.svg", description: "Container tooling for repeatable development and service environments.", projectSlugs: [] },
  { id: "figma", name: "Figma", group: "delivery", icon: "/images/icon-svg/figma-svgrepo-com.svg", description: "A shared space for shaping interface ideas before they become code.", projectSlugs: [] },
];
