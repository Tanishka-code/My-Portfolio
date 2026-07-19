import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const journeyMilestones = [
  {
    title: 'Started B.Tech in Information Technology',
    icon: '🎓',
    description:
      'Began my journey in Information Technology, building a strong foundation in programming, databases, operating systems, networking, and software engineering.',
    tags: ['Programming', 'Database Systems', 'Operating Systems', 'Problem Solving'],
  },
  {
    title: 'IBM SkillsBuild Certifications',
    icon: '🏆',
    description:
      'Completed industry-recognized certifications in web development and strengthened practical frontend development skills.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
  },
  {
    title: 'Built Spotify Clone',
    icon: '🚀',
    description:
      'Developed my first React application featuring music playback controls, reusable components, and responsive UI design.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Context API'],
  },
  {
    title: 'Smart Route Optimizer',
    icon: '🗺',
    description:
      'Designed and developed a MERN-based route optimization platform with interactive maps, routing APIs, and intelligent travel recommendations.',
    tags: ['React', 'Node.js', 'MongoDB', 'Leaflet', 'OpenRouteService API'],
  },
  {
    title: 'College Discovery Platform',
    icon: '🎓',
    description:
      'Built a scalable frontend application to help students discover, compare, and explore colleges using modern UI patterns and state management.',
    tags: ['Next.js', 'TypeScript', 'React Query', 'Tailwind CSS', 'Zustand'],
  },
  {
    title: 'Hackathons',
    icon: '💡',
    description:
      'Participated in hackathons focused on rapid product development, teamwork, UI/UX, and solving real-world challenges under tight deadlines.',
    tags: ['Teamwork', 'Innovation', 'Rapid Prototyping'],
  },
  {
    title: 'MBA / CAT Preparation',
    icon: '🎓',
    description:
      'Preparing for MBA entrance exams while strengthening analytical thinking, structured problem solving, and business-focused technology insights.',
    tags: ['Analytical Thinking', 'Business Strategy', 'Structured Problem Solving'],
  },
  {
    title: 'Currently Learning',
    icon: '📚',
    description:
      'Continuously improving my problem-solving ability through Data Structures & Algorithms while expanding my knowledge of backend development, system design, and modern software engineering practices.',
    tags: ['DSA', 'Node.js', 'System Design', 'Backend Development'],
  },
  {
    title: 'Looking for Internship Opportunities',
    icon: '🎯',
    badge: 'Present',
    description:
      'Seeking software engineering internships where I can contribute to impactful products, collaborate with experienced developers, and continue growing as a full-stack engineer.',
    tags: ['Software Engineering', 'Full Stack', 'Internships'],
  },
]

export default function TimelineSection() {
  return (
    <section id="timeline" className="rounded-[2.5rem] border border-white/10 bg-surface/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.16)] sm:p-10">
      <div className="space-y-4">
        <SectionHeading
          id="timeline-heading"
          title="My Journey"
          description="A timeline of my academic, technical, and professional growth."
        />
        <p className="max-w-2xl text-base leading-7 text-slate-300">
          A recruiter-friendly story of how my skills, projects, certifications, and ambitions evolved through college and hands-on development work.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl px-2">
        <motion.div
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/20 via-white/10 to-transparent origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        <div className="space-y-14">
          {journeyMilestones.map((event) => (
            <div key={event.title} className="relative">
              <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
                <motion.div
                  initial={{ scale: 0.75, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1, boxShadow: '0 0 0 16px rgba(56,189,248,0.08)' }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative flex h-12 w-12 items-center justify-center rounded-full bg-background/95 ring-1 ring-white/10"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-b from-sky-400/10 via-transparent to-transparent blur-xl" />
                  <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary shadow-[0_0_0_12px_rgba(56,189,248,0.05)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-background" />
                  </span>
                </motion.div>
              </div>

              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
                className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-background/90 p-8 pt-16 shadow-[0_24px_70px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_100px_rgba(15,23,42,0.28)]"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900 ring-1 ring-white/10">
                      <span className="text-3xl">{event.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-text">{event.title}</h3>
                    </div>
                  </div>
                  {event.badge ? (
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                      {event.badge}
                    </span>
                  ) : null}
                </div>

                <div className="space-y-5 pt-5">
                  <p className="text-sm leading-8 text-slate-300">{event.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-surface/90 px-4 py-2 text-sm text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
