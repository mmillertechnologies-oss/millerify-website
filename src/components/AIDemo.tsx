'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, User, Send, Sparkles, CheckCircle2, RotateCcw, AlertCircle } from 'lucide-react'

type Message = { role: 'user' | 'assistant'; content: string; time: string }
type ChatState = 'idle' | 'streaming' | 'error'

const MAX_CHARS = 300

const capabilities = [
  'Lead qualification & scoring',
  'Automated follow-up sequences',
  'CRM sync & data entry',
  '24/7 customer support',
  'Appointment scheduling',
  'Invoice & billing automation',
]

const STARTER_PROMPTS = [
  { text: 'We get 200+ inquiries daily — can AI handle them?', icon: '📬' },
  { text: 'Do you integrate with HubSpot or Salesforce?', icon: '🔗' },
  { text: 'How quickly can you get us set up?', icon: '⚡' },
]

const FOLLOW_UP_POOL = [
  'What does onboarding look like?',
  'How does pricing work?',
  'Do you work with small businesses?',
  'Which industries do you specialize in?',
  'How do you handle data security?',
  'What results have other clients seen?',
  'Can we start with a pilot project?',
  'Do you offer ongoing support after launch?',
  'How do you train the AI on our data?',
  'Can we see a demo for our specific use case?',
]

function getTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function pickFollowUps(used: string[]): string[] {
  const available = FOLLOW_UP_POOL.filter(f => !used.includes(f))
  return available.sort(() => Math.random() - 0.5).slice(0, 2)
}

