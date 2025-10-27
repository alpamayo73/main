import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function AboutPreview() {
  const highlights = [
    'Premium Quality Materials',
    'Expert Craftsmanship',
    'Timely Project Completion',
    'Competitive Pricing',
    'Comprehensive Warranty',
    'Professional Team'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C2734] mb-6">
              Luxury Renovation Experts in Dubai
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Alpamayo Technical Services brings unparalleled expertise in luxury renovations 
              and professional AC services to Dubai's most discerning clients. With years of 
              experience and a commitment to excellence, we transform spaces into exceptional 
              living and working environments.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#577D8E] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/about"
              className="inline-flex items-center bg-[#577D8E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1C2734] transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="luxury-shadow rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558036117-15e82a2c9c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury renovation in Dubai"
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#1C2734] text-white p-6 rounded-lg luxury-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
