import React from 'react';
import { Shield, Zap, Globe, HeadphonesIcon, Award, TrendingUp } from 'lucide-react';

export default function Features() {
  const schoolFeatures = [
    {
      icon: '/icons/assessment.svg',
      title: 'Customizable Assessments',
      description: 'Along NEP/NCF structure which can be tailored to school’s assessments',
      color: 'text-mint'
    },
    {
      icon: '/icons/expert.svg',
      title: 'Created By Experts ',
      description: 'Developed by child development experts after years of research',
      color: 'text-sunshine'
    },
    {
      icon: '/icons/data-analysis.svg',
      title: 'School-Level Data Analytics',
      description: 'Insights across classes, branches, and locations.',
      color: 'text-coral'
    },
    {
      icon: '/icons/parent_satisfaction.svg',
      title: 'Parent Satisfaction',
      description: 'Transparent & engaging reports for better PTM discussions.',
      color: 'text-lavender'
    },
    {
      icon: '/icons/less_work.svg',
      title: 'Reduce Teacher Workload',
      description: 'Automation of mundane tasks allowing focus on pedagogy.',
      color: 'text-peach'
    },
    {
      icon: '/icons/shield.svg',
      title: 'Secure & Confidential',
      description: 'Data privacy and protection guaranteed ',
      color: 'text-sky'
    }
  ];

  const parentFeatures = [
    {
      icon: '/icons/360-degrees.png',
      title: 'Track child’s 360° Growth',
      description: 'Monitor your child’s holistic development across all key learning areas, aligned with NEP/NCF.',
      color: 'text-mint'
    },
    {
      icon: '/icons/AI_icon.svg',
      title: 'AI Driven Personalized Learning',
      description: "Receive weekly tips and activities tailored to your child’s unique growth using smart AI insights.",
      color: 'text-sunshine'
    },
    {
      icon: '/icons/language.svg',
      title: 'Available in Your Language',
      description: 'Access the platform in English, Hindi, Marathi, Assamese and more languages coming soon for better connection.',
      color: 'text-coral'
    },
    {
      icon: '/icons/parent_teacher_collab.svg',
      title: 'Parent-Teacher Collaboration',
      description: 'Stay in sync with your child’s progress through seamless parent-teacher communication.',
      color: 'text-lavender'
    },
    {
      icon: '/icons/multimedia.svg',
      title: 'Multimedia Updates',
      description: 'Get regular photo, video, portfolio updates of your child’s learning moments and milestones.',
      color: 'text-coral'
    },
    {
      icon: '/icons/bonding.svg',
      title: 'Bonding Through Learning',
      description: 'Enjoy fun, personalized home activities that strengthen parent-child bonding through play.',
      color: 'text-lavender'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-lavender/20 via-mint/10 to-sunshine/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playful text-coral mb-4">
            Why Choose BoostMyChild?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Made with love for teachers, parents, and little learners - creating smiles that matter!
          </p>
        </div>

        <div className="features-content">
          <h2 className="text-2xl font-playful mt-6 mb-4 text-mint" >Schools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-gray-100 hover:border-coral/30">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 mb-4 shadow-md`}>
                  <img src={feature.icon} alt="" className={`h-6 w-6 ${feature.color}`}/>
                </div>
                <h3 className="text-xl font-playful text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-playful mt-6 mb-4 text-mint" >Parents</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parentFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-gray-100 hover:border-coral/30">
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 mb-4 shadow-md`}>
              <img src={feature.icon} alt="" className={`h-6 w-6 ${feature.color}`}/>
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