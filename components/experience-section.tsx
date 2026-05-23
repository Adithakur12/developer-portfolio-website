"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { experiences } from "@/lib/site-data"

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="glass mb-4 inline-block rounded-full px-4 py-2 text-sm text-primary">
            Experience
          </span>
          <h2 className="font-display mb-4 text-3xl font-bold md:text-5xl">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Internships and hands-on professional experience
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:mr-auto md:w-1/2 md:pr-8 md:text-right"
                  : "md:ml-auto md:w-1/2 md:pl-8"
              }`}
            >
              <div
                className={`absolute top-0 h-4 w-4 rounded-full bg-primary glow-sm ${
                  index % 2 === 0
                    ? "left-[-8px] md:right-[-8px] md:left-auto"
                    : "left-[-8px]"
                }`}
              >
                {exp.current && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass ml-6 rounded-2xl p-6 transition-all duration-300 hover:glow-sm md:ml-0"
              >
                <div className={`mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.current && (
                    <span className="mb-2 inline-block rounded-full bg-primary/20 px-2 py-1 text-xs text-primary">
                      Current
                    </span>
                  )}
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="font-medium text-primary">{exp.company}</p>
                </div>

                <div
                  className={`mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                </div>

                <p className="mb-4 leading-relaxed text-muted-foreground">{exp.description}</p>

                <div className="mb-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2 text-sm ${
                        index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                      }`}
                    >
                      <span className="mt-1 text-primary">•</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div
                  className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
