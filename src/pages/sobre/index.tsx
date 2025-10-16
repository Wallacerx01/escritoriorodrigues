import brunna from "../../assets/brunna.png";
import juliano from "../../assets/juliano.png";

import { motion } from "framer-motion";

export function Sobre() {
  return (
    <div className="bg-[#DBDBDB] ">
      <h2 className="text-[#0D1B2A] md:text-3xl text-2xl text-center font-bold pt-5">
        Especialistas
      </h2>
      <section
        id="sobre"
        className="px-6 md:px-20 py-10 bg-[#DBDBDB] w-full md:h-11/12 grid md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#F9FAFB] shadow-lg rounded-2xl p-6 md:p-10 mb-5 border border-gray-200 flex flex-col md:flex-col items-center justify-center gap-8 hover:shadow-xl"
        >
          <img
            src={brunna}
            alt="Foto da advogada Brunna"
            className="w-60 h-60 md:w-100 md:h-120 object-cover rounded-xl border-4 border-[#0D1B2A]"
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0D1B2A] mb-3 md:text-center">
              Dra. Brunna Rodrigues
            </h3>
            <h4 className="text-xl md:text-2xl mb-2 md:text-center">
              SÓCIO FUNDADOR
            </h4>
            <p className="text-gray-700 leading-relaxed md:text-xl md:max-w-11/12 md:text-center md:mt-10">
              Graduado pela UNIFASAM-GO especialista em Direito Previdenciário,
              Direito do Trabalho e Direito de família.
            </p>
            <div className="flex gap-1 justify-end items-center pt-1 ">
              <h4>OAB-GO 67.406</h4>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#F9FAFB] shadow-lg rounded-2xl p-6 md:p-10 mb-5 border border-gray-200 flex flex-col md:flex-col items-center justify-center gap-8 hover:shadow-xl"
        >
          <img
            src={juliano}
            alt="Foto do advogado Juliano"
            className="w-60 h-60 md:w-100 md:h-120 object-cover rounded-xl border-4 border-[#0D1B2A] "
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0D1B2A] mb-3 md:text-center">
              Dr. Juliano Rodrigues
            </h3>
            <h4 className="text-xl md:text-2xl mb-2 md:text-center">
              SÓCIO FUNDADOR
            </h4>
            <p className="text-gray-700 leading-relaxed md:text-xl md:max-w-11/12 md:text-center md:mt-10">
              Graduado pela UNIFASAM-GO, Pós - graduado em Direito
              previdenciário - pela unifaveni - MG, Direito do Trabalho e
              Direito de família.
            </p>
            <div className="flex gap-1 justify-end items-center pt-2">
              <h4>OAB/GO Nº 63.901</h4>
            </div>
          </div>
        </motion.section>
      </section>
    </div>
  );
}
