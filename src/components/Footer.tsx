import React from 'react';
import { Computer, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER 

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Computer className="h-6 w-6 text-blue-400" />
              <div>
                <h3 className="text-lg font-bold">New Line Computers</h3>
                <p className="text-sm text-gray-400">Since 1998</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted local tech partner for over 25 years. We provide quality computer hardware,
              reliable repair services, and custom PC solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href={`tel:${phoneNumber}`} className="text-gray-400 hover:text-white transition-colors">
                  {phoneNumber}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <p className="text-gray-400">
                  15, New Line Computers, Jain School Wali Gali, Mansa, Punjab - 151505<br />
                  Mansa, Punjab - 151505
                </p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <div className="text-gray-400 text-sm">
                  <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 New Line Computers. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;