"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Languages } from "lucide-react"
import { siteConfig, achievements } from "@/lib/site-data"

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
            Why I build
          </span>
          <h2 className="font-display mb-4 text-3xl font-bold md:text-5xl">
            A few chapters behind the work
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Stories that explain how curiosity turned into tools, dashboards, and internship impact.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8"
          >
            <span className="text-sm uppercase tracking-[0.2em] text-primary">
              Personal story
            </span>
            <h3 className="mt-4 text-3xl font-bold text-foreground">
              I got curious about AI while automating my college assignment tracker.
            </h3>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {siteConfig.about}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-secondary/70 p-5">
                <p className="text-sm font-semibold text-primary">A problem I solved recently</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Built a Power BI dashboard for internship stakeholders to cut down manual Excel checks and share student insights faster.
                </p>
              </div>
              <div className="rounded-3xl bg-secondary/70 p-5">
                <p className="text-sm font-semibold text-primary">Currently learning</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Fine-tuning LLM prompts for text analytics and connecting Python APIs with analytics apps.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3">
                <Languages className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">My workflow</p>
                  <p className="mt-1 text-base font-semibold text-foreground">
                    Tools and habits I rely on every day
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Python",
                  "Power BI",
                  "MySQL",
                  "Streamlit",
                  "FastAPI",
                  "LLM prompts",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-secondary/50 px-3 py-1 text-sm text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-primary">What stands out</p>
              <div className="mt-5 grid gap-3">
                {achievements.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="rounded-3xl bg-secondary/50 p-5"
                  >
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
