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

---

### Step 12 — Single-Page Portfolio & UI Enhancement

- [x] ลบโฟลเดอร์ `app/about`, `app/skills`, `app/contact` เปลี่ยนไปเป็นหน้าเดียวจบ
- [x] ย้ายเนื้อหาของ `About`, `Skills`, `Contact` มารวมกันใน `app/page.tsx` โดยแบ่งเป็น `<section id="...">` สลับสีพื้นหลังสวยงาม
- [x] อัปเดต `Navbar` และ `MobileMenu` ให้ใช้ Anchor Link `/#about`, `/#skills`, `/#contact` เพื่อเลื่อนหน้าอย่างนุ่มนวล
- [x] เปลี่ยนปุ่ม "Hire Me" เป็น "Resume PDF" พร้อมลิงก์ไปยังไฟล์ PDF (ใช้ Placeholder `#` ไว้ก่อน)
- [x] เพิ่ม `imageUrl` field ให้กับ `Project` type ใน `types/index.ts`
- [x] ปรับแก้ `ProjectCard` ให้รองรับรูปภาพตัวอย่าง ถ้าไม่มีจะแสดงกล่อง Placeholder สีสวยงามแทน

---

### Step 13 — Hero, Contact & Projects UI Overhaul ✅

- [x] Hero: เพิ่ม Profile Image Placeholder (ฝั่งขวา) พร้อม decorative element รองรับใส่รูปจริงทีหลัง
- [x] Hero: เปลี่ยน tech tags เป็น pill badges พร้อม icon (▲ Next.js, ⚛ React, TS TypeScript, 🐍 Python, 🟢 Node.js)
- [x] Contact: ลบ ContactForm ออก เหลือเฉพาะ social link cards (Email, GitHub, LinkedIn) จัดแบบ grid-3-cols
- [x] Other Projects: สร้าง `components/ProjectSlider.tsx` (Client Component) แสดง 2 โปรเจกต์พร้อมปุ่ม prev/next + dots indicator
- [x] CLAUDE.md: อัปเดตเป็น Project Context จริงแทน placeholder
- [x] SKILL.md: ย่อ + อัปเดต stack ให้ตรงกับโปรเจกต์จริง (Next.js 16, React 19, Tailwind 4)

---

## 📋 แผนงานถัดไป

### Step 14 — Profile Image & Resume

- [ ] ใส่รูป profile จริงใน `public/images/profile.jpg`
- [ ] แก้ `app/page.tsx` Hero ให้แสดงรูปจริงด้วย `<img>` (หรือ `next/image`)
- [ ] อัปโหลด Resume PDF จริงใส่ `public/resume.pdf`
- [ ] อัปเดต Resume PDF link ใน Navbar จาก `#` เป็น `/resume.pdf`

---

### Step 15 — Skills Section: Image Icons ✅

- [x] ลบ chip badge แบบ text-icon ออก
- [x] สร้าง SVG placeholder icons 19 ไฟล์ใน `public/images/skills/` พร้อมสีแบรนด์จริง
- [x] Redesign Skills section เป็น icon grid (4 cols) — แต่ละ skill: icon box + ชื่อ
- [x] Layout เปลี่ยนจาก 4-col cards → 2-col cards (ช่องว่างมากขึ้น สำหรับ icon grid)
- [x] Slug map: skill name → filename (`/images/skills/{slug}.svg`)

