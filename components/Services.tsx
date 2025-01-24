import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Consultoría de Software',
    description: 'Ayudamos a identificar, planear y ejecutar estrategias tecnológicas para optimizar tu negocio.',
    icon: '📄', // Usa un ícono o un componente SVG
  },
  {
    title: 'Desarrollo Web',
    description: 'Creamos aplicaciones web modernas, rápidas y escalables.',
    icon: '💻',
  },
  {
    title: 'Aplicaciones Móviles',
    description: 'Desarrollamos apps nativas y multiplataforma con experiencias de usuario intuitivas.',
    icon: '📱',
  },
  {
    title: 'Diseño de Producto UI/UX',
    description: 'Diseñamos interfaces atractivas y centradas en el usuario.',
    icon: '🎨',
  },
  {
    title: 'Software Personalizado',
    description: 'Soluciones únicas adaptadas a las necesidades específicas de tu negocio.',
    icon: '💡',
  },
  {
    title: 'Gestión y Soporte Técnico',
    description: 'Aseguramos que tus sistemas operen sin interrupciones.',
    icon: '🛠️',
  },
  {
    title: 'IA & ML',
    description: 'Implementamos inteligencia artificial y machine learning para innovar en tu industria.',
    icon: '🤖',
  },
  {
    title: 'DevOps',
    description: 'Automatizamos y optimizamos procesos de desarrollo e infraestructura.',
    icon: '⚙️',
  },
];

const Services: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center bg-[#1F1F2E] rounded-lg p-6 border border-transparent hover:border-gradient-to-r hover:from-[#7F00F5] hover:to-[#00D4FF] cursor-pointer transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => setSelectedService(service)}
            >
              <div className="text-5xl text-gradient mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-md text-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-[#7F00F5]">{selectedService.title}</h3>
            <p className="mt-4 text-gray-600">{selectedService.description}</p>
            <button
              className="mt-6 px-6 py-2 bg-[#7F00F5] text-white font-bold rounded hover:bg-purple-800"
              onClick={() => setSelectedService(null)}
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Services;