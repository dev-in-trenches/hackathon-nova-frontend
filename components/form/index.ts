import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts()

import FSelect from './f-select'
import FInput from './f-input'

export const { useAppForm } = createFormHook({
  fieldComponents: {
    FInput,
    FSelect,
  },
  formComponents: {},
  fieldContext,
  formContext,
})
