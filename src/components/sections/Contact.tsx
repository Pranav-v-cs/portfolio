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
      className="relative flex min-h-dvh items-center px-6 py-32"
    >
      <div className="mx-auto w-full max-w-5xl">
        <ScrollReveal>
          <div className="mb-2 text-xs font-medium tracking-widest text-accent uppercase">
            Contact
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get in touch
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mb-12 text-base text-white/40">
            Have a project in mind? Let&apos;s build something together.
          </p>
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-5">
          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <form
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs text-white/40 font-medium">
                    Name
                  </label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-xs text-white/40 font-medium">
                    Email
                  </label>
                  <Input type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div className="mb-5">
                <label className="mb-2 block text-xs text-white/40 font-medium">
                  Subject
                </label>
                <Input placeholder="What's this about?" />
              </div>
              <div className="mb-6">
                <label className="mb-2 block text-xs text-white/40 font-medium">
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
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail size={18} />
                </div>
                <p className="text-sm text-white/60">hello@pranav.dev</p>
                <p className="text-xs text-white/30 mt-1">Always happy to chat</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin size={18} />
                </div>
                <p className="text-sm text-white/60">Remote / Worldwide</p>
                <p className="text-xs text-white/30 mt-1">Available for freelance</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Code2 size={18} />
                </div>
                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/60 transition-colors duration-200 hover:text-accent"
                >
                  github.com/your-username
                </a>
                <p className="text-xs text-white/30 mt-1">Check out my code</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
