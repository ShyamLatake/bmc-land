import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Prakash Mehta',
      role: 'IT Professional',
      school: 'Smart Parent App User',
      content: 'Evaluations were very useful and activity suggestions were pinpoint.',
      rating: 5,
      image: '/male_parent_1.jpg'
    },
    {
      name: 'Dr. Aarthi Chandran',
      role: 'Medical Practitioner',
      school: 'Smart Parent App User',
      content: 'Identified hidden hobbies and talents which I had missed to notice.',
      rating: 5,
      image: '/female_parent_1.jpg'
    },
    {
      name: 'Devika Sharma',
      role: 'Teacher',
      school: 'SAM User',
      content: 'This has helped me be a better parent in spite of being so busy',
      rating: 5,
      image: '/female_parent_2.jpg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playful text-coral mb-4">
            Loved by Teachers & Families
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Hear the happy stories from preschools and families using BoostMyChild!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-lavender/20 to-mint/20 rounded-2xl p-6 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-4 border-lavender/30">
              <Quote className="h-8 w-8 text-coral mb-4 opacity-70" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-sunshine fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic font-medium">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 font-semibold">{testimonial.role}</p>
                  <p className="text-sm text-coral font-semibold">{testimonial.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}