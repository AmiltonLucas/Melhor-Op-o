import React from "react";
import bannerHero from "../Assets/Banner-Hero.jfif"; // ajuste o caminho se necessário

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative bg-yellow-500 text-white lg:pt-[14vh] h-[90vh] md:h-[60vh] flex items-center"
        style={{
          background: `url(${bannerHero}) center/cover no-repeat`,
        }}
      >
        <div className="absolute inset-0 bg-yellow-500/50"></div>
        <div className="relative container mx-auto px-6 text-center md:text-left md:flex items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold">
              Cesta Básica de Qualidade
            </h2>
            <p className="mt-4 text-lg">
              Alimentos essenciais com o melhor custo-benefício para famílias e
              empresas.
            </p>
            <a
              href="form.html"
              className="inline-block mt-6 bg-white text-yellow-600 font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-red-500 hover:text-white transition duration-300 hover:scale-105"
            >
              Faça seu pedido
            </a>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            {/* Espaço reservado para imagem ou conteúdo adicional */}
          </div>
        </div>
      </section>
    </>
  );
}
