import React from 'react';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5493492527126';
    const message = 'Hola Dra. Piedrabuena, me gustaría pedir una cita';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-cyan-50 py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Dra. Macarena Piedrabuena
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-600 mb-6">
            Odontología con pasión y cuidado
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Tu sonrisa es nuestra prioridad. Ofrecemos tratamientos personalizados con la más alta tecnología.
          </p>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md"
          >
            Pedir cita
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full shadow-xl overflow-hidden border-4 border-white">
            <img 
              src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0XuRAETq7MqavcHK34VzhrR2we8dDg6BAFCsl" 
              alt="Dra. Macarena Piedrabuena"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;