# TASK.md - Portfolio Full Redesign Plan

โปรเจกต์: `my-web-portfolio`

เป้าหมายหลัก: redesign portfolio ให้ดูเป็น professional developer portfolio สำหรับคนเรียนจบแล้ว ไม่ใช่ student portfolio, จัดลำดับเนื้อหาใหม่ให้ขายตัวตนและผลงานได้ชัดขึ้น, ปรับ ProjectSlider / Other Projects ให้ดูน่าสนใจและใช้งานดีขึ้น, พร้อมเก็บกวาดข้อมูลเก่าที่ไม่ตรงกับตัวจริง

---

## 1. สรุปสภาพโปรเจกต์ปัจจุบัน

### Stack และโครงสร้าง

- Next.js 16.2.3 App Router
- React 19.2.4
- Tailwind CSS v4
- TypeScript
- โครงหลักอยู่ใน:
  - `app/layout.tsx`
  - `app/page.tsx`
  - `app/projects/page.tsx`
  - `app/globals.css`
  - `components/Navbar.tsx`
  - `components/MobileMenu.tsx`
  - `components/ProjectCard.tsx`
  - `components/ProjectSlider.tsx`
  - `components/ProjectFilter.tsx`
  - `components/Footer.tsx`
  - `lib/data.ts`
  - `types/index.ts`

### ข้อดีที่ควรรักษาไว้

- ใช้ Server Components เป็นหลัก เหมาะกับ portfolio และ performance ดี
- Data ถูกแยกไว้ใน `lib/data.ts` ทำให้ปรับ content ได้ง่าย
- Navbar, Footer, ProjectCard, ProjectSlider แยก component ดีแล้ว
- มีรูป project จริงบางส่วนแล้ว เช่น WenWorks, Coding is Magic, UniFood, UTCC PHOBIA
- Skills section มี SVG icon assets พร้อมใช้งาน
- หน้า Home เป็น single-page portfolio แล้ว เหมาะกับการเล่าเรื่องแบบ landing portfolio

### ปัญหาหลักที่พบและสถานะล่าสุด

- [x] `personalInfo.bio` ยังเขียนว่า `Computer Science student` ทั้งที่เรียนจบแล้ว - แก้เป็น professional full-stack bio แล้ว
- [x] Hero ยังมีข้อความ `CS Student @ UTCC` - เอาออกแล้ว และเปลี่ยนเป็น `Full-Stack Developer`
- [x] `app/projects/page.tsx` metadata ยังเป็น `Alex Chen` - แก้เป็น Detnarin Chaiaksorn แล้ว
- [x] Layout หลาย section ยังเป็นแบบเรียงตรง ๆ - redesign Home เป็น Hero / Projects carousel / Skills / Experience / About / Contact แล้ว
- [x] Featured Project hardcode จาก `AI Voice Assistant` - เอา logic hardcode ออกแล้ว ตาม requirement ล่าสุดให้ project ทั้งหมดอยู่ใน ProjectSlider เดียว
- [x] `Other Projects` slider แบบ fade/pagination พื้นฐาน - เปลี่ยนเป็น horizontal scroll snap carousel แล้ว
- [x] `ProjectCard` มี placeholder text generic และ visual hierarchy ยังไม่เด่น - ปรับ card ใหม่ มี badge, summary, contribution, fallback visual, action links แล้ว
- [x] `ProjectCategory` มีแค่ `frontend | backend | fullstack` - เปลี่ยนเป็น `web | ai | mobile | game | fullstack` แล้ว
- [ ] Profile image `public/images/img-profile.png` มีขนาดใหญ่มาก ประมาณ 22MB - ยังควร optimize ก่อน deploy
- [x] Contact section ยังบอกว่า `I typically respond within 24 hours.` - เอาออกแล้ว เปลี่ยนเป็น CTA contact section
- [x] Resume PDF link ใน Navbar ยังเป็น `#` - เปลี่ยนเป็น `#contact` และ CTA เป็น `Hire Me`

---

## 2. Design Direction ใหม่

### Mood

แนวทางที่แนะนำ: modern dark-accent portfolio

