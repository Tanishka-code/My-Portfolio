import screenshotCollege from '../assets/project-screenshots/college-discovery-platform.svg'
import screenshotSmartRoute from '../assets/project-screenshots/smart-route-optimizer.svg'
import screenshotSpotifyClone from '../assets/project-screenshots/spotify-clone.svg'
import screenshotPortfolioBuilder from '../assets/project-screenshots/portfolio-builder.svg'

export type Project = {
  title: string
  imageLabel: string
  screenshotUrl: string
  screenshotAlt: string
  problem: string
  solution: string
  details: string
  features: string[]
  stack: string[]
  challenges: string
  architecture: string
  githubUrl: string
  demoUrl?: string
}

export const featuredProjects: Project[] = [
  {
    title: 'College Discovery Platform',
    imageLabel: 'Campus AI',
    screenshotUrl: screenshotCollege,
    screenshotAlt: 'College discovery platform overview',
    problem: 'Students need a better way to evaluate programs, campuses, and scholarship options.',
    solution:
      'A discovery platform that helps prospective students compare colleges with personalized filters and insights.',
    details:
      'A student-centered web app designed to organize college search results, highlight program fit, and surface scholarship and career information.',
    features: ['Program comparison', 'Scholarship guidance', 'Campus insights', 'Personalized search'],
    stack: ['React', 'Tailwind CSS', 'TypeScript'],
    challenges: 'Keeping the interface easy to scan while presenting multiple college attributes in one view.',
    architecture: 'Client-side React interface with data-driven filter components and responsive search results.',
    githubUrl: 'https://github.com/Tanishka-code/college-discovery-platform',
  },
  {
    title: 'Smart Route Optimizer',
    imageLabel: 'Map AI',
    screenshotUrl: screenshotSmartRoute,
    screenshotAlt: 'Route optimization interface',
    problem: 'Routing tools often miss efficient multi-stop travel paths and changing road conditions.',
    solution:
      'A route optimizer that proposes shorter paths and more efficient stops for travel and delivery planning.',
    details:
      'Built to make route planning cleaner by letting users add multiple stops and compare optimized itineraries quickly.',
    features: ['Multi-stop planning', 'Travel efficiency', 'Route preview', 'User-friendly maps'],
    stack: ['React', 'Vite', 'Tailwind CSS'],
    challenges: 'Designing an intuitive planner that simplifies route complexity for everyday users.',
    architecture: 'React UI with interactive route cards and a flexible planning workflow.',
    githubUrl: 'https://github.com/Tanishka-code/smart-route-optimizer',
  },
  {
    title: 'Spotify Clone',
    imageLabel: 'Music UI',
    screenshotUrl: screenshotSpotifyClone,
    screenshotAlt: 'Music streaming interface preview',
    problem: 'Music interfaces need polished playback controls and modern playlist navigation.',
    solution:
      'A music app prototype with clean visuals, playlist browsing, and responsive media controls.',
    details:
      'A UI-focused streaming prototype that highlights intuitive playback, playlists, and album navigation.',
    features: ['Playlist browsing', 'Playback controls', 'Responsive cards', 'Animated transitions'],
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    challenges: 'Balancing visual polish with a lightweight interface and smooth interactions.',
    architecture: 'Single-page React layout with animated components and media-focused visuals.',
    githubUrl: 'https://github.com/Tanishka-code/spotify-clone',
  },
  {
    title: 'Portfolio Builder',
    imageLabel: 'Design Studio',
    screenshotUrl: screenshotPortfolioBuilder,
    screenshotAlt: 'Portfolio builder interface screenshot',
    problem: 'Early-career developers need a faster way to create polished personal portfolios.',
    solution:
      'A portfolio scaffolding concept focused on reusable sections, responsive design, and easy customization.',
    details:
      'A portfolio generator prototype built to help create clean developer presentations with minimal setup.',
    features: ['Customizable sections', 'Responsive design', 'Clean templates', 'Developer-first UX'],
    stack: ['React', 'Tailwind CSS', 'TypeScript'],
    challenges: 'Delivering strong design flexibility while keeping the builder interface simple.',
    architecture: 'Modular React components for portfolio sections and responsive layout templates.',
    githubUrl: 'https://github.com/Tanishka-code/portfolio-builder',
  },
]

export const otherProjects: Project[] = []
