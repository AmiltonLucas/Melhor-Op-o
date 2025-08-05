import React from "react";
import logo from "../Assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#F29F05] text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-8 border-b border-white/20">
          {/* Logo e descrição */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <img src={logo} alt="Logo Melhor Opção" className="w-12 h-12" />
              <span className="text-2xl font-extrabold tracking-tight">
                Melhor Opção
              </span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Produtos frescos, preços justos e atendimento de qualidade.<br />
              <span className="inline-block mt-2 text-xs bg-white/10 px-2 py-1 rounded">
                Desde 2020
              </span>
            </p>
          </div>
          {/* Navegação */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <i className="fa-solid fa-link"></i> Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="footer-link text-white no-underline border-b-2 border-transparent transition-all duration-200 hover:text-blue-600 hover:border-blue-600"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="footer-link text-white no-underline border-b-2 border-transparent transition-all duration-200 hover:text-blue-600 hover:border-blue-600"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="footer-link text-white no-underline border-b-2 border-transparent transition-all duration-200 hover:text-blue-600 hover:border-blue-600"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#formulario"
                  className="footer-link text-white no-underline border-b-2 border-transparent transition-all duration-200 hover:text-blue-600 hover:border-blue-600"
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>
          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <i className="fa-solid fa-phone"></i> Contato
            </h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone"></i> (81) 8946-7661
              </li>
            </ul>
          </div>
          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <i className="fa-solid fa-share-nodes"></i> Redes Sociais
            </h4>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://wa.me/558189467661"
                className="footer-social text-white transition-all duration-200 hover:text-[#25d366] hover:scale-110"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://instagram.com/"
                className="footer-social text-white transition-all duration-200 hover:text-[#e1306c] hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://facebook.com/"
                className="footer-social text-white transition-all duration-200 hover:text-blue-600 hover:scale-110"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
            <span className="block mt-4 text-xs text-white/60">
              Siga nossas redes para ofertas exclusivas!
            </span>
          </div>
        </div>
        {/* Direitos autorais */}
        <div className="pt-6 text-center text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>&copy; 2025 Melhor opção. Todos os direitos reservados.</span>
          <span className="flex items-center gap-1">
            <i className="fa-solid fa-shield-halved"></i> Site seguro
          </span>
        </div>
      </div>
      {/* Estilos extras para animação e hover */}
      <style>
        {`
        .footer-link {
          color: #fff;
          text-decoration: none;
          transition: color 0.2s, border-bottom 0.2s;
          border-bottom: 2px solid transparent;
        }
        .footer-link:hover {
          color: #2563eb;
          border-bottom: 2px solid #2563eb;
        }
        .footer-social {
          color: #fff;
          transition: color 0.2s, transform 0.2s;
        }
        .footer-social[aria-label="WhatsApp"]:hover {
          color: #25d366;
          transform: scale(1.1);
        }
        .footer-social[aria-label="Instagram"]:hover {
          color: #e1306c;
          transform: scale(1.1);
        }
        .footer-social[aria-label="Facebook"]:hover {
          color: #2563eb;
          transform: scale(1.1);
        }
        .animate-fadeInUp {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 0.7s cubic-bezier(0.68,-0.55,0.27,1.55) forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>
    </footer>
  );
}