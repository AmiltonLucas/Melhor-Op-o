import React from "react";
import SidebarMenu from "../Components/SidebarMenu";

export default function EditarProdutoPage() {
  // Aqui você pode buscar os dados do produto pelo id (mock)
  const produto = {
    id: 1,
    nome: "Notebook Dell",
    preco: 3500,
    foto: "https://source.unsplash.com/100x100/?laptop",
  };
  return (
    <div className="min-h-screen flex bg-white">
      <SidebarMenu />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Editar Produto</h1>
        <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto">
          <img
            src={produto.foto}
            alt={produto.nome}
            className="w-24 h-24 rounded-full object-cover mb-4 mx-auto border-4 border-blue-100"
          />
          <form className="flex flex-col gap-4">
            <input className="border p-2 rounded" defaultValue={produto.nome} />
            <input
              className="border p-2 rounded"
              defaultValue={produto.preco}
              type="number"
            />
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-grenn-600">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
