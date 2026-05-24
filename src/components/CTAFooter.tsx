'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Twitter, Linkedin, Github } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !message) return
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, company, message }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-28 bg-[#0a0b0c] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-500/6 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 md:p-16 border border-white/5 relative overflow-hidden"
        >
          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
                  Ready to automate
                  <br />
                  <span className="gradient-text">your business?</span>
                </h2>
                <p className="text-[#8a8f98] leading-relaxed mb-8">
                  Start with a free 30-minute strategy call. We'll learn about your business,
                  identify the highest-impact automation opportunities, and tell you exactly
                  what it would take to build them. No pitch, no pressure.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Mail, text: 'michael@millerify.com' },
                    { icon: MapPin, text: 'Raleigh, NC' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-sm text-[#9ca3af]">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-green-500/5 border border-green-500/15 rounded-xl">
                  <div className="text-sm font-semibold text-green-400 mb-1">Free strategy call</div>
                  <div className="text-xs text-[#6b7280]">30 minutes. We'll tell you honestly whether we can help and what it would take. If it's not a fit, we'll tell you that too.</div>
                </div>
              </motion.div>
            </div>

            {/* Right — Form */}
            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                  <p className="text-[#8a8f98] text-sm">We'll be in touch within 24 hours to schedule your free strategy call.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#9ca3af] mb-2 uppercase tracking-wide">First name</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="Michael"
                        className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#4b5563] outline-none focus:border-green-500/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#9ca3af] mb-2 uppercase tracking-wide">Last name</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        placeholder="Miller"
                        className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#4b5563] outline-none focus:border-green-500/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#9ca3af] mb-2 uppercase tracking-wide">Work email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#4b5563] outline-none focus:border-green-500/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#9ca3af] mb-2 uppercase tracking-wide">Company</label>
                    <input
                      type="text"
                      value={company}
                      onChange={e => setCompany(e.target.value)}
                      placeholder="Your company name"
                      className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#4b5563] outline-none focus:border-green-500/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#9ca3af] mb-2 uppercase tracking-wide">What do you want to automate? *</label>
                    <textarea
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Tell us about the problem you're trying to solve..."
                      required
                      rows={4}
                      className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#4b5563] outline-none focus:border-green-500/40 transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-400">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400 transition-all hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-0.5 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Sending...' : 'Send message'}
                    {!sending && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Footer ─────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#08090a] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <div
                className="w-12 h-12 relative flex-shrink-0"
                style={{
                  maskImage: 'radial-gradient(circle, black 48%, transparent 72%)',
                  WebkitMaskImage: 'radial-gradient(circle, black 48%, transparent 72%)',
                }}
              >
                <Image src="/logo.png" alt="Millerify" fill className="object-contain" />
              </div>
              <span className="font-bold text-white text-lg">Millerify</span>
            </div>
            <p className="text-sm text-[#6b7280] leading-relaxed max-w-xs">
              Enterprise AI automation for modern businesses. We build the systems that let you scale without scaling headcount.
            </p>
            <div className="flex gap-3 mt-5">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#6b7280] hover:text-white hover:border-white/10 transition-all">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Services</div>
            <div className="space-y-2.5">
              {['AI Voice Agents', 'AI Automation', 'AI Dashboards', 'CRM Integrations', 'Data & Analytics'].map(s => (
                <a key={s} href="#services" className="block text-sm text-[#6b7280] hover:text-white transition-colors">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</div>
            <div className="space-y-2.5">
              {[['Industries', '#industries'], ['Dashboard', '#dashboard'], ['Why Us', '#why'], ['Testimonials', '#testimonials'], ['Contact', '#contact']].map(([label, href]) => (
                <a key={label} href={href} className="block text-sm text-[#6b7280] hover:text-white transition-colors">{label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <div className="text-xs text-[#4b5563]">© 2026 Millerify — Raleigh, NC. All rights reserved.</div>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <a key={item} href="#" className="text-xs text-[#4b5563] hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
