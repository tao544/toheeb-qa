import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faShieldHalved,
  faBolt,
  faChartLine,
  faUsers,
  faQuoteLeft,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { portfolioData } from '../data/portfolio'

// ── Animated counter ──────────────────────────────────────────
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    const numeric = parseFloat(target)
    const steps = 60
    const stepTime = duration / steps
    let current = 0
    const increment = numeric / steps
    const timer = setInterval(() => {
      current += increment
      if (current >= numeric) { setCount(numeric); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, stepTime)
    return () => clearInterval(timer)
  }, [start, target, duration])
  return count
}

function StatItem({ stat, index, startCount }) {
  const rawValue = parseFloat(stat.value)
  const suffix = stat.value.replace(/[0-9.]/g, '')
  const count = useCounter(rawValue, 2000, startCount)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 + index * 0.15, duration: 0.6 }}
      className="flex flex-col"
    >
      <span className="font-display text-4xl md:text-5xl font-bold text-teal-primary leading-none">
        {startCount ? `${count}${suffix}` : '0'}
      </span>
      <span className="font-body text-xs text-muted tracking-wide mt-1 max-w-[140px] leading-snug">
        {stat.label}
      </span>
    </motion.div>
  )
}

// ── Floating orbs background ──────────────────────────────────
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(15,110,86,0.08) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(15,110,86,0.06) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(29,158,117,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0f6e56 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}

// ── Why Hire Me data ──────────────────────────────────────────
const whyHireMe = [
  {
    icon: faShieldHalved,
    title: 'Zero-Defect Mindset',
    description:
      'I treat every release as mission-critical. With a track record of reducing production incidents by 40%, I bring obsessive attention to quality that protects your brand.',
  },
  {
    icon: faBolt,
    title: 'Speed Without Compromise',
    description:
      'My automation frameworks have cut release cycles by 5 days. I help teams move fast without breaking things — quality and velocity are not opposites.',
  },
  {
    icon: faChartLine,
    title: 'Fintech-Scale Experience',
    description:
      "I've led QA for systems handling millions of users and high-volume payment flows. I understand the stakes — downtime and bugs cost money and trust.",
  },
  {
    icon: faUsers,
    title: 'Cross-Team Collaborator',
    description:
      'I bridge the gap between dev, product, and ops teams. I communicate defects clearly, write actionable reports, and keep everyone aligned on quality goals.',
  },
]

// ── Real LinkedIn Testimonials ────────────────────────────────
const testimonials = [
  {
    name: 'Tomipe Omobuwa',
    role: 'Presales & Solutions Engineering | Partner Enablement',
    company: 'Worked together at PalmPay',
    date: 'August 2024',
    text: 'Adepoju Toheeb Ayobami is consistently impressive with his strong work ethic and ability to solve complex problems, and collaborate effectively with team members. He consistently delivered high-quality results and demonstrated a keen attention to detail. I would welcome the opportunity to work with Toheeb again in any capacity and thoroughly would recommend him.',
    rating: 5,
  },
  {
    name: 'Abdulraheem Adebowale',
    role: 'Software Quality Assurance Engineer | Test Automation',
    company: 'Worked together at PalmPay',
    date: 'April 2024',
    text: 'I have had the privilege of working alongside Toheeb, and I can confidently say that he is one of the most meticulous and dedicated QA Engineers I have ever had the pleasure of collaborating with. His attention to detail is unparalleled. He deeply understands both manual and automated testing methodologies, ensuring that every aspect of our software products undergoes rigorous scrutiny before reaching our clients. I wholeheartedly recommend Toheeb to any organization seeking a top-tier QA Engineer who can deliver exceptional results while fostering a positive and collaborative work environment.',
    rating: 5,
  },
]

