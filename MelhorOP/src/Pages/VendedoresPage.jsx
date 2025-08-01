import React, { useState } from "react";
import SidebarMenu from "../Components/SidebarMenu";
import CadastroVendedor from "../Components/CadastroVendedor";
import { Link } from "react-router-dom";

export default function VendedoresPage() {
  const [showCadastro, setShowCadastro] = useState(false);
  // Exemplo de vendedores mockados
  const vendedores = [
    {
      id: 1,
      nome: "Ana Paula",
      email: "ana@email.com",
      foto: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      id: 2,
      nome: "Bruno Costa",
      email: "bruno@email.com",
      foto: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    {
      id: 3,
      nome: "Fernanda Dias",
      email: "fernanda@email.com",
      foto: "https://randomuser.me/api/portraits/women/88.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex bg-white">
      <SidebarMenu />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Vendedores Cadastrados</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {vendedores.map((vendedor) => (
            <div
              key={vendedor.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
            >
              <img
                src={vendedor.foto}
                alt={vendedor.nome}
                className="w-20 h-20 rounded-full object-cover mb-2 border-4 border-blue-100"
              />
              <h2 className="font-semibold text-lg mb-1">{vendedor.nome}</h2>
              <p className="text-gray-500 text-sm mb-2">{vendedor.email}</p>
              <Link
                to={`/editar-vendedor/${vendedor.id}`}
                className="px-4 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm text-center"
              >
                Editar
              </Link>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowCadastro(true)}
          className="mb-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Cadastrar Vendedor
        </button>
        {showCadastro && <CadastroVendedor />}
      </div>
    </div>
  );
}
