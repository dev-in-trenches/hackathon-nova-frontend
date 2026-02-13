import * as React from 'react'
import { cn } from '@/lib/utils'

export interface UInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const UInput = React.forwardRef<HTMLInputElement, UInputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full px-3 py-2 text-sm bg-transparent border  transition-colors duration-150',
          'placeholder:text-muted-foreground',
          'focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          error
            ? 'border-destructive focus:border-destructive focus:ring-destructive'
            : 'border-border',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
UInput.displayName = 'UInput'

export { UInput }
