import { AnimatedSection } from "@/components/sections/AnimatedSection"
import { CtaSection } from "@/components/sections/CtaSection"
import { PulseSection } from "@/components/sections/PulseSection"

export default function StudiosPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 py-16 md:py-24 lg:py-32">
      <AnimatedSection className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PulseSection sectionId="studios-pulse-section" />
      </AnimatedSection>
      <AnimatedSection className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <CtaSection />
      </AnimatedSection>
    </div>
  )
}
