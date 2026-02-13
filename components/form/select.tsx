'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import {
  USelect,
  USelectContent,
  USelectItem,
  USelectTrigger,
  USelectValue,
} from '@/components/ui/select'

interface FSelectProps {
  name: string
  label?: string
  error?: boolean
  placeholder?: string
  className?: string
  children: React.ReactNode
}

const FSelect = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, FSelectProps>(
  ({ name, label, error, placeholder, children, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="text-sm font-medium mb-1.5 block">{label}</label>}
        <USelect name={name}>
          <USelectTrigger ref={ref} error={error} className={className}>
            <USelectValue placeholder={placeholder} />
          </USelectTrigger>
          <USelectContent>{children}</USelectContent>
        </USelect>
      </div>
    )
  }
)
FSelect.displayName = 'FSelect'

const FSelectItem = USelectItem

export { FSelect, FSelectItem }
