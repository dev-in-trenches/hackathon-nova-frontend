'use client'

import { useState } from 'react'
import { ProposalListSection } from './proposal-list-section'
import { ProposalEditorSection } from './proposal-editor-section'
import { Proposal } from './types'
import { PageHeading } from '@/components/shared/page-heading'
import { proposals } from './data'

export default function ProposalsPage() {
  const [proposalsData, setProposalsData] = useState(proposals)
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null)
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
      <PageHeading title="Proposal Editor" description="Review and refine AI-generated proposals" />

      <div className="grid gap-4 lg:grid-cols-3">
        <ProposalListSection
          proposals={proposalsData}
          selectedProposal={selectedProposal}
          onSelect={(proposal) => {
            setSelectedProposal(proposal)
            setEditingSection(null)
          }}
        />

        <ProposalEditorSection
          proposal={selectedProposal}
          editingSection={editingSection}
          editedContent={editedContent}
          onEditSection={handleEditSection}
          onSaveSection={handleSaveSection}
          onCancelEdit={() => setEditingSection(null)}
          onContentChange={setEditedContent}
          onDelete={() => handleDeleteProposal(selectedProposal?.id || 0)}
        />
      </div>
    </div>
  )
}
