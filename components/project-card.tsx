"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/project-types"
import { isValidUrl } from "@/lib/site-data"

const cardVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 4px 24px oklch(0 0 0 / 0.12)",
  },
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0 20px 48px oklch(0.7 0.15 200 / 0.12)",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.06, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

const bodyVariants = {
  rest: { paddingTop: 20, paddingBottom: 20 },
  hover: {
    paddingTop: 24,
    paddingBottom: 24,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const descriptionVariants = {
  rest: { maxHeight: 52, opacity: 0.85 },
  hover: {
    maxHeight: 160,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const actionsVariants = {
  rest: { opacity: 0, y: 12, pointerEvents: "none" as const },
  hover: {
    opacity: 1,
    y: 0,
    pointerEvents: "auto" as const,
    transition: { duration: 0.35, delay: 0.05, ease: [0.22, 1, 0.36, 1] as const },
  },
}

interface ProjectCardProps {
  project: Project
  index?: number
  className?: string
}

export function ProjectCard({ project, index = 0, className }: ProjectCardProps) {
  const hasLive = isValidUrl(project.live)
  const hasGithub = isValidUrl(project.github)
  const hasActions = hasLive || hasGithub

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn("h-full", className)}
    >
      <motion.article
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        className={cn(
          "group/card project-card-glass relative flex h-full flex-col overflow-hidden rounded-2xl",
          "border border-white/[0.08] bg-card/30 backdrop-blur-xl"
        )}
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-100">
          <div className="project-card-shine absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        </div>

        <div className="relative overflow-hidden">
          <motion.div variants={imageVariants} className="relative aspect-[16/10] w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

          {hasActions && (
            <div className="project-card-actions-static absolute bottom-4 left-4 right-4 flex gap-2">
              <ProjectActions project={project} compact />
            </div>
          )}
        </div>

        <motion.div variants={bodyVariants} className="relative flex flex-1 flex-col px-5">
          <div className="mb-3 flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold tracking-tight text-foreground transition-colors group-hover/card:text-primary sm:text-xl">
              {project.title}
            </h3>
            {hasLive && (
              <motion.span
                variants={{
                  rest: { opacity: 0, x: -4 },
                  hover: { opacity: 1, x: 0 },
                }}
                className="hidden shrink-0 text-primary sm:inline-flex"
                aria-hidden
              >
                <ExternalLink className="h-4 w-4" />
              </motion.span>
            )}
          </div>

          <motion.div
            variants={descriptionVariants}
            className="overflow-hidden"
          >
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </motion.div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <TechBadge key={tag} label={tag} />
            ))}
          </div>

          {hasActions && (
            <>
              <motion.div
                variants={actionsVariants}
                className="project-card-actions-hover mt-5 flex gap-2"
              >
                <ProjectActions project={project} />
              </motion.div>
              <div className="project-card-actions-touch mt-5 flex gap-2">
                <ProjectActions project={project} />
              </div>
            </>
          )}
        </motion.div>
      </motion.article>
    </motion.div>
  )
}

function TechBadge({ label, muted }: { label: string; muted?: boolean }) {
  return (
    <span
      className={cn(
        "rounded-md border px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide",
        muted
          ? "border-border/50 bg-secondary/30 text-muted-foreground"
          : "border-primary/20 bg-primary/10 text-primary"
      )}
    >
      {label}
    </span>
  )
}

function ProjectActions({
  project,
  compact,
  stretch = true,
  className,
}: {
  project: Project
  compact?: boolean
  stretch?: boolean
  className?: string
}) {
  const hasLive = isValidUrl(project.live)
  const hasGithub = isValidUrl(project.github)

  return (
    <>
      {hasLive && (
        <ProjectLinkButton
          href={project.live!}
          variant="live"
          compact={compact}
          stretch={stretch}
          className={className}
        />
      )}
      {hasGithub && (
        <ProjectLinkButton
          href={project.github!}
          variant="github"
          compact={compact}
          stretch={stretch}
          className={className}
        />
      )}
    </>
  )
}

function ProjectLinkButton({
  href,
  variant,
  compact,
  stretch = true,
  className,
}: {
  href: string
  variant: "live" | "github"
  compact?: boolean
  stretch?: boolean
  className?: string
}) {
  const isLive = variant === "live"

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all",
        stretch && "flex-1",
        className,
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        compact ? "px-3 py-2 text-xs" : "px-4 py-2.5 text-sm",
        isLive
          ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-sm"
          : "glass border border-white/10 text-foreground hover:border-primary/30 hover:text-primary"
      )}
    >
      {isLive ? (
        <>
          <ExternalLink className={cn(compact ? "h-3 w-3" : "h-4 w-4")} />
          Live Demo
        </>
      ) : (
        <>
          <Github className={cn(compact ? "h-3 w-3" : "h-4 w-4")} />
          GitHub
        </>
      )}
    </a>
  )
}

interface FeaturedProjectCardProps {
  project: Project
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const hasLive = isValidUrl(project.live)
  const hasGithub = isValidUrl(project.github)
  const hasActions = hasLive || hasGithub

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      variants={cardVariants}
      className="project-card-glass grid gap-6 overflow-hidden rounded-3xl border border-white/[0.08] bg-card/30 p-4 backdrop-blur-xl lg:grid-cols-2 lg:gap-8 lg:p-6"
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[280px]">
        <motion.div variants={imageVariants} className="relative h-full min-h-[200px] w-full lg:absolute lg:inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      </div>

      <motion.div variants={bodyVariants} className="flex flex-col justify-center px-2 lg:px-0">
        <span className="mb-3 w-fit rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-primary">
          Featured
        </span>
        <h3 className="font-display mb-3 text-2xl font-bold tracking-tight md:text-3xl">
          {project.title}
        </h3>
        <motion.div variants={descriptionVariants} className="overflow-hidden">
          <p className="mb-6 leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </motion.div>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>
        {hasActions && (
          <div className="flex flex-col gap-3 sm:flex-row">
            <ProjectActions
              project={project}
              stretch={false}
              className="sm:min-w-[148px]"
            />
          </div>
        )}
      </motion.div>
    </motion.article>
  )
}
