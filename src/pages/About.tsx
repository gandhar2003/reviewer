import React from 'react';
import { Shield, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Reviewer</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your trusted source for in-depth tech reviews and comparisons. We help you make informed decisions
          about your tech purchases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Unbiased Reviews</h3>
          <p className="text-gray-600">
            We maintain complete editorial independence and provide honest, thorough reviews.
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
          <p className="text-gray-600">
            Our reviewers have years of experience testing and evaluating tech products.
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Thorough Testing</h3>
          <p className="text-gray-600">
            Every product undergoes rigorous testing before we publish our reviews.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mb-2">Gandhar Patade</h3>
            <p className="text-gray-600 text-center">Lead Tech Reviewer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;