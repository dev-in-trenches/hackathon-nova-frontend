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
      <div
        className={cn(
          'flex items-center justify-center h-14 border-b border-border',
          collapsed ? 'px-2' : 'px-4'
        )}
      >
        {!collapsed && (
          <Link href="/" className="text-sm font-semibold w-full">
            Logo
          </Link>
        )}
        <button
          onClick={onToggle}
          className={cn('p-1.5 hover:bg-muted transition-colors', !collapsed && 'absolute right-2')}
        >
          {collapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-3 overflow-y-auto">
        <ul className={cn('grid gap-1', collapsed ? 'px-2' : 'px-3')}>
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    collapsed
                      ? 'flex items-center justify-center p-2.5'
                      : 'grid grid-cols-[auto_1fr] gap-3 items-center px-3 py-2.5',
                    'text-sm transition-colors font-semibold',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  )}
                  title={collapsed ? item.name : undefined}
                >
                  <item.icon className={cn('w-5 h-5', collapsed ? '' : 'flex-shrink-0')} />
                  {!collapsed && <span className="truncate">{item.name}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className={cn('p-3 border-t border-border', collapsed ? 'px-2' : 'px-3')}>
        {collapsed ? (
          <div className="w-8 h-8 bg-muted flex items-center justify-center mx-auto">
            <span className="text-sm font-medium">A</span>
          </div>
        ) : (
          <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
            <div className="w-8 h-8 bg-muted flex items-center justify-center">
              <span className="text-sm font-medium">A</span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">Admin</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
