# แผนปรับปรุง Web Portfolio

วันที่ตรวจ: 18 กันยายน 2026

## ข้อตกลงจากการวางแผน - 19 กันยายน 2026

ส่วนนี้มีลำดับเหนือข้อเสนอจากรีวิวเดิมเมื่อขัดกัน สถานะ: รวบรวมคำตอบครบและจัดทำ [แผนลงมือ](IMPLEMENTATION_PLAN.md) แล้ว รอยืนยันความเข้าใจร่วมกัน ยังไม่เริ่ม implementation

- เป้าหมายหลัก: โชว์ผลงาน ไม่ตั้งสมมติฐานว่าการสมัครงานเป็นเป้าหมายหลัก
- ขอบเขต: แก้ปัญหาที่รีวิว ปรับเนื้อหา/รายละเอียดผลงาน และออกแบบหน้าตาใหม่ (ตัวเลือก C)
- รักษาเอกลักษณ์เดิมและรองรับ light/dark theme; หน้าแรกแนะนำตัวสั้นแล้วเข้าผลงานภาพใหญ่ทันที
- งานเด่น 4 งาน: One Flag Thailand, Luck Ju, WenWorks และ Coding is Magic; หน้ารวมแสดงครบทั้ง 8 งาน
- เปิดรายละเอียดผลงานเป็น popup ที่แชร์ URL ได้ มือถือเกือบเต็มจอ รองรับปิด/Back/Escape/keyboard และกลับตำแหน่งเดิม; เปิด URL ตรงหรือ refresh ยังอ่านรายละเอียดงานนั้นได้
- ซ่อน Code บนการ์ดทุกงาน; ในรายละเอียดแสดง Source code เฉพาะงานที่มี repository เฉพาะงานจริง ไม่ใช้ GitHub profile แทน
- ใช้ข้อมูลเดิมภาษาอังกฤษ: ภาพ, ภาพรวม, สิ่งที่ทำ, เทคโนโลยี, ลิงก์; ไม่แต่งผลลัพธ์หรือบังคับให้ทุกงานเป็น case study ยาว
- ช่องทางติดต่อใช้ลิงก์เดิม ไม่เพิ่ม Copy email, ฟอร์มส่งข้อความ หรือปุ่ม resume เพิ่มจากเดิม
- AI skills ใช้เฉพาะเครื่อง: ในขั้น implementation ให้ ignore `/.agents/skills/` และ `/skills-lock.json`; เลิก track เฉพาะ path เหล่านี้ที่ tracked อยู่โดยคงไฟล์ในเครื่อง เก็บ `AGENTS.md`, application lockfile และเอกสารโปรเจกต์
- บันทึกคำศัพท์ผลงาน/รายละเอียดผลงาน/ดูเว็บใน `CONTEXT.md`

ข้อเสนอเก่าด้านล่างเป็นหลักฐานการรีวิว ให้ใช้ IMPLEMENTATION_PLAN.md เป็นขอบเขตงานล่าสุด โดยเฉพาะเรื่องเป้าหมายโชว์ผลงาน, popup และการคงช่องทางติดต่อเดิม

## ขอบเขตและผลตรวจ

- ตรวจ source code, assets, Git tracked files, `.gitignore`, เอกสาร Next.js ที่ติดตั้ง และ HTML ที่ production build สร้าง
- `npm.cmd run build` ผ่าน รวม TypeScript และ static generation
- เรียก Impeccable detector แล้วไม่มีข้อความผลตรวจกลับมา จึงใช้หลักฐานจากการอ่านโค้ดและ build เป็นหลัก ไม่ถือว่า detector รับรองว่าปลอดปัญหา
- ยังไม่ได้ตรวจใน browser, keyboard, screen reader, Lighthouse หรือปลายทางของ external links และยังไม่ได้อ่านเนื้อหา PDF resume
- ไม่ได้รัน ESLint หรือ dependency security audit
- เก็บการแก้ไขเดิมของผู้ใช้ใน `components/Footer.tsx`, `lib/data.ts`, `skills-lock.json` และ skills ที่ยังไม่ tracked ไว้ตามเดิม
- รอบนี้เพิ่มเอกสารแผนเท่านั้น ไม่แก้ application code หรือ `.gitignore`

