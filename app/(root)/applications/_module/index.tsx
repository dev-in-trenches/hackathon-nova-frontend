'use client'

import { useState } from 'react'
import { UCard, UCardContent, UCardHeader, UCardTitle } from '@/components/ui/card'
import { DataTable, Column } from '@/components/shared/table'
import { PipelineSection } from './pipeline-section'
import { SearchFilterSection } from './search-filter-section'
import { PageHeading } from '@/components/shared/page-heading'
import { cn } from '@/lib/utils'
import { USelect, USelectContent, USelectItem, USelectTrigger, USelectValue } from '@/components/ui'
import { applicationStatus, jobs, statusOptions, type Job } from './data'

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
      <USelect value={row.status}>
        <USelectTrigger>
          <USelectValue placeholder="Select an option" />
        </USelectTrigger>
        <USelectContent>
          {statusOptions.map((status) => (
            <USelectItem key={status} value={status}>
              {status}
            </USelectItem>
          ))}
        </USelectContent>
      </USelect>
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
