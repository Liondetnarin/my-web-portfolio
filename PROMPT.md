You are a senior full-stack engineer.

Your task is to generate a production-ready developer portfolio web application with clean architecture, high performance, and modern best practices.

---

# 1. PROJECT OVERVIEW

Build a personal developer portfolio with the following requirements:

- Tech Stack:
  - Next.js (App Router)
  - Tailwind CSS
  - TypeScript
  - Deploy on Vercel

- Design:
  - Minimal style
  - Primary theme: white / cream background
  - Clean typography
  - Soft shadow, subtle border
  - Focus on readability and spacing
  - No flashy colors

---

# 2. CORE FEATURES

## Pages:

- Home
- About
- Projects
- Skills
- Contact

## Functional Requirements:

### Home

- Show name, role, intro
- CTA buttons (View Projects, Contact)
- Highlight top 3 projects

### Projects

- Project list (grid layout)
- Each project includes:
  - title
  - description
  - tech stack
  - GitHub link
  - demo link
- Filter by category (frontend/backend/fullstack)

### About

- Bio
- Experience

### Skills

- Categorized skills (frontend/backend/database/tools)

### Contact

- Email, GitHub, LinkedIn
- Optional contact form (with validation)

---

# 3. SYSTEM ARCHITECTURE

Generate folder structure:

/app
/page.tsx
/about/page.tsx
/projects/page.tsx
/contact/page.tsx

/components
Navbar.tsx
Footer.tsx
ProjectCard.tsx

/lib
data.ts

/types
index.ts

---

# 4. DATA HANDLING

- Use static JSON data (no database initially)
- Create mock project data in /lib/data.ts

Example schema:
{
id: string,
title: string,
description: string,
techStack: string[],
githubUrl: string,
demoUrl?: string,
category: "frontend" | "backend" | "fullstack"
}

---

# 5. UI/UX REQUIREMENTS

- Fully responsive (mobile-first)
- Consistent spacing (Tailwind spacing scale)
- Use max-width container (max-w-5xl)
- Use readable font sizes
- Add hover effects (subtle)
- Use grid layout for projects

---

# 6. PERFORMANCE OPTIMIZATION

- Use Next.js Image component
- Use Server Components where possible
- Avoid unnecessary client components
- Lazy load components when needed
- Optimize bundle size

---

# 7. SEO

- Add metadata:
  - title
  - description
  - open graph tags
- Use semantic HTML

---

# 8. SECURITY BEST PRACTICES

- Sanitize user input (contact form)
- Prevent XSS
- Use environment variables (.env)
- Do NOT expose secrets in frontend
- Add rate limit (if contact form exists)

---

# 9. OPTIONAL BACKEND (ADVANCED)

If implementing backend:

- Use Next.js API routes
- Add simple contact form handler
- Optional database:
  - MongoDB (recommended)
- Save messages collection:
  - name
  - email
  - message
  - createdAt

---

# 10. STEP-BY-STEP EXECUTION PLAN

Follow these steps strictly:

### Step 1: Initialize project

- create-next-app with TypeScript and Tailwind

### Step 2: Setup layout

- global layout
- navbar + footer

### Step 3: Build pages

- Home
- About
- Projects
- Contact

### Step 4: Create reusable components

- ProjectCard
- Section wrapper

### Step 5: Add data layer

- static data in /lib/data.ts

### Step 6: Styling

- apply minimal theme
- ensure spacing consistency

### Step 7: Add filtering logic (projects)

### Step 8: Add SEO metadata

### Step 9: Optimize performance

### Step 10: Add optional contact form

---

# 11. DEBUGGING GUIDE

Include debugging checklist:

- Fix hydration errors
- Fix Tailwind not applying
- Fix broken imports
- Fix routing issues
- Fix build errors

---

# 12. DEPLOYMENT

Provide step-by-step:

- Push to GitHub
- Connect to Vercel
- Deploy
- Verify production build

---

# 13. OUTPUT FORMAT

- Generate complete code
- Show file-by-file implementation
- Explain only when necessary
- Prioritize working code over explanation
