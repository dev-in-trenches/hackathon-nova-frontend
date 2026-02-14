'use client'

import { useState } from 'react'
import { UCard, UCardContent, UCardHeader, UCardTitle } from '@/components/ui/card'
import { UButton } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const proposals = [
  {
    id: 1,
    jobTitle: 'Full Stack Developer - TechCorp',
    client: 'TechCorp Inc.',
    budget: '$5,000',
    status: 'Drafted',
    createdAt: '2026-02-14',
    sections: {
      hook: 'I specialize in building scalable SaaS platforms that drive business growth.',
      problem: 'TechCorp needs to modernize their legacy system to improve efficiency.',
      approach: "I'll develop a modern React frontend with Node.js backend, ensuring scalability.",
      cta: "Let's discuss how I can help TechCorp achieve its goals.",
    },
  },
  {
    id: 2,
    jobTitle: 'React Native Developer - StartupXYZ',
    client: 'StartupXYZ',
    budget: '$3,500',
    status: 'Submitted',
    createdAt: '2026-02-13',
    sections: {
      hook: "I've delivered 15+ mobile apps with 4.8+ star ratings.",
      problem: 'StartupXYZ needs a cross-platform mobile app to reach more users.',
      approach: "I'll build a performant React Native app with smooth animations.",
      cta: 'Ready to start your project today!',
    },
  },
  {
    id: 3,
    jobTitle: 'Backend Engineer - Enterprise Inc',
    client: 'Enterprise Inc',
    budget: '$8,000',
    status: 'Approved',
    createdAt: '2026-02-12',
    sections: {
      hook: '10+ years building enterprise-grade backend systems.',
      problem: 'Enterprise Inc needs a scalable API infrastructure.',
      approach: "I'll design and implement a microservices architecture using Python and AWS.",
      cta: "Let's schedule a call to discuss your requirements.",
    },
  },
  {
    id: 4,
    title: 'UI/UX Designer - Creative Agency',
    client: 'Creative Agency',
    budget: '$2,500',
    status: 'Won',
    createdAt: '2026-02-10',
    sections: {
      hook: 'Award-winning designer with a passion for creating beautiful experiences.',
      problem: 'Creative Agency needs a fresh brand identity.',
      approach: "I'll create a comprehensive design system with modern aesthetics.",
      cta: "Let's bring your vision to life!",
    },
  },
]

const statusColors: Record<string, string> = {
  Drafted: 'bg-muted text-muted-foreground',
  Submitted: 'bg-amber-100 text-amber-700',
  Approved: 'bg-blue-100 text-blue-700',
  Won: 'bg-green-100 text-green-700',
  Lost: 'bg-red-100 text-red-700',
}

export default function ProposalsPage() {
  const [proposalsData, setProposalsData] = useState(proposals)
  const [selectedProposal, setSelectedProposal] = useState<(typeof proposals)[0] | null>(null)
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [editedContent, setEditedContent] = useState('')

  const handleEditSection = (section: string, content: string) => {
    setEditingSection(section)
    setEditedContent(content)
  }

  const handleSaveSection = () => {
    if (selectedProposal && editingSection) {
      const updatedProposals = proposalsData.map((p) =>
        p.id === selectedProposal.id
          ? { ...p, sections: { ...p.sections, [editingSection]: editedContent } }
          : p
      )
      setProposalsData(updatedProposals)
      setSelectedProposal({
        ...selectedProposal,
        sections: { ...selectedProposal.sections, [editingSection]: editedContent },
      })
      setEditingSection(null)
      setEditedContent('')
    }
  }

  const handleDeleteProposal = (id: number) => {
    setProposalsData(proposalsData.filter((p) => p.id !== id))
    if (selectedProposal?.id === id) {
      setSelectedProposal(null)
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Proposal Editor</h1>
        <p className="text-sm text-muted-foreground">Review and refine AI-generated proposals</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Proposal List */}
        <UCard className="lg:col-span-1">
          <UCardHeader className="py-3">
            <UCardTitle className="text-base font-semibold">
              Proposals ({proposalsData.length})
            </UCardTitle>
          </UCardHeader>
          <UCardContent className="py-1">
            <div className="space-y-2">
              {proposalsData.map((proposal) => (
                <div
                  key={proposal.id}
                  onClick={() => {
                    setSelectedProposal(proposal)
                    setEditingSection(null)
                  }}
                  className={cn(
                    'p-3 cursor-pointer transition-colors',
                    selectedProposal?.id === proposal.id
                      ? 'bg-primary/10 border border-primary'
                      : 'bg-muted/50 hover:bg-muted'
                  )}
                >
                  <p className="text-sm font-medium text-foreground">
                    {proposal.jobTitle || proposal.title}
                  </p>
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

        {/* Proposal Editor */}
        <UCard className="lg:col-span-2">
          <UCardHeader className="py-3 flex flex-row items-center justify-between">
            <UCardTitle className="text-base font-semibold">
              {selectedProposal
                ? selectedProposal.jobTitle || selectedProposal.title
                : 'Select a proposal'}
            </UCardTitle>
            {selectedProposal && (
              <div className="flex gap-2">
                <UButton size="sm" variant="outline">
                  Shorten
                </UButton>
                <UButton size="sm" variant="outline">
                  More Technical
                </UButton>
                <UButton size="sm" variant="outline">
                  Change Tone
                </UButton>
              </div>
            )}
          </UCardHeader>
          <UCardContent>
            {selectedProposal ? (
              <div className="space-y-4">
                {Object.entries(selectedProposal.sections).map(([section, content]) => (
                  <div key={section} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-foreground capitalize">
                        {section}
                      </label>
                      <UButton
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEditSection(section, content)}
                      >
                        Edit
                      </UButton>
                    </div>
                    {editingSection === section ? (
                      <div className="space-y-2">
                        <textarea
                          value={editedContent}
                          onChange={(e) => setEditedContent(e.target.value)}
                          className="w-full min-h-[80px] p-2 text-sm bg-muted border"
                        />
                        <div className="flex gap-2">
                          <UButton size="sm" onClick={handleSaveSection}>
                            Save
                          </UButton>
                          <UButton
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingSection(null)}
                          >
                            Cancel
                          </UButton>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground p-2 bg-muted/50">{content}</p>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-foreground">Bid Amount</label>
                      <p className="text-lg font-bold text-foreground">{selectedProposal.budget}</p>
                    </div>
                    <div className="flex gap-2">
                      <UButton
                        variant="outline"
                        onClick={() => handleDeleteProposal(selectedProposal.id)}
                      >
                        Delete
                      </UButton>
                      <UButton variant="outline">Approve</UButton>
                      <UButton>Submit</UButton>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Select a proposal from the list to edit
              </p>
            )}
          </UCardContent>
        </UCard>
      </div>
    </div>
  )
}
