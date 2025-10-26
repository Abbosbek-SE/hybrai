"use client"

import type React from "react"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion } from "framer-motion"

const faqData = [
  {
    question: "What exactly is Hybrai?",
    answer:
      "Hybrai is like Netflix, but for AI / Hybrid generated films, shows, and animations. It's a place to discover unique, curated stories made by AI film creators from all over the world. We bring together the best AI-generated content — from short films to full cinematic projects — so you can explore how creativity and technology meet on screen.",
  },
  {
    question: "Are you just another AI video generation tool?",
    answer:
      "No, we're not 🙂. There are already great tools being built for generating videos. Hybrai is where that creativity comes together — a platform to watch and explore AI-made films, shows, and animations.",
  },
  {
    question: "Why are we building Hybrai?",
    answer:
      "Well, to be cool :) Just kidding. There's already a flood of AI-generated content out there — and it's only growing. But most of it gets lost in the noise. We're building Hybrai to give people one place to find the most creative, high-quality AI films and animations made by truly unique creators.",
  },
  {
    question: "Are the contents on Hybrai free?",
    answer:
      "Most of the content on Hybrai will be paid, though you'll still find some free films and shows to watch. You can rent or purchase movies individually.",
  },
  {
    question: "Can I create or submit my own AI film?",
    answer:
      "Absolutely — Hybrai is open to creators. We're just a bit selective because we want to feature truly exceptional storytellers — people with unique ideas and a passion for what they make. You can learn more about joining on the Studios page.",
  },
  {
    question: "How can we contact you?",
    answer:
      "The easiest way to reach us is on X (Twitter) or by email at hybrailabs@gmail.com. We personally read and respond to every message — so don't hesitate to say hi.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <motion.div
      className={`w-full relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out group`}
      onClick={handleClick}
      role="button"
      aria-expanded={isOpen}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onToggle()
        }
      }}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        background: "linear-gradient(180deg, transparent 0%, #1c1228 100%)",
        backgroundColor: "#141018",
        boxShadow: "0 0 30px rgba(155, 75, 255, 0.1)",
      }}
    >
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #9d4edd 0%, #ff006e 50%, #ffb86b 100%)",
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_20px_rgba(157,78,221,0.2)]" />

      <div className="w-full px-6 py-5 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out relative z-10">
        <div className="flex-1 text-white text-lg font-bold leading-7 break-words">{question}</div>
        <div className="flex justify-center items-center">
          {isOpen ? (
            <Minus className="w-5 h-5 text-[#9d4edd] transition-all duration-300 ease-out group-hover:drop-shadow-[0_0_8px_rgba(157,78,221,0.8)]" />
          ) : (
            <Plus className="w-5 h-5 text-[#9d4edd] transition-all duration-300 ease-out group-hover:drop-shadow-[0_0_8px_rgba(157,78,221,0.8)]" />
          )}
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 pt-2 relative z-10">
          <div className="text-[#b3b3b3] text-base font-normal leading-relaxed break-words">{answer}</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function FaqSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section
      className="w-full py-24 md:py-32 px-5 relative flex flex-col justify-center items-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0b0a0f 0%, #1a0924 100%)",
      }}
    >
      {/* Vignette shadow around edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 100px 40px rgba(0, 0, 0, 0.6)",
        }}
      />

      {/* Moving gradient glow at top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(157, 78, 221, 0.1) 50%, rgba(255, 0, 110, 0.1) 100%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Header section */}
      <motion.div
        className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2
          className="w-full max-w-[800px] text-center text-4xl md:text-5xl font-extrabold leading-tight tracking-tight break-words"
          style={{
            background: "linear-gradient(135deg, #ffb86b 0%, #9d4edd 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          🎬 Questions from You
        </h2>
        <p className="max-w-[700px] mx-auto text-center text-[#b3b3b3] text-base md:text-lg font-normal leading-relaxed break-words mt-4">
          Everything you need to know about Hybrai's AI-Generated Entertainment Experience.
        </p>
      </motion.div>

      {/* FAQ items */}
      <motion.div
        className="w-full max-w-[900px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            className="w-full"
          >
            <FAQItem {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
