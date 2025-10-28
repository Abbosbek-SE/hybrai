'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Play, Camera, Film, Clapperboard, Wand2 } from 'lucide-react'

import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/button'

const constellationNodes = [
  { x: '12%', y: '18%', delay: 0 },
  { x: '25%', y: '25%', delay: 1.2 },
  { x: '38%', y: '15%', delay: 2.4 },
  { x: '52%', y: '22%', delay: 3.6 },
  { x: '65%', y: '12%', delay: 4.8 },
  { x: '78%', y: '20%', delay: 6 },
  { x: '88%', y: '28%', delay: 7.2 },
  { x: '15%', y: '42%', delay: 1.8 },
  { x: '28%', y: '48%', delay: 3 },
  { x: '42%', y: '38%', delay: 4.2 },
  { x: '55%', y: '45%', delay: 5.4 },
  { x: '68%', y: '40%', delay: 6.6 },
  { x: '82%', y: '50%', delay: 7.8 },
  { x: '10%', y: '65%', delay: 2.4 },
  { x: '22%', y: '72%', delay: 3.6 },
  { x: '35%', y: '62%', delay: 4.8 },
  { x: '48%', y: '68%', delay: 6 },
  { x: '62%', y: '65%', delay: 7.2 },
  { x: '75%', y: '70%', delay: 8.4 },
  { x: '85%', y: '75%', delay: 9.6 },
  { x: '18%', y: '85%', delay: 3 },
  { x: '45%', y: '88%', delay: 4.2 },
  { x: '72%', y: '82%', delay: 5.4 },
  { x: '90%', y: '90%', delay: 6.6 },
]

