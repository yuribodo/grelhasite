import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import logo from '../assets/logo.png'

const Navbar = () => {
  const navigate = useNavigate(); 
  const [isOpen, setIsOpen] = useState(false); 

  const handleHomeClick = () => {
    navigate('/');
    setTimeout(() => {
      const heroSection = document.querySelector('#hero');
      heroSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const aboutSection = document.querySelector('#about');
      aboutSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleContatoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const contatoSection = document.querySelector('#contact');
      contatoSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  const line1Variants = {
    open: { rotate: 45, y: 10 },
    closed: { rotate: 0, y: 0 },
  };

  const line2Variants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const line3Variants = {
    open: { rotate: -45, y: -6 },
    closed: { rotate: 0, y: 0 },
  };

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-gray-800 text-white p-4 text-center fixed top-0 w-full z-50"
    >
      <div className="flex justify-between items-center">
        <img className='w-12' src={logo} alt="" />
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none"
          >
            <motion.div className="relative w-6 h-6">
              <motion.div 
                className="absolute w-full h-0.5 bg-white"
                variants={line1Variants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
              />
              <motion.div 
                className="absolute w-full h-0.5 bg-white mt-2"
                variants={line2Variants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
              />
              <motion.div 
                className="absolute w-full h-0.5 bg-white mt-4"
                variants={line3Variants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
              />
            </motion.div>
          </button>
        </div>
        <nav className="hidden md:flex justify-center space-x-4">
          <a href="#" onClick={handleHomeClick} className="hover:text-gray-400">Home</a>
          <Link to="/menu" className="hover:text-gray-400">Menu</Link>
          <a href="/about" onClick={handleAboutClick} className=' hover:text-gray-400'>Sobre</a>
          <a href="/contato" onClick={handleContatoClick} className=' hover:text-gray-400'>Contato</a>
        </nav>
      </div>
      
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="md:hidden bg-gray-800 absolute top-14 left-0 w-full flex flex-col items-center space-y-4 py-4"
      >
        <a href="#" onClick={() => { handleHomeClick(); setIsOpen(false); }} className="hover:text-gray-400">Home</a>
        <Link to="/menu" onClick={() => setIsOpen(false)} className="hover:text-gray-400">Menu</Link>
        <a href="/about" onClick={(e) => { handleAboutClick(e); setIsOpen(false); }} className=' hover:text-gray-400'>Sobre</a>
        <a href="/contato" onClick={(e) => { handleContatoClick(e); setIsOpen(false); }} className=' hover:text-gray-400'>Contato</a>
      </motion.nav>
    </motion.div>
  );
}

export default Navbar;
