'use client'

import { UCard, UCardContent, UCardHeader, UCardTitle } from '@/components/ui/card'
import { DataTable, Column } from '@/components/shared/table'

interface BidStrategyStats {
  id: string
  strategy: string
  winRate: number
  avgBid: number
  count: number
}

interface BidStrategyTableProps {
  data: BidStrategyStats[]
}

export function BidStrategyTable({ data }: BidStrategyTableProps) {
  const columns: Column<BidStrategyStats>[] = [
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

  return (
    <UCard>
      <UCardHeader className="py-3">
        <UCardTitle className="text-base font-semibold">Bid Strategy Performance</UCardTitle>
      </UCardHeader>
      <UCardContent>
        <DataTable data={data} columns={columns} getRowId={(row) => row.id} />
      </UCardContent>
    </UCard>
  )
}
