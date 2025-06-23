import React, { useState } from 'react';
import { Wrench, Laptop, Monitor, Printer, Smartphone, HardDrive, CheckCircle, Phone, Mail } from 'lucide-react';

const RepairServices = () => {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    deviceType: '',
    issue: '',
    urgency: 'normal'
  });

  const services = [
    {
      icon: Laptop,
      title: 'Laptop Repair',
      description: 'Complete laptop repair services including screen replacement, keyboard repair, battery replacement, and performance optimization.',
      features: ['Screen Replacement', 'Keyboard Repair', 'Battery Replacement', 'RAM Upgrades', 'Hard Drive Replacement', 'Overheating Issues']
    },
    {
      icon: Monitor,
      title: 'Desktop Repair',
      description: 'Professional desktop computer repair and maintenance services for all brands and configurations.',
      features: ['Hardware Diagnostics', 'Component Replacement', 'System Optimization', 'Virus Removal', 'Data Recovery', 'Custom Builds']
    },
    {
      icon: Printer,
      title: 'Printer Services',
      description: 'Comprehensive printer repair, maintenance, and cartridge services for all printer types.',
      features: ['Printer Repair', 'Cartridge Refill', 'Network Setup', 'Maintenance', 'Paper Jam Solutions', 'Quality Issues']
    },
    {
      icon: Smartphone,
      title: 'Mobile Repair',
      description: 'Expert mobile phone and tablet repair services with genuine parts and warranty.',
      features: ['Screen Repair', 'Battery Replacement', 'Charging Port Fix', 'Software Issues', 'Water Damage', 'Data Recovery']
    },
    {
      icon: HardDrive,
      title: 'Data Recovery',
      description: 'Professional data recovery services for hard drives, SSDs, memory cards, and other storage devices.',
      features: ['Hard Drive Recovery', 'SSD Recovery', 'Memory Card Recovery', 'Deleted File Recovery', 'Corrupted Data Recovery', 'Emergency Service']
    },
    {
      icon: Wrench,
      title: 'Networking Solutions',
      description: 'Complete networking setup, troubleshooting, and maintenance for homes and offices.',
      features: ['Network Setup', 'Wi-Fi Configuration', 'Router Setup', 'Network Security', 'Cable Management', 'Speed Optimization']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Repair request submitted successfully! We will contact you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      deviceType: '',
      issue: '',
      urgency: 'normal'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Repair Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional repair services for all your tech devices with genuine parts, 
            expert technicians, and reliable warranty support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Repair Process */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Repair Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Diagnosis</h3>
              <p className="text-gray-600 text-sm">Free diagnostic to identify the exact issue with your device</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quote</h3>
              <p className="text-gray-600 text-sm">Transparent pricing with detailed explanation of required repairs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Repair</h3>
              <p className="text-gray-600 text-sm">Expert repair using genuine parts with quality assurance</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600 text-sm">Testing and quality check before returning your device</p>
            </div>
          </div>
        </div>

        {/* Repair Request Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Repair Service</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="deviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Device Type *
                  </label>
                  <select
                    id="deviceType"
                    name="deviceType"
                    value={formData.deviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Device Type</option>
                    <option value="laptop">Laptop</option>
                    <option value="desktop">Desktop Computer</option>
                    <option value="printer">Printer</option>
                    <option value="mobile">Mobile Phone</option>
                    <option value="tablet">Tablet</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="normal">Normal (3-5 days)</option>
                    <option value="urgent">Urgent (1-2 days)</option>
                    <option value="emergency">Emergency (Same day)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-2">
                  Issue Description *
                </label>
                <textarea
                  id="issue"
                  name="issue"
                  rows={4}
                  value={formData.issue}
                  onChange={handleInputChange}
                  required
                  placeholder="Please describe the issue you're experiencing with your device..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit Repair Request
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Choose Our Repair Services?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Certified Technicians</h4>
                    <p className="text-gray-600 text-sm">Our team consists of certified and experienced technicians</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Genuine Parts</h4>
                    <p className="text-gray-600 text-sm">We use only genuine parts with manufacturer warranty</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Quick Turnaround</h4>
                    <p className="text-gray-600 text-sm">Most repairs completed within 24-48 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Warranty Support</h4>
                    <p className="text-gray-600 text-sm">All repairs come with 90-day warranty</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Emergency Repair?</h3>
              <p className="text-gray-600 mb-6">
                Need urgent repair service? Call us directly for immediate assistance. 
                We offer same-day service for critical business devices.
              </p>
              <div className="space-y-4">
                <a
                  href={`tel:${phoneNumber}`}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now: {phoneNumber}</span>
                </a>
                <a
                  href="mailto:repairs@newlinecomputers.com"
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email: repairs@newlinecomputers.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairServices;