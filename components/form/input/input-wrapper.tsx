'use client'

import * as React from 'react'
import { ULabel } from '@/components/ui/label'

interface InputWrapperProps {
  label?: string
  htmlFor?: string
  error?: string | boolean
  children: React.ReactNode
}

const InputWrapper = ({ label, htmlFor, error, children }: InputWrapperProps) => {
  return (
    <div className="grid gap-1.5">
      {label && <ULabel htmlFor={htmlFor}>{label}</ULabel>}
      {children}
      {error && typeof error === 'string' && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}

export { InputWrapper }
