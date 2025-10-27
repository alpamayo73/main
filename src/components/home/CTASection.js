import Link from 'next/link';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1C2734] to-[#577D8E] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Contact us today for a free consultation and let's bring your vision to life with our premium renovation and AC services.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Phone className="w-6 h-6 mr-3" />
            <span className="text-lg">+971589071754</span>
          </div>
          <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Mail className="w-6 h-6 mr-3" />
            <span className="text-lg">info@thealpamayo.com</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-[#1C2734] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get Free Quote
          </Link>
          <Link 
            href="/services"
            className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1C2734] transition-all duration-300 text-lg"
          >
            Explore Services
          </Link>
        </div>

        <div className="mt-8 text-sm opacity-75">
          <p>Al Qouz, Dubai, United Arab Emirates</p>
        </div>
      </div>
    </section>
  );
}
