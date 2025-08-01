import React from "react";
import SidebarMenu from "../Components/SidebarMenu";

export default function EditarVendedorPage() {
  // Aqui você pode buscar os dados do vendedor pelo id (mock)
  const vendedor = {
    id: 1,
    nome: "Ana Paula",
    email: "ana@email.com",
    foto: "https://randomuser.me/api/portraits/women/55.jpg",
  };
  return (
    <div className="min-h-screen flex bg-white">
      <SidebarMenu />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Editar Vendedor</h1>
        <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto">
          <img
            src={vendedor.foto}
            alt={vendedor.nome}
            className="w-24 h-24 rounded-full object-cover mb-4 mx-auto border-4 border-blue-100"
          />
          <form className="flex flex-col gap-4">
            <input
              className="border p-2 rounded"
              defaultValue={vendedor.nome}
            />
            <input
              className="border p-2 rounded"
              defaultValue={vendedor.email}
            />
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