// ── Main component ────────────────────────────────────────────
export default function Home() {
  const [startCount, setStartCount] = useState(false)
  const navigate = useNavigate()

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  useEffect(() => {
    const timer = setTimeout(() => setStartCount(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {/* ── HERO ── */}
      {/* ── HERO ── */}
<section
  ref={heroRef}
  className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-[68px] overflow-hidden bg-cream"
>
  <FloatingOrbs />

  {/* Vertical side text */}
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1.5, duration: 0.8 }}
    className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-3"
  >
    <span className="font-body text-[0.65rem] tracking-[0.25em] uppercase text-muted rotate-90 whitespace-nowrap">
      Lagos, Nigeria
    </span>
    <div className="w-px h-16 bg-muted opacity-30" />
  </motion.div>

  <motion.div style={{ y: heroY }} className="w-full">
    <div className="max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">

      {/* ── Left content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-teal-primary" />
          <span className="font-body text-[0.72rem] font-medium tracking-[0.2em] uppercase text-teal-primary">
            QA Engineer & Senior SDET
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-bold text-dark leading-[1.05] mb-3"
          style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
        >
          Adepoju Toheeb
          <br />
          <span className="text-teal-primary italic">Ayobami</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="font-body text-muted text-lg font-light max-w-xl leading-relaxed mb-2"
        >
          {portfolioData.tagline}
        </motion.p>

        {/* Location */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-muted text-sm mb-7"
        >
          <FontAwesomeIcon icon={faLocationDot} className="text-teal-primary text-xs" />
          <span className="font-body tracking-wide">{portfolioData.location}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
          <motion.button
            onClick={() => navigate('/experience')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
          >
            View Experience
          </motion.button>
          <motion.a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-outline flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </motion.a>
          <motion.button
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-outline"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-10 pt-6 border-t border-stone-200"
        >
          {portfolioData.stats.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} startCount={startCount} />
          ))}
        </motion.div>
      </motion.div>

      {/* ── Right — Profile Image ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        className="hidden lg:flex flex-col items-center gap-6 shrink-0"
      >
        {/* Outer ring */}
        <div className="relative">
          {/* Decorative rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-3 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #0f6e56, transparent, #0f6e56, transparent)',
              opacity: 0.15,
            }}
          />

          {/* Teal ring */}
          <div className="absolute -inset-1.5 rounded-full border-2 border-teal-primary opacity-20" />

          {/* Profile image circle */}
          <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
            <img
              src="/toheeb.png"
              alt="Adepoju Toheeb Ayobami"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Floating badge — Years exp */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 -left-6 bg-white border border-stone-200 rounded-xl px-4 py-3 shadow-lg z-20"
          >
            <p className="font-display text-2xl font-bold text-teal-primary leading-none">5+</p>
            <p className="font-body text-[0.68rem] text-muted tracking-wide">Years in QA</p>
          </motion.div>

          {/* Floating badge — Available */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -top-2 -right-6 bg-teal-primary rounded-xl px-4 py-3 shadow-lg z-20"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <p className="font-body text-[0.68rem] text-white font-medium tracking-wide">
                Available
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

    </div>
  </motion.div>
</section>
      {/* ── WHY HIRE ME ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-teal-primary" />
            <span className="font-body text-[0.72rem] font-medium tracking-[0.2em] uppercase text-teal-primary">
              Value Proposition
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-display font-bold text-dark leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Why Teams Choose
            <span className="text-teal-primary italic"> Toheeb</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="w-16 h-0.5 bg-teal-primary mb-6" />

          <motion.p
            variants={itemVariants}
            className="font-body text-muted text-[0.95rem] leading-relaxed max-w-2xl mb-14"
          >
            Beyond finding bugs — I bring strategic thinking, automation expertise,
            and fintech domain knowledge that helps teams ship faster with confidence.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyHireMe.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(15,110,86,0.08)' }}
                className="flex gap-5 p-6 border border-stone-200 rounded-xl bg-cream transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center shrink-0 mt-0.5">
                  <FontAwesomeIcon icon={item.icon} className="text-teal-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-teal-primary" />
            <span className="font-body text-[0.72rem] font-medium tracking-[0.2em] uppercase text-teal-primary">
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-display font-bold text-dark leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            What Colleagues
            <span className="text-teal-primary italic"> Say</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-body text-muted text-[0.95rem] leading-relaxed max-w-2xl mb-3"
          >
            Real recommendations from LinkedIn — colleagues who've worked directly
            with Toheeb at PalmPay.
          </motion.p>

          <motion.div variants={itemVariants} className="w-16 h-0.5 bg-teal-primary mb-14" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.07)' }}
                className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col transition-all duration-300"
              >
                {/* LinkedIn badge */}
                <div className="flex items-center justify-between mb-4">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="text-teal-primary opacity-20 text-3xl"
                  />
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-[#0077b5] text-xl opacity-60"
                  />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <FontAwesomeIcon
                      key={j}
                      icon={faStar}
                      className="text-amber-400 text-xs"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="font-body text-sm text-muted leading-relaxed flex-1 mb-6">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-start gap-3 pt-4 border-t border-stone-100">
                  <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-teal-primary">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-dark">{t.name}</p>
                    <p className="font-body text-xs text-teal-primary leading-snug mt-0.5">
                      {t.role}
                    </p>
                    <p className="font-body text-xs text-muted mt-0.5">
                      {t.company} · {t.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 bg-dark">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2
              className="font-display font-bold text-white leading-tight mb-3"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Ready to ship{' '}
              <span className="text-teal-primary italic">bug-free</span> software?
            </h2>
            <p className="font-body text-stone-400 text-sm leading-relaxed max-w-lg">
              Let's talk about how I can help your fintech team deliver quality
              at scale — faster, smarter, and with more confidence.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary whitespace-nowrap"
            >
              Hire Me
            </motion.button>
            <motion.button
              onClick={() => navigate('/about')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="font-body text-[0.78rem] font-semibold tracking-[0.12em] uppercase border border-stone-600 text-stone-300 px-6 py-3 rounded-sm whitespace-nowrap hover:border-stone-400 hover:text-white transition-colors duration-200 bg-transparent cursor-pointer"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}