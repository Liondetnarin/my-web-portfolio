import { personalInfo } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

/** Copy aligned with portfolio — paste into GitHub profile README or LinkedIn */

export const linkedinHeadline =
  "Software Developer | AI Voice Systems · Full-Stack Web · Next.js · Python · Spring Boot";

export const linkedinAbout = `Computer Science student at UTCC (GPAX 3.44, graduating May 2026) with internship experience at FORVIZ Company Limited, where I worked on an AI Voice Assistant — Python backend, vector database architecture, Google ADK, LiveKit, and UI from Figma.

I build production-ready web apps (Next.js, TypeScript, Sanity CMS), full-stack platforms (React, Spring Boot, MongoDB), and interactive projects including an award-winning Unity game (2nd place, UTCC showcase 2026).

Portfolio: ${SITE_URL}
Email: ${personalInfo.email}`;

export const githubProfileReadme = `# Hi, I'm Detnarin Chaiaksorn 👋

**Software Developer** · CS @ UTCC · GPAX 3.44 · Graduating May 2026

Internship experience at **FORVIZ** — AI Voice Assistant (Python, vector DB, Google ADK, LiveKit).

## What I build
- AI-assisted backends & voice systems
- Production websites (Next.js, TypeScript, Tailwind, Sanity CMS)
- Full-stack apps (React, Spring Boot, MongoDB)

## Links
- Portfolio: ${SITE_URL}
- LinkedIn: ${personalInfo.linkedin}
- Email: ${personalInfo.email}

## Tech stack
\`Next.js\` \`React\` \`TypeScript\` \`Python\` \`Spring Boot\` \`MongoDB\` \`Vercel\` \`Docker\``;

export const resumeChecklist = [
  "Role title matches website: Software Developer",
  "FORVIZ internship: Jan 2026 – Apr 2026 with AI Voice Assistant bullets",
  "Projects match portfolio: WenWorks, Dino Marcom, UniFood, Coding is Magic",
  "GPAX 3.44, UTCC CS, graduation May 2026",
  "PDF file size under 1 MB (compress at ilovepdf.com or smallpdf.com if needed)",
  "Same email, GitHub, LinkedIn URLs as on the website",
];
