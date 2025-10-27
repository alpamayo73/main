// src/components/home/Stats.js
import { useState, useEffect } from 'react'

export default function Stats() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    team: 0
  })

  useEffect(() => {
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
  }, [])

  const stats = [
    { number: counters.projects, suffix: '+', label: 'Projects Completed' },
    { number: counters.clients, suffix: '+', label: 'Happy Clients' },
    { number: counters.experience, suffix: '+', label: 'Years Experience' },
    { number: counters.team, suffix: '+', label: 'Expert Team Members' }
  ]

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Alpamayo?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by Dubai's elite for premium renovation and AC services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-xl text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-secondary bg-opacity-20 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Premium Quality</h4>
            <p className="text-gray-300">Using only the finest materials and latest technology</p>
          </div>
          <div className="bg-secondary bg-opacity-20 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Timely Delivery</h4>
            <p className="text-gray-300">We respect your time and deliver projects on schedule</p>
          </div>
          <div className="bg-secondary bg-opacity-20 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
            <p className="text-gray-300">Round-the-clock customer service and maintenance</p>
          </div>
        </div>
      </div>
    </section>
  )
}
