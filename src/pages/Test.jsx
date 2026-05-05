
export default function Home() {
  const [startCount, setStartCount] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setStartCount(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: 'easeInOut' }}
    >
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-17 overflow-hidden bg-cream">

        {/* Background blobs */}
        <div className="absolute top-20 right-0 w-125 h-125 rounded-full bg-teal-light opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-75 h-75 rounded-full bg-teal-light opacity-20 blur-3xl pointer-events-none" />

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

        {/* Main content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-teal-primary" />
            <span className="font-body text-[0.72rem] font-medium tracking-[0.2em] uppercase text-teal-primary">
              QA Engineer & Senior SDET
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-dark leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            Adepoju Toheeb
            <br />
            <span className="text-teal-primary italic">Ayobami</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="font-body text-muted text-lg font-light max-w-xl leading-relaxed mb-3"
          >
            {portfolioData.tagline}
          </motion.p>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-muted text-sm mb-10"
          >
            <FontAwesomeIcon icon={faLocationDot} className="text-teal-primary text-xs" />
            <span className="font-body tracking-wide">{portfolioData.location}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
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
            className="flex flex-wrap gap-10 pt-8 border-t border-stone-200"
          >
            {portfolioData.stats.map((stat, i) => (
              <StatItem key={i} stat={stat} index={i} startCount={startCount} />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  )
}