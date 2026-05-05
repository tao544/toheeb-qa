import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faBriefcase,
  faChevronDown,
  faChevronUp,
  faCircle,
} from '@fortawesome/free-solid-svg-icons'
import PageWrapper from '../components/PageWrapper'
import { portfolioData } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const toggle = (i) => setExpandedIndex(expandedIndex === i ? null : i)

  return (
    <PageWrapper>
      <div className="min-h-screen px-6 md:px-16 lg:px-24 py-20 bg-cream">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-teal-primary" />
            <span className="font-body text-[0.72rem] font-medium tracking-[0.2em] uppercase text-teal-primary">
              Work History
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-dark leading-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
          >
            My Professional
            <br />
            <span className="text-teal-primary italic">Experience</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="w-16 h-[2px] bg-teal-primary mb-6" />

          <motion.p
            variants={itemVariants}
            className="font-body text-muted text-[0.95rem] leading-relaxed max-w-2xl mb-16"
          >
            5+ years of delivering quality across fintech and payment systems —
            from contract tester to Senior SDET leading QA for millions of users.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-stone-200 hidden md:block" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {portfolioData.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="relative md:pl-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-5 hidden md:flex items-center justify-center w-4 h-4">
                    <motion.div
                      animate={expandedIndex === i
                        ? { scale: 1.3, backgroundColor: '#0f6e56' }
                        : { scale: 1, backgroundColor: '#d1d5db' }
                      }
                      transition={{ duration: 0.3 }}
                      className="w-3 h-3 rounded-full"
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`bg-white border rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                      expandedIndex === i
                        ? 'border-teal-primary shadow-md'
                        : 'border-stone-200 hover:border-stone-300 hover:shadow-sm'
                    }`}
                    onClick={() => toggle(i)}
                  >
                    {/* Card Header */}
                    <div className="px-6 py-5 flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        {/* Company initial badge */}
                        <div className="w-11 h-11 rounded-md bg-teal-light flex items-center justify-center flex-shrink-0">
                          <span className="font-display font-bold text-teal-primary text-lg">
                            {exp.company[0]}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-display text-lg font-semibold text-dark leading-tight mb-0.5">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <span className="font-body text-sm font-medium text-teal-primary">
                              {exp.company}
                            </span>
                            <span className="text-stone-300 text-xs">•</span>
                            <span className="font-body text-xs text-muted">{exp.type}</span>
                            <span className="text-stone-300 text-xs">•</span>
                            <span className="font-body text-xs text-muted flex items-center gap-1">
                              <FontAwesomeIcon icon={faLocationDot} className="text-[10px]" />
                              {exp.location}
                            </span>
                          </div>
                          <span className="font-body text-xs text-muted mt-1 block">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Expand toggle */}
                      <motion.div
                        animate={{ rotate: expandedIndex === i ? 0 : 0 }}
                        className="flex-shrink-0 mt-1"
                      >
                        <FontAwesomeIcon
                          icon={expandedIndex === i ? faChevronUp : faChevronDown}
                          className={`text-xs transition-colors duration-200 ${
                            expandedIndex === i ? 'text-teal-primary' : 'text-muted'
                          }`}
                        />
                      </motion.div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence initial={false}>
                      {expandedIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-stone-100">
                            {/* Highlights */}
                            <div className="mt-4 mb-5">
                              <h4 className="font-body text-[0.68rem] tracking-[0.15em] uppercase text-teal-primary font-medium mb-3">
                                Key Highlights
                              </h4>
                              <ul className="space-y-2">
                                {exp.highlights.map((h, j) => (
                                  <motion.li
                                    key={j}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: j * 0.08 }}
                                    className="flex items-start gap-3"
                                  >
                                    <FontAwesomeIcon
                                      icon={faCircle}
                                      className="text-teal-primary text-[5px] mt-[7px] flex-shrink-0"
                                    />
                                    <span className="font-body text-sm text-muted leading-relaxed">
                                      {h}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {exp.tags.map((tag, j) => (
                                <span
                                  key={j}
                                  className="font-body text-[0.7rem] tracking-wide bg-teal-light text-teal-primary px-3 py-1 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 bg-white border border-stone-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-dark mb-1">
                Impressed? Let's work together.
              </h3>
              <p className="font-body text-sm text-muted">
                I'm open to senior QA and SDET opportunities in fintech.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/contact"
                onClick={e => { e.preventDefault(); window.location.href = '/contact' }}
                className="btn-primary whitespace-nowrap"
              >
                Get In Touch
              </a>
              <a    
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-outline whitespace-nowrap"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}