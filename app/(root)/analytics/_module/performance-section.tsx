'use client'

import { useState } from 'react'
import { UCard, UCardContent, UCardHeader, UCardTitle } from '@/components/ui/card'
import { USelect, USelectContent, USelectItem, USelectTrigger, USelectValue } from '@/components/ui'

export type StatsData = {
  day: string
  submitted: number
  won: number
}

interface WeeklyChartSectionProps {
  weeklyStats: StatsData[]
  monthlyStats: StatsData[]
  yearlyStats: StatsData[]
}

export function PerformanceSection({
  weeklyStats,
  monthlyStats,
  yearlyStats,
}: WeeklyChartSectionProps) {
  const [period, setPeriod] = useState<'weekly' | 'monthly' | 'yearly'>('weekly')

  const stats =
    period === 'weekly' ? weeklyStats : period === 'monthly' ? monthlyStats : yearlyStats

  const maxValue = Math.max(...stats.map((s) => Math.max(s.submitted, s.won)), 1)

  return (
    <UCard>
      <UCardHeader className="flex items-center justify-between">
        <UCardTitle className="text-base font-semibold">Performance</UCardTitle>
        <USelect value={period} onValueChange={(v) => setPeriod(v as typeof period)}>
          <USelectTrigger className="w-32 h-8">
            <USelectValue />
          </USelectTrigger>
          <USelectContent>
            <USelectItem value="weekly">Weekly</USelectItem>
            <USelectItem value="monthly">Monthly</USelectItem>
            <USelectItem value="yearly">Yearly</USelectItem>
          </USelectContent>
        </USelect>
      </UCardHeader>
      <UCardContent>
        <div className="h-48 flex items-end gap-2">
          {stats.map((stat) => (
            <div key={stat.day} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex gap-0.5 h-32 items-end">
                <div
                  className="flex-1 bg-primary/30 rounded-t-sm"
                  style={{ height: `${(stat.submitted / maxValue) * 100}%` }}
                />
                <div
                  className="flex-1 bg-primary rounded-t-sm"
                  style={{ height: `${(stat.won / maxValue) * 100}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{stat.day}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-4 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary/30" />
            <span className="text-xs text-muted-foreground">Submitted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary" />
            <span className="text-xs text-muted-foreground">Won</span>
          </div>
        </div>
      </UCardContent>
    </UCard>
  )
}
