import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Clock, Star, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Anchor Hair Salon</h1>
            <p className="text-xl mb-8">Experience the art of beauty with our expert stylists</p>
            <Link 
              to="/booking" 
              className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Scissors className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Stylists</h3>
              <p className="text-gray-600">Our team of professional stylists are here to make your hair dreams come true</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
              <p className="text-gray-600">Open 7 days a week with convenient morning and evening appointments</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
              <p className="text-gray-600">Using only the finest products and latest techniques</p>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Us Today</h2>
            <div className="flex items-center justify-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <p>123 Beauty Street, Your City, ST 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;