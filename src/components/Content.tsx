import mainImage from '../assets/ContentImage.png';

const Content = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center py-8">
      {/* Imagem à esquerda */}
      <div className="md:w-1/2 pr-8 mb-4 md:mb-0">
        <img
          src={mainImage}
          alt="Imagem do Conteúdo"
          className="rounded-lg shadow-md max-w-full h-auto md:max-w-md"
        />
      </div>
      
      {/* Texto à direita */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Sobre o Restaurante</h2>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non efficitur justo. 
          Mauris sed justo et urna iaculis vestibulum.
        </p>
        <p className="text-lg mb-4">
          Fusce nec suscipit ipsum. Nullam euismod semper turpis vel pellentesque.
        </p>
        <p className="text-lg">
          Proin id lacus eget tellus placerat auctor in non lorem. 
        </p>
      </div>
    </div>
  );
}

export default Content;
