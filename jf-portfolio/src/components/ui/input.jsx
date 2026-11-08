import * as React from 'react'
import { cn } from '@/lib/utils'

const fieldBase =
  'w-full rounded-md border border-input bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-[border-color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-4 focus-visible:ring-secondary'

const Input = React.forwardRef(({ className, type = 'text', ...props }, ref) => (
  <input ref={ref} type={type} className={cn(fieldBase, className)} {...props} />
))
Input.displayName = 'Input'

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(fieldBase, 'resize-y', className)} {...props} />
))
Textarea.displayName = 'Textarea'

export { Input, Textarea }
