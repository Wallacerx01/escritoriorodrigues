import home from "../../assets/logo-1.png";
import { FaWhatsapp } from "react-icons/fa";

import { Atuacao } from "../../pages/atuacao";
import { Sobre } from "../../pages/sobre";
import { Mapa } from "../../components/mapa";

export function Home() {
  return (
    <div>
      <main
        id="inicio"
        className=" bg-gradient-to-br from-[#1B263B] to-[#2C3E50] w-full min-h-[calc(100vh-160px)] flex items-center justify-center px-6 py-10"
      >
        <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl w-full gap-10">
          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
              Melquiades & Rodrigues <br />
              <span className="text-[#DBDBDB]">Advogados Associados</span>
            </h1>

            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              Atuamos com excelência e compromisso na defesa dos direitos de
              nossos clientes. Nossa equipe une experiência, ética e dedicação
              para oferecer soluções jurídicas personalizadas e eficazes em
              diversas áreas do Direito.
              <br />
              <br />
              Conte conosco para representar seus interesses com
              responsabilidade e transparência.
            </p>

            <button className="bg-[#0D1B2A] text-white px-6 py-3 rounded-lg hover:bg-[#DBDBDB] hover:text-[#0D1B2A] hover:shadow-lg transition-all duration-300 font-semibold inline-flex items-center gap-2">
              <a
                href="https://wa.me/62996293233?text=Olá"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaWhatsapp
                  size={24}
                  color="#fff"
                  className="hover:text-[#0D1B2A] "
                />
                Saiba Mais
              </a>
            </button>
          </div>

          {/* Imagem */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={home}
              alt="Escritório de advocacia Melquídes & Rodrigues"
              className="w-80 md:w-[520px] drop-shadow-2xl rounded-xl hover:scale-105 transition-all duration-300"
            />
          </div>
        </section>
      </main>
      <Sobre />
      <Atuacao />
      <Mapa />
    </div>
  );
}
