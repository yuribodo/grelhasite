
import Navbar from '../components/Navbar';
import Menuespetinho from '../assets/CARDAPIO GRELHA_page-0001.jpg';
import Menubebidas from '../assets/CARDAPIO GRELHA_page-0002.jpg';



const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <Navbar />
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Cardápio de Espetinhos</h2>
        <img src={Menuespetinho} alt="Cardápio de Espetinhos" />
      </div>
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Cardápio de Bebidas</h2>
        <img src={Menubebidas} alt="Cardápio de Bebidas" />
      </div>
    </div>
  );
}

export default Menu;
