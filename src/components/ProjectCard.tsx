import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: '0 32px 90px rgba(0,0,0,0.16)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="overflow-hidden rounded-[2rem] border border-white/10 bg-background/95 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
    >
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.25),_transparent_30%)]" />
        <div className="relative flex h-full items-end justify-start p-6">
          <div className="rounded-3xl border border-white/10 bg-surface/90 px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-text shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            {project.imageLabel}
          </div>
        </div>
      </div>

      <div className="space-y-6 p-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.24em] text-secondary">Featured Project</p>
          <h3 className="text-2xl font-semibold text-text">{project.title}</h3>
          <p className="text-base leading-7 text-slate-300">{project.solution}</p>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-surface/90 p-4">
            <p className="text-sm uppercase tracking-[0.22em] text-secondary">Problem</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{project.problem}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-surface/90 p-4">
            <p className="text-sm uppercase tracking-[0.22em] text-secondary">Key features</p>
            <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate-300 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="rounded-3xl bg-background/80 px-3 py-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.25em] text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button href={project.githubUrl} variant="secondary" className="min-w-[10rem]">
            GitHub
          </Button>
          <Button href={project.demoUrl} variant="primary" className="min-w-[10rem]">
            Live Demo
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="text-sm font-semibold uppercase tracking-[0.25em] text-primary transition hover:text-secondary"
        >
          {isOpen ? 'Hide details' : 'View details'}
        </button>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="overflow-hidden"
        >
          {isOpen && (
            <div className="mt-4 space-y-4 rounded-3xl border border-white/10 bg-surface/90 p-5 text-sm leading-7 text-slate-300">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-secondary">Expanded summary</p>
                <p className="mt-3">{project.details}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-secondary">Technology stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.article>
  )
}
