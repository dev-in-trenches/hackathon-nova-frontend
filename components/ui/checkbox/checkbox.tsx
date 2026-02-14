import * as React from 'react'
import { cn } from '@/lib/utils'

export interface UCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: 'checkbox'
}

const UCheckbox = React.forwardRef<HTMLInputElement, UCheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        className={cn(
          'w-4 h-4 border border-border rounded-sm appearance-none cursor-pointer',
          'checked:bg-primary checked:border-primary',
          'focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'transition-colors duration-150',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
UCheckbox.displayName = 'UCheckbox'

export { UCheckbox }
