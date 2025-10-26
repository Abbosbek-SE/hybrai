import { AnimatedSection } from "@/components/sections/AnimatedSection"
import { CinematicHeroVideo } from "@/components/sections/CinematicHeroVideo"
import { VideoShowcaseSection } from "@/components/sections/VideoShowcaseSection"

interface WatchPageProps {
  params: {
    id: string
  }
}

export default function WatchPage({ params }: WatchPageProps) {
  const formattedTitle = decodeURIComponent(params.id)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())

  return (
    <div className="flex flex-col gap-12 md:gap-16 py-16 md:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 space-y-4 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Now Playing: {formattedTitle}
        </h1>
        <p className="text-muted-foreground max-w-2xl md:text-lg">
          Dive into Hybrai&apos;s cinematic experience with adaptive motion, immersive audio, and premium AI-generated
          visuals curated for storytelling.
        </p>
      </div>
      <AnimatedSection className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 w-full">
        <CinematicHeroVideo />
      </AnimatedSection>
      <AnimatedSection className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 w-full">
        <VideoShowcaseSection />
      </AnimatedSection>
    </div>
  )
}
