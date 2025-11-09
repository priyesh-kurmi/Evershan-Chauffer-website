import { motion } from 'framer-motion'

export default function TermsAndConditions() {
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
            Terms and Conditions
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
                Welcome to Eversham Chauffeurs. These Terms and Conditions govern your use of our chauffeur services 
                and website. By booking or using our services, you agree to be bound by these terms.
              </p>
            </div>

            {/* Booking and Reservations */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">1. Booking and Reservations</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-black">1.1 Booking Confirmation:</strong> All bookings must be confirmed 
                  in writing via email, phone, or through our website. A booking is confirmed only when you receive 
                  written confirmation from Eversham Chauffeurs.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">1.2 Accuracy of Information:</strong> You are responsible for 
                  providing accurate information including pickup/drop-off locations, dates, times, and contact details. 
                  Eversham Chauffeurs is not liable for issues arising from incorrect information provided by the client.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">1.3 Advance Booking:</strong> We recommend booking at least 24 hours 
                  in advance. While we endeavor to accommodate last-minute bookings, availability cannot be guaranteed.
                </p>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">2. Payment Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-black">2.1 Payment Methods:</strong> We accept payment by credit/debit card, 
                  bank transfer, and corporate accounts. Full payment details will be provided upon booking confirmation.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">2.2 Pricing:</strong> All prices are quoted in the local currency and 
                  are subject to change. The price quoted at the time of booking is the price you will pay, provided there 
                  are no changes to the booking.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">2.3 Additional Charges:</strong> Additional charges may apply for 
                  waiting time beyond the agreed grace period, route changes, tolls, parking fees, and airport charges.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">2.4 Gratuities:</strong> Gratuities are not included in our rates 
                  and are at the client's discretion.
                </p>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">3. Cancellation Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-black">3.1 Cancellation by Client:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>More than 24 hours before pickup: Full refund</li>
                  <li>12-24 hours before pickup: 50% charge of total booking</li>
                  <li>Less than 12 hours before pickup: 100% charge of total booking</li>
                  <li>No-show: 100% charge of total booking</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  <strong className="text-black">3.2 Cancellation by Eversham:</strong> In the unlikely event that we 
                  need to cancel your booking, we will notify you immediately and offer a full refund or alternative arrangements.
                </p>
              </div>
            </div>

            {/* Service Standards */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">4. Service Standards</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-black">4.1 Vehicle Standards:</strong> All vehicles are regularly maintained, 
                  cleaned, and inspected to ensure the highest standards of safety and comfort.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">4.2 Chauffeur Standards:</strong> All chauffeurs are professionally 
                  trained, licensed, insured, and undergo regular background checks.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">4.3 Punctuality:</strong> We strive to arrive 10-15 minutes before 
                  the scheduled pickup time. For airport pickups, we monitor flight times and adjust accordingly.
                </p>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">5. Client Responsibilities</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-black">5.1 Behavior:</strong> Clients must behave in a respectful manner 
                  toward chauffeurs and other passengers. We reserve the right to refuse service to intoxicated or 
                  abusive passengers.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">5.2 Vehicle Care:</strong> Clients are responsible for any damage 
                  to the vehicle caused during their journey, including but not limited to smoking, staining, or vandalism.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">5.3 Lost Property:</strong> While we make reasonable efforts to 
                  return lost items, Eversham Chauffeurs cannot be held responsible for items left in vehicles.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">5.4 Child Safety:</strong> Clients must provide appropriate child 
                  seats for children under the legal age requirement. Please inform us at the time of booking.
                </p>
              </div>
            </div>

            {/* Liability and Insurance */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">6. Liability and Insurance</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-black">6.1 Insurance Coverage:</strong> All vehicles are fully insured 
                  for passenger transport as required by law.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">6.2 Limitation of Liability:</strong> Eversham Chauffeurs' liability 
                  is limited to the value of the service provided. We are not liable for indirect or consequential losses 
                  including missed flights, meetings, or events due to circumstances beyond our control (traffic, weather, etc.).
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">6.3 Personal Belongings:</strong> Clients are responsible for their 
                  personal belongings. We recommend taking valuable items with you when exiting the vehicle.
                </p>
              </div>
            </div>

            {/* Force Majeure */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">7. Force Majeure</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Eversham Chauffeurs shall not be liable for failure to perform services due to circumstances beyond 
                  our reasonable control including but not limited to: severe weather conditions, natural disasters, 
                  strikes, civil unrest, acts of terrorism, road closures, or accidents.
                </p>
              </div>
            </div>

            {/* Privacy and Data Protection */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">8. Privacy and Data Protection</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Your privacy is important to us. Please refer to our Privacy Policy for information on how we 
                  collect, use, and protect your personal data.
                </p>
              </div>
            </div>

            {/* Amendments */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">9. Amendments to Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Eversham Chauffeurs reserves the right to amend these Terms and Conditions at any time. Changes 
                  will be posted on our website and will apply to bookings made after the date of posting.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-black mb-6">10. Governing Law</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  These Terms and Conditions are governed by and construed in accordance with local laws. Any disputes 
                  arising from these terms shall be subject to the exclusive jurisdiction of the local courts.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-display font-bold text-black mb-6">Contact Information</h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black">Email:</strong> bookingevershamchauffers@gmail.com<br />
                  <strong className="text-black">Phone:</strong> 07377712494<br />
                  <strong className="text-black">Address:</strong> 35 Broad St Ave, New Broad St, London EC2M 1NH
                </p>
              </div>
            </div>

            {/* Acceptance */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-700 leading-relaxed">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by 
                these Terms and Conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
