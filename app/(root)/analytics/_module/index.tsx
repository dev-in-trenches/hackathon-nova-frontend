'use client'

import { UCard, UCardContent, UCardHeader, UCardTitle } from '@/components/ui/card'
import { DataTable, Column } from '@/components/shared/table'

const analyticsData = {
  winRate: { current: 32, previous: 27 },
  avgTime: { current: '2.4h', previous: '3.2h' },
  editPercentage: { current: 18, previous: 21 },
  revenue: { current: 45000, previous: 36800 },
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

type BidStrategy = (typeof analyticsData.bidStrategyStats)[0]

const columns: Column<BidStrategy>[] = [
  {
    key: 'strategy',
    header: 'Strategy',
    width: '150px',
    render: (row) => <p className="font-medium">{row.strategy}</p>,
  },
  {
    key: 'winRate',
    header: 'Win Rate',
    width: '120px',
    render: (row) => <p>{row.winRate}%</p>,
  },
  {
    key: 'avgBid',
    header: 'Avg Bid',
    width: '120px',
    render: (row) => <p>{row.strategy === 'Hourly' ? `$${row.avgBid}/hr` : `$${row.avgBid}`}</p>,
  },
  {
    key: 'count',
    header: 'Proposals',
    width: '120px',
    render: (row) => <p>{row.count}</p>,
  },
]

export default function AnalyticsPage() {
  const revenueChange = (
    ((analyticsData.revenue.current - analyticsData.revenue.previous) /
      analyticsData.revenue.previous) *
    100
  ).toFixed(0)

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Performance Analytics</h1>
        <p className="text-sm text-muted-foreground">Data-driven insights to measure your ROI</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <UCard>
          <UCardHeader className="py-3">
            <UCardTitle className="text-sm font-medium text-muted-foreground">Win Rate</UCardTitle>
          </UCardHeader>
          <UCardContent>
            <div className="text-3xl font-bold text-foreground">
              {analyticsData.winRate.current}%
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-green-600">
                +{analyticsData.winRate.current - analyticsData.winRate.previous}%
              </span>{' '}
              vs last period
            </p>
          </UCardContent>
        </UCard>
        <UCard>
          <UCardHeader className="py-3">
            <UCardTitle className="text-sm font-medium text-muted-foreground">
              Generation Efficiency
            </UCardTitle>
          </UCardHeader>
          <UCardContent>
            <div className="text-3xl font-bold text-foreground">
              {analyticsData.avgTime.current}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-green-600">-30min</span> avg from job detected to proposal
              approved
            </p>
          </UCardContent>
        </UCard>
        <UCard>
          <UCardHeader className="py-3">
            <UCardTitle className="text-sm font-medium text-muted-foreground">
              AI Alignment
            </UCardTitle>
          </UCardHeader>
          <UCardContent>
            <div className="text-3xl font-bold text-foreground">
              {100 - analyticsData.editPercentage.current}%
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-green-600">
                -{analyticsData.editPercentage.current - analyticsData.editPercentage.previous}%
              </span>{' '}
              human edits
            </p>
          </UCardContent>
        </UCard>
        <UCard>
          <UCardHeader className="py-3">
            <UCardTitle className="text-sm font-medium text-muted-foreground">
              Revenue Impact
            </UCardTitle>
          </UCardHeader>
          <UCardContent>
            <div className="text-3xl font-bold text-foreground">
              ${analyticsData.revenue.current.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-green-600">+{revenueChange}%</span> vs last period
            </p>
          </UCardContent>
        </UCard>
      </div>

      {/* Weekly Chart */}
      <UCard>
        <UCardHeader className="py-3">
          <UCardTitle className="text-base font-semibold">Weekly Performance</UCardTitle>
        </UCardHeader>
        <UCardContent>
          <div className="h-48 flex items-end gap-4">
            {analyticsData.weeklyStats.map((stat) => (
              <div key={stat.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex gap-1 h-32 items-end">
                  <div
                    className="flex-1 bg-primary/30"
                    style={{ height: `${(stat.submitted / 10) * 100}%` }}
                  />
                  <div
                    className="flex-1 bg-green-500"
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
              <div className="w-3 h-3 bg-green-500" />
              <span className="text-xs text-muted-foreground">Won</span>
            </div>
          </div>
        </UCardContent>
      </UCard>

      {/* Bid Strategy Performance */}
      <UCard>
        <UCardHeader className="py-3">
          <UCardTitle className="text-base font-semibold">Bid Strategy Performance</UCardTitle>
        </UCardHeader>
        <UCardContent>
          <DataTable
            data={analyticsData.bidStrategyStats}
            columns={columns}
            getRowId={(row) => row.id}
          />
        </UCardContent>
      </UCard>
    </div>
  )
}
