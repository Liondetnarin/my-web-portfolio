# TASK.md — Developer Portfolio Website

สรุปสิ่งที่ทำไปแล้วในโปรเจกต์ `my-web-portfolio`

---

## ✅ สิ่งที่ทำเสร็จแล้ว

### Step 1 — Initialize Project

- [x] ตั้งค่าโปรเจกต์ Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- [x] ตรวจสอบ docs ใน `node_modules/next/dist/docs/` ตามกฎใน `AGENTS.md`

---

### Step 2 — Setup Layout

- [x] `app/layout.tsx` — Root layout พร้อม Inter font, SEO metadata (title, description, openGraph, twitter, robots)
- [x] `app/globals.css` — Design tokens (ครีม/ขาว), Tailwind v4 syntax, base styles

---

### Step 3 — Build Pages

- [x] `app/page.tsx` — **Home**: Hero section, quick stats, Featured Projects, CTA strip
- [x] `app/about/page.tsx` — **About**: Bio, Experience timeline, Info sidebar
- [x] `app/projects/page.tsx` — **Projects**: Category filter + Project grid
- [x] `app/skills/page.tsx` — **Skills**: 4 หมวด (Frontend / Backend / Database / Tools)
- [x] `app/contact/page.tsx` — **Contact**: Contact form + Social links (Email, GitHub, LinkedIn)

---

### Step 4 — Reusable Components

- [x] `components/Navbar.tsx` — Sticky navbar, logo, nav links (Server Component)
- [x] `components/MobileMenu.tsx` — Hamburger menu (Client Component — ใช้ `useState`)
- [x] `components/Footer.tsx` — Copyright + social links (Server Component)
- [x] `components/ProjectCard.tsx` — Card แสดง title, description, tech stack, GitHub/Demo links (Server Component)
- [x] `components/ProjectFilter.tsx` — Filter buttons: All / Frontend / Backend / Full-Stack (Client Component)
- [x] `components/ContactForm.tsx` — Form พร้อม validation + success state (Client Component)

---

### Step 5 — Data Layer

- [x] `types/index.ts` — TypeScript types: `Project`, `ProjectCategory`, `SkillCategory`, `Experience`, `PersonalInfo`
- [x] `lib/data.ts` — Static mock data (เริ่มต้น):
  - 6 projects (2 frontend, 2 backend, 2 fullstack)
  - 4 skill categories
  - 3 experiences
  - Personal info (name, role, bio, email, github, linkedin)

---

### Step 6 — Styling

- [x] Design system: cream background `#faf9f6`, green accent `#2d6a4f`, Inter font
- [x] Consistent spacing ด้วย Tailwind
- [x] Hover effects, focus ring, smooth transitions
- [x] `max-w-5xl` container ทุกหน้า

---

### Step 7 — Filtering Logic

- [x] `ProjectFilter.tsx` ทำ client-side filtering ด้วย `useState` — กรองตาม category

---

### Step 8 — SEO Metadata

- [x] Root layout: `title template`, `description`, `openGraph`, `twitter card`, `robots`
- [x] แต่ละ page มี `metadata` export ของตัวเอง
- [x] Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<nav>`, `<ol>`, `<time>`)

---

### Step 9 — Performance Optimization

- [x] Pages เป็น Server Components เป็นหลัก (ลด JS bundle)
- [x] เฉพาะ 3 components ที่ต้องการ interactivity เท่านั้นที่เป็น Client Components
- [x] Inter font โหลดผ่าน `next/font/google` พร้อม `display: "swap"`

---

### Step 10 — Contact Form

- [x] `ContactForm.tsx` พร้อม client-side validation (name, email, message)
- [x] Success state หลังส่งฟอร์ม
- [x] ป้องกัน XSS ด้วย manual validation (ไม่ใช้ `dangerouslySetInnerHTML`)

---

### Step 11 — Replace Example Data with Real Info (Detnarin Chaiaksorn)

- [x] `lib/data.ts` — อัปเดต `personalInfo`:
  - name: Detnarin Chaiaksorn
  - email: detnarin.cha@gmail.com
  - github: github.com/Liondetnarin
- [x] `lib/data.ts` — อัปเดต `projects` (6 โปรเจกต์จริง):
  - AI Voice Assistant — Python, Google ADK, Pipe, React (internship @ FORVIZ) — featured
  - WenWorks — Next.js, Tailwind, Sanity, Vercel (live: wenworks.co/th) — featured
  - Coding is Magic — Unity, C# (2nd place @ UTCC Showcase 2026) — featured
  - HomeFlow — React Native
  - UniFood — React, Vite, Spring Boot, MongoDB
  - UTCC PHOBIA — Unreal Engine 5
- [x] `lib/data.ts` — อัปเดต `skillCategories` (ทักษะจริง):
  - Frontend: HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS
  - Backend: Node.js, Python, Java, Spring Boot, C#
  - Database: MySQL, MongoDB
  - Tools: Git, React Native, Unity, Unreal Engine 5, Google ADK, AI Prompting
- [x] `lib/data.ts` — อัปเดต `experiences` (1 ตำแหน่งจริง):
  - Software Developer Intern @ FORVIZ Company Limited
- [x] `app/layout.tsx` — อัปเดต root metadata ชื่อจริง
- [x] `app/page.tsx` — อัปเดต metadata + hero badge + stats ให้ตรงจริง
- [x] `app/about/page.tsx` — อัปเดต metadata description ถูกต้อง
- [x] `app/contact/page.tsx` — อัปเดต metadata + social link values (GitHub, LinkedIn)
- [x] `components/Navbar.tsx` — logo ดึงชื่อจาก `personalInfo` แทน hardcode
- [x] `components/Footer.tsx` — brand name + role ดึงจาก `personalInfo` แทน hardcode

