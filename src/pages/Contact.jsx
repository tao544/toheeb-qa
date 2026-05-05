import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faCircleCheck,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import PageWrapper from '../components/PageWrapper'
import { portfolioData } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <PageWrapper>
      <div className="min-h-screen px-6 md:px-16 lg:px-24 py-20 bg-cream">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-teal-primary" />
            <span className="font-body text-[0.72rem] font-medium tracking-[0.2em] uppercase text-teal-primary">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-dark leading-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
          >
            Let's Build Quality
            <br />
            <span className="text-teal-primary italic">Together</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="w-16 h-[2px] bg-teal-primary mb-6" />

          <motion.p
            variants={itemVariants}
            className="font-body text-muted text-[0.95rem] leading-relaxed max-w-2xl mb-16"
          >
            Open to senior QA and SDET opportunities in fintech and high-scale
            payment systems. Whether you have a role, a project, or just want to
            connect — I'd love to hear from you.
          </motion.p>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2 space-y-6"
            >
              {/* Info cards */}
              {[
                {
                  icon: faEnvelope,
                  label: 'Email',
                  value: portfolioData.email,
                  href: `mailto:${portfolioData.email}`,
                },
                {
                  icon: faLinkedin,
                  label: 'LinkedIn',
                  value: 'adepoju-toheeb-ayobami',
                  href: portfolioData.linkedin,
                },
                {
                  icon: faLocationDot,
                  label: 'Location',
                  value: portfolioData.location,
                  href: null,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-5 bg-white border border-stone-200 rounded-lg hover:border-teal-primary transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-md bg-teal-light flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={item.icon} className="text-teal-primary text-sm" />
                  </div>
                  <div>
                    <p className="font-body text-[0.68rem] tracking-[0.15em] uppercase text-muted font-medium mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="font-body text-sm text-dark hover:text-teal-primary transition-colors duration-200 break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-dark">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Availability banner */}
              <motion.div
                variants={itemVariants}
                className="p-5 bg-teal-primary rounded-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="font-body text-[0.72rem] tracking-[0.15em] uppercase text-white font-medium">
                    Currently Available
                  </span>
                </div>
                <p className="font-body text-sm text-teal-light opacity-90 leading-relaxed">
                  Open to full-time senior QA and SDET roles. Response time within 24 hours.
                </p>
              </motion.div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3"
            >
              <div className="bg-white border border-stone-200 rounded-xl p-8">
                <h3 className="font-display text-xl font-semibold text-dark mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-[0.72rem] tracking-[0.12em] uppercase text-muted font-medium block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full font-body text-sm text-dark bg-cream border border-stone-200 rounded-md px-4 py-3 outline-none focus:border-teal-primary focus:ring-1 focus:ring-teal-primary transition-all duration-200 placeholder:text-stone-300"
                      />
                    </div>
                    <div>
                      <label className="font-body text-[0.72rem] tracking-[0.12em] uppercase text-muted font-medium block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full font-body text-sm text-dark bg-cream border border-stone-200 rounded-md px-4 py-3 outline-none focus:border-teal-primary focus:ring-1 focus:ring-teal-primary transition-all duration-200 placeholder:text-stone-300"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="font-body text-[0.72rem] tracking-[0.12em] uppercase text-muted font-medium block mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Job Opportunity / Collaboration / Other"
                      className="w-full font-body text-sm text-dark bg-cream border border-stone-200 rounded-md px-4 py-3 outline-none focus:border-teal-primary focus:ring-1 focus:ring-teal-primary transition-all duration-200 placeholder:text-stone-300"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-body text-[0.72rem] tracking-[0.12em] uppercase text-muted font-medium block mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about the role or project..."
                      className="w-full font-body text-sm text-dark bg-cream border border-stone-200 rounded-md px-4 py-3 outline-none focus:border-teal-primary focus:ring-1 focus:ring-teal-primary transition-all duration-200 placeholder:text-stone-300 resize-none"
                    />
                  </div>

                  {/* Status messages */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-md"
                    >
                      <FontAwesomeIcon icon={faCircleCheck} className="text-emerald-500" />
                      <p className="font-body text-sm text-emerald-700">
                        Message sent! Toheeb will get back to you within 24 hours.
                      </p>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-md"
                    >
                      <FontAwesomeIcon icon={faTriangleExclamation} className="text-rose-500" />
                      <p className="font-body text-sm text-rose-700">
                        Something went wrong. Please try emailing directly at {portfolioData.email}
                      </p>
                    </motion.div>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}