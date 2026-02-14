export interface Proposal {
  id: number
  jobTitle: string
  client: string
  budget: string
  status: string
  createdAt: string
  sections: Record<string, string>
}
