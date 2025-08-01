import React from "react";
import { FaUserCircle, FaSignOutAlt, FaKey, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col items-center py-8 px-4 min-h-screen">
      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2">
          <FaUserCircle className="text-[#F29F05] text-5xl" />
        </div>
        <span className="text-lg font-semibold">Bem-vindo Batista!</span>
      </div>
      <nav className="flex flex-col gap-4 w-full">
        <a
          href="/admin"
          className="flex items-center gap-2 text-[#F29F05] font-semibold  hover:text-blue-500 hover:underline"
        >
          <FaGlobe /> Voltar ao painel
        </a>
        <a
          href="/"
          className="flex items-center gap-2 text-[#F29F05]  hover:text-blue-500 hover:underline"
        >
          <FaGlobe /> Ir para o site
        </a>
        <button
          className="flex items-center gap-2 text-[#F29F05] hover:text-blue-500 hover:underline"
          onClick={() => navigate("/alterar-senha")}
        >
          <FaKey /> Alterar senha
        </button>
        <button className="flex items-center gap-2 text-red-500 hover:underline mt-8">
          <FaSignOutAlt /> Encerrar sessão
        </button>
      </nav>

      <div className="mt-auto pt-8 w-full flex flex-col items-center">
        <span className="text-xs text-gray-400">© Front Dev Studio</span>
      </div>
    </aside>
  );
}
