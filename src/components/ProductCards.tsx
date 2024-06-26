import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imageProduct from '../assets/GRELHA E GOLE.jpg'

const products = [
  { id: 1, name: 'Espeto de Carne', description: 'Description for product 1', image: imageProduct , link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 2, name: 'Espeto de Frango', description: 'Description for product 2', image: imageProduct, link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
  { id: 3, name: 'Espeto de Linguça', description: 'Description for product 3',image: imageProduct, link: 'https://delivery.yooga.app/grelhaegole/tabs/home' },
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

  return (
    <div className="bg-white">
      <div className="py-16 max-w-7xl mx-auto">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="mx-4 sm:mx-2 ml-2">
              <div className="bg-gray-200 rounded-lg p-4 text-center shadow-lg mb-8 w-[200px] mx-auto">
                <div className="w-24 h-24  rounded-full mx-auto mb-4">
                  <img src={product.image} alt="imagem produto" className=' rounded-full w-24 h-24'/>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p>{product.description}</p>
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="block bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 transition duration-300 ease-in-out">
                  Fazer pedido
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductCards;
