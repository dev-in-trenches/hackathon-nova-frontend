import { MetricsSection } from './metrics-section'
import { PerformanceSection } from './performance-section'
import { BidStrategyTable } from './bid-strategy-table'
import { PageHeading } from '@/components/shared/page-heading'
import { analyticsData, metrics } from './data'

export default function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <PageHeading
        title="Performance Analytics"
        description="Data-driven insights to measure your ROI"
      />

      <MetricsSection metrics={metrics} />

      <PerformanceSection
        weeklyStats={analyticsData.weeklyStats}
        monthlyStats={analyticsData.monthlyStats}
        yearlyStats={analyticsData.yearlyStats}
      />

      <BidStrategyTable data={analyticsData.bidStrategyStats} />
    </div>
  )
}
