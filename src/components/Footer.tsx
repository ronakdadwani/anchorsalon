import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Anchor Hair Salon</h3>
            <p className="text-gray-400">Making you look and feel beautiful</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                (555) 123-4567
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                info@anchorsalon.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Anchor Hair Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;