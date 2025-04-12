
import { Scissors } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8 text-rose-600" />,
      name: "Women's Haircut",
      description: "Expert cutting and styling tailored to your preferences",
      price: "from 100/-",
      duration: "60 min"
    },
    {
      icon: <Scissors className="w-8 h-8 text-rose-600" />,
      name: "Men's Haircut",
      description: "Precision cutting and styling for the modern gentleman",
      price: "from 100/-",
      duration: "45 min"
    },
    {
      icon: <Scissors className="w-8 h-8 text-rose-600" />,
      name: "Color & Highlights",
      description: "Full color, highlights, or balayage services",
      price: "from  100/-",
      duration: "120+ min"
    },
    {
      icon: <Scissors className="w-8 h-8 text-rose-600" />,
      name: "Bridal Styling",
      description: "Complete bridal hair styling and consultation",
      price: "from  100/-",
      duration: "90 min"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 mb-12">Experience the perfect blend of style and expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 transition-transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-rose-50 rounded-lg">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-rose-600 font-semibold">{service.price}</span>
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Ready to transform your look?</p>
          <button className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;