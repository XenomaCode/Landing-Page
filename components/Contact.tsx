import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="px-8 py-12 bg-[#7F00F5] text-white">
      <h2 className="text-3xl font-bold text-center">Contáctanos</h2>
      <form className="mt-8 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Nombre</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F00F5]"
            placeholder="Tu nombre"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Correo</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F00F5]"
            placeholder="Tu correo electrónico"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Mensaje</label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F00F5]"
            placeholder="Escribe tu mensaje aquí"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#7F00F5] text-white font-bold py-2 px-4 rounded hover:bg-purple-800"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;