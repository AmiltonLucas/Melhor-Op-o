import React from "react";

const etapas = [
  {
    icon: "fa-cart-shopping",
    title: "1. Faça seu pedido",
    desc: "Escolha sua cesta pelo site ou WhatsApp e confirme o pedido.",
    btn: "Pedir agora",
  },
  {
    icon: "fa-pen-clip",
    title: "2. Separação com cuidado",
    desc: "Nossa equipe separa sua cesta com atenção e produtos de qualidade.",
    btn: "Ver itens",
  },
  {
    icon: "fa-truck",
    title: "3. Entrega Rápida",
    desc: "Receba sua cesta na porta de casa com segurança e pontualidade.",
    btn: "Ver frete",
  },
];

export default function ComoFunciona() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 animate-fadeInUp">
          Como funciona o nosso atendimento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {etapas.map((etapa, idx) => (
            <div
              key={etapa.title}
              className={`bg-white rounded-2xl shadow-[0_4px_24px_0_rgba(0,0,0,0.07)] p-8 transition-all relative hover:shadow-[0_8px_32px_0_rgba(242,159,5,0.15)] hover:-translate-y-2 hover:scale-[1.03] animate-fadeInUp group`}
              style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div className="flex justify-center mb-4">
                <span className="w-20 h-20 flex items-center justify-center bg-yellow-100 rounded-full transition-transform duration-400 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] group-hover:scale-110 group-hover:-rotate-6">
                  <i
                    className={`fa-solid ${etapa.icon} text-5xl text-gray-900`}
                  ></i>
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{etapa.title}</h3>
              <p className="text-sm mb-4">{etapa.desc}</p>
              <button className="mt-2 px-4 py-2 bg-yellow-400 text-white font-semibold rounded-full shadow hover:bg-yellow-500 transition hover:scale-105">
                {etapa.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Tailwind custom animation classes */}
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