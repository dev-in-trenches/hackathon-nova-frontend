import { UCard, UCardContent, UCardHeader, UCardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const applicationStatus = [
  { label: 'Drafted', count: 12, color: 'bg-muted' },
  { label: 'Approved', count: 8, color: 'bg-blue-50/50' },
  { label: 'Submitted', count: 24, color: 'bg-amber-50/50' },
  { label: 'Interviewed', count: 15, color: 'bg-purple-50/50' },
  { label: 'Won', count: 6, color: 'bg-green-50/50' },
  { label: 'Lost', count: 9, color: 'bg-red-50/50' },
]

const metrics = [
  { label: 'Win Rate', value: '32%', change: '+5%', trend: 'up' },
  { label: 'Avg Proposal Time', value: '2.4h', change: '-12%', trend: 'up' },
  { label: 'Edit Percentage', value: '18%', change: '-3%', trend: 'up' },
  { label: 'Revenue Impact', value: '$45K', change: '+22%', trend: 'up' },
]

const recentActivity = [
  { id: 1, user: 'John Doe', action: 'Submitted proposal - TechCorp', time: '2 min ago' },
  { id: 2, user: 'Jane Smith', action: 'Won interview - StartupXYZ', time: '15 min ago' },
  { id: 3, user: 'Mike Johnson', action: 'Drafted proposal - BigCo', time: '1 hr ago' },
  { id: 4, user: 'Sarah Wilson', action: 'Approved - Enterprise Inc', time: '2 hrs ago' },
]

const userFlowSteps = [
  { step: 'Step 1', title: 'Account Setup', status: 'completed', users: 156 },
  { step: 'Step 2', title: 'Profile Setup', status: 'completed', users: 142 },
  { step: 'Step 3', title: 'Skill Inventory', status: 'in_progress', users: 128 },
  { step: 'Step 4', title: 'First Proposal', status: 'pending', users: 89 },
]

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      {/* Page Header */}
      <div>
        <h1 className="text-xl font-semibold text-foreground">Application Tracking</h1>
        <p className="text-sm text-muted-foreground">Track your job applications and proposals</p>
      </div>

      {/* Metrics Grid */}
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

      {/* Application Status */}
      <UCard>
        <UCardHeader className="py-3">
          <UCardTitle className="text-base font-semibold">Application Pipeline</UCardTitle>
        </UCardHeader>
        <UCardContent>
          <div className="flex gap-2 overflow-x-auto">
            {applicationStatus.map((status) => (
              <div
                key={status.label}
                className={cn(
                  'flex flex-col items-center justify-center p-3 min-w-[80px]',
                  status.color
                )}
              >
                <span className="text-2xl font-bold text-foreground">{status.count}</span>
                <span className="text-xs text-muted-foreground">{status.label}</span>
              </div>
            ))}
          </div>
        </UCardContent>
      </UCard>

      <div className="grid gap-3 md:grid-cols-2">
        {/* Recent Activity */}
        <UCard>
          <UCardHeader className="py-3">
            <UCardTitle className="text-base font-semibold">Recent Activity</UCardTitle>
          </UCardHeader>
          <UCardContent className="py-1">
            <div className="space-y-2">
              {recentActivity.map((activity) => (
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

        {/* User Flow */}
        <UCard>
          <UCardHeader className="py-3">
            <UCardTitle className="text-base font-semibold">User Flow - Account Setup</UCardTitle>
          </UCardHeader>
          <UCardContent className="py-1">
            <div className="space-y-2">
              {userFlowSteps.map((flow) => (
                <div key={flow.step} className="flex items-center gap-3 py-2">
                  <div
                    className={cn(
                      'min-w-8 h-8 px-2 flex items-center justify-center text-xs font-medium',
                      flow.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : flow.status === 'in_progress'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-muted text-muted-foreground'
                    )}
                  >
                    {flow.step}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{flow.title}</p>
                    <p className="text-xs text-muted-foreground capitalize">
                      {flow.status.replace('_', ' ')}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">{flow.users} users</span>
                </div>
              ))}
            </div>
          </UCardContent>
        </UCard>
      </div>

      {/* User Profile Setup Details */}
      <UCard>
        <UCardHeader className="py-3">
          <UCardTitle className="text-base font-semibold">4.1 User Profile Setup</UCardTitle>
        </UCardHeader>
        <UCardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: 'Skill Inventory', value: '89%', status: 'complete' },
              { label: 'Experience Summary', value: '76%', status: 'complete' },
              { label: 'Portfolio Links', value: '45%', status: 'partial' },
              { label: 'Preferred Rates', value: '92%', status: 'complete' },
              { label: 'Past Proposals', value: '12', status: 'optional' },
            ].map((item) => (
              <div key={item.label} className="p-3 bg-muted/50">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-lg font-semibold text-foreground">{item.value}</p>
                <p
                  className={cn(
                    'text-xs capitalize',
                    item.status === 'complete'
                      ? 'text-green-600'
                      : item.status === 'partial'
                        ? 'text-amber-600'
                        : 'text-muted-foreground'
                  )}
                >
                  {item.status}
                </p>
              </div>
            ))}
          </div>
        </UCardContent>
      </UCard>
    </div>
  )
}
