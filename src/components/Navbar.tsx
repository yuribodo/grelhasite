
const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 text-center fixed top-0 w-full z-50">
      <nav className="flex justify-center space-x-4">
        <a href="#menu" className="hover:text-gray-400">Menu</a>
        <a href="#contact" className="hover:text-gray-400">Contato</a>
        <a href="#about" className="hover:text-gray-400">Sobre</a>
      </nav>
    </div>
  );
}

export default Navbar;
