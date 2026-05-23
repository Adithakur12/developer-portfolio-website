import type { Project } from "@/lib/project-types"

export type { Project } from "@/lib/project-types"

export const projects: Project[] = [
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume screening tool using NLP with skill extraction and resume–job matching features.",
    image: "/project-screenshots/ai-resume-analyzer.svg",
    caption:
      "Streamlit UI mockup showing resume upload, extracted skills, and match score result.",
    tags: ["Python", "NLP", "Streamlit"],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Analytics Dashboard (DATAZEN)",
    description:
      "Interactive dashboards to visualize student performance and improve reporting and data analysis efficiency.",
    image: "/project-screenshots/datazen-dashboard.svg",
    caption:
      "Dashboard mockup showing student performance charts and KPI summary from the analytics build.",
    tags: ["Power BI", "MySQL", "Python", "Streamlit", "FastAPI"],
    github: null,
    live: null,
    featured: true,
  },
]
