import React from 'react';
import { Heart, Bed, Bath, Square } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">${property.price.toLocaleString()}</h3>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
            {property.type === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
        </div>
        
        <h4 className="text-lg text-gray-700 mb-2">{property.title}</h4>
        <p className="text-gray-600 text-sm mb-4">{property.location}</p>
        
        <div className="flex justify-between text-gray-600">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.area} sq ft</span>
          </div>
        </div>
      </div>
    </div>
  );
}