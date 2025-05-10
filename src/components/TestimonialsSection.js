import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'Paciente',
      content: 'La Dra. Piedrabuena transformó mi sonrisa. Su profesionalismo y calidez hacen que cada visita sea un placer.',
      rating: 5
    },
    {
      name: 'Carlos Martínez',
      role: 'Paciente',
      content: 'Excelente atención y resultados. Mis hijos ya no tienen miedo de ir al dentista gracias a su trato.',
      rating: 5
    },
    {
      name: 'Lucía Fernández',
      role: 'Paciente',
      content: 'Después de años de complejos con mis dientes, por fin tengo la sonrisa que siempre quise. ¡Gracias!',
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Lo que dicen nuestros pacientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;