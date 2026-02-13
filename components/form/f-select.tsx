'use client'

import { useStore } from '@tanstack/react-form'
import {
  USelect,
  USelectContent,
  USelectItem,
  USelectTrigger,
  USelectValue,
} from '@/components/ui/select'
import { InputWrapper } from './input/input-wrapper'
import { useFieldContext } from './'

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface FSelectProps {
  label?: string
  placeholder?: string
  options?: SelectOption[]
}

export default function FSelect({ label, placeholder, options }: FSelectProps) {
  const field = useFieldContext<string>()
  const errors = useStore(field.store, (state: any) => state.meta.errors)
  const HAVE_OPTION = !!options?.length

  return (
    <InputWrapper label={label} htmlFor={field.name} error={errors?.[0]?.message}>
      <USelect
        value={field.state.value ?? ''}
        onValueChange={(value: string) => field.setValue(value)}
        onOpenChange={(open) => {
          if (!open) field.handleBlur()
        }}
      >
        <USelectTrigger>
          <USelectValue placeholder={placeholder} />
        </USelectTrigger>
        <USelectContent>
          {HAVE_OPTION ? (
            options?.map((option) => (
              <USelectItem key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </USelectItem>
            ))
          ) : (
            <span>There are no item</span>
          )}
        </USelectContent>
      </USelect>
    </InputWrapper>
  )
}

export const FSelectItem = USelectItem
