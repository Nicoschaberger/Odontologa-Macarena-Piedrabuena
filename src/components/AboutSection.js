import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Dra. Macarena Piedrabuena</h2>
          <p className="text-gray-600 mb-4">
            La Dra. Macarena Piedrabuena es una odontóloga con 4 años de experiencia, especializada en ortodoncia y odontopediatría.
          </p>
          <p className="text-gray-600 mb-4">
            Graduada de la Universidad Nacional de Córdoba, ha continuado su formación con cursos de especialización para ofrecer los mejores tratamientos.
          </p>
          <p className="text-gray-600">
            Su enfoque combina la más avanzada tecnología con un trato cálido y personalizado para cada paciente.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Formación profesional</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-cyan-600 mt-1">•</div>
                <p className="ml-2 text-gray-600">Doctora en Odontología - Universidad Nacional de Córdoba</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-cyan-600 mt-1">•</div>
                <p className="ml-2 text-gray-600">Diplomatura en Odontopediatría</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-cyan-600 mt-1">•</div>
                <p className="ml-2 text-gray-600">Diplomatura en Ortopedia</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-cyan-600 mt-1">•</div>
                <p className="ml-2 text-gray-600">Terapias pulpares</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// DONE