const iconNodes = [
  { x: '20%', y: '30%', icon: Camera, color: 'text-[#C13FFF]/60', delay: 0 },
  { x: '45%', y: '25%', icon: Film, color: 'text-[#B8860B]/60', delay: 2 },
  { x: '70%', y: '35%', icon: Clapperboard, color: 'text-[#C13FFF]/60', delay: 4 },
  { x: '30%', y: '55%', icon: Wand2, color: 'text-[#B8860B]/60', delay: 6 },
  { x: '60%', y: '50%', icon: Camera, color: 'text-[#C13FFF]/60', delay: 8 },
  { x: '80%', y: '60%', icon: Film, color: 'text-[#B8860B]/60', delay: 10 },
  { x: '25%', y: '78%', icon: Clapperboard, color: 'text-[#C13FFF]/60', delay: 12 },
  { x: '65%', y: '75%', icon: Wand2, color: 'text-[#B8860B]/60', delay: 14 },
]

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden py-24 text-center md:py-32"
      style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-[#0D001A] to-[#1C0033]">
        <div className="radial-glow-cyan absolute inset-0 opacity-40 blur-3xl" />
        <div className="radial-glow-magenta absolute inset-0 opacity-30 blur-3xl" />
      </div>

      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1220 810"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <g clipPath="url(#clip0_186_1134)">
            <mask
              id="mask0_186_1134"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="10"
              y="-1"
              width="1200"
              height="812"
            >
              <rect
                x="10"
                y="-0.84668"
                width="1200"
                height="811.693"
                fill="url(#paint0_linear_186_1134)"
              />
            </mask>
            <g mask="url(#mask0_186_1134)">
              {/* Grid Rectangles */}
              {[...Array(35)].map((_, i) => (
                <React.Fragment key={`row1-${i}`}>
                  <rect
                    x={-20.0891 + i * 36}
                    y="9.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="45.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="81.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="117.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="153.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="189.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="225.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="261.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="297.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="333.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="369.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="405.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="441.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="477.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="513.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="549.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="585.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="621.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="657.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="693.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="729.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                  <rect
                    x={-20.0891 + i * 36}
                    y="765.2"
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                </React.Fragment>
              ))}
              {/* Specific Rectangles with fill */}
              <rect
                x="699.711"
                y="81"
                width="36"
                height="36"
                fill="hsl(var(--foreground))"
                fillOpacity="0.06"
              />
              <rect
                x="195.711"
                y="153"
                width="36"
                height="36"
                fill="hsl(var(--foreground))"
                fillOpacity="0.07"
              />
              <rect
                x="1023.71"
                y="153"
                width="36"
                height="36"
                fill="hsl(var(--foreground))"
                fillOpacity="0.07"
              />
              <rect
                x="123.711"
                y="225"
                width="36"
                height="36"
                fill="hsl(var(--foreground))"
                fillOpacity="0.07"
              />
              <rect
                x="1095.71"
                y="225"
                width="36"
                height="36"
                fill="hsl(var(--foreground))"
                fillOpacity="0.07"
              />
              <rect
                x="951.711"
                y="297"
                width="36"
                height="36"
                fill="hsl(var(--foreground))"
                fillOpacity="0.07"
              />
              <rect
                x="231.711"
                y="333"
                width="36"
                height="36"
                fill="hsl(var(--foreground))"
                fillOpacity="0.05"
              />
              <rect
                x="303.711"
                y="405"
                width="36"
                height="36"
                fill="hsl(var(--foreground))"
                fillOpacity="0.05"
              />
              <rect
                x="87.7109"
                y="405"
                width="36"
                height="36"
                fill="hsl(var(--foreground))"
                fillOpacity="0.07"
              />
              <rect
                x="519.711"
                y="405"
                width="36"
                height="36"
                fill="hsl(var(--foreground))"
                fillOpacity="0.06"
              />
              <rect
                x="771.711"
                y="405"
                width="36"
                height="36"
                fill="hsl(var(--foreground))"
                fillOpacity="0.07"
              />
              <rect
                x="591.711"
                y="477"
                width="36"
                height="36"
                fill="hsl(var(--foreground))"
                fillOpacity="0.05"
              />
            </g>

            <g filter="url(#filter0_f_186_1134)">
              <path
                d="M1447.45 -87.0203V-149.03H1770V1248.85H466.158V894.269C1008.11 894.269 1447.45 454.931 1447.45 -87.0203Z"
                fill="url(#paint1_linear_186_1134)"
              />
            </g>

            <g filter="url(#filter1_f_186_1134)">
              <path
                d="M1383.45 -151.02V-213.03H1706V1184.85H402.158V830.269C944.109 830.269 1383.45 390.931 1383.45 -151.02Z"
                fill="url(#paint2_linear_186_1134)"
                fillOpacity="0.5"
              />
            </g>

            <g style={{ mixBlendMode: 'lighten' }} filter="url(#filter2_f_186_1134)">
              <path
                d="M1567.45 -231.02V-293.03H1890V1104.85H586.158V750.269C1128.11 750.269 1567.45 310.931 1567.45 -231.02Z"
                fill="url(#paint3_linear_186_1134)"
              />
            </g>

            <g style={{ mixBlendMode: 'overlay' }} filter="url(#filter3_f_186_1134)">
              <path
                d="M65.625 750.269H284.007C860.205 750.269 1327.31 283.168 1327.31 -293.03H1650V1104.85H65.625V750.269Z"
                fill="url(#paint4_radial_186_1134)"
                fillOpacity="0.4"
              />
            </g>
          </g>

          <defs>
            <filter
              id="filter0_f_186_1134"
              x="-554.207"
              y="-1169.39"
              width="3216.57"
              height="3310.61"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="478.182" result="effect1_foregroundBlur_186_1134" />
            </filter>
            <filter
              id="filter1_f_186_1134"
              x="426.762"
              y="-452.424"
              width="1622.63"
              height="1716.67"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="79.6969" result="effect1_foregroundBlur_186_1134" />
            </filter>
            <filter
              id="filter2_f_186_1134"
              x="-253.163"
              y="-611.818"
              width="2221.95"
              height="2035.46"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="159.394" result="effect1_foregroundBlur_186_1134" />
            </filter>
            <linearGradient
              id="paint0_linear_186_1134"
              x1="35.0676"
              y1="23.6807"
              x2="903.8"
              y2="632.086"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--foreground))" stopOpacity="0" />
              <stop offset="1" stopColor="hsl(var(--muted-foreground))" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_186_1134"
              x1="1118.08"
              y1="-149.03"
              x2="1118.08"
              y2="1248.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--gradient-ai-cyan))" />
              <stop offset="0.5" stopColor="hsl(var(--gradient-ai-magenta))" />
              <stop offset="1" stopColor="hsl(var(--gradient-ai-cyan-primary))" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_186_1134"
              x1="1054.08"
              y1="-213.03"
              x2="1054.08"
              y2="1184.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--gradient-ai-cyan-vibrant))" />
              <stop offset="0.5" stopColor="hsl(var(--gradient-ai-violet))" />
              <stop offset="1" stopColor="hsl(var(--gradient-ai-magenta))" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_186_1134"
              x1="1238.08"
              y1="-293.03"
              x2="1238.08"
              y2="1104.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--gradient-ai-magenta))" />
              <stop offset="0.5" stopColor="hsl(var(--gradient-ai-cyan-primary))" />
              <stop offset="1" stopColor="hsl(var(--gradient-ai-violet))" />
            </linearGradient>
            <radialGradient
              id="paint4_radial_186_1134"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(989.13 557.24) rotate(47.9516) scale(466.313 471.424)"
            >
              <stop stopColor="hsl(var(--gradient-ai-cyan-soft))" />
              <stop offset="0.5" stopColor="hsl(var(--gradient-ai-violet))" />
              <stop offset="1" stopColor="hsl(var(--gradient-ai-magenta))" />
            </radialGradient>
            <clipPath id="clip0_186_1134">
              <rect width="1220" height="810" fill="hsl(var(--foreground))" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-[1]"
        initial={{ y: 0 }}
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      >
        <svg className="h-full w-full" viewBox="0 0 1440 900" fill="none" aria-hidden="true">
          <path
            d="M-50 200 C 300 120, 700 320, 1200 180"
            className="stroke-[0.8] opacity-5 sm:stroke-[1]"
            stroke="hsl(var(--foreground))"
            strokeWidth="1"
          />
          <path
            d="M-80 380 C 250 470, 650 260, 1180 400"
            className="stroke-[0.8] opacity-5 sm:stroke-[1]"
            stroke="hsl(var(--foreground))"
            strokeWidth="1"
          />
          <path
            d="M-40 560 C 320 520, 680 680, 1280 520"
            className="stroke-[0.8] opacity-5 sm:stroke-[1]"
            stroke="hsl(var(--foreground))"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-[2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      >
        {constellationNodes.map((node, index) => (
          <motion.div
            key={`constellation-${index}`}
            className="absolute h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.6)]"
            style={{ left: node.x, top: node.y }}
            initial={{ opacity: 0.08 }}
            animate={{ opacity: [0.08, 0.15, 0.08] }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
              delay: node.delay,
            }}
          />
        ))}
        {constellationNodes.slice(0, 12).map((node, index) => (
          <motion.div
            key={`mobile-constellation-${index}`}
            className="absolute h-1 w-1 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.4)] md:hidden"
            style={{ left: node.x, top: node.y }}
            initial={{ opacity: 0.05 }}
            animate={{ opacity: [0.05, 0.12, 0.05] }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
              delay: node.delay,
            }}
          />
        ))}
      </motion.div>

      {iconNodes.map((iconNode, index) => {
        const Icon = iconNode.icon
        return (
          <motion.div
            key={`icon-${index}`}
            className={`absolute ${iconNode.color} hidden md:block`}
            style={{ left: iconNode.x, top: iconNode.y }}
            initial={{ y: 0, rotate: 0, opacity: 0.35 }}
            animate={{
              y: [-6, 6, -6],
              rotate: [-2, 2, -2],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 10 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
              delay: iconNode.delay,
            }}
          >
            <Icon className="h-3 w-3" />
          </motion.div>
        )
      })}

      {iconNodes.slice(0, 4).map((iconNode, index) => {
        const Icon = iconNode.icon
        return (
          <motion.div
            key={`mobile-icon-${index}`}
            className={`absolute ${iconNode.color} md:hidden`}
            style={{ left: iconNode.x, top: iconNode.y }}
            initial={{ y: 0, opacity: 0.3 }}
            animate={{
              y: [-3, 3, -3],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
              delay: iconNode.delay,
            }}
          >
            <Icon className="h-2.5 w-2.5" />
          </motion.div>
        )
      })}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-40 bg-gradient-to-b from-transparent via-[#C13FFF14] to-[#000000cc]" />

      <div className="absolute left-0 right-0 top-0 z-20">
        <Header />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 max-w-md space-y-6 px-4 md:max-w-2xl md:space-y-8 lg:max-w-4xl"
      >
        <h1 className="bg-gradient-to-r from-[#B8860B] via-[#C13FFF] to-white bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-7xl">
          Stream the Impossible
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground/90 md:text-xl"
        >
          Watch curated AI-created movies, TV shows, and animations built by imagination and powered
          by intelligence.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
        className="relative z-10 mt-8 md:mt-10"
      >
        <Link href="/(auth)/sign-in">
          <Button
            className="mx-auto flex max-w-[240px] items-center gap-2 rounded-full bg-gradient-to-r from-[#B8860B] via-[#C13FFF] to-[#B8860B] px-8 py-4 text-sm font-medium uppercase text-white shadow-[0_0_12px_#C13FFF80] transition-transform duration-300 ease-in-out hover:scale-105"
            aria-label="Start Watching - Sign in to Hybrai"
          >
            <Play className="h-4 w-4 fill-white" />
            Start Watching
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
