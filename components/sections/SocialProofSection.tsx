"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const aiVisionaries = [
  "Sora by OpenAI",
  "Grok Imagine",
  "LTX Studio",
  "Veo by Google",
  "Runway",
  "flick.art",
  "focalml.com",
  "Midjourney",
]

export function SocialProofSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section className="relative self-stretch py-20 md:py-24 flex flex-col justify-center items-center gap-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0812]/30 to-transparent" />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 opacity-40"
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(193, 63, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      />

      {!isMobile && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 10,
            ease: "linear",
          }}
        />
      )}

      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #B8860B 20%, #C13FFF 50%, #B8860B 80%, transparent 100%)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 backdrop-blur-sm" />
      <div
        className="absolute inset-0"
        style={{
          boxShadow: "inset 0 2px 20px rgba(0, 0, 0, 0.3), inset 0 -2px 20px rgba(0, 0, 0, 0.3)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-5 px-4">
        <motion.h2
          className="text-center text-foreground/90 text-2xl md:text-3xl font-semibold tracking-[0.08em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Inspired by the visionaries shaping AI video.
        </motion.h2>

        <motion.p
          className="text-center text-[#A1A1AA] text-sm md:text-base max-w-2xl leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We build on the breakthroughs of these pioneers in generative storytelling.
        </motion.p>
      </div>

      <motion.div
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12 px-4 max-w-5xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {aiVisionaries.map((name, index) => (
          <motion.div
            key={name}
            className="relative flex items-center justify-center"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.08 }}
          >
            {hoveredIndex === index && !isMobile && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/30 via-[#C13FFF]/30 to-[#B8860B]/30 blur-2xl rounded-lg"
                layoutId="hoverGlow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            )}

            <motion.span
              className="relative text-center text-muted-foreground/70 text-sm md:text-base font-medium tracking-[0.18em] uppercase transition-all duration-300"
              animate={{
                color: hoveredIndex === index ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground) / 0.7)",
                textShadow:
                  hoveredIndex === index
                    ? "0 0 15px rgba(184, 134, 11, 0.5), 0 0 30px rgba(193, 63, 255, 0.3), 0 0 45px rgba(184, 134, 11, 0.2)"
                    : isMobile
                      ? "none"
                      : "0 0 8px rgba(255, 255, 255, 0.05)",
                opacity: isMobile ? 1 : [0.7, 0.85, 0.7],
              }}
              transition={{
                color: { duration: 0.3 },
                textShadow: { duration: 0.3 },
                opacity: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              {name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
