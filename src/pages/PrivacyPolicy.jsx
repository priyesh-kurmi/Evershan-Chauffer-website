import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="relative py-12 flex items-center justify-center overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Last Updated: November 2025
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 pb-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-700 leading-relaxed mb-6">
                At Eversham Chauffeurs, we are committed to protecting your privacy and ensuring the security of your 
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our services or visit our website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you consent to the data practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">1. Information We Collect</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">1.1 Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We collect personal information that you voluntarily provide when booking our services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Pickup and drop-off addresses</li>
                  <li>Payment information (processed securely through third-party payment processors)</li>
                  <li>Special requests or requirements</li>
                  <li>Corporate account details (for business clients)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">1.2 Booking Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Date and time of service</li>
                  <li>Vehicle preferences</li>
                  <li>Journey details and routes</li>
                  <li>Flight information (for airport transfers)</li>
                  <li>Booking history and preferences</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">1.3 Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages viewed and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Cookie data (see Cookie Policy section)</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-black">2.1 Service Delivery:</strong> To provide, maintain, and improve 
                  our chauffeur services, including processing bookings, dispatching vehicles, and coordinating pickups.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">2.2 Communication:</strong> To communicate with you about your 
                  bookings, send confirmations, updates, and respond to your inquiries.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">2.3 Payment Processing:</strong> To process payments and prevent 
                  fraudulent transactions.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">2.4 Personalization:</strong> To remember your preferences and 
                  provide a personalized experience for repeat bookings.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">2.5 Marketing:</strong> With your consent, to send promotional 
                  materials, special offers, and newsletters about our services.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">2.6 Legal Compliance:</strong> To comply with legal obligations, 
                  resolve disputes, and enforce our agreements.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">2.7 Analytics:</strong> To analyze usage patterns and improve 
                  our website and services.
                </p>
              </div>
            </div>

            {/* How We Share Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">3. How We Share Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-black">3.1 Service Providers:</strong> With chauffeurs and third-party 
                  service providers who assist in delivering our services (payment processors, booking systems, etc.).
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">3.2 Legal Requirements:</strong> When required by law, court order, 
                  or government regulation, or to protect our rights and safety.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">3.3 Business Transfers:</strong> In connection with a merger, sale, 
                  or acquisition of all or part of our business.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">3.4 With Your Consent:</strong> When you explicitly authorize us 
                  to share your information for a specific purpose.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">4. Data Security</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of sensitive data during transmission (SSL/TLS)</li>
                  <li>Secure payment processing through PCI-DSS compliant providers</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  However, no method of transmission over the internet is 100% secure. While we strive to protect 
                  your information, we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">5. Data Retention</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  We retain your personal information for as long as necessary to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide our services to you</li>
                  <li>Comply with legal obligations (e.g., tax and accounting requirements)</li>
                  <li>Resolve disputes and enforce our agreements</li>
                  <li>Maintain booking history for service improvement</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  When your information is no longer needed, we will securely delete or anonymize it.
                </p>
              </div>
            </div>

            {/* Your Privacy Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">6. Your Privacy Rights</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">You have the following rights regarding your personal information:</p>
                <p className="leading-relaxed">
                  <strong className="text-black">6.1 Access:</strong> Request a copy of the personal information 
                  we hold about you.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">6.2 Correction:</strong> Request correction of inaccurate or 
                  incomplete information.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">6.3 Deletion:</strong> Request deletion of your personal information, 
                  subject to legal retention requirements.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">6.4 Restriction:</strong> Request restriction of processing your 
                  personal information in certain circumstances.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">6.5 Objection:</strong> Object to processing of your personal 
                  information for marketing purposes.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">6.6 Data Portability:</strong> Request transfer of your information 
                  to another service provider.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">6.7 Withdraw Consent:</strong> Withdraw consent for processing 
                  where consent was the basis for processing.
                </p>
                <p className="leading-relaxed mt-4">
                  To exercise these rights, please contact us at bookingevershamchauffers@gmail.com.
                </p>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">7. Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-black">Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong className="text-black">Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong className="text-black">Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong className="text-black">Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may affect 
                  website functionality.
                </p>
              </div>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">8. Third-Party Links</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy 
                  practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">9. Children's Privacy</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect 
                  personal information from children. If you believe we have collected information from a child, 
                  please contact us immediately.
                </p>
              </div>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">10. International Data Transfers</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of 
                  residence. We ensure appropriate safeguards are in place to protect your information in accordance 
                  with this Privacy Policy.
                </p>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">11. Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an 
                  updated "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-display font-bold text-black mb-6">12. Contact Us</h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  If you have questions, concerns, or requests regarding this Privacy Policy or your personal information:
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">Email:</strong> bookingevershamchauffers@gmail.com<br />
                  <strong className="text-black">Phone:</strong> 07377712494<br />
                  <strong className="text-black">Address:</strong> 35 Broad St Ave, New Broad St, London EC2M 1NH
                </p>
                <p className="leading-relaxed mt-4">
                  We will respond to your request within 30 days.
                </p>
              </div>
            </div>

            {/* Consent */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-700 leading-relaxed">
                By using our services and website, you acknowledge that you have read and understood this Privacy 
                Policy and consent to the collection, use, and disclosure of your information as described herein.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
