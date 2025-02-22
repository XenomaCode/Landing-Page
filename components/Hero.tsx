import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactForm from './ContactForm';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/+524772331567?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios', '_blank');
  };

  const handleEmail = () => {
    setShowForm(!showForm);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowForm(false);
  };

  return (
    <>
      <section id="hero" className="flex flex-col items-center justify-center h-screen text-white">
        <div className='m-6'>
          <motion.h1
            className="text-6xl font-extrabold text-center leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bienvenido a<br />
            <span className="text-[#FFFFFF] italic">Xenoma Code</span>
          </motion.h1>
        </div>
        <motion.p
          className="text-2xl mt-4 text-center max-w-2xl mr-3 ml-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Desarrollamos soluciones innovadoras para impulsar tu negocio al siguiente nivel.
        </motion.p>
        
        {/* Botón de contacto corregido */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 relative"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative z-10 px-8 py-4 rounded-lg overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#7F00F5] to-[#00D4FF]"
              animate={{
                background: isHovered 
                  ? "linear-gradient(to right, #00D4FF, #7F00F5)"
                  : "linear-gradient(to right, #7F00F5, #00D4FF)"
              }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center space-x-2 font-bold text-white">
              <span>Contáctanos</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
          
          {/* Efecto de brillo */}
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#7F00F5] to-[#00D4FF] rounded-lg blur-xl opacity-50"
            animate={{
              scale: isHovered ? 1.1 : 1,
              opacity: isHovered ? 0.7 : 0.5,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </section>

      {/* Modal modificado */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-gradient-to-br from-[#000000] to-[#7F00F5] rounded-xl p-8 max-w-md w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              ¿Cómo prefieres contactarnos?
            </h3>  
            <div className="space-y-4">
              <button
                onClick={handleWhatsApp}
                className="w-full py-4 px-6 bg-gradient-to-r from-[#7F00F5] to-[#00D4FF] text-white rounded-lg flex items-center justify-center space-x-3 hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="font-semibold">WhatsApp</span>
              </button>
              
              <button
                onClick={handleEmail}
                className="w-full py-4 px-6 bg-white/10 text-white rounded-lg flex items-center justify-center space-x-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02] border border-white/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="font-semibold">Correo</span>
              </button>

              {showForm ? (
                <>
                  <ContactForm />
                </>
              ) : (
                <h1></h1>
              )}
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-3 px-4 bg-black/50 text-white/80 rounded-lg hover:bg-black/70 hover:text-white transition-all duration-300 mt-6 font-medium"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Hero;