import { AnimatedSection } from '@/components/sections/AnimatedSection'
import { CinematicStatsSection } from '@/components/sections/CinematicStatsSection'
import { FeaturedSelectionSection } from '@/components/sections/FeaturedSelectionSection'
import { VideoShowcaseSection } from '@/components/sections/VideoShowcaseSection'

export default function BrowsePage() {
  return (
    <div className="relative z-10 flex flex-col gap-12 py-16 md:gap-16 md:py-24 lg:py-32">
      <AnimatedSection className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8">
        <FeaturedSelectionSection />
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8">
        <VideoShowcaseSection />
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8">
        <CinematicStatsSection />
      </AnimatedSection>
    </div>
  )
}
