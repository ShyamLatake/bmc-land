import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Preschool Director',
      school: 'Sunshine Preschool',
      content: 'SAM has made understanding each child\'s learning journey so much easier! The colorful reports help us celebrate every little milestone.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Dad of Emma (4) & Lucas (3)',
      school: 'Smart Parent App User',
      content: 'The Smart Parent App is amazing! I love seeing photos of my kids\' artwork and getting fun activity ideas to try at home together.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Early Childhood Specialist',
      school: 'Little Learners Academy',
      content: 'BoostMyChild helps us spot each child\'s unique strengths early on. It\'s wonderful seeing how personalized learning makes every child shine!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
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