พื้นฐานที่ควรเก็บ: แยก content/type/component ชัดเจน, dependency น้อย, static build ได้, มี resume จริง, theme tokens, focus ring, sitemap/robots และลิงก์ภายนอกมี `noopener noreferrer`

## สิ่งที่ควรแก้ ตามลำดับความสำคัญ

P1 = ควรแก้ก่อนใช้สมัครงาน/เผยแพร่รอบถัดไป, P2 = รอบพัฒนาถัดไป, P3 = เก็บรายละเอียด ไม่มี P0 ที่ยืนยันจาก build นี้

| ระดับ | ตำแหน่ง | ปัญหาและผลกระทบ | วิธีแก้ / เกณฑ์เสร็จ |
|---|---|---|---|
| P1 | `lib/data.ts:40` และ `components/ProjectCard.tsx:107` | 7 จาก 8 โปรเจกต์ใช้ GitHub profile แต่ปุ่มเขียน Code และ accessible label ระบุ source code ของงาน ทำให้ผู้ดูหาโค้ดไม่เจอ | ใส่ repository จริง หรือทำ `githubUrl` เป็น optional และซ่อนปุ่มเมื่อไม่มี public source; ทุกปุ่มต้องพาไปตรงตามคำอธิบาย |
| P1 | `components/RevealOnScroll.tsx:26`, `app/globals.css:130` | เนื้อหาเริ่มต้น opacity 0 และต้องรอ JavaScript/observer; ถ้า JS ไม่ทำงาน เนื้อหาสำคัญรวมผลงานและช่องทางติดต่อจะยังซ่อนอยู่ ในกรณีไม่ได้เปิด reduced motion | ใช้ progressive enhancement ให้ HTML เริ่มมองเห็น แล้วเปิด animation หลัง JS พร้อม; ปิด JS แล้วยังอ่านเนื้อหาและเข้าลิงก์ได้ |
| P1 | `components/ProjectListMobile.tsx:77` | dot button มีขนาด 8×8 หรือ 32×8 px กดยาก; ใช้ tab roles แต่ไม่มี tabpanel/arrow-key behavior; scroll แบบ smooth ไม่ตรวจ reduced motion | ใช้ปุ่มธรรมดาใน group พร้อมสถานะปัจจุบันและพื้นที่กด 44×44 px หรือทำ tabs pattern ให้ครบ; reduced motion ต้องไม่บังคับ smooth scroll |
| P1 | `app/globals.css:18`, `app/page.tsx:300` | `--color-accent-hover: #059669` บนพื้นขาว contrast ประมาณ 3.77:1 ใช้กับข้อความขนาดเล็ก เช่น section labels ต่ำกว่าเป้าหมาย 4.5:1 | ทำ token สำหรับข้อความเขียวที่เข้มขึ้นและตรวจทุกพื้นหลังทั้งสองธีม; เก็บสีเดิมใช้ตกแต่งได้ |
| P2 | `app/projects/page.tsx:9`, `app/layout.tsx:25` | HTML `/projects` ไม่มี `og:image`; page metadata ทับ nested Open Graph จาก layout และ Twitter title ยังเป็นหน้าแรก; ทั้งสองหน้าไม่มี canonical | กำหนด shared metadata ให้แต่ละหน้าใช้ครบ เพิ่ม canonical `/` และ `/projects`, ตรวจ HTML ว่ามี OG image, title และ URL ถูกหน้า |
| P2 | `components/ProjectCard.tsx:45`, `app/page.tsx:118` | รูป raster ใช้ `<img>` โดยไม่มี lazy loading หรือ responsive sources; รูปประสบการณ์/รางวัลรวมประมาณ 646 KiB และถูกโหลดตั้งแต่แรก | ใช้ `next/image` พร้อม sizes และ dimensions/fill ตาม layout; ให้รูปใต้ fold lazy load และเลือก preload เฉพาะภาพสำคัญหลังวัด LCP |
| P2 | `components/ProjectList.tsx:43` | render ทั้ง mobile carousel และ desktop grid แล้วซ่อนด้วย CSS ทำให้ DOM การ์ดซ้ำ และมี client carousel แม้บน desktop | ประเมินรวมเป็นรายการ responsive เดียว ถ้ายังแยกให้วัด DOM/JS/network ก่อน; อย่าสรุปว่ารูปดาวน์โหลดซ้ำเพียงเพราะ DOM ซ้ำ |
| P2 | `app/page.tsx:290`, `lib/data.ts:43` | Selected work แสดงทั้ง 8 งาน ไม่ใช้ `featured`; เนื้อหาทับกับหน้า All projects | คัด 3–4 งานเด่นในหน้าแรกด้วย `featured` และเก็บทุกงานที่ `/projects` |
| P2 | `components/ProjectFilter.tsx:9` | AI/Mobile มีจำนวน 0 แต่ยังเป็น filter; ปุ่มไม่บอก active state แก่ assistive technology | สร้าง filter จากหมวดที่มีจริง เพิ่ม `aria-pressed` และข้อความจำนวนผลลัพธ์; ทดสอบการสลับด้วย keyboard |
| P2 | `lib/data.ts:16`, `lib/profile-copy.ts:9` | ข้อความ Internship-ready และ graduating May 2026 ต้องทบทวนให้ตรงสถานะ ณ กันยายน 2026; ข้อความในหน้า projects กล่าวถึง AI/mobile แต่ยังไม่มีงานในสองหมวด | ให้เจ้าของยืนยันสถานะก่อนปรับ ไม่สรุปว่าเรียนจบเอง; ทำข้อความ website/resume/profile ให้ตรงกัน เพิ่ม TypeScript ใน skills เพราะมีผลงานรองรับ และตรวจ TF-Superbike ว่าควรเป็น Web หรือ Full-Stack |
| P2 | `components/Navbar.tsx:32`, `components/MobileMenu.tsx:15` | desktop navigation เริ่มที่ 768px ทั้งชื่อเต็ม 6 ลิงก์ resume และ theme button เสี่ยงแน่นบน tablet; menu ไม่มี Escape/aria-controls | ทดสอบ 768–1024px ก่อนสรุปว่า overflow; ขยับ breakpoint ตามพื้นที่จริง เพิ่ม aria-controls, Escape และการคืน focus โดยไม่จำเป็นต้องทำ focus trap หากยังเป็น disclosure menu |
| P3 | `app/layout.tsx:92`, `components/RevealOnScroll.tsx:22` | ไม่มี skip link; reveal แต่ละตัวผูก scroll listener และตั้ง `will-change` ตลอด รวมทั้งซ่อนซ้ำเมื่อออกจาก viewport | เพิ่ม Skip to content, พิจารณา reveal ครั้งเดียวและลด listener/ลบ will-change ที่ไม่จำเป็นหลังวัดผล |

