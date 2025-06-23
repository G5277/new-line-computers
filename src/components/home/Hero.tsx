import React from 'react';
import { Phone, ArrowRight, Monitor, Cpu, HardDrive } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                New Line Computers
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 font-medium">
                Your Local Tech Partner Since 1998
              </p>
              <p className="text-lg text-blue-100 max-w-lg">
                Trusted by thousands for computer hardware sales, expert repairs, 
                custom PC building, and professional networking solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+91-9356486286"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Our Services</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">25+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">5000+</div>
                <div className="text-sm text-blue-100">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-sm text-blue-100">Support Available</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
                  <Monitor className="h-12 w-12 text-orange-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Hardware Sales</h3>
                  <p className="text-blue-100 text-sm">New & used computers, laptops, and accessories</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
                  <HardDrive className="h-12 w-12 text-orange-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Expert Repairs</h3>
                  <p className="text-blue-100 text-sm">Professional repair services for all devices</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
                  <Cpu className="h-12 w-12 text-orange-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Custom PCs</h3>
                  <p className="text-blue-100 text-sm">Build your dream gaming or workstation PC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;