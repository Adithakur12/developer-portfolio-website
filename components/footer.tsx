"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { siteConfig, getSocialLinks } from "@/lib/site-data"

const socialIconMap = {
  linkedin: Linkedin,
  github: Github,
  email: Mail,
} as const

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = getSocialLinks()

  return (
    <footer className="relative border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <motion.a
              href="#home"
              className="gradient-text mb-4 inline-block text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              {`<${siteConfig.initials} />`}
            </motion.a>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.role}. Based in {siteConfig.location}, building AI-powered
              and data-driven solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.type]
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:glow-sm hover:text-foreground"
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> using
            Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
