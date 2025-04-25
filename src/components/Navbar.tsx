import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, MessageCircle, User } from 'lucide-react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Detecta rolagem para mudar o estilo da navbar
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gradient-to-r from-brand-navyblue to-brand-deepblue shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center group">
              <div className={`rounded-full overflow-hidden border-2 transition-all ${
                scrolled ? "border-brand-lightblue/30" : "border-brand-lightblue/10"
              }`}>
                <img
                  src={logo} // Substituição da imagem genérica pela logo
                  alt="Bulldogs Logo"
                  className="h-8 w-8 group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="ml-3 text-xl font-bebas text-shadow tracking-wider text-brand-light">
                FATECSP Bulldogs
              </span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <NavLink
                to="/"
                className={({ isActive }) => `
                  px-4 py-2 rounded-lg text-sm font-medium transition-all relative group
                  ${isActive 
                    ? "text-brand-light" 
                    : "text-brand-paleblue hover:text-brand-light"}
                `}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">Home</span>
                    {isActive && (
                      <span className="absolute inset-0 bg-brand-mediumblue/50 rounded-lg"></span>
                    )}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-lightblue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </>
                )}
              </NavLink>

              <NavLink
                to="/products"
                className={({ isActive }) => `
                  px-4 py-2 rounded-lg text-sm font-medium transition-all relative group
                  ${isActive 
                    ? "text-brand-light" 
                    : "text-brand-paleblue hover:text-brand-light"}
                `}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">Produtos</span>
                    {isActive && (
                      <span className="absolute inset-0 bg-brand-mediumblue/50 rounded-lg"></span>
                    )}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-lightblue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </>
                )}
              </NavLink>

              <NavLink
                to="/parties"
                className={({ isActive }) => `
                  px-4 py-2 rounded-lg text-sm font-medium transition-all relative group
                  ${isActive 
                    ? "text-brand-light" 
                    : "text-brand-paleblue hover:text-brand-light"}
                `}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">Festas</span>
                    {isActive && (
                      <span className="absolute inset-0 bg-brand-mediumblue/50 rounded-lg"></span>
                    )}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-lightblue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </>
                )}
              </NavLink>

              <NavLink
                to="/membership"
                className={({ isActive }) => `
                  px-4 py-2 rounded-lg text-sm font-medium transition-all relative group
                  ${isActive 
                    ? "text-brand-light" 
                    : "text-brand-paleblue hover:text-brand-light"}
                `}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">Seja Sócio</span>
                    {isActive && (
                      <span className="absolute inset-0 bg-brand-mediumblue/50 rounded-lg"></span>
                    )}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-lightblue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </>
                )}
              </NavLink>

              <a
                href="https://wa.me/5511993288916"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden ml-3 bg-brand-mediumblue/50 hover:bg-brand-mediumblue px-4 py-2 rounded-lg text-brand-light text-sm font-medium flex items-center border border-brand-lightblue/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Contato</span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[45deg] group-hover:left-[100%] transition-all duration-700"></span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-brand-mediumblue/50 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6 text-brand-light" /> : <Menu className="h-6 w-6 text-brand-light" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-brand-navyblue to-brand-deepblue border-t border-brand-softblue/20 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium ${
                  isActive 
                    ? "bg-brand-mediumblue/50 text-brand-light border border-brand-softblue/20" 
                    : "text-brand-paleblue hover:bg-brand-blue/40 hover:text-brand-light"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium ${
                  isActive 
                    ? "bg-brand-mediumblue/50 text-brand-light border border-brand-softblue/20" 
                    : "text-brand-paleblue hover:bg-brand-blue/40 hover:text-brand-light"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Produtos
            </NavLink>
            <NavLink
              to="/parties"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium ${
                  isActive 
                    ? "bg-brand-mediumblue/50 text-brand-light border border-brand-softblue/20" 
                    : "text-brand-paleblue hover:bg-brand-blue/40 hover:text-brand-light"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Festas
            </NavLink>
            <NavLink
              to="/membership"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium ${
                  isActive 
                    ? "bg-brand-mediumblue/50 text-brand-light border border-brand-softblue/20" 
                    : "text-brand-paleblue hover:bg-brand-blue/40 hover:text-brand-light"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Seja Sócio
            </NavLink>
            <a
              href="https://wa.me/5511993288916"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-brand-mediumblue/70 hover:bg-brand-mediumblue px-4 py-3 rounded-lg text-base font-medium flex items-center border border-brand-lightblue/20 text-brand-light"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;