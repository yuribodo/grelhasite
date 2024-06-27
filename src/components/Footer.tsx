import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white text-center py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col items-center">
        <motion.div
          className="text-3xl font-bold mb-4"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          Grelha e Gole
        </motion.div>
        <motion.p 
          className="text-lg mb-4"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
        >
          &copy; 2024 Todos os direitos reservados.
        </motion.p>
        <motion.p 
          className="text-lg mb-6"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.4 }}
        >
          Desenvolvido por{' '}
          <motion.a 
            href="https://marioyuri.com" 
            className="text-yellow-400 hover:text-yellow-500 underline decoration-wavy"
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#FFD700" }}
            whileTap={{ scale: 0.9 }}
          >
            marioyuri.com
          </motion.a>
        </motion.p>
        <motion.div 
          className="flex space-x-6 mb-6"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.6 }}
        >
          <motion.a 
            href="https://www.instagram.com/marioyurimota" 
            className="text-white hover:text-gray-400" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
          </motion.a>
        </motion.div>
        <motion.div 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.8 }}
        >
          <motion.a 
            href="https://www.instagram.com/marioyurimota" 
            className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-full hover:bg-yellow-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Entre em Contato
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Footer;
