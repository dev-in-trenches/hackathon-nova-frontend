'use client'

import { UCard, UCardContent, UCardHeader, UCardTitle } from '@/components/ui/card'
import { UButton } from '@/components/ui/button'
import { Proposal } from './types'

interface ProposalEditorSectionProps {
  proposal: Proposal | null
  editingSection: string | null
  editedContent: string
  onEditSection: (section: string, content: string) => void
  onSaveSection: () => void
  onCancelEdit: () => void
  onContentChange: (content: string) => void
  onDelete: () => void
}

export function ProposalEditorSection({
  proposal,
  editingSection,
  editedContent,
  onEditSection,
  onSaveSection,
  onCancelEdit,
  onContentChange,
  onDelete,
}: ProposalEditorSectionProps) {
  if (!proposal) {
    return (
      <UCard className="lg:col-span-2">
        <UCardContent className="flex items-center justify-center h-64">
          <p className="text-sm text-muted-foreground">Select a proposal from the list to edit</p>
        </UCardContent>
      </UCard>
    )
  }

  return (
    <UCard className="lg:col-span-2">
      <UCardHeader className="py-3 flex flex-row items-center justify-between">
        <UCardTitle className="text-base font-semibold">{proposal.jobTitle}</UCardTitle>
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
      </UCardHeader>
      <UCardContent>
        <div className="space-y-4">
          {Object.entries(proposal.sections).map(([section, content]) => (
            <div key={section} className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground capitalize">{section}</label>
                <UButton size="sm" variant="ghost" onClick={() => onEditSection(section, content)}>
                  Edit
                </UButton>
              </div>
              {editingSection === section ? (
                <div className="space-y-2">
                  <textarea
                    value={editedContent}
                    onChange={(e) => onContentChange(e.target.value)}
                    className="w-full min-h-[80px] p-2 text-sm bg-muted border"
                  />
                  <div className="flex gap-2">
                    <UButton size="sm" onClick={onSaveSection}>
                      Save
                    </UButton>
                    <UButton size="sm" variant="outline" onClick={onCancelEdit}>
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
                <p className="text-lg font-bold text-foreground">{proposal.budget}</p>
              </div>
              <div className="flex gap-2">
                <UButton variant="outline" onClick={onDelete}>
                  Delete
                </UButton>
                <UButton variant="outline">Approve</UButton>
                <UButton>Submit</UButton>
              </div>
            </div>
          </div>
        </div>
      </UCardContent>
    </UCard>
  )
}
