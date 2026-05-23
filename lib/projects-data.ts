import type { Project } from "@/lib/project-types"

export type { Project } from "@/lib/project-types"

export const projects: Project[] = [
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume screening tool using NLP with skill extraction and resume–job matching features.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Python", "NLP", "Streamlit"],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Analytics Dashboard (DATAZEN)",
    description:
      "Interactive dashboards to visualize student performance and improve reporting and data analysis efficiency.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Power BI", "MySQL", "Python", "Streamlit", "FastAPI"],
    github: null,
    live: null,
    featured: true,
  },
]
