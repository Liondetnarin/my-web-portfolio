# Detnarin Chaiaksorn - Developer Portfolio

Personal portfolio for Detnarin Chaiaksorn, a software developer focused on
building practical, polished web experiences. The site presents selected work,
technical skills, education, and contact information in a responsive interface.

## Live site

[detnarin.me](https://www.detnarin.me)

## Highlights

- Responsive portfolio layout for desktop and mobile devices
- Persistent light and dark themes with system-preference support
- Fixed navigation with section links and mobile navigation
- Filterable project showcase with responsive project cards
- Featured work on the home page with shareable project detail routes and accessible modal navigation
- SEO metadata, Open Graph images, sitemap, and robots configuration
- Accessible motion behavior that respects reduced-motion preferences

## Tech stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- Inter, optimized through `next/font`
- [Vercel](https://vercel.com/) for deployment

## Project structure

```text
app/          Routes, metadata, and global styles
components/   Reusable sections and UI components
lib/          Portfolio content and shared data
public/       Images, icons, and downloadable assets
types/        Shared TypeScript types
CONTEXT.md    Portfolio vocabulary and content boundaries
```

## Local development

### Prerequisites

- Node.js 20.9 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint across the project |

## Validation

Run these checks before committing or deploying:

```bash
npm run lint
npm run build
npm audit
```

Environment files are ignored by Git. Keep secrets in local or deployment
environment variables and never expose private credentials through variables
prefixed with `NEXT_PUBLIC_`.

### Adding a project

Add the project to `lib/data.ts` with a unique `slug`. Set `featured: true` only
for work that should appear on the home page. Use a real repository URL in
`githubUrl` only when that project's source is public; leave it out otherwise.
The detail page and shareable URL are generated from the same project record.

## Deployment

The site is designed for deployment on Vercel. Connect the repository to a
Vercel project, configure any required environment variables, and deploy from
the production branch.
