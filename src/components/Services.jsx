import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Plane, Briefcase, Calendar } from 'lucide-react'

const services = [
  {
    title: 'Airport Transfers',
    description: 'Enjoy seamless airport transfers with our luxury chauffeurs, ensuring punctuality, comfort, and a stress-free journey.',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80'
  },
  {
    title: 'Corporate Travel',
    description: 'Tailored services for business professionals, offering reliable and efficient transportation for meetings, conferences, and events.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80'
  },
  {
    title: 'Special Occasion Services',
    description: 'Tailored transportation for anniversaries, birthdays, or other significant personal celebrations.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800&q=80'
  }
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
            OUR SERVICES
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-center mb-8"
        >
          WE HAVE YOU COVERED
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg text-gray-700 mb-16 max-w-3xl mx-auto"
        >
          Many business executives, celebrities, tourists, and individuals celebrating
          special events use chauffeur services.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Link
                to="/services"
                className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-gray-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
            <img
              src="https://framerusercontent.com/images/JEGBiwzLPGwVqudag2jsSUsw7W0.png?scale-down-to=2048&width=5920&height=2640"
              alt="Travel in Comfort"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-sm font-semibold tracking-widest uppercase mb-4">
                  TRAVEL IN COMFORT
                </p>
                <h3 className="text-4xl sm:text-5xl font-display font-bold">
                  Book Luxury Rides &<br />Enjoy Chauffeur Services
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
