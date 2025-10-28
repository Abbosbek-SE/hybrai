'use client'

import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX, Play, Pause } from 'lucide-react'
import { motion } from 'framer-motion'

export function CinematicHeroVideo() {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, user interaction required
        setIsPlaying(false)
      })
    }
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoClick = () => {
    togglePlay()
  }

  const handleLoadedData = () => {
    setIsLoaded(true)
  }

  return (
    <section
      id="cinematic-hero-video"
      className="relative h-[70vh] w-full overflow-hidden bg-black md:h-[90vh] lg:h-screen"
      aria-label="Hero cinematic video"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Blurred Poster Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-background via-background/80 to-primary/10 backdrop-blur-xl" />
      )}

      {/* Video Background */}
      <motion.video
        ref={videoRef}
        src="https://openaiassets.blob.core.windows.net/$web/nf2/blog-final/cinematic/6eda9a57-5d6d-4890-90ee-61f89e999719/dragon2.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full cursor-pointer object-cover"
        onClick={handleVideoClick}
        onLoadedData={handleLoadedData}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-0 z-10 h-[120px] w-[60%] -translate-x-1/2 opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(193, 63, 255, 0.25) 0%, transparent 70%)',
        }}
      />

      <div className="pointer-events-none absolute left-0 top-0 z-20 h-[150px] w-full bg-gradient-to-b from-[#C13FFF]/30 via-[#B8860B]/5 to-transparent" />

      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />

      <motion.div
        className="absolute right-4 top-4 z-30 flex items-center gap-3 transition-opacity duration-300 md:right-6 md:top-6 md:opacity-0 md:group-hover:opacity-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
        style={{ opacity: 1 }}
      >
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          className="rounded-full bg-black/40 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:ring-2 hover:ring-primary/50 focus-visible:ring-2 focus-visible:ring-primary md:p-3"
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-white md:h-6 md:w-6" />
          ) : (
            <Volume2 className="h-5 w-5 text-primary md:h-6 md:w-6" />
          )}
        </button>
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="rounded-full bg-black/40 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:ring-2 hover:ring-primary/50 focus-visible:ring-2 focus-visible:ring-primary md:p-3"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-white md:h-6 md:w-6" />
          ) : (
            <Play className="h-5 w-5 text-primary md:h-6 md:w-6" />
          )}
        </button>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-30 max-w-2xl -translate-x-1/2 px-4 text-center md:left-8 md:translate-x-0 md:text-left lg:bottom-12 lg:left-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-300 drop-shadow-lg md:text-sm">
          Now Playing
        </p>
        <h2
          className="text-2xl font-semibold leading-tight text-white drop-shadow-2xl md:text-4xl lg:text-5xl"
          style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8)' }}
        >
          Dragon <span className="text-primary">(AI Generated)</span>
        </h2>
        <p className="mt-2 hidden text-sm text-gray-400 drop-shadow-lg md:mt-3 md:block md:text-base">
          Experience the future of AI-powered entertainment
        </p>
      </motion.div>

      {/* Cinematic Edge Glow */}
      <div className="shadow-cinema-xl pointer-events-none absolute inset-0" />
    </section>
  )
}
