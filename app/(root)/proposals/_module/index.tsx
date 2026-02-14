'use client'

import { useState } from 'react'
import { ProposalListSection } from './proposal-list-section'
import { ProposalEditorSection } from './proposal-editor-section'
import { Proposal } from './types'
import { PageHeading } from '@/components/shared/page-heading'

const proposals: Proposal[] = [
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
    jobTitle: 'UI/UX Designer - Creative Agency',
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
