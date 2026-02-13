'use client'

import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { LayoutDashboard, FileText, TrendingUp, Briefcase, Menu, X } from 'lucide-react'
import { Link } from 'next-view-transitions'

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Applications', href: '/applications', icon: Briefcase },
  { name: 'Proposals', href: '/proposals', icon: FileText },
  { name: 'Analytics', href: '/analytics', icon: TrendingUp },
]

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen flex flex-col transition-all duration-200 border-r border-border',
        collapsed ? 'w-16' : 'w-56',
        'bg-card text-foreground'
      )}
    >
      {/* Logo */}
      <div
        className={cn(
          'flex items-center h-14 px-4 border-b border-border',
          collapsed ? 'justify-center px-0' : 'justify-between'
        )}
      >
        {!collapsed && (
          <Link href="/" className="text-sm font-semibold">
            Logo
          </Link>
        )}
        <button
          onClick={onToggle}
          className={cn(
            'p-1.5 rounded hover:bg-muted transition-colors',
            collapsed && 'absolute right-1'
          )}
        >
          {collapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-3 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 text-sm transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted',
                    collapsed && 'justify-center px-0'
                  )}
                  title={collapsed ? item.name : undefined}
                >
                  <item.icon className={cn('w-4 h-4 flex-shrink-0')} />
                  {!collapsed && <span className="truncate">{item.name}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className={cn('p-3 border-t border-border', collapsed ? 'px-2' : 'px-3')}>
        {!collapsed ? (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
              <span className="text-sm font-medium">A</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Admin</p>
            </div>
          </div>
        ) : (
          <div className="w-8 h-8 rounded bg-muted flex items-center justify-center mx-auto">
            <span className="text-sm font-medium">A</span>
          </div>
        )}
      </div>
    </aside>
  )
}
