export const applicationStatus = [
  { label: 'Drafted', count: 12, color: 'bg-muted' },
  { label: 'Approved', count: 8, color: 'bg-blue-50/50' },
  { label: 'Submitted', count: 24, color: 'bg-amber-50/50' },
  { label: 'Interviewed', count: 15, color: 'bg-purple-50/50' },
  { label: 'Won', count: 6, color: 'bg-green-50/50' },
  { label: 'Lost', count: 9, color: 'bg-red-50/50' },
]

export const jobs = [
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

export const statusOptions = ['Drafted', 'Approved', 'Submitted', 'Interviewed', 'Won', 'Lost']

export type Job = (typeof jobs)[0]
