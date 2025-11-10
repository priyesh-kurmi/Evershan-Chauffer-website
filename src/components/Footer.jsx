import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 md:gap-x-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-display font-bold mb-8 tracking-wider">
              EVERSHAM
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Executive chauffeur services delivering exceptional luxury and reliability for business and leisure travel.
            </p>
            <div className="w-16 h-0.5 bg-black"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-8 tracking-widest text-gray-900 uppercase">Quick Links</h4>
            <ul className="space-y-5">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-black transition-colors text-base group relative inline-block">
                  <span className="relative">
                    About Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-black transition-colors text-base group relative inline-block">
                  <span className="relative">
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-black transition-colors text-base group relative inline-block">
                  <span className="relative">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-black transition-colors text-base group relative inline-block">
                  <span className="relative">
                    Privacy Policy
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-8 tracking-widest text-gray-900 uppercase">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start text-gray-600 group">
                <Phone size={18} className="mr-3 mt-0.5 flex-shrink-0 text-gray-900" />
                <a href="tel:+4407377712494" className="hover:text-black transition-colors text-base">
                  07377712494
                </a>
              </li>
              <li className="flex items-start text-gray-600 group">
                <Mail size={18} className="mr-3 mt-0.5 flex-shrink-0 text-gray-900" />
                <a href="mailto:bookingevershamchauffers@gmail.com" className="hover:text-black transition-colors text-base">
                  bookingevershamchauffers@gmail.com
                </a>
              </li>
              <li className="flex items-start text-gray-600 group">
                <MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0 text-gray-900" />
                <p className="text-base leading-relaxed">
                  35 Broad St Ave<br />New Broad St, London EC2M 1NH
                </p>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-sm font-bold mb-8 tracking-widest text-gray-900 uppercase">Connect With Us</h4>
            <div className="flex space-x-5 mb-10">
              <a
                href="https://facebook.com/evershamchauffers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-black hover:border-black transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/evershamchauffers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-black hover:border-black transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com/evershamchauffers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-black hover:border-black transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
            </div>
            
            <div className="mt-8">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Available 24/7</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Book your premium chauffeur service anytime, day or night
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center md:text-left text-gray-600 text-sm">
              © 2025 <span className="font-semibold text-black">Eversham Chauffeurs</span>. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms-and-conditions" className="text-sm text-gray-600 hover:text-black transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-black transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
