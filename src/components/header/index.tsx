import logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="flex bg-gradient-to-br from-[#1B263B] to-[#2C3E50]  w-full md:h-40 h-30 md:justify-around items-center justify-between">
      <a href="#inicio">
        <img
          className="md:h-40 w-auto h-20 hover:scale-110 duration-200"
          src={logo}
          alt="logo do escritorio "
        />
      </a>
      <nav className="hidden md:block">
        <ul className="flex gap-10 font-medium text-white text-xl">
          <li className="hover:text-[#DBDBDB] hover:scale-110 transition-all duration-300">
            <a href="#inicio">Inicio</a>
          </li>
          <li className="hover:text-[#DBDBDB] hover:scale-110 transition-all duration-300">
            <a href="#area">Áreas de atuação</a>
          </li>
          <li className="hover:text-[#DBDBDB] hover:scale-110 transition-all duration-300">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="hover:text-[#DBDBDB] hover:scale-110 transition-all duration-300">
            <a href="#footer">Contato</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => setMenuAberto(true)}
        className="md:hidden absolute right-4 text-white"
      >
        <RxHamburgerMenu size={28} />
      </button>

      {menuAberto && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuAberto(false)}
        >
          <div
            className="absolute top-0 right-0 w-64 h-full bg-[#0D1B2A] shadow-lg p-5 flex flex-col gap-5 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão fechar */}
            <button
              onClick={() => setMenuAberto(false)}
              className="self-end text-white"
            >
              <IoMdClose size={28} />
            </button>

            {/* Links do drawer */}
            <nav>
              <ul className="flex flex-col gap-4 text-lg">
                <li>
                  <a href="#inicio">
                    <button
                      onClick={() => {
                        setMenuAberto(false);
                      }}
                    >
                      Início
                    </button>
                  </a>
                </li>
                <li>
                  <a href="#area">
                    <button
                      onClick={() => {
                        setMenuAberto(false);
                      }}
                    >
                      Áreas de Atuação
                    </button>
                  </a>
                </li>
                <li>
                  <a href="#sobre">
                    <button
                      onClick={() => {
                        setMenuAberto(false);
                      }}
                    >
                      Sobre
                    </button>
                  </a>
                </li>
                <li>
                  <a href="#footer">
                    <button
                      onClick={() => {
                        setMenuAberto(false);
                      }}
                    >
                      Contato
                    </button>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
