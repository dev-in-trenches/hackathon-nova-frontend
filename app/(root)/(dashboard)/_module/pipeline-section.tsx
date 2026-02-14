'use client'

import { UCard, UCardContent, UCardHeader, UCardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export interface PipelineStatus {
  label: string
  count: number
  color: string
}

interface PipelineSectionProps {
  status: PipelineStatus[]
  selectedStatus?: string | null
  onStatusClick?: (status: string | null) => void
}

export function PipelineSection({
  status,
  selectedStatus = null,
  onStatusClick = () => {},
}: PipelineSectionProps) {
  return (
    <UCard>
      <UCardHeader className="py-3">
        <UCardTitle className="text-base font-semibold">Pipeline</UCardTitle>
      </UCardHeader>
      <UCardContent>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {status.map((item) => (
            <button
              key={item.label}
              onClick={() => onStatusClick(selectedStatus === item.label ? null : item.label)}
              className={cn(
                'flex flex-col items-center justify-center p-4 min-w-[100px] transition-colors',
                item.color,
                selectedStatus === item.label && 'ring-2 ring-primary'
              )}
            >
              <span className="text-3xl font-bold text-foreground">{item.count}</span>
              <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
            </button>
          ))}
        </div>
      </UCardContent>
    </UCard>
  )
}
