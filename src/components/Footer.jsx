import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info - Updated with logo and tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                className="w-12 h-12 rounded-lg object-cover"
                src="https://media.licdn.com/dms/image/v2/D4D0BAQH4MOer1snVLA/company-logo_200_200/company-logo_200_200/0/1718213718443?e=1763596800&v=beta&t=zrdLZtOFPHZE3ezUlWHux4GYVsuNToUB6FluMRWzSTI" 
                alt="Jarurat Care Logo" 
              />
              <div>
                <h2 className="text-xl font-bold">Jaruratcare Foundation</h2>
                <p className="text-blue-300 text-sm">Jaisi Jarurat, Vaisi Care</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Dedicated to providing healthcare solutions and support to those in need. 
              Your health and well-being are our top priority.
            </p>
          </div>

          {/* Quick Links - Updated as per image */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Connect with us - Updated as per image */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Connect with us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Locate Hospitals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-6">
              <a href="#" className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-blue-400 rounded-lg hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info - Updated */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">support@jaruratcare.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-400" />
                <span className="text-gray-300 text-sm">123 Healthcare Street, Medical City</span>
              </div>
            </div>
            
            {/* Emergency Contact */}
            <div className="mt-6 p-3 bg-red-600/20 rounded-lg border border-red-600/30">
              <p className="text-red-300 text-sm font-semibold">Emergency Helpline</p>
              <p className="text-white text-lg font-bold">108</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Updated as per image */}
      <div className="border-t border-gray-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-gray-400 text-sm">
                © 2024 JARURAT CARE LLC. All rights reserved
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy policy
                </a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of service
                </a>
              </div>
            </div>
            
            {/* Back to Top Button */}
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;