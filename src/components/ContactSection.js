import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formBody = new URLSearchParams();
    formBody.append('name', formData.name);
    formBody.append('email', formData.email);
    formBody.append('phone', formData.phone);
    formBody.append('message', formData.message);
    formBody.append('_replyto', formData.email);
    formBody.append('_subject', 'Nuevo mensaje desde el sitio web');

    try {
      const response = await fetch('https://formsubmit.co/ajax/macarena.piedrabuena@hotmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody.toString()
      });

      if (response.ok) {
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      alert('Hubo un error al enviar tu mensaje. Por favor inténtalo nuevamente.');
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contacto</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-md h-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-cyan-600">📍</div>
                  <p className="ml-2 text-gray-600">Eduardo Oliber 482, Rafaela, Santa Fe, Argentina</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-cyan-600">📞</div>
                  <p className="ml-2 text-gray-600">3492 527126</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-cyan-600">✉️</div>
                  <p className="ml-2 text-gray-600">macarena.piedrabuena@hotmail.com</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-cyan-600">⏰</div>
                  <div className="ml-2">
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-gray-600">Miercoles: 15:00 - 19:00 (Bella Italia)</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-800 mb-3">Seguinos</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/od.macarena_piedrabuena?igsh=Mzlzd2pycXVjeXJy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-cyan-600 hover:text-white transition duration-300"
                  >
                    ig
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// DONE