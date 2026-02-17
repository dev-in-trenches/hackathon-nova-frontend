'use client'

import { useState } from 'react'
import Sidebar from '../sidebar'
import { UInput } from '@/components/ui'
import { LuSearch } from 'react-icons/lu'

export default function Main({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div className={`transition-all duration-200 ${collapsed ? 'lg:ml-16' : 'lg:ml-56'}`}>
        <header className="sticky top-0 z-30 h-14 bg-card border-b border-border">
          <div className="grid grid-cols-[1fr_auto] items-center h-full px-2 gap-4">
            <div className="flex-1 max-w-sm">
              <div className="relative">
                <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <UInput type="text" placeholder="Search..." className="pl-9 bg-muted" />
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}
