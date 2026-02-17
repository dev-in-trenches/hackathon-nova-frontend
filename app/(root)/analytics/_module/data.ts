export const analyticsData = {
  weeklyStats: [
    { day: 'Mon', submitted: 5, won: 1 },
    { day: 'Tue', submitted: 3, won: 2 },
    { day: 'Wed', submitted: 7, won: 1 },
    { day: 'Thu', submitted: 4, won: 0 },
    { day: 'Fri', submitted: 6, won: 2 },
    { day: 'Sat', submitted: 2, won: 1 },
    { day: 'Sun', submitted: 1, won: 0 },
  ],
  monthlyStats: [
    { day: 'Week 1', submitted: 12, won: 4 },
    { day: 'Week 2', submitted: 15, won: 5 },
    { day: 'Week 3', submitted: 8, won: 2 },
    { day: 'Week 4', submitted: 18, won: 6 },
  ],
  yearlyStats: [
    { day: 'Jan', submitted: 45, won: 12 },
    { day: 'Feb', submitted: 52, won: 15 },
    { day: 'Mar', submitted: 48, won: 14 },
    { day: 'Apr', submitted: 61, won: 18 },
    { day: 'May', submitted: 55, won: 16 },
    { day: 'Jun', submitted: 67, won: 20 },
    { day: 'Jul', submitted: 72, won: 22 },
    { day: 'Aug', submitted: 68, won: 21 },
    { day: 'Sep', submitted: 74, won: 24 },
    { day: 'Oct', submitted: 81, won: 28 },
    { day: 'Nov', submitted: 76, won: 25 },
    { day: 'Dec', submitted: 58, won: 18 },
  ],
  bidStrategyStats: [
    { id: '1', strategy: 'Fixed Price', winRate: 38, avgBid: 4500, count: 24 },
    { id: '2', strategy: 'Hourly', winRate: 28, avgBid: 85, count: 18 },
    { id: '3', strategy: 'Negotiable', winRate: 22, avgBid: 3200, count: 12 },
  ],
}

export const metrics = [
  { label: 'Win Rate', value: '32%', change: '+5%', trend: 'up' as const },
  { label: 'Avg Proposal Time', value: '2.4h', change: '-12%', trend: 'up' as const },
  { label: 'Edit Percentage', value: '18%', change: '-3%', trend: 'up' as const },
  { label: 'Revenue Impact', value: '$45K', change: '+22%', trend: 'up' as const },
]
