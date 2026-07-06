# The Flip Zone Indiana — Website

Modern, parent-focused gymnastics website for [The Flip Zone](https://www.theflipzone.com/) in Plainfield, Indiana.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui**
- **Framer Motion**
- Deploy-ready for **Vercel**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Site Structure

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, class finder, programs, facility, testimonials |
| `/about` | About The Flip Zone |
| `/programs` | Program decision guide |
| `/preschool-gymnastics` | Premium preschool landing page |
| `/competitive-team` | Premium competitive team page |
| `/[program-slug]` | Individual program pages |
| `/staff` | Coach profiles |
| `/gallery` | Masonry photo gallery |
| `/faq` | Frequently asked questions |
| `/contact` | Map, hours, contact info |

## Enrollment

Enrollment flows through **iClassPro** — existing portal links are preserved:

- Portal: `https://app.iclasspro.com/portal/flipzone`
- Classes: `https://app.iclasspro.com/portal/flipzone/classes`

## Design

- **Fonts:** Oswald (headings) + Inter (body)
- **Colors:** Royal Blue, Purple, Bright Aqua on warm white
- Mobile-first with sticky "Find Classes" CTA

## Future Ready

Structured for future integration with iClassPro API, CMS, and Supabase.
