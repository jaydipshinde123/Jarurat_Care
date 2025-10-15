import { NavLink } from "react-router-dom";
import { Heart, Menu, X, Stethoscope } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/patients", label: "Patients" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="p-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transition-all duration-300 group-hover:scale-105 shadow-lg">
                <img 
                className="w-15 rounded-xl" 
                src="https://media.licdn.com/dms/image/v2/D4D0BAQH4MOer1snVLA/company-logo_200_200/company-logo_200_200/0/1718213718443?e=1763596800&v=beta&t=zrdLZtOFPHZE3ezUlWHux4GYVsuNToUB6FluMRWzSTI" 
                alt="Jarurat Care Logo" 
              />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Jarurat Care
              </span>
              <span className="text-xs text-gray-500 font-medium">Healthcare Solutions</span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/50 rounded-2xl p-1 border border-gray-200 backdrop-blur-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-colors shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 space-y-2 border-t border-gray-200/80 fade-in bg-white/80 backdrop-blur-lg rounded-2xl mt-2 mb-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-4 rounded-xl font-semibold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;