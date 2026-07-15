export type Project = {
  title: string
  imageLabel: string
  problem: string
  solution: string
  details: string
  features: string[]
  stack: string[]
  githubUrl: string
  demoUrl: string
}

export const featuredProjects: Project[] = [
  {
    title: 'College Discovery Platform',
    imageLabel: 'Campus AI',
    problem: 'Students struggle to compare programs, culture, and career prospects across colleges.',
    solution:
      'A smart discovery platform that matches students to institutions based on preferences, budgets, and long-term goals.',
    details:
      'Designed to help future engineers explore colleges, compare departments, and discover opportunities through intuitive search and personalized recommendations.',
    features: ['Personalized filters', 'Program comparison', 'Scholarship insights', 'Campus profiles'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/Tanishka-code/college-discovery-platform',
    demoUrl: '#',
  },
  {
    title: 'Smart Route Optimizer',
    imageLabel: 'Map AI',
    problem: 'Delivery and travel planning often use inefficient routes and miss dynamic traffic conditions.',
    solution:
      'An optimizer that computes efficient routes, adapts to real-time conditions, and minimizes travel time using data-driven logic.',
    details:
      'Built to support smarter route planning with an emphasis on flexible inputs, performance, and clean presentation for logistics and travel cases.',
    features: ['Traffic-aware paths', 'Multi-stop planning', 'ETA accuracy', 'User-friendly map view'],
    stack: ['React', 'Vite', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/Tanishka-code/smart-route-optimizer',
    demoUrl: '#',
  },
  {
    title: 'Spotify Clone',
    imageLabel: 'Music UI',
    problem: 'Streaming app prototypes rarely balance polished UI with responsive playback controls for learning purposes.',
    solution:
      'A music streaming interface that mimics modern audio experiences with crisp interactions, playlist flows, and rich UI polish.',
    details:
      'Focused on building a premium-feeling playback interface, clear navigation, and responsive media sections for a realistic music platform prototype.',
    features: ['Playlist browsing', 'Playback controls', 'Responsive music cards', 'Animated transitions'],
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Firebase'],
    githubUrl: 'https://github.com/Tanishka-code/spotify-clone',
    demoUrl: '#',
  },
  {
    title: 'Portfolio Builder',
    imageLabel: 'Design Studio',
    problem: 'Developers need a fast way to create a polished portfolio without sacrificing customization.',
    solution:
      'A portfolio generator that helps users assemble elegant pages from reusable components, while staying lightweight and easy to update.',
    details:
      'Built as a developer-first portfolio scaffold with strong UX, responsive themes, and easy content management for early-career engineers.',
    features: ['Customizable sections', 'Responsive templates', 'Live preview', 'Export-ready output'],
    stack: ['React', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/Tanishka-code/portfolio-builder',
    demoUrl: '#',
  },
]

export const otherProjects: Project[] = [
  {
    title: 'InterviewPrep Suite',
    imageLabel: 'Learning Lab',
    problem: 'Candidates need a structured way to practice and track interview readiness.',
    solution:
      'A study dashboard with curated practice sets, progress tracking, and flashcards for technical preparation.',
    details:
      'Designed to support consistent interview practice with clean workflows, review tools, and progress summaries.',
    features: ['Practice sessions', 'Progress tracking', 'Flashcard mode', 'User notes'],
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Tanishka-code/interviewprep-suite',
    demoUrl: '#',
  },
  {
    title: 'Hackathon Launchpad',
    imageLabel: 'Sprint Hub',
    problem: 'Teams struggle to quickly build MVPs with aligned onboarding and analytics tracking.',
    solution:
      'A prototype platform for hackathons that centralizes team workflows, onboarding, and performance metrics.',
    details:
      'Focused on delivering rapid MVP structure while maintaining clean design and scalable component architecture.',
    features: ['Team onboarding', 'Live analytics', 'Task flow', 'Responsive dashboard'],
    stack: ['React', 'Vite', 'Framer Motion'],
    githubUrl: 'https://github.com/Tanishka-code/hackathon-launchpad',
    demoUrl: '#',
  },
]
