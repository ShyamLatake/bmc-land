import React from 'react';
import { Shield, Zap, Globe, HeadphonesIcon, Award, TrendingUp } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Super safe protection for all your little one\'s information, just like a digital treasure chest!',
      color: 'text-mint'
    },
    {
      icon: Zap,
      title: 'Quick as a Flash',
      description: 'Fast and fun assessments that work as quickly as your child\'s imagination!',
      color: 'text-sunshine'
    },
    {
      icon: Globe,
      title: 'Learn Anywhere',
      description: 'Works on tablets, phones, and computers - learning fun wherever you go!',
      color: 'text-coral'
    },
    {
      icon: HeadphonesIcon,
      title: 'Always Here to Help',
      description: 'Friendly support team ready to help teachers and parents anytime, day or night!',
      color: 'text-lavender'
    },
    {
      icon: Award,
      title: 'Amazing Results',
      description: 'Proven to help little learners grow and succeed in their educational journey!',
      color: 'text-peach'
    },
    {
      icon: TrendingUp,
      title: 'Always Getting Better',
      description: 'We keep adding new fun features based on what teachers and parents tell us!',
      color: 'text-sky'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-lavender/20 via-mint/10 to-sunshine/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playful text-coral mb-4">
            Why Choose BoostMyChild?
          </h2>
          <h2 className="text-2xl font-playful mt-6 mb-4 text-coral hover:text-sunshine" onClick={() => window.open('https://www.boostmychild.com/developmentareas', '_blank')}>Develpment Areas 🡺</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Made with love for teachers, parents, and little learners - creating smiles that matter!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-gray-100 hover:border-coral/30">
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 mb-4 shadow-md`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-playful text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}