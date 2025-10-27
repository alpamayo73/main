// src/components/home/Stats.js
import { useState, useEffect, useRef } from 'react'

export default function Stats() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    team: 0
  })

  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const targetValues = {
      projects: 250,
      clients: 180,
      experience: 8,
      team: 45
    }

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const animateCounters = () => {
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          projects: Math.floor(targetValues.projects * progress),
          clients: Math.floor(targetValues.clients * progress),
          experience: Math.floor(targetValues.experience * progress),
          team: Math.floor(targetValues.team * progress)
        })

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)
    }

    animateCounters()
  }, [isVisible])

  const stats = [
    { number: counters.projects, suffix: '+', label: 'Projects Completed' },
    { number: counters.clients, suffix: '+', label: 'Happy Clients' },
    { number: counters.experience, suffix: '+', label: 'Years Experience' },
    { number: counters.team, suffix: '+', label: 'Expert Team Members' }
  ]

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Premium Quality",
      description: "Using only the finest materials and latest technology"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Timely Delivery",
      description: "We respect your time and deliver projects on schedule"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock customer service and maintenance"
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-primary to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose Alpamayo?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by Dubai's elite for premium renovation and AC services with unmatched quality and reliability
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:bg-white/10"
            >
              <div className="text-2xl lg:text-5xl font-bold text-secondary mb-2 lg:mb-4">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-sm lg:text-lg font-semibold text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-white group-hover:text-secondary transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients in Dubai who trust Alpamayo for their renovation and AC needs
            </p>
            <button className="bg-secondary text-white px-8 py-4 rounded-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </section>
  )
}
