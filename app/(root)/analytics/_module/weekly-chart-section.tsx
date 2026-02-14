'use client'

import { UCard, UCardContent, UCardHeader, UCardTitle } from '@/components/ui/card'

interface WeeklyStats {
  day: string
  submitted: number
  won: number
}

interface WeeklyChartSectionProps {
  stats: WeeklyStats[]
}

export function WeeklyChartSection({ stats }: WeeklyChartSectionProps) {
  return (
    <UCard>
      <UCardHeader className="py-3">
        <UCardTitle className="text-base font-semibold">Weekly Performance</UCardTitle>
      </UCardHeader>
      <UCardContent>
        <div className="h-48 flex items-end gap-4">
          {stats.map((stat) => (
            <div key={stat.day} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex gap-1 h-32 items-end">
                <div
                  className="flex-1 bg-primary/30"
                  style={{ height: `${(stat.submitted / 10) * 100}%` }}
                />
                <div
                  className="flex-1 bg-primary"
                  style={{ height: `${(stat.won / 10) * 100}%` }}
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
