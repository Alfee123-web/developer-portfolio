# Alfee Khan — Developer Portfolio

A modern, animated developer portfolio built with React + Vite, showcasing full-stack projects, technical skills, certifications, coding profiles, and a downloadable resume.

🔗 **Live Site:** [alfeekhan.vercel.app](https://alfeekhan.vercel.app/)
📦 **Repo:** [github.com/Alfee123-web/developer-portfolio](https://github.com/Alfee123-web/developer-portfolio)

---

## ✨ Features

- Black-and-white theme with a glowing orange horizon hero and animated gradient accents
- Glow cards with a cursor-follow spotlight, each project and skill group in its own colour
- Scroll-triggered reveal animations across all sections
- Certificates section showcasing completed courses and trainings
- Coding section with a GitHub contribution chart and a LeetCode stats card (solved ring, difficulty bars, animated counters)
- Categorized technical skills (Languages, Frontend, Backend, Databases, Auth & Cloud, Tooling)
- Detailed project cards with live demo and source code links
- Downloadable one-page résumé (PDF)
- Fully responsive layout with a mobile navigation menu
- Respects `prefers-reduced-motion` for accessibility

---

## 🛠️ Tech Stack

| Layer | Tools |
|---|---|
| Framework | React 19 (Vite) |
| Styling | Plain CSS with custom properties (no external UI framework) |
| Fonts | Space Grotesk, Inter, JetBrains Mono (Google Fonts) |
| Deployment | Vercel |

---

## 📂 Project Structure

```text
alfee-portfolio/
├── public/
│   ├── certs/
│   │   ├── delta.png
│   │   ├── dsa.png
│   │   └── aws.png
│   ├── profile-photo.jpeg
│   └── Alfee_Khan_Resume.pdf
├── src/
│   ├── App.jsx        # Page layout and all sections
│   ├── data.js        # Skills, projects, certificates, LeetCode stats
│   ├── ui.jsx         # Reusable components (Reveal, GlowCard, Counter, Head)
│   ├── index.css      # Global styles and design tokens
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started (Local Setup)

### Prerequisites
- [Node.js](https://nodejs.org/) installed

### 1. Clone the repository
```bash
git clone https://github.com/Alfee123-web/developer-portfolio.git
cd developer-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the dev server
```bash
npm run dev
```

The site will be running at `http://localhost:5173`.

### 4. Build for production
```bash
npm run build
```

---

## 📦 Featured Projects

### 🔄 [RenewVault](https://github.com/Alfee123-web/renewvault)
Subscription and renewal tracking dashboard — Next.js 16, React 19, TypeScript, Tailwind CSS v4, PostgreSQL, Prisma, Auth.js, Resend.
🔗 [Live Demo](https://www.renewvault.me/)

### 🌊 [Wanderly](https://github.com/Alfee123-web/Wanderly)
Full-stack Airbnb-style rental listing platform — Node.js, Express, MongoDB, EJS, Passport.js, Cloudinary, Mapbox GL JS.
🔗 [Live Demo](https://wanderly-three-opal.vercel.app)

### 🌦️ [Weather App](https://github.com/Alfee123-web/Weather-App-MaterialUI)
Real-time weather dashboard built with React (Vite) and Material UI.
🔗 [Live Demo](https://weather-app-material-ui.vercel.app)

---

## 🎓 Certifications

- Delta — Full Stack Web Development (Apna College)
- Data Structures & Algorithms in C++ (Apna College)
- AWS & Cloud Computing (GRAStech · Learnovate)

---

## 📫 Contact

- **Email:** alfeekhan20@gmail.com
- **LinkedIn:** [linkedin.com/in/alfeekhan509815340](https://linkedin.com/in/alfeekhan509815340)
- **GitHub:** [github.com/Alfee123-web](https://github.com/Alfee123-web)
- **LeetCode:** [leetcode.com/u/alfeekhan](https://leetcode.com/u/alfeekhan)

---

## 📄 License

This project is open source and available for reference. Feel free to fork it, but please don't copy the content as-is — build your own story into it.