- พื้นหลักควรเป็น white / slate very light เพื่ออ่านง่าย
- ใช้ dark navy/slate สำหรับ navbar/footer หรือ section สำคัญ
- Accent สีเขียวคงไว้ได้ เพราะตอนนี้เป็น brand color ของโปรเจกต์แล้ว
- เพิ่ม contrast, spacing, hierarchy ให้เหมือน portfolio ของ developer ที่พร้อมทำงานจริง
- ลดความรู้สึก academic/student และเปลี่ยนเป็น product-minded developer

### Visual Language

- Navbar แบบ compact professional:
  - logo ซ้าย
  - nav กลางหรือขวา
  - CTA ชัดเจน เช่น `Contact` หรือ `Resume`
  - active/hover state ชัด
- Hero แบบ split layout:
  - ซ้าย: positioning, headline, short value statement, CTA
  - ขวา: profile image + experience card / availability card / tech orbit แบบเรียบ
- Section ไม่ควรเป็น card ซ้อน card
- ใช้ full-width bands สลับพื้นสีอ่อน/เข้มอย่างตั้งใจ
- Project cards ควรเน้นรูปก่อน แล้วตามด้วย title, problem, contribution, tech, links

---

## 3. Content Strategy

### เอา Student ออก

ต้องแก้ใน `lib/data.ts` และ `app/page.tsx`

ข้อความใหม่ที่แนะนำ:

- Role:
  - `Full-Stack Developer`
- Hero eyebrow:
  - `Full-Stack Developer`
  - หรือ `Frontend & Backend Developer`
  - หรือ `AI-focused Full-Stack Developer`
- Bio:
  - เปลี่ยนจาก student เป็น developer ที่มีประสบการณ์ internship, client-facing work, project delivery

ตัวอย่าง bio ใหม่:

```text
Full-stack developer focused on building clean, practical web applications with React, Next.js, Python, and backend systems. Experienced in AI voice assistant development, CMS-powered websites, game projects, and real-world testing from internship work.
```

### สิ่งที่ควรเอาออกหรือปรับ

- เอา `CS Student @ UTCC` ออกจาก Hero
- เอา copy ที่ generic เกินไป เช่น `bring ideas to life` หากซ้ำหลายจุด
- เอา placeholder wording เช่น `Placeholder Image`
- ลด quick stats ถ้าไม่มีน้ำหนักพอ หรือเปลี่ยนเป็น stats ที่มีความหมายกว่า
- Resume PDF link ต้องไม่เป็น `#`; ถ้ายังไม่มีไฟล์ให้เปลี่ยน CTA เป็น `Contact Me`

### สิ่งที่ควรเพิ่ม

- Short positioning ใต้ headline:
  - `I build web apps, AI-backed tools, and interactive experiences with clean UI and reliable backend logic.`
- Availability / contact microcopy:
  - `Open to junior developer, full-stack, frontend, and AI-assisted product roles.`
- Project contribution labels:
  - `Internship project`
  - `Production website`
  - `Award-winning game`
  - `Mobile app`
  - `Full-stack platform`

---

## 4. Proposed Information Architecture

### Home Page ใหม่

ลำดับ section ที่แนะนำ:

1. Navbar
2. Hero
3. Project Showcase / ProjectSlider
4. Skills & Tools
5. Experience
6. About
7. Contact
8. Footer

เหตุผล:

- ผลงานควรมาก่อน About เพราะ portfolio ควรพิสูจน์ความสามารถเร็ว
- Skills ควรตามหลัง project เพื่อให้ tech stack มี context
- Experience ควรอยู่ก่อน About หรือรวมกับ About ได้
- Contact อยู่ท้ายสุดชัดเจน

### Navbar

ไฟล์: `components/Navbar.tsx`, `components/MobileMenu.tsx`

แผน:

- เปลี่ยน navbar เป็น dark compact bar หรือ clean glass bar
- แก้ link labels:
  - `Home`
  - `Work`
  - `Skills`
  - `Experience`
  - `Contact`
- เปลี่ยน `Resume PDF` ที่ href `#` เป็น:
  - ถ้ามีไฟล์: `/resume.pdf`
  - ถ้ายังไม่มีไฟล์: `Contact`
