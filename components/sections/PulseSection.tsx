'use client'

import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sparkles, Zap, Users, Quote, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'

type ContentType = 'social' | 'tech' | 'news' | 'creator' | 'quote' | 'quickpulse'

interface PulseCard {
  id: string
  type: ContentType
  title: string
  description?: string
  source?: string
  author?: string
  handle?: string
  avatar?: string
  image?: string
  quote?: string
  tag?: string
  featured?: boolean
  link?: string
}

const pulseContent: PulseCard[] = [
  {
    id: '1',
    type: 'social',
    title:
      'Just wrapped my first AI-generated short film using Sora 3 — the future of filmmaking is here 🎬✨',
    author: 'Alex Rivera',
    handle: '@alexrivera_ai',
    avatar: '/images/male-filmmaker-portrait.png',
    tag: 'TRENDING',
    description: 'Creators are using OpenAI’s Sora to produce short films with stunning realism.',
    link: 'https://www.fastcompany.com/91164590/this-gorgeous-new-film-made-with-openais-sora-shows-how-ai-can-go-beyond-cultural-appropriation',
    source: 'Fast Company',
  },
  {
    id: '2',
    type: 'tech',
    title: 'Runway Gen-3 Alpha introduces 8K compositing with real-time preview',
    description:
      'A major leap in AI video generation — bringing cinematic realism and frame control.',
    tag: 'BREAKTHROUGH',
    link: 'https://runwayml.com/research/introducing-gen-3-alpha',
    source: 'Runway ML',
  },
  {
    id: '3',
    type: 'quickpulse',
    title: '⚡ Pika Labs teases real-time AI VFX compositing',
    description: 'Live demo reveals next-gen AI-powered video editing from Pika Labs.',
    tag: 'LIVE',
    link: 'https://x.com/pika_labs/status/1841241371946131742',
    source: 'Pika Labs on X',
  },
  {
    id: '4',
    type: 'news',
    title: 'AI Film Festival 2025 Winners Announced',
    description: 'Celebrating the best in AI-generated cinema from around the world.',
    source: 'The Hollywood Reporter',
    image: '/images/film-festival-awards-ceremony.jpg',
    featured: true,
    link: 'https://aifilmfest.org/winners',
  },
  {
    id: '5',
    type: 'creator',
    title: "Behind the Scenes: Creating 'Digital Dreams'",
    author: 'Sarah Chen',
    handle: '@sarahchen_ai',
    avatar: '/images/female-filmmaker-portrait.jpg',
    description:
      'How AI tools like Runway and Sora empowered me to create a 10-minute short in 48 hours.',
    link: 'https://www.linkedin.com/pulse/digital-auteur-how-ai-rewriting-hollywoods-rules-game-uzwyshyn-ph-d--wg3jc',
    source: 'LinkedIn',
  },
  {
    id: '6',
    type: 'quote',
    title: '',
    quote:
      "AI isn't replacing creativity — it's amplifying it. We're entering a golden age of storytelling.",
    author: 'Marcus Rodriguez',
    handle: 'Director, Synthetic Studios',
    link: 'https://www.linkedin.com/pulse/ai-wont-replace-us-heres-why-michael-rodriguez-0i50c',
    source: 'LinkedIn',
  },
]

