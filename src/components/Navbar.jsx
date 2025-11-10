import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // Scrolling down - hide immediately
        setIsVisible(false)
      } else {
        // Scrolling up - show
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 select-none cursor-pointer"
            style={{ fontFamily: 'League Spartan, sans-serif', userSelect: 'none' }}
            aria-label="Eversham Chauffeur logo - Go to home page"
          >
            <div className="flex flex-col items-center leading-none">
              <span className="text-2xl font-bold tracking-wider">EVERSHAM</span>
              <span className="text-2xl font-bold tracking-wider -mt-1">CHAUFFEUR</span>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="relative group text-gray-700 hover:text-black transition-colors py-2">
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-transform duration-300 origin-left ${
                location.pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
            <Link to="/services" className="relative group text-gray-700 hover:text-black transition-colors py-2">
              Services
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-transform duration-300 origin-left ${
                location.pathname === '/services' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
            <Link to="/about" className="relative group text-gray-700 hover:text-black transition-colors py-2">
              About
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-transform duration-300 origin-left ${
                location.pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
            <Link to="/contact" className="relative group text-gray-700 hover:text-black transition-colors py-2">
              Contact
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-transform duration-300 origin-left ${
                location.pathname === '/contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="flex justify-center items-center px-6 py-3 gap-4 bg-black outline outline-3 outline-black outline-offset-[-3px] rounded-md border-none cursor-pointer transition-all duration-400 hover:bg-transparent group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-400">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white" className="transition-all duration-400 group-hover:fill-black"/>
              </svg>
              <span className="text-white font-bold text-base transition-all duration-400 group-hover:text-black">
                Book Now
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/"
                className="block py-2 text-gray-700 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block py-2 text-gray-700 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block py-2 text-gray-700 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-gray-700 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
