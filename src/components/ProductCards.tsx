
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imageProduct from '../assets/GRELHA E GOLE.jpg';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Espeto de Carne', description: 'Delicioso espeto de carne grelhada.', image: imageProduct, price: 'R$ 13,70', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 2, name: 'Espeto de Frango', description: 'Saboroso espeto de frango temperado.', image: imageProduct, price: 'R$ 12,50', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 3, name: 'Espeto de Linguça', description: 'Linguças grelhadas com tempero especial.', image: imageProduct, price: 'R$ 10,90', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 4, name: 'Picanha na Brasa', description: 'Suculenta picanha assada na brasa.', image: imageProduct, price: 'R$ 25,00', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 5, name: 'Costela de Porco', description: 'Costela de porco defumada e grelhada.', image: imageProduct, price: 'R$ 19,90', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 6, name: 'Frango à Passarinho', description: 'Pedacinhos de frango frito crocante.', image: imageProduct, price: 'R$ 11,50', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 7, name: 'Salmão Grelhado', description: 'Filé de salmão grelhado com ervas finas.', image: imageProduct, price: 'R$ 28,50', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 8, name: 'Maminha na Brasa', description: 'Maminha suculenta assada na brasa.', image: imageProduct, price: 'R$ 22,00', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
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
    <div className="">
      <div className="py-8 md:py-16 max-w-7xl mx-auto">
        <Slider {...settings}>
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="mx-4 sm:mx-2 ml-2 relative"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-200 rounded-lg p-4 text-center shadow-lg mb-8 w-[200px] md:w-[240px] mx-auto overflow-hidden">
                <div className="relative w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 bottom-[-50%] bg-white rounded-full overflow-hidden">
                    <img src={product.image} alt="imagem produto" className="rounded-full w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-0">{product.name}</h3>
                <p className='text-red-900 mb-1'>{product.price}</p>
                <hr className="my-2 border-gray-400" />
                <p>{product.description}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-red-500 rounded-lg hover:bg-red-700 font-bold py-2 px-4 mt-4 transition duration-300 ease-in-out text-white"
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
