'use client'

import { UCard, UCardContent, UCardHeader, UCardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Proposal } from './types'

interface ProposalListSectionProps {
  proposals: Proposal[]
  selectedProposal: Proposal | null
  onSelect: (proposal: Proposal) => void
}

const statusColors: Record<string, string> = {
  Drafted: 'bg-muted text-muted-foreground',
  Submitted: 'bg-amber-100 text-amber-700',
  Approved: 'bg-blue-100 text-blue-700',
  Won: 'bg-green-100 text-green-700',
  Lost: 'bg-red-100 text-red-700',
}

export function ProposalListSection({
  proposals,
  selectedProposal,
  onSelect,
}: ProposalListSectionProps) {
  return (
    <UCard className="lg:col-span-1">
      <UCardHeader className="py-3">
        <UCardTitle className="text-base font-semibold">Proposals ({proposals.length})</UCardTitle>
      </UCardHeader>
      <UCardContent className="py-1">
        <div className="space-y-2">
          {proposals.map((proposal) => (
            <div
              key={proposal.id}
              onClick={() => onSelect(proposal)}
              className={cn(
                'p-3 cursor-pointer transition-colors',
                selectedProposal?.id === proposal.id
                  ? 'bg-primary/10 border border-primary'
                  : 'bg-muted/50 hover:bg-muted'
              )}
            >
              <p className="text-sm font-medium text-foreground">{proposal.jobTitle}</p>
              <p className="text-xs text-muted-foreground">{proposal.client}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs font-medium text-foreground">{proposal.budget}</span>
                <span className={cn('px-2 py-0.5 text-xs', statusColors[proposal.status])}>
                  {proposal.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </UCardContent>
    </UCard>
  )
}
