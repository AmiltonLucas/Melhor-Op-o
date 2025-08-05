import React, { useState } from "react";
import cesta1 from "../Assets/cesta-1.png";
import cesta2 from "../Assets/cesta-2.png";
import cesta3 from "../Assets/cesta-3.png";
import FormularioModal from "./Formulario";

const produtos = [
  {
    img: cesta1,
    alt: "Cesta Econômica",
    tag: { text: "Econômica", bg: "bg-yellow-400", textColor: "text-white" },
    title: "Cesta Econômica",
    itens: [
      "Arroz, feijão, óleo, açúcar",
      "Macarrão, café, farinha",
      "Itens essenciais para o mês",
    ],
    preco: "R$ 79,90",
    destaque: {
      text: "Entrega rápida",
      bg: "bg-green-100",
      textColor: "text-green-700",
    },
    delay: 0.1,
  },
  {
    img: cesta2,
    alt: "Cesta Família",
    tag: { text: "Família", bg: "bg-blue-500", textColor: "text-white" },
    title: "Cesta Família",
    itens: [
      "Arroz, feijão, óleo, açúcar",
      "Leite, biscoito, molho de tomate",
      "Ideal para famílias de 4 pessoas",
    ],
    preco: "R$ 129,90",
    destaque: {
      text: "Mais vendida",
      bg: "bg-blue-100",
      textColor: "text-blue-700",
    },
    delay: 0.2,
  },
  {
    img: cesta3,
    alt: "Cesta Premium",
    tag: { text: "Premium", bg: "bg-green-500", textColor: "text-white" },
    title: "Cesta Premium",
    itens: [
      "Itens básicos + carnes, leite, frutas",
      "Produtos selecionados e frescos",
      "Para quem busca variedade",
    ],
    preco: "R$ 199,90",
    destaque: {
      text: "Completa",
      bg: "bg-yellow-100",
      textColor: "text-yellow-700",
    },
    delay: 0.3,
  },
];

export default function Produtos() {
  const [modalOpen, setModalOpen] = useState(false);

  // Função para sombra dourada no hover
  const handleMouseEnter = (e) => {
    e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(242, 187, 5, 0.53)";
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.boxShadow = "0 4px 24px 0 rgba(0,0,0,0.07)";
  };

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeInUp">
          Nossas Cestas Básicas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {produtos.map((produto, idx) => (
            <div
              key={produto.title}
              className="bg-white rounded-[1.25rem] transition-all relative overflow-hidden hover:-translate-y-2 hover:scale-[1.03] animate-fadeInUp"
              style={{
                animationDelay: `${produto.delay}s`,
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.07)",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={produto.img}
                  alt={produto.alt}
                  className="w-full h-56 object-cover"
                />
                <div
                  className={`absolute top-4 left-4 ${produto.tag.bg} ${produto.tag.textColor} px-3 py-1 rounded-full text-xs font-bold shadow`}
                >
                  {produto.tag.text}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{produto.title}</h3>
                <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
                  {produto.itens.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-yellow-600">
                    {produto.preco}
                  </span>
                  <span
                    className={`${produto.destaque.bg} ${produto.destaque.textColor} px-3 py-1 rounded-full text-xs font-semibold`}
                  >
                    {produto.destaque.text}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="w-full block text-center py-3 rounded-xl bg-yellow-500 text-white font-semibold shadow hover:bg-yellow-600 transition hover:scale-105"
                >
                  Comprar agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FormularioModal open={modalOpen} onClose={() => setModalOpen(false)} />
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