import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 

const Navbar = () => {
  const navigate = useNavigate(); // Use useNavigate para navegação

  const handleContatoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const contatoSection = document.querySelector('#contact');
      contatoSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const contatoSection = document.querySelector('#about');
      contatoSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-gray-800 text-white p-4 text-center fixed top-0 w-full z-50"
    >
      <nav className="flex justify-center space-x-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/menu" className="hover:text-gray-400">Menu</Link>
        <a href="/about" onClick={handleAboutClick} className=' hover:text-gray-400'>Sobre</a>
        <a href="/contato" onClick={handleContatoClick} className=' hover:text-gray-400'>Contato</a>
      </nav>
    </motion.div>
  );
}

export default Navbar;
