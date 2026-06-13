import { Code2 } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-8 text-center dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-[#999] dark:text-[#666]">
            &copy; {new Date().getFullYear()} Pranav. All rights reserved.
          </p>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-[#999] transition-colors duration-200 hover:text-accent dark:text-[#666]"
          >
            <Code2 size={16} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
