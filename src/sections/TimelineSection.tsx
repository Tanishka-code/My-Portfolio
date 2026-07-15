import { motion } from 'framer-motion'

const timelineEvents = [
  {
    title: 'Education',
    subtitle: 'B.Tech in Information Technology',
    description:
      'Currently pursuing an IT degree with a strong focus on software development, product thinking, and problem solving.',
    details: ['Academic projects', 'Data structures', 'System design fundamentals'],
  },
  {
    title: 'Hackathons',
    subtitle: 'Rapid prototype experience',
    description:
      'Participated in multiple hackathons to build fast, polished prototypes and strengthen teamwork under tight deadlines.',
    details: ['Product-focused outcomes', 'Cross-functional collaboration', 'Experience design'],
  },
  {
    title: 'Certifications',
    subtitle: 'Practical web development credentials',
    description:
      'Completed hands-on certification programs covering responsive frontend development, modern UI patterns, and accessible experiences.',
    details: ['Frontend fundamentals', 'Web accessibility', 'Responsive design'],
  },
  {
    title: 'Future Goals',
    subtitle: 'CAT/MBA aspirant and product-minded growth',
    description:
      'Preparing for CAT and MBA while continuing to pursue internships and projects that bridge technology with business strategy.',
    details: ['MBA readiness', 'Product strategy', 'Technical leadership'],
  },
]

export default function TimelineSection() {
  return (
    <section id="timeline" className="rounded-[2.5rem] border border-white/10 bg-surface/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.16)] sm:p-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.28em] text-secondary">Timeline</p>
        <h2 className="text-3xl font-semibold text-text sm:text-4xl">My journey so far and where I’m headed.</h2>
        <p className="max-w-2xl text-base leading-7 text-slate-300">
          A timeline of education, hackathon experience, certifications, and future CAT/MBA goals, designed to reflect growth across both technical and strategic paths.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl px-2">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />

        <div className="space-y-12">
          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0

            return (
              <div key={event.title} className="grid gap-6 md:grid-cols-[minmax(0,28rem)_64px_minmax(0,28rem)] items-start">
                {isLeft ? (
                  <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="rounded-[2rem] border border-white/10 bg-background/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.14)] md:max-w-[28rem] md:text-left"
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-text">{event.title}</h3>
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-primary">{event.subtitle}</p>
                        <p className="text-sm leading-7 text-slate-300">{event.description}</p>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {event.details.map((detail) => (
                          <span key={detail} className="rounded-3xl border border-white/10 bg-surface/90 px-4 py-2 text-sm text-slate-300">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ) : (
                  <div className="hidden md:block" />
                )}

                <div className="relative flex items-center justify-center">
                  <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />
                  <span className="relative z-10 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary shadow-[0_0_0_8px_rgba(59,130,246,0.12)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-background" />
                  </span>
                </div>

                {!isLeft ? (
                  <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="rounded-[2rem] border border-white/10 bg-background/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.14)] md:max-w-[28rem] md:text-left"
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-text">{event.title}</h3>
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-primary">{event.subtitle}</p>
                        <p className="text-sm leading-7 text-slate-300">{event.description}</p>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {event.details.map((detail) => (
                          <span key={detail} className="rounded-3xl border border-white/10 bg-surface/90 px-4 py-2 text-sm text-slate-300">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ) : (
                  <div className="hidden md:block" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
