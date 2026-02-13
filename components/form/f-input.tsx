import { useStore } from '@tanstack/react-form'
import { UInput } from '@/components/ui/input'
import { InputWrapper } from './input/input-wrapper'
import { useFieldContext } from './'

interface FInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'form'> {
  label?: string
}

export default function FInput({ label, className, ...props }: FInputProps) {
  const field = useFieldContext<string>()
  const errors = useStore(field.store, (state: any) => state.meta.errors)

  return (
    <InputWrapper label={label} htmlFor={field.name} error={errors?.[0]?.message}>
      <UInput
        value={field.state.value ?? ''}
        onChange={(e) => field.setValue(e.target.value)}
        onBlur={field.handleBlur}
        {...props}
      />
    </InputWrapper>
  )
}
