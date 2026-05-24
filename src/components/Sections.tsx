'use client'

import { motion } from 'framer-motion'
import { Wind, Scale, Heart, Home, HardHat, TrendingUp, BarChart2, Activity, Users, DollarSign, Zap, Shield, Globe, Star, Quote } from 'lucide-react'

// ─── Industries ────────────────────────────────────────────────────────────

const industries = [
  {
    icon: Wind,
    name: 'HVAC',
    description: 'Automate dispatch, service reminders, and customer follow-ups. AI agents handle inbound service calls 24/7.',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
  },
  {
    icon: Scale,
    name: 'Legal',
    description: 'Client intake automation, matter analytics, document processing, and AI-powered billing workflows.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Heart,
    name: 'Healthcare',
    description: 'HIPAA-compliant patient intake, clinical dashboards, billing automation, and appointment scheduling AI.',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
  },
  {
    icon: Home,
    name: 'Real Estate',
    description: 'Lead qualification, market analytics, automated follow-up sequences, and portfolio performance dashboards.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: HardHat,
    name: 'Construction',
    description: 'Job costing intelligence, estimating automation, subcontractor management, and project pipeline dashboards.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
  {
    icon: TrendingUp,
    name: 'Finance',
    description: 'Client reporting automation, portfolio analytics, compliance workflows, and AI-driven financial dashboards.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
]

export function Industries() {
  return (
    <section id="industries" className="py-28 bg-[#0a0b0c] relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Built for your industry
          </h2>
          <p className="text-[#8a8f98] text-lg max-w-lg mx-auto">
            We've studied the workflows, the tools, and the bottlenecks across six key industries. We speak your language on day one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 glass rounded-2xl hover:border-white/10 transition-all duration-300 hover:bg-white/[0.02]"
              >
                <div className={`w-10 h-10 ${ind.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${ind.color}`} />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{ind.name}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{ind.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Dashboard Preview ──────────────────────────────────────────────────────

const metrics = [
  { label: 'Total Revenue', value: '$2.4M', change: '+18.3%', positive: true, icon: DollarSign },
  { label: 'AI Automations', value: '12,847', change: '+94 today', positive: true, icon: Zap },
  { label: 'Active Users', value: '3,291', change: '+12.1%', positive: true, icon: Users },
  { label: 'Avg Resolution', value: '1.4 min', change: '-68%', positive: true, icon: Activity },
]

export function Dashboard() {
  return (
    <section id="dashboard" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            One dashboard.
            <br />
            <span className="gradient-text">Your entire business.</span>
          </h2>
          <p className="text-[#8a8f98] text-lg max-w-xl mx-auto">
            Real-time visibility across every department — revenue, operations, customers, and AI performance — in a single view.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl overflow-hidden border border-white/5"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5 bg-white/[0.02]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1 bg-white/5 rounded-md text-xs text-[#6b7280] font-mono">
                dashboard.millerify.com
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Metric cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {metrics.map((metric, i) => {
                const Icon = metric.icon
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white/[0.03] border border-white/5 rounded-xl p-4 hover:border-green-500/20 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-[#6b7280]">{metric.label}</span>
                      <Icon className="w-3.5 h-3.5 text-green-500/60" />
                    </div>
                    <div className="text-xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-xs text-green-400 font-medium">{metric.change}</div>
                  </motion.div>
                )
              })}
            </div>

            {/* Chart area */}
            <div className="grid lg:grid-cols-3 gap-3">
              {/* Main chart */}
              <div className="lg:col-span-2 bg-white/[0.02] border border-white/5 rounded-xl p-5">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-sm font-semibold text-white">Revenue & Automation Trend</div>
                    <div className="text-xs text-[#4b5563] mt-0.5">Last 30 days</div>
                  </div>
                  <div className="flex gap-2">
                    {['1W', '1M', '3M'].map(p => (
                      <button key={p} className={`text-xs px-2.5 py-1 rounded-md ${p === '1M' ? 'bg-green-500/20 text-green-400' : 'text-[#6b7280] hover:text-white'} transition-colors`}>{p}</button>
                    ))}
                  </div>
                </div>
                {/* SVG chart */}
                <svg viewBox="0 0 400 120" className="w-full">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,90 L40,75 L80,80 L120,60 L160,65 L200,45 L240,50 L280,35 L320,30 L360,20 L400,15" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M0,90 L40,75 L80,80 L120,60 L160,65 L200,45 L240,50 L280,35 L320,30 L360,20 L400,15 L400,120 L0,120 Z" fill="url(#chartGrad)"/>
                  {/* Data points */}
                  {[[40,75],[120,60],[200,45],[280,35],[360,20]].map(([x,y],i) => (
                    <circle key={i} cx={x} cy={y} r="3" fill="#22c55e" />
                  ))}
                </svg>
              </div>

              {/* Side stats */}
              <div className="space-y-3">
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                  <div className="text-xs text-[#6b7280] mb-3">AI Task Distribution</div>
                  {[
                    { label: 'Customer Support', pct: 42, color: 'bg-green-500' },
                    { label: 'Lead Qualification', pct: 31, color: 'bg-emerald-400' },
                    { label: 'Data Entry', pct: 27, color: 'bg-teal-500' },
                  ].map(item => (
                    <div key={item.label} className="mb-2.5">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-[#9ca3af]">{item.label}</span>
                        <span className="text-white font-medium">{item.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className={`h-full ${item.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                  <div className="text-xs text-[#6b7280] mb-3">System Status</div>
                  {[
                    { name: 'AI Agents', status: 'Operational' },
                    { name: 'Data Pipeline', status: 'Operational' },
                    { name: 'CRM Sync', status: 'Operational' },
                  ].map(s => (
                    <div key={s.name} className="flex items-center justify-between py-1.5">
                      <span className="text-xs text-[#9ca3af]">{s.name}</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        <span className="text-xs text-green-400">{s.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Why Millerify ──────────────────────────────────────────────────────────

const reasons = [
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'SOC 2 compliant infrastructure, end-to-end encryption, and role-based access controls built into every system we deploy.',
  },
  {
    icon: Zap,
    title: 'Fast Implementation',
    description: 'From kickoff to live system in 2–8 weeks. We\'ve built a repeatable process that gets results fast without cutting corners.',
  },
  {
    icon: Globe,
    title: 'Cloud Infrastructure',
    description: 'All systems deployed on AWS or Azure with 99.9% uptime SLAs, auto-scaling, and full observability from day one.',
  },
  {
    icon: BarChart2,
    title: 'Deep AI Integration',
    description: 'We don\'t bolt AI on top of your existing stack — we architect systems where AI is the foundation every workflow is built on.',
  },
  {
    icon: Users,
    title: 'Senior Team Throughout',
    description: 'You work directly with the engineers building your system, not account managers. No handoffs, no surprises.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable by Design',
    description: 'Every system we build is designed to grow with your business — same architecture whether you\'re handling 100 or 100,000 requests.',
  },
]

export function WhyMillerify() {
  return (
    <section id="why" className="py-28 bg-[#0a0b0c] relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Why companies choose
              <br />
              <span className="gradient-text">Millerify</span>
            </h2>
            <p className="text-[#8a8f98] text-lg leading-relaxed mb-8">
              We're not a big consulting firm that hands you a strategy deck and disappears.
              We're a senior technical team that ships production systems — fast.
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Fixed-price projects — no open-ended retainers',
                'You own everything we build',
                'Response within 24 hours, always',
                'Free 30-minute strategy call to start',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[#c4c9d4] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-xl p-5 hover:border-green-500/15 transition-all group"
                >
                  <Icon className="w-5 h-5 text-green-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-semibold text-white mb-1.5">{reason.title}</h4>
                  <p className="text-xs text-[#6b7280] leading-relaxed">{reason.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Testimonials ───────────────────────────────────────────────────────────

const testimonials = [
  {
    quote: "We'd been talking about AI automation for two years. Millerify had a fully working system in three weeks. Our team now handles twice the volume — same headcount.",
    name: 'Sarah Mitchell',
    role: 'Operations Director',
    company: 'Regional Law Group',
    initials: 'SM',
  },
  {
    quote: "The dashboard they built replaced 14 manual reports. Leadership finally sees the full picture in real time. The ROI was obvious within the first month.",
    name: 'James Rodriguez',
    role: 'VP of Finance',
    company: 'Premier Auto Group',
    initials: 'JR',
  },
  {
    quote: "They didn't just build what we asked for — they told us what we actually needed. Saved us from a bad decision and delivered something far more valuable.",
    name: 'Amanda Torres',
    role: 'CEO',
    company: 'TerraServ HVAC',
    initials: 'AT',
  },
  {
    quote: "Our AI voice agent now handles 80% of inbound service calls without a human. Scheduling, quotes, follow-ups — all automated. Game-changing for our operations.",
    name: 'David Chen',
    role: 'Director of Operations',
    company: 'Apex Field Services',
    initials: 'DC',
  },
  {
    quote: "The CRM integration they built connects our entire sales stack. No more manual data entry, no more lost leads. Every interaction is tracked automatically.",
    name: 'Rachel Kim',
    role: 'VP of Sales',
    company: 'Meridian Real Estate',
    initials: 'RK',
  },
  {
    quote: "From kickoff to live system in 16 days. The speed was incredible, but what impressed me most was how well they understood our business before writing a single line of code.",
    name: 'Michael Hayes',
    role: 'Founder',
    company: 'BuildRight Construction',
    initials: 'MH',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-green-400 fill-green-400" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Trusted by businesses
            <br />
            <span className="gradient-text">across every industry</span>
          </h2>
          <p className="text-[#8a8f98] text-lg max-w-lg mx-auto">
            Real results from real businesses that chose Millerify to automate their operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-green-500/15 transition-all flex flex-col"
            >
              <Quote className="w-5 h-5 text-green-500/40 mb-4" />
              <p className="text-[#c4c9d4] text-sm leading-relaxed flex-1 mb-6 italic">{t.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-xs font-bold text-black flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-[#6b7280]">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
