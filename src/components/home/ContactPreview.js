// src/components/home/ContactPreview.js
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPreview() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and let's bring your vision to life with our premium renovation and AC services in Dubai.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-300">+971589071754</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">info@thealpamayo.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-300">Al Qouz, Dubai, United Arab Emirates</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p className="text-gray-300">24/7 Emergency Services Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-6">Get Free Consultation</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-gray-800"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-gray-800"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-gray-800"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-gray-800"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-gray-800">
                <option value="">Select Service</option>
                <option value="villa">Villa Renovation</option>
                <option value="apartment">Apartment Renovation</option>
                <option value="office">Office Renovation</option>
                <option value="ac">AC Services</option>
              </select>
              <textarea
                placeholder="Project Details"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-gray-800"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-primary transition-colors duration-300 font-semibold"
              >
                Request Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
