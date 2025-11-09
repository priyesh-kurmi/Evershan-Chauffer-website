import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import OptimizedImage from '../../components/OptimizedImage'

export default function BentleyBentayga() {
  const galleryImages = [
    `${import.meta.env.BASE_URL}images/bentley/bentley1.jpg`,
    `${import.meta.env.BASE_URL}images/bentley/bentley2.jpg`,
    `${import.meta.env.BASE_URL}images/bentley/bentley3.png`,
    `${import.meta.env.BASE_URL}images/bentley/benley4.jpg`,
    `${import.meta.env.BASE_URL}images/bentley/bentley5.png`
  ]

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header Section */}
      <section className="relative py-12 flex items-center justify-center overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-6"
          >
            Bentley Bentayga
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            A world of boundless potential
          </motion.p>
        </div>
      </section>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <OptimizedImage
                src={`${import.meta.env.BASE_URL}images/Bentley Bentayga.png`}
                alt="Bentley Bentayga"
                className="w-full h-auto object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4 sm:mb-6">
                Choose this iconic car for your next event, available with our chauffeuring service
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {/* Corporate Events */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Corporate Events</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Elevate your business image with our premium cars
                  </p>
                </div>

                {/* Weddings */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Weddings</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Make your wedding unforgettable with our stunning luxury cars
                  </p>
                </div>

                {/* Special Events */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Special Events</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Choose from our luxury vehicles for your next special event
                  </p>
                </div>

                {/* Airport Transfers */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Airport Transfers</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Travel is style with our chauffeured service to or from airports
                  </p>
                </div>

                {/* Photo/Video Shoots */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Photo/Video Shoots</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Elevate your photo or video production with our stunning cars
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 sm:pt-6">
              <Link
                to="/contact"
                className="group relative inline-block w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold overflow-hidden bg-black text-white border-2 border-black text-center"
              >
                <span className="absolute inset-0 bg-black transition-transform duration-700 ease-out"></span>
                <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"></span>
                
                <span className="relative z-10 text-white group-hover:text-black transition-colors duration-700">
                  Book Now - From £305
                </span>
                
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
        </div>

      {/* Image Gallery Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
              Gallery
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Explore more views of the Bentley Bentayga
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <OptimizedImage
                    src={image}
                    alt={`Bentley Bentayga view ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    )
  }
