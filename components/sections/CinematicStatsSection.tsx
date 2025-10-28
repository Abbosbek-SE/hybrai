'use client'

import type React from 'react'

import { motion, useInView, useMotionValue, useTransform, type PanInfo } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Film, Tv, Sparkles, Layers } from 'lucide-react'

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: number
  delay: number
  isDragging?: boolean
}

function StatCard({ icon, label, value, delay, isDragging = false }: StatCardProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000 // 2 seconds
      const increment = value / (duration / 16) // 60fps

      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="group relative flex flex-col items-center gap-4 rounded-xl border border-white/5 bg-gradient-to-b from-[#1a1625]/80 to-[#0f0d15]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#C13FFF]/30 md:p-8"
      style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C13FFF]/0 via-[#B8860B]/0 to-[#C13FFF]/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />

      <div className="relative z-10 text-[#B8860B] transition-colors duration-300 group-hover:text-[#C13FFF]">
        {icon}
      </div>

      <div className="relative z-10 bg-gradient-to-br from-white via-[#B8860B] to-[#C13FFF] bg-clip-text font-mono text-5xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110 md:text-6xl lg:text-7xl">
        {count}
      </div>

      <div className="relative z-10 text-sm font-medium uppercase tracking-wider text-muted-foreground/80 md:text-base">
        {label}
      </div>

      <div className="absolute inset-0 rounded-xl opacity-0 shadow-[0_0_30px_rgba(193,63,255,0.3)] transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  )
}

export function CinematicStatsSection() {
  const [tickerText] = useState(
    '1,204 views today • 56 new projects uploaded • 17 creators online now'
  )
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragX = useMotionValue(0)
  const tilt = useTransform(dragX, [-100, 0, 100], [5, 0, -5])

  const stats = [
    { icon: <Film className="h-10 w-10 md:h-12 md:w-12" />, label: 'Films', value: 0 },
    { icon: <Tv className="h-10 w-10 md:h-12 md:w-12" />, label: 'TV Shows', value: 0 },
    { icon: <Sparkles className="h-10 w-10 md:h-12 md:w-12" />, label: 'Animations', value: 0 },
    { icon: <Layers className="h-10 w-10 md:h-12 md:w-12" />, label: 'Hybrids', value: 0 },
  ]

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)
    const offset = info.offset.x
    const velocity = info.velocity.x

    let newSlide = currentSlide

    if (Math.abs(velocity) > 500) {
      newSlide = velocity > 0 ? currentSlide - 1 : currentSlide + 1
    } else if (Math.abs(offset) > 50) {
      newSlide = offset > 0 ? currentSlide - 1 : currentSlide + 1
    }

    newSlide = Math.max(0, Math.min(stats.length - 1, newSlide))
    setCurrentSlide(newSlide)
  }

  return (
    <section
      ref={ref}
      className="relative flex w-full items-center justify-center overflow-hidden px-5 py-16 md:py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#08070C] via-[#120F1C] to-[#08070C]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 text-center"
        >
          <h2 className="bg-gradient-to-r from-[#B8860B] via-white to-[#C13FFF] bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
            The Future of Cinema Is Already Here.
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
            Hybrai is home to 0 AI-generated films, shows, and animations — with new stories added
            every day.
          </p>
        </motion.div>

        <div className="relative sm:hidden">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-[#C13FFF]/20 to-transparent opacity-60" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-[#B8860B]/20 to-transparent opacity-60" />

          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            animate={{ x: -currentSlide * (window.innerWidth * 0.8 + 24) }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="flex cursor-grab gap-6 active:cursor-grabbing"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                style={{
                  width: '80vw',
                  minWidth: '80vw',
                  rotateY: currentSlide === index ? tilt : 0,
                }}
                className="flex-shrink-0"
              >
                <StatCard {...stat} delay={0.2 + index * 0.1} isDragging={isDragging} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-6 flex justify-center gap-2">
            {stats.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-8 bg-[#C13FFF]' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
                {currentSlide === index && (
                  <div className="absolute inset-0 animate-pulse rounded-full bg-[#C13FFF] opacity-60 blur-md" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden grid-cols-2 gap-6 sm:grid md:gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} delay={0.2 + index * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative flex items-center justify-center gap-3 rounded-full border border-white/10 bg-gradient-to-r from-[#1a1625]/60 via-[#0f0d15]/60 to-[#1a1625]/60 px-6 py-4 backdrop-blur-md"
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              <div className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-red-500" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-500 md:text-sm">
              LIVE
            </span>
          </div>

          <div className="text-sm font-medium text-muted-foreground/80 md:text-base">
            {tickerText}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
