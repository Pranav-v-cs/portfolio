import { forwardRef, type TextareaHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-[120px] w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#888] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 resize-none dark:border-white/10 dark:bg-white/[0.04] dark:text-[#f5f5f0] dark:placeholder:text-[#777]',
        className
      )}
      {...props}
    />
  )
)
Textarea.displayName = 'Textarea'

export { Textarea }
