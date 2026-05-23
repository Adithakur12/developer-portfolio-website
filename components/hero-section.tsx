"use client"

import { useRef, useEffect } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, FileText, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/hero-background"
import AnimatedCube from "@/components/animated-cube"
import { siteConfig, getSocialLinks } from "@/lib/site-data"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const socialIconMap = {
  linkedin: Linkedin,
  github: Github,
  email: Mail,
} as const

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, 72])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const parallaxX = useSpring(mouseX, { stiffness: 90, damping: 28 })
  const parallaxY = useSpring(mouseY, { stiffness: 90, damping: 28 })

  const socialLinks = getSocialLinks()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5)
      mouseY.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20"
    >
      <HeroBackground parallaxX={parallaxX} parallaxY={parallaxY} />

      <motion.div
        style={{ opacity, y: contentY }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-4xl lg:text-left"
        >
          <motion.div variants={itemVariants} className="mb-8 flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-card/40 px-4 py-2 text-sm text-muted-foreground backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Now building work that is seen, used, and improved.
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary sm:text-sm"
          >
            {siteConfig.role}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            I build dashboards and AI tools that help teams turn data into decisions.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            {siteConfig.about}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            I build practical analytics tools and dashboards that make data easier to act on.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6 flex justify-center lg:justify-start">
            <img
              src="/image.png/WhatsApp%20Image%202026-05-23%20at%203.13.02%20PM.jpeg"
              alt={`${siteConfig.name} profile`}
              className="rounded-full w-32 h-32 object-cover ring-2 ring-primary/40"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground lg:justify-start"
          >
            <MapPin className="h-4 w-4 text-primary" />
            {siteConfig.location}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {siteConfig.heroTechStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/60 bg-secondary/40 px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button size="lg" className="glow-sm min-w-[160px] px-8" asChild>
              <a href="#projects">See my work</a>
            </Button>
            <Button size="lg" variant="outline" className="glass min-w-[160px] px-8" asChild>
              <a href="#contact">Let's talk</a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
              asChild
            >
              <a
                href={siteConfig.resume}
                download="Aditya_Rajpoot_Resume.pdf"
                className="inline-flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>

          {socialLinks.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center justify-center gap-3 lg:justify-start"
            >
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.type]
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border/50 bg-card/30 p-3 text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/30 hover:text-foreground"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.96 }}
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      <div className="absolute right-8 top-1/2 z-10 -translate-y-1/2">
        <AnimatedCube />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.a
          href="#projects"
          className="flex flex-col items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll to projects section"
        >
          <span className="font-mono uppercase tracking-widest">Explore</span>
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  )
}
