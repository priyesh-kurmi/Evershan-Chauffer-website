import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: '1. What services does Chauffeur offer?',
    answer: 'At Chauffeur, we provide a wide range of luxury transportation services, including airport transfers, corporate travel, event transportation, city tours, and personalized journeys. Our services are tailored to meet your specific needs.'
  },
  {
    question: '2. How do I book a chauffeur service?',
    answer: 'Booking is simple and convenient. You can book through our website by filling out the contact form, calling us directly, or emailing us. We recommend booking in advance to ensure availability, especially during peak seasons.'
  },
  {
    question: '3. What areas do you serve?',
    answer: 'We provide comprehensive chauffeur services throughout the metropolitan area and surrounding regions. For specific location inquiries or long-distance travel requests, please contact us directly to discuss your needs.'
  },
  {
    question: '4. What types of vehicles are available in your fleet?',
    answer: 'Our fleet includes a range of luxury vehicles such as the Rolls Royce Cullinan, Mercedes-Benz S-Class, BMW 7 Series, and other premium sedans and SUVs. All vehicles are maintained to the highest standards and equipped with modern amenities.'
  },
  {
    question: '5. Can I request a specific chauffeur?',
    answer: 'Yes, if you have worked with one of our chauffeurs before and would like to request them for your next journey, please let us know when booking. We will do our best to accommodate your request based on availability.'
  },
  {
    question: '6. How are your chauffeurs trained?',
    answer: 'All our chauffeurs undergo rigorous training in professional driving, customer service, safety protocols, and local area knowledge. They are licensed, insured, and background-checked to ensure the highest standards of service and security.'
  }
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 hidden lg:block">
        <img
          src="https://framerusercontent.com/images/7TgCuuUWL7V99BblWhxSUTbvwN4.png?scale-down-to=2048"
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
            FAQ
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-center mb-8"
        >
          Frequently Asked Question
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg text-gray-700 mb-16 max-w-3xl mx-auto"
        >
          <p className="mb-4">
            Find answers to the most common questions about our chauffeur services. Whether
            you're curious about our booking process, vehicle options, or the level of
            professionalism you can expect from our drivers, we've got you covered.
          </p>
          <p>
            If you can't find what you're looking for, feel free to{' '}
            <Link to="/contact" className="text-black font-semibold underline hover:no-underline">
              Contact us
            </Link>{' '}
            directly—we're always happy to assist!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold pr-8">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
