import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted & Reliable',
      description: 'Over 20 years of honest service and genuine products with warranty support.'
    },
    // {
    //   icon: Users,
    //   title: 'Expert Lead',
    //   description: 'Certified technicians with extensive experience in computer hardware and repairs.'
    // },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'All products and services come with quality guarantee and after-sales support.'
    },
    {
      icon: Clock,
      title: 'Quick Service',
      description: 'Fast turnaround times for repairs and prompt delivery of products.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose New Line Computers?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've been serving the community since 1998, building lasting relationships 
            through quality products, expert services, and genuine care for our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Local Business, Global Standards
              </h3>
              <p className="text-gray-600 mb-6">
                Started as a small computer shop in Mansa, we've grown to become the most 
                trusted name in the region for all things tech. Our commitment to quality, 
                fair pricing, and customer satisfaction has earned us a loyal customer base.
              </p>
              <div className="space-y-4">
                {/* <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Authorized dealer for major brands</span>
                </div> */}
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Super Fast service for most repairs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Competitive pricing with transparent quotes</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://drive.google.com/uc?export=view&id=1dDtiAO4XNVgDaHWz7mu7PbfpDlW7ddzp"
                alt="Computer repair technician working"
                className="rounded-xl shadow-lg w-full h-64 lg:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;