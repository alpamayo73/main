// src/components/home/Process.js
import { ClipboardCheck, Users, Tool, CheckCircle } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Consultation & Planning",
      description: "We begin with a detailed consultation to understand your vision and requirements"
    },
    {
      icon: Users,
      title: "Design & Proposal",
      description: "Our experts create customized designs and provide transparent pricing"
    },
    {
      icon: Tool,
      title: "Execution",
      description: "Skilled professionals execute the project with precision and quality"
    },
    {
      icon: CheckCircle,
      title: "Final Handover",
      description: "Quality check and final handover with after-service support"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A systematic approach to deliver exceptional results for every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
                  <step.icon size={32} className="text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-300 -z-10" />
                )}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
