import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    // Carrega o vídeo de forma assíncrona
    const loadVideo = async () => {
      const video = await import('../assets/video2grelha.mp4');
      setVideoSrc(video.default);
    };

    loadVideo();
  }, []);

  return (
    <div className="py-32 bg-gray-100 relative">
      <div className="text-center z-10 relative">
        <motion.img
          src={logo}
          alt="Logo"
          className="mx-auto w-48 md:w-64"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <h1 className="text-4xl md:text-6xl max-sm:p-4 text-white font-bold mb-2">Grelha e Gole</h1>
        <p className="text-xl md:text-2xl text-white mb-20">Espetaria e Bar!</p>
      </div>
      {videoSrc && (
        <motion.video
          autoPlay
          loop
          muted
          src={videoSrc}
          className="absolute inset-0 object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      )}
      <div className="absolute inset-0 bg-black opacity-50" />
    </div>
  );
}

export default Hero;
