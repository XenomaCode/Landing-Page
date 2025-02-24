import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faLaptop, faMobile, faPalette, faLightbulb, faScrewdriverWrench, faRobot, faGear } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Consultoría de Software',
    description: 'Ayudamos a identificar, planear y ejecutar estrategias tecnológicas para optimizar tu negocio.',
    icon: <FontAwesomeIcon icon={faFile} style={{color: "#ffffff",}} />, // Usa un ícono o un componente SVG
  },
  {
    title: 'Desarrollo Web',
    description: 'Creamos aplicaciones web modernas, rápidas y escalables.',
    icon: <FontAwesomeIcon icon={faLaptop} style={{color: "#ffffff",}} />,
  },
  {
    title: 'Aplicaciones Móviles',
    description: 'Desarrollamos apps nativas y multiplataforma con experiencias de usuario intuitivas.',
    icon: <FontAwesomeIcon icon={faMobile} style={{color: "#ffffff",}} />,
  },
  {
    title: 'Diseño de Producto UI/UX',
    description: 'Diseñamos interfaces atractivas y centradas en el usuario.',
    icon: <FontAwesomeIcon icon={faPalette} style={{color: "#ffffff",}} />,
  },
  {
    title: 'Software Personalizado',
    description: 'Soluciones únicas adaptadas a las necesidades específicas de tu negocio.',
    icon: <FontAwesomeIcon icon={faLightbulb} style={{color: "#ffffff",}} />,
  },
  {
    title: 'Gestión y Soporte Técnico',
    description: 'Aseguramos que tus sistemas operen sin interrupciones.',
    icon: <FontAwesomeIcon icon={faScrewdriverWrench} style={{color: "#ffffff",}} />,
  },
  {
    title: 'IA & ML',
    description: 'Implementamos inteligencia artificial y machine learning para innovar en tu industria.',
    icon: <FontAwesomeIcon icon={faRobot} style={{color: "#ffffff",}} />,
  },
  {
    title: 'DevOps',
    description: 'Automatizamos y optimizamos procesos de desarrollo e infraestructura.',
    icon: <FontAwesomeIcon icon={faGear} style={{color: "#ffffff",}} />,
  },
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-[#7F00F5] to-[#00D4FF] p-[2px] rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.5 : 1,
                zIndex: hoveredIndex === index ? 10 : 1
              }}
              whileHover={{
                scale: 1.1,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative flex flex-col items-center justify-center bg-[#1f1f2ec9] rounded-lg p-6 h-full">
                <div className="text-5xl text-gradient mb-4">{service.icon}</div>
                <h3 className="text-md font-semibold text-white mb-2">{service.title}</h3>
                
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    height: hoveredIndex === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-white text-m text-center mt-2">{service.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;