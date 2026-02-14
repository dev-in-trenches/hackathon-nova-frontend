import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { ViewTransitions } from 'next-view-transitions'
import { AppContextProvider } from '@/components/layout/context-provider'
import LClientProvider from '@/components/layout/client-provider'
import LQueryProvider from '@/components/layout/query-provider'
import LToastProvider from '@/components/layout/toast-provider'

const fDefault = Open_Sans({
  variable: '--font-default',
  subsets: ['latin'],
  display: 'swap',
})

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
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`${fDefault.variable} antialiased`}>
          <AppContextProvider>
            <LToastProvider />
            <LQueryProvider>
              <LClientProvider>{children}</LClientProvider>
            </LQueryProvider>
          </AppContextProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
