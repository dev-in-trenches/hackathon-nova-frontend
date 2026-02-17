export const applicationStatus = [
  { label: 'Drafted', count: 12, color: 'bg-muted' },
  { label: 'Approved', count: 8, color: 'bg-blue-50/50' },
  { label: 'Submitted', count: 24, color: 'bg-amber-50/50' },
  { label: 'Interviewed', count: 15, color: 'bg-purple-50/50' },
  { label: 'Won', count: 6, color: 'bg-green-50/50' },
  { label: 'Lost', count: 9, color: 'bg-red-50/50' },
]

export const metrics = [
  { label: 'Win Rate', value: '32%', change: '+5%', trend: 'up' as const },
  { label: 'Avg Proposal Time', value: '2.4h', change: '-12%', trend: 'up' as const },
  { label: 'Edit Percentage', value: '18%', change: '-3%', trend: 'up' as const },
  { label: 'Revenue Impact', value: '$45K', change: '+22%', trend: 'up' as const },
]

export const recentActivity = [
  { id: 1, user: 'John Doe', action: 'Submitted proposal - TechCorp', time: '2 min ago' },
  { id: 2, user: 'Jane Smith', action: 'Won interview - StartupXYZ', time: '15 min ago' },
  { id: 3, user: 'Mike Johnson', action: 'Drafted proposal - BigCo', time: '1 hr ago' },
  { id: 4, user: 'Sarah Wilson', action: 'Approved - Enterprise Inc', time: '2 hrs ago' },
]

export const userFlowSteps = [
  { step: 'Step 1', title: 'Account Setup', status: 'completed', users: 156 },
  { step: 'Step 2', title: 'Profile Setup', status: 'completed', users: 142 },
  { step: 'Step 3', title: 'Skill Inventory', status: 'in_progress', users: 128 },
  { step: 'Step 4', title: 'First Proposal', status: 'pending', users: 89 },
]

export const userProfileSetup = [
  { label: 'Skill Inventory', value: '89%', status: 'complete' },
  { label: 'Experience Summary', value: '76%', status: 'complete' },
  { label: 'Portfolio Links', value: '45%', status: 'partial' },
  { label: 'Preferred Rates', value: '92%', status: 'complete' },
  { label: 'Past Proposals', value: '12', status: 'optional' },
]
