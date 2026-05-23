"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard, FeaturedProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects-data"

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const featuredProjects = projects.filter((p) => p.featured)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    )
  }

  return (
    <section id="projects" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="glass mb-4 inline-block rounded-full px-4 py-2 text-sm text-primary">
            Portfolio
          </span>
          <h2 className="font-display mb-4 text-3xl font-bold md:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            AI and analytics projects from my academic and internship work
          </p>
        </motion.div>

        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-16"
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <FeaturedProjectCard project={featuredProjects[currentIndex]} />
                </motion.div>
              </AnimatePresence>

              {featuredProjects.length > 1 && (
                <>
                  <div className="absolute top-1/2 left-0 z-10 -translate-x-1 -translate-y-1/2 sm:left-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevSlide}
                      className="glass hover:glow-sm rounded-full"
                      aria-label="Previous featured project"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="absolute top-1/2 right-0 z-10 translate-x-1 -translate-y-1/2 sm:right-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextSlide}
                      className="glass hover:glow-sm rounded-full"
                      aria-label="Next featured project"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </>
              )}
            </div>

            {featuredProjects.length > 1 && (
              <div className="mt-6 flex justify-center gap-2">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to featured project ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-secondary hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-display mb-8 text-center text-xl font-semibold tracking-tight">
            All Projects
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
