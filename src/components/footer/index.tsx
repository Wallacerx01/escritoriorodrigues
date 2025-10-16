import { CgMail } from "react-icons/cg";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] w-full h-auto pb-10" id="footer">
      <section className="flex flex-col md:flex-row justify-around items-center center ">
        <div className="text-white flex flex-col ">
          <h3 className="text-[#DBDBDB] font-medium text-2xl my-3 text-center">
            Serviços
          </h3>
          <ul className="flex flex-col gap-3 text-[15px] items-center md:items-start">
            <li className="hover:scale-105  hover:shadow-lg transition-all duration-300">
              <a href="#area">Direito Trabalhista</a>
            </li>
            <li className="hover:scale-105  hover:shadow-lg transition-all duration-300">
              <a href="#area">Direito Previdenciário</a>
            </li>
            <li className="hover:scale-105  hover:shadow-lg transition-all duration-300">
              <a href="#area">Direito Família</a>
            </li>
            <li className="hover:scale-105  hover:shadow-lg transition-all duration-300">
              <a href="#area">Direito Consumidor</a>
            </li>
            <li className="hover:scale-105  hover:shadow-lg transition-all duration-300">
              <a href="#area">Direito Criminalista</a>
            </li>
            <li className="hover:scale-105  hover:shadow-lg transition-all duration-300">
              <a href="#area">Direito Civil</a>
            </li>
          </ul>
        </div>
        <div className="text-white flex flex-col ">
          <h3 className="text-[#DBDBDB] font-medium text-2xl my-3 text-center">
            Contato
          </h3>
          <ul className="flex flex-col gap-3 text-[15px] items-center md:items-start">
            <li className="hover:scale-105  hover:shadow-lg transition-all duration-300 flex justify-center items-center gap-1">
              <FaWhatsapp size={25} />
              <a href="https://wa.me/62996293233?text=Olá" target="_blank">
                (62) 9 96293233
              </a>
            </li>
            <li className="hover:scale-105  hover:shadow-lg transition-all duration-300 flex justify-center items-center gap-1">
              <FaWhatsapp size={25} />
              <a
                href="https://wa.me/62994082732?text=Olá Dr Juliano"
                target="_blank"
              >
                (62) 9 94082732
              </a>
            </li>
            <li className="hover:scale-105  hover:shadow-lg transition-all duration-300 flex justify-center items-center gap-1">
              <CgMail size={25} />
              <a
                href="mailto:brunnarodrigues.adv@gmail.com?subject=Olá&body=Olá,%20gostaria%20de%20entrar%20em%20contato."
                target="_blank"
              >
                brunnarodrigues.adv@gmail.com
              </a>
            </li>
            <li className="hover:scale-105  hover:shadow-lg transition-all duration-300 flex justify-center items-center gap-1">
              <CgMail size={25} />
              <a
                href="mailto:julianorodrigues.adv@gmail.com?subject=Olá&body=Olá,%20gostaria%20de%20entrar%20em%20contato."
                target="_blank"
              >
                julianorodrigues.adv@gmail.com
              </a>
            </li>
            <li className="hover:scale-105  hover:shadow-lg transition-all duration-300 flex justify-center items-center gap-1">
              <FaInstagram size={25} />
              <a
                href="https://www.instagram.com/melquiadeserodrigues/"
                target="_blank"
              >
                Melquiades & Rodrigues
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="flex flex-col justify-center items-center gap-7 pb-10 p-3 text-white">
        <div className="flex flex-col">
          <h3 className="text-[#DBDBDB] font-medium text-2xl my-3 text-center">
            Endereço
          </h3>
          <a
            href="https://maps.app.goo.gl/UQFwwBG5GNeLeUG4A"
            target="_blank"
            className="text-center"
          >
            <span className="text-center mt-5 text-xl hover:underline text-[16px]">
              Rua 10, Quadra 02, Lote 05-B, Sala 01, Galeria 10, Conjunto
              Uirapuru, Galeria 10. Senador Canedo - GO, CEP: 75261-211
            </span>
          </a>
        </div>
      </div>
      <hr className="text-gray-700 mt-5" />
      <div className="flex justify-center items-center h-20 mx-1 mt-3 ">
        <span className="text-white text-center">
          @ 2025 Melquiades & Rodrigues - Todos os direitos reservados. Proibida
          a reprodução sem autorização. © Desenvolvido por
          <a
            href="https://www.instagram.com/wallacerx01/"
            className="text-yellow-600 ml-1"
            target="_blank"
          >
            Wallace Rodrigues
          </a>
        </span>
      </div>
    </footer>
  );
}
