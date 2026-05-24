# Millerify — Next.js Website

Enterprise AI automation website built with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion.

## Tech Stack

- **Next.js 14** — App Router, SSR, optimized builds
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **Lucide React** — Clean icon library

## Folder Structure

```
millerify-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout + metadata
│   │   ├── page.tsx          # Main page (assembles all sections)
│   │   └── globals.css       # Global styles, animations, utilities
│   └── components/
│       ├── Nav.tsx           # Sticky navigation with mobile menu
│       ├── Hero.tsx          # Hero section with animated background
│       ├── AIDemo.tsx        # Interactive AI chat demo
│       ├── Services.tsx      # Six service cards
│       ├── Sections.tsx      # Industries, Dashboard, Why, Testimonials
│       └── CTAFooter.tsx     # Contact form + footer
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
```

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Deploy to Vercel (Free)

### Option A — Vercel CLI (fastest)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Option B — GitHub + Vercel Dashboard
1. Push your code to GitHub
2. Go to vercel.com → New Project
3. Import your GitHub repository
4. Click Deploy — Vercel auto-detects Next.js

That's it. Vercel handles builds, CDN, SSL, and custom domains automatically.

### Connect to Hostinger Domain
1. Deploy to Vercel (you get a .vercel.app URL)
2. In Vercel: Settings → Domains → Add your Hostinger domain
3. In Hostinger hPanel: DNS → Add CNAME record pointing to Vercel
4. SSL is automatic

## Customization

### Change colors
Edit `tailwind.config.ts` and `globals.css`

### Update content
Each section is a separate component in `src/components/`

### Add sections
Create a new file in `src/components/`, export it, and import in `src/app/page.tsx`

## Recommended Additional Packages

```bash
# Analytics
npm install @vercel/analytics

# Contact form (actually sends emails)
npm install resend

# Better animations
npm install @motionone/utils

# SEO
npm install next-seo
```
