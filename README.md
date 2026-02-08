# Portfolio - Swethalatha S

## 🚀 Cinematic Portfolio Website

A modern, animated portfolio showcasing expertise in IoT, Full-Stack Development, AI/ML, and Research.

### 🌟 Features

- **Cinematic Animations** - Advanced Framer Motion animations throughout
- **Responsive Design** - Fully responsive across all devices
- **Modern Tech Stack** - React, TypeScript, Tailwind CSS, Vite
- **Interactive Components** - Hero section with 3D orb, animated timelines, project showcases
- **Contact Integration** - Direct links to LinkedIn, GitHub, and Email

### 🛠️ Technologies

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

## Run Locally

**Prerequisites:**  Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Deploy to Cloudflare Pages

### Method 1: Via Cloudflare Dashboard (Recommended)

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages** → **Create application** → **Pages**
3. Connect to your GitHub repository: `swetha4995/Portfolio`
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)
   - **Environment variables**: Add `GEMINI_API_KEY` if needed
5. Click **Save and Deploy**

**Important**: Do NOT add a custom "Deploy command" - leave it empty!

### Method 2: Via Wrangler CLI

```bash
npm install -g wrangler
wrangler login
npm run pages:deploy
```

### 📫 Connect

- **LinkedIn**: [Swethalatha S](https://www.linkedin.com/in/swethalatha-s-10298b2a2/)
- **GitHub**: [@swetha4995](https://github.com/swetha4995/)
- **Email**: swetha010206@gmail.com

### 📄 License

© 2026 Swethalatha S. All rights reserved.
