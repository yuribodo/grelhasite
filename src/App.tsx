import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCards from './components/ProductCards';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductCards />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
