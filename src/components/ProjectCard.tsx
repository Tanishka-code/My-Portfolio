import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  onSelect: (project: Project) => void
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      onClick={() => onSelect(project)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect(project)
        }
      }}
      role="button"
      tabIndex={0}
      whileHover={{ y: -6, boxShadow: '0 32px 90px rgba(0,0,0,0.16)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-background/95 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
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
          <Button
            href={project.githubUrl}
            variant="secondary"
            className="min-w-[10rem]"
            onClick={(event) => event.stopPropagation()}
          >
            GitHub
          </Button>
          {project.demoUrl && project.demoUrl !== '#' ? (
            <Button
              href={project.demoUrl}
              variant="primary"
              className="min-w-[10rem]"
              onClick={(event) => event.stopPropagation()}
            >
              Live Demo
            </Button>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
