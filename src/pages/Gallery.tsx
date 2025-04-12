import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      caption: "Modern Bob Cut"
    },
    {
      url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      caption: "Balayage Highlights"
    },
    {
      url: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      caption: "Bridal Styling"
    },
    {
      url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      caption: "Men's Fashion Cut"
    },
    {
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      caption: "Color Transformation"
    },
    {
      url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      caption: "Classic Updo"
    },
    {
      url: "https://images.unsplash.com/photo-1601597178646-9c0f1e81b42b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      caption: "Trendy Layers"
    },
    {
      url: "https://images.unsplash.com/photo-1617896848219-5b02511aee43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      caption: "Creative Color"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h1>
          <p className="text-lg text-gray-600">Browse through our portfolio of beautiful transformations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{image.caption}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Love what you see?</p>
          <button className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors">
            Book Your Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;