**SVG icons ที่ต้องแทนที่ด้วยรูปจาก Flaticon:**
| Filename | Tech | Flaticon search |
|----------|------|----------------|
| `html.svg` | HTML5 | "html5" |
| `css.svg` | CSS3 | "css3" |
| `javascript.svg` | JavaScript | "javascript" |
| `typescript.svg` | TypeScript | "typescript" |
| `react.svg` | React | "react" |
| `nextjs.svg` | Next.js | "nextjs" |
| `tailwindcss.svg` | Tailwind CSS | "tailwind" |
| `nodejs.svg` | Node.js | "nodejs" |
| `python.svg` | Python | "python" |
| `java.svg` | Java | "java" |
| `springboot.svg` | Spring Boot | "spring" |
| `csharp.svg` | C# | "csharp" |
| `mysql.svg` | MySQL | "mysql" |
| `mongodb.svg` | MongoDB | "mongodb" |
| `git.svg` | Git | "git" |
| `react-native.svg` | React Native | "react" |
| `unity.svg` | Unity | "unity" |
| `unreal.svg` | Unreal Engine 5 | "unreal engine" |
| `google-adk.svg` | Google ADK | "google" |

---

### Step 16 — Color Scheme: Green / Dark Gray / White ✅

- [x] `--color-cream`: `#faf9f6` → `#f1f5f9` (cool slate-100, ไม่ warm cream)
- [x] `--color-border`: `#e8e5de` → `#e2e8f0` (cooler slate-200)
- [x] `--color-text`: `#1a1a18` → `#0f172a` (slate-900, เข้มขึ้น)
- [x] `--color-muted`: `#72716c` → `#64748b` (slate-500, cooler)
- [x] `--color-accent`: `#2d6a4f` → `#16a34a` (green-600, สด/vivid ขึ้น)
- [x] `--color-accent-light`: `#d8f3e4` → `#dcfce7` (green-100)
- [x] Footer: เปลี่ยนเป็น dark gray (`#0f172a`) พร้อม white/slate text
- [x] Build ผ่านแล้ว ✓

---

### Step 17 — Hero & Projects UX ✅

- [x] Profile Hero: เปลี่ยนจาก `rounded-2xl` → `rounded-full` (วงกลม)
- [x] Profile Hero: Decorative element เปลี่ยนเป็น accent ring รอบวงกลม
- [x] ProjectSlider: เพิ่ม fade transition (opacity 180ms) เมื่อเปลี่ยน slide
- [x] ProjectSlider: เพิ่ม slide counter "Showing X–Y of Z"
- [x] ProjectSlider: Active dot เปลี่ยนจาก dot → elongated pill
- [x] ProjectSlider: Arrows ย้ายไปฝั่งขวา, dots ฝั่งซ้าย (justify-between layout)
- [x] Build ผ่านแล้ว ✓

---

### Step 18 — Smooth Scroll & Accessibility ✅

- [x] `scroll-behavior: smooth` ใน `html` (มีอยู่แล้ว)
- [x] `:focus-visible` outline accent ครอบคลุมทุก element (มีอยู่แล้ว)
- [x] `aria-label` ครบทุก icon-only buttons

---

## 📋 แผนงานถัดไป

### Step 19 — Profile Image & Resume (รอ asset จากคุณ)

| รายการ | action |
|--------|--------|
| รูป profile จริง | ใส่ไฟล์ที่ `public/images/profile.jpg` (หรือ `.png`) |
| แก้ Hero | เปลี่ยน placeholder div → `<img src="/images/profile.jpg">` |
| Resume PDF | ใส่ไฟล์ที่ `public/resume.pdf` |
| แก้ Navbar | เปลี่ยน `href="#"` → `href="/resume.pdf"` ใน Resume PDF link |

---

### Step 20 — Replace Skill SVG Placeholders ด้วยรูปจาก Flaticon

1. ดาวน์โหลด icon จาก [Flaticon](https://www.flaticon.com/) ตาม table ใน Step 15
2. ตั้งชื่อไฟล์ตาม slug (เช่น `react.svg`, `python.svg`)
3. วางใน `public/images/skills/`
4. ไฟล์จะ replace placeholder SVG ทันที (ชื่อไฟล์เดิม)

---

### Step 21 — Deploy to Production

- [ ] `npm run build` ผ่าน ✓ (ผ่านแล้ว)
- [ ] Push ทุก changes ไป GitHub
- [ ] Verify บน Vercel production: https://my-web-portfolio-fawn.vercel.app/
