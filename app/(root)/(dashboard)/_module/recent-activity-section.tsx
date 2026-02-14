'use client'

import { UCard, UCardContent, UCardHeader, UCardTitle } from '@/components/ui/card'

interface Activity {
  id: number
  user: string
  action: string
  time: string
}

interface RecentActivitySectionProps {
  activities: Activity[]
}

export function RecentActivitySection({ activities }: RecentActivitySectionProps) {
  return (
    <UCard>
      <UCardHeader className="py-3">
        <UCardTitle className="text-base font-semibold">Recent Activity</UCardTitle>
      </UCardHeader>
      <UCardContent className="py-1">
        <div className="space-y-2">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-3 py-2">
              <div className="w-8 h-8 bg-muted flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">
                  {activity.user.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{activity.user}</p>
                <p className="text-sm text-muted-foreground truncate">{activity.action}</p>
              </div>
              <span className="text-sm text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </UCardContent>
    </UCard>
  )
}
