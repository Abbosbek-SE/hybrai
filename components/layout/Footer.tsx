"use client"

import { Twitter, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-t from-[#0a0014] via-[#0c001a] to-transparent shadow-[0_0_120px_#C13FFF33] pt-16 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B] to-transparent opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1320px] mx-auto px-5 flex flex-col items-center gap-8 py-10"
      >
        {/* Brand and Tagline */}
        <div className="flex flex-col items-center gap-4 text-center relative">
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
            }}
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(193,63,255,0.12),_transparent_70%)]"
            aria-hidden="true"
          />
          <h2 className="text-foreground text-3xl md:text-4xl font-bold tracking-wide bg-gradient-to-r from-[#B8860B] via-[#C13FFF] to-white bg-clip-text text-transparent">
            Hybrai
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed max-w-md">
            AI-Generated Entertainment, Reimagined.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6">
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 hover:shadow-[0_0_15px_#C13FFF99] transition-all duration-500 ease-out"
          >
            <Twitter className="w-5 h-5 text-muted-foreground hover:text-[#C13FFF] transition-colors duration-500" />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 hover:shadow-[0_0_15px_#C13FFF99] transition-all duration-500 ease-out"
          >
            <Instagram className="w-5 h-5 text-muted-foreground hover:text-[#C13FFF] transition-colors duration-500" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 hover:shadow-[0_0_15px_#B8860B99] transition-all duration-500 ease-out"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground hover:text-[#B8860B] transition-colors duration-500" />
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="text-center text-muted-foreground/60 text-xs md:text-sm font-normal leading-relaxed tracking-wide">
          © 2025 Hybrai. All rights reserved.
        </div>

        {/* Micro Text */}
        <div className="text-center text-muted-foreground/40 text-[10px] md:text-xs font-light italic tracking-wider">
          Created with AI. Crafted by imagination.
        </div>
      </motion.div>
    </footer>
  )
}
