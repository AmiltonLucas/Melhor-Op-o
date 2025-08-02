import React, { useState } from "react";

export default function CadastroVendedor() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de cadastro
  };

  return (
    <div className="min-h-screen grid place-items-center bg-white p-4 w-full">
      <form
        className="bg-white p-3 sm:p-8 rounded-xl shadow-lg flex flex-col gap-3 sm:gap-4 w-full max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-[#F29F05] text-center">
          Cadastrar Vendedor
        </h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="px-3 py-2 sm:px-4 sm:py-2 border border-green-200 rounded-lg focus:outline-none focus:border-green-400 text-sm sm:text-base"
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-3 py-2 sm:px-4 sm:py-2 border border-green-200 rounded-lg focus:outline-none focus:border-green-400 text-sm sm:text-base"
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
          className="px-3 py-2 sm:px-4 sm:py-2 border border-green-200 rounded-lg focus:outline-none focus:border-green-400 text-sm sm:text-base"
        />
        <button
          type="submit"
          className="py-2 sm:py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition text-sm sm:text-base"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
