import type { Metadata } from 'next'
import LClientProvider from '@/components/layout/client-provider'
import { AppContextProvider } from '@/components/layout/context-provider'
import LQueryProvider from '@/components/layout/query-provider'
import LToastProvider from '@/components/layout/toast-provider'
import LMainProvider from '@/components/layout/main-provider'

export const metadata: Metadata = {
  title: 'Hackathon Nova - Admin',
  description: 'Admin dashboard for Hackathon Nova',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppContextProvider>
      <LToastProvider />
      <LQueryProvider>
        <LClientProvider>
          <LMainProvider>{children}</LMainProvider>
        </LClientProvider>
      </LQueryProvider>
    </AppContextProvider>
  )
}
