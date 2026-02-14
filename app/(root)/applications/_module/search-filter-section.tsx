'use client'

import { UButton } from '@/components/ui/button'

interface SearchFilterSectionProps {
  searchQuery?: string
  onSearchChange?: (value: string) => void
  onClear?: () => void
  placeholder?: string
}

export function SearchFilterSection({
  searchQuery = '',
  onSearchChange = () => {},
  onClear = () => {},
  placeholder = 'Search...',
}: SearchFilterSectionProps) {
  return (
    <div className="flex gap-3">
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 h-9 px-3 text-sm bg-muted border"
      />
      <UButton variant="outline" onClick={onClear}>
        Clear
      </UButton>
    </div>
  )
}
