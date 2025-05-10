import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Dra. Macarena Piedrabuena</h3>
            <p className="text-gray-300">Odontología de excelencia con un enfoque humano y personalizado.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Inicio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Servicios</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Sobre mí</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Horario de atención</h3>
            <p className="text-gray-300">Lunes a Viernes: 9:00 - 18:00</p>
            <p className="text-gray-300">Sábados: 9:00 - 13:00</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Dra. Macarena Piedrabuena. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;