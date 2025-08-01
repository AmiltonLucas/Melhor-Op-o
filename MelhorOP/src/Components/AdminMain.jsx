import React from "react";
import {
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaUserTie,
  FaPlus,
  FaEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Certifique-se de que o caminho está correto

export default function AdminMain() {
  return (
    <main className="flex-1 p-0">
      {/* Banner de tela completa */}
      <div className="w-full h-[300px] md:h-[300px] bg-[#F29F05] flex items-center justify-center mb-8 relative">
        {/* Substitua o src abaixo pela logo da sua loja */}
        <img
          src={logo}
          alt="Logo da Loja"
          className="h-32 md:h-48 object-contain drop-shadow-xl mb-[6rem]"
        />
        <h1 className="absolute bottom-2 left-1/2 -translate-x-1/2 text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          Bem-vindo ao painel da Melhor Opção!
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        {/* Clientes */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <FaUsers className="text-[#F29F05] text-3xl mb-2" />
          <h2 className="font-semibold text-lg mb-4">Clientes</h2>
          <div className="flex gap-3">
            <Link
              to="/cadastro-cliente"
              className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <FaPlus /> Adicionar
            </Link>
            <Link
              to="/clientes"
              className="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              <FaEdit /> Modificar
            </Link>
          </div>
        </div>
        {/* Produtos */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <FaBox className="text-[#F29F05] text-3xl mb-2" />
          <h2 className="font-semibold text-lg mb-4">Produtos</h2>
          <div className="flex gap-3">
            <Link
              to="/cadastro-produto"
              className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <FaPlus /> Adicionar
            </Link>
            <Link
              to="/produtos"
              className="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              <FaEdit /> Modificar
            </Link>
          </div>
        </div>
        {/* Vendas */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <FaShoppingCart className="text-[#F29F05] text-3xl mb-2" />
          <h2 className="font-semibold text-lg mb-4">Vendas</h2>
          <div className="flex gap-3">
            <Link
              to="/cadastro-venda"
              className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <FaPlus /> Adicionar
            </Link>
            <Link
              to="/vendas"
              className="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              <FaEdit /> Modificar
            </Link>
          </div>
        </div>
        {/* Vendedores */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <FaUserTie className="text-[#F29F05] text-3xl mb-2" />
          <h2 className="font-semibold text-lg mb-4">Vendedores</h2>
          <div className="flex gap-3">
            <Link
              to="/cadastro-vendedor"
              className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <FaPlus /> Adicionar
            </Link>
            <Link
              to="/vendedores"
              className="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              <FaEdit /> Modificar
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
