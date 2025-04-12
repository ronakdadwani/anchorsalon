import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Find Your Dream Home
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Discover the perfect property from our extensive collection of homes, apartments, and condos
        </p>
      </div>
    </div>
  );
}