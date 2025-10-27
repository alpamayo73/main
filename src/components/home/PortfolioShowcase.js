// src/components/home/PortfolioShowcase.js
import Image from 'next/image'
import { useState } from 'react'

export default function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: "Luxury Villa Renovation",
      category: "villa",
      location: "Palm Jumeirah",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Complete modern transformation with smart home integration"
    },
    {
      id: 2,
      title: "Executive Office Space",
      category: "office",
      location: "DIFC",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Corporate office redesign for international tech company"
    },
    {
      id: 3,
      title: "Penthouse Apartment",
      category: "apartment",
      location: "Downtown Dubai",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Luxury penthouse renovation with premium Italian finishes"
    },
    {
      id: 4,
      title: "VRF AC System Installation",
      category: "ac",
      location: "Jumeirah",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Advanced VRF system for luxury residence"
    },
    {
      id: 5,
      title: "Modern Apartment Makeover",
      category: "apartment",
      location: "Marina",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Contemporary apartment renovation with space optimization"
    },
    {
      id: 6,
      title: "Commercial Office Renovation",
      category: "office",
      location: "Business Bay",
      image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Complete office space transformation"
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Premium Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our exceptional renovation projects that redefine luxury living in Dubai's most prestigious locations
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'villa', 'apartment', 'office', 'ac'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-secondary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter === 'all' ? 'All Projects' : 
               filter === 'villa' ? 'Villas' :
               filter === 'apartment' ? 'Apartments' :
               filter === 'office' ? 'Offices' : 'AC Systems'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="mb-3">
                  <span className="text-secondary text-sm font-semibold uppercase tracking-wide">
                    {project.location}
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-primary mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <button className="text-secondary font-semibold hover:text-primary transition-colors duration-300 flex items-center group">
                  View Project
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <button className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
            View All Projects
          </button>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
