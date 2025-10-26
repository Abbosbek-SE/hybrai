"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"
import { motion } from "framer-motion"

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
      className="relative w-full h-[70vh] md:h-[90vh] lg:h-screen overflow-hidden bg-black"
      aria-label="Hero cinematic video"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Blurred Poster Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-primary/10 animate-pulse backdrop-blur-xl" />
      )}

      {/* Video Background */}
      <motion.video
        ref={videoRef}
        src="https://openaiassets.blob.core.windows.net/$web/nf2/blog-final/cinematic/6eda9a57-5d6d-4890-90ee-61f89e999719/dragon2.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        onClick={handleVideoClick}
        onLoadedData={handleLoadedData}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[120px] blur-3xl opacity-60 pointer-events-none z-10"
        style={{
          background: "radial-gradient(circle, rgba(193, 63, 255, 0.25) 0%, transparent 70%)",
        }}
      />

      <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-[#C13FFF]/30 via-[#B8860B]/5 to-transparent pointer-events-none z-20" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 pointer-events-none" />

      <motion.div
        className="absolute top-4 right-4 md:top-6 md:right-6 z-30 flex gap-3 items-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
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
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="p-2 md:p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all duration-300 hover:ring-2 hover:ring-primary/50 focus-visible:ring-2 focus-visible:ring-primary"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          )}
        </button>
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="p-2 md:p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all duration-300 hover:ring-2 hover:ring-primary/50 focus-visible:ring-2 focus-visible:ring-primary"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 md:w-6 md:h-6 text-white" />
          ) : (
            <Play className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          )}
        </button>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 lg:bottom-12 lg:left-12 z-30 text-center md:text-left max-w-2xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <p className="text-xs md:text-sm text-gray-300 mb-2 font-medium tracking-wide uppercase drop-shadow-lg">
          Now Playing
        </p>
        <h2
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white drop-shadow-2xl leading-tight"
          style={{ textShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
        >
          Dragon <span className="text-primary">(AI Generated)</span>
        </h2>
        <p className="text-sm md:text-base text-gray-400 mt-2 md:mt-3 drop-shadow-lg hidden md:block">
          Experience the future of AI-powered entertainment
        </p>
      </motion.div>

      {/* Cinematic Edge Glow */}
      <div className="absolute inset-0 shadow-cinema-xl pointer-events-none" />
    </section>
  )
}
