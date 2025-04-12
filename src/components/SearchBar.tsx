import React from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 -mt-8 relative z-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="flex items-center border rounded-lg px-3 py-2">
            <MapPin className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Location"
              className="ml-2 w-full focus:outline-none"
            />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Home className="h-5 w-5 text-gray-400" />
            <select className="ml-2 w-full focus:outline-none bg-transparent">
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center border rounded-lg px-3 py-2">
            <DollarSign className="h-5 w-5 text-gray-400" />
            <select className="ml-2 w-full focus:outline-none bg-transparent">
              <option value="">Price Range</option>
              <option value="0-100000">$0 - $100,000</option>
              <option value="100000-300000">$100,000 - $300,000</option>
              <option value="300000-500000">$300,000 - $500,000</option>
              <option value="500000+">$500,000+</option>
            </select>
          </div>
        </div>
        
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Search className="h-5 w-5 mr-2" />
          Search
        </button>
      </div>
    </div>
  );
}