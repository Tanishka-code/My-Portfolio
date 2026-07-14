export type Project = {
  title: string
  description: string
  details: string[]
  role: string
  linkLabel: string
  href: string
}

export const projects: Project[] = [
  {
    title: 'InterviewPrep Suite',
    description: 'A polished learning dashboard that combines algorithm practice, progress tracking, and interview-ready flashcards in one sleek experience.',
    details: ['React', 'TypeScript', 'Tailwind CSS', 'Local storage sync'],
    role: 'Lead frontend engineer',
    linkLabel: 'View case study',
    href: '#',
  },
  {
    title: 'Hackathon Launchpad',
    description: 'Rapid MVP launcher for hackathon teams with onboarding flows, analytics, and responsive dashboard modules.',
    details: ['React', 'Vite', 'Framer Motion', 'API integration'],
    role: 'Product-focused prototype',
    linkLabel: 'View summary',
    href: '#',
  },
  {
    title: 'Design System Hub',
    description: 'A component library and documentation site built for consistent design delivery and developer productivity.',
    details: ['Atomic components', 'Dark mode', 'Accessibility-first'],
    role: 'UI engineering',
    linkLabel: 'View details',
    href: '#',
  },
]
