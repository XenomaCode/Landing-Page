import { motion } from 'framer-motion';
import { useState } from 'react';

const WhyChooseUs: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      title: "Innovación",
      description: "Nos mantenemos a la vanguardia con las últimas tecnologías.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Calidad",
      description: "Nos enfocamos en entregar soluciones robustas y escalables.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Compromiso",
      description: "Tu éxito es nuestro objetivo principal.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
    }
  ];

  return (
    <section id="why-us" className="py-20">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <motion.h2 
          className="text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Por qué elegir Xenoma Code?
        </motion.h2>
        <motion.p 
          className="text-white/80 text-lg mt-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Somos una casa desarrolladora comprometida con la calidad y la innovación, 
          brindando soluciones tecnológicas a la medida.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-50 group-hover:opacity-100 blur transition-opacity duration-300" />
              
              {/* Card Content */}
              <div className="relative p-8 bg-black/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full">
                <motion.div
                  animate={{
                    y: hoveredCard === index ? -5 : 0,
                    scale: hoveredCard === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.2 }}
                  className="text-white/90 mb-6"
                >
                  {card.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                
                <p className="text-white/70 text-lg">
                  {card.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredCard === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;