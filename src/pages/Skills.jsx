import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGears,
  faListCheck,
  faArrowsLeftRight,
  faGaugeHigh,
  faCircleCheck,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import PageWrapper from '../components/PageWrapper'
import { portfolioData } from '../data/portfolio'

const iconMap = {
  gears: faGears,
  'list-check': faListCheck,
  'arrows-left-right': faArrowsLeftRight,
  'gauge-high': faGaugeHigh,
  'circle-check': faCircleCheck,
  users: faUsers,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const tools = [
  { name: 'JMeter', category: 'Performance' },
  { name: 'Postman', category: 'API Testing' },
  { name: 'Selenium', category: 'Automation' },
  { name: 'JIRA', category: 'Bug Tracking' },
  { name: 'Jenkins', category: 'CI/CD' },
  { name: 'Git', category: 'Version Control' },
  { name: 'TestRail', category: 'Test Management' },
  { name: 'Cypress', category: 'Automation' },
  { name: 'REST Assured', category: 'API Testing' },
  { name: 'GitHub Actions', category: 'CI/CD' },
  { name: 'Charles Proxy', category: 'Network Testing' },
  { name: 'SQL', category: 'Database Testing' },
]

export default function Skills() {
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
              Skills & Expertise
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-dark leading-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
          >
            What I Bring
            <br />
            <span className="text-teal-primary italic">to the Table</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="w-16 h-[2px] bg-teal-primary mb-6" />

          <motion.p
            variants={itemVariants}
            className="font-body text-muted text-[0.95rem] leading-relaxed max-w-2xl mb-16"
          >
            From building robust automation frameworks to leading cross-functional QA teams,
            here's a full picture of the skills I've developed across 5+ years in fintech
            and payment systems.
          </motion.p>

          {/* Skill Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20"
          >
            {portfolioData.skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(15,110,86,0.1)' }}
                className="bg-white border border-stone-200 rounded-lg p-6 transition-all duration-300 cursor-default"
              >
                {/* Icon + Group */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-md bg-teal-light flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={iconMap[skill.icon]}
                      className="text-teal-primary text-sm"
                    />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-dark">
                    {skill.group}
                  </h3>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-stone-100 mb-4" />

                {/* Items */}
                <ul className="space-y-2">
                  {skill.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-primary flex-shrink-0" />
                      <span className="font-body text-sm text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-teal-primary" />
              <span className="font-body text-[0.72rem] font-medium tracking-[0.2em] uppercase text-teal-primary">
                Tools & Technologies
              </span>
            </div>

            <h2
              className="font-display font-bold text-dark mb-8"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
            >
              My Tech Stack
            </h2>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * i + 0.3 }}
                  whileHover={{ scale: 1.05, borderColor: '#0f6e56' }}
                  className="flex flex-col items-start border border-stone-200 rounded-md px-4 py-3 bg-white cursor-default transition-all duration-200"
                >
                  <span className="font-body text-sm font-medium text-dark">{tool.name}</span>
                  <span className="font-body text-[0.68rem] text-teal-primary tracking-wide uppercase mt-0.5">
                    {tool.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 bg-teal-primary rounded-lg flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                Want to see these skills in action?
              </h3>
              <p className="font-body text-sm text-teal-light opacity-90">
                Check out my work history and real-world achievements.
              </p>
            </div>
            <a
              href="/experience"
              onClick={e => { e.preventDefault(); window.location.href = '/experience' }}
              className="font-body text-[0.78rem] font-semibold tracking-[0.12em] uppercase bg-white text-teal-primary px-6 py-3 rounded-sm whitespace-nowrap hover:bg-teal-light transition-colors duration-200"
            >
              View Experience →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}