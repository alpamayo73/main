// src/components/home/LuxuryServices.js
export default function LuxuryServices() {
  const services = [
    {
      icon: "Home",
      title: "Villa Renovation",
      description: "Transform your villa into a luxury retreat with our premium renovation services",
      features: ["Custom Design", "Premium Materials", "Smart Home Integration"]
    },
    {
      icon: "Apartment",
      title: "Apartment Renovation",
      description: "Maximize space and luxury in your apartment with innovative design solutions",
      features: ["Space Optimization", "Modern Finishes", "Quality Assurance"]
    },
    {
      icon: "Building",
      title: "Office Renovation",
      description: "Create inspiring workspaces that boost productivity and reflect your brand",
      features: ["Ergonomic Design", "Brand Integration", "Professional Finish"]
    },
    {
      icon: "Snowflake",
      title: "AC Services",
      description: "Advanced climate control solutions for ultimate comfort in Dubai's climate",
      features: ["VRF Systems", "Energy Efficient", "24/7 Maintenance"]
    }
  ]

  const getIcon = (iconName) => {
    switch(iconName) {
      case "Home":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        )
      case "Apartment":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      case "Building":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      case "Snowflake":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Luxury Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium renovation and AC solutions tailored for Dubai's discerning clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mr-4 group-hover:bg-primary transition-colors duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 text-secondary font-semibold hover:text-primary transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
