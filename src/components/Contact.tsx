import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section aria-labelledby="contact-heading" className="space-y-8">
      <div className="flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-surface/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.16)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-secondary">Contact</p>
          <h2 id="contact-heading" className="mt-3 text-3xl font-semibold text-text sm:text-4xl">
            Let&apos;s build the next experience together.
          </h2>
        </div>
        <motion.a
          href="mailto:tanishka@example.com"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center rounded-3xl bg-primary px-6 py-4 text-sm font-semibold text-background shadow-glow transition hover:bg-secondary"
        >
          Email me
        </motion.a>
      </div>
      <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-background/80 p-6 text-sm text-slate-300 sm:grid-cols-2">
        <div className="rounded-3xl border border-white/5 bg-surface/90 p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-secondary">Availability</p>
          <p className="mt-4 text-base leading-7">Open to internships, placements, and early-career software engineering roles.</p>
        </div>
        <div className="rounded-3xl border border-white/5 bg-surface/90 p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-secondary">Connect</p>
          <ul className="mt-4 space-y-3 text-base leading-7">
            <li>
              <span className="font-medium text-text">GitHub:</span>{' '}
              <a
                href="https://github.com/Tanishka-code"
                target="_blank"
                rel="noreferrer"
                className="text-primary transition hover:text-secondary"
              >
                github.com/Tanishka-code
              </a>
            </li>
            <li>
              <span className="font-medium text-text">LinkedIn:</span>{' '}
              <a
                href="https://www.linkedin.com/in/tanishka-tawate-53238a3ab"
                target="_blank"
                rel="noreferrer"
                className="text-primary transition hover:text-secondary"
              >
                linkedin.com/in/tanishka-tawate-53238a3ab
              </a>
            </li>
            <li>
              <span className="font-medium text-text">Resume:</span>{' '}
              <a href="#" className="text-primary transition hover:text-secondary">
                Request resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
