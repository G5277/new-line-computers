import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Navigation } from 'lucide-react';

const Contact = () => {    
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

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
    console.log('Contact form submitted:', formData);
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any questions, support, or to discuss your tech needs. 
            We're here to help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 rounded-full p-3">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href={`tel:${phoneNumber}`} className="hover:text-blue-600 transition-colors">
                        {phoneNumber}
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 rounded-full p-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@newlinecomputers.com" className="hover:text-blue-600 transition-colors">
                        info@newlinecomputers.com
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="mailto:repairs@newlinecomputers.com" className="hover:text-blue-600 transition-colors">
                        repairs@newlinecomputers.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Tech Street, Computer Market<br />
                      Patiala, Punjab - 147001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 rounded-full p-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Store Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                      <p>Sunday: 11:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${phoneNumber}`}
                  className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3 hover:bg-opacity-30 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call for Immediate Support</span>
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3 hover:bg-opacity-30 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3 hover:bg-opacity-30 transition-colors"
                >
                  <Navigation className="h-5 w-5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Products</option>
                    <option value="repair">Repair Services</option>
                    <option value="custom-build">Custom PC Build</option>
                    <option value="networking">Networking Solutions</option>
                    <option value="support">Technical Support</option>
                    <option value="quote">Request Quote</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Please provide details about your inquiry or requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Find Us</h3>
              <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Interactive Google Maps</p>
                  <p className="text-sm text-gray-500 mt-2">
                    123 Tech Street, Computer Market<br />
                    Patiala, Punjab - 147001
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 mt-4 text-blue-600 hover:text-blue-700"
                  >
                    <Navigation className="h-4 w-4" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What are your repair turnaround times?</h3>
              <p className="text-gray-600 text-sm">Most repairs are completed within 24-48 hours. Complex issues may take 3-5 days. We offer same-day service for urgent repairs.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you provide warranty on repairs?</h3>
              <p className="text-gray-600 text-sm">Yes, all our repairs come with a 90-day warranty on parts and labor. We stand behind our work.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can you help with custom PC builds?</h3>
              <p className="text-gray-600 text-sm">Absolutely! We specialize in custom PC builds for gaming, workstations, and specific requirements. Contact us for a consultation.</p>
            </div>
            <div>
              <h3 className="font-semibent text-gray-900 mb-2">Do you buy used computers?</h3>
              <p className="text-gray-600 text-sm">Yes, we purchase used computers and components in good condition. Bring your device for evaluation and quote.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;