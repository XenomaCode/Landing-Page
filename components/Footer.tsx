import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-[#000000] text-white py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 Xenoma Code. Todos los derechos reservados.</p>
        <div className="mt-4 sm:mt-0 flex space-x-4">
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">LinkedIn</a>
          <a href="#" className="hover:text-gray-400">GitHub</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;