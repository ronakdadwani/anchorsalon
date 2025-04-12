import { Scissors, Star } from 'lucide-react';

const Stylists = () => {
  const stylists = [
    {
      name: "Sarah Johnson",
      role: "Master Stylist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      specialties: ["Color Specialist", "Bridal Styling", "Precision Cutting"],
      bio: "With over 10 years of experience, Sarah specializes in creating stunning, personalized looks that enhance your natural beauty."
    },
    {
      name: "Michael Chen",
      role: "Senior Stylist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      specialties: ["Men's Styling", "Textured Hair", "Modern Techniques"],
      bio: "Michael brings his artistic vision and technical expertise to every client, ensuring a perfect blend of style and functionality."
    },
    {
      name: "Emily Rodriguez",
      role: "Color Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      specialties: ["Balayage", "Fashion Colors", "Color Correction"],
      bio: "Emily's passion for color and attention to detail helps clients achieve their dream hair color while maintaining hair health."
    },
    {
      name: "David Wilson",
      role: "Style Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      specialties: ["Avant-garde Styling", "Editorial Work", "Hair Extensions"],
      bio: "David's innovative approach and industry experience make him a sought-after stylist for both everyday and special occasion styles."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-lg text-gray-600">Expert stylists dedicated to making you look and feel amazing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stylists.map((stylist, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img
                src={stylist.image}
                alt={stylist.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{stylist.name}</h3>
                <p className="text-rose-600 font-medium mb-3">{stylist.role}</p>
                <p className="text-gray-600 mb-4">{stylist.bio}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {stylist.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-rose-100 text-rose-800"
                      >
                        <Star className="w-3 h-3 mr-1" />
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Ready to work with our amazing team?</p>
          <button className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stylists;