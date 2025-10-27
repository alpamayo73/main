import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1C2734] text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Alpamayo Technical Services</h3>
            <p className="text-gray-300 mb-4">
              Premium renovation and AC services in Dubai. Transforming spaces with luxury 
              and precision for villas, apartments, and offices.
            </p>
            <div className="flex items-center mb-2">
              <span className="mr-2">📞</span>
              <span>+971589071754</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2">✉️</span>
              <span>info@thealpamayo.com</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📍</span>
              <span>Al Qouz, Dubai, United Arab Emirates</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/renovation" className="text-gray-300 hover:text-white">Renovation</Link></li>
              <li><Link href="/services/ac-services" className="text-gray-300 hover:text-white">AC Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Alpamayo Technical Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
