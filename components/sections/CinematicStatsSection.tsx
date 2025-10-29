'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Film, Camera, Clapperboard, Brain, Infinity } from 'lucide-react'

export function CinematicStatsSection() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const totalContent = 7

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2500
      const increment = totalContent / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= totalContent) {
          setCount(totalContent)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, totalContent])

  return (
    <section
      ref={ref}
      className="relative flex w-full items-center justify-center overflow-hidden px-5 py-24 md:py-32 lg:py-40"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08070C] via-[#120F1C] to-[#08070C]" />

      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Spotlight beam from top */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={isInView ? { opacity: 0.15, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute left-1/2 top-0 h-full w-[300px] -translate-x-1/2 bg-gradient-to-b from-[#C13FFF]/30 via-[#B8860B]/10 to-transparent blur-3xl md:w-[500px]"
        style={{ transformOrigin: 'top center' }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-12 md:flex-row md:gap-16 lg:gap-24">
        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 flex flex-col items-center px-4 md:px-8"
        >
          {/* Ethereal glow backdrop */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(193,63,255,0.15),_transparent_70%)] blur-3xl" />

          {/* Glass morphism container */}
          <div className="relative">
            {/* Main counter display with glass effect */}
            <div className="relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent px-10 py-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl md:px-14 md:py-10">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C13FFF]/[0.03] via-transparent to-[#B8860B]/[0.02]" />

              {/* Minimal corner accents */}
              <div className="absolute left-3 top-3 h-4 w-4 rounded-tl-lg border-l border-t border-white/10" />
              <div className="absolute right-3 top-3 h-4 w-4 rounded-tr-lg border-r border-t border-white/10" />
              <div className="absolute bottom-3 left-3 h-4 w-4 rounded-bl-lg border-b border-l border-white/10" />
              <div className="absolute bottom-3 right-3 h-4 w-4 rounded-br-lg border-b border-r border-white/10" />

              {/* Number display */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-6xl font-extralight tabular-nums tracking-[0.1em] md:text-7xl lg:text-8xl"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(200, 200, 220, 0.9) 0%, rgba(180, 160, 200, 0.8) 50%, rgba(160, 140, 180, 0.7) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 20px rgba(193, 63, 255, 0.15))',
                    fontVariantNumeric: 'tabular-nums',
                    letterSpacing: '0.1em',
                  }}
                >
                  {count.toLocaleString()}
                </motion.div>
              </div>

              {/* Ambient breathing glow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0 }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C13FFF]/5 via-transparent to-[#B8860B]/5 blur-xl"
              />

              {/* Subtle scan line effect */}
              <motion.div
                initial={{ y: '-100%' }}
                animate={isInView ? { y: '200%' } : { y: '-100%' }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                  repeatDelay: 3,
                }}
                className="absolute inset-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
            </div>
          </div>
        </motion.div>

        {/* Camera aperture blades rotating */}
        <motion.div
          initial={{ opacity: 0, rotate: 0, scale: 1 }}
          animate={
            isInView
              ? {
                  opacity: [0.2, 0.4, 0.2],
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }
              : { opacity: 0, rotate: 0, scale: 1 }
          }
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
          className="absolute inset-0 -m-28 md:-m-36"
        >
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <defs>
              <linearGradient id="aperture-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B8860B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#C13FFF" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {[...Array(8)].map((_, i) => {
              const angle = (i * 360) / 8
              return (
                <path
                  key={i}
                  d={`M 100 100 L ${100 + 80 * Math.cos((angle * Math.PI) / 180)} ${
                    100 + 80 * Math.sin((angle * Math.PI) / 180)
                  } L ${100 + 80 * Math.cos(((angle + 45) * Math.PI) / 180)} ${
                    100 + 80 * Math.sin(((angle + 45) * Math.PI) / 180)
                  } Z`}
                  fill="url(#aperture-gradient)"
                  stroke="#C13FFF"
                  strokeWidth="0.5"
                  opacity="0.4"
                />
              )
            })}
          </svg>
        </motion.div>

        {/* Floating film icons */}
        {[...Array(5)].map((_, i) => {
          const icons = [Film, Camera, Clapperboard, Brain, Infinity]
          const Icon = icons[i % 5]
          return (
            <motion.div
              key={`icon-${i}`}
              initial={{ opacity: 0 }}
              animate={
                isInView
                  ? {
                      opacity: [0.2, 0.5, 0.2],
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360],
                      x: [0, Math.cos((i * Math.PI) / 1.5) * 180, 0],
                      y: [0, Math.sin((i * Math.PI) / 1.5) * 180, 0],
                    }
                  : { opacity: 0 }
              }
              transition={{
                duration: 8 + i * 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: 'easeInOut',
              }}
              className="absolute left-1/2 top-1/2"
            >
              <Icon className="h-5 w-5 text-[#C13FFF] md:h-6 md:w-6" />
            </motion.div>
          )
        })}

        {/* Lens flare streaks */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`flare-${i}`}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isInView ? { opacity: [0, 0.3, 0], scaleX: [0, 1, 0] } : { opacity: 0, scaleX: 0 }
            }
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.75,
              ease: 'easeInOut',
            }}
            className="absolute left-1/2 top-1/2 h-0.5 w-64 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
            }}
          />
        ))}

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex flex-col items-center gap-8 p-8 md:ml-auto md:items-start md:p-12 lg:p-16"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(193,63,255,0.08),_rgba(184,134,11,0.05),_transparent_70%)] blur-[80px]" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col items-center gap-4 md:items-start"
          >
            <div
              className="text-center text-lg font-medium uppercase leading-tight tracking-[0.3em] md:text-left md:text-xl lg:text-2xl"
              style={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontVariant: 'small-caps',
                letterSpacing: '0.3em',
              }}
            >
              Stories on Our Platform
            </div>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="h-[1px] w-32 bg-gradient-to-r from-[#B8860B] via-[#C13FFF] to-[#B8860B] opacity-60 md:w-40"
            />

            <div
              className="text-center text-xs uppercase leading-relaxed tracking-[0.25em] md:text-left md:text-sm"
              style={{
                color: 'rgba(255, 255, 255, 0.5)',
                letterSpacing: '0.25em',
                fontWeight: 400,
              }}
            >
              AI-Generated Masterpieces
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
