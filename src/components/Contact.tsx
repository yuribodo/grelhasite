import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Dispara apenas uma vez quando o componente entra no viewport
    threshold: 0.5, // Define o limiar de visibilidade
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
      id="contact"
      className="py-8 md:py-16 bg-gray-100"
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 mb-8">
          {/* Informações de Contato */}
          <motion.div
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 md:border-l-4 md:border-pink-600 pl-4 md:pl-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Endereço</h2>
            <p className="text-lg">Endereço: 📍Av Calama 5658, Flodoaldo Pontes Pinto!</p>
            <p className="text-lg mb-4">Antigo Chop do 4 </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contato</h2>
            <motion.div
              variants={variants}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <motion.div
                variants={variants}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center space-x-4"
              >
                <FaInstagram className="text-pink-600" size={24} />
                <a
                  href="https://www.instagram.com/grelhaegole/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600"
                >
                  @grelhaegole
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Horário de Funcionamento */}
          <motion.div
            variants={variants}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-1/2 md:border-l-4 md:border-green-600 pl-4 md:pl-8 mt-8 md:mt-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Horário de Funcionamento</h2>
            <motion.table
              variants={variants}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full"
            >
              <tbody>
                <motion.tr
                  variants={variants}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="px-4 py-2"
                >
                  <td>Segunda:</td>
                  <td>17h:30 - 23h:30</td>
                </motion.tr>
                <motion.tr
                  variants={variants}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="px-4 py-2"
                >
                  <td>Terça:</td>
                  <td>Fechado</td>
                </motion.tr>
                <motion.tr
                  variants={variants}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="px-4 py-2"
                >
                  <td>Quarta a Domingo:</td>
                  <td>17h:30 - 23h:30</td>
                </motion.tr>
              </tbody>
            </motion.table>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
