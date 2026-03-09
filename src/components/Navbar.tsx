'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle, User } from 'lucide-react';
import logo from '../assets/logo.png';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Produtos' },
  { href: '/parties', label: 'Festas' },
  { href: '/membership', label: 'Seja Sócio' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-brand-navyblue to-brand-deepblue shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div
              className={`rounded-full overflow-hidden border-2 transition-all ${
                scrolled ? 'border-brand-lightblue/30' : 'border-brand-lightblue/10'
              }`}
            >
              <img
                src={logo.src}
                alt="Bulldogs Logo"
                className="h-8 w-8 group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="ml-3 text-xl font-bebas text-shadow tracking-wider text-brand-light">
              FATECSP Bulldogs
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative group ${
                    active ? 'text-brand-light' : 'text-brand-paleblue hover:text-brand-light'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {active && (
                    <span className="absolute inset-0 bg-brand-mediumblue/50 rounded-lg" />
                  )}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-lightblue scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              );
            })}

            <a
              href="https://wa.me/5511993288916"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden ml-3 bg-brand-mediumblue/50 hover:bg-brand-mediumblue px-4 py-2 rounded-lg text-brand-light text-sm font-medium flex items-center border border-brand-lightblue/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>Contato</span>
            </a>
          </div>

          <button
            className="md:hidden text-brand-light"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3 rounded-lg bg-brand-deepblue/95 border border-brand-lightblue/20 p-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm ${
                  isActive(item.href)
                    ? 'bg-brand-mediumblue/60 text-brand-light'
                    : 'text-brand-paleblue hover:bg-brand-mediumblue/30'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5511993288916"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-sm text-brand-light bg-brand-mediumblue/50"
            >
              <span className="inline-flex items-center">
                <User className="w-4 h-4 mr-2" />
                Contato
              </span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
