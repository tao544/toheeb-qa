import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faBuilding,
  faGlobe,
  faShieldHalved,
  faGraduationCap,
  faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons'
import PageWrapper from '../components/PageWrapper'
import { portfolioData } from '../data/portfolio'

const iconMap = {
  briefcase: faBriefcase,
  building: faBuilding,
  globe: faGlobe,
  'shield-halved': faShieldHalved,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <PageWrapper>
      <div className="min-h-screen px-6 md:px-16 lg:px-24 py-20 bg-cream">

        {/* Page Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-teal-primary" />
            <span className="font-body text-[0.72rem] font-medium tracking-[0.2em] uppercase text-teal-primary">
              About Me
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-dark leading-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
          >
            The Mind Behind
            <br />
            <span className="text-teal-primary italic">the Quality</span>
          </motion.h1>

          {/* Divider */}
          <motion.div variants={itemVariants} className="w-16 h-0.5 bg-teal-primary mb-12" />

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — Story */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible">

              {/* Quote */}
              <motion.div
                variants={itemVariants}
                className="relative bg-teal-light border-l-4 border-teal-primary px-6 py-5 mb-8 rounded-r-md"
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-teal-primary opacity-30 text-3xl absolute top-4 right-4"
                />
                <p className="font-display text-lg text-dark italic leading-relaxed">
                  "I help fast-growing fintech teams ship software that users trust."
                </p>
              </motion.div>

              {/* Story paragraphs */}
              {portfolioData.about.split('\n\n').map((para, i) => (
                <motion.p
                  key={i}
                  variants={itemVariants}
                  className="font-body text-muted text-[0.95rem] leading-[1.9] mb-5"
                >
                  {para.trim()}
                </motion.p>
              ))}

              {/* Education */}
              <motion.div
                variants={itemVariants}
                className="mt-8 p-5 border border-stone-200 rounded-md bg-white"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-teal-primary" />
                  <span className="font-body text-[0.72rem] tracking-[0.15em] uppercase font-medium text-teal-primary">
                    Education
                  </span>
                </div>
                <h4 className="font-display text-lg font-semibold text-dark">
                  BSc Geology & Earth Science
                </h4>
                <p className="font-body text-sm text-muted">
                  Ekiti State University · 2014 – 2019
                </p>
              </motion.div>
            </motion.div>

            {/* Right — Quick facts + What I do */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">

              {/* Quick Facts */}
              <motion.div variants={itemVariants}>
                <h3 className="font-body text-[0.72rem] tracking-[0.15em] uppercase font-medium text-teal-primary mb-4">
                  Quick Facts
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {portfolioData.quickFacts.map((fact, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.03, borderColor: '#0f6e56' }}
                      className="flex items-center gap-3 border border-stone-200 rounded-md px-4 py-3 bg-white transition-all duration-200 cursor-default"
                    >
                      <FontAwesomeIcon
                        icon={iconMap[fact.icon]}
                        className="text-teal-primary text-sm"
                      />
                      <span className="font-body text-sm text-dark font-medium">
                        {fact.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* What I specialise in */}
              <motion.div variants={itemVariants}>
                <h3 className="font-body text-[0.72rem] tracking-[0.15em] uppercase font-medium text-teal-primary mb-4">
                  What I Specialise In
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'Test Automation & Frameworks', pct: 95 },
                    { label: 'API & Payment System Testing', pct: 92 },
                    { label: 'Performance & Load Testing', pct: 88 },
                    { label: 'Manual & Functional Testing', pct: 90 },
                    { label: 'CI/CD & DevOps QA', pct: 82 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="font-body text-sm text-dark">{item.label}</span>
                        <span className="font-body text-xs text-muted">{item.pct}%</span>
                      </div>
                      <div className="w-full h-0.75 bg-stone-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.pct}%` }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-teal-primary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={itemVariants} className="flex gap-4 pt-2">
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-sm"
                >
                  Connect on LinkedIn
                </a>
                <a href={`mailto:${portfolioData.email}`} className="btn-outline text-sm">
                  Send Email
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}