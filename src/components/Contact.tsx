import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 mb-8">
          {/* Informações de Contato */}
          <div className="w-full md:w-1/2 border-l-4 border-pink-600 pl-4">
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
              <div className="flex items-center space-x-4">
                <FaWhatsapp className="text-green-600" size={24} />
                <a href="https://wa.me/seunumero" target="_blank" rel="noopener noreferrer" className="text-green-600">
                  Seu número de WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="w-full md:w-1/2 border-l-4 border-green-600 pl-4 md:border-l-0 md:border-t-4 md:border-green-600">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Horário de Funcionamento</h2>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="px-4 py-2">Segunda - Sexta:</td>
                  <td className="px-4 py-2">08:00 - 18:00</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Sábado:</td>
                  <td className="px-4 py-2">09:00 - 13:00</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Domingo:</td>
                  <td className="px-4 py-2">Fechado</td>
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
