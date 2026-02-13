'use client'

import { useState } from 'react'
import Sidebar from '.'

export default function SidebarWrapper() {
  const [collapsed, setCollapsed] = useState(false)

  return <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
}
