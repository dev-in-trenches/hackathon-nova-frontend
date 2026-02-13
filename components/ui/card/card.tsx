import * as React from 'react'
import { cn } from '@/lib/utils'

const UCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('border border-border bg-card text-card-foreground', className)}
      {...props}
    />
  )
)
UCard.displayName = 'UCard'

const UCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('grid gap-1 p-3 border-b border-border', className)} {...props} />
  )
)
UCardHeader.displayName = 'UCardHeader'

const UCardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-base font-semibold', className)} {...props} />
  )
)
UCardTitle.displayName = 'UCardTitle'

const UCardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  )
)
UCardDescription.displayName = 'UCardDescription'

const UCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('p-3', className)} {...props} />
)
UCardContent.displayName = 'UCardContent'

const UCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('grid items-center p-3 border-t border-border', className)}
      {...props}
    />
  )
)
UCardFooter.displayName = 'UCardFooter'

const UCardGrid = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4', className)}
      {...props}
    />
  )
)
UCardGrid.displayName = 'UCardGrid'

export { UCard, UCardHeader, UCardFooter, UCardTitle, UCardDescription, UCardContent, UCardGrid }
