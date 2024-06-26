import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import video2 from '../assets/video2grelha.mp4';

const Hero = () => {
  return (
    <div className="py-32 bg-gray-100 relative">
      <div className="text-center z-10 relative">
        <motion.img
          src={logo}
          alt="Logo"
          className="mx-auto mb-4"
          style={{ width: '200px' }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <h1 className="text-4xl text-white font-bold mb-4">Bem vindo ao Grelha e Gole</h1>
        <p className="text-xl text-white mb-8">Espetaria e Bar!</p>
      </div>
      <motion.video
        autoPlay
        loop
        muted
        src={video2}
        className="absolute inset-0 object-cover w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
    </div>
  );
}

export default Hero;
