import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import agressao from "../../assets/img-home/agressao mulher maria penha domestica.jpeg";
import autismo from "../../assets/img-home/autismo bpc.jpg";
import auxAcidente from "../../assets/img-home/aux acidente.jpg";
import auxDoenca from "../../assets/img-home/aux doença.jpg";
import auxMaternidade from "../../assets/img-home/aux maternidade.jpg";
import bpcIdoso from "../../assets/img-home/bpc idoso.jpg";
import carteira from "../../assets/img-home/carteira-de-trabalho.jpg";
import divorcio from "../../assets/img-home/divorcio.jpg";
import pensaoAli from "../../assets/img-home/pensao alimenticia.png";
import pensaoMor from "../../assets/img-home/pensao por morte.jpg";

import { Atuacao } from "../../pages/atuacao";
import { Sobre } from "../../pages/sobre";

export function Home() {
  const slides = [
    {
      titulo: "Direito de Família - Pensão Alimentícia",
      descricao:
        "Se você precisa receber ou regularizar a pensão alimentícia, conte com uma orientação jurídica clara e eficiente.",
      imagem: pensaoAli,
      link: "https://wa.me/62996293233?text=Olá, quero informações sobre Pensão Alimentícia.",
    },
    {
      titulo: "Direito de Família - Divórcio",
      descricao:
        "Está passando por um divórcio? Conte com uma advogada especializada para resolver tudo com agilidade, empatia e sigilo.",
      imagem: divorcio,
      link: "https://wa.me/62996293233?text=Olá, quero informações sobre Divórcio.",
    },
    {
      titulo: "Direito Criminal - Violência Doméstica",
      descricao:
        "Sofreu ou foi acusado(a) de violência doméstica? Tenha orientação jurídica imediata e defesa estratégica do seu lado. ",
      imagem: agressao,
      link: "https://wa.me/62996293233?text=Olá, quero informações sobre Violência Doméstica.",
    },
    {
      titulo: "Direito Previdenciário - Auxílio Maternidade",
      descricao:
        "Está grávida ou teve um bebê? Você pode ter direito ao auxílio maternidade, com apenas uma contribuição. Descubra agora como receber.",
      imagem: auxMaternidade,
      link: "https://wa.me/62996293233?text=Olá, quero informações sobre Auxílio Maternidade.",
    },
    {
      titulo: "Benefício Assistencial - BPC Idoso",
      descricao:
        "O BPC é um direito de quem trabalhou e merece viver com dignidade. Saiba agora como garantir o benefício para o idoso da sua família.",
      imagem: bpcIdoso,
      link: "https://wa.me/62996293233?text=Olá, quero informações sobre BPC Idoso.",
    },
    {
      titulo: "Benefício Previdenciário - Auxílio Acidente",
      descricao:
        "Sofreu um acidente e ficou com sequelas? Você pode ter direito ao Auxílio-Acidente do INSS, descubra agora se pode receber.",
      imagem: auxAcidente,
      link: "https://wa.me/62996293233?text=Olá, quero informações sobre Auxílio Acidente.",
    },
    {
      titulo: "Benefício Previdenciário - BPI/ Auxílio Doença",
      descricao:
        "Está afastado do trabalho e o INSS negou seu benefício? Saiba como garantir o seu direito ao Auxílio-Doença com segurança e rapidez. ( beneficio por incapacidade temporaria)",
      imagem: auxDoenca,
      link: "https://wa.me/62996293233?text=Olá, quero informações sobre BPI/ Auxílio Doença.",
    },
    {
      titulo: "Benefício Assistencial - BPC Autista",
      descricao:
        "Garantimos o acesso ao BPC/LOAS para pessoas com autismo. Entenda seus direitos e receba o benefício que a lei assegura. ",
      imagem: autismo,
      link: "https://wa.me/62996293233?text=Olá, quero informações sobre BPC Autista.",
    },
    {
      titulo: "Direitos Trabalhistas",
      descricao:
        "Defendemos seus direitos trabalhistas com seriedade e resultados. Seja rescisão, horas extras ou justa causa, estamos prontos para lutar por você.",
      imagem: carteira,
      link: "https://wa.me/62996293233?text=Olá, quero informações sobre Direitos Trabalhistas.",
    },
    {
      titulo: "Direito Previdenciário - Pensão por Morte",
      descricao:
        "Garantir o amparo financeiro após a perda de um ente querido é um direito. Estamos aqui para orientar cada passo do processo.",
      imagem: pensaoMor,
      link: "https://wa.me/62996293233?text=Olá, quero saber sobre Pensão por Morte.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const atual = slides[index];

  return (
    <div>
      <main
        id="inicio"
        className="bg-gradient-to-br from-[#1B263B] to-[#2C3E50] w-full min-h-[calc(100vh-160px)] flex items-center justify-center px-6 py-10"
      >
        <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl w-full gap-10">
          {/* Carrossel responsivo */}
          <div className="md:w-1/2 w-full relative flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.section
                key={atual.titulo}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="bg-[#0D1B2A] rounded-md p-3 flex flex-col items-center justify-start
             w-full max-w-[420px] sm:max-w-full min-h-[420px] sm:min-h-[420px] shadow-lg overflow-hidden"
              >
                <img
                  src={atual.imagem}
                  alt={atual.titulo}
                  className="w-full h-[320px] sm:h-[400px] md:h-[380px] object-cover rounded-t-lg"
                />

                <article className="flex flex-col items-center justify-center text-white mt-4 px-4">
                  <h3 className="text-center text-2xl sm:text-3xl font-bold">
                    {atual.titulo}
                  </h3>
                  <p className="text-center text-lg sm:text-xl italic mt-3 mb-2">
                    {atual.descricao}
                  </p>
                  <a
                    href={atual.link}
                    target="_blank"
                    className="bg-[#DBDBDB] hover:bg-[#0D1B2A] hover:text-white text-[#0D1B2A] px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold inline-flex items-center gap-2 mt-3"
                  >
                    <FaWhatsapp size={20} className="sm:!text-white" />
                    Saiba Mais
                  </a>
                </article>

                {/* Indicadores */}
                <div className="flex gap-2 mt-4 z-10">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        i === index ? "bg-white" : "bg-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </motion.section>
            </AnimatePresence>
          </div>
          {/* Texto fixo */}
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
          </div>
        </section>
      </main>

      <Sobre />
      <Atuacao />
    </div>
  );
}
