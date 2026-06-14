'use client'

import { useState, type FormEvent } from 'react'
import { ScrollReveal } from '../effects/ScrollReveal'
import { Magnetic } from '../effects/Magnetic'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Code2, Send, Mail, MapPin, CheckCircle2, AlertCircle } from 'lucide-react'
import { portfolioData } from '../../data/portfolio'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const isValid = name.trim() && email.trim() && subject.trim() && message.trim()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!isValid) return

    setStatus('sending')

    const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '8f6ad425-204a-4ab9-b5c3-4b7130e880cf',
          name,
          email,
          subject,
          message,
        }),
      })

      if (res.ok) {
        setStatus('sent')
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      } else {
        throw new Error('Failed')
      }
    } catch {
      window.open(
        `mailto:${portfolioData.social.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        '_blank'
      )
      setStatus('sent')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    }
  }

  return (
    <section id="contact" className="relative px-6 py-40">
      <div className="mx-auto w-full max-w-5xl">
        <ScrollReveal>
          <div className="mb-2 text-xs font-medium tracking-widest text-accent uppercase">
            Contact
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mb-2 text-4xl font-bold tracking-tight text-[#1a1a1a] dark:text-[#f5f5f0] sm:text-5xl">
            Get in touch
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mb-12 text-base text-secondary">
            Have a project in mind? Let&apos;s build something together.
          </p>
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-5">
          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <form className="glass-card p-6 sm:p-8" onSubmit={handleSubmit}>
              <div className="mb-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium text-secondary">
                    Name <span className="text-accent">*</span>
                  </label>
                  <Input
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium text-secondary">
                    Email <span className="text-accent">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="mb-2 block text-xs font-medium text-secondary">
                  Subject <span className="text-accent">*</span>
                </label>
                <Input
                  placeholder="What's this about?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block text-xs font-medium text-secondary">
                  Message <span className="text-accent">*</span>
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {status === 'sent' ? (
                <div className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle2 size={16} />
                  Message sent! I&apos;ll get back to you soon.
                </div>
              ) : status === 'error' ? (
                <div className="flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle size={16} />
                  Something went wrong. Try emailing me directly.
                </div>
              ) : (
                <Magnetic className="inline-block">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 sm:w-auto"
                    disabled={status === 'sending'}
                  >
                    <Send size={16} />
                    {status === 'sending' ? 'Sending...' : 'Send message'}
                  </Button>
                </Magnetic>
              )}
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              <div className="glass-card p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail size={18} />
                </div>
                <a
                  href="mailto:pranav.vijayakumar216@gmail.com"
                  className="text-sm text-secondary transition-colors duration-200 hover:text-accent"
                >
                  pranav.vijayakumar216@gmail.com
                </a>
                <p className="mt-1 text-xs text-tertiary">Always happy to chat</p>
              </div>

              <div className="glass-card p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin size={18} />
                </div>
                <p className="text-sm text-secondary">Remote / Worldwide</p>
                <p className="mt-1 text-xs text-tertiary">Available for freelance</p>
              </div>

              <div className="glass-card p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Code2 size={18} />
                </div>
                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-secondary transition-colors duration-200 hover:text-accent"
                >
                  {portfolioData.social.github.replace('https://', '')}
                </a>
                <p className="mt-1 text-xs text-tertiary">Check out my code</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
