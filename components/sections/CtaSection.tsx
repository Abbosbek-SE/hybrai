"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full pt-20 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32 px-5 relative flex flex-col justify-center items-center overflow-visible">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0a0f] to-[#0b0a0f]">
        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#C13FFF]/20 via-[#FF6B35]/10 to-transparent blur-3xl" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C13FFF]/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col justify-center items-center gap-8 md:gap-10 max-w-4xl mx-auto text-center"
      >
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white text-3xl md:text-5xl font-bold leading-tight tracking-tight max-w-3xl"
        >
          Are you a talented AI filmmaker with unique stories to tell?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-[#b3b3b3] text-base md:text-lg leading-relaxed max-w-xl"
        >
          Let your work inspire millions — and be rewarded fairly for your creativity.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Link href="/(app)/studios">
            <Button
              className="group px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-[#C13FFF] via-[#FF1CF7] to-[#C13FFF] text-white text-base md:text-lg font-semibold rounded-full shadow-[0_0_20px_#C13FFF80] hover:shadow-[0_0_30px_#C13FFF99] hover:scale-105 transition-all duration-500 ease-out"
              size="lg"
            >
              Let's collaborate
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
