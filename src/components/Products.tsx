import React from 'react';
import { GraduationCap, Smartphone, BarChart3, Users, Brain, Target, MessageCircle, Calendar } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playful text-coral mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Two fun and powerful tools designed to help your little ones learn and grow!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* School Assessment Module (SAM) */}
          <div className="bg-gradient-to-br from-mint/20 to-sky/30 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-mint/30">
            <div className="flex items-center mb-6">
              <div className="bg-mint rounded-2xl p-3 mr-4 shadow-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-playful text-gray-800">School Assessment Module</h3>
                <p className="text-mint font-bold text-lg">SAM</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed text-xl">
              A magical assessment tool that helps preschools understand each child's unique learning journey, 
              track their amazing progress, and celebrate their special talents!
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-5 w-5 text-mint" />
                <span className="text-gray-700 font-semibold">Fun Progress Tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="h-5 w-5 text-mint" />
                <span className="text-gray-700 font-semibold">Smart Learning Insights</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-5 w-5 text-mint" />
                <span className="text-gray-700 font-semibold">Personalized Activities</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-mint" />
                <span className="text-gray-700 font-semibold">Teacher Dashboard</span>
              </div>
            </div>
            
            <button className="w-full bg-mint text-white py-3 rounded-full hover:bg-coral transition-all duration-300 font-semibold shadow-lg transform hover:scale-105">
              Learn More About SAM
            </button>
          </div>
          
          {/* Smart Parent App */}
          <div className="bg-gradient-to-br from-sunshine/20 to-peach/30 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-sunshine/30">
            <div className="flex items-center mb-6">
              <div className="bg-sunshine rounded-2xl p-3 mr-4 shadow-lg">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-playful text-gray-800">Smart Parent App</h3>
                <p className="text-sunshine font-bold text-lg">Mobile & Web</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed text-xl">
              A delightful app that keeps parents connected to their little one's learning adventure, 
              sharing exciting milestones and fun activities to do together at home!
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-sunshine" />
                <span className="text-gray-700 font-semibold">Chat with Teachers</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-sunshine" />
                <span className="text-gray-700 font-semibold">Daily Updates</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-5 w-5 text-sunshine" />
                <span className="text-gray-700 font-semibold">Learning Goals</span>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="h-5 w-5 text-sunshine" />
                <span className="text-gray-700 font-semibold">Fun Activities</span>
              </div>
            </div>
            
            <button onClick={() => window.open('https://play.google.com/store/apps/details?id=com.boostmychild.consumer&pcampaignid=web_share', '_blank')} className="w-full bg-sunshine text-white py-3 rounded-full hover:bg-coral transition-all duration-300 font-semibold shadow-lg transform hover:scale-105">
              Download Parent App
            </button>
          </div>
        </div>
        
        {/* Integration Section */}
        <div className="mt-16 bg-gradient-to-r from-lavender/30 to-mint/20 rounded-3xl p-8 text-center border-4 border-lavender/30">
          <h3 className="text-2xl font-playful text-coral mb-4">Perfect Together!</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto font-medium text-xl">
            SAM and Smart Parent App work like best friends, creating a magical learning world 
            where preschools teach, parents support, and children shine bright!
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div className="bg-mint/20 rounded-full p-4 border-4 border-mint/40">
              <GraduationCap className="h-8 w-8 text-mint" />
            </div>
            <div className="text-2xl text-coral font-playful">+</div>
            <div className="bg-sunshine/20 rounded-full p-4 border-4 border-sunshine/40">
              <Smartphone className="h-8 w-8 text-sunshine" />
            </div>
            <div className="text-2xl text-coral font-playful">=</div>
            <div className="bg-coral/20 rounded-full p-4 border-4 border-coral/40">
              <Target className="h-8 w-8 text-coral" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}