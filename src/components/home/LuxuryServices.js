// src/components/home/LuxuryServices.js
import { Home, Building, Apartment, Snowflake } from 'lucide-react'

export default function LuxuryServices() {
  const services = [
    {
      icon: Home,
      title: "Villa Renovation",
      description: "Transform your villa into a luxury retreat with our premium renovation services",
      features: ["Custom Design", "Premium Materials", "Smart Home Integration"]
    },
    {
      icon: Apartment,
      title: "Apartment Renovation",
      description: "Maximize space and luxury in your apartment with innovative design solutions",
      features: ["Space Optimization", "Modern Finishes", "Quality Assurance"]
    },
    {
      icon: Building,
      title: "Office Renovation",
      description: "Create inspiring workspaces that boost productivity and reflect your brand",
      features: ["Ergonomic Design", "Brand Integration", "Professional Finish"]
    },
    {
      icon: Snowflake,
      title: "AC Services",
      description: "Advanced climate control solutions for ultimate comfort in Dubai's climate",
      features: ["VRF Systems", "Energy Efficient", "24/7 Maintenance"]
    }
  ]

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
                    <service.icon size={32} className="text-white" />
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
