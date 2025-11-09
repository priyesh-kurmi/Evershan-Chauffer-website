import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react'
import OptimizedImage from './OptimizedImage'

const fleet = [
  {
    name: 'Bentley Bentayga',
    description: 'The ultimate luxury SUV, combining handcrafted British excellence with commanding performance. Features diamond-quilted leather seats and adaptive air suspension.',
    passengers: 5,
    luggage: 7,
    image: `${import.meta.env.BASE_URL}images/Bentley Bentayga.png`,
    link: '/cars/bentley-bentayga'
  },
  {
    name: 'Rolls-Royce Phantom',
    description: 'The pinnacle of automotive luxury with signature "Magic Carpet Ride" suspension, starlight headliner, and bespoke interior craftsmanship.',
    passengers: 5,
    luggage: 6,
    image: `${import.meta.env.BASE_URL}images/Rolls-Royce Phantom.png`,
    link: '/cars/rolls-royce-phantom'
  },
  {
    name: 'Rolls-Royce Ghost',
    description: 'A contemporary interpretation of luxury with illuminated fascia, advanced driver assistance, and the iconic Spirit of Ecstasy.',
    passengers: 5,
    luggage: 5,
    image: `${import.meta.env.BASE_URL}images/Rolls-Royce Ghost.png`,
    link: '/cars/rolls-royce-ghost'
  },
  {
    name: 'Range Rover',
    description: 'Luxury SUV capability with sophisticated British design. Features Terrain Response 2, air suspension, and executive-class seating.',
    passengers: 5,
    luggage: 8,
    image: `${import.meta.env.BASE_URL}images/Range Rover.png`,
    link: '/cars/range-rover'
  }
]

export default function Fleet() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % fleet.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + fleet.length) % fleet.length)
  }

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
            OUR FLEET
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-12 sm:mb-16 md:mb-20"
        >
          Book Luxury Fleet
        </motion.h2>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Slider Container */}
          <div 
            className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-5xl mx-auto relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous car"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next car"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:h-[400px]">
              {/* Image */}
              <Link 
                to={fleet[currentIndex].link}
                className="relative h-64 sm:h-80 lg:h-full overflow-hidden group cursor-pointer"
              >
                <OptimizedImage
                  src={fleet[currentIndex].image}
                  alt={fleet[currentIndex].name}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    fleet[currentIndex].name === 'Range Rover' 
                      ? 'object-[center_50%]' 
                      : 'object-center'
                  }`}
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Link>

              {/* Content - Wrapped in Link */}
              <Link 
                to={fleet[currentIndex].link}
                className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center group cursor-pointer"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold mb-3 sm:mb-4 group-hover:text-gray-600 transition-colors">
                  {fleet[currentIndex].name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm">
                  {fleet[currentIndex].description}
                </p>

                {/* Capacity */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-xs font-semibold mb-3 uppercase tracking-wide text-gray-500">Capacity</p>
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">{fleet[currentIndex].passengers} Passengers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">{fleet[currentIndex].luggage} Luggage</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm font-semibold outline outline-3 outline-black outline-offset-[-3px] transition-all duration-400 hover:bg-transparent hover:text-black text-center w-fit"
                >
                  BOOK NOW
                </Link>
              </Link>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-6 sm:mt-8">
            <div className="flex justify-center gap-2 sm:gap-4 px-4">
              {fleet.map((car, index) => (
                <Link
                  key={index}
                  to={car.link}
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentIndex(index)
                  }}
                  className={`relative w-16 h-12 sm:w-24 sm:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex 
                      ? 'ring-2 sm:ring-4 ring-black scale-105' 
                      : 'ring-1 sm:ring-2 ring-gray-300 hover:ring-gray-400 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`View ${car.name}`}
                >
                  <OptimizedImage
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-500 text-base sm:text-lg font-medium mt-5">
              CHOOSE YOUR CAR
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
