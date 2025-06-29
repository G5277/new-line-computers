import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Professor Kainth',
      role: 'Professor ( Kainth Coaching Centre)',
      content: 'New Line Computers set up our entire office network perfectly. Their team is professional and the after-sales support is excellent. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Manjeet Singh',
      role: 'Guru Gobind Singh ITI Head',
      content: 'New Line Computers set up our entire office network perfectly. Very honest pricing and quick service!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Jashan Singh',
      role: 'Indo Canadian IELTS Institute Head',
      content: 'Great setup for both Listening and Speaking Labs at the institute. Great performance and value for money!',
      rating: 5,
    },
    {
      id: 4,
      name: 'Dr. Monika',
      role: 'Dentist (Janak Dental Hospital Mansa)',
      content: 'Bought Laptop from them. Always reliable, fair prices, and genuine products. They truly care about their customers.',
      rating: 5,
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-blue-100" />
              </div>
              
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;