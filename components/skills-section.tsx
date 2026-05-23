"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award } from "lucide-react"
import {
  skillCategories,
  techStackBadges,
  certifications,
} from "@/lib/site-data"

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="glass mb-4 inline-block rounded-full px-4 py-2 text-sm text-primary">
            Skills & Technologies
          </span>
          <h2 className="font-display mb-4 text-3xl font-bold md:text-5xl">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Core skills across development, data analytics, and AI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 flex flex-wrap justify-center gap-3"
        >
          {techStackBadges.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="glass cursor-default rounded-full px-4 py-2 text-sm font-medium transition-all hover:glow-sm"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-6">
                <h3 className="gradient-text text-xl font-bold">{category.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + categoryIndex * 0.15 + skillIndex * 0.05,
                    }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-sm"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-base font-semibold text-slate-100">{skill.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.evidence.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-secondary/70 px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="mb-8 flex items-center justify-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <h3 className="font-display text-xl font-semibold md:text-2xl">
              Certifications
            </h3>
          </div>
          <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                className="glass flex items-start gap-3 rounded-xl p-4 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
