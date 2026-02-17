'use client'

import Link from 'next/link'
import { LuFileX, LuArrowLeft } from 'react-icons/lu'
import { FiHome } from 'react-icons/fi'

import { UButton } from '@/components/ui'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] p-4 bg-background">
      <div className="flex flex-col items-center text-center">
        <div className="h-12 w-12 flex items-center justify-center mb-4">
          <LuFileX className="h-8 w-8 text-muted-foreground" />
        </div>
        <h2 className="text-lg font-semibold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-6">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="flex gap-3">
          <UButton variant="outline" onClick={() => window.history.back()}>
            <LuArrowLeft className="h-4 w-4" />
            Go back
          </UButton>
          <UButton asChild>
            <Link href="/">
              <span className="inline-flex items-center gap-2">
                <FiHome className="h-4 w-4" />
                Back to Home
              </span>
            </Link>
          </UButton>
        </div>
      </div>
    </div>
  )
}
