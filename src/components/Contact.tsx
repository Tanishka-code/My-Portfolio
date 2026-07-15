import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Tanishka-code', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tanishka-tawate-53238a3ab', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:tanishkatawate@gmail.com', icon: MdEmail },
  { label: 'Location', href: '#', icon: FaMapMarkerAlt, text: 'Thane, Maharashtra' },
]

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: '' }))
    setSuccess(false)
    setFeedbackMessage('')
  }

  const validate = () => {
    const nextErrors: FormErrors = {}

    if (!values.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!values.subject.trim()) nextErrors.subject = 'Please add a subject.'
    if (!values.message.trim()) nextErrors.message = 'Please write your message.'

    return nextErrors
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSuccess(false)
      return
    }

    setLoading(true)
    setErrors({})
    setFeedbackMessage('')

    try {
      // Prepared for EmailJS integration here.
      // Example: emailjs.sendForm(serviceId, templateId, form.current, userId)
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setSuccess(true)
      setFeedbackMessage('Your message is ready to be sent. I will get back to you soon.')
      setValues(initialValues)
    } catch (error) {
      setFeedbackMessage('Something went wrong. Please try again later.')
      setSuccess(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="rounded-[2.5rem] border border-white/10 bg-surface/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.16)] sm:p-10">
      <div className="space-y-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-secondary">Contact</p>
          <h2 id="contact-heading" className="text-4xl font-semibold text-text sm:text-5xl">
            Let&apos;s create something meaningful together.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-300">
            Reach out for internships, collaborations, or CAT/MBA mentorship discussions. I&apos;m happy to connect about product-led work and technical learning.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/10 bg-background/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-secondary">Get in touch</p>
            <h3 className="mt-4 text-3xl font-semibold text-text">Send a note and I&apos;ll reply quickly.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Ready to discuss internships, project work, or CAT/MBA preparation. Share your message and I&apos;ll respond as soon as possible.
            </p>

            <div className="mt-8 space-y-5">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('#') ? '_self' : '_blank'}
                  rel={item.href.startsWith('#') ? undefined : 'noreferrer'}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-surface/90 px-5 py-4 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="text-left">
                    <p className="text-text">{item.label}</p>
                    <p className="text-sm text-slate-400">{item.text ?? item.href.replace(/https?:\/\//, '')}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-background/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
          >
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Name</span>
                  <input
                    value={values.name}
                    onChange={(event) => handleChange('name', event.target.value)}
                    className="h-14 w-full rounded-3xl border border-white/10 bg-surface/80 px-4 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                  {errors.name ? <p className="text-xs text-rose-400">{errors.name}</p> : null}
                </label>

                <label className="space-y-2 text-sm text-slate-300">
                  <span>Email</span>
                  <input
                    value={values.email}
                    onChange={(event) => handleChange('email', event.target.value)}
                    className="h-14 w-full rounded-3xl border border-white/10 bg-surface/80 px-4 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="you@example.com"
                  />
                  {errors.email ? <p className="text-xs text-rose-400">{errors.email}</p> : null}
                </label>
              </div>

              <label className="space-y-2 text-sm text-slate-300">
                <span>Subject</span>
                <input
                  value={values.subject}
                  onChange={(event) => handleChange('subject', event.target.value)}
                  className="h-14 w-full rounded-3xl border border-white/10 bg-surface/80 px-4 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Project idea, internship, or question"
                />
                {errors.subject ? <p className="text-xs text-rose-400">{errors.subject}</p> : null}
              </label>

              <label className="space-y-2 text-sm text-slate-300">
                <span>Message</span>
                <textarea
                  value={values.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  className="min-h-[180px] w-full rounded-[1.5rem] border border-white/10 bg-surface/80 px-4 py-4 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell me more about your opportunity or question..."
                />
                {errors.message ? <p className="text-xs text-rose-400">{errors.message}</p> : null}
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  {feedbackMessage ? (
                    <p className={`text-sm font-medium ${success ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {feedbackMessage}
                    </p>
                  ) : (
                    <p className="text-sm text-slate-400">Ready to send a thoughtful message? I&apos;m listening.</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-14 items-center justify-center rounded-3xl bg-primary px-8 text-sm font-semibold text-background transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send message'}
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
