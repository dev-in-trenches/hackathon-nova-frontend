'use client'

import { useState } from 'react'
import { UCard, UCardContent, UCardHeader, UCardTitle } from '@/components/ui/card'
import { DataTable, Column } from '@/components/shared/table'
import { PipelineSection } from './pipeline-section'
import { SearchFilterSection } from './search-filter-section'
import { PageHeading } from '@/components/shared/page-heading'
import { cn } from '@/lib/utils'

const applicationStatus = [
  { label: 'Drafted', count: 12, color: 'bg-muted' },
  { label: 'Approved', count: 8, color: 'bg-blue-50/50' },
  { label: 'Submitted', count: 24, color: 'bg-amber-50/50' },
  { label: 'Interviewed', count: 15, color: 'bg-purple-50/50' },
  { label: 'Won', count: 6, color: 'bg-green-50/50' },
  { label: 'Lost', count: 9, color: 'bg-red-50/50' },
]

const jobs = [
  {
    id: '1',
    title: 'Full Stack Developer - TechCorp',
    client: 'TechCorp Inc.',
    budget: '$5,000',
    status: 'Drafted',
    date: '2026-02-14',
    description: 'Looking for an experienced full-stack developer to build a SaaS platform...',
  },
  {
    id: '2',
    title: 'React Native Developer - StartupXYZ',
    client: 'StartupXYZ',
    budget: '$3,500',
    status: 'Submitted',
    date: '2026-02-13',
    description: 'Need a mobile developer for iOS and Android app development...',
  },
  {
    id: '3',
    title: 'Backend Engineer - Enterprise Inc',
    client: 'Enterprise Inc',
    budget: '$8,000',
    status: 'Interviewed',
    date: '2026-02-12',
    description: 'Seeking a backend engineer with Python and AWS experience...',
  },
  {
    id: '4',
    title: 'UI/UX Designer - Creative Agency',
    client: 'Creative Agency',
    budget: '$2,500',
    status: 'Won',
    date: '2026-02-10',
    description: 'Looking for a designer to create a modern brand identity...',
  },
  {
    id: '5',
    title: 'DevOps Engineer - CloudTech',
    client: 'CloudTech',
    budget: '$6,000',
    status: 'Lost',
    date: '2026-02-08',
    description: 'Need DevOps expertise for CI/CD pipeline setup...',
  },
  {
    id: '6',
    title: 'Mobile App Developer - FinTech Co',
    client: 'FinTech Co',
    budget: '$7,500',
    status: 'Approved',
    date: '2026-02-07',
    description: 'Building a financial planning mobile application...',
  },
]

const statusOptions = ['Drafted', 'Approved', 'Submitted', 'Interviewed', 'Won', 'Lost']

type Job = (typeof jobs)[0]

const columns: Column<Job>[] = [
  {
    key: 'title',
    header: 'Job Title',
    width: '200px',
    render: (row) => <p className="font-medium">{row.title}</p>,
  },
  {
    key: 'client',
    header: 'Client',
    width: '150px',
    render: (row) => <p>{row.client}</p>,
  },
  {
    key: 'budget',
    header: 'Budget',
    width: '100px',
    render: (row) => <p>{row.budget}</p>,
  },
  {
    key: 'status',
    header: 'Status',
    width: '120px',
    render: (row) => (
      <span
        className={cn(
          'px-2 py-1 text-xs',
          row.status === 'Won' && 'bg-green-100 text-green-700',
          row.status === 'Lost' && 'bg-red-100 text-red-700',
          row.status === 'Drafted' && 'bg-muted text-muted-foreground',
          row.status === 'Submitted' && 'bg-amber-100 text-amber-700',
          row.status === 'Interviewed' && 'bg-purple-100 text-purple-700',
          row.status === 'Approved' && 'bg-blue-100 text-blue-700'
        )}
      >
        {row.status}
      </span>
    ),
  },
  {
    key: 'date',
    header: 'Date',
    width: '100px',
    render: (row) => <p>{row.date}</p>,
  },
  {
    key: 'action',
    header: '',
    width: '120px',
    render: (row) => (
      <select
        value={row.status}
        onChange={() => {}}
        className="h-8 px-2 text-sm bg-background border"
      >
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    ),
  },
]

export default function ApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.client.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus ? job.status === selectedStatus : true
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      <PageHeading
        title="Application Tracking"
        description="Manage your job applications pipeline"
      />

      <PipelineSection
        status={applicationStatus}
        selectedStatus={selectedStatus}
        onStatusClick={setSelectedStatus}
      />

      <SearchFilterSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onClear={() => {
          setSearchQuery('')
          setSelectedStatus(null)
        }}
        placeholder="Search jobs..."
      />

      <UCard>
        <UCardHeader className="py-3">
          <UCardTitle className="text-base font-semibold">
            Job History ({filteredJobs.length})
          </UCardTitle>
        </UCardHeader>
        <UCardContent>
          <DataTable data={filteredJobs} columns={columns} getRowId={(row) => row.id} />
        </UCardContent>
      </UCard>
    </div>
  )
}
