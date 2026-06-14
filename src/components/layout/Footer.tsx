import { Code2 } from 'lucide-react'
import { portfolioData } from '../../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-8 pb-20 text-center dark:border-white/10 lg:pb-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-tertiary">
            &copy; {new Date().getFullYear()} Pranav. All rights reserved.
          </p>
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-tertiary transition-colors duration-200 hover:text-accent"
          >
            <Code2 size={16} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
