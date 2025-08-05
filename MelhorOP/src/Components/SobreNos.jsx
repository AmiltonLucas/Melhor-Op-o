import React from "react";
import logo from "../Assets/logo.png";

export default function SobreNos() {
  return (
    <section id="sobre" className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-12">
        {/* Texto à esquerda */}
        <div className="md:w-1/2 text-center md:text-left animate-fadeInUp">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 text-3xl shadow-lg">
              <i className="fa-solid fa-users"></i>
            </span>
            <h2 className="text-4xl font-extrabold mb-0 tracking-tight">
              Sobre Nós
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <span className="font-semibold text-yellow-600">
              5+ anos de experiência
            </span>{" "}
            oferecendo cestas básicas de qualidade, preço justo e entrega rápida.<br />
            Atendemos famílias, empresas, projetos sociais e instituições com responsabilidade, carinho e compromisso.<br />
            <span className="block mt-4 text-base text-gray-600">
              Nossa missão é facilitar o acesso à alimentação essencial, com atendimento humanizado e produtos selecionados.
            </span>
          </p>
          <ul className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
            <li className="bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold shadow">
              Entrega rápida
            </li>
            <li className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow">
              Atendimento humanizado
            </li>
            <li className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold shadow">
              Produtos selecionados
            </li>
          </ul>
        </div>
        {/* Imagem à direita */}
        <div className="md:w-1/2 flex justify-center animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          <div className="relative w-full max-w-md">
            <img
              src={logo}
              alt="Logo Melhor Opção"
              className="w-full rounded-2xl shadow-2xl border-4 border-yellow-100"
            />
            <div
              className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg shadow text-yellow-700 font-bold text-sm flex items-center gap-2 animate-fadeInUp"
              style={{ animationDelay: "0.3s" }}
            >
              <i className="fa-solid fa-star"></i> 100% satisfação dos clientes
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
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
    </section>
  );
}