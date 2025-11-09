import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'James Smith',
    role: 'Business Owner',
    rating: 5,
    date: '4 days ago',
    content: 'The chauffeur was impeccably dressed and treated us like royalty. The luxury limousine was beautifully decorated, adding an extra touch of elegance to our special day. Thank you for making our wedding transportation seamless and memorable!'
  },
  {
    name: 'Emily Clark',
    role: 'Manager',
    rating: 5,
    date: '1 week ago',
    content: 'Outstanding service! The punctuality and professionalism of the chauffeur made my business trip stress-free. The vehicle was immaculate and comfortable. Highly recommend for corporate travel.'
  },
  {
    name: 'Oliver Williams',
    role: 'Consultant',
    rating: 5,
    date: '2 weeks ago',
    content: 'Exceptional experience from start to finish. The attention to detail and commitment to customer satisfaction is unmatched. Will definitely use this service again for all my transportation needs.'
  }
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block">
        <img
          src="https://framerusercontent.com/images/6c0wNJG9mSa9NUI880HWpL06dAI.png?width=1320&height=1586"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
            TESTIMONIALS
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-center mb-8"
        >
          100% of Our Client<br />Trust Our Service
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg text-gray-700 mb-16 max-w-3xl mx-auto"
        >
          Our dedication to providing exceptional chauffeur services has earned us a
          stellar reputation, with 100% of our clients trusting us for their transportation
          needs.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Date */}
              <p className="text-sm text-gray-500 mb-4">{testimonial.date}</p>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Logo */}
              <div className="mt-6">
                <img
                  src="https://framerusercontent.com/images/b2Ee5303AEKaeoA5nzPfQ4dVezk.png?width=294&height=49"
                  alt="Company logo"
                  className="h-8 opacity-50"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
