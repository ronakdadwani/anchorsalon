import React from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../types';

const FEATURED_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    price: 850000,
    location: 'Beverly Hills, CA',
    type: 'sale',
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80',
    description: 'Stunning modern villa with pool and city views',
    features: ['Pool', 'Garden', 'Garage']
  },
  {
    id: '2',
    title: 'Downtown Apartment',
    price: 2500,
    location: 'Manhattan, NY',
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80',
    description: 'Luxury apartment in the heart of downtown',
    features: ['Doorman', 'Gym', 'Parking']
  },
  {
    id: '3',
    title: 'Seaside Condo',
    price: 450000,
    location: 'Miami Beach, FL',
    type: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    description: 'Beautiful condo with ocean views',
    features: ['Ocean View', 'Pool', 'Security']
  }
];

export default function FeaturedProperties() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROPERTIES.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}