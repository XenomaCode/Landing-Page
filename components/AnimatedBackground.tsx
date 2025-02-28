import { useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const ref = useRef<HTMLDivElement>(null);

  // Optimizar el scroll con spring para mayor suavidad
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transformaciones optimizadas
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.5, 0.3, 0.2]);

  // Pre-calcular las posiciones de los elementos
  const elements = useMemo(() => 
    [...Array(12)].map((_, i) => ({
      id: i,
      width: Math.random() * 300 + 100,
      height: Math.random() * 300 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * -20,
    })), []
  );

  useEffect(() => {
    if (!ref.current) return;

    // Optimizar las actualizaciones de renderizado
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.style.willChange = 'transform';
        } else if (ref.current) {
          ref.current.style.willChange = 'auto';
        }
      },
      { threshold: 0 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden">
      {/* Nuevo gradiente más elaborado */}
      <div className="absolute inset-0">
        {/* Gradiente base */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0F0728] to-[#1A0454]" />
        
        {/* Capas de degradado adicionales */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(127,0,245,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(0,212,255,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,0,245,0.15)_0%,transparent_60%)]" />
        
        {/* Efecto de brillo superior */}
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent" />
        
        {/* Efecto de neblina */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40" />
      </div>

      {/* Elementos animados con nuevos colores */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: backgroundY,
          opacity,
        }}
        initial={false}
      >
        {elements.map((el) => (
          <motion.div
            key={el.id}
            className="absolute rounded-full blur-xl"
            style={{
              width: el.width,
              height: el.height,
              left: el.left,
              top: el.top,
              background: `linear-gradient(225deg, 
                ${el.id % 2 === 0 
                  ? 'rgba(127,0,245,0.15) 0%, rgba(0,212,255,0.15) 100%'
                  : 'rgba(0,212,255,0.15) 0%, rgba(127,0,245,0.15) 100%'
                })`,
              translateZ: 0,
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180],
              y: [0, -20, 0],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              delay: el.delay,
            }}
            initial={false}
          />
        ))}
      </motion.div>

      {/* Malla sutil */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Efecto de ruido sutil */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          transform: 'translateZ(0)',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;