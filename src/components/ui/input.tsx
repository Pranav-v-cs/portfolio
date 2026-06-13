import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        'flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 placeholder:text-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200',
        className
      )}
      {...props}
    />
  )
)
Input.displayName = 'Input'

export { Input }
