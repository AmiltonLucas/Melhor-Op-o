import React, { useState } from "react";

export default function EsqueciSenha() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Recuperar Senha</h2>
        {enviado ? (
          <div className="text-green-600 text-center">
            Se o e-mail existir, enviaremos instruções para redefinir sua senha.
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              className="border p-2 rounded"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
