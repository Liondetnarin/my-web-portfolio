# แผนปรับปรุง Portfolio

วันที่: 19 กันยายน 2026
สถานะ: รอบ implementation หลักเสร็จ - เหลือ visual/browser QA และการเติมข้อมูลที่ต้องยืนยัน
อ้างอิง: [ผลรีวิว](REVIEW_PLAN.md), [คำศัพท์](CONTEXT.md)

## เป้าหมายและขอบเขตที่ตกลง

โชว์ผลงานให้ผู้ชมเห็นภาพ เข้าใจสิ่งที่เจ้าของทำ และเปิดดูงานจริงได้ง่าย ออกแบบหน้าตาใหม่โดยคงเอกลักษณ์สีเขียวและ light/dark theme

- หน้าแรกแนะนำตัวสั้น ต่อด้วยภาพผลงานขนาดใหญ่
- งานเด่นเรียง One Flag Thailand → Luck Ju → WenWorks → Coding is Magic
- `/projects` แสดงทั้ง 8 งานและตัวกรองเฉพาะหมวดที่มีงานจริง
- รายละเอียดเปิดเป็น popup บนหน้าเดิมพร้อม URL ที่แชร์ได้
- การ์ดไม่มี Code; รายละเอียดมี Source code เฉพาะ repository ของงานนั้น
- เนื้อหาใช้ภาษาอังกฤษและข้อมูลเดิมที่มีหลักฐาน ไม่เพิ่ม claims หรือตัวเลขผลลัพธ์
- ใช้ Email/GitHub/LinkedIn และ resume links เดิม ไม่เพิ่มฟอร์ม, Copy email หรือระบบติดต่อใหม่
- AI skills เป็นเครื่องมือเฉพาะเครื่อง เก็บ source code/assets/เอกสารโปรเจกต์ใน Git ตามเดิม

## โครงสร้างและข้อเสนอสำหรับการออกแบบ

รายละเอียดด้าน layout ต่อไปนี้เป็นแนวทางลงมือภายใต้ขอบเขตที่ตกลง ไม่ใช่หน้าจอที่ผ่านการตรวจภาพแล้ว

1. Header กระชับ: ชื่อ, Works, About, Contact, theme และ resume เดิม รองรับ mobile/tablet
2. Intro: ชื่อ/บทบาท พร้อมคำอธิบายสั้นจาก bio เดิมและ View work; ลดพื้นที่รูปบุคคลเพื่อให้ผลงานปรากฏเร็วขึ้น ไม่เพิ่มสถานะเรียนจบหรือความพร้อมทำงานที่ยังไม่ได้ยืนยัน
3. Selected work: ภาพใหญ่ desktop สองคอลัมน์, mobile หนึ่งคอลัมน์เลื่อนแนวตั้ง ไม่ต้องซ่อนงานไว้หลังการปัด; ชื่อ, summary, tags และ View details ชัดเจน มี View all projects
4. About & background: ประสบการณ์ รูปรางวัล Skills การศึกษาและภาษาอยู่ด้านล่าง ลดข้อความซ้ำ แต่รักษาข้อเท็จจริงเดิม
5. Contact และ footer: ช่องทางเดิม ใช้ hierarchy และ spacing ใหม่ให้กลมกลืน

ใช้พื้นที่ว่างและภาพงานเป็นตัวนำ ลดกรอบซ้อน badge และเงาที่แย่งความสนใจ สีเข้มในบาง section ของ light theme ยังคงได้หากอ่านง่าย ไม่เปลี่ยนทุกส่วนเป็นสีเดียวกันโดยอัตโนมัติ

## พฤติกรรมรายละเอียดผลงาน

### แผนเพิ่มเติม: ย่อ Project detail ให้พอดีจอ

สถานะ: วางแผนตามคำขอใหม่ ยังไม่ได้แก้ UI ในรอบนี้ ข้อกำหนดส่วนนี้แทน layout รายละเอียดเดิมเมื่อขัดกัน

สาเหตุจาก source: container ปัจจุบันกว้างสูงสุด 896px และภาพ 16:8 จึงสูงได้ประมาณ 448px ก่อนรวมข้อความ, padding และปุ่ม ทำให้รายละเอียดล้นความสูงจอทั่วไป

