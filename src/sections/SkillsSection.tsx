import { motion } from 'framer-motion'
import { FaDatabase, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiFramer, SiMongodb, SiJavascript, SiDocker } from 'react-icons/si'
import SectionHeading from '../components/SectionHeading'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { title: 'React', icon: FaReact, level: 'Advanced' },
      { title: 'TypeScript', icon: SiTypescript, level: 'Basic' },
      { title: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced' },
      { title: 'Framer Motion', icon: SiFramer, level: 'Intermediate' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { title: 'Node.js', icon: FaNodeJs, level: 'Intermediate' },
      { title: 'API Design', icon: FaNodeJs, level: 'Intermediate' },
      { title: 'Express', icon: FaNodeJs, level: 'Intermediate' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { title: 'MongoDB', icon: SiMongodb, level: 'Intermediate' },
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      { title: 'JavaScript', icon: SiJavascript, level: 'Advanced' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { title: 'Git', icon: FaGitAlt, level: 'Advanced' },
      { title: 'Docker', icon: SiDocker, level: 'Intermediate' },
    ],
  },
  {
    category: 'Concepts',
    skills: [
      { title: 'Responsive Design', icon: FaReact, level: 'Advanced' },
      { title: 'Data Structures', icon: FaDatabase, level: 'Intermediate' },
      { title: 'Algorithms', icon: FaDatabase, level: 'Intermediate' },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="rounded-[2.5rem] border border-white/10 bg-surface/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.16)] sm:p-10">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-3"
        >
          <SectionHeading
            id="skills-heading"
            title="Skills"
            description="Modern engineering skills with a polished technical stack."
          />
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            Each category shows the tools and concepts I use to build responsive, performant, and scalable applications.
          </p>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-background/80 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.14)]"
            >
              <h3 className="text-xl font-semibold text-text">{category.category}</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {category.skills.map((skill) => (
                  <motion.article
                    key={skill.title}
                    whileHover={{ y: -4, boxShadow: '0 24px 60px rgba(0,0,0,0.18)' }}
                    className="rounded-3xl border border-white/10 bg-surface/90 p-4 transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-primary">
                        <skill.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-text">{skill.title}</p>
                        <p className="text-sm text-slate-400">{skill.level}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
