import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de login
    navigate("/admin-painel");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F29F00] to-[#F29F50]">
      <form
        className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-sm gap-4"
        onSubmit={handleSubmit}
      >
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-2">
          <FaUserCircle className="text-orange-500 text-6xl" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Login</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        />
        <div className="w-full flex justify-end text-xs mt-1">
          <Link to="/esqueci-senha" className="text-orange-500 hover:underline">
            Esqueci minha senha
          </Link>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-500 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
