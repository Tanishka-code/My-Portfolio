import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="space-y-8">
      <SectionHeading
        title="Selected Work"
        description="Strongest projects with technical scope, product focus, and measurable results."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.1 * index, duration: 0.55, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/10 bg-surface/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.16)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-secondary">{project.role}</p>
                <h3 className="mt-4 text-xl font-semibold text-text">{project.title}</h3>
              </div>
              <div className="rounded-full bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.28em] text-secondary ring-1 ring-white/10">
                Featured
              </div>
            </div>
            <p className="mt-5 text-base leading-7 text-slate-300">{project.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.details.map((detail) => (
                <li
                  key={detail}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {detail}
                </li>
              ))}
            </ul>
            <a
              href={project.href}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-secondary"
            >
              {project.linkLabel}
              <span aria-hidden="true">→</span>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