const PulseCardComponent = ({ card, index }: { card: PulseCard; index: number }) => {
  const getAccentColor = (type: ContentType) => {
    switch (type) {
      case 'social':
        return 'from-[#00D9FF]/20 to-[#00D9FF]/5'
      case 'tech':
        return 'from-[#C13FFF]/20 to-[#C13FFF]/5'
      case 'quickpulse':
        return 'from-[#00D9FF]/20 via-[#C13FFF]/15 to-[#C13FFF]/5'
      case 'news':
        return 'from-[#B8860B]/20 to-[#B8860B]/5'
      case 'creator':
        return 'from-[#00D9FF]/20 to-[#00D9FF]/5'
      case 'quote':
        return 'from-[#C13FFF]/10 to-transparent'
      default:
        return 'from-card/50 to-card/20'
    }
  }

  const getIcon = (type: ContentType) => {
    switch (type) {
      case 'social':
        return <MessageCircle className="h-4 w-4" />
      case 'tech':
      case 'quickpulse':
        return <Zap className="h-4 w-4" />
      case 'news':
        return <Sparkles className="h-4 w-4" />
      case 'creator':
        return <Users className="h-4 w-4" />
      case 'quote':
        return <Quote className="h-4 w-4" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`border-white/8 group relative cursor-pointer overflow-hidden rounded-xl border transition-all duration-200 ease-out will-change-transform hover:rotate-[0.5deg] hover:scale-[1.02] ${
        card.featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {card.link && (
        <a
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
          aria-label={`Open ${card.title || card.quote || 'Pulse Item'}`}
        />
      )}

      <div
        className={`absolute inset-0 bg-gradient-to-br ${getAccentColor(card.type)} pointer-events-none`}
      />

      <div className={`relative z-10 p-6 ${card.featured ? 'md:p-8' : ''} flex h-full flex-col`}>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground/60">
            {getIcon(card.type)}
            <span className="text-xs uppercase tracking-wider">
              {card.type === 'quickpulse' ? 'quick pulse' : card.type}
            </span>
          </div>
          {card.tag && (
            <span className="rounded-full bg-primary/20 px-2 py-1 text-xs uppercase tracking-wider text-primary">
              {card.tag}
            </span>
          )}
        </div>

        {card.image && (
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg md:h-64">
            <Image
              src={card.image || '/images/placeholder.svg'}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 85vw, (max-width: 1200px) 33vw, 400px"
              priority={card.featured}
              loading={card.featured ? undefined : 'lazy'}
            />
          </div>
        )}

        <h3
          className={`mb-2 font-bold ${
            card.featured
              ? 'text-2xl md:text-3xl'
              : card.type === 'quickpulse'
                ? 'text-lg'
                : 'text-lg md:text-xl'
          } ${card.type === 'quote' ? 'text-xl italic' : ''}`}
        >
          {card.quote || card.title}
        </h3>

        {card.description && (
          <p className="mb-4 text-sm text-muted-foreground/80 md:text-base">{card.description}</p>
        )}

        <div className="mt-auto flex items-center gap-3">
          {card.avatar && (
            <Image
              src={card.avatar || '/placeholder.svg'}
              alt={card.author || ''}
              width={40}
              height={40}
              className="rounded-full"
              loading="lazy"
            />
          )}
          <div className="flex flex-col">
            {card.author && <span className="text-sm font-medium">{card.author}</span>}
            {card.handle && <span className="text-xs text-muted-foreground">{card.handle}</span>}
            {card.source && (
              <span className="text-xs text-muted-foreground">via {card.source}</span>
            )}
          </div>
        </div>

        {card.link && (
          <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="text-xs uppercase tracking-wider text-primary">
              {card.type === 'creator'
                ? 'View Profile →'
                : card.type === 'social'
                  ? 'View Post →'
                  : 'Read More →'}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function PulseSection({ sectionId = 'onepercent-pulse-section' }: { sectionId?: string }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) return

    scrollTimeoutRef.current = setTimeout(() => {
      const container = scrollContainerRef.current
      if (!container) return

      requestAnimationFrame(() => {
        const scrollCenter = container.scrollLeft + container.offsetWidth / 2
        const distances = slideRefs.current.map((slide) =>
          Math.abs((slide?.offsetLeft ?? 0) + (slide?.offsetWidth ?? 0) / 2 - scrollCenter)
        )
        const nearestIndex = distances.indexOf(Math.min(...distances))
        setCurrentSlide(nearestIndex)
        scrollTimeoutRef.current = null
      })
    }, 100)
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      container.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [handleScroll])

  const scrollToSlide = useCallback((index: number) => {
    const container = scrollContainerRef.current
    const slide = slideRefs.current[index]
    if (container && slide) {
      container.scrollTo({
        left: slide.offsetLeft - container.offsetWidth / 2 + slide.offsetWidth / 2,
        behavior: 'smooth',
      })
      setCurrentSlide(index)
    }
  }, [])

  const nextSlide = useCallback(
    () => scrollToSlide(Math.min(currentSlide + 1, pulseContent.length - 1)),
    [currentSlide, scrollToSlide]
  )
  const prevSlide = useCallback(
    () => scrollToSlide(Math.max(currentSlide - 1, 0)),
    [currentSlide, scrollToSlide]
  )

  const desktopCards = useMemo(
    () =>
      pulseContent.map((card, index) => (
        <PulseCardComponent key={card.id} card={card} index={index} />
      )),
    []
  )

  return (
    <section
      id={sectionId}
      className="relative w-full overflow-hidden px-5 py-12 md:py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050308] via-[#0A0015] to-background" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
                           repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-[#B8860B] via-[#C13FFF] to-white bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Hybrai Pulse
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground/80 md:text-xl">
            Where imagination meets innovation — the latest in AI film, video-gen tools, and creator
            updates.
          </p>
        </motion.div>

        {/* Desktop */}
        <div className="hidden auto-rows-[minmax(200px,auto)] gap-6 md:grid md:grid-cols-3">
          {desktopCards}
        </div>

        {/* Mobile */}
        <div className="relative md:hidden">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-background/80 p-2 backdrop-blur-sm transition-all duration-200 will-change-transform hover:scale-110 hover:bg-background/90 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === pulseContent.length - 1}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-background/80 p-2 backdrop-blur-sm transition-all duration-200 will-change-transform hover:scale-110 hover:bg-background/90 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollContainerRef}
            className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-8 pb-4"
          >
            {pulseContent.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => {
                  slideRefs.current[index] = el
                }}
                className="w-[85vw] max-w-[400px] flex-shrink-0 snap-center"
              >
                <PulseCardComponent card={card} index={index} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {pulseContent.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`rounded-full transition-all duration-300 will-change-transform ${
                  currentSlide === i
                    ? 'h-2 w-8 scale-110 bg-primary'
                    : 'h-2 w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={currentSlide === i ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
