import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCards from './components/ProductCards';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Content from './components/Content';



function App() {
  return (
    <>
    <Navbar />
    <div >
      
      <Hero />
      <ProductCards />
      <About />
      <Content/>
      <Contact />
      <Footer />
    </div>
      
    </>
  );
}

export default App;