- Desktop: เปลี่ยนภาพเต็มความกว้างด้านบนเป็นสองคอลัมน์ ภาพซ้ายประมาณ 40% และรายละเอียดขวา 60%; ตั้งความกว้างสูงสุดประมาณ 840px ความสูงไม่เกินพื้นที่ viewport ลบระยะขอบ 32px และจัด popup กลางจอ
- ภาพ: จำกัดกรอบสูงประมาณ 240–280px ใช้ object-contain เพื่อเห็น preview ครบ และปรับลดตามความสูงจอ ไม่ให้ภาพเป็นตัวดันปุ่มออกนอกจอ
- เนื้อหา: ชื่อขนาด 24–28px, body 14px/line-height 1.5, padding 20px, ระยะกลุ่ม 12–16px; เก็บ description และ contribution ครบ ไม่ใช้ line-clamp ตัดข้อมูลหรือ scale ทั้งหน้าต่าง
- รวม badge/category ใกล้ชื่อและลดพื้นที่หัวข้อ Technologies; ให้ tags wrap ได้ และจัดปุ่ม external links รวมเป็นแถวกระชับท้ายรายละเอียด
- แยก presentation ของ popup กับหน้าเต็ม: popup มีปุ่มปิดในกรอบและไม่แสดง Back to all projects ซ้ำ; หน้าเต็มยังมีลิงก์กลับและหักพื้นที่ header/padding จากความสูงที่ใช้ได้
- มือถือ: ใช้คอลัมน์เดียว ลดภาพเหลือประมาณ 140–180px และลดช่องว่างก่อนลดขนาดตัวอักษร; หากจอเตี้ยหรือ zoom จนเนื้อหาไม่พอ อนุญาต scroll เฉพาะเนื้อหาเป็น fallback โดยปุ่มปิดเข้าถึงได้เสมอ ห้ามซ่อนเนื้อหาด้วย overflow-hidden เพื่อให้ดูเหมือนไม่ต้อง scroll
- คง URL, Back/Forward, Escape, keyboard navigation และ light/dark theme

ไฟล์ที่ปรับ: `components/ProjectDetails.tsx`, `components/ProjectModal.tsx` และ `app/projects/[slug]/page.tsx` เฉพาะ wrapper/พื้นที่หน้าเต็ม

เกณฑ์รับงาน: ที่ 1280×720, 1366×768 และ 1440×900 ที่ zoom 100% ทั้ง 8 งานต้องเห็นภาพ ชื่อ เนื้อหา เทคโนโลยี และปุ่มครบโดยไม่ต้อง scroll ภายใน detail หรือ popup; หน้าเต็มต้องไม่เกิด scroll เพราะรายละเอียดล้น viewport (footer ของเว็บไซต์อาจอยู่ถัดลงไป) ตรวจมือถือ 360×640/390×844 และ zoom 200% ให้เนื้อหาไม่ถูกตัด แม้ต้องใช้ scroll fallback ผลต้องยืนยันจาก browser จริง ไม่ถือว่าผ่านเพียงเพราะตั้ง max-height

| สถานการณ์ | ผลที่ต้องได้ |
|---|---|
| กด View details/ภาพที่เป็นลิงก์จากหน้าแรกหรือหน้ารวม | เปิด popup ของงานนั้น URL เปลี่ยนเป็น `/projects/[slug]` และพื้นหลังคงตำแหน่งเดิม |
| ปิดด้วยปุ่มปิด, Escape หรือ Back | กลับหน้าและตำแหน่งเดิม คืน focus ให้การ์ดที่เปิด |
| Forward หลัง Back | เปิดรายละเอียดงานเดิมกลับมา |
| เปิด URL ตรงหรือ refresh | แสดงรายละเอียดงานเดียวกันเป็นหน้าเต็ม มีทางกลับ All projects ไม่จำเป็นต้องมี popup ทับพื้นหลังที่ผู้ชมยังไม่เคยเปิด |
| มือถือ | popup เกือบเต็มจอ มีปุ่มปิดเข้าถึงได้ เนื้อหาเลื่อนภายใน พื้นหลังไม่เลื่อน |
| ใช้ keyboard/screen reader | dialog มีชื่อ, focus อยู่ภายในระหว่างเปิด, พื้นหลังไม่รับ interaction, ปิดแล้วคืน focus |
| JavaScript ไม่ทำงาน | ลิงก์ไปหน้าเต็มและอ่านรายละเอียดได้ เนื้อหาหลักไม่ถูกซ่อน |
| slug ไม่มีจริง | แสดง not-found ไม่เปิด popup ว่าง |
| เปลี่ยนไปหน้าอื่นระหว่าง modal เปิด | modal ถูกล้าง ไม่ค้างทับ route ใหม่ |

เนื้อหาใช้ร่วมกันระหว่าง popup และหน้าเต็ม: ภาพ → Overview → My contribution → Technologies → External links ไม่มี iframe ฝังเว็บจริง และไม่เล่นวิดีโออัตโนมัติ

