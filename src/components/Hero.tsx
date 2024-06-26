import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Hero = () => {
  return (
    <div className="py-28 bg-gray-100">
      <div className="text-center">
        <motion.img
          src={logo}
          alt="Logo"
          className="mx-auto mb-4"
          style={{ width: '200px' }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <h1 className="text-4xl font-bold mb-4">Bem vindo ao Grelha e Gole</h1>
        <p className="text-xl mb-8">Espetaria e Bar!</p>
      </div>
    </div>
  );
}

export default Hero;
