// src/components/home/LuxuryServices.js
import { useState } from 'react'

export default function LuxuryServices() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Villa Renovation",
      description: "Transform your villa into a luxury retreat with our premium renovation services. We specialize in creating bespoke living spaces that reflect your style and meet your family's needs.",
      features: ["Custom Design Solutions", "Premium Materials", "Smart Home Integration", "Landscaping Services"],
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      startingPrice: "AED 150,000"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Apartment Renovation",
      description: "Maximize space and luxury in your apartment with innovative design solutions. Perfect for modern urban living in Dubai's prestigious towers.",
      features: ["Space Optimization", "Modern Finishes", "Storage Solutions", "Quality Assurance"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      startingPrice: "AED 50,000"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Office Renovation",
      description: "Create inspiring workspaces that boost productivity and reflect your brand identity. From startups to corporate headquarters in Dubai.",
      features: ["Ergonomic Design", "Brand Integration", "Professional Finish", "Technology Integration"],
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      startingPrice: "AED 80,000"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "AC Services",
      description: "Advanced climate control solutions for ultimate comfort in Dubai's challenging climate. Energy-efficient systems that save you money.",
      features: ["VRF Systems", "Energy Efficient", "24/7 Maintenance", "Smart Controls"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      startingPrice: "AED 5,000"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Luxury Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Premium renovation and AC solutions tailored for Dubai's most discerning clients
          </p>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mr-4">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                    <div className="text-secondary font-semibold">{service.startingPrice}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-secondary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-secondary text-white py-3 rounded-xl hover:bg-primary transition-colors duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          {/* Service Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-2xl p-2 flex space-x-2">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeService === index
                      ? 'bg-secondary text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white hover:shadow-md'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Service Content */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-2 gap-12">
              <div className="p-12">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mr-6">
                    <div className="text-white">
                      {services[activeService].icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {services[activeService].title}
                    </h3>
                    <div className="text-2xl text-secondary font-bold">
                      Starting from {services[activeService].startingPrice}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {services[activeService].description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {services[activeService].features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 text-lg">
                      <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-4">
                  <button className="bg-secondary text-white px-8 py-4 rounded-xl hover:bg-primary transition-colors duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
                    Get Free Quote
                  </button>
                  <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-xl hover:bg-secondary hover:text-white transition-all duration-300 font-semibold text-lg">
                    View Projects
                  </button>
                </div>
              </div>
              
              <div 
                className="bg-cover bg-center relative"
                style={{ backgroundImage: `url(${services[activeService].image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-primary mb-2">Premium Service Includes</h4>
                  <p className="text-gray-600">Free consultation, 3D design visualization, and comprehensive project management</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Our experts will assess your space and recommend the perfect solution for your needs and budget
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg">
              Get Professional Advice
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
