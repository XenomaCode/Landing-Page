import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold text-[#FFFFFF]">¿Por qué elegir Xenoma Code?</h2>
        <p className="text-white-600 mt-4 max-w-3xl mx-auto">
          Somos una casa desarrolladora comprometida con la calidad y la innovación, brindando soluciones tecnológicas a la medida.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div
            className="p-6 border rounded-lg hover:shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-[#FFFFFF]">Innovación</h3>
            <p className="text-white-600 mt-2">
              Nos mantenemos a la vanguardia con las últimas tecnologías.
            </p>
          </motion.div>
          <motion.div
            className="p-6 border rounded-lg hover:shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-[#FFFFFF]">Calidad</h3>
            <p className="text-white-600 mt-2">
              Nos enfocamos en entregar soluciones robustas y escalables.
            </p>
          </motion.div>
          <motion.div
            className="p-6 border rounded-lg hover:shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-[#FFFFFF]">Compromiso</h3>
            <p className="text-white-600 mt-2">
              Tu éxito es nuestro objetivo principal.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;