- เพิ่ม active state ภายหลังได้ด้วย `usePathname()` ถ้าต้องการ
- Mobile menu ควร match สีและ spacing ของ desktop navbar

### Hero

ไฟล์: `app/page.tsx`

แผน:

- เปลี่ยน headline จาก intro แบบ student เป็น professional positioning
- ใช้ H1 ที่ชัดกว่า:
  - `Full-Stack Developer building practical web and AI-powered tools.`
- ใส่ชื่อจริงใน supporting line แทน headline ยาวเกินไป
- ใช้ CTA 2 ปุ่ม:
  - Primary: `View Work`
  - Secondary: `Contact Me`
- เปลี่ยน tech tags ให้เป็น compact icon chips เหมือนที่ทำแล้ว แต่จัดให้อยู่ใต้ CTA หรือใน right panel
- Profile image:
  - optimize รูปก่อนใช้งานจริง
  - ใช้กรอบที่ดู professional ไม่จำเป็นต้องเป็นวงกลมใหญ่เสมอไป
- เพิ่ม small credibility card:
  - `Software Developer Intern @ FORVIZ`
  - `AI Voice Assistant`
  - `Next.js / React / Python`

### Project Showcase

ไฟล์: `app/page.tsx`, `components/ProjectCard.tsx`

แผนล่าสุด:

- [x] เลิก hardcode featured project จาก title เดียว
- [x] รวม project ทั้งหมดจาก `projects` เข้า `ProjectSlider` เดียวตาม requirement ล่าสุด
- [x] ให้ section มี `id="projects"` เพื่อให้ CTA `View Work` scroll มาถูกจุด
- [x] เน้น `summary`, `contribution`, `badge` ใน ProjectCard แทน description ยาวอย่างเดียว
- [x] เพิ่ม fallback visual ที่ดูตั้งใจ เช่น gradient with project initials แทน `Placeholder Image`

### Other Projects / ProjectSlider

ไฟล์: `components/ProjectSlider.tsx`, `components/ProjectCard.tsx`

ปัญหาปัจจุบัน:

- Slider แสดง 2 cards แล้ว fade ทำงานได้ แต่ไม่รู้สึกเป็น carousel ที่ลื่น
- Dot เท่ากับจำนวน project แต่เมื่อแสดงทีละ 2 ทำให้ UX อาจสับสน
- ไม่มี disabled state เพราะ loop ตลอด
- `setTimeout` transition ง่ายแต่ถ้ากดเร็วอาจเกิด state ซ้อน
- Cards ยังสูงไม่เท่ากันได้จาก description ที่ยาวต่างกัน

แผน redesign:

- เปลี่ยนชื่อ section จาก `Other Projects` เป็น `More Projects` หรือ `Project Archive`
- ถ้ามี project ไม่เยอะ ให้ใช้ responsive grid อาจดีกว่า slider
- ถ้าจะเก็บ slider:
  - Desktop: horizontal scroll carousel พร้อม snap
  - Mobile: swipe/scroll ธรรมชาติ ไม่ต้องพึ่งปุ่มมาก
  - Controls เป็น icon buttons ชัดเจน
  - Counter เป็น `01 / 04` หรือ progress bar
  - Cards ใช้ fixed min-height เพื่อไม่กระโดด
  - รูป project มี aspect ratio เท่ากัน
  - เพิ่ม category badge และ featured marker
- ProjectCard ใหม่:
  - image area สูงขึ้นและดู cinematic
  - title + short one-line impact
  - description จำกัดบรรทัดด้วย line-clamp
  - tech chips ไม่ควรเยอะเกิน 4-5 ตัว
  - link buttons ใช้ icon + label

### Skills

ไฟล์: `app/page.tsx`

แผน:

- ใช้ icon grid ต่อได้ แต่ลดกรอบ card ให้น้อยลง
- แยกเป็น 4 กลุ่ม:
  - Frontend
  - Backend
  - Database
  - Tools & Design
- แนะนำเพิ่ม skill ที่มีใน project จริง:
  - Spring Boot ถ้ายังใช้กับ UniFood
  - Unity
  - Unreal Engine 5
  - React Native
  - Google ADK
