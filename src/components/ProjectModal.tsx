import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import type { Project } from '../data/projects'

type ProjectModalProps = {
  project: Project | null
  open: boolean
  onClose: () => void
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const modalVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  const handleBackdropClick = () => {
    onClose()
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = open ? 'hidden' : ''
    window.addEventListener('keydown', handleKeyDown)

    if (open && closeButtonRef.current) {
      closeButtonRef.current.focus()
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!project) {
    return null
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 py-8 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleBackdropClick}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative mx-auto w-full max-w-6xl max-h-[calc(100vh-4rem)] overflow-hidden rounded-[2rem] border border-white/10 bg-surface/95 shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close project details"
              onClick={onClose}
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-text transition hover:border-white/20"
            >
              <AiOutlineClose className="h-5 w-5" />
            </button>

            <div className="grid max-h-[calc(100vh-7rem)] gap-10 overflow-y-auto p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
              <div className="space-y-6">
                <img src={project.screenshotUrl} alt={project.screenshotAlt} loading="lazy" decoding="async" className="h-80 w-full rounded-[1.75rem] object-cover" />
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.28em] text-secondary">Project overview</p>
                  <h2 id="project-modal-title" className="text-3xl font-semibold text-text sm:text-4xl">{project.title}</h2>
                  <p className="text-base leading-8 text-slate-300">{project.solution}</p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-background/90 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-secondary">Problem</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.problem}</p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-background/90 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-secondary">What I built</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.details}</p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-background/90 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-secondary">Features</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                    {project.features.map((feature) => (
                      <li key={feature} className="rounded-3xl bg-surface/90 px-4 py-3">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-background/90 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-secondary">Challenges</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.challenges}</p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-background/90 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-secondary">Architecture</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.architecture}</p>
                </div>
              </div>

              <aside className="space-y-6 rounded-[1.75rem] border border-white/10 bg-background/90 p-6">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-secondary">Tech stack</p>
                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.25em] text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-background/90 p-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-secondary">Links</p>
                  <div className="mt-4 flex flex-col gap-3">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-3xl bg-white/5 px-4 py-3 text-sm font-semibold text-text transition hover:bg-white/10">
                      GitHub
                    </a>
                    {project.demoUrl && project.demoUrl !== '#' ? (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-3xl bg-primary px-4 py-3 text-sm font-semibold text-background transition hover:bg-secondary">
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </aside>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
