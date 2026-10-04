export const NAV = [
  ["about", "About"], ["stack", "Stack"], ["work", "Work"],
  ["certs", "Certificates"], ["coding", "Coding"], ["resume", "Resume"], ["contact", "Contact"],
];

export const SKILLS = [
  { label: "Languages", c: "var(--blue)", items: ["JavaScript (ES6+)", "TypeScript", "C++", "HTML5", "CSS3", "SQL"] },
  { label: "Frontend", c: "var(--teal)", items: ["React.js", "Next.js", "Tailwind CSS v4", "Material UI", "Bootstrap 5", "Vite"] },
  { label: "Backend", c: "var(--orange)", items: ["Node.js", "Express.js", "REST APIs", "Prisma", "MVC Architecture"] },
  { label: "Databases", c: "var(--purple)", items: ["PostgreSQL", "MongoDB · Mongoose", "MySQL"] },
  { label: "Auth & Cloud", c: "var(--pink)", items: ["Auth.js/NextAuth v5", "AWS (EC2, S3, IAM)", "Passport.js", "Cloudinary", "Mapbox GL JS"] },
  { label: "Tooling", c: "var(--yellow)", items: ["Git & GitHub", "Vercel", "Postman", "VS Code", "MongoDB Atlas"] },
];

export const PROJECTS = [
  {
    year: "2026", name: "RenewVault", c: "var(--blue)",
    tagline: "Subscription & renewal tracking dashboard",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "PostgreSQL", "Prisma", "NextAuth v5", "Resend"],
    features: [
      "Multi-currency spending summary (INR/USD/EUR/GBP) with filterable, sortable renewal lists",
      "Mobile-first navigation: top bar, bottom tab bar and collapsible desktop sidebar",
      "Token-driven CSS design system for consistent theming",
      "Shared REST API contracts; automated reminder emails via Resend and cron jobs",
    ],
    live: "https://www.renewvault.me/", source: "https://github.com/Alfee123-web/renewvault",
  },
  {
    year: "2025", name: "Wanderly", c: "var(--orange)",
    tagline: "Full-stack Airbnb-style rental listing platform",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap 5", "Passport.js", "Cloudinary", "Mapbox"],
    features: [
      "Complete CRUD for listings, reviews and user accounts on an MVC architecture",
      "Secure auth and MongoDB-backed sessions via Passport.js + connect-mongo",
      "Cloudinary + Multer image uploads, Mapbox geocoding on every listing",
      "Custom \"Ocean Slate\" design system and Joi-validated forms",
    ],
    live: "https://wanderly-three-opal.vercel.app", source: "https://github.com/Alfee123-web/Wanderly",
  },
  {
    year: "2024", name: "Weather App", c: "var(--purple)",
    tagline: "Real-time city weather, built on Material UI",
    stack: ["React.js (Vite)", "Material UI", "REST API", "JavaScript"],
    features: [
      "Live temperature, humidity and wind data for any searched city",
      "MUI cards, text fields and responsive grid layouts",
      "Conditional rendering that shifts with the city's current climate",
    ],
    live: "https://weather-app-material-ui.vercel.app", source: "https://github.com/Alfee123-web/Weather-App-MaterialUI",
  },
];

export const CERTS = [
  { title: "Delta — Full Stack Web Development", by: "Apna College", img: "/certs/delta.png", c: "var(--teal)" },
  { title: "Data Structures & Algorithms in C++", by: "Apna College", img: "/certs/dsa.png", c: "var(--orange)" },
  { title: "AWS & Cloud Computing", by: "GRAStech (Learnovate) · 90 hrs", img: "/certs/aws.png", c: "var(--purple)" },
];

export const LEETCODE = {
  user: "alfeekhan", solved: 301, rating: 1510, streak: 70, submissions: 1117, days: 169,
  levels: [
    { name: "Easy", n: 137, c: "#2dd9c4" },
    { name: "Medium", n: 152, c: "#ff9a4d" },
    { name: "Hard", n: 12, c: "#ff5c7a" },
  ],
};