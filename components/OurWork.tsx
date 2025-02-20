import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];  // Ahora es un array de imágenes
  category: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ParkFinder",
    description: "Sistema integral para la gestión de estacionamientos",
    images: [
      "/images/projects/mobile/parkf1.png",
      "/images/projects/mobile/parkf2.png",
      "/images/projects/mobile/parkf3.png",
      "/images/projects/mobile/parkf5.png",
      "/images/projects/mobile/parkf6.png",
      "/images/projects/mobile/parkf7.png",
      // Puedes agregar más imágenes del proyecto aquí
    ],
    category: "Mobile App",
    technologies: ["DART", "FLUTTER", "FIREBASE"],
    link: "https://proyecto1.com"
  },
  // Puedes agregar más proyectos aquí
  {
    id: 1,
    title: "OPEN AI & GOOGLE CLOUD",
    description: "Integración de OpenAI con Google Cloud para la interpretacion y validacion de transferencias bancarias",
    images: [
      "/images/projects/backend-projects/op1.jpg",
      "/images/projects/backend-projects/google1.jpg"
      // Puedes agregar más imágenes del proyecto aquí
    ],
    category: "Backend",
    technologies: ["PYTHON", "GOOGLE CLOUD", "OPEN AI","FASTAPI"],
    link: "https://proyecto1.com"
  },
];

const ProjectCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-t-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`Proyecto imagen ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/90 hover:bg-black/70 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/90 hover:bg-black/70 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const OurWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = ['all', 'Web App', 'Mobile App', 'Backend'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="our-work" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-4"
        >
          Nuestros Proyectos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-center max-w-2xl mx-auto mb-12"
        >
          Transformamos ideas en soluciones digitales innovadoras
        </motion.p>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#7F00F5] to-[#00D4FF] text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-purple-900/20 to-black/30 backdrop-blur-sm border border-white/10">
                <ProjectCarousel images={project.images} />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  
                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botón de ver más */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
                    >
                      <span>Ver proyecto</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Efecto de hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7F00F5] to-[#00D4FF] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  animate={{
                    opacity: hoveredProject === project.id ? 0.2 : 0
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;