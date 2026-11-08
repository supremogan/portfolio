import * as React from 'react'
import { cn } from '@/lib/utils'

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground p-6 shadow-[0_10px_30px_rgba(0,56,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,56,255,0.16)] scroll-mt-6',
      className
    )}
    {...props}
  />
))
Card.displayName = 'Card'

const CardHeader = ({ className, ...props }) => (
  <div className={cn('mb-5 flex items-center gap-3.5', className)} {...props} />
)
const CardTitle = ({ className, ...props }) => (
  <h3 className={cn('text-xl font-semibold leading-tight', className)} {...props} />
)
const CardDescription = ({ className, ...props }) => (
  <p className={cn('text-sm text-muted-foreground', className)} {...props} />
)
const CardContent = ({ className, ...props }) => <div className={cn(className)} {...props} />

export { Card, CardHeader, CardTitle, CardDescription, CardContent }
