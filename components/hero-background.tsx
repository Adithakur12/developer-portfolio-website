"use client"

import { motion, type MotionValue, useTransform } from "framer-motion"

interface HeroBackgroundProps {
  parallaxX: MotionValue<number>
  parallaxY: MotionValue<number>
}

const shapes = [
  {
    className:
      "left-[8%] top-[18%] h-44 w-44 rounded-full border border-primary/25 bg-primary/5 shadow-[0_0_60px_oklch(0.7_0.15_200/0.12)]",
    depth: 1.2,
    float: { y: [0, -14, 0], rotateZ: [0, 6, 0] },
    duration: 7,
  },
  {
    className:
      "right-[12%] top-[22%] h-32 w-32 rounded-2xl border border-accent/20 bg-accent/5 backdrop-blur-sm",
    depth: -0.9,
    float: { y: [0, 18, 0], rotateZ: [12, -4, 12] },
    duration: 8.5,
  },
  {
    className:
      "right-[28%] bottom-[22%] h-56 w-56 rounded-full border border-white/10 bg-gradient-to-br from-primary/10 to-transparent",
    depth: 0.7,
    float: { y: [0, -10, 0], scale: [1, 1.04, 1] },
    duration: 9,
  },
  {
    className:
      "left-[55%] top-[58%] h-24 w-24 rounded-full border-2 border-dashed border-primary/15",
    depth: 1.5,
    float: { y: [0, 12, 0], rotateZ: [0, -180, -360] },
    duration: 28,
  },
]

export function HeroBackground({ parallaxX, parallaxY }: HeroBackgroundProps) {
  const sceneRotateX = useTransform(parallaxY, [-1, 1], [6, -6])
  const sceneRotateY = useTransform(parallaxX, [-1, 1], [-10, 10])

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="hero-vignette absolute inset-0" />
      <div className="hero-grid-mask absolute inset-0 opacity-40" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[120px]"
        style={{
          x: useTransform(parallaxX, (v) => v * 40),
          y: useTransform(parallaxY, (v) => v * 30),
        }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          perspective: 1200,
          rotateX: sceneRotateX,
          rotateY: sceneRotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {shapes.map((shape, index) => (
          <FloatingShape
            key={index}
            shape={shape}
            parallaxX={parallaxX}
            parallaxY={parallaxY}
          />
        ))}

        <motion.div
          className="absolute h-72 w-72 rounded-full border border-primary/10"
          style={{
            transform: "translateZ(-80px) rotateX(72deg)",
            x: useTransform(parallaxX, (v) => v * 24),
            y: useTransform(parallaxY, (v) => v * 18),
          }}
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  )
}

function FloatingShape({
  shape,
  parallaxX,
  parallaxY,
}: {
  shape: (typeof shapes)[number]
  parallaxX: MotionValue<number>
  parallaxY: MotionValue<number>
}) {
  const x = useTransform(parallaxX, (v) => v * 36 * shape.depth)
  const y = useTransform(parallaxY, (v) => v * 28 * shape.depth)

  return (
    <motion.div
      className={`absolute ${shape.className}`}
      style={{
        x,
        y,
        transform: `translateZ(${shape.depth * 60}px)`,
        transformStyle: "preserve-3d",
      }}
      animate={shape.float}
      transition={{
        duration: shape.duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}
