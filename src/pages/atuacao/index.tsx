import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export function Atuacao() {
  const areas = [
    {
      titulo: "Direito Trabalhista",
      texto:
        "Defendemos os direitos de trabalhadores e empregadores, buscando soluções justas em casos de demissões, verbas rescisórias, horas extras, assédio e demais relações de trabalho. Nosso compromisso é garantir equilíbrio e segurança nas relações trabalhistas.",
    },
    {
      titulo: "Direito Previdenciário",
      texto:
        "Atuamos na defesa dos direitos previdenciários, auxiliando nossos clientes na obtenção de benefícios como aposentadorias, pensões, auxílios e revisões de valores junto ao INSS. Trabalhamos para assegurar o acesso à proteção social de forma justa e eficaz.",
    },
    {
      titulo: "Direito de Família",
      texto:
        "Prestamos assistência jurídica sensível e responsável em questões familiares, como divórcios, guarda de filhos, pensão alimentícia e inventários. Buscamos sempre a solução mais equilibrada, preservando os vínculos e o bem-estar das partes envolvidas.",
    },
    {
      titulo: "Direito do Consumidor",
      texto:
        "Defendemos consumidores e empresas em litígios decorrentes de relações de consumo, como cobranças indevidas, vícios de produtos e serviços, e cláusulas abusivas. Nosso foco é garantir o cumprimento dos direitos previstos no Código de Defesa do Consumidor.",
    },
    {
      titulo: "Direito Criminal",
      texto:
        "Oferecemos defesa técnica em processos criminais, atuando com ética e dedicação em todas as fases do processo. Nosso objetivo é assegurar o pleno exercício da ampla defesa e a preservação dos direitos fundamentais do cidadão.",
    },
    {
      titulo: "Direito Civil",
      texto:
        "Atuamos em diversas questões que envolvem relações entre pessoas físicas e jurídicas, como contratos, indenizações, responsabilidade civil, locações e disputas patrimoniais. Nosso objetivo é garantir a proteção dos direitos e interesses de nossos clientes, buscando sempre soluções justas, seguras e eficazes em cada caso.",
    },
  ];

  return (
    <div
      className="bg-gradient-to-br from-[#1B263B] to-[#2C3E50]  w-full "
      id="area"
    >
      <h2 className="text-white md:text-3xl text-2xl text-center font-bold pt-5">
        Áreas de Atuação
      </h2>

      {/* Seção com animação de entrada em sequência */}
      <motion.section
        className="w-full md:h-300 py-8 px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15, // delay entre os cards
            },
          },
        }}
      >
        {areas.map((area, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" md:flex md:flex-col md:justify-center border border-[#1B263B] bg-[#0D1B2A]/60 backdrop-blur-sm hover:bg-[#0D1B2A]/80 transition-all duration-300 rounded-xl p-6 text-white shadow-md hover:shadow-xl"
          >
            <h2 className="font-bold text-2xl text-center mb-4 text-[#DBDBDB] tracking-wide">
              {area.titulo}
            </h2>
            <p className="font-medium text-justify leading-relaxed text-gray-200">
              {area.texto}
            </p>
            <div className="flex justify-center mt-8">
              <a
                href="https://wa.me/62996293233?text=Olá"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#DBDBDB]  hover:bg-[#0D1B2A] hover:text-white text-[#0D1B2A] font-semibold px-5 py-2.5 rounded-md transition-transform duration-300 hover:scale-105 shadow-lg"
              >
                <FaWhatsapp size={22} />
                Saiba Mais
              </a>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