- ถ้ายังไม่มี icon จริง ให้ใช้ fallback ที่ดูตั้งใจ ไม่ใช้ broken path

### Experience

ไฟล์: `app/page.tsx`, `lib/data.ts`

แผน:

- เปลี่ยนจาก timeline ธรรมดาเป็น experience block ที่อ่านเร็ว
- Update wording จาก intern-only เป็น professional:
  - `Software Developer Intern`
  - ใส่ผลลัพธ์ที่ทำจริง เช่น backend features, database design, voice pipeline testing, frontend implementation
- ถ้าเรียนจบแล้ว ไม่ต้องเอา academic label ขึ้น hero
- อาจเก็บ award จาก Coding is Magic ไว้เป็น credibility card

### About

ไฟล์: `app/page.tsx`

แผน:

- สั้นลงและเฉพาะเจาะจงขึ้น
- ไม่ซ้ำกับ bio ใน Hero
- เล่า style การทำงาน:
  - clean UI
  - practical backend logic
  - testing with feedback
  - collaboration

### Contact

ไฟล์: `app/page.tsx`

แผน:

- ใช้ CTA section ที่เด่นกว่า social cards ปัจจุบัน
- Headline:
  - `Let's build something useful.`
- Links:
  - Email
  - GitHub
  - LinkedIn
- ถ้าไม่มี contact form แล้ว social cards ควรดูเหมือน action buttons ไม่ใช่ card ใหญ่เกินไป

### Footer

ไฟล์: `components/Footer.tsx`

แผน:

- คง dark footer ได้
- แก้ copy ให้สั้น:
  - `Built with Next.js, React, and Tailwind CSS.`
- ให้ links match navbar labels

---

## 5. Data Model Improvements

ไฟล์: `types/index.ts`, `lib/data.ts`

### Project type ที่แนะนำ

ควรเพิ่ม field เพื่อให้ card และ showcase ดูดีขึ้น:

```ts
export interface Project {
  id: string;
  title: string;
  description: string;
  summary?: string;
  contribution?: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  category: ProjectCategory;
  featured?: boolean;
  badge?: string;
}
```

### ProjectCategory ที่แนะนำ

ตัวเลือกใหม่:

```ts
export type ProjectCategory =
  | "web"
  | "ai"
  | "mobile"
  | "game"
  | "fullstack";
```

หรือถ้าอยากคง filter เดิม:

- `frontend`
- `backend`
- `fullstack`
- `mobile`
- `game`
- `ai`

### Data ที่ต้องแก้ทันที

- `personalInfo.bio`: เอา student ออก
- `app/projects/page.tsx` metadata: เอา Alex Chen ออก
- `projects`: ปรับ category ให้ตรง project จริง
- `AI Voice Assistant`: เพิ่ม `imageUrl` หรือ fallback visual แบบ custom
- `Resume PDF`: ถ้ายังไม่มีไฟล์จริง ให้ไม่ใช้ href `#`

---

## 6. Visual Cleanup Checklist

- [x] ตรวจสีใน `app/globals.css` ว่าไม่กลายเป็น palette โทนเดียวเกินไป
- [x] เพิ่ม dark section อย่างตั้งใจ ไม่ใช่ทั้งเว็บมืดหมด
- [x] ใช้ `max-w-6xl` ใน section ที่ต้องการ visual breadth มากกว่า `max-w-5xl`
- [ ] Hero ต้องไม่อัดแน่นเกินไปบน mobile - ยังควรตรวจด้วย browser screenshot จริง
- [x] Project cards ต้องสูงเท่ากันใน grid/slider
- [x] ปุ่มทุกปุ่มต้องมี hover/focus state
- [x] Icon-only buttons ต้องมี `aria-label`
- [ ] รูป project ต้องไม่ crop จุดสำคัญจนเสียรายละเอียด - ยังควรตรวจภาพจริงใน browser
- [ ] Text ใน card/button ต้องไม่ล้นบน mobile - ยังควรตรวจด้วย browser screenshot จริง
- [x] หลีกเลี่ยง card ซ้อน card

---

## 7. Implementation Plan

