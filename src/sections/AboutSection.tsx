import { motion } from 'framer-motion'
import DeveloperWorkspace from '../components/DeveloperWorkspace'
import SectionHeading from '../components/SectionHeading'

const infoCards = [
  { title: 'B.Tech IT Student', description: 'Strong technical foundation with structured academic learning.' },
  { title: 'Frontend Development', description: 'Modern React, Tailwind, and responsive UI experience.' },
  { title: 'Backend Development', description: 'API-driven applications with clear architecture and strong debugging habits.' },
  { title: 'CAT/MBA Aspirant', description: 'Preparing for business school while continuing to build product-oriented software.' },
  { title: 'DSA', description: 'Problem solving with practical algorithms and data structures.' },
  { title: 'Basic TypeScript', description: 'Familiar with TypeScript syntax and usage for practical React apps.' },
]

export default function AboutSection() {
  return (
    <section id="about" className="rounded-[2.5rem] border border-white/10 bg-surface/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.16)] sm:p-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <DeveloperWorkspace />

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
            className="space-y-4"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-secondary">About</p>
            <h2 className="text-3xl font-semibold text-text sm:text-4xl">Learning, building, and preparing for the next opportunity.</h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I blend academic learning with hands-on development, building web applications that connect user intent with scalable technology while preparing for CAT/MBA.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="rounded-[1.75rem] border border-white/10 bg-background/80 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)]"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-secondary">Education</p>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Pursuing a B.Tech in Information Technology with a strong focus on software systems and applied engineering.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
              className="rounded-[1.75rem] border border-white/10 bg-background/80 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)]"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-secondary">Current Degree</p>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Currently studying Information Technology and preparing for CAT/MBA, while gaining practical full-stack experience.
              </p>
            </motion.article>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
              className="rounded-[1.75rem] border border-white/10 bg-background/80 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)]"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-secondary">Interests</p>
              <p className="mt-3 text-base leading-7 text-slate-300">
                I enjoy crafting interfaces, solving algorithmic challenges, and building products that improve everyday workflows.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
              className="rounded-[1.75rem] border border-white/10 bg-background/80 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)]"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-secondary">Career Goals</p>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Aiming for internships and roles where I can contribute to elegant frontend experiences and scalable backend systems.
              </p>
            </motion.article>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.05 }}
                className="rounded-[1.75rem] border border-white/10 bg-background/90 p-5 transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)]"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-secondary">{card.title}</p>
                <p className="mt-3 text-base leading-7 text-slate-300">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
