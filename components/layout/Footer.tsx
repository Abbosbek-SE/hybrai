'use client'

import { Twitter, Linkedin, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-t from-[#0a0014] via-[#0c001a] to-transparent pb-8 pt-16 shadow-[0_0_120px_#C13FFF33]">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B8860B] to-transparent opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-8 px-5 py-10"
      >
        {/* Brand and Tagline */}
        <div className="relative flex flex-col items-center gap-4 text-center">
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              ease: 'easeInOut',
              repeat: Number.POSITIVE_INFINITY,
            }}
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(193,63,255,0.12),_transparent_70%)]"
            aria-hidden="true"
          />
          <h2 className="bg-gradient-to-r from-[#B8860B] via-[#C13FFF] to-white bg-clip-text text-3xl font-bold tracking-wide text-foreground text-transparent md:text-4xl">
            Hybrai
          </h2>
          <p className="max-w-md text-sm font-medium leading-relaxed text-muted-foreground md:text-base">
            AI-Generated Entertainment, Reimagined.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6">
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            whileHover={{ scale: 1.1 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 transition-all duration-500 ease-out hover:bg-foreground/10 hover:shadow-[0_0_15px_#C13FFF99]"
          >
            <Twitter className="h-5 w-5 text-muted-foreground transition-colors duration-500 hover:text-[#C13FFF]" />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            whileHover={{ scale: 1.1 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 transition-all duration-500 ease-out hover:bg-foreground/10 hover:shadow-[0_0_15px_#C13FFF99]"
          >
            <Instagram className="h-5 w-5 text-muted-foreground transition-colors duration-500 hover:text-[#C13FFF]" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 transition-all duration-500 ease-out hover:bg-foreground/10 hover:shadow-[0_0_15px_#B8860B99]"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors duration-500 hover:text-[#B8860B]" />
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs font-normal leading-relaxed tracking-wide text-muted-foreground/60 md:text-sm">
          © 2025 Hybrai. All rights reserved.
        </div>

        {/* Micro Text */}
        <div className="text-center text-[10px] font-light italic tracking-wider text-muted-foreground/40 md:text-xs">
          Created with AI. Crafted by imagination.
        </div>
      </motion.div>
    </footer>
  )
}