ปุ่มภายนอกเปิดแท็บใหม่: Visit website/Play demo ตามประเภท, Watch video, View presentation, Source code เฉพาะที่มีข้อมูล ปุ่มที่ไม่มี URL ไม่แสดง ใช้ข้อความตรงปลายทาง

## แนวทางเทคนิค

ตรวจเอกสาร Next.js 16.3.4 ที่ติดตั้งแล้ว: `intercepting-routes.md` และ `parallel-routes.md` รองรับรูปแบบ popup จาก soft navigation และหน้าเต็มเมื่อเข้าตรง

- เพิ่ม stable `slug` ใน Project; คง id เดิมและทำ `githubUrl` เป็น optional
- ใช้ `description`, `contribution`, `techStack`, ภาพและลิงก์เดิมเป็นรายละเอียดตั้งต้น ไม่ต้องสร้าง backend/CMS
- ใช้ `/projects/[slug]` สำหรับหน้าเต็ม พร้อม static params, metadata รายงาน, canonical และ OG image
- ใช้ slot `@modal` ระดับ app และ intercepted project route เพื่อเปิดจากทั้งหน้าแรกและหน้ารวม; มี default/null routes ที่ครอบคลุมการปิดและการเปลี่ยนหน้า ต้องตรวจ segment conventions ก่อนเขียน
- แยก ProjectDetails ที่ใช้ร่วมกันออกจาก client dialog shell; คง server rendering สำหรับเนื้อหา
- ใช้รายการการ์ด responsive ชุดเดียว ลดการ render mobile/desktop ซ้ำ และเลิกใช้ carousel เมื่อเปลี่ยนเป็น layout ใหม่
- เปลี่ยนรูป raster เป็น `next/image` พร้อม sizes และขนาดตามภาพจริง ตรวจ LCP ก่อนเลือก preload; SVG icons ไม่ต้องแปลงทั้งหมด
- ใช้สีข้อความที่ผ่าน contrast, skip link, focus ring และ reduced-motion; เนื้อหาเริ่มมองเห็นก่อน animation ทำงาน
- ไม่เพิ่ม library ขนาดใหญ่เพื่อ animation หรือ modal โดยไม่มีความจำเป็น

## ลำดับงานและเกณฑ์เสร็จ

### 1. เตรียมข้อมูลและ repository

ไฟล์หลัก: `types/index.ts`, `lib/data.ts`, `.gitignore`, `eslint.config.mjs`

- เพิ่ม slugs, คัด featured 4 งาน, เอา GitHub profile ออกจาก project source links และรักษา GitHub ใน contact
- ไม่เปลี่ยนประวัติ/สถานะการศึกษาตามวันที่โดยเดาเอง ใช้ข้อความแนะนำตัวที่ไม่ยึดสถานะ Internship-ready
- กำหนด filter จากหมวดจริง; ตรวจ TF-Superbike ตามขอบเขตที่มีหลักฐานก่อนเปลี่ยนหมวด
- เพิ่ม ignore สำหรับ Windows/editor temp, `.impeccable/config.local.json`, `.agents/skills/`, `skills-lock.json` และ output ของ test runner หากเพิ่มจริง
- เลิก track เฉพาะ skills/lockfile ที่ตกลง โดยเก็บไฟล์ในเครื่อง; รักษา AGENTS.md และ package-lock.json
- แยก lint scope จาก gitignore เพื่อไม่ตรวจ downloaded tooling เป็นโค้ดแอป

เกณฑ์ผ่าน: slugs ไม่ซ้ำ, featured ตรงรายชื่อ, ไม่มี project Code link ไป profile, runtime assets และ source code ไม่ถูก ignore และการแก้ไขเดิมของผู้ใช้ยังอยู่

### 2. ทำรายละเอียดผลงานและ routing

ไฟล์หลัก: `app/projects/[slug]/`, `app/@modal/`, `app/layout.tsx`, ProjectDetails และ dialog component ใหม่

- ทำหน้าเต็มและ popup ด้วยเนื้อหาชุดเดียวกัน
- ทำ close/focus/scroll/history และ direct-link fallback ตามตารางพฤติกรรม
- เพิ่ม metadata รายงานและ sitemap; ตรวจว่า metadata หน้าย่อยไม่ทำ OG image หาย

เกณฑ์ผ่าน: เปิดจาก `/` และ `/projects` ได้, Back/Forward/refresh/direct URL ถูกต้อง, keyboard/escape/focus restoration ผ่าน, invalid slug ได้ not-found

### 3. ออกแบบหน้าแรกและหน้ารวมใหม่

ไฟล์หลัก: `app/page.tsx`, `app/projects/page.tsx`, `app/globals.css`, ProjectCard/ProjectList/ProjectFilter, Navbar/MobileMenu/Footer

