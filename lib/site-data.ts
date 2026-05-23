export const siteConfig = {
  name: "Aditya Rajpoot",
  initials: "AR",
  role: "B.Tech Student | Python Developer | AI & Data Analytics Enthusiast",
  tagline: "AI, data analytics & impactful tech solutions",
  location: "Noida, India",
  email: "adityathakur2618@gmail.com",
  phone: "+91 9412617999",
  phoneTel: "+919412617999",
  linkedin: "https://www.linkedin.com/in/aditya-rajput-09a8b333a",
  github: "https://github.com/Adithakur12",
  resume: "/image.png/adityaresume12.pdf",
  about:
    "B.Tech student skilled in Python, AI tools, web development, and data analytics with hands-on internship experience in dashboard development and graphic design. Passionate about building impactful tech solutions with strong problem-solving and fast learning ability.",
  heroTechStack: ["Python", "Java", "Machine Learning", "Power BI"],
} as const

export const achievements = [
  {
    label: "Web Performance",
    value: "Increased webpage speed by 40% using optimized code",
  },
  {
    label: "Data Processing",
    value: "Improved data processing speed by 25% via efficient algorithms",
  },
  {
    label: "Analytics Dashboard",
    value: "Reduced report generation time by 30%",
  },
  {
    label: "User Engagement",
    value: "Led a project that increased user engagement by 20%",
  },
] as const

export const languages = [
  { name: "Hindi", level: "Native" },
  { name: "English", level: "Professional" },
] as const

export const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Java Programming", level: 88 },
      { name: "Python Programming", level: 90 },
      { name: "Spring Boot", level: 82 },
      { name: "REST API", level: 85 },
    ],
  },
  {
    title: "Data & AI",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Gen AI", level: 78 },
      { name: "LLM", level: 76 },
      { name: "MySQL", level: 84 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Power BI", level: 86 },
      { name: "Streamlit", level: 82 },
      { name: "FastAPI", level: 78 },
      { name: "NLP", level: 80 },
    ],
  },
] as const

export const techStackBadges = [
  "Java",
  "Python",
  "Spring Boot",
  "MySQL",
  "Machine Learning",
  "Gen AI",
  "Power BI",
  "REST API",
] as const

export const experiences = [
  {
    title: "Graphic Designer Intern",
    company: "InAmigos Foundation (IAF)",
    location: "Remote",
    period: "Jan 2026 – Feb 2026",
    description:
      "Created visual identities and marketing materials that strengthened brand presence for client projects.",
    achievements: [
      "Transformed client visions into stunning visual identities",
      "Boosted brand engagement by 30% through innovative designs",
      "Created compelling marketing materials that drove sales growth",
    ],
    technologies: ["Graphic Design", "Branding", "Marketing"],
    current: false,
  },
  {
    title: "Dashboard Developer",
    company: "ThoughtSol Infotech Ltd.",
    location: "Delhi, India",
    period: "Jun 2026 – Jul 2026",
    description:
      "Built dynamic dashboards that enabled data-driven decisions and real-time performance tracking.",
    achievements: [
      "Expert in crafting dynamic dashboards that drive data-driven decisions",
      "Delivered real-time performance tracking, improving response times",
      "Collaborated with cross-functional teams to align dashboard metrics",
    ],
    technologies: ["Power BI", "Python", "MySQL", "Streamlit", "FastAPI"],
    current: false,
  },
] as const

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Galgotias College of Engineering and Technology",
    period: "2024 – 2028",
    location: "Greater Noida, India",
  },
  {
    degree: "High School / Secondary Diploma",
    institution: "Pt Deen Dayal Upadhyaya Sanatan Dharm Vidhyalaya",
    period: "2017 – 2024",
    location: "India",
  },
] as const

export const certifications = [
  "Deloitte Australia – Cyber Job Simulation (Forage)",
  "J.P. Morgan – Software Engineering Job Simulation (Forage)",
  "AI Mastery Certificate – NxtWave",
  "AI Tools Workshop – TATA (Tata Consultancy Services) via Be10x",
  "Java SE 8 Programmer I – Scaler",
  "Spring Boot – Scaler",
  "Intermediate to Advanced Python – Udemy",
  "Spring Boot – Infosys",
] as const

export function isValidUrl(url?: string | null): boolean {
  if (!url) return false
  const normalized = url.trim().toLowerCase()
  return (
    normalized.length > 0 &&
    normalized !== "n/a" &&
    normalized !== "#" &&
    !normalized.startsWith("[")
  )
}

export function getSocialLinks() {
  const links: { label: string; href: string; type: "linkedin" | "github" | "email" }[] = [
    {
      label: "LinkedIn",
      href: siteConfig.linkedin,
      type: "linkedin",
    },
    {
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      type: "email",
    },
  ]

  if (isValidUrl(siteConfig.github)) {
    links.unshift({
      label: "GitHub",
      href: siteConfig.github!,
      type: "github",
    })
  }

  return links
}