export default function AIDemo() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [chatState, setChatState] = useState<ChatState>('idle')
  const [started, setStarted] = useState(false)
  const [followUps, setFollowUps] = useState<string[]>([])
  const [usedFollowUps, setUsedFollowUps] = useState<string[]>([])
  const chatRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
    })
  }, [])

  const sendMessage = useCallback(async (text: string, currentMessages: Message[]) => {
    if (!text.trim() || chatState === 'streaming') return

    const userMsg: Message = { role: 'user', content: text.trim(), time: getTime() }
    const withUser = [...currentMessages, userMsg]

    setMessages([...withUser, { role: 'assistant', content: '', time: getTime() }])
    setInputValue('')
    setFollowUps([])
    setChatState('streaming')
    scrollToBottom()

    const controller = new AbortController()
    abortRef.current = controller

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: withUser.map(m => ({ role: m.role, content: m.content })) }),
        signal: controller.signal,
      })

      if (!res.ok || !res.body) throw new Error('Stream failed')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        setMessages(prev => {
          const updated = [...prev]
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            content: updated[updated.length - 1].content + chunk,
          }
          return updated
        })
        scrollToBottom()
      }

      setChatState('idle')
      const next = pickFollowUps(usedFollowUps)
      setFollowUps(next)
      setUsedFollowUps(prev => [...prev, ...next])
      inputRef.current?.focus()
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') return
      setMessages(prev => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          content: "I'm having trouble connecting right now. Please try again.",
        }
        return updated
      })
      setChatState('error')
    }
  }, [chatState, usedFollowUps, scrollToBottom])

  const handleStart = (prompt: string) => {
    setStarted(true)
    sendMessage(prompt, [])
    setTimeout(() => inputRef.current?.focus(), 150)
  }

  const handleSend = () => sendMessage(inputValue, messages)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const resetChat = () => {
    abortRef.current?.abort()
    setMessages([])
    setStarted(false)
    setChatState('idle')
    setFollowUps([])
    setUsedFollowUps([])
    setInputValue('')
  }

  const charsLeft = MAX_CHARS - inputValue.length

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-green-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Live AI Demo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            See the AI in action
          </h2>
          <p className="text-[#8a8f98] text-lg max-w-xl mx-auto">
            Chat live with Millerify AI — ask anything about automating your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Chat window */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-green-400" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#08090a]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Millerify AI</div>
                <div className="text-xs text-green-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse inline-block" />
                  Online — ready to assist
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2.5">
                {started && (
                  <button
                    onClick={resetChat}
                    title="Reset conversation"
                    className="text-[#4a5060] hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>
            </div>

            {/* Messages area */}
            <div ref={chatRef} className="h-80 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {!started ? (
                <div className="flex flex-col justify-center h-full gap-2.5">
                  <p className="text-center text-[#4a5060] text-xs font-medium uppercase tracking-wider mb-1">
                    Try asking
                  </p>
                  {STARTER_PROMPTS.map(({ text, icon }) => (
                    <button
                      key={text}
                      onClick={() => handleStart(text)}
                      className="w-full text-left px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-sm text-[#c4c9d4] hover:border-green-500/30 hover:bg-green-500/5 hover:text-white transition-all flex items-center gap-3 group"
                    >
                      <span className="text-base flex-shrink-0">{icon}</span>
                      <span className="flex-1">{text}</span>
                      <svg className="w-3.5 h-3.5 text-[#4a5060] group-hover:text-green-400 transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
              ) : (
                <>
                  <AnimatePresence initial={false}>
                    {messages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.22 }}
                        className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {msg.role === 'assistant' && (
                          <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Bot className="w-3.5 h-3.5 text-green-400" />
                          </div>
                        )}
                        <div className={`flex flex-col gap-1 max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                          <div
                            className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                              msg.role === 'user'
                                ? 'bg-white/10 text-white rounded-tr-sm'
                                : 'bg-green-500/10 border border-green-500/20 text-[#d1fae5] rounded-tl-sm'
                            }`}
                          >
                            {msg.content || (chatState === 'streaming' && i === messages.length - 1 ? '' : '...')}
                            {chatState === 'streaming' && i === messages.length - 1 && msg.role === 'assistant' && (
                              <span className="inline-block w-0.5 h-3.5 bg-green-400 ml-0.5 align-middle animate-pulse" />
                            )}
                          </div>
                          <span className="text-[10px] text-[#3a3f4a]">{msg.time}</span>
                        </div>
                        {msg.role === 'user' && (
                          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <User className="w-3.5 h-3.5 text-white/60" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Follow-up suggestions */}
                  <AnimatePresence>
                    {chatState === 'idle' && followUps.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-wrap gap-2 pt-1"
                      >
                        {followUps.map(f => (
                          <button
                            key={f}
                            onClick={() => sendMessage(f, messages)}
                            className="text-xs px-3 py-1.5 rounded-full border border-green-500/20 text-green-400 hover:bg-green-500/10 hover:border-green-500/40 transition-all"
                          >
                            {f}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Error state */}
                  {chatState === 'error' && (
                    <div className="flex items-center gap-2 text-xs text-red-400">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      Connection error —{' '}
                      <button onClick={() => setChatState('idle')} className="underline hover:text-red-300 transition-colors">
                        try again
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/5">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value.slice(0, MAX_CHARS))}
                  onKeyDown={handleKeyDown}
                  placeholder={started ? 'Ask anything...' : 'Select a prompt above to start'}
                  disabled={!started || chatState === 'streaming'}
                  className="flex-1 bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-[#4a5060] outline-none focus:border-green-500/40 transition-colors disabled:opacity-40"
                />
                <button
                  onClick={handleSend}
                  disabled={!started || chatState === 'streaming' || !inputValue.trim()}
                  className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center hover:bg-green-400 transition-colors flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 text-black" />
                </button>
              </div>
              {inputValue.length > 0 && (
                <div className="flex justify-end mt-1.5 px-0.5">
                  <span className={`text-[10px] tabular-nums ${charsLeft < 50 ? 'text-yellow-500' : 'text-[#3a3f4a]'}`}>
                    {charsLeft}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Capabilities panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                AI that works while you sleep
              </h3>
              <p className="text-[#8a8f98] leading-relaxed">
                Our AI agents handle the time-consuming work your team shouldn't be doing —
                so every hour is spent on what actually grows your business.
              </p>
            </div>

            <div className="space-y-3">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl glass hover:border-green-500/20 transition-colors group"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-[#c4c9d4] group-hover:text-white transition-colors font-medium">
                    {cap}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-green-400 text-sm font-medium hover:text-green-300 transition-colors"
            >
              See a live demo for your business
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
