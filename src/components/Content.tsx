import mainImage from '../assets/ContentImage.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Content = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-100 py-8 border-b-2 border-gray-300"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Imagem à esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 pr-8 mb-4 md:mb-0 flex justify-center md:justify-end"
        >
          <img
            src={mainImage}
            alt="Imagem do Conteúdo"
            className="rounded-lg max-w-full h-auto md:max-w-md shadow-2xl"
          />
        </motion.div>
        
        {/* Texto à direita */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:w-1/2 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center md:text-left">Descubra o Nosso Restaurante</h2>
          <div className="space-y-4">
            {/* Animação para cada bloco de conteúdo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-md bg-blue-100 rounded-lg p-4 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-800">Espaço Kids</h3>
              <p className="text-lg text-gray-700">
                Um ambiente divertido e seguro para suas crianças aproveitarem enquanto você saboreia sua refeição.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="max-w-md bg-green-100 rounded-lg p-4 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-2 text-green-800">Pratos Deliciosos</h3>
              <p className="text-lg text-gray-700">
                Oferecemos uma seleção de pratos preparados com ingredientes frescos e de alta qualidade.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-md bg-yellow-100 rounded-lg p-4 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-2 text-yellow-800">Ambiente Aconchegante</h3>
              <p className="text-lg text-gray-700">
                Nosso espaço é projetado para proporcionar conforto e relaxamento durante sua experiência gastronômica.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Content;
