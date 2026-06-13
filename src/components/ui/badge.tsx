import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

const Badge = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-0.5 text-xs font-medium text-[#666] dark:border-white/10 dark:bg-white/5 dark:text-[#888]',
        className
      )}
      {...props}
    />
  )
)
Badge.displayName = 'Badge'

export { Badge }
