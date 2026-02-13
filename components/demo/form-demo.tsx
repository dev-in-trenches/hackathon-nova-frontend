'use client'

import {
  UButton,
  UCard,
  UCardContent,
  UCardDescription,
  UCardFooter,
  UCardHeader,
  UCardTitle,
} from '@/components/ui'
import { useAppForm } from '@/components/form'

export default function FormDemo() {
  const form = useAppForm({
    defaultValues: {
      name: '',
      email: '',
      role: '',
    },
    onSubmit: ({ value }) => {
      console.log('Form submitted:', value)
    },
  })

  const roleOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
    { value: 'guest', label: 'Guest' },
  ]

  return (
    <UCard>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <UCardHeader>
          <UCardTitle>User Form</UCardTitle>
          <UCardDescription>Using FInput and FSelect with useAppForm</UCardDescription>
        </UCardHeader>
        <UCardContent className="grid gap-4">
          <form.AppField
            name="name"
            children={(f) => <f.FInput label="Name" placeholder="insert name" required />}
          />
          <form.AppField
            name="email"
            children={(f) => <f.FInput label="Email" placeholder="Enter your email" type="email" />}
          />
          <form.AppField
            name="role"
            children={(f) => (
              <f.FSelect label="Role" placeholder="Select a role" options={roleOptions} />
            )}
          />
        </UCardContent>
        <UCardFooter>
          <UButton type="submit">Submit</UButton>
        </UCardFooter>
      </form>
    </UCard>
  )
}