ไม่สรุปว่า dark section ใน light theme เป็นบั๊ก: navbar, experience และ contact อาจเป็นเจตนาของดีไซน์ ให้ทดสอบ readability/contrast โดยรักษาเอกลักษณ์เดิม

## สิ่งที่ควรเพิ่ม

1. **Case study 2–3 งานเด่น**: ปัญหา, บทบาทส่วนตัว/ทีม, ขอบเขตที่ทำ, การตัดสินใจทางเทคนิค, ภาพหน้าจอ และผลลัพธ์ที่มีหลักฐาน อาจใช้หน้า `/projects/[slug]`; ไม่จำเป็นต้องมี CMS
2. **หลักฐานงาน AI**: ถ้าต้องการใช้ AI เป็นจุดขาย ให้เพิ่ม demo, diagram หรือคำอธิบายส่วนที่เปิดเผยได้จากประสบการณ์จริง ไม่แต่งตัวเลขผลลัพธ์
3. **ช่องทางติดต่อที่สะดวกขึ้น**: Copy email และลิงก์เปิดดู resume ควบคู่ download; ตอนนี้ mailto/GitHub/LinkedIn เพียงพอ ไม่จำเป็นต้องสร้าง backend form
4. **CI ขั้นพื้นฐาน**: `npm ci`, lint เฉพาะโค้ดโปรเจกต์, production build และ smoke checks สำหรับ navigation, filters, theme, resume/asset paths; ไม่ต้องเพิ่ม unit tests ให้ทุก component
5. **เอกสารดูแลเว็บ**: README วิธีเพิ่มผลงาน/เปลี่ยน resume และตรวจ metadata; PRODUCT.md/DESIGN.md เป็นตัวเลือกเมื่อมีการปรับ UX ต่อเนื่อง