### Phase 1 - Content and Metadata Cleanup

- [x] แก้ `lib/data.ts`
  - [x] เอา `student` ออกจาก bio
  - [x] ปรับ role/bio ให้เหมาะกับ graduate developer
  - [x] ปรับ project categories ให้ตรงจริง
  - [x] เพิ่ม `summary`, `contribution`, `badge`
- [x] แก้ `app/projects/page.tsx`
  - [x] เปลี่ยน metadata จาก Alex Chen เป็น Detnarin Chaiaksorn
  - [x] ปรับ header copy ให้ professional ขึ้น
- [x] แก้ CTA ที่ href `#`
  - [x] ถ้ายังไม่มี resume: เปลี่ยนเป็น `#contact`

### Phase 2 - Design Tokens and Global Styling

- [x] ปรับ `app/globals.css`
  - [x] เพิ่ม token สำหรับ dark surface เช่น `--color-dark`, `--color-dark-muted`
  - [x] เพิ่ม token สำหรับ accent hover
  - [x] ตรวจ focus ring และ base body background
- [x] กำหนด spacing pattern:
  - [x] section padding desktop
  - [x] section padding mobile
  - [x] container width `max-w-6xl` สำหรับ showcase

### Phase 3 - Navbar and Mobile Menu Redesign

- [x] ปรับ `components/Navbar.tsx`
  - [x] compact sticky navbar
  - [x] logo professional
  - [x] nav labels ใหม่
  - [x] CTA ชัดเจน
- [x] ปรับ `components/MobileMenu.tsx`
  - [x] สีและ spacing match desktop navbar
  - [x] dropdown ไม่บังหรือทำให้ layout shift แปลก
  - [x] CTA ใน mobile menu ใช้ link จริง

### Phase 4 - Home Page Layout Redesign

- [x] ปรับ `app/page.tsx`
  - [x] Hero ใหม่
  - [x] ลบข้อความ student
  - [x] จัด CTA ใหม่
  - [x] ปรับ tech tags ให้กลมกลืน
  - [x] จัด profile image/card ด้านขวาใหม่
  - [x] ย้าย project section ให้เด่นขึ้น
  - [x] ปรับ About/Experience/Skills/Contact ตาม IA ใหม่

### Phase 5 - Project System Redesign

- [x] ปรับ `types/index.ts` เพิ่ม field ใหม่
- [x] ปรับ `components/ProjectCard.tsx`
  - [x] visual hierarchy ใหม่
  - [x] image fallback ใหม่
  - [x] fixed card structure
  - [x] tech chip limit หรือ layout ที่ไม่ยืด card
  - [x] action links ชัดขึ้น
- [x] ปรับ `components/ProjectSlider.tsx`
  - [x] เลือกแนวทาง carousel
  - [x] ใช้ horizontal scroll snap
  - [x] ปรับ controls/progress/counter
  - [x] รองรับ mobile touch/scroll ดีขึ้น
- [x] ปรับ `components/ProjectFilter.tsx`
  - [x] filter category ใหม่
  - [x] filter buttons เป็น segmented controls ที่ดู professional

### Phase 6 - Assets and Performance

- [ ] Optimize `public/images/img-profile.png`
  - [ ] ลดขนาดจากประมาณ 22MB ให้เหลือเหมาะกับเว็บ
  - [ ] อาจแปลงเป็น `.webp`
- [ ] ตรวจ project images
  - [ ] ขนาดไม่ใหญ่เกินจำเป็น
  - [x] aspect ratio เหมาะกับ card
- [ ] พิจารณาใช้ `next/image` สำหรับรูปใหญ่ หากเข้ากับ Next 16 docs และ pattern โปรเจกต์

### Phase 7 - Polish and Verification

- [x] รัน `npm run lint`
- [x] รัน `npm run build`
- [x] เปิด local dev server
- [ ] ตรวจหน้า:
  - [ ] desktop visual pass
  - [ ] tablet
  - [ ] mobile
