import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md border-b border-stone-200 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Logo */}
      <motion.button
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.04 }}
        className="font-display text-xl font-bold text-dark tracking-wide bg-transparent border-none cursor-pointer"
      >
        ATA<span className="text-teal-primary">.</span>
      </motion.button>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-10 list-none">
        {navLinks.map((link, i) => (
          <motion.li
            key={link.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `font-body text-[0.75rem] font-medium tracking-[0.14em] uppercase no-underline transition-all duration-200 pb-[3px] border-b ${
                  isActive
                    ? 'text-teal-primary border-teal-primary'
                    : 'text-muted border-transparent hover:text-teal-primary hover:border-teal-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button
        onClick={() => navigate('/contact')}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="hidden md:block font-body text-[0.75rem] font-semibold tracking-[0.12em] uppercase bg-teal-primary text-white px-5 py-[0.55rem] rounded-sm border-none cursor-pointer hover:bg-teal-muted transition-colors duration-200"
      >
        Hire Me
      </motion.button>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-dark text-xl bg-transparent border-none cursor-pointer p-2"
      >
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-[68px] left-0 right-0 bg-cream/98 backdrop-blur-md border-b border-stone-200 flex flex-col gap-5 px-8 py-6 md:hidden"
          >
            {navLinks.map(link => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-body text-[0.85rem] font-medium tracking-[0.12em] uppercase no-underline transition-colors duration-200 ${
                    isActive ? 'text-teal-primary' : 'text-dark hover:text-teal-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={() => { navigate('/contact'); setMenuOpen(false) }}
              className="font-body text-[0.75rem] font-semibold tracking-[0.12em] uppercase bg-teal-primary text-white px-5 py-3 rounded-sm text-center border-none cursor-pointer hover:bg-teal-muted transition-colors duration-200 mt-2"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}