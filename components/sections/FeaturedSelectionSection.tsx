"use client"

import type React from "react"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"

interface VideoCard {
  id: string
  title: string
  description: string
  videoUrl: string
  thumbnail?: string
}

const videoData: VideoCard[] = [
  {
    id: "1",
    title: "Vikings Go To War",
    description: "Epic cinematic battle scenes with stunning visual effects",
    videoUrl:
      "https://openaiassets.blob.core.windows.net/$web/nf2/blog-final2/cinematic/cinematic/20250911_2156_Vikings%20Go%20To%20War%20%E2%80%94%20North%20Sea%20Launch%20(10.0s,%20Winter%20cool%20daylight%20_%20early%20medieval)__Clinker-built%20o_simple_compose_01k4y4g0gbe15r9b2j32bhdyme%20(2).mp4",
  },
  {
    id: "2",
    title: "Ghibli Dog",
    description: "Heartwarming animated adventure in classic Ghibli style",
    videoUrl: "https://openaiassets.blob.core.windows.net/$web/nf2/blog-final2/cinematic/cinematic/ghibli_dog.mp4",
  },
  {
    id: "3",
    title: "Anime Awakening",
    description: "High-energy anime action with breathtaking animation",
    videoUrl:
      "https://openaiassets.blob.core.windows.net/$web/nf2/blog-final2/cinematic/cinematic/anime_awakening_v2%20(1).mp4",
  },
  {
    id: "4",
    title: "OpenAI Academia",
    description: "Futuristic educational series exploring AI technology",
    videoUrl:
      "https://openaiassets.blob.core.windows.net/$web/nf2/blog-final2/cinematic/cinematic/openai_academia4.mp4",
  },
  {
    id: "5",
    title: "New Video",
    description: "Cutting-edge AI-generated cinematic experience",
    videoUrl:
      "https://openaiassets.blob.core.windows.net/$web/nf2/blog-final2/20250929_0337_New%20Video_simple_compose_01k6agr8ctey29mze208t29w38%20(1).mp4",
  },
  {
    id: "6",
    title: "Golden Astronaut",
    description: "Stunning visual storytelling powered by Sora AI",
    videoUrl:
      "https://openaiassets.blob.core.windows.net/$web/nf2/blog-final/golden/6eda9a57-5d6d-4890-90ee-61f89e999719/20250922_1557_an%20astronaut%20golden%20retriever%20named%20_Sora_%20levitates%20around%20an%20intergalactic%20pup-themed%20space%20statio_simple_compose_01k5sta9hmegr9axrpbty5sxva%20(1).mp4",
  },
]

const VideoCard = ({ video, isHovered, onHover, onLeave }: any) => {
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
        console.log("[v0] Video play failed:", error)
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
        console.log("[v0] Autoplay prevented or video failed to load:", error)
        setIsPlaying(false)
      }
    }
  }

  return (
    <motion.div
      className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px] snap-center group cursor-pointer relative will-change-transform hover:z-50"
      style={{ transformOrigin: "center center" }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{
        scale: 1.08,
        y: -4,
        zIndex: 50,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className={`relative overflow-hidden rounded-3xl bg-[#0a0a0a] shadow-cinema-lg transition-all duration-500 ease-out ${
          isHovered ? "ring-2 ring-primary shadow-[0_0_30px_rgba(184,134,11,0.4)]" : ""
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
            className="w-full h-full object-cover"
            onCanPlay={() => safePlay()}
            onError={(e) => {
              console.log("[v0] Video loading error:", e)
              setHasError(true)
              setIsPlaying(false)
            }}
          />

          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80">
              <p className="text-muted-foreground text-sm">Video unavailable</p>
            </div>
          )}

          {/* Gradient Overlay - Shows on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Content Overlay - Shows on hover */}
          <div
            className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-foreground text-lg font-semibold mb-2">{video.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{video.description}</p>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePlayPause}
                className="w-10 h-10 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-colors duration-200"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-background fill-background" />
                ) : (
                  <Play className="w-5 h-5 text-background fill-background" />
                )}
              </button>
              <button
                onClick={handleMuteToggle}
                className="w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center transition-colors duration-200"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-foreground" />
                ) : (
                  <Volume2 className="w-5 h-5 text-foreground" />
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
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  return (
    <section
      id="featured-selection-section"
      className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent"
    >
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        {/* Ambient Glow */}
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-gradient-to-br from-primary/5 to-transparent blur-[130px] z-0" />

        {/* Section Header */}
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="text-section-title text-foreground w-full max-w-[655px] text-center">Featured Selection</h2>
            <p className="text-body text-muted-foreground w-full max-w-[600px] text-center leading-relaxed">
              Experience the most popular AI-generated films and series.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full z-10 overflow-visible">
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-cinema-md transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-cinema-md transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Gradient Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrollable Video Cards */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto overflow-y-visible gap-6 px-4 md:px-8 lg:px-12 py-8 snap-x snap-mandatory scroll-smooth hide-scrollbar"
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
