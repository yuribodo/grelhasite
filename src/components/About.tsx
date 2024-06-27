import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Dispara apenas uma vez quando o componente entra no viewport
    threshold: 0.3, // Define o limiar de visibilidade
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6 }}
      id="about"
      className="text-center py-16 bg-gray-100 border-b-2 border-gray-300"
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Bem-Vindo ao Grelha e Gole</h2>
      <motion.p
        variants={variants}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-gray-700 max-w-3xl mx-auto"
      >
        Descubra uma experiência gastronômica única no coração da cidade. No Grelha e Gole, não 
        apenas servimos comida excepcional, mas também criamos memórias. Desde nossos espetinhos 
        suculentas até nossa seleção cuidadosamente escolhida de bebidas, cada visita é uma 
        celebração do sabor e da hospitalidade.
      </motion.p>
    </motion.div>
  );
}

export default About;
