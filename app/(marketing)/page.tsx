"use client"

import dynamic from "next/dynamic"

import { AnimatedSection } from "@/components/sections/AnimatedSection"
import { CinematicHeroVideo } from "@/components/sections/CinematicHeroVideo"
import { CinematicStatsSection } from "@/components/sections/CinematicStatsSection"
import { CtaSection } from "@/components/sections/CtaSection"
import { FeaturedSelectionSection } from "@/components/sections/FeaturedSelectionSection"
import { HeroSection } from "@/components/sections/HeroSection"
import { SocialProofSection } from "@/components/sections/SocialProofSection"
import { VideoShowcaseSection } from "@/components/sections/VideoShowcaseSection"

const LazyPulseSection = dynamic(
  () => import("@/components/sections/PulseSection").then((mod) => ({ default: mod.PulseSection })),
  { loading: () => <div className="h-96" /> },
)

const LazyFaqSection = dynamic(
  () => import("@/components/sections/FaqSection").then((mod) => ({ default: mod.FaqSection })),
  {
    loading: () => <div className="h-96" />,
  },
)

const LazyFooter = dynamic(
  () => import("@/components/layout/Footer").then((mod) => ({ default: mod.Footer })),
  { loading: () => <div className="h-64" /> },
)

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="relative">
          <HeroSection />
          {/* Cinematic Hero Video Wrapper */}
          <div className="relative z-30 w-full flex justify-center mt-[-80px] md:mt-[-100px] lg:mt-[-120px] px-4">
            <AnimatedSection className="w-full">
              <CinematicHeroVideo />
            </AnimatedSection>
          </div>
        </main>
        <AnimatedSection
          className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24 mt-16 md:mt-20 lg:mt-24"
          delay={0.1}
        >
          <SocialProofSection />
        </AnimatedSection>
        <AnimatedSection
          id="features-section"
          className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24"
          delay={0.2}
        >
          <FeaturedSelectionSection />
        </AnimatedSection>
        <AnimatedSection
          className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24"
          delay={0.2}
        >
          <CinematicStatsSection />
        </AnimatedSection>
        <AnimatedSection
          id="video-showcase-section"
          className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24"
          delay={0.2}
        >
          <VideoShowcaseSection />
        </AnimatedSection>
        <AnimatedSection
          id="testimonials-section"
          className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24"
          delay={0.2}
        >
          <LazyPulseSection sectionId="onepercent-pulse-section" />
        </AnimatedSection>
        <AnimatedSection
          id="faq-section"
          className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24"
          delay={0.2}
        >
          <LazyFaqSection />
        </AnimatedSection>
        <AnimatedSection
          className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24"
          delay={0.2}
        >
          <CtaSection />
        </AnimatedSection>
        <AnimatedSection
          className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24"
          delay={0.2}
        >
          <LazyFooter />
        </AnimatedSection>
      </div>
    </div>
  )
}
