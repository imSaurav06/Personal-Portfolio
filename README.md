# Saurav Kumar — Personal Portfolio Website

A premium, modern, and fully responsive software engineering portfolio built for **Saurav Kumar**, specializing in Full-Stack Web Development and Deep Learning systems. 

This project is built using a modern React tech stack incorporating TypeScript, Tailwind CSS v4, and Framer Motion. It includes dedicated detail pages for each project to facilitate technical explanation during job recruitment interviews.

---

## ⚡ Tech Stack

- **Framework**: React 18 (Vite, TypeScript)
- **Styling**: Tailwind CSS v4 (CSS-first configuration, theme custom tokens)
- **Animations**: Framer Motion (Page transitions, scroll reveals, stagger lists)
- **Routing**: React Router DOM (Single Page App routing, dedicated details paths)
- **Forms**: React Hook Form (Validation, state controls)
- **Contact Handling**: EmailJS (SMTP email forwarding with loading/success banner feedback)
- **Icons**: Lucide React

---

## 🚀 Key Features

1. **Multipaged-style Architecture**: Deep detail pages for each portfolio project to break down problem statements, solution approaches, and developer achievements.
2. **CSS-based Topologies**: Clean, styleable, and responsive flowcharts representing system structures without using heavy canvas graphics.
3. **Advanced Micro-Animations**: Smooth scroll-spy indicators, layout-morphing tabs, scroll-progress bars, and entry transitions.
4. **Adaptive Dark/Light Themes**: Dynamic color tokens that toggle seamlessly between a deep Obsidian theme and a clean Slate theme, persisting user preferences.
5. **Conditional GitHub Integrations**: Active statistics component that queries Saurav's public profile (`imSaurav06`), hiding itself gracefully if API rate limits are hit.
6. **Lighthouse Optimized**: Implements lazy loading (`React.lazy` and `Suspense`), vector-based iconography, semantic tags, and pre-connected web font links for high speed performance.

---

## 📂 Project Structure

```
e:/Personal-Portfolio/
├── index.html                 # Entry point HTML (SEO optimization, Google Fonts)
├── package.json               # NPM dependency manifests
├── tsconfig.json              # TypeScript compilation setup
├── vite.config.ts             # Vite build loader (Tailwind v4 integration)
├── public/
│   └── Saurav_Kumar_Resume.pdf # Downloadable PDF copy of Saurav's resume
└── src/
    ├── main.tsx               # Client bootstrap mounting
    ├── App.tsx                # App route mapping & scroll trackers
    ├── types.ts               # Shared TypeScript schemas
    ├── index.css              # Custom Tailwind variables and theme rules
    ├── data/                  # Separate data models
    │   ├── projects.ts        # Project metadata, tech-breakdowns & interview prep
    │   ├── skills.ts          # Categorized developer competencies
    │   ├── experience.ts      # Internships logs (Elevate Lab & SmartInternz)
    │   ├── education.ts       # Degree info (BEU Patna)
    │   └── certifications.ts  # Certs & Achievements details
    ├── components/
    │   ├── Navbar.tsx         # Responsive sticky header (theme toggle, active links)
    │   ├── Footer.tsx         # Details footer with contact hooks
    │   ├── Hero.tsx           # Framer motion staggered introduction container
    │   ├── About.tsx          # Biography narrative & core stats
    │   ├── Skills.tsx         # Category tab switcher with animated indicators
    │   ├── TimelineItem.tsx   # Reusable node card for experiences/degrees
    │   ├── ProjectCard.tsx    # Compact project grid node
    │   ├── ArchDiagram.tsx    # Responsive flowchart node connector
    │   └── GithubStats.tsx    # Conditional API profile fetcher
    └── pages/
        ├── Home.tsx           # Aggregated landing dashboard
        └── ProjectDetail.tsx  # Project documentation view
```

---

## 🛠️ Local Development Setup

To run the portfolio website locally, follow these steps:

1. **Install Node.js & Package Dependencies**:
   Ensure you have Node.js installed on your machine. Install project libraries by running:
   ```bash
   npm install
   ```

2. **Configure Contact Form (Optional)**:
   Create a `.env` file in the root directory to link your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   *If keys are omitted, the contact form automatically executes a simulation mode to preview the loading spinners and success banners.*

3. **Start the Development Server**:
   Launch Vite's hot-reloaded local environment:
   ```bash
   npm run dev
   ```
   The site will load automatically at `http://localhost:3000`.

4. **Production Build**:
   To bundle the static, compressed assets for hosting:
   ```bash
   npm run build
   ```
   The production assets will be generated in the `dist/` directory.

---

## 🌐 Production Deployment Guide

### Option 1: Vercel / Netlify (Recommended)
1. Push the repository to GitHub.
2. Link the repository to your Vercel or Netlify dashboard.
3. Configure the **Build Command** as `npm run build` and **Output Directory** as `dist`.
4. Deploy!

### Option 2: GitHub Pages
1. Install the GitHub Pages deploy utility:
   ```bash
   npm install -D gh-pages
   ```
2. Add a `homepage` property and deploy scripts in your `package.json`:
   ```json
   "homepage": "https://imSaurav06.github.io/Personal-Portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run the deployment command:
   ```bash
   npm run deploy
   ```
