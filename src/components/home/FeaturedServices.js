import Link from 'next/link';

export default function FeaturedServices() {
  const featuredServices = [
    {
      title: 'Villa Renovation',
      description: 'Transform your villa into a luxury masterpiece with our comprehensive renovation services. From design to execution.',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/renovation#villa'
    },
    {
      title: 'VRF AC Systems',
      description: 'Advanced Variable Refrigerant Flow AC solutions for optimal climate control in large residential and commercial spaces.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25856cd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/ac-services#vrf'
    },
    {
      title: 'Office Renovation',
      description: 'Create inspiring, productive workspaces that reflect your brand identity and enhance employee well-being.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/renovation#office'
    },
    {
      title: 'Split AC Systems',
      description: 'Efficient and reliable split air conditioner installation and maintenance for optimal cooling performance.',
      image: 'https://images.unsplash.com/photo-1581993192008-63fd1ea7de1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/ac-services#split'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C2734] mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of luxury renovation and professional AC services tailored for Dubai's elite properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div 
                className="h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-200 mb-4 leading-relaxed">{service.description}</p>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-white font-semibold hover:text-[#577D8E] transition-colors duration-300"
                  >
                    Learn More <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/services"
            className="inline-flex items-center bg-[#1C2734] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#577D8E] transition-all duration-300 hover:scale-105"
          >
            View All Services
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
