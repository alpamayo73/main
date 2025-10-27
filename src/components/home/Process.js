// src/components/home/Process.js
import { useState } from 'react'

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Consultation & Planning",
      description: "We begin with a detailed consultation to understand your vision, requirements, and budget. Our experts visit your site to assess the space and provide initial recommendations.",
      features: ["Site Assessment", "Requirement Analysis", "Budget Planning", "Timeline Estimation"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Design & Proposal",
      description: "Our creative team develops customized designs and 3D visualizations. We provide detailed proposals with transparent pricing and material specifications.",
      features: ["3D Design Visualization", "Material Selection", "Detailed Quotation", "Project Timeline"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Execution",
      description: "Our skilled professionals execute the project with precision, using premium materials and advanced techniques. We maintain regular communication and provide progress updates.",
      features: ["Quality Workmanship", "Regular Progress Updates", "Premium Materials", "On-time Delivery"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Final Handover",
      description: "We conduct thorough quality checks and walk you through the completed project. Our after-service support ensures your complete satisfaction.",
      features: ["Quality Inspection", "Client Walkthrough", "Warranty Documentation", "After-Service Support"]
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Process
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A systematic approach that ensures exceptional quality and complete satisfaction for every project in Dubai
          </p>
        </div>

        {/* Desktop Process Steps */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-full p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    activeStep === index
                      ? 'bg-white shadow-2xl border-2 border-secondary'
                      : 'bg-white/70 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
                    activeStep === index ? 'bg-secondary' : 'bg-primary'
                  }`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                  <div className={`w-3 h-3 rounded-full mx-auto transition-colors duration-300 ${
                    activeStep === index ? 'bg-secondary' : 'bg-gray-300'
                  }`} />
                </button>
              </div>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {steps[activeStep].description}
                </p>
                <ul className="space-y-3">
                  {steps[activeStep].features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white text-center">
                <div className="text-6xl font-bold mb-4">{activeStep + 1}</div>
                <div className="text-xl font-semibold">Step {activeStep + 1} of {steps.length}</div>
                <p className="mt-4 opacity-90">Professional Execution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Process Steps */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-secondary transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-secondary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <button className="bg-secondary text-white px-8 py-4 rounded-xl hover:bg-primary transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  )
}
