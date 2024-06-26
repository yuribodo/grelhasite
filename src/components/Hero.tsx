import logo from '../assets/logo.png'; // Certifique-se de que o arquivo logo.png esteja na pasta src

const Hero = () => {
  return (
    <div className="text-center py-16 bg-gray-100">
      <img src={logo} alt="Logo" className="mx-auto mb-4" style={{ width: '150px' }} />
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
      <p className="text-xl">Discover our amazing products!</p>
    </div>
  );
}

export default Hero;