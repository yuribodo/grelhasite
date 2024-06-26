import { FaInstagram} from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 mb-8">
          {/* Informações de Contato */}
          <div className="w-full md:w-1/2 md:border-l-4 md:border-pink-600 pl-4 md:pl-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Endereço</h2>
            <p className="text-lg mb-4">Endereço: 📍Av Calama 5658, Flodoaldo Pontes Pinto!</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contato</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaInstagram className="text-pink-600" size={24} />
                <a href="https://www.instagram.com/grelhaegole/" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                  @grelhaegole
                </a>
              </div>
              
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="w-full md:w-1/2 md:border-l-4 md:border-green-600 pl-4 md:pl-8 mt-8 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Horário de Funcionamento</h2>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="px-4 py-2">Segunda:</td>
                  <td className="px-4 py-2">17h:30 - 23h:30</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Terça:</td>
                  <td className="px-4 py-2">Fechado</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Quarta a Domingo:</td>
                  <td className="px-4 py-2">17h:30 - 23h:30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
