import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

const Badge = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs font-medium text-white/70',
        className
      )}
      {...props}
    />
  )
)
Badge.displayName = 'Badge'

export { Badge }
