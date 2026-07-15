import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { featuredProjects, otherProjects } from '../data/projects'

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-10 rounded-[2.5rem] border border-white/10 bg-surface/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.16)] sm:p-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.28em] text-secondary">Projects</p>
        <h2 className="text-3xl font-semibold text-text sm:text-4xl">Featured work and select side projects.</h2>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-text">Featured Projects</h3>
          <div className="grid gap-6 xl:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.08 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-text">Other Projects</h3>
          <div className="grid gap-6 lg:grid-cols-2">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.06 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
