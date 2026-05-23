export const siteConfig = {
  name: "Aditya Rajpoot",
  initials: "AR",
  role: "B.Tech Student | Python Developer | AI & Data Analytics Enthusiast",
  tagline: "Turning data curiosity into practical AI dashboards",
  location: "Noida, India",
  email: "adityathakur2618@gmail.com",
  phone: "+91 9412617999",
  phoneTel: "+919412617999",
  linkedin: "https://www.linkedin.com/in/aditya-rajput-09a8b333a",
  github: "https://github.com/Adithakur12",
  resume: "/image.png/adityaresume12.pdf",
  about:
    "I got curious about AI when I automated my college assignment tracker. Since then, I’ve built dashboards and Python tools that help teams move from raw data to clear decisions.",
  heroTechStack: ["Python", "Java", "Machine Learning", "Power BI"],
} as const

export const achievements = [
  {
    label: "Web Performance",
    value: "Optimized image loading and removed unused CSS so pages feel faster and more responsive.",
  },
  {
    label: "Data Processing",
    value: "Rewrote a pandas pipeline with vectorized operations and reusable functions for more reliable data processing.",
  },
  {
    label: "Analytics Dashboard",
    value: "Automated report updates and streamlined dashboard refreshes to reduce manual effort.",
  },
  {
    label: "User Engagement",
    value: "Built a dashboard the team referenced daily to track student performance and shared insights with the supervisor.",
  },
] as const

export const languages = [
  { name: "Hindi", level: "Native" },
  { name: "English", level: "Professional" },
] as const

export const skillCategories = [
  {
    title: "Daily Workflows",
    description: "Skills I use regularly in internships and real projects.",
    skills: [
      {
        name: "Python",
        evidence: ["3+ projects", "Internship dashboard work", "Udemy certified"],
      },
      {
        name: "MySQL",
        evidence: ["Database-backed dashboards", "Power BI queries", "Data modeling"],
      },
      {
        name: "Power BI",
        evidence: ["ThoughtSol Infotech internship", "Interactive analytics", "Client-facing reports"],
      },
      {
        name: "Java",
        evidence: ["Scaler certified", "Spring Boot APIs", "Backend development"],
      },
    ],
  },
  {
    title: "Project Experience",
    description: "Technologies delivered in academic work and portfolio applications.",
    skills: [
      {
        name: "Spring Boot",
        evidence: ["REST API development", "Java backend services", "Certified training"],
      },
      {
        name: "REST API",
        evidence: ["Production-ready endpoints", "FastAPI & Spring Boot", "Integration workflows"],
      },
      {
        name: "Streamlit",
        evidence: ["Data dashboards", "Interactive analytics apps", "Python prototypes"],
      },
      {
        name: "FastAPI",
        evidence: ["Microservices", "Modern API design", "Python web backends"],
      },
    ],
  },
  {
    title: "AI & Analytics",
    description: "Emerging and applied AI skills driven by active learning and experimentation.",
    skills: [
      {
        name: "Machine Learning",
        evidence: ["Model building", "Predictive analytics", "Coursework projects"],
      },
      {
        name: "Gen AI",
        evidence: ["Prompt engineering", "LLM experimentation", "AI tooling"],
      },
      {
        name: "LLM",
        evidence: ["Language model tools", "NLP prototypes", "Research-driven ideas"],
      },
      {
        name: "NLP",
        evidence: ["Text analytics", "Resume parsing experiments", "Project-based learning"],
      },
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
      "Translated client briefs into polished visual identities and campaign assets.",
      "Designed brand elements used across social media and outreach materials.",
      "Delivered marketing collateral that supported client communication goals.",
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
      "Built dashboard interfaces with interactive visuals for student performance review.",
      "Delivered real-time metrics so the team could act on data faster.",
      "Collaborated with cross-functional stakeholders to align metrics with business priorities.",
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
