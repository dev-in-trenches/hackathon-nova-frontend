'use client'

import { useAppForm } from '@/components/form'
import { UButton, UCheckbox } from '@/components/ui'
import { Link } from 'next-view-transitions'
import { useState } from 'react'

export default function SignInForm() {
  const [rememberMe, setRememberMe] = useState(false)

  const form = useAppForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ value }) => {
      // TODO: Implement sign in API call
      console.log('Sign in:', { ...value, rememberMe })
    },
  })

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <div className="space-y-3 *:w-full">
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
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          )}
        />

        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <UCheckbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              id="remember-me"
            />
            <span>Remember me</span>
          </label>
          <Link href="/forgot-password" className="text-primary hover:underline">
            Forgot password?
          </Link>
        </div>

        <UButton type="submit" className="w-full" size="lg">
          Sign in
        </UButton>
      </div>
    </form>
  )
}
