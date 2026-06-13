'use client'

import { ScrollReveal } from '../effects/ScrollReveal'
import { Magnetic } from '../effects/Magnetic'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Code2, Send, Mail, MapPin } from 'lucide-react'
import { portfolioData } from '../../data/portfolio'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-40"
    >
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
          <p className="mb-12 text-base text-[#555] dark:text-[#aaa]">
            Have a project in mind? Let&apos;s build something together.
          </p>
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-5">
          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <form
              className="glass-card p-6 sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium text-[#555] dark:text-[#aaa]">
                    Name
                  </label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium text-[#555] dark:text-[#aaa]">
                    Email
                  </label>
                  <Input type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div className="mb-5">
                <label className="mb-2 block text-xs font-medium text-[#555] dark:text-[#aaa]">
                  Subject
                </label>
                <Input placeholder="What's this about?" />
              </div>
              <div className="mb-6">
                <label className="mb-2 block text-xs font-medium text-[#555] dark:text-[#aaa]">
                  Message
                </label>
                <Textarea placeholder="Tell me about your project..." />
              </div>
              <Magnetic className="inline-block">
                <Button type="submit" size="lg" className="w-full gap-2 sm:w-auto">
                  <Send size={16} />
                  Send message
                </Button>
              </Magnetic>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              <div className="glass-card p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail size={18} />
                </div>
                <p className="text-sm text-[#444] dark:text-[#aaa]">hello@pranav.dev</p>
                <p className="mt-1 text-xs text-[#888] dark:text-[#777]">Always happy to chat</p>
              </div>

              <div className="glass-card p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin size={18} />
                </div>
                <p className="text-sm text-[#444] dark:text-[#aaa]">Remote / Worldwide</p>
                <p className="mt-1 text-xs text-[#888] dark:text-[#777]">Available for freelance</p>
              </div>

              <div className="glass-card p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Code2 size={18} />
                </div>
                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#444] transition-colors duration-200 hover:text-accent dark:text-[#aaa]"
                >
                  github.com/your-username
                </a>
                <p className="mt-1 text-xs text-[#888] dark:text-[#777]">Check out my code</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
