'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap, Shield, Globe } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

const stats = [
  { value: '10x', label: 'Faster Operations' },
  { value: '80%', label: 'Cost Reduction' },
  { value: '24/7', label: 'AI Availability' },
  { value: '99.9%', label: 'Uptime SLA' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">

      {/* Animated background */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-green-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-[80px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-green-400/5 rounded-full blur-[60px]" />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-[10%] w-2 h-2 bg-green-500 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-[15%] w-1.5 h-1.5 bg-green-400 rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/3 left-[20%] w-1 h-1 bg-green-500 rounded-full opacity-50"
        />
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-[25%] w-2 h-2 bg-green-300 rounded-full opacity-30"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-medium text-green-400 tracking-wide">Serving businesses nationwide</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-[-0.04em] text-white mb-6">
            Enterprise AI Automation
            <br />
            <span className="gradient-text">for Modern Businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-[#8a8f98] max-w-2xl mx-auto leading-relaxed font-light">
            Millerify helps businesses automate operations using AI agents, intelligent dashboards,
            and automated workflows — so your team focuses on growth, not repetitive tasks.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-7 py-3.5 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400 transition-all hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-0.5 text-sm"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#demo"
            className="group flex items-center gap-2 px-7 py-3.5 border border-white/10 text-white font-medium rounded-xl hover:border-white/20 hover:bg-white/5 transition-all text-sm backdrop-blur-sm"
          >
            <Play className="w-3.5 h-3.5 text-green-400" fill="currentColor" />
            Try AI Assistant
          </a>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#08090a] px-6 py-5 text-center hover:bg-[#0f1011] transition-colors"
            >
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-[#4a5060] font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12"
        >
          {[
            { icon: Shield, label: 'Enterprise Security' },
            { icon: Zap, label: 'Fast Implementation' },
            { icon: Globe, label: 'Works Nationwide' },
            { icon: Sparkles, label: 'AI-Native Platform' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-[#4a5060]">
              <Icon className="w-3.5 h-3.5 text-green-500/60" />
              <span className="text-xs font-medium">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
