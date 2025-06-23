import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react';

const Contact = () => {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER ;
  const email = import.meta.env.VITE_EMAIL ;
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER ;
  const businessAddress = import.meta.env.VITE_BUSINESS_ADDRESS || 'Jain School Wali Gali, Sadar, Mansa, Punjab 151505';
  const googleMapsDirectionsUrl = import.meta.env.VITE_GOOGLE_MAPS_DIRECTIONS_URL || 'https://www.google.com/maps/place/Jain+School+Wali+Gali,+Sadar,+Mansa,+Punjab+151505';

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
                      <a href={`mailto:${email}`} className="hover:text-blue-600 transition-colors">
                        {email}
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href={`mailto:repairs@${email.split('@')[1]}`} className="hover:text-blue-600 transition-colors">
                        repairs@{email.split('@')[1]}
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
                      {businessAddress.split(', ').map((line, index, array) => (
                        <span key={index}>
                          {line}
                          {index < array.length - 1 && <br />}
                        </span>
                      ))}
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
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
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
                  href={googleMapsDirectionsUrl}
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

            {/* Map */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Find Us</h3>
              <div className="bg-gray-200 rounded-xl h-80 overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.123456789!2d75.39123456789!3d30.26123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b85abcdef1234%3A0x1234567890abcdef!2sJain%20School%20Wali%20Gali%2C%20Sadar%2C%20Mansa%2C%20Punjab%20151505!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="New Line Computers Location - Mansa"
                  className="rounded-xl"
                ></iframe>
                
                {/* Fallback content */}
                <div className="absolute inset-0 bg-gray-200 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Interactive Google Maps</p>
                    <p className="text-sm text-gray-500 mt-2">
                      {businessAddress.split(', ').map((line, index, array) => (
                        <span key={index}>
                          {line}
                          {index < array.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                    <a
                      href={googleMapsDirectionsUrl}
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
              <h3 className="font-semibold text-gray-900 mb-2">Do you buy used computers?</h3>
              <p className="text-gray-600 text-sm">Yes, we purchase used computers and components in good condition. Bring your device for evaluation and quote.</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;