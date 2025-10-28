'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-visible px-5 pb-16 pt-20 md:pb-24 md:pt-32 lg:pb-32 lg:pt-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0a0f] to-[#0b0a0f]">
        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#C13FFF]/20 via-[#FF6B35]/10 to-transparent blur-3xl" />
      </div>

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C13FFF]/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 text-center md:gap-10"
      >
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl"
        >
          Are you a talented AI filmmaker with unique stories to tell?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="max-w-xl text-base leading-relaxed text-[#b3b3b3] md:text-lg"
        >
          Let your work inspire millions — and be rewarded fairly for your creativity.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <Link href="/(app)/studios">
            <Button
              className="group rounded-full bg-gradient-to-r from-[#C13FFF] via-[#FF1CF7] to-[#C13FFF] px-8 py-3 text-base font-semibold text-white shadow-[0_0_20px_#C13FFF80] transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_0_30px_#C13FFF99] md:px-10 md:py-4 md:text-lg"
              size="lg"
            >
              Let&apos;s collaborate
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
