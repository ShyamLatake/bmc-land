import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-coral to-sunshine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-playful mb-6 drop-shadow-md">
            Ready for a Magical Learning Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95 font-medium">
            Thousands of preschools and families already using BoostMyChild to help little ones discover their amazing potential!
          </p>
          
          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-white text-coral px-8 py-4 rounded-full hover:bg-mint hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-lg font-bold shadow-lg">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-4 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-coral transition-all duration-300 text-lg font-bold shadow-lg">
              Schedule Demo
            </button>
          </div> */}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-mint" />
              <span className="font-semibold">30-day free trial</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-mint" />
              <span className="font-semibold">No setup fees</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-mint" />
              <span className="font-semibold">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}