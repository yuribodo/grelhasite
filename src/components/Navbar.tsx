import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-gray-800 text-white p-4 text-center fixed top-0 w-full z-50"
    >
      <nav className="flex justify-center space-x-4">
        <Link to="/menu" className="hover:text-gray-400">Menu</Link>
        <Link to="/" className="hover:text-gray-400">Sobre</Link>
        <Link to="/" className="hover:text-gray-400">Contato</Link>
      </nav>
    </motion.div>
  );
}

export default Navbar;
