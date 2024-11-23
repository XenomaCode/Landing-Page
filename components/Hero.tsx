import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-white">
      <motion.h1
        className="text-6xl font-extrabold text-center leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Bienvenido a<br />
        <span className="text-[#FFFFFF]">Xenoma Code</span>
      </motion.h1>
      <motion.p
        className="text-2xl mt-4 text-center max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Desarrollamos soluciones innovadoras para impulsar tu negocio al siguiente nivel.
      </motion.p>
      <motion.button
        className="px-8 py-4 mt-6 bg-white text-primary font-bold rounded-lg hover:bg-gray-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Contáctanos
      </motion.button>
    </section>
  );
};

export default Hero;