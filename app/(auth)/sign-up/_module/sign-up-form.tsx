'use client'

import { useAppForm } from '@/components/form'
import { UButton, UCheckbox } from '@/components/ui'

export default function SignUpForm() {
  const form = useAppForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    },
    onSubmit: ({ value }) => {
      if (value.password !== value.confirmPassword) {
        alert('Passwords do not match')
        return
      }
      if (!value.agreeTerms) {
        alert('Please agree to the terms')
        return
      }
      // TODO: Implement sign up API call
      console.log('Sign up:', value)
    },
  })

  return (
    <form className="w-full" onSubmit={form.handleSubmit}>
      <div className="space-y-3 *:w-full">
        <form.AppField
          name="name"
          children={(field) => (
            <field.FInput
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
          )}
        />

        <form.AppField
          name="email"
          children={(field) => (
            <field.FInput
              label="Email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          )}
        />

        <form.AppField
          name="password"
          children={(field) => (
            <field.FInput
              label="Password"
              type="password"
              placeholder="Create a password"
              autoComplete="new-password"
              required
            />
          )}
        />

        <form.AppField
          name="confirmPassword"
          children={(field) => (
            <field.FInput
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              autoComplete="new-password"
              required
            />
          )}
        />

        <form.AppField
          name="agreeTerms"
          children={(field) => (
            <label className="flex items-start gap-2 text-sm cursor-pointer">
              <UCheckbox
                checked={field.state.value ?? false}
                onChange={(e) => field.setValue(e.target.checked)}
                onBlur={field.handleBlur}
                id="agree-terms"
              />
              <span>
                I agree to the{' '}
                <a href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>
          )}
        />

        <UButton type="submit" className="w-full" size="lg">
          Create account
        </UButton>
      </div>
    </form>
  )
}
