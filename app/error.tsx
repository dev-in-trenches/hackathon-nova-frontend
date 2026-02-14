'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

import { UButton } from '@/components/ui'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] p-4 bg-background">
      <div className="flex flex-col items-center text-center">
        <div className="h-12 w-12 flex items-center justify-center mb-4">
          <AlertTriangle className="h-8 w-8 text-destructive" />
        </div>
        <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
        <p className="text-muted-foreground mb-6">
          We encountered an unexpected error. Please try again.
        </p>
        <div className="flex gap-3">
          <UButton variant="outline" onClick={reset}>
            <RefreshCw className="h-4 w-4" />
            Try again
          </UButton>
          <UButton asChild>
            <Link href="/">
              <span className="inline-flex items-center gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </span>
            </Link>
          </UButton>
        </div>
      </div>
    </div>
  )
}
