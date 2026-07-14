import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="space-y-8">
      <SectionHeading title="Skills" description="Technical strengths and modern frontend capabilities." />
      <div className="rounded-[2rem] border border-white/10 bg-surface/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.16)]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.05 * index, duration: 0.45, ease: 'easeOut' }}
              className="rounded-3xl border border-white/10 bg-background/80 px-5 py-4 text-sm font-medium text-text"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
