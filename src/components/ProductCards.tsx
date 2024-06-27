import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imageProduct from '../assets/GRELHA E GOLE.jpg';
import tulipa from '../assets/tulipadefrango.jpg'
import frango from '../assets/Espetofrnago.jpg'
import calabresa from '../assets/calabresa2.jpg'
import linguica from '../assets/Espetolinguica.jpg'
import aalcatrabacon from '../assets/alcatrabacon.jpg'
import carnesol from '../assets/carnesol.jpg'
import frangobacon from '../assets/frangobacon.jpg'
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Carne (Alcatra)', description: 'Delicioso espeto de carne grelhada.', image: imageProduct, price: 'R$ 10,00', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 2, name: 'Espeto de Frango', description: 'Saboroso espeto de frango temperado.', image: frango, price: 'R$ 9,00', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 3, name: 'Tulipa de Frango', description: 'Delicioso Espeto de Tulipa de Frango.', image: tulipa, price: 'R$ 12,00', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 4, name: 'Espeto de Calabresa', description: 'Delicioso espeto de Calabresa.', image: calabresa, price: 'R$ 9,00', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 5, name: 'Linguiça Apimentada', description: 'Saborosa Linguiça Apimentada.', image: linguica, price: 'R$ 9,00', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 6, name: 'Carne de Sol', description: 'Pedacinhos de frango frito crocante.', image: carnesol, price: 'R$ 15,00', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 7, name: 'Frango C/ Bacon', description: 'Filé de salmão grelhado com ervas finas.', image: frangobacon, price: 'R$ 15,00', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 8, name: 'Alcatra C/ Bacon', description: 'Maminha suculenta assada na brasa.', image: aalcatrabacon, price: 'R$ 17,00', link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
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

  const cardVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="py-8 md:py-16 max-w-7xl mx-auto bg-gray-100">
      <Slider {...settings}>
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="mx-4 sm:mx-2 ml-2 relative"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            animate="animate"
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl p-4 text-center shadow-2xl mb-8 w-[240px] mx-auto overflow-hidden border border-gray-300">
              <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <p className='text-red-600 text-lg font-semibold mb-2'>{product.price}</p>
              <hr className="my-2 border-gray-300" />
              <p className="text-gray-600 mb-4 font-semibold">{product.description}</p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block shadow-xl bg-green-600 rounded-full hover:bg-green-700 font-bold py-2 px-4 mt-4 transition duration-300 ease-in-out text-white"
              >
                Faça seu Pedido
              </a>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCards;
