import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAward,
  faIdCard,
  faCalendarDays,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
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

const certColors = [
  { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700' },
  { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
  { bg: 'bg-teal-50', border: 'border-teal-200', icon: 'text-teal-600', badge: 'bg-teal-100 text-teal-700' },
  { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-600', badge: 'bg-amber-100 text-amber-700' },
  { bg: 'bg-rose-50', border: 'border-rose-200', icon: 'text-rose-600', badge: 'bg-rose-100 text-rose-700' },
]

const certLinks = [
  null,
  'https://alison.com/certification/check/$2y$10$NgYomup.PPOwfTogB.ZwOfXWoTEfel9zvhYERyJybDWgHJN.UcNS',
  null,
  'http://admin.alison.com/user/learner-verification/24063686/1266',
  'https://alison.com/certification/check/$2y$10$Ydyfc7Ht18.u4nbfxjwpHuQEkZWLc2tlFHOq65vhl8tesagtYZaC',
]

export default function Certifications() {
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
              Credentials
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-dark leading-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
          >
            Licences &
            <br />
            <span className="text-teal-primary italic">Certifications</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="w-16 h-[2px] bg-teal-primary mb-6" />

          <motion.p
            variants={itemVariants}
            className="font-body text-muted text-[0.95rem] leading-relaxed max-w-2xl mb-16"
          >
            A commitment to continuous learning — validated through internationally
            recognised certifications in quality management, security, and project leadership.
          </motion.p>

          {/* Cert Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16"
          >
            {portfolioData.certifications.map((cert, i) => {
              const color = certColors[i % certColors.length]
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                  className={`relative bg-white border ${color.border} rounded-xl p-6 transition-all duration-300`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${color.bg} flex items-center justify-center flex-shrink-0`}>
                      <FontAwesomeIcon icon={faAward} className={`${color.icon} text-lg`} />
                    </div>

                    {/* Year badge */}
                    <span className={`font-body text-[0.68rem] font-medium tracking-wide uppercase px-3 py-1 rounded-full ${color.badge}`}>
                      {cert.year}
                    </span>
                  </div>

                  {/* Cert name */}
                  <h3 className="font-display text-xl font-semibold text-dark leading-snug mb-2">
                    {cert.name}
                  </h3>

                  {/* Issuer */}
                  <p className="font-body text-sm text-teal-primary font-medium mb-4">
                    {cert.issuer}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-stone-100 mb-4" />

                  {/* Credential ID + Link */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faIdCard} className="text-muted text-xs" />
                      <span className="font-body text-xs text-muted tracking-wide">
                        ID: {cert.credentialId}
                      </span>
                    </div>

                    {certLinks[i] && (
                      <a
                        href={certLinks[i]}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 font-body text-xs font-medium text-teal-primary hover:underline transition-all duration-200"
                      >
                        Verify
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
                      </a>
                    )}
                  </div>
                </motion.div>
              )
            })}

            {/* Education card — same grid */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
              className="bg-white border border-stone-200 rounded-xl p-6 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faAward} className="text-violet-500 text-lg" />
                </div>
                <span className="font-body text-[0.68rem] font-medium tracking-wide uppercase px-3 py-1 rounded-full bg-violet-100 text-violet-700">
                  2014 – 2019
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-dark leading-snug mb-2">
                BSc Geology & Earth Science
              </h3>
              <p className="font-body text-sm text-teal-primary font-medium mb-4">
                Ekiti State University
              </p>
              <div className="w-full h-[1px] bg-stone-100 mb-4" />
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendarDays} className="text-muted text-xs" />
                <span className="font-body text-xs text-muted tracking-wide">
                  Undergraduate Degree
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats banner */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {[
              { value: '5', label: 'Certifications' },
              { value: '3', label: 'Issuers' },
              { value: '2022', label: 'First Certified' },
              { value: 'Active', label: 'PMP Status' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white border border-stone-200 rounded-lg px-5 py-4 text-center"
              >
                <div className="font-display text-2xl font-bold text-teal-primary mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-muted tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-teal-primary rounded-lg flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                Ready to work with a certified QA expert?
              </h3>
              <p className="font-body text-sm text-teal-light opacity-90">
                Let's talk about how I can help your team ship quality software.
              </p>
            </div>
            <a  
              href="/contact"
              onClick={e => { e.preventDefault(); window.location.href = '/contact' }}
              className="font-body text-[0.78rem] font-semibold tracking-[0.12em] uppercase bg-white text-teal-primary px-6 py-3 rounded-sm whitespace-nowrap hover:bg-teal-light transition-colors duration-200"
            >
              Get In Touch →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}