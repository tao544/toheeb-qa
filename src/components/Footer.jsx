import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { portfolioData } from '../data/portfolio'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="bg-dark text-white px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <button
        onClick={() => navigate('/')}
        className="font-display text-lg font-bold bg-transparent border-none text-white cursor-pointer"
      >
        ATA<span className="text-teal-primary">.</span>
      </button>

      <p className="font-body text-[0.75rem] text-stone-400 tracking-wide">
        © {new Date().getFullYear()} Adepoju Toheeb Ayobami. All rights reserved.
      </p>

      <div className="flex items-center gap-4">
        <a
          href={portfolioData.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-stone-400 hover:text-teal-primary transition-colors duration-200 text-lg"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  )
}