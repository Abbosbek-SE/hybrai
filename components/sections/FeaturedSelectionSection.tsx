'use client'

import type React from 'react'

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { motion } from 'framer-motion'

interface VideoCard {
  id: string
  title: string
  description: string
  videoUrl: string
  thumbnail?: string
}

const videoData: VideoCard[] = [
  {
    id: '1',
    title: 'Vikings Go To War',
    description: 'Epic cinematic battle scenes with stunning visual effects',
    videoUrl:
      'https://openaiassets.blob.core.windows.net/$web/nf2/blog-final2/cinematic/cinematic/20250911_2156_Vikings%20Go%20To%20War%20%E2%80%94%20North%20Sea%20Launch%20(10.0s,%20Winter%20cool%20daylight%20_%20early%20medieval)__Clinker-built%20o_simple_compose_01k4y4g0gbe15r9b2j32bhdyme%20(2).mp4',
  },
  {
    id: '2',
    title: 'Ghibli Dog',
    description: 'Heartwarming animated adventure in classic Ghibli style',
    videoUrl:
      'https://openaiassets.blob.core.windows.net/$web/nf2/blog-final2/cinematic/cinematic/ghibli_dog.mp4',
  },
  {
    id: '3',
    title: 'Anime Awakening',
    description: 'High-energy anime action with breathtaking animation',
    videoUrl:
      'https://openaiassets.blob.core.windows.net/$web/nf2/blog-final2/cinematic/cinematic/anime_awakening_v2%20(1).mp4',
  },
  {
    id: '4',
    title: 'OpenAI Academia',
    description: 'Futuristic educational series exploring AI technology',
    videoUrl:
      'https://openaiassets.blob.core.windows.net/$web/nf2/blog-final2/cinematic/cinematic/openai_academia4.mp4',
  },
  {
    id: '5',
    title: 'New Video',
    description: 'Cutting-edge AI-generated cinematic experience',
    videoUrl:
      'https://openaiassets.blob.core.windows.net/$web/nf2/blog-final2/20250929_0337_New%20Video_simple_compose_01k6agr8ctey29mze208t29w38%20(1).mp4',
  },
  {
    id: '6',
    title: 'Golden Astronaut',
    description: 'Stunning visual storytelling powered by Sora AI',
    videoUrl:
      'https://openaiassets.blob.core.windows.net/$web/nf2/blog-final/golden/6eda9a57-5d6d-4890-90ee-61f89e999719/20250922_1557_an%20astronaut%20golden%20retriever%20named%20_Sora_%20levitates%20around%20an%20intergalactic%20pup-themed%20space%20statio_simple_compose_01k5sta9hmegr9axrpbty5sxva%20(1).mp4',
  },
]

interface VideoCardProps {
  video: VideoCard
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

const VideoCard = ({ video, isHovered, onHover, onLeave }: VideoCardProps) => {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = async (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause()
          setIsPlaying(false)
        } else {
          await videoRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        console.log('[v0] Video play failed:', error)
        setIsPlaying(false)
      }
    }
  }

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
  }

  const safePlay = async () => {
    if (videoRef.current && !hasError) {
      try {
        await videoRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.log('[v0] Autoplay prevented or video failed to load:', error)
        setIsPlaying(false)
      }
    }
  }

  return (
    <motion.div
      className="group relative w-[280px] flex-shrink-0 cursor-pointer snap-center will-change-transform hover:z-50 md:w-[320px] lg:w-[360px]"
      style={{ transformOrigin: 'center center' }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{
        scale: 1.08,
        y: -4,
        zIndex: 50,
        transition: { duration: 0.5, ease: 'easeOut' },
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div
        className={`shadow-cinema-lg relative overflow-hidden rounded-3xl bg-[#0a0a0a] transition-all duration-500 ease-out ${
          isHovered ? 'shadow-[0_0_30px_rgba(184,134,11,0.4)] ring-2 ring-primary' : ''
        }`}
      >
        {/* Video */}
        <div className="relative aspect-[9/16] overflow-hidden">
          <video
            ref={videoRef}
            src={video.videoUrl}
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            onCanPlay={() => safePlay()}
            onError={(e) => {
              console.log('[v0] Video loading error:', e)
              setHasError(true)
              setIsPlaying(false)
            }}
          />

          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80">
              <p className="text-sm text-muted-foreground">Video unavailable</p>
            </div>
          )}

          {/* Gradient Overlay - Shows on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Content Overlay - Shows on hover */}
          <div
            className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h3 className="mb-2 text-lg font-semibold text-foreground">{video.title}</h3>
            <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{video.description}</p>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePlayPause}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 transition-colors duration-200 hover:bg-primary"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 fill-background text-background" />
                ) : (
                  <Play className="h-5 w-5 fill-background text-background" />
                )}
              </button>
              <button
                onClick={handleMuteToggle}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 transition-colors duration-200 hover:bg-background"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5 text-foreground" />
                ) : (
                  <Volume2 className="h-5 w-5 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function FeaturedSelectionSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="featured-selection-section"
      className="flex w-full flex-col items-center justify-center overflow-visible bg-transparent px-5"
    >
      <div className="relative flex w-full flex-col items-start justify-start gap-6 py-8 md:py-16">
        {/* Ambient Glow */}
        <div className="absolute left-[80px] top-[614px] z-0 h-[938px] w-[547px] origin-top-left rotate-[-33.39deg] bg-gradient-to-br from-primary/5 to-transparent blur-[130px]" />

        {/* Section Header */}
        <div className="z-10 flex flex-col items-center justify-center gap-2 self-stretch py-8 md:py-14">
          <div className="flex flex-col items-center justify-start gap-4">
            <h2 className="text-section-title w-full max-w-[655px] text-center text-foreground">
              Featured Selection
            </h2>
            <p className="text-body w-full max-w-[600px] text-center leading-relaxed text-muted-foreground">
              Experience the most popular AI-generated films and series.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative z-10 w-full overflow-visible">
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="hover:shadow-cinema-md absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>

          <button
            onClick={scrollRight}
            className="hover:shadow-cinema-md absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>

          {/* Gradient Fade Overlays */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24" />

          {/* Scrollable Video Cards */}
          <div
            ref={scrollContainerRef}
            className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-visible scroll-smooth px-4 py-8 md:px-8 lg:px-12"
          >
            {videoData.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                isHovered={hoveredId === video.id}
                onHover={() => setHoveredId(video.id)}
                onLeave={() => setHoveredId(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