ยังไม่จำเป็นต้องเพิ่ม login, database, dashboard, blog หรือระบบหลายภาษา หากยังไม่มีเป้าหมายและเนื้อหาที่รองรับ

## สิ่งที่ควรลบหรือย้าย

- `components/ContactForm.tsx:40`: ไม่มีจุด import ใช้งาน และจำลอง success โดยไม่ส่งข้อความจริง แนะนำลบหากใช้ contact links ต่อ; หากจะนำมาใช้ ต้องทำ endpoint/validation/error state ให้เสร็จก่อน ห้ามถือว่านี่เป็นบั๊กการส่งข้อความบนเว็บปัจจุบัน เพราะฟอร์มไม่ได้แสดง
- `heroStats` ว่างและ wrapper ใน `app/page.tsx:223`: ลบหากไม่มีข้อมูล หรือ render wrapper เฉพาะเมื่อมีรายการ เพื่อไม่เหลือ spacing ว่าง
- `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`: ไม่พบการอ้างอิงใน app/components/lib; ลบหลังยืนยันไม่มีผู้ใช้ลิงก์ตรง
- `public/images/skills/`: มี icon หลายตัวซ้ำกับ `icon-svg`; เก็บ `google-adk.svg` ที่ใช้งานจริงและตรวจ fallback ใน `getSkillIcon` ก่อนลบตัวอื่น
- `lib/profile-copy.ts`: ไม่มีการ import จากเว็บ ย้ายเป็นเอกสาร เช่น `docs/profile-copy.md` ถ้าตั้งใจให้คน copy ไปใช้ภายนอก
- อย่าลบ resume, รูปผลงาน หรือ `AGENTS.md` เพื่อทำให้ repository เล็กลง เพราะเป็น asset/คำแนะนำที่ใช้งานจริง

## แผนลงมือและเกณฑ์รับงาน

| รอบ | งาน | เกณฑ์ผ่าน |
|---|---|---|
| 1 - ความถูกต้องและการเข้าถึง | แก้ Code links, JS fallback, carousel touch/keyboard/reduced motion, contrast และยืนยันสถานะใน profile | ทุก CTA ตรงปลายทาง, ปิด JS ยังอ่านได้, keyboard ใช้งานได้, ข้อความเล็ก contrast ≥4.5:1 |
| 2 - เนื้อหาที่ช่วยสมัครงาน | คัด featured, เพิ่ม case study, จัด skills/category, ปรับข้อความให้สอดคล้องกับ resume | ผู้ดูระบุได้ว่าทำอะไรเองและหลักฐานอยู่ไหน ภายในหน้าแรกและ case study |
| 3 - ประสิทธิภาพและ SEO | responsive images, OG/canonical, ลด DOM/listener ที่ไม่จำเป็น, ตรวจ navbar tablet | HTML metadata ถูกทั้งสองหน้า, resume/images ไม่ 404, ทดสอบ 360/390/768/1024/1440px สองธีม ไม่มี content ถูกตัด |
| 4 - Repository และตรวจรับ | ลบ dead code/assets ที่ยืนยันแล้ว, ตกลง ignore policy, เพิ่ม CI, polish | fresh clone + npm ci + lint + build ผ่าน, Git ไม่มี local state/generated files หลุด, ตรวจ preview จริงก่อน deploy |

