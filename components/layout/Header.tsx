'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  const navItems = [
    { name: 'Now Playing', href: '#featured-selection-section' },
    { name: 'AI Originals', href: '#video-showcase-section' },
    { name: 'Creator Feed', href: '#onepercent-pulse-section' },
    {
      name: 'Studios',
      href: '/(app)/studios',
      tooltip: 'Explore creators, AI filmmakers, and studios behind the magic',
    },
  ]

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-50 w-full px-6 py-4 transition-all duration-500 md:px-12 ${
        isScrolled
          ? 'border-b border-[#C13FFF]/10 bg-black/30 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link
            href="/"
            className="bg-gradient-to-r from-[#B8860B] via-[#C13FFF] to-[#8B5CF6] bg-clip-text text-xl font-semibold tracking-tight text-transparent transition-all duration-300 hover:brightness-110 md:text-2xl"
          >
            Hybrai
          </Link>
          <nav className="hidden items-center gap-6 md:flex md:gap-8 lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    handleScrollToSection(e, item.href)
                  }
                }}
                className="font-medium text-foreground/90 decoration-[#B8860B]/60 decoration-2 underline-offset-8 transition-all duration-300 hover:text-primary hover:underline"
                aria-current={undefined}
                title={item.tooltip}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/(auth)/sign-in" className="hidden md:block">
            <Button className="rounded-full bg-gradient-to-r from-[#C13FFF] via-[#8B5CF6] to-[#B8860B] px-5 py-2.5 font-medium text-white shadow-lg ring-1 ring-[#C13FFF]/30 transition-all duration-300 hover:brightness-110">
              Sign In
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="rounded-2xl border border-white/10 bg-black/60 shadow-[0_0_25px_rgba(193,63,255,0.15)] backdrop-blur-lg"
            >
              <SheetHeader>
                <SheetTitle className="mb-2 text-left text-xs uppercase tracking-wider text-muted-foreground">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        handleScrollToSection(e, item.href)
                      }
                    }}
                    className="py-2 text-lg font-medium text-foreground/90 transition-colors duration-300 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/(auth)/sign-in" className="mt-4 w-full">
                  <Button className="w-full rounded-full bg-gradient-to-r from-[#C13FFF] via-[#8B5CF6] to-[#B8860B] px-4 py-2 text-sm font-medium text-white shadow-lg ring-1 ring-[#C13FFF]/30 transition-all duration-300 hover:brightness-110">
                    Sign In
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
