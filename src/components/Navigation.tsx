import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/about',
    label: 'About'
  }, {
    path: '/portfolio',
    label: 'Portfolio'
  }, {
    path: '/services',
    label: 'Services'
  }, {
    path: '/testimonials',
    label: 'Testimonials'
  }, {
    path: '/contact',
    label: 'Contact'
  }, {
    path: '/resume',
    label: 'Resume'
  }];
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#1a365d]" onClick={closeMenu}>
          Breck Grill
        </Link>
        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={`font-medium hover:text-[#ffc940] transition-colors ${isActive(link.path) ? 'text-[#ffc940]' : 'text-[#1a365d]'}`}>
              {link.label}
            </Link>)}
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md">
            <div className="flex flex-col py-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} className={`px-4 py-3 font-medium hover:bg-gray-100 ${isActive(link.path) ? 'text-[#ffc940]' : 'text-[#1a365d]'}`} onClick={closeMenu}>
                  {link.label}
                </Link>)}
            </div>
          </div>}
      </nav>
    </header>;
}