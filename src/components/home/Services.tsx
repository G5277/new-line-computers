import React from 'react';
import { Monitor, Wrench, Cpu, Network, Laptop, Printer } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Computer Sales',
      description: 'New and used desktops, laptops, and accessories from top brands',
      features: ['Desktop Computers', 'Laptops & Notebooks', 'Monitors & Displays', 'Accessories']
    },
    {
      icon: Wrench,
      title: 'Repair Services',
      description: 'Expert repair services for all types of electronic devices',
      features: ['Hardware Diagnostics', 'Component Replacement', 'Software Issues', 'Data Recovery']
    },
    {
      icon: Cpu,
      title: 'Custom PC Building',
      description: 'Build your perfect gaming or workstation PC tailored to your needs',
      features: ['Gaming PCs', 'Workstations', 'Budget Builds', 'Performance Optimization']
    },
    {
      icon: Network,
      title: 'Networking Solutions',
      description: 'Complete networking setup for offices and homes',
      features: ['Network Setup', 'WiFi Installation', 'Server Configuration', 'Security Systems']
    },
    {
      icon: Laptop,
      title: 'Laptop Services',
      description: 'Specialized laptop repair and upgrade services',
      features: ['Screen Replacement', 'Keyboard Repair', 'Battery Replacement', 'RAM Upgrades']
    },
    {
      icon: Printer,
      title: 'Printer Support',
      description: 'Sales, repair, and maintenance of printers and scanners',
      features: ['Printer Sales', 'Cartridge Refill', 'Maintenance', 'Network Printing']
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tech solutions for individuals, businesses, and organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="tel:+91-9876543210"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  Call for Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;