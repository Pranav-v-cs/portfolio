import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        'flex h-12 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2 text-sm text-[#1a1a1a] placeholder:text-[#888] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 dark:border-white/10 dark:bg-white/[0.04] dark:text-[#f5f5f0] dark:placeholder:text-[#777]',
        className
      )}
      {...props}
    />
  )
)
Input.displayName = 'Input'

export { Input }
