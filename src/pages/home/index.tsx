import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import doenca from "../../assets/pericia-med.jpg";
import aposentadoria from "../../assets/brunna.png";
import pensao from "../../assets/juliano.png";

import { Atuacao } from "../../pages/atuacao";
import { Sobre } from "../../pages/sobre";

export function Home() {
  const slides = [
    {
      titulo: "Auxílio-Acidente",
      descricao:
        "Assessoria completa para solicitação de auxílio junto ao INSS, garantindo seus direitos com eficiência.",
      imagem: doenca,
      link: "https://wa.me/62996293233?text=Olá, quero saber sobre auxílio-acidente.",
    },
    {
      titulo: "Aposentadoria por Idade",
      descricao:
        "Orientamos todo o processo para aposentadoria com tranquilidade e segurança.",
      imagem: aposentadoria,
      link: "https://wa.me/62996293233?text=Olá, quero informações sobre aposentadoria por idade.",
    },
    {
      titulo: "Pensão por Morte",
      descricao:
        "Apoio especializado para solicitação de pensão por morte e revisão de benefícios.",
      imagem: pensao,
      link: "https://wa.me/62996293233?text=Olá, quero informações sobre pensão por morte.",
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
             w-full max-w-[420px] sm:max-w-full min-h-[650px] sm:min-h-[500px] shadow-lg overflow-hidden"
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
        </section>
      </main>

      <Sobre />
      <Atuacao />
    </div>
  );
}
