import React, { useState } from "react";

export default function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de cadastro
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form
        className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-2 text-[#F29F05]">
          Cadastrar Produto
        </h2>
        <input
          type="text"
          placeholder="Nome do Produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        />
        <button
          type="submit"
          className="py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
