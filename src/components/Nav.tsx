'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import clsx from 'clsx'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Why Us', href: '#why' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled && 'backdrop-blur-2xl border-b border-white/5 bg-[#08090a]/80'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 group">
          <div
            className="w-10 h-10 md:w-14 md:h-14 relative flex-shrink-0"
            style={{
              maskImage: 'radial-gradient(circle, black 48%, transparent 72%)',
              WebkitMaskImage: 'radial-gradient(circle, black 48%, transparent 72%)',
            }}
          >
            <Image
              src="/logo.png"
              alt="Millerify"
              fill
              priority
              sizes="(max-width: 768px) 40px, 56px"
              className="object-contain drop-shadow-[0_0_8px_rgba(34,197,94,0.5)] group-hover:drop-shadow-[0_0_14px_rgba(34,197,94,0.8)] transition-all"
            />
          </div>
          <span className="font-bold text-white text-base md:text-lg tracking-tight">Millerify</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#8a8f98] hover:text-white transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm text-[#8a8f98] hover:text-white transition-colors px-4 py-2">
            Contact
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold px-5 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-all hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-[#08090a]/95 backdrop-blur-2xl"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#8a8f98] hover:text-white transition-colors py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="text-sm font-semibold px-5 py-2.5 bg-green-500 text-black rounded-lg text-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
