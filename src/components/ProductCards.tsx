import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imageProduct from '../assets/GRELHA E GOLE.jpg';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Espeto de Carne', description: 'Delicioso espeto de carne grelhada.', image: imageProduct, link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 2, name: 'Espeto de Frango', description: 'Saboroso espeto de frango temperado.', image: imageProduct, link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 3, name: 'Espeto de Linguça', description: 'Linguças grelhadas com tempero especial.', image: imageProduct, link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 4, name: 'Picanha na Brasa', description: 'Suculenta picanha assada na brasa.', image: imageProduct, link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 5, name: 'Costela de Porco', description: 'Costela de porco defumada e grelhada.', image: imageProduct, link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 6, name: 'Frango à Passarinho', description: 'Pedacinhos de frango frito crocante.', image: imageProduct, link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 7, name: 'Salmão Grelhado', description: 'Filé de salmão grelhado com ervas finas.', image: imageProduct, link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 8, name: 'Maminha na Brasa', description: 'Maminha suculenta assada na brasa.', image: imageProduct, link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
];

const ProductCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white">
      <div className="py-16 max-w-7xl mx-auto">
        <Slider {...settings}>
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="mx-4 sm:mx-2 ml-2"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-200 rounded-lg p-4 text-center shadow-lg mb-8 w-[220px] mx-auto">
                <div className="w-24 h-24 rounded-full mx-auto mb-4">
                  <img src={product.image} alt="imagem produto" className="rounded-full w-24 h-24" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p>{product.description}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 transition duration-300 ease-in-out"
                >
                  Fazer pedido
                </a>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCards;