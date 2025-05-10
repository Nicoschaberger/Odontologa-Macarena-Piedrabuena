import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Ortodoncia',
      description: 'Tratamientos de ortodoncia invisible y brackets para todas las edades.',
      icon: '🦷'
    },
    {
      title: 'Blanqueamiento',
      description: 'Blanqueamiento dental profesional para una sonrisa más brillante.',
      icon: '✨'
    },
    {
      title: 'Implantes',
      description: 'Soluciones permanentes para dientes perdidos con tecnología de vanguardia.',
      icon: '🦴'
    },
    {
      title: 'Odontopediatría',
      description: 'Cuidado dental especializado para los más pequeños de la casa.',
      icon: '👶'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;