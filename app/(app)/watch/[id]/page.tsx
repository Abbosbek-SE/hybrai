import { AnimatedSection } from '@/components/sections/AnimatedSection'
import { CinematicHeroVideo } from '@/components/sections/CinematicHeroVideo'
import { VideoShowcaseSection } from '@/components/sections/VideoShowcaseSection'

interface WatchPageProps {
  params: {
    id: string
  }
}

export default function WatchPage({ params }: WatchPageProps) {
  const formattedTitle = decodeURIComponent(params.id)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())

  return (
    <div className="flex flex-col gap-12 py-16 md:gap-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] space-y-4 px-4 text-center md:px-6 md:text-left lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Now Playing: {formattedTitle}
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-lg">
          Dive into Hybrai&apos;s cinematic experience with adaptive motion, immersive audio, and
          premium AI-generated visuals curated for storytelling.
        </p>
      </div>
      <AnimatedSection className="mx-auto w-full max-w-[1600px] px-4 md:px-8 lg:px-12">
        <CinematicHeroVideo />
      </AnimatedSection>
      <AnimatedSection className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <VideoShowcaseSection />
      </AnimatedSection>
    </div>
  )
}
