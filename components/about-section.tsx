"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Languages } from "lucide-react"
import { siteConfig, achievements, languages } from "@/lib/site-data"

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="glass mb-4 inline-block rounded-full px-4 py-2 text-sm text-primary">
            About Me
          </span>
          <h2 className="font-display mb-4 text-3xl font-bold md:text-5xl">
            Meet <span className="gradient-text">{siteConfig.name.split(" ")[0]}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Python developer & AI enthusiast building data-driven solutions
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square max-w-md">
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="glass relative flex h-full items-center justify-center rounded-3xl p-8">
                <div className="text-center">
                  <motion.div
                    className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-5xl font-bold text-primary-foreground"
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {siteConfig.initials}
                  </motion.div>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold">{siteConfig.name}</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.role}</p>
                    <p className="mt-2 flex items-center justify-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      {siteConfig.location}
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {siteConfig.heroTechStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary/20 px-3 py-1 text-sm text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">{siteConfig.about}</p>

            <div className="glass rounded-xl p-5">
              <div className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                <Languages className="h-5 w-5 text-primary" />
                Languages
              </div>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="rounded-md border border-border/60 bg-secondary/40 px-3 py-1.5 text-sm"
                  >
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="text-muted-foreground"> · {lang.level}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="glass rounded-xl p-4 transition-all duration-300 hover:glow-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
