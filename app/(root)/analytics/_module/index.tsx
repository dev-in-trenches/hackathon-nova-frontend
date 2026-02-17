import { MetricsSection } from './metrics-section'
import { WeeklyChartSection } from './weekly-chart-section'
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

      <WeeklyChartSection stats={analyticsData.weeklyStats} />

      <BidStrategyTable data={analyticsData.bidStrategyStats} />
    </div>
  )
}