- ใช้โครงสร้างภาพใหญ่และงานเด่นก่อน background
- ทำ mobile vertical grid แทน carousel; ลบ ProjectListMobile เมื่อไม่มี references
- ซ่อน Code บนการ์ด เพิ่มจุดเปิดรายละเอียดที่สื่อความหมายและไม่ซ้อน interactive elements
- ปรับตัวกรองให้บอก selected state ด้วย `aria-pressed` และแจ้งจำนวนผลลัพธ์
- ปรับ header ตามพื้นที่จริงบน tablet; เพิ่ม Escape/aria-controls ให้เมนู
- คง theme preference และใช้ contrast ที่อ่านง่ายทั้งสองธีม

เกณฑ์ผ่าน: เห็น 4 งานเด่นและเข้าถึงครบ 8 งาน, ไม่มี DOM การ์ดซ้ำเพื่อซ่อนตาม breakpoint, 360/390/768/1024/1440px ไม่ตัดเนื้อหา, contact links เดิมอยู่ครบ

### 4. เก็บ performance, SEO และโค้ดค้าง

ไฟล์หลัก: รูปใน page/components, RevealOnScroll, `app/layout.tsx`, `lib/site.ts`, metadata/sitemap, README

- ทำ responsive/lazy images และ reveal ที่ไม่ซ่อนเนื้อหาเมื่อไม่มี JS
- ลด scroll listeners/ถอด will-change ที่ค้างเมื่อไม่จำเป็น; animation ไม่บังการอ่าน
- เติม canonical/OG/Twitter ให้หน้าแรก หน้ารวม และรายละเอียดทุกงาน
- ลบ ContactForm จำลองและ heroStats ว่างเมื่อยืนยันไม่มี consumer
- ลบ starter SVG/duplicate icons เฉพาะที่ยืนยันไม่มี references รวมถึง dynamic fallback
- ย้าย profile-copy ไปเอกสารถ้ายังต้องใช้ภายนอก และระบุข้อความสถานะที่ต้องทบทวน ไม่แอบเผยแพร่ไป social profiles
- ปรับ README วิธีเพิ่มงาน เปลี่ยน featured/resume และใช้ slugs ที่แชร์แล้วอย่างคงที่

เกณฑ์ผ่าน: assets ไม่ 404, no-JS อ่านได้, metadata ถูกทุก route, ไม่มี mock-success form หรือโค้ดอ้างไฟล์ที่ลบ

### 5. ตรวจรับและเพิ่ม CI

- `npm ci`, ESLint เฉพาะโปรเจกต์ และ `npm.cmd run build`
- เพิ่ม smoke tests ที่ตรวจพฤติกรรมจริง: modal จากสองหน้า, history/direct URL, filter, theme persistence และ resume link
- ตรวจ no-JS/reduced motion, keyboard, mobile dialog, light/dark และ link targets
- ตรวจ HTML ที่ build ว่ามี canonical/OG image และ title ตรงงาน; ไม่อ้างว่า SEO ผ่านจากมี metadata อย่างเดียว
- วัด Lighthouse/ภาพโหลดใน production preview แล้วแก้ปัญหาที่พบ ไม่รับประกันคะแนนก่อนวัด
- เพิ่ม workflow CI สำหรับ pull requests; แบ่ง commit ตามงานและไม่รวมการแก้ไขเดิมที่ไม่เกี่ยวข้องโดยอัตโนมัติ

เกณฑ์ผ่าน: checks ผ่าน, flow หลักใช้ได้, มีบันทึกผลและข้อจำกัดที่ยังเหลือ การ deploy เป็นขั้นแยก ไม่รวมอยู่ในคำขอวางแผนนี้

## สิ่งที่ไม่รวมในรอบนี้

ระบบหลายภาษา, CMS/database, authentication, contact backend, analytics, Copy email, popup ฝังเว็บจริง และการสร้างข้อมูล case study ที่ยังไม่มีหลักฐาน

ไม่มี ADR ใหม่ในรอบนี้: การปรับ layout, optional links และ modal pattern เป็นการตัดสินใจที่ยังย้อนกลับได้โดยไม่มี lock-in สูง บันทึกเหตุผลและสัญญาพฤติกรรมในแผนนี้เพียงพอ

## สถานะการตรวจ

รอบ implementation แก้ application code, `.gitignore` และ Git index แล้ว; `npm.cmd run lint` และ `npm.cmd run build` ผ่าน ต้องตรวจ visual/browser QA, keyboard จริง, reduced motion, external URLs และ production preview ก่อน deploy
