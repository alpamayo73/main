import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white luxury-shadow sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#1C2734] text-white py-2">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="mr-2">📞</span>
              <span>+971589071754</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✉️</span>
              <span>info@thealpamayo.com</span>
            </div>
          </div>
          <div>Al Qouz, Dubai, United Arab Emirates</div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#1C2734]">
            Alpamayo Technical Services
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-[#577D8E] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[#577D8E] transition-colors">About</Link>
            <Link href="/services" className="hover:text-[#577D8E] transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-[#577D8E] transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white luxury-shadow">
            <div className="flex flex-col space-y-4 p-4">
              <Link href="/" className="hover:text-[#577D8E] transition-colors">Home</Link>
              <Link href="/about" className="hover:text-[#577D8E] transition-colors">About</Link>
              <Link href="/services" className="hover:text-[#577D8E] transition-colors">Services</Link>
              <Link href="/contact" className="hover:text-[#577D8E] transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
