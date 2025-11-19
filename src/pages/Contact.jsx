import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle, XCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [showNotification, setShowNotification] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      const serviceId = 'service_mngju08'
      const templateId = 'template_eversham'
      const publicKey = 'BaD7eViGWoKgNloJF'

      const templateParams = {
        to_email: 'bookingevershamchauffers@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setShowNotification(true)
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
      // Auto hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false)
      }, 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
      setShowNotification(true)
      
      // Auto hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24">
      {/* Custom Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-auto sm:min-w-[400px] sm:max-w-md px-4"
          >
            <div className={`rounded-lg shadow-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4 ${
              submitStatus === 'success' 
                ? 'bg-green-50 border-2 border-green-500' 
                : 'bg-red-50 border-2 border-red-500'
            }`}>
              {submitStatus === 'success' ? (
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1 min-w-0">
                <h3 className={`font-bold text-base sm:text-lg mb-1 ${
                  submitStatus === 'success' ? 'text-green-900' : 'text-red-900'
                }`}>
                  {submitStatus === 'success' ? 'Message Sent!' : 'Error Sending Message'}
                </h3>
                <p className={`text-xs sm:text-sm ${
                  submitStatus === 'success' ? 'text-green-700' : 'text-red-700'
                }`}>
                  {submitStatus === 'success' 
                    ? 'Thank you for your inquiry! We will contact you shortly.' 
                    : 'Sorry, there was an error sending your message. Please try calling us directly.'}
                </p>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className={`text-xl sm:text-2xl leading-none flex-shrink-0 ${
                  submitStatus === 'success' ? 'text-green-600 hover:text-green-800' : 'text-red-600 hover:text-red-800'
                } transition-colors`}
                aria-label="Close notification"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative py-12 flex items-center justify-center overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Get in touch with us for bookings and inquiries
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-12 pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-display font-bold mb-8">Get In Touch</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Ready to experience refined luxury? Contact us today for bookings, inquiries, or to arrange a bespoke chauffeur service.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Phone</h3>
                    <a
                      href="tel:+4407377712494"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      07377712494
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Email</h3>
                    <a
                      href="mailto:bookingevershamchauffers@gmail.com"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      bookingevershamchauffers@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Address</h3>
                    <p className="text-gray-700">
                      35 Broad St Ave<br />
                      New Broad St, London EC2M 1NH
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Hours</h3>
                    <p className="text-gray-700">
                      Available 24/7<br />
                      Always at your service<br />
                      <span className="text-sm text-gray-500 mt-2 block">
                        Call us anytime for immediate assistance
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-md mx-auto px-8 py-6 bg-gray-50 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-800 mb-1" htmlFor="name">Your Name</label>
                    <input
                      className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                      placeholder="Enter your name"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
                    <input
                      className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                      placeholder="Enter your email"
                      name="email"
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
                    <textarea
                      className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                      rows="4"
                      placeholder="Enter your message"
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
