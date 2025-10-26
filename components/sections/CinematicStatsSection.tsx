"use client"

import type React from "react"

import { motion, useInView, useMotionValue, useTransform, type PanInfo } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Film, Tv, Sparkles, Layers } from "lucide-react"

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
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
      className="group relative flex flex-col items-center gap-4 p-6 md:p-8 rounded-xl bg-gradient-to-b from-[#1a1625]/80 to-[#0f0d15]/80 backdrop-blur-sm border border-white/5 hover:border-[#C13FFF]/30 transition-all duration-500"
      style={{ pointerEvents: isDragging ? "none" : "auto" }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C13FFF]/0 via-[#B8860B]/0 to-[#C13FFF]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />

      <div className="relative z-10 text-[#B8860B] group-hover:text-[#C13FFF] transition-colors duration-300">
        {icon}
      </div>

      <div className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-bold font-mono bg-gradient-to-br from-white via-[#B8860B] to-[#C13FFF] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
        {count}
      </div>

      <div className="relative z-10 text-sm md:text-base text-muted-foreground/80 uppercase tracking-wider font-medium">
        {label}
      </div>

      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(193,63,255,0.3)]" />
    </motion.div>
  )
}

export function CinematicStatsSection() {
  const [tickerText, setTickerText] = useState("1,204 views today • 56 new projects uploaded • 17 creators online now")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragX = useMotionValue(0)
  const tilt = useTransform(dragX, [-100, 0, 100], [5, 0, -5])

  const stats = [
    { icon: <Film className="w-10 h-10 md:w-12 md:h-12" />, label: "Films", value: 0 },
    { icon: <Tv className="w-10 h-10 md:w-12 md:h-12" />, label: "TV Shows", value: 0 },
    { icon: <Sparkles className="w-10 h-10 md:w-12 md:h-12" />, label: "Animations", value: 0 },
    { icon: <Layers className="w-10 h-10 md:w-12 md:h-12" />, label: "Hybrids", value: 0 },
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
      className="relative w-full px-5 py-16 md:py-24 lg:py-32 overflow-hidden flex justify-center items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#08070C] via-[#120F1C] to-[#08070C]" />

      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#B8860B] via-white to-[#C13FFF] bg-clip-text text-transparent">
            The Future of Cinema Is Already Here.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Hybrai is home to 0 AI-generated films, shows, and animations — with new stories added every day.
          </p>
        </motion.div>

        <div className="sm:hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#C13FFF]/20 to-transparent pointer-events-none z-10 opacity-60" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#B8860B]/20 to-transparent pointer-events-none z-10 opacity-60" />

          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            animate={{ x: -currentSlide * (window.innerWidth * 0.8 + 24) }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                style={{
                  width: "80vw",
                  minWidth: "80vw",
                  rotateY: currentSlide === index ? tilt : 0,
                }}
                className="flex-shrink-0"
              >
                <StatCard {...stat} delay={0.2 + index * 0.1} isDragging={isDragging} />
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center gap-2 mt-6">
            {stats.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-[#C13FFF] w-8" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
                {currentSlide === index && (
                  <div className="absolute inset-0 rounded-full bg-[#C13FFF] blur-md opacity-60 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} delay={0.2 + index * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-[#1a1625]/60 via-[#0f0d15]/60 to-[#1a1625]/60 backdrop-blur-md border border-white/10"
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-red-500 animate-ping" />
            </div>
            <span className="text-xs md:text-sm font-bold text-red-500 uppercase tracking-wider">LIVE</span>
          </div>

          <div className="text-sm md:text-base text-muted-foreground/80 font-medium">{tickerText}</div>
        </motion.div>
      </div>
    </section>
  )
}
