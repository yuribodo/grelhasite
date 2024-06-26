
const products = [
  { id: 1, name: 'Product 1', description: 'Description for product 1' },
  { id: 2, name: 'Product 2', description: 'Description for product 2' },
  { id: 3, name: 'Product 3', description: 'Description for product 3' },
];

const ProductCards = () => {
  return (
    <div className="bg-white">
      <div className="py-16 flex justify-around max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-200 rounded-lg p-4 text-center w-64 shadow-lg mb-8">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ProductCards;