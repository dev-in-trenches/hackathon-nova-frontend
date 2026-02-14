'use client'

import { UCard, UCardContent, UCardHeader, UCardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface MetricsData {
  label: string
  value: string
  change: string
  trend: 'up' | 'down'
}

interface MetricsSectionProps {
  metrics: MetricsData[]
}

export function MetricsSection({ metrics }: MetricsSectionProps) {
  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <UCard key={metric.label}>
          <UCardHeader className="py-3">
            <UCardTitle className="text-sm font-medium text-muted-foreground">
              {metric.label}
            </UCardTitle>
          </UCardHeader>
          <UCardContent>
            <div className="text-2xl font-bold text-foreground">{metric.value}</div>
            <p className="text-sm text-muted-foreground">
              <span
                className={cn(
                  'font-medium',
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                )}
              >
                {metric.change}
              </span>{' '}
              vs last month
            </p>
          </UCardContent>
        </UCard>
      ))}
    </div>
  )
}