- [ ] ตรวจ keyboard navigation
- [x] ตรวจ anchor scroll เบื้องต้นจากโค้ด (`#projects`, `#skills`, `#experience`, `#contact`)
- [ ] ตรวจ external links
- [x] ตรวจว่าไม่มีข้อความ student เหลืออยู่
- [x] ตรวจว่าไม่มี Alex Chen เหลืออยู่
- [x] ตรวจว่าไม่มี placeholder wording ที่ดูไม่พร้อม production

---

## 8. Recommended Final Look

### Home first viewport

- Dark/clean navbar
- Hero ที่พูดชัดว่าเป็น Full-Stack Developer
- CTA ไป projects/contact
- Profile visual ที่ไม่ใหญ่เกินไป
- Tech tags แบบ icon chips
- หน้าจอแรกต้องเห็น hint ของ project section ถัดไปเล็กน้อย

### Projects

- Featured work ควรเป็น highlight ของหน้า ไม่ใช่ section รอง
- Project cards ควรบอก:
  - ทำอะไร
  - ใช้ tech อะไร
  - contribution คืออะไร
  - ไปดู source/demo ได้ที่ไหน

### Overall

- Professional
- Clean
- Fast
- ไม่ดูเหมือน template student portfolio
- ไม่พูดเยอะเกิน แต่ข้อมูลพอให้ recruiter/client เข้าใจเร็ว

---

## 9. Suggested Extra Improvements

- เพิ่ม `resume.pdf` จริงใน `public/resume.pdf`
- เพิ่ม Open Graph image สำหรับแชร์ portfolio
- เพิ่ม project detail page ในอนาคต เช่น `/projects/ai-voice-assistant`
- เพิ่ม case study สั้นสำหรับ 2-3 project เด่น
- เพิ่ม analytics หลัง deploy ถ้าต้องการดู traffic
- เพิ่ม `robots` และ sitemap ถ้าจะจริงจังกับ SEO
- เพิ่ม image optimization pipeline หรือแทนรูป profile ด้วย web-optimized asset

---

## 10. Definition of Done

งาน redesign ถือว่าเสร็จเมื่อ:

- [x] ไม่มีคำว่า student ใน content หลัก
- [x] ไม่มีชื่อ placeholder/persona ผิด เช่น Alex Chen
- [x] Navbar, Hero, Projects, Skills, Experience, Contact ดูเป็นระบบเดียวกันในโค้ด/design direction
- [ ] ProjectSlider ดูดีขึ้นชัดเจนทั้ง desktop และ mobile - ยังต้องตรวจ visual จริงบน viewport ต่าง ๆ
- [x] Project cards แสดงรูป/ข้อความ/links อย่างสมดุล
- [x] `npm run lint` ผ่าน
- [x] `npm run build` ผ่าน
- [ ] ทดสอบหน้าเว็บจริงบน local แล้ว layout ไม่แตกทุก viewport

---

## 11. Current Alignment Review

สถานะล่าสุดหลัง redesign:

- [x] Content สอดคล้องกับสถานะเรียนจบแล้ว ไม่มี positioning แบบ student ใน `app`, `components`, `lib`, `types`
- [x] Metadata หลักและหน้า Projects สอดคล้องกับ Detnarin Chaiaksorn
- [x] Navbar / MobileMenu สอดคล้องกับ dark compact professional direction
- [x] Hero สอดคล้องกับ professional full-stack positioning
- [x] Project data model สอดคล้องกับ ProjectCard ใหม่ (`summary`, `contribution`, `badge`, category ใหม่)
- [x] Project section ล่าสุดสอดคล้องกับ requirement ใหม่: project ทั้งหมดอยู่ใน `ProjectSlider`
- [x] Skills เพิ่ม tool ที่ตรงกับ project จริง เช่น Spring Boot, Google ADK, React Native, Unity, Unreal Engine 5
- [x] Contact เปลี่ยนเป็น CTA section ไม่ใช้ copy generic แบบเดิม
- [x] Verification ผ่าน `npm run lint`
- [x] Verification ผ่าน `npm run build`
- [ ] ยังไม่เสร็จด้าน asset optimization: profile image ยังใหญ่เกินไปสำหรับ production
- [ ] ยังควรทำ visual QA จริงด้วย browser screenshot บน desktop/tablet/mobile
