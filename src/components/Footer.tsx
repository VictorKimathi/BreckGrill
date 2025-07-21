import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[#1a365d] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Breck Grill</h3>
            <p className="mb-4">
              Finance writer dedicated to making complex topics accessible and
              engaging.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/" className="hover:text-[#ffc940] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#ffc940] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#ffc940] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#ffc940] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#ffc940] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ffc940] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:breckgrill434@gmail.com" className="hover:text-[#ffc940] transition-colors">
                  breckgrill434@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:2067504766" className="hover:text-[#ffc940] transition-colors">
                  (206) 750-4766
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Breck Grill. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}