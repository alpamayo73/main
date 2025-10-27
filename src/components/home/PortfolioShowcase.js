// src/components/home/PortfolioShowcase.js
import Image from 'next/image'

export default function PortfolioShowcase() {
  const projects = [
    {
      id: 1,
      title: "Luxury Villa Renovation",
      category: "Villa Renovation",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Modern luxury villa transformation in Palm Jumeirah"
    },
    {
      id: 2,
      title: "Executive Office Space",
      category: "Office Renovation",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Corporate office redesign for tech company"
    },
    {
      id: 3,
      title: "Penthouse Apartment",
      category: "Apartment Renovation",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Luxury penthouse renovation with premium finishes"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Premium Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our exceptional renovation projects that redefine luxury living in Dubai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-secondary text-sm font-semibold">{project.category}</span>
                <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-primary transition-colors duration-300 font-semibold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
