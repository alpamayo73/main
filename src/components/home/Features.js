export default function Features() {
  const features = [
    {
      icon: '🏆',
      title: 'Premium Quality',
      description: 'Luxury finishes and premium materials for exceptional, long-lasting results that exceed expectations.'
    },
    {
      icon: '🛡️',
      title: 'Guaranteed Work',
      description: 'Comprehensive warranties on all our services, ensuring your peace of mind and satisfaction.'
    },
    {
      icon: '⏱️',
      title: 'On-Time Delivery',
      description: 'We respect your time and deliver projects as scheduled, maintaining strict timelines.'
    },
    {
      icon: '👨‍🔧',
      title: 'Expert Craftsmanship',
      description: 'Skilled professionals with years of experience in luxury renovations and AC installations.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C2734] mb-4">
            Why Choose Alpamayo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine luxury design with technical excellence to deliver exceptional results for our clients in Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg luxury-shadow text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1C2734] mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
