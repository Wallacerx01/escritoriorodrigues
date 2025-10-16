import brunna from "../../assets/brunna.png";
import juliano from "../../assets/juliano.png";
import { motion } from "framer-motion";

export function Sobre() {
  return (
    <section id="sobre" className="w-full   bg-[#F9FAFB] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center ">
        <h2 className="text-[#0D1B2A] text-3xl md:text-4xl font-bold text-center mb-12">
          Especialistas
        </h2>

        <div className="grid gap-10 md:grid-cols-2 w-full ">
          {/* Card Brunna */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-6 md:p-10 flex flex-col items-center gap-6 hover:shadow-xl border border-gray-200"
          >
            <img
              src={brunna}
              alt="Foto da advogada Brunna"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-xl border-4 border-[#0D1B2A]"
            />
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#0D1B2A] mb-2">
                Dra. Brunna Rodrigues
              </h3>
              <h4 className="text-lg md:text-xl font-medium text-gray-800 mb-3">
                SÓCIO FUNDADOR
              </h4>
              <p className="text-gray-700 leading-relaxed md:text-lg">
                Graduado pela UNIFASAM-GO especialista em Direito
                Previdenciário, Direito do Trabalho e Direito de família.
              </p>
              <p className="mt-3 font-medium text-gray-800">OAB-GO 67.406</p>
            </div>
          </motion.div>

          {/* Card Juliano */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-6 md:p-10 flex flex-col items-center gap-6 hover:shadow-xl border border-gray-200"
          >
            <img
              src={juliano}
              alt="Foto do advogado Juliano"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-xl border-4 border-[#0D1B2A]"
            />
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#0D1B2A] mb-2">
                Dr. Juliano Rodrigues
              </h3>
              <h4 className="text-lg md:text-xl font-medium text-gray-800 mb-3">
                SÓCIO FUNDADOR
              </h4>
              <p className="text-gray-700 leading-relaxed md:text-lg">
                Graduado pela UNIFASAM-GO, Pós-graduado em Direito
                Previdenciário pela UNIFAVENI - MG, Direito do Trabalho e
                Direito de família.
              </p>
              <p className="mt-3 font-medium text-gray-800">OAB/GO Nº 63.901</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
