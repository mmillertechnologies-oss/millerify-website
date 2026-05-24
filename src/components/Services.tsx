'use client'

import { motion } from 'framer-motion'
import { Bot, Workflow, BarChart3, Plug, GitBranch, Database, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'AI Voice Agents',
    description: 'Deploy intelligent voice agents that handle inbound calls, qualify leads, schedule appointments, and answer questions — without a human on the line.',
    tags: ['Inbound Calls', 'Lead Qualification', 'Scheduling'],
    gradient: 'from-green-500/20 to-emerald-600/10',
    border: 'border-green-500/20',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-400',
  },
  {
    icon: Workflow,
    title: 'AI Automation',
    description: 'Map and automate your most time-consuming workflows. From data entry to approval chains — we eliminate manual work with intelligent process automation.',
    tags: ['Process Automation', 'Triggers & Actions', 'No Manual Entry'],
    gradient: 'from-emerald-500/15 to-green-600/8',
    border: 'border-emerald-500/20',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
  },
  {
    icon: BarChart3,
    title: 'AI Dashboards',
    description: 'Real-time intelligence dashboards that connect all your data sources and give leadership a single source of truth — updated automatically, always current.',
    tags: ['Real-time KPIs', 'Executive Reporting', 'Multi-source Data'],
    gradient: 'from-green-500/15 to-teal-600/8',
    border: 'border-green-500/20',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-400',
  },
  {
    icon: Plug,
    title: 'CRM Integrations',
    description: 'Connect your CRM to every tool in your stack. HubSpot, Salesforce, or custom systems — we build the integrations that keep your data clean and your team in sync.',
    tags: ['HubSpot', 'Salesforce', 'Custom CRMs'],
    gradient: 'from-teal-500/15 to-green-600/8',
    border: 'border-teal-500/20',
    iconBg: 'bg-teal-500/15',
    iconColor: 'text-teal-400',
  },
  {
    icon: GitBranch,
    title: 'AI Workflows',
    description: 'End-to-end intelligent workflows that adapt in real time. Our AI makes decisions, routes tasks, sends communications, and updates records — autonomously.',
    tags: ['Decision Logic', 'Auto-routing', 'Smart Triggers'],
    gradient: 'from-green-500/15 to-emerald-500/8',
    border: 'border-green-500/20',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-400',
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    description: 'Turn scattered data into competitive advantage. We build pipelines, warehouses, and analytics systems that surface insights your business can actually act on.',
    tags: ['Data Pipelines', 'Snowflake', 'Power BI'],
    gradient: 'from-emerald-500/15 to-green-600/8',
    border: 'border-emerald-500/20',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-green-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Everything you need to automate
            <br />
            <span className="gradient-text">your entire operation</span>
          </h2>
          <p className="text-[#8a8f98] text-lg max-w-xl mx-auto">
            Six core services that work together as one integrated AI platform for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`group relative bg-[#08090a] p-8 hover:bg-[#0d0e0f] transition-all duration-300 overflow-hidden`}
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Top border on hover */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-10 h-10 ${service.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${service.iconColor}`} />
                  </div>

                  <h3 className="font-bold text-white text-lg mb-3 tracking-tight group-hover:text-green-50 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed mb-5 group-hover:text-[#9ca3af] transition-colors">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-[#4b5563] px-2.5 py-1 border border-white/5 rounded-md group-hover:border-white/10 group-hover:text-[#6b7280] transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-xs text-green-500/60 group-hover:text-green-400 transition-colors font-medium">
                    Learn more <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
