import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=200&auto=format"
                alt="Bulldogs Logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="ml-2 text-xl font-bold">FATECSP Bulldogs</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'bg-blue-700' : 'hover:bg-blue-500'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'bg-blue-700' : 'hover:bg-blue-500'
                  }`
                }
              >
                Produtos
              </NavLink>
              <NavLink
                to="/parties"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'bg-blue-700' : 'hover:bg-blue-500'
                  }`
                }
              >
                Festas
              </NavLink>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contato
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Produtos
            </NavLink>
            <NavLink
              to="/parties"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Festas
            </NavLink>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;