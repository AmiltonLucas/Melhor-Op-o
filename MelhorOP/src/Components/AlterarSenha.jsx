import React, { useState } from "react";

export default function AlterarSenha() {
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (novaSenha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }
    setErro("");
    setSucesso(true);
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow p-8 mt-12">
      <h2 className="text-2xl font-bold mb-4 text-center">Alterar Senha</h2>
      {sucesso ? (
        <div className="text-green-600 text-center">
          Senha alterada com sucesso!
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="password"
            className="border p-2 rounded"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            required
          />
          <input
            type="password"
            className="border p-2 rounded"
            placeholder="Confirmar nova senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
          {erro && <div className="text-red-500 text-sm">{erro}</div>}
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Alterar Senha
          </button>
        </form>
      )}
    </div>
  );
}