แต่ละรอบควรเป็น commit แยก และแยกจากงานเดิมของผู้ใช้ที่ยังไม่ commit

## `.gitignore` ที่แนะนำ

ของเดิมครอบคลุม `node_modules`, `.next`, `out`, `build`, `coverage`, env files, Vercel state, TypeScript build cache, `.codex`, `.cursor` และ npm/yarn logs แล้ว ไม่ต้องเขียนใหม่ทั้งหมด

เพิ่มรายการต่อไปนี้ตามเครื่องมือที่ใช้:

```gitignore
# Windows / editor local files
Thumbs.db
Desktop.ini
*.swp
*.swo
/.idea/

# Local tool state (currently excluded only on this machine)
/.impeccable/config.local.json

# Permit a committed template with dummy values only
!.env.example

# If Playwright is added
/playwright-report/
/test-results/
/blob-report/
```

วาง `!.env.example` หลัง `.env*` และสร้างไฟล์นี้เฉพาะเมื่อมี environment variables ให้ตั้งจริง ตอนนี้ยังไม่พบการใช้ env ใน application code

### นโยบาย AI skills: เลือกหนึ่งแนวทาง

**ใช้เฉพาะเครื่องส่วนตัว:** เพิ่มรายการนี้เพื่อไม่ให้ชุดเครื่องมือ AI ปะปนกับเว็บ

```gitignore
/.agents/skills/
/skills-lock.json
```

**ต้องการแชร์ skills ให้ผู้ร่วมงาน:** เก็บ `skills-lock.json` และ skills ที่ตั้งใจแชร์ไว้ใน Git; ignore เฉพาะ local config/cache หรือใช้ `.git/info/exclude` สำหรับ skills ส่วนตัว ไม่ควร ignore lockfile ไปพร้อมกับตั้งใจใช้มันติดตั้งชุด skills ให้เหมือนกัน

ปัจจุบัน `.agents/skills/grill-with-docs/` และ `skills-lock.json` ถูก tracked แล้ว การเพิ่ม ignore ไม่ทำให้ Git หยุดติดตาม ต้องเลือกนโยบายก่อน แล้วจึงใช้ `git rm --cached` กับ path ที่ยืนยันว่าจะเลิก track โดยยังเก็บไฟล์ในเครื่อง รอบรีวิวนี้ยังไม่ได้ทำ

ไม่ควร ignore: `package-lock.json`, `package.json`, `tsconfig.json`, `next.config.ts`, app/components/lib/types, assets ที่ใช้จริง, PDF resume, README, AGENTS.md และ shared project configuration

อย่าใช้ `*.json`, `*.pdf`, `/public/` หรือ `*.lock` แบบกว้าง เพราะจะซ่อนไฟล์ที่เว็บต้องใช้ และอย่าใช้ `.gitignore` แทนการลบ dead code: โค้ดที่เลิกใช้ควรถูกลบจาก source จริง

ถ้าเก็บ skills scripts ใน repo ให้กำหนด ESLint scope/ignores แยกต่างหาก: `.gitignore` ไม่ใช่ configuration สำหรับ ESLint

## ข้อจำกัดและตรวจต่อ

ยังไม่ให้คะแนน UX รวม/20 เพราะไม่มี visual และ interaction evidence เพียงพอ สิ่งที่ยังต้องตรวจคือ layout จริง, tab/focus, contrast จุดอื่น, mobile overflow, no-JS, browser network และประสิทธิภาพจริง ไม่อ้างว่า WCAG หรือ Lighthouse ผ่านจาก build อย่างเดียว

หากใช้ Impeccable ต่อ: `harden` สำหรับ fallback/interaction → `adapt` สำหรับ mobile/tablet → `optimize` สำหรับรูป/DOM → `polish` ปิดรอบ แล้ว audit ซ้ำหลังแก้ เลือกทำเป็นรอบหรือรวมงานได้ตามแผนนี้
