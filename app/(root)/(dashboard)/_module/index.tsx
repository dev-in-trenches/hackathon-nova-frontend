import { UCard, UCardContent, UCardHeader, UCardTitle } from '@/components/ui/card'
import { MetricsSection } from './metrics-section'
import { PipelineSection } from './pipeline-section'
import { RecentActivitySection } from './recent-activity-section'
import { PageHeading } from '@/components/shared/page-heading'
import { cn } from '@/lib/utils'
import { applicationStatus, metrics, recentActivity, userFlowSteps, userProfileSetup } from './data'

export default function Index() {
  return (
    <div className="space-y-4">
      <PageHeading
        title="Dashboard Overview"
        description="Track your job applications and proposals"
      />

      <MetricsSection metrics={metrics} />

      <PipelineSection status={applicationStatus} />

      <div className="grid gap-3 md:grid-cols-2">
        <RecentActivitySection activities={recentActivity} />

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
          <UCardTitle className="text-base font-semibold">User Profile Setup</UCardTitle>
        </UCardHeader>
        <UCardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {userProfileSetup.map((item) => (
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
