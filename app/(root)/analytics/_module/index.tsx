'use client'

import { MetricsSection } from './metrics-section'
import { WeeklyChartSection } from './weekly-chart-section'
import { BidStrategyTable } from './bid-strategy-table'
import { PageHeading } from '@/components/shared/page-heading'

const analyticsData = {
  weeklyStats: [
    { day: 'Mon', submitted: 5, won: 1 },
    { day: 'Tue', submitted: 3, won: 2 },
    { day: 'Wed', submitted: 7, won: 1 },
    { day: 'Thu', submitted: 4, won: 0 },
    { day: 'Fri', submitted: 6, won: 2 },
    { day: 'Sat', submitted: 2, won: 1 },
    { day: 'Sun', submitted: 1, won: 0 },
  ],
  bidStrategyStats: [
    { id: '1', strategy: 'Fixed Price', winRate: 38, avgBid: 4500, count: 24 },
    { id: '2', strategy: 'Hourly', winRate: 28, avgBid: 85, count: 18 },
    { id: '3', strategy: 'Negotiable', winRate: 22, avgBid: 3200, count: 12 },
  ],
}

const metrics = [
  { label: 'Win Rate', value: '32%', change: '+5%', trend: 'up' as const },
  { label: 'Avg Proposal Time', value: '2.4h', change: '-12%', trend: 'up' as const },
  { label: 'Edit Percentage', value: '18%', change: '-3%', trend: 'up' as const },
  { label: 'Revenue Impact', value: '$45K', change: '+22%', trend: 'up' as const },
]

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
