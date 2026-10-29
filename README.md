# Varun Jadhav — Engineering Portfolio

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.3-black?logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0.0-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ed?logo=docker)](https://www.docker.com/)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00c7b7?logo=netlify)](https://varunjadhav.in)

> Production-grade, high-performance portfolio and dashboard for **Varun Jadhav** — Full Stack Developer & Frontend Lead at **invocreto**. Crafted with a focus on modern web architecture, strict type safety, glassmorphism design tokens, containerization, and accessibility.

🌐 **Live Website:** [https://varunjadhav.in](https://varunjadhav.in)

---

## ✨ Features

- **⚡ Core Stack:** Next.js 16.4.3 with React 19, TypeScript, and Turbopack.
- **🎨 Modern Design System:** Utility-first styling with Tailwind CSS, responsive glassmorphism panels, and smooth micro-interactions powered by Framer Motion.
- **📱 Fully Responsive:** Mobile-first layout optimized with custom viewport handling and Google Search-compliant multi-resolution favicons (`48x48`, `96x96`, `192x192`, `SVG`).
- **📬 Contact API:** Serverless backend endpoint (`/api/contact`) supporting direct Google Cloud Firestore persistence with strict server-side payload validation.
- **🔒 Admin Dashboard (`/dashboard`):** Protected administrative interface authenticated via Firebase Google OAuth to review, star, search, and manage incoming client inquiries.
- **🐳 Multi-Stage Docker:** Production-hardened containerization leveraging Next.js `output: 'standalone'` with non-root security execution.
- **🔥 Local Firebase Emulation:** Isolated local developer workflow with Firebase Emulator Suite (Firestore, Auth, and Web UI on port 4000) that prevents accidental development writes to live cloud databases.
- **🚀 Automated CI/CD:** Continuous deployment pipeline managed via GitHub Actions and Netlify with automatic branch deploy previews and atomic rollbacks.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Next.js 16.4.3, TypeScript 5, Tailwind CSS, Framer Motion, React Icons |
| **Backend & API** | Next.js API Routes, Google Cloud Firestore REST API, Firebase Client SDK v13 |
| **Containerization** | Docker, Docker Compose, Multi-stage Alpine builds |
| **Local Emulation** | Firebase Emulator Suite (Auth, Firestore, Web UI) |
| **Hosting & CI/CD** | Netlify, GitHub Actions |
| **SEO & Standards** | JSON-LD Schema Structured Data, Open Graph, Web Vitals Optimization |

---

## 📁 Project Directory Structure

```
Portfolio-app/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Actions CI/CD to Netlify
├── docker/
│   ├── Dockerfile                  # Multi-stage production build (Node 22 Alpine, standalone)
│   ├── Dockerfile.dev              # Development container with hot-reloading
│   └── Dockerfile.emulator         # Lightweight Firebase Emulator Suite
├── public/                         # Static assets (favicons, images, robots.txt, sitemap.xml)
├── src/
│   ├── components/                 # UI Modules (Hero, Experience, Skills, Projects, Contact, Header, Footer)
│   ├── lib/
│   │   └── firebase.ts             # Firebase singleton with isolated dev/prod routing
│   ├── pages/
│   │   ├── api/
│   │   │   ├── contact.ts          # Server-side contact inquiry handler
│   │   │   └── hello.ts            # Health check endpoint
│   │   ├── _app.tsx                # Global application wrapper with viewport enforcement
│   │   ├── _document.tsx           # Document head with search-compliant favicon assets
│   │   ├── dashboard.tsx           # Admin inquiries management dashboard
│   │   └── index.tsx               # Main portfolio landing page
│   └── styles/
│       └── globals.css             # Tailwind base & custom glassmorphism utilities
├── docker-compose.yml              # Production Docker Compose orchestration
├── docker-compose.dev.yml          # Local development Compose orchestration (App + Emulator)
├── firebase.json                   # Firebase Emulator ports configuration
├── netlify.toml                    # Netlify production build & redirection rules
├── next.config.mjs                 # Next.js configuration (standalone output, compiler optimization)
└── package.json                    # Project dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js:** `v20.x` or `v22.x` (Recommended: `v22`)
- **Package Manager:** `npm` (v10+)
- **Docker:** (Optional, for containerized local development or production container testing)

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/varunjadhav/Portfolio-app.git
cd Portfolio-app
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the project root:

```env
# Firebase Configuration (Production / Live)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Admin Access Control (Comma-separated emails allowed in /dashboard)
NEXT_PUBLIC_ADMIN_EMAILS=your_email@example.com
```

### 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🐳 Running with Docker

### Production Container Setup

Build and run the production-optimized standalone container:

```bash
docker compose up -d --build
```

- **Application URL:** [http://localhost:3000](http://localhost:3000)
- **Container Healthcheck:** [http://localhost:3000/api/hello](http://localhost:3000/api/hello)

### Local Development with Firebase Emulator Suite

To develop offline with simulated Firestore database and Authentication without writing to live cloud resources:

```bash
docker compose -f docker-compose.dev.yml up
```

- **Next.js App (Hot Reload):** [http://localhost:3000](http://localhost:3000)
- **Firebase Emulator UI Dashboard:** [http://localhost:4000](http://localhost:4000)
- **Firestore Emulator Port:** `8080`
- **Auth Emulator Port:** `9099`

---

## 🌐 Deployment

### Netlify Automated CI/CD (Production)

The production site is hosted on **Netlify** with continuous deployment.

1. **Native Git Deployment:** Every push to `main` triggers an automatic build and deployment using the configuration in [`netlify.toml`](./netlify.toml).
2. **GitHub Actions Workflow:** The pipeline in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) provides automated validation and deploys using the official Netlify CLI.

Required GitHub Repository Secrets (for GitHub Actions):
- `NETLIFY_AUTH_TOKEN`: Personal access token generated from Netlify User Settings.
- `NETLIFY_SITE_ID`: `b17eb069-9e2c-4b97-81d8-e78422cb682d`

---

## 👨‍💻 Author

**Varun Jadhav**
- **Title:** Full Stack Developer & Frontend Lead at **invocreto**
- **Website:** [https://varunjadhav.in](https://varunjadhav.in)
- **LinkedIn:** [linkedin.com/in/varunjadhav](https://www.linkedin.com/in/varun-jadhav-3a958b218/)
- **Email:** [jadhavvarun67@gmail.com](mailto:jadhavvarun67@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
