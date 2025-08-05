import React, { useState } from "react";
import logo from "../Assets/logo.png";
import bannerModal from "../Assets/Banner-Modal.jpg"; // ajuste o caminho se necessário

export default function FormularioModal({ open, onClose }) {
  const [form, setForm] = useState({
    nome: "",
    apelido: "",
    cidade: "",
    rua: "",
    numero: "",
    referencia: "",
    telefone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const enviarWhatsApp = () => {
    const mensagem = `*Cadastro Nova Opção*%0A
Nome: ${form.nome}%0AApelido: ${form.apelido}%0ACidade: ${form.cidade}%0ARua: ${form.rua}, Nº ${form.numero}%0AReferência: ${form.referencia}%0ATelefone: ${form.telefone}`;
    window.open(`https://wa.me/558189467661?text=${mensagem}`, "_blank");
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white rounded-2xl shadow-xl border border-yellow-500 max-w-2xl w-full p-6 relative animate-fadeInUp overflow-hidden"
        style={{
          background: `url(${bannerModal}) center/cover no-repeat`,
        }}
      >
        <button
          className="absolute top-4 right-4 text-red-500 text-2xl font-bold hover:text-red-700 z-10"
          onClick={onClose}
          aria-label="Fechar"
        >
          &times;
        </button>
        <div className="mb-4 text-center relative z-10">
          <img src={logo} className="w-32 mx-auto py-4" alt="Logo" />
        </div>
        <form
          className="space-y-4 relative z-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-3 border-2 border-red-500 rounded-2xl py-4 p-2 bg-white/95">
            <input
              type="text"
              id="nome"
              placeholder="Nome"
              required
              className="border-b border-red-500 p-1 focus:outline-none bg-transparent text-black"
              value={form.nome}
              onChange={handleChange}
            />
            <input
              type="text"
              id="apelido"
              placeholder="Apelido"
              required
              className="border-b border-red-500 p-1 bg-transparent text-black"
              value={form.apelido}
              onChange={handleChange}
            />
            <input
              type="text"
              id="cidade"
              placeholder="Cidade"
              required
              className="border-b border-red-500 p-1 bg-transparent text-black"
              value={form.cidade}
              onChange={handleChange}
            />
            <div className="flex gap-2">
              <input
                type="text"
                id="rua"
                placeholder="Rua"
                required
                className="flex-1 border-b border-red-500 p-1 bg-transparent text-black"
                value={form.rua}
                onChange={handleChange}
              />
              <input
                type="text"
                id="numero"
                placeholder="Nº"
                required
                className="w-24 border-b border-red-500 p-1 bg-transparent text-black"
                value={form.numero}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              id="referencia"
              placeholder="Referência"
              required
              className="border-b border-red-500 p-1 bg-transparent text-black"
              value={form.referencia}
              onChange={handleChange}
            />
            <input
              type="text"
              id="telefone"
              placeholder="Telefone"
              required
              className="border-b border-red-500 p-1 bg-transparent text-black"
              value={form.telefone}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            onClick={enviarWhatsApp}
            className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Enviar para o WhatsApp
          </button>
        </form>
        <style>
          {`
          .animate-fadeInUp {
            opacity: 0;
            transform: translateY(40px);
            animation: fadeInUp 0.5s cubic-bezier(0.68,-0.55,0.27,1.55) forwards;
          }
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          `}
        </style>
      </div>
    </div>
  